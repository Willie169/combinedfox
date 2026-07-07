/****************************************************************************
 * SECTION: GENERAL                                                        *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "GENERAL syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: GFX RENDERING TWEAKS                                            *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "GFX RENDERING TWEAKS syntax error: the parrot's dead!");

// PREF: Webrender tweaks
// [1] https://searchfox.org/mozilla-central/rev/6e6332bbd3dd6926acce3ce6d32664eab4f837e5/modules/libpref/init/StaticPrefList.yaml#6202-6219
// [2] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [3] https://www.reddit.com/r/firefox/comments/tbphok/is_setting_gfxwebrenderprecacheshaders_to_true/i0bxs2r/
// [4] https://www.reddit.com/r/firefox/comments/z5auzi/comment/ixw65gb?context=3
// [5] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4532937#gistcomment-4532937
user_pref("gfx.webrender.all", true); // enables WR + additional features
user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
user_pref("gfx.webrender.compositor.force-enabled", true); // enforce

// PREF: Webrender layer compositor
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1945683
// [2] https://www.reddit.com/r/firefox/comments/1p58qre/firefox_is_getting_ready_to_make_youtube_fast/
// [3] https://www.ghacks.net/2025/11/24/these-two-tweaks-should-improve-firefoxs-performance-on-youtube-significantly/
user_pref("gfx.webrender.layer-compositor", true);

/****************************************************************************
 * SECTION: JAVASCRIPT OPTIONS                                              *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "JAVASCRIPT OPTIONS syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: DISK CACHE                                                     *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "DISK CACHE syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: MEMORY CACHE                                                   *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "MEMORY CACHE syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: MEDIA CACHE                                                     *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "MEDIA CACHE syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: IMAGE CACHE                                                     *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "IMAGE CACHE syntax error: the parrot's dead!");

/****************************************************************************
 * SECTION: NETWORK                                                         *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "NETWORK syntax error: the parrot's dead!");

// PREF: increase TLS token caching
user_pref("network.ssl_tokens_cache_capacity", 8192); // TLS token caching (fast reconnects)

/****************************************************************************
 * SECTION: TAB UNLOAD                                                      *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "TAB UNLOAD syntax error: the parrot's dead!");

// PREF: determine how long (in ms) tabs are inactive before they unload
// 60000=1min; 300000=5min; 600000=10min (default)
user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5min; default=600000

/****************************************************************************
 * SECTION: PROCESS COUNT                                                  *
****************************************************************************/
user_pref("_Fastfox-overrides.js.parrot", "PROCESS COUNT syntax error: the parrot's dead!");

/* END: internal custom pref to test for syntax errors ***/
user_pref("_Fastfox-overrides.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
