
/*** combinedfox overrides for Betterfox Peskyfox.js Peskyfox-overrides.js
   [1] https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js ***/
/* START: internal custom pref to test for syntax errors ***/
user_pref("_Peskyfox-overrides.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "MOZILLA UI syntax error: the parrot's dead!");

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
// added in combinedfox
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
// added in combinedfox
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.amp.featureGate", false);
user_pref("browser.urlbar.clipboard.featureGate", true);
user_pref("browser.urlbar.importantDates.featureGate", false);
user_pref("browser.urlbar.market.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.sports.featureGate", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.wikipedia.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);
user_pref("browser.urlbar.yelpRealtime.featureGate", false);

// PREF: Adaptive History Autofill
// [1] https://docs.google.com/document/u/1/d/e/2PACX-1vRBLr_2dxus-aYhZRUkW9Q3B1K0uC-a0qQyE3kQDTU3pcNpDHb36-Pfo9fbETk89e7Jz4nkrqwRhi4j/pub
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);

/****************************************************************************
 * SECTION: AUTOPLAY                                                        *
****************************************************************************/
user_pref("_Peskyfox-overrides.js.parrot", "AUTOPLAY syntax error: the parrot's dead!");

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

