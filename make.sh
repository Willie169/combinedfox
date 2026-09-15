#!/usr/bin/env bash

rm -f Peskyfox.js user.js prefsCleaner.sh prefsCleaner.bat
wget https://github.com/yokoffing/Betterfox/raw/refs/heads/main/Peskyfox.js
wget https://raw.githubusercontent.com/arkenfox/user.js/refs/heads/Thorin-Oakenpants-patch-1/user.js
test -f user.js || wget https://github.com/arkenfox/user.js/raw/refs/heads/master/user.js
cat Peskyfox.js arkenfox-overrides.js Peskyfox-overrides.js extra-overrides.js >>user.js
wget https://raw.githubusercontent.com/arkenfox/user.js/refs/heads/Thorin-Oakenpants-patch-1/prefsCleaner.sh
test -f prefsCleaner.sh || wget https://github.com/arkenfox/user.js/raw/refs/heads/master/prefsCleaner.sh
chmod +x prefsCleaner.sh
wget https://raw.githubusercontent.com/arkenfox/user.js/refs/heads/Thorin-Oakenpants-patch-1/prefsCleaner.bat
test -f prefsCleaner.bat || wget https://github.com/arkenfox/user.js/raw/refs/heads/master/prefsCleaner.bat
