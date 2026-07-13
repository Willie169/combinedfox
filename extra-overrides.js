
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

// Region
// Removed from arkenfox
// [1] https://github.com/arkenfox/user.js/pull/1606/changes/bd1a0c28ddd2fc1f170151f8f9e4baab8be0d21e
// [2] https://github.com/arkenfox/user.js/issues/1590
// [3] https://github.com/arkenfox/user.js/issues/1612
// [4] https://git.nixnet.services/Narsil/desktop_user.js
/* 0203: disable region updates
 * [1] https://firefox-source-docs.mozilla.org/toolkit/modules/toolkit_modules/Region.html ***/
user_pref("browser.region.update.enabled", false); // [FF79+]
user_pref("browser.region.network.url", ""); // [FF78+] Defense-in-depth
/* 0204: set search region
 * [NOTE] May not be hidden if Firefox has changed your settings due to your region (0203) ***/
user_pref("browser.search.region", "US"); // [HIDDEN PREF]

// clipboard.autocopy
// [1] https://kb.mozillazine.org/Clipboard.autocopy
// [2] https://git.nixnet.services/Narsil/desktop_user.js
user_pref("clipboard.autocopy", false);

// Disable promos
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1773860
user_pref("browser.promo.cookiebanners.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.preferences.moreFromMozilla", false);

// Disable all visited styling to stop CSS history leak
// [1] https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak
// [2] https://earthlng.github.io/testpages/visited_links.html
// [3] http://frantzmiccoli.github.io/visited-captcha-history
user_pref("layout.css.visited_links_enabled", false)

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

