#!/usr/bin/env bash

## browser-privacy-guide user-overrides.js updater for macOS and Linux
## Credit: arkenfox user.js updater for macOS and Linux https://github.com/arkenfox/user.js/blob/master/updater.sh

# Check if running as root
if [ "${EUID:-"$(id -u)"}" -eq 0 ]; then
	printf "You shouldn't run this with elevated privileges (such as with doas/sudo).\n"
	exit 1
fi

# shellcheck disable=2155
readonly CURRDIR=$(pwd)

SCRIPT_FILE=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || greadlink -f "${BASH_SOURCE[0]}" 2>/dev/null)
[ -z "$SCRIPT_FILE" ] && SCRIPT_FILE=${BASH_SOURCE[0]}
# shellcheck disable=2155
readonly SCRIPT_DIR=$(dirname "${SCRIPT_FILE}")


#########################
#    Base variables     #
#########################

# Colors used for printing
RED='\033[0;31m'
BLUE='\033[0;34m'
BBLUE='\033[1;34m'
GREEN='\033[0;32m'
ORANGE='\033[0;33m'
NC='\033[0m' # No Color

# Argument defaults
UPDATE='check'
CONFIRM='yes'
OVERRIDE='custom-overrides.js'
BACKUP='multiple'
COMPARE=false
SKIPCOMBINE=false
VIEW=false
PROFILE_PATH=false

# Download method priority: curl -> wget
DOWNLOAD_METHOD=''
if command -v curl >/dev/null; then
  DOWNLOAD_METHOD='curl --max-redirs 3 -so'
elif command -v wget >/dev/null; then
  DOWNLOAD_METHOD='wget --max-redirect 3 --quiet -O'
else
  echo -e "${RED}This script requires curl or wget.\nProcess aborted${NC}"
  exit 1
fi


show_banner() {
  echo -e "${BBLUE}
                ############################################################################
                ####                                                                    ####
                ####                       browser-privacy-guide                        ####
                ####           user-overrides.js updater for macOS and Linux            ####
                ####                      Maintained by @Willie169                      ####
                ####       Credit: arkenfox user.js updater for macOS and Linux         ####
                ####                                                                    ####
                ############################################################################"
  echo -e "${NC}\n"
}

#########################
#      Arguments        #
#########################

usage() {
  echo
  echo -e "${BLUE}Usage: $0 [-bcdhlnsuv] [-p PROFILE] [-o OVERRIDE]${NC}" 1>&2  # Echo usage string to standard error
  echo -e "
Optional Arguments:
    -h           Show this help message and exit.
    -p PROFILE   Path to your Firefox profile (if different than the dir of this script)
                 IMPORTANT: If the path contains spaces, wrap the entire argument in quotes.
    -l           Choose your Firefox profile from a list
    -u           Update overrides-updater.sh and execute silently.  Do not seek confirmation.
    -d           Do not look for updates to overrides-updater.sh.
    -s           Silently update user-overrides.js.  Do not seek confirmation.
    -b           Only keep one backup of each file.
    -c           Create a diff file comparing old and new user-overrides.js within useroverridesjs_diffs.
    -o OVERRIDE  Filename or path to overrides file (if different than custom-overrides.js).
                 If used with -p, paths should be relative to PROFILE or absolute paths
                 If given a directory, all files inside will be appended recursively.
                 You can pass multiple files or directories by passing a comma separated list.
                     Note: If a directory is given, only files inside ending in the extension .js are appended
                     IMPORTANT: Do not add spaces between files/paths.  Ex: -o file1.js,file2.js,dir1
                     IMPORTANT: If any file/path contains spaces, wrap the entire argument in quotes.
                         Ex: -o \"override folder\"
    -n           Do not combine files to user-overrides.js.
    -v           Open the resulting user-overrides.js file."
  echo
  exit 1
}

#########################
#     File Handling     #
#########################

download_file() { # expects URL as argument ($1)
  declare -r tf=$(mktemp)

  $DOWNLOAD_METHOD "${tf}" "$1" &>/dev/null && echo "$tf" || echo '' # return the temp-filename or empty string on error
}

open_file() { # expects one argument: file_path
  if [ "$(uname)" == 'Darwin' ]; then
    open "$1"
  elif [ "$(uname -s | cut -c -5)" == "Linux" ]; then
    xdg-open "$1"
  else
    echo -e "${RED}Error: Sorry, opening files is not supported for your OS.${NC}"
  fi
}

readIniFile() { # expects one argument: absolute path of profiles.ini
  declare -r inifile="$1"

  # tempIni will contain: [ProfileX], Name=, IsRelative= and Path= (and Default= if present) of the only (if) or the selected (else) profile
  if [ "$(grep -c '^\[Profile' "${inifile}")" -eq "1" ]; then ### only 1 profile found
    tempIni="$(grep '^\[Profile' -A 4 "${inifile}")"
  else
    echo -e "Profiles found:\n––––––––––––––––––––––––––––––"
    ## cmd-substitution to strip trailing newlines and in quotes to keep internal ones:
    # shellcheck disable=2005
    echo "$(grep --color=never -E 'Default=[^1]|\[Profile[0-9]*\]|Name=|Path=|^$' "${inifile}")"
    echo '––––––––––––––––––––––––––––––'
    read -p 'Select the profile number ( 0 for Profile0, 1 for Profile1, etc ) : ' -r
    echo -e "\n"
    if [[ $REPLY =~ ^(0|[1-9][0-9]*)$ ]]; then
      tempIni="$(grep "^\[Profile${REPLY}" -A 4 "${inifile}")" || {
        echo -e "${RED}Profile${REPLY} does not exist!${NC}" && exit 1
      }
    else
      echo -e "${RED}Invalid selection!${NC}" && exit 1
    fi
  fi

  # extracting 0 or 1 from the "IsRelative=" line
  declare -r pathisrel=$(sed -n 's/^IsRelative=\([01]\)$/\1/p' <<< "${tempIni}")

  # extracting only the path itself, excluding "Path="
  PROFILE_PATH=$(sed -n 's/^Path=\(.*\)$/\1/p' <<< "${tempIni}")
  # update global variable if path is relative
  [[ ${pathisrel} == "1" ]] && PROFILE_PATH="$(dirname "${inifile}")/${PROFILE_PATH}"
}

getProfilePath() {
  declare -r f1=~/Library/Application\ Support/Firefox/profiles.ini
  declare -r f2=~/.mozilla/firefox/profiles.ini

  if [ "$PROFILE_PATH" = false ]; then
    PROFILE_PATH="$SCRIPT_DIR"
  elif [ "$PROFILE_PATH" = 'list' ]; then
    if [[ -f "$f1" ]]; then
      readIniFile "$f1" # updates PROFILE_PATH or exits on error
    elif [[ -f "$f2" ]]; then
      readIniFile "$f2"
    else
      echo -e "${RED}Error: Sorry, -l is not supported for your OS${NC}"
      exit 1
    fi
  #else
    # PROFILE_PATH already set by user with -p
  fi
}

#################################
#  Update overrides-updater.sh  #
#################################

# Update overrides-updater.sh
# Default: Check for update, if available, ask user if they want to execute it
# Args:
#   -d: New version will not be looked for and update will not occur
#   -u: Check for update, if available, execute without asking
update_updater() {
  [ "$UPDATE" = 'no' ] && return 0 # User signified not to check for updates

  declare -r tmpfile="$(download_file 'https://raw.githubusercontent.com/Willie169/browser-privacy-guide/main/overrides-updater.sh')"
  [ -z "${tmpfile}" ] && echo -e "${RED}Error! Could not download overrides-updater.sh${NC}" && return 1 # check if download failed

  if [ "$UPDATE" = 'check' ]; then
    echo -e "${RED}Update and execute overrides-updater.sh Y/N?${NC}"
    read -p "" -n 1 -r
    echo -e "\n\n"
    [[ $REPLY =~ ^[Yy]$ ]] || return 0   # Update available, but user chooses not to update
  fi

  mv "${tmpfile}" "$SCRIPT_FILE"
  chmod u+x "$SCRIPT_FILE"
  "$SCRIPT_FILE" "$@" -d
  exit 0
}

##############################
#  Update user-overrides.js  #
##############################

add_override() {
  input=$1
  if [ -f "$input" ]; then
    echo "" >> user-overrides.js
    cat "$input" >> user-overrides.js
    echo -e "Status: ${GREEN}Override file appended:${NC} ${input}"
  elif [ -d "$input" ]; then
    SAVEIFS=$IFS
    IFS=$'\n\b' # Set IFS
    # shellcheck disable=2125
    FILES="${input}"/*.js
    for f in $FILES
    do
      add_override "$f"
    done
    IFS=$SAVEIFS # restore $IFS
  else
    echo -e "${ORANGE}Warning: Could not find override file:${NC} ${input}"
  fi
}

remove_comments() { # expects 2 arguments: from-file and to-file
  sed -e '/^\/\*.*\*\/[[:space:]]*$/d' -e '/^\/\*/,/\*\//d' -e 's|^[[:space:]]*//.*$||' -e '/^[[:space:]]*$/d' -e 's|);[[:space:]]*//.*|);|' "$1" > "$2"
}

# Applies latest version of Peskyfox.js, arkenfox-overrides.js, Peskyfox-overrides.js, extra-overrides.js, and any custom overrides
update_userjs() {
  declare -r peskyfox="$(download_file 'https://raw.githubusercontent.com/yokoffing/Betterfox/refs/heads/main/Peskyfox.js')"
  [ -z "${peskyfox}" ] && echo -e "${RED}Error! Could not download Peskyfox.js${NC}" && return 1 # check if download failed
  declare -r arkenfoxoverrides="$(download_file 'https://raw.githubusercontent.com/Willie169/browser-privacy-guide/main/arkenfox-overrides.js')"
  [ -z "${arkenfoxoverrides}" ] && echo -e "${RED}Error! Could not download arkenfox-overrides.js${NC}" && return 1 # check if download failed
  declare -r peskyfoxoverrides="$(download_file 'https://raw.githubusercontent.com/Willie169/browser-privacy-guide/main/Peskyfox-overrides.js')"
  [ -z "${peskyfoxoverrides}" ] && echo -e "${RED}Error! Could not download Peskyfox-overrides.js${NC}" && return 1 # check if download failed
  declare -r extraoverrides="$(download_file 'https://raw.githubusercontent.com/Willie169/browser-privacy-guide/main/extra-overrides.js')"
  [ -z "${extraoverrides}" ] && echo -e "${RED}Error! Could not download extra-overrides.js${NC}" && return 1 # check if download failed

  echo -e "Please observe the following information:
    Firefox profile:  ${ORANGE}$(pwd)${NC}
    Downloaded: Peskyfox.js, arkenfox-overrides.js, Peskyfox-overrides.js, and extra-overrides.js\n\n"

  if [ "$CONFIRM" = 'yes' ]; then
    echo -e "This script will update and compose the latest user-overrides.js file with all custom configurations appended. ${RED}Continue Y/N? ${NC}"
    read -p "" -n 1 -r
    echo -e "\n"
    if ! [[ $REPLY =~ ^[Yy]$ ]]; then
      echo -e "${RED}Process aborted${NC}"
      rm "$peskyfox" "$arkenfoxoverrides" "$peskyfoxoverrides" "$extraoverrides"
      return 1
    fi
  fi

  # Copy a version of user-overrides.js to diffs folder for later comparison
  if [ "$COMPARE" = true ]; then
    mkdir -p useroverridesjs_diffs
    cp user-overrides.js useroverridesjs_diffs/past_user-overrides.js &>/dev/null
  fi

  # backup Peskyfox.js, arkenfox-overrides.js, Peskyfox-overrides.js, extra-overrides.js, and user-overrides.js
  mkdir -p useroverridesjs_backups
  # shellcheck disable=2155
  local peskyfoxbakname="useroverridesjs_backups/Peskyfox.js.backup.$(date +"%Y-%m-%d_%H%M")"
  [ "$BACKUP" = 'single' ] && peskyfoxbakname='userjs_backups/Peskyfox.js.backup'
  cp Peskyfox.js "$peskyfoxbakname" &>/dev/null
  # shellcheck disable=2155
  local arkenfoxoverridesbakname="useroverridesjs_backups/arkenfox-overrides.js.backup.$(date +"%Y-%m-%d_%H%M")"
  [ "$BACKUP" = 'single' ] && arkenfoxoverridesbakname='userjs_backups/arkenfox-overrides.js.backup'
  cp arkenfox-overrides.js "$arkenfoxoverridesbakname" &>/dev/null
  # shellcheck disable=2155
  local peskyfoxoverridesbakname="useroverridesjs_backups/Peskyfox-overrides.js.backup.$(date +"%Y-%m-%d_%H%M")"
  [ "$BACKUP" = 'single' ] && peskyfoxoverridesbakname='userjs_backups/Peskyfox-overrides.js.backup'
  cp Peskyfox-overrides.js "$peskyfoxoverridesbakname" &>/dev/null
  # shellcheck disable=2155
  local extraoverridesbakname="useroverridesjs_backups/extra-overrides.js.backup.$(date +"%Y-%m-%d_%H%M")"
  [ "$BACKUP" = 'single' ] && extraoverridesbakname='userjs_backups/extra-overrides.js.backup'
  cp extra-overrides.js "$extraoverridesbakname" &>/dev/null
  # shellcheck disable=2155
  local useroverridesbakname="useroverridesjs_backups/user-overrides.js.backup.$(date +"%Y-%m-%d_%H%M")"
  [ "$BACKUP" = 'single' ] && useroverridesbakname='userjs_backups/user-overrides.js.backup'
  cp user-overrides.js "$useroverridesbakname" &>/dev/null

  mv "$peskyfox" Peskyfox.js
  mv "$arkenfoxoverrides" arkenfox-overrides.js
  mv "$peskyfoxoverrides" Peskyfox-overrides.js
  mv "$extraoverrides" extra-overrides.js
  cat Peskyfox.js arkenfox-overrides.js Peskyfox-overrides.js extra-overrides.js > user-overrides.js

  # apply custom overrides
  if [ "$SKIPCOMBINE" = false ]; then
    while IFS=',' read -ra FILES; do
      for FILE in "${FILES[@]}"; do
        add_override "$FILE"
      done
    done <<< "$OVERRIDE"
  fi

  # create diff
  if [ "$COMPARE" = true ]; then
    pastuseroverridesjs='useroverridesjs_diffs/past_user-overrides.js'
    past_nocomments='useroverridesjs_diffs/past_user-overrides.js'
    current_nocomments='useroverridesjs_diffs/current_user-overrides.js'

    remove_comments "$pastuseroverridesjs" "$past_nocomments"
    remove_comments user-overrides.js "$current_nocomments"

    diffname="useroverridesjs_diffs/diff_$(date +"%Y-%m-%d_%H%M").txt"
    diff=$(diff -w -B -U 0 "$past_nocomments" "$current_nocomments")
    if [ -n "$diff" ]; then
      echo "$diff" > "$diffname"
      echo -e "Status: ${GREEN}A diff file was created:${NC} ${PWD}/${diffname}"
    else
      echo -e "Info: ${ORANGE}Your new user-overrides.js file appears to be identical.  No diff file was created.${NC}"
    fi
    rm "$past_nocomments" "$current_nocomments" "$pastuseroverridesjs" &>/dev/null
  fi

  [ "$VIEW" = true ] && open_file "${PWD}/user-overrides.js"
}

#########################
#        Execute        #
#########################

if [ $# != 0 ]; then
  # Display usage if first argument is -help or --help
  if [ "$1" = '--help' ] || [ "$1" = '-help' ]; then
    usage
  else
    while getopts ":hp:ludsno:bcv" opt; do
      case $opt in
        h)
          usage
          ;;
        p)
          PROFILE_PATH=${OPTARG}
          ;;
        l)
          PROFILE_PATH='list'
          ;;
        u)
          UPDATE='yes'
          ;;
        d)
          UPDATE='no'
          ;;
        s)
          CONFIRM='no'
          ;;
        n)
          SKIPCOMBINE=true
          ;;
        o)
          OVERRIDE=${OPTARG}
          ;;
        b)
          BACKUP='single'
          ;;
        c)
          COMPARE=true
          ;;
        v)
          VIEW=true
          ;;
        \?)
          echo -e "${RED}\n Error! Invalid option: -$OPTARG${NC}" >&2
          usage
          ;;
        :)
          echo -e "${RED}Error! Option -$OPTARG requires an argument.${NC}" >&2
          exit 2
          ;;
      esac
    done
  fi
fi

show_banner
update_updater "$@"

getProfilePath # updates PROFILE_PATH or exits on error
cd "$PROFILE_PATH" || exit 1

# Check if any files have the owner as root/wheel.
if [ -n "$(find ./ -user 0)" ]; then
	printf 'It looks like this script was previously run with elevated privileges,
you will need to change ownership of the following files to your user:\n'
	find . -user 0
    # shellcheck disable=2164
	cd "$CURRDIR"
	exit 1
fi

update_userjs

# shellcheck disable=2164
cd "$CURRDIR"
