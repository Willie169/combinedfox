
/****************************************************************************
 * Peskyfox                                                                 *
 * "Aquila non capit muscas"                                                *
 * priority: remove annoyances                                              *
 * version: 152                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * credit: Some prefs are reproduced and adapted from the arkenfox project  *
 * credit urL: https://github.com/arkenfox/user.js                          *
 ***************************************************************************/

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/

// PREF: disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN

// PREF: disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Personalized Extension Recommendations in about:addons and AMO
// [NOTE] This pref has no effect when Health Reports are disabled.
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);

// PREF: disable Firefox from asking to set as the default browser
// [1] https://github.com/yokoffing/Betterfox/issues/166
user_pref("browser.shell.checkDefaultBrowser", false);

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

// PREF: tab and about:config warnings
//user_pref("browser.tabs.warnOnClose", false); // DEFAULT [FF94+]
//user_pref("browser.tabs.warnOnCloseOtherTabs", true); // DEFAULT
//user_pref("browser.tabs.warnOnOpen", true); // DEFAULT
user_pref("browser.aboutConfig.showWarning", false);

// PREF: disable welcome notices
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens
    //user_pref("startup.homepage_welcome_url", "");
    //user_pref("startup.homepage_welcome_url.additional", "");
    //user_pref("startup.homepage_override_url", ""); // What's New page after updates

// PREF: disable "What's New" toolbar icon [FF69+]
//user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// PREF: new profile switcher
user_pref("browser.profiles.enabled", true);

// PREF: use native title bar buttons [LINUX]
// [1] https://github.com/yokoffing/Betterfox/issues/320
//user_pref("widget.gtk.non-native-titlebar-buttons.enabled", true);

// PREF: disable search engine switcher in the URL bar [FF136+]
// WARNING: Hides "Quick Actions" suggestions.
//user_pref("browser.urlbar.scotchBonnet.enableOverride", false);

/****************************************************************************
 * SECTION: THEME ADJUSTMENTS                                              *
****************************************************************************/

// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);

// PREF: preferred color scheme for websites
// [SETTING] General>Language and Appearance>Website appearance
// By default, color scheme matches the theme of your browser toolbar (3).
// Set this pref to choose Dark on sites that support it (0) or Light (1).
// Before FF95, the pref was 2, which determined site color based on OS theme.
// Dark (0), Light (1), System (2), Browser (3) [DEFAULT FF95+]
// [1] https://www.reddit.com/r/firefox/comments/rfj6yc/how_to_stop_firefoxs_dark_theme_from_overriding/hoe82i5/?context=3
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// PREF: disable always using dark theme for private browsing windows [FF106+]
//user_pref("browser.theme.dark-private-windows", false);

// PREF: prevent private windows being separate from normal windows in taskbar [WINDOWS] [FF106+]
user_pref("browser.privateWindowSeparation.enabled", false);

// PREF: show search bar [FF122+]
// Mozilla has removed the search bar option from the settings window.
//user_pref("browser.search.widget.inNavBar", true);

// PREF: new tab page wallpapers
//user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true); // [DEFAULT FF132+]

// PREF: browser scrollbar styles
// 0 - Default
// 1 - Thin and round, more like Chromium ones
// 2 - Thinner than 1
// 3 - Even thinner than 1
// 4 - Very bold and square
//user_pref("widget.non-native-theme.scrollbar.style", 0); // [DEFAULT]

/****************************************************************************
 * SECTION: AI                                                              *
****************************************************************************/
// PREF: AI default controls
// [1] https://blog.mozilla.org/en/firefox/how-to-use-ai-controls/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);

// PREF: Translations
//user_pref("browser.ai.control.translations", "blocked");

// PREF: Image alt text in Nightly PDF viewer
//user_pref("browser.ai.control.pdfjsAltText", "blocked");

// PREF: Tab group suggestions
// [1] https://support.mozilla.org/kb/how-use-ai-enhanced-tab-groups
//user_pref("browser.ai.control.smartTabGroups", "blocked");
user_pref("browser.tabs.groups.smart.enabled", false);

// PREF: Key points in link previews
//user_pref("browser.ai.control.linkPreviewKeyPoints", "blocked");
user_pref("browser.ml.linkPreview.enabled", false);

// PREF: Chatbot in sidebar
//user_pref("browser.ai.control.sidebarChatbot", "blocked");
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);

/****************************************************************************
 * SECTION: TRANSLATIONS                                                    *
****************************************************************************/

// PREF: Firefox Translations [FF118+]
// Automated translation of web content is done locally in Firefox, so that
// the text being translated does not leave your machine.
// [ABOUT] Visit about:translations to translate your own text as well.
// [1] https://blog.mozilla.org/en/mozilla/local-translation-add-on-project-bergamot/
// [2] https://blog.nightly.mozilla.org/2023/06/01/firefox-translations-and-other-innovations-these-weeks-in-firefox-issue-139/
// [3] https://www.ghacks.net/2023/08/02/mozilla-firefox-117-beta-brings-an-automatic-language-translator-for-websites-and-it-works-offline/
//user_pref("browser.translations.enable", true); // DEFAULT
    //user_pref("browser.translations.autoTranslate", true);

/****************************************************************************
 * SECTION: FULLSCREEN NOTICE                                               *
****************************************************************************/

// PREF: remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// PREF: disable fullscreen notice
// [NOTE] Adjust to a sensible value, like 1250, if you have security concerns.
//user_pref("full-screen-api.warning.timeout", 0); // default=3000; alt=1250
//user_pref("full-screen-api.warning.delay", -1); // default=500

/****************************************************************************
 * SECTION: FONT APPEARANCE                                                 *
****************************************************************************/

// PREF: smoother font
// [1] https://reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
//user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);

// PREF: use DirectWrite everywhere like Chrome [WINDOWS]
// [1] https://kb.mozillazine.org/Thunderbird_6.0,_etc.#Font_rendering_and_performance_issues
// [2] https://reddit.com/r/firefox/comments/wvs04y/comment/ilklzy1/?context=3
//user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
//user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
//user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", ""); // DEFAULT FF135+
//user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
// Some users find these helpful:
    //user_pref("gfx.font_rendering.cleartype_params.gamma", 1750);
    //user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
    //user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);

// PREF: use macOS Appearance Panel text smoothing setting when rendering text [macOS]
//user_pref("gfx.use_text_smoothing_setting", true);

/****************************************************************************
 * SECTION: URL BAR                                                         *
****************************************************************************/

// PREF: minimize URL bar suggestions (bookmarks, history, open tabs)
// Dropdown options in the URL bar:
//user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.bookmark", true); // DEFAULT
//user_pref("browser.urlbar.suggest.clipboard", false);
//user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.engines", false);
    //user_pref("browser.urlbar.suggest.searches", false);
//user_pref("browser.urlbar.quickactions.enabled", false);
//user_pref("browser.urlbar.suggest.weather", true); // DEFAULT [FF108]
    //user_pref("browser.urlbar.weather.ignoreVPN", false); // DEFAULT
//user_pref("browser.urlbar.suggest.calculator", true); // [DEFAULT FF137+]
//user_pref("browser.urlbar.unitConversion.enabled", true); // [DEFAULT FF141+]

// PREF: disable dropdown suggestions with empty query
//user_pref("browser.urlbar.suggest.topsites", false);

// PREF: disable urlbar trending search suggestions [FF118+]
// [SETTING] Search>Search Suggestions>Show trending search suggestions (FF119)
user_pref("browser.urlbar.trending.featureGate", false);
//user_pref("browser.urlbar.suggest.trending", false);

// PREF: disable urlbar suggestions
//user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
//user_pref("browser.urlbar.amp.featureGate", false); // [FF141+] adMarketplace
//user_pref("browser.urlbar.fakespot.featureGate", false); // [FF130+] [DEFAULT: false]
//user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
//user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
//user_pref("browser.urlbar.wikipedia.featureGate", false); // [FF141+]
//user_pref("browser.urlbar.clipboard.featureGate", false); // [FF118+] [DEFAULT: true FF125+]
//user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+] [DEFAULT: false]

// PREF: disable recent searches [FF120+]
// [NOTE] Recent searches are cleared with history.
// [1] https://support.mozilla.org/kb/search-suggestions-firefox
//user_pref("browser.urlbar.recentsearches.featureGate", false);

// PREF: disable tab-to-search [FF85+]
// Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
// [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines
//user_pref("browser.urlbar.suggest.engines", false);

// PREF: Adaptive History Autofill
// [1] https://docs.google.com/document/u/1/d/e/2PACX-1vRBLr_2dxus-aYhZRUkW9Q3B1K0uC-a0qQyE3kQDTU3pcNpDHb36-Pfo9fbETk89e7Jz4nkrqwRhi4j/pub
//user_pref("browser.urlbar.autoFill", true); // [DEFAULT]
//user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);

// PREF: adjust the amount of Address bar / URL bar dropdown results
// This value controls the total number of entries to appear in the location bar dropdown.
// [NOTE] Items (bookmarks/history/openpages) with a high "frequency"/"bonus" will always
// be displayed (no we do not know how these are calculated or what the threshold is),
// and this does not affect the search by search engine suggestion.
// disable=0
//user_pref("browser.urlbar.maxRichResults", 5); // default=10

// PREF: text fragments
// [WARNING] Enabling can cause tab crashes [4]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1753933#c6
// [2] https://developer.mozilla.org/en-US/docs/Web/Text_fragments
// [3] https://web.dev/articles/text-fragments
// [4] https://github.com/yokoffing/Betterfox/issues/397
//user_pref("dom.text_fragments.enabled", true); // [DEFAULT]
//user_pref("dom.text_fragments.create_text_fragment.enabled", true);

/****************************************************************************
 * SECTION: AUTOPLAY                                                        *
****************************************************************************/

// PREF: do not autoplay media audio
// [NOTE] You can set exceptions under site permissions
// [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
//user_pref("media.autoplay.default", 1); // DEFAULT
//user_pref("media.block-autoplay-until-in-foreground", true); // DEFAULT

// PREF: disable autoplay of HTML5 media if you interacted with the site [FF78+]
// 0=sticky (default), 1=transient, 2=user
// Firefox's Autoplay Policy Documentation (PDF) is linked below via SUMO
// [NOTE] If you have trouble with some video sites (e.g. YouTube), then add an exception (see previous PREF)
// [1] https://support.mozilla.org/questions/1293231
//user_pref("media.autoplay.blocking_policy", 2);

/****************************************************************************
 * SECTION: NEW TAB PAGE                                                    *
****************************************************************************/

// PREF: startup / new tab page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
// [NOTE] Session Restore is cleared with history and not used in Private Browsing mode
// [SETTING] General>Startup>Open previous windows and tabs
//user_pref("browser.startup.page", 3);

// PREF: set HOME+NEW WINDOW page to blank tab
// about:home=Activity Stream, custom URL, about:blank
// [SETTING] Home>New Windows and Tabs>Homepage and new windows
// [Custom URLs] Set two or more websites in Home Page Field – delimited by |
// [1] https://support.mozilla.org/en-US/questions/1271888#answer-1262899
//user_pref("browser.startup.homepage", "about:blank");

// PREF: set NEWTAB page to blank tab
// true=Firefox Home, false=blank page
// [SETTING] Home>New Windows and Tabs>New tabs
//user_pref("browser.newtabpage.enabled", false);

// PREF: Pinned Shortcuts on New Tab
// [SETTINGS] Home>Firefox Home Content
// [1] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
//user_pref("browser.newtabpage.activity-stream.showSearch", true); // NTP Web Search [DEFAULT]
//user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Shortcuts
      user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts [FF83+]
//user_pref("browser.newtabpage.activity-stream.showWeather", false); // Weather [FF130+]
    //user_pref("browser.newtabpage.activity-stream.system.showWeather", false); // hides Weather as an UI option
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored stories [FF58+]  
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false); // [FF140+] Support Firefox
//user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Recent Activity [DEFAULT]
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT]

// PREF: wallpapers on New Tab [FF128+ NIGHTLY]
//user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false); // Wallpapers

// PREF: clear default topsites
// [NOTE] This does not block you from adding your own.
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// PREF: keep search in the search box; prevent from jumping to address bar
// [1] https://www.reddit.com/r/firefox/comments/oxwvbo/firefox_start_page_search_options/
//user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
      
// PREF: Firefox logo to always show
//user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true); // DEFAULT

// PREF: Bookmarks Toolbar visibility
// always, never, or newtab
//user_pref("browser.toolbars.bookmarks.visibility", "newtab"); // DEFAULT

/******************************************************************************
 * SECTION: POCKET                                                            *
******************************************************************************/

// PREF: disable built-in Pocket extension
// [1] https://support.mozilla.org/kb/future-of-pocket
//user_pref("extensions.pocket.enabled", false); // DEFAULT
      //user_pref("extensions.pocket.api"," ");
      //user_pref("extensions.pocket.oAuthConsumerKey", " ");
      //user_pref("extensions.pocket.site", " ");
      //user_pref("extensions.pocket.showHome", false);

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/

// PREF: choose download location
// [SETTING] To set your default "downloads": General>Downloads>Save files to...
// 0=desktop, 1=downloads (default), 2=last used
//user_pref("browser.download.folderList", 1); // DEFAULT

// PREF: always ask how to handle new mimetypes [FF101+]
// Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Applications>What should Firefox do with other files?
// false=Save files
// true=Ask whether to open or save files
//user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: always ask where to download
// [OPTIONAL HARDENING] Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Downloads>Always ask you where to save files
// [DIALOGUE] "Ask whether to open or save files"
// true=direct download (default)
// false=the user is asked what to do
// [1] https://github.com/yokoffing/Betterfox/issues/267
//user_pref("browser.download.useDownloadDir", false);
    //user_pref("browser.download.dir", "C:\Users\<YOUR_USERNAME>\AppData\Local\Temp"); // [WINDOWS]

// PREF: autohide the downloads button
//user_pref("browser.download.autohideButton", true); // DEFAULT

// PREF: disable download panel opening on every download [non-functional?]
// Controls whether to open the download panel every time a download begins.
// [NOTE] The first download ever ran in a new profile will still open the panel.
//user_pref("browser.download.alwaysOpenPanel", false);

// PREF: disable adding downloads to the system's "recent documents" list 
user_pref("browser.download.manager.addToRecentDocs", false);

/****************************************************************************
 * SECTION: PDF                                                             *
****************************************************************************/

// PREF: enforce Firefox's built-in PDF reader
// This setting controls if the option "Display in Firefox" is available in the setting below
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With").
// [1] https://mozilla.github.io/pdf.js/
//user_pref("pdfjs.disabled", false); // DEFAULT

// PREF: allow viewing of PDFs even if the response HTTP headers
// include Content-Disposition:attachment. 
//user_pref("browser.helperApps.showOpenOptionForPdfJS", true); // DEFAULT

// PREF: open PDFs inline (FF103+)
user_pref("browser.download.open_pdf_attachments_inline", true);

// PREF: PDF sidebar on load
// 2=table of contents (if not available, will default to 1)
// 1=view pages
// 0=disabled
// -1=remember previous state (default)
//user_pref("pdfjs.sidebarViewOnLoad", 2);

// PREF: default zoom for PDFs [HIDDEN]
// [NOTE] "page-width" not needed if using sidebar on load
//user_pref("pdfjs.defaultZoomValue", page-width);

/****************************************************************************
 * SECTION: DOM (DOCUMENT OBJECT MODEL)                                     *
****************************************************************************/
// PREF: prevent scripts from moving and resizing open windows
//user_pref("dom.disable_window_move_resize", true);

// PREF: disable beforeunload event
// [WHY] The method is commonly abused by scam and spyware sites.
// [1] https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event
//user_pref("dom.disable_beforeunload", true);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/

// PREF: search query opens in a new tab (instead of the current tab)
//user_pref("browser.search.openintab", true); // SEARCH BOX
//user_pref("browser.urlbar.openintab", true); // URL BAR

// PREF: control behavior of links that would normally open in a new window
// [NOTE] You can still right-click a link and open in a new window
// 3 (default) = in a new tab; pop-up windows are treated like regular tabs
// 2 = in a new window
// 1 = in the current tab
//user_pref("browser.link.open_newwindow", 3); // DEFAULT

// PREF: determine the behavior of pages opened by JavaScript (like popups)
// 2 (default) = catch new windows opened by JavaScript that do not have
// specific values set (how large the window should be, whether it
// should have a status bar, etc.) 
// 1 = let all windows opened by JavaScript open in new windows
// 0 = force all new windows opened by JavaScript into tabs
// [NOTE] Most advertising popups also open in new windows with values set
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.link.open_newwindow.restriction", 2); // DEFAULT

// PREF: override <browser.link.open_newwindow> for external links
// Set if a different destination for external links is needed
// 3=Open in a new tab in the current window
// 2=Open in a new window
// 1=Open in the current tab/window
// -1=no overrides (default)
//user_pref("browser.link.open_newwindow.override.external", -1); // DEFAULT

// PREF: focus behavior for new tabs from links
// Determine whether a link opens in the foreground or background on left-click
// [SETTINGS] Settings>General>Tabs>"When you open a link, image or media in a new tab, switch to it immediately"
// true(default) = opens new tabs by left-click in the background, leaving focus on the current tab
// false = opens new tabs by left-click in the foreground, putting focus on the new tab
// [NOTE] CTRL+SHIFT+CLICK will open new tabs in foreground (default); switching PREF to false will reverse this behavior
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.tabs.loadInBackground", true); // DEFAULT

// PREF: determines whether pages normally meant to open in a new window (such as
// target="_blank" or from an external program), but that have instead been loaded in a new tab
// This pref takes effect when Firefox has diverted a new window to a new tab instead, then:
// true = loads the new tab in the background, leaving focus on the current tab
// false(default) = loads the new tab in the foreground, taking the focus from the current tab
// [NOTE] Setting this preference to true will still bring the browser to the front when opening links from outside the browser
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.tabs.loadDivertedInBackground", false); // DEFAULT

// PREF: force bookmarks to open in a new tab, not the current tab
//user_pref("browser.tabs.loadBookmarksInTabs", true);
    //user_pref("browser.tabs.loadBookmarksInBackground", true); // load bookmarks in background

// PREF: leave Bookmarks Menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// PREF: restore "View image info" on right-click
//user_pref("browser.menu.showViewImageInfo", true);

// PREF: show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: force disable finding text on page without prompting
// [NOTE] Not as powerful as using Ctrl+F.
// [SETTINGS] General>Browsing>"Search for text when you start typing"
// [1] https://github.com/yokoffing/Betterfox/issues/212
//user_pref("accessibility.typeaheadfind", false); // enforce DEFAULT

// PREF: disable middle mouse click opening links from clipboard
// It's been default in Linux since at least FF102.
// [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/10089
//user_pref("middlemouse.contentLoadURL", false);

// PREF: insert new tabs after groups like it
// true(default) = open new tabs to the right of the parent tab
// false = new tabs are opened at the far right of the tab bar
//user_pref("browser.tabs.insertRelatedAfterCurrent", true); // DEFAULT

// PREF: insert new tabs immediately after the current tab
//user_pref("browser.tabs.insertAfterCurrent", true);

// PREF: leave the browser window open even after you close the last tab
//user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: stop websites from reloading pages automatically
// [WARNING] Breaks some sites.
// [1] https://www.ghacks.net/2018/08/19/stop-websites-from-reloading-pages-automatically/
//user_pref("accessibility.blockautorefresh", true);
//user_pref("browser.meta_refresh_when_inactive.disabled", true);

// PREF: do not select the space next to a word when selecting a word
//user_pref("layout.word_select.eat_space_to_next_word", false);

// PREF: controls if a double-click word selection also deletes one adjacent whitespace
// This mimics native behavior on macOS.
//user_pref("editor.word_select.delete_space_after_doubleclick_selection", true);

// PREF: do not hide the pointer while typing [LINUX]
//user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

// PREF: limit events that can cause a pop-up
// Firefox provides an option to provide exceptions for sites, remembered in your Site Settings.
// (default) "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
// (alternate) user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
//user_pref("dom.popup_allowed_events", "click dblclick");
//user_pref("dom.disable_open_during_load", true); // DEFAULT
//user_pref("privacy.popups.showBrowserMessage", true); // DEFAULT

// PREF: enable Tab Previews [FF122+, FF128+]
// [1] https://github.com/yokoffing/Betterfox/issues/309
//user_pref("browser.tabs.hoverPreview.enabled", true);
    //user_pref("browser.tabs.hoverPreview.showThumbnails", true); // DEFAULT

/****************************************************************************
 * SECTION: KEYBOARD AND SHORTCUTS                                          *
 ****************************************************************************/

// PREF: disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
//user_pref("browser.backspace_action", 2); // DEFAULT

// PREF: disable ALT key toggling the menu bar
//user_pref("ui.key.menuAccessKeyFocuses", false);
    //user_pref("ui.key.menuAccessKey", 18); // DEFAULT

// PREF: cycle through tabs in recently used order
// [SETTING] Ctrl+Tab cycles through tabs in recently used order
//user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// PREF: disable websites overriding Firefox's keyboard shortcuts [FF58+]
// 0=ask (default), 1=allow, 2=block
// [SETTING] to add site exceptions: Ctrl+I>Permissions>Override Keyboard Shortcuts ***/
//user_pref("permissions.default.shortcuts", 2);

// PREF: hide frequent sites on right-click of taskbar icon [WINDOWS?]
//user_pref("browser.taskbar.lists.frequent.enabled", false);

/****************************************************************************
 * SECTION: ACCESSIBILITY AND USABILITY                                     *
 ****************************************************************************/

// PREF: disable Reader mode parse on load
// Reader supposedly costs extra CPU after page load.
// [TIP] Use about:reader?url=%s as a keyword to open links automatically in reader mode [1].
// Firefox will not have to parse webpage for Reader when navigating.
// Extremely minimal performance impact, if you disable.
// [1] https://www.reddit.com/r/firefox/comments/621sr2/i_found_out_how_to_automatically_open_a_url_in/ 
//user_pref("reader.parse-on-load.enabled", false);

// PREF: Spell-check
// 0=none, 1-multi-line, 2=multi-line & single-line
//user_pref("layout.spellcheckDefault", 1); // DEFAULT

// PREF: Spell Checker underline styles [HIDDEN]
// [1] https://kb.mozillazine.org/Ui.SpellCheckerUnderlineStyle#Possible_values_and_their_effects
//user_pref("ui.SpellCheckerUnderlineStyle", 1);

// PREF: remove underlined characters from various settings
//user_pref("ui.key.menuAccessKey", 0);

// PREF: enable CSS moz document rules
// Still needed for Stylus?
// [1] https://reddit.com/r/FirefoxCSS/comments/8x2q97/reenabling_mozdocument_rules_in_firefox_61/
//user_pref("layout.css.moz-document.content.enabled", true);

/****************************************************************************
 * SECTION: BOOKMARK MANAGEMENT                                             *
 ****************************************************************************/

// PREF: limit the number of bookmark backups Firefox keeps
//user_pref("browser.bookmarks.max_backups", 1); // default=15

/****************************************************************************
 * SECTION: ZOOM AND DISPLAY SETTINGS                                       *
 ****************************************************************************/

// PREF: zoom only text on webpage, not other elements
//user_pref("browser.zoom.full", false);

// PREF: allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level.
//user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");

// PREF: restore zooming behavior [macOS] [FF109+]
// On macOS, Ctrl or Cmd + trackpad or mouse wheel now scrolls the page instead of zooming.
// This avoids accidental zooming and matches Safari's and Chrome's behavior.
// The prefs below restores the previous zooming behavior
//user_pref("mousewheel.with_control.action", 3);
//user_pref("mousewheel.with_meta.action", 3);

// PREF: adjust the minimum tab width
// Can be overridden by userChrome.css
//user_pref("browser.tabs.tabMinWidth", 120); // default=76

// PREF: always underline links [FF120+]
//user_pref("layout.css.always_underline_links", false); // DEFAULT

/****************************************************************************
 * SECTION: DEVELOPER TOOLS                                                 *
 ****************************************************************************/

// PREF: wrap long lines of text when using source / debugger
//user_pref("view_source.wrap_long_lines", true);
//user_pref("devtools.debugger.ui.editor-wrapping", true);

// PREF: enable ASRouter Devtools at about:newtab#devtools
// This is useful if you're making your own CSS theme.
// [1] https://firefox-source-docs.mozilla.org/browser/components/newtab/content-src/asrouter/docs/debugging-docs.html
//user_pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", true);

// show user agent styles in the inspector
//user_pref("devtools.inspector.showUserAgentStyles", true);

// show native anonymous content (like scrollbars or tooltips) and user
// agent shadow roots (like the components of an <input> element) in the inspector
//user_pref("devtools.inspector.showAllAnonymousContent", true);

/****************************************************************************
 * SECTION: IMAGE AND MEDIA HANDLING                                        *
 ****************************************************************************/

// PREF: JPEG XL image format [NIGHTLY]
// May not affect anything on ESR/Stable channel [2].
// [TEST] https://www.jpegxl.io/firefox#firefox-jpegxl-tutorial
// [1] https://cloudinary.com/blog/the-case-for-jpeg-xl
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1539075#c51
//user_pref("image.jxl.enabled", true);

/*** combinedfox overrides for arkenfox user.js arkenfox-overrides.js
   [1] https://github.com/arkenfox/user.js/blob/master/user.js ***/
/* START: internal custom pref to test for syntax errors ***/
user_pref("_arkenfox-overrides.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");

/*** [SECTION 0100]: STARTUP ***/
user_pref("_arkenfox-overrides.js.parrot", "0100 syntax error: the parrot's dead!");
/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is cleared if history is also cleared (2811+), and not used in Private Browsing mode
 * [SETTING] General>Startup>Restore previous session ***/
user_pref("browser.startup.page", 1);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Firefox Home (default, see 0105), custom URLs..., Blank Page
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows ***/
user_pref("browser.startup.homepage", "about:home");
/* 0104: set NEWTAB page
 * true=Firefox Home (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs ***/
user_pref("browser.newtabpage.enabled", true);

/*** [SECTION 0200]: GEOLOCATION ***/
user_pref("_arkenfox-overrides.js.parrot", "0200 syntax error: the parrot's definitely deceased!");

/*** [SECTION 0300]: QUIETER FOX ***/
user_pref("_arkenfox-overrides.js.parrot", "0300 syntax error: the parrot's not pinin' for the fjords!");
/* 0360: enable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
user_pref("captivedetect.canonicalURL", "http://detectportal.firefox.com/canonical.html");
user_pref("network.captive-portal-service.enabled", true); // [FF52+]
/* 0361: enable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
user_pref("network.connectivity-service.enabled", true);

/*** [SECTION 0400]: SAFE BROWSING (SB) ***/
user_pref("_arkenfox-overrides.js.parrot", "0400 syntax error: the parrot's passed on!");
/* 0403: enable SB checks for downloads (remote)
 * To verify the safety of certain executable files, Firefox may submit some information about the
 * file, including the name, origin, size and a cryptographic hash of the contents, to the Google
 * Safe Browsing service which helps Firefox determine whether or not the file should be blocked
 * [SETUP-SECURITY] If you do not understand this, or you want this protection, then override this ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", true);

/*** [SECTION 0600]: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] ***/
user_pref("_arkenfox-overrides.js.parrot", "0600 syntax error: the parrot's no more!");

/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS ***/
user_pref("_arkenfox-overrides.js.parrot", "0700 syntax error: the parrot's given up the ghost!");
/* 0710: enable DNS-over-HTTPS (DoH) [FF60+]
 * 0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off (no rollout)
 * see "doh-rollout.home-region": USA 2019, Canada 2021, Russia/Ukraine 2022 [3]
 * [SETTING] Privacy & Security>DNS over HTTPS
 * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 * [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
 * [3] https://support.mozilla.org/kb/firefox-dns-over-https
 * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
user_pref("network.trr.mode", 3);
/* 0712: set DoH provider
 * The custom uri is the value shown when you "Choose provider>Custom>"
 * [NOTE] If you USE custom then "network.trr.uri" should be set the same
 * [SETTING] Privacy & Security>DNS over HTTPS>Increased/Max>Choose provider ***/
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.trr.custom_uri", "https://mozilla.cloudflare-dns.com/dns-query");

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
user_pref("_arkenfox-overrides.js.parrot", "0800 syntax error: the parrot's ceased to be!");
/* 0803: enable live search suggestions
 * [NOTE] Both must be true for live search to work in the location bar
 * [SETUP-CHROME] Override these if you trust and use a privacy respecting search engine
 * [SETTING] Search>Show search suggestions | Show search suggestions in address bar results ***/
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

/*** [SECTION 0900]: PASSWORDS / PASSKEYS ***/
user_pref("_arkenfox-overrides.js.parrot", "0900 syntax error: the parrot's expired!");

/*** [SECTION 1000]: DISK AVOIDANCE ***/
user_pref("_arkenfox-overrides.js.parrot", "1000 syntax error: the parrot's gone to meet 'is maker!");
/* 1001: enable disk cache
 * [NOTE] We also clear cache on exit (2811+)
 * [SETUP-CHROME] If you think disk cache helps perf, then feel free to override this ***/
user_pref("browser.cache.disk.enable", true);
/* 1006: enable favicons in shortcuts [WINDOWS]
 * URL shortcuts use a cached randomly named .ico file which is stored in your
 * profile/shortcutCache directory. The .ico remains after the shortcut is deleted
 * If set to false then the shortcuts use a generic Firefox icon ***/
user_pref("browser.shell.shortcutFavicons", true);

/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
user_pref("_arkenfox-overrides.js.parrot", "1200 syntax error: the parrot's a stiff!");

/** MIXED CONTENT ***/
/* 1244: enable HTTPS-Only mode in all windows
 * When the top-level is HTTPS, insecure subresources are also upgraded (silent fail)
 * [SETTING] to add site exceptions: Padlock>HTTPS-Only mode>On (after "Continue to HTTP Site")
 * [SETTING] Privacy & Security>HTTPS-Only Mode (and manage exceptions)
 * [TEST] http://example.com [upgrade]
 * [TEST] http://httpforever.com/ | http://http.rip [no upgrade] ***/
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]

/*** [SECTION 1600]: REFERERS ***/
user_pref("_arkenfox-overrides.js.parrot", "1600 syntax error: the parrot rests in peace!");

/*** [SECTION 1700]: CONTAINERS ***/
user_pref("_arkenfox-overrides.js.parrot", "1700 syntax error: the parrot's bit the dust!");

/*** [SECTION 2000]: PLUGINS / MEDIA / WEBRTC ***/
user_pref("_arkenfox-overrides.js.parrot", "2000 syntax error: the parrot's snuffed it!");

/*** [SECTION 2400]: DOM (DOCUMENT OBJECT MODEL) ***/
user_pref("_arkenfox-overrides.js.parrot", "2400 syntax error: the parrot's kicked the bucket!");

/*** [SECTION 2600]: MISCELLANEOUS ***/
user_pref("_arkenfox-overrides.js.parrot", "2600 syntax error: the parrot's run down the curtain!");
/* 2619: Not use Punycode in Internationalized Domain Names to eliminate possible spoofing
 * [SETUP-WEB] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded
 * [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
 * [1] https://wiki.mozilla.org/IDN_Display_Algorithm
 * [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
 * [3] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=punycode+firefox
 * [4] https://www.xudongz.com/blog/2017/idn-phishing/ ***/
user_pref("network.IDN_show_punycode", false);

/** EXTENSIONS ***/
/* 2662: disable webextension restrictions on certain mozilla domains (you also need 4503) [FF60+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
user_pref("extensions.webextensions.restrictedDomains", "");

/*** [SECTION 2700]: ETP (ENHANCED TRACKING PROTECTION) ***/
user_pref("_arkenfox-overrides.js.parrot", "2700 syntax error: the parrot's joined the bleedin' choir invisible!");

/*** [SECTION 2800]: SHUTDOWN & SANITIZING ***/
user_pref("_arkenfox-overrides.js.parrot", "2800 syntax error: the parrot's bleedin' demised!");

/** SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS ***/
/* 2815: set "Cookies" and "Site Data" to not clear on shutdown (if 2810 is true) [SETUP-CHROME] [FF128+]
 * [NOTE] Exceptions: For cross-domain logins, add exceptions for both sites
 * e.g. https://www.youtube.com (site) + https://accounts.google.com (single sign on)
 * [WARNING] Be selective with what sites you "Allow", as they also disable partitioning (1767271)
 * [SETTING] to add site exceptions: Ctrl+I>Permissions>Cookies>Allow (when on the website in question)
 * [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Settings ***/
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);

/** SANITIZE SITE DATA: IGNORES "ALLOW" SITE EXCEPTIONS ***/
/* 2820: set manual "Clear Data" items [SETUP-CHROME] [FF128+]
 * Firefox remembers your last choices. This will reset them when you start Firefox
 * [SETTING] Privacy & Security>Browser Privacy>Cookies and Site Data>Clear Data ***/
user_pref("privacy.clearSiteData.cookiesAndStorage", false); // keep false even after it respects "allow" site exceptions

/*** [SECTION 4000]: FPP (fingerprintingProtection) ***/
user_pref("_arkenfox-overrides.js.parrot", "4000 syntax error: the parrot's bereft of life!");

/*** [SECTION 4500]: OPTIONAL RFP (resistFingerprinting) ***/
user_pref("_arkenfox-overrides.js.parrot", "4500 syntax error: the parrot's popped 'is clogs");
/* 4504: enable letterboxing [FF67+]
 * Dynamically resizes the inner window by applying margins in stepped ranges [2]
 * If you use the dimension pref, then it will only apply those resolutions.
 * The format is "width1xheight1, width2xheight2, ..." (e.g. "800x600, 1000x1000")
 * [SETUP-WEB] This is independent of RFP (4501). If you're using RFP, but dislike the
 * margins, then don't enable this pref, keeping in mind that it is effectively fingerprintable
 * [WARNING] DO NOT USE: the dimension pref is only meant for testing
 * [1] https://bugzilla.mozilla.org/1407366
 * [2] https://hg.mozilla.org/mozilla-central/rev/7211cb4f58ff#l5.13 ***/
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
   // user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]

/*** [SECTION 5000]: OPTIONAL OPSEC ***/
user_pref("_arkenfox-overrides.js.parrot", "5000 syntax error: the parrot's taken 'is last bow");
/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);
/* 5010: disable location bar suggestion types
 * [SETTING] Search>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
/* 5012: disable location bar autofill
 * [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete ***/
user_pref("browser.urlbar.autoFill", false);
/* 5016: discourage downloading to desktop
 * 0=desktop, 1=downloads (default), 2=custom
 * [SETTING] To set your custom default "downloads": General>Downloads>Save files to ***/
user_pref("browser.download.folderList", 1);
/* 5017: disable Form Autofill
 * If .supportedCountries includes your region (browser.search.region) and .supported
 * is "detect" (default), then the UI will show. Stored data is not secure, uses JSON
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]

/*** [SECTION 5500]: OPTIONAL HARDENING ***/
user_pref("_arkenfox-overrides.js.parrot", "5500 syntax error: this is an ex-parrot!");
/* 5511: set DoH bootstrap address [FF89+]
 * Firefox uses the system DNS to initially resolve the IP address of your DoH server.
 * When set to a valid, working value that matches your "network.trr.uri" (0712) Firefox
 * won't use the system DNS. If the IP doesn't match then DoH won't work ***/
user_pref("network.trr.bootstrapAddr", "1.1.1.1"); // [HIDDEN PREF]

/*** [SECTION 6000]: DON'T TOUCH ***/
user_pref("_arkenfox-overrides.js.parrot", "6000 syntax error: the parrot's 'istory!");

/*** [SECTION 7000]: DON'T BOTHER ***/
user_pref("_arkenfox-overrides.js.parrot", "7000 syntax error: the parrot's pushing up daisies!");
/* 7015: disable the DNT (Do Not Track) HTTP header
 * [WHY] Fingerprintable. In FF141+ DNT is never enabled. DNT is slated for deprecation [1]
   [NOTE] In FF140, DNT is enforced with Tracking Protection which is used in ETP Strict (2701)
   [1] https://bugzilla.mozilla.org/1967420 ***/
user_pref("privacy.donottrackheader.enabled", false);
/* 7021: disable GPC (Global Privacy Control) in non-PB windows
 * [WHY] Passive and active fingerprinting. Mostly redundant with Tracking Protection
 * in ETP Strict (2701) and sanitizing on close (2800s) ***/
user_pref("privacy.globalprivacycontrol.enabled", false);

/*** [SECTION 8000]: DON'T BOTHER: FINGERPRINTING ***/
user_pref("_arkenfox-overrides.js.parrot", "8000 syntax error: the parrot's crossed the Jordan");

/*** [SECTION 8500]: TELEMETRY ***/
user_pref("_arkenfox-overrides.js.parrot", "8500 syntax error: the parrot's off the twig!");

/*** [SECTION 9000]: NON-PROJECT RELATED ***/
user_pref("_arkenfox-overrides.js.parrot", "9000 syntax error: the parrot's cashed in 'is chips!");

/*** [SECTION 9999]: DEPRECATED / RENAMED ***/
user_pref("_arkenfox-overrides.js.parrot", "9999 syntax error: the parrot's shuffled off 'is mortal coil!");

/* END: internal custom pref to test for syntax errors ***/
user_pref("_arkenfox-overrides.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");


/*** combinedfox overrides for Betterfox Peskyfox.js Peskyfox-overrides.js
   [1] https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js ***/
/* START: internal custom pref to test for syntax errors ***/
user_pref("_Peskyfox-overrides.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "MOZILLA UI syntax error: the parrot's dead!");

// PREF: Not hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", true);

/****************************************************************************
 * SECTION: THEME ADJUSTMENTS                                              *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "THEME ADJUSTMENTS syntax error: the parrot's dead!");

// PREF: show search bar [FF122+]
// Mozilla has removed the search bar option from the settings window.
user_pref("browser.search.widget.inNavBar", true);

/****************************************************************************
 * SECTION: AI                                                              *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "AI syntax error: the parrot's dead!");

// PREF: AI default controls
// [1] https://blog.mozilla.org/en/firefox/how-to-use-ai-controls/
user_pref("browser.ai.control.default", "available");
user_pref("browser.ml.enable", true);

// PREF: Chatbot in sidebar
user_pref("browser.ml.chat.enabled", true);
user_pref("browser.ml.chat.menu", true);

/****************************************************************************
 * SECTION: TRANSLATIONS                                                    *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "TRANSLATIONS syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: FULLSCREEN NOTICE                                               *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "FULLSCREEN NOTICE syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: FONT APPEARANCE                                                 *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "FONT APPEARANCE syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: URL BAR                                                         *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "URL BAR syntax error: the parrot's dead!");

// PREF: browser.urlbar.suggest.*
user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.suggest.amp", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.suggest.clipboard", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", true);
user_pref("browser.urlbar.suggest.importantDates", false);
user_pref("browser.urlbar.suggest.mdn", false);
user_pref("browser.urlbar.suggest.openpage", true);
user_pref("browser.urlbar.suggest.quickactions", true);
user_pref("browser.urlbar.suggest.quicksuggest.all", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.realtimeOptIn", false);
user_pref("browser.urlbar.suggest.recentsearches", true);
user_pref("browser.urlbar.suggest.remotetab", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.urlbar.suggest.sports", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.wikipedia", false);
user_pref("browser.urlbar.suggest.yelp", false);
user_pref("browser.urlbar.suggest.yelpRealtime", false);

// PREF: browser.urlbar.*.featureGate
user_pref("browser.urlbar.clipboard.featureGate", true);
user_pref("browser.urlbar.trending.featureGate", false);

// PREF: Adaptive History Autofill
// [1] https://docs.google.com/document/u/1/d/e/2PACX-1vRBLr_2dxus-aYhZRUkW9Q3B1K0uC-a0qQyE3kQDTU3pcNpDHb36-Pfo9fbETk89e7Jz4nkrqwRhi4j/pub
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);

/****************************************************************************
 * SECTION: AUTOPLAY                                                        *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "AUTOPLAY syntax error: the parrot's dead!");

// PREF: do not autoplay media audio
// [NOTE] You can set exceptions under site permissions
// [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
user_pref("media.autoplay.default", 5); // DEFAULT

/****************************************************************************
 * SECTION: NEW TAB PAGE                                                    *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "NEW TAB PAGE syntax error: the parrot's dead!");

// PREF: Bookmarks Toolbar visibility
// always, never, or newtab (default)
user_pref("browser.toolbars.bookmarks.visibility", "always");

/******************************************************************************
 * SECTION: POCKET                                                            *
******************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "POCKET syntax error: the parrot's dead!");

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "DOWNLOADS syntax error: the parrot's dead!");

// PREF: choose download location
// [SETTING] To set your default "downloads": General>Downloads>Save files to...
// 0=desktop, 1=downloads (default), 2=last used
user_pref("browser.download.folderList", 1); // DEFAULT

// PREF: always ask how to handle new mimetypes [FF101+]
// Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Applications>What should Firefox do with other files?
// false=Save files
// true=Ask whether to open or save files
user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: always ask where to download
// [OPTIONAL HARDENING] Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Downloads>Always ask you where to save files
// [DIALOGUE] "Ask whether to open or save files"
// true=direct download (default)
// false=the user is asked what to do
// [1] https://github.com/yokoffing/Betterfox/issues/267
user_pref("browser.download.useDownloadDir", false);

// PREF: autohide the downloads button
// default true
user_pref("browser.download.autohideButton", false);

// PREF: disable download panel opening on every download [non-functional?]
// Controls whether to open the download panel every time a download begins.
// [NOTE] The first download ever ran in a new profile will still open the panel.
user_pref("browser.download.alwaysOpenPanel", false);

/****************************************************************************
 * SECTION: PDF                                                             *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "PDF syntax error: the parrot's dead!");

// PREF: PDF sidebar on load
// 2=table of contents (if not available, will default to 1)
// 1=view pages
// 0=disabled
// -1=remember previous state (default)
user_pref("pdfjs.sidebarViewOnLoad", 2);

// PREF: default zoom for PDFs [HIDDEN]
// [NOTE] "page-width" not needed if using sidebar on load
user_pref("pdfjs.defaultZoomValue", page-width);

/****************************************************************************
 * SECTION: DOM (DOCUMENT OBJECT MODEL)                                     *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "DOM syntax error: the parrot's dead!");

// PREF: prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

// PREF: disable beforeunload event
// [WHY] The method is commonly abused by scam and spyware sites.
// [1] https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event
user_pref("dom.disable_beforeunload", true);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "TAB BEHAVIOR syntax error: the parrot's dead!");

// PREF: determine the behavior of pages opened by JavaScript (like popups)
// 2 (default) = catch new windows opened by JavaScript that do not have
// specific values set (how large the window should be, whether it
// should have a status bar, etc.)
// 1 = let all windows opened by JavaScript open in new windows
// 0 = force all new windows opened by JavaScript into tabs
// [NOTE] Most advertising popups also open in new windows with values set
// [1] https://kb.mozillazine.org/About:config_entries
user_pref("browser.link.open_newwindow.restriction", 0);

// PREF: force bookmarks to open in a new tab, not the current tab
user_pref("browser.tabs.loadBookmarksInTabs", false);
user_pref("browser.tabs.loadBookmarksInBackground", true); // load bookmarks in background

// PREF: restore "View image info" on right-click
user_pref("browser.menu.showViewImageInfo", true);

// PREF: disable middle mouse click opening links from clipboard
// It's been default in Linux since at least FF102.
// [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/10089
user_pref("middlemouse.contentLoadURL", false);

// PREF: leave the browser window open even after you close the last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: do not hide the pointer while typing [LINUX]
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

/****************************************************************************
 * SECTION: KEYBOARD AND SHORTCUTS                                          *
 ****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "KEYBOARD AND SHORTCUTS syntax error: the parrot's dead!");

// PREF: disable ALT key toggling the menu bar
user_pref("ui.key.menuAccessKeyFocuses", false);

// PREF: hide frequent sites on right-click of taskbar icon [WINDOWS?]
user_pref("browser.taskbar.lists.frequent.enabled", false);

/****************************************************************************
 * SECTION: ACCESSIBILITY AND USABILITY                                     *
 ****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "ACCESSIBILITY AND USABILITY syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: BOOKMARK MANAGEMENT                                             *
 ****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "BOOKMARK MANAGEMENT syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: ZOOM AND DISPLAY SETTINGS                                       *
 ****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "ZOOM AND DISPLAY SETTINGS syntax error: the parrot's dead!");

// PREF: adjust the minimum tab width
// Can be overridden by userChrome.css
user_pref("browser.tabs.tabMinWidth", 38); // default=76

/****************************************************************************
 * SECTION: DEVELOPER TOOLS                                                 *
 ****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "DEVELOPER TOOLS syntax error: the parrot's dead!");

// PREF: wrap long lines of text when using source / debugger
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);

// PREF: enable ASRouter Devtools at about:newtab#devtools
// This is useful if you're making your own CSS theme.
// [1] https://firefox-source-docs.mozilla.org/browser/components/newtab/content-src/asrouter/docs/debugging-docs.html
user_pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", true);

// show user agent styles in the inspector
user_pref("devtools.inspector.showUserAgentStyles", true);

// show native anonymous content (like scrollbars or tooltips) and user
// agent shadow roots (like the components of an <input> element) in the inspector
user_pref("devtools.inspector.showAllAnonymousContent", true);

/****************************************************************************
 * SECTION: IMAGE AND MEDIA HANDLING                                        *
 ****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "IMAGE AND MEDIA HANDLING syntax error: the parrot's dead!");

/* END: internal custom pref to test for syntax errors ***/
user_pref("_Peskyfox-overrides.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");


/*** combinedfox extra overrides extra-overrides.js ***/
/* START: internal custom pref to test for syntax errors ***/
user_pref("_extra-overrides.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");

/*** OTHERS ***/
user_pref("_extra-overrides.js.parrot", "OTHERS syntax error: the parrot's dead!");

// enable WebGPU
// [1] https://www.reddit.com/r/Fedora/comments/12yxxzm/firefox_with_webgpu_seems_to_work_well_in_f38/
user_pref("dom.webgpu.enabled", true);
user_pref("gfx.webrender.all", true);

// force user scalable
// [1] https://android.stackexchange.com/a/147869
user_pref("browser.ui.zoom.force-user-scalable", true);

// Request English versions of web pages for enhanced privacy
// [1] https://github.com/arkenfox/user.js/issues/1314
user_pref("privacy.spoof_english", 2);
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true);

// DoH Additions
// Additions by Acideburn in https://codeberg.org/librewolf/issues/issues/1975#issuecomment-2301916 , and other PR's
// [1] https://librewolf.net/docs/faq/#doh-what-is-the-currently-recommended-way-to-enable-doh
// [2] https://codeberg.org/librewolf/issues/issues/1975
pref("network.trr.default_provider_uri", "https://doh.dns4all.eu/dns-query"); // Define a fallback DoH server (used only in mode 1)
pref("network.trr.strict_native_fallback", false); // Allow native fallback
pref("network.trr.retry_on_recoverable_errors", true); // Retry on recoverable errors
pref("network.trr.disable-heuristics", true); // Disables the canary telemetry detection request "use-application-dns.net" for DOH
pref("network.trr.allow-rfc1918", true); // Allows the use of private IP addresses (RFC 1918) in DOH responses

/*** FASTFOX
   [1] https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js
***/
user_pref("_extra-overrides.js.parrot", "FASTFOX syntax error: the parrot's dead!");

// PREF: Webrender tweaks
// [1] https://searchfox.org/mozilla-central/rev/6e6332bbd3dd6926acce3ce6d32664eab4f837e5/modules/libpref/init/StaticPrefList.yaml#6202-6219
// [2] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [3] https://www.reddit.com/r/firefox/comments/tbphok/is_setting_gfxwebrenderprecacheshaders_to_true/i0bxs2r/
// [4] https://www.reddit.com/r/firefox/comments/z5auzi/comment/ixw65gb?context=3
// [5] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4532937#gistcomment-4532937
user_pref("gfx.webrender.all", true); // enables WR + additional features
user_pref("gfx.webrender.precache-shaders", true); // longer initial startup time
user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
user_pref("gfx.webrender.compositor.force-enabled", true); // enforce

// PREF: Webrender layer compositor
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1945683
// [2] https://www.reddit.com/r/firefox/comments/1p58qre/firefox_is_getting_ready_to_make_youtube_fast/
// [3] https://www.ghacks.net/2025/11/24/these-two-tweaks-should-improve-firefoxs-performance-on-youtube-significantly/
user_pref("gfx.webrender.layer-compositor", true);

// PREF: improve CPU usage on AMD systems
user_pref("media.wmf.zero-copy-nv12-textures-force-enabled", true);

// PREF: adjust video buffering periods when not using MSE (in seconds)
// [NOTE] Does not affect videos over 720p since they use DASH playback [1] or Web Audio API
// [1] https://lifehacker.com/preload-entire-youtube-videos-by-disabling-dash-playbac-1186454034
user_pref("media.cache_readahead_limit", 3600); // 10 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 1800); // 5 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold

/*** BETTERZEN
   [1] https://github.com/yokoffing/Betterfox/blob/main/zen/user.js
***/
user_pref("_extra-overrides.js.parrot", "BETTERZEN syntax error: the parrot's dead!");

// PREF: Disable the Picture in picture pop-out when changing tabs
user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);

/* END: internal custom pref to test for syntax errors ***/
user_pref("_extra-overrides.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");

