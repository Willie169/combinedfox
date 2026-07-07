
/*** CUSTOM ***/
user_pref("_extra-overrides.js.parrot", "CUSTOM syntax error: the parrot's dead!");

// enable WebGPU
// [1] https://www.reddit.com/r/Fedora/comments/12yxxzm/firefox_with_webgpu_seems_to_work_well_in_f38/
user_pref("dom.webgpu.enabled", "true");
user_pref("gfx.webrender.all", "true");
// force user scalable
// [1] https://android.stackexchange.com/a/147869
user_pref("browser.ui.zoom.force-user-scalable", true);

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

/* END: internal custom pref to test for syntax errors ***/
user_pref("_extra-overrides.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");
