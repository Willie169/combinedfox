
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

/*** [SECTION 0400]: SAFE BROWSING (SB) ***/
user_pref("_arkenfox-overrides.js.parrot", "0400 syntax error: the parrot's passed on!");

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
user_pref("browser.search.suggest.enabled.private", true); // added in combinedfox
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
/* 5018: limit events that can cause a pop-up ***/
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

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
/* 7021: enable GPC (Global Privacy Control) in non-PB windows
 * [WHY] Passive and active fingerprinting. Mostly redundant with Tracking Protection
 * in ETP Strict (2701) and sanitizing on close (2800s) ***/
user_pref("privacy.globalprivacycontrol.enabled", true);

/*** [SECTION 8000]: DON'T BOTHER: FINGERPRINTING ***/
user_pref("_arkenfox-overrides.js.parrot", "8000 syntax error: the parrot's crossed the Jordan");

/*** [SECTION 8500]: TELEMETRY
   Arkenfox does not consider Firefox telemetry to be a privacy or security concern - comments below.
   But since most arkenfox users prefer it disabled, we'll do that rather than cause overrides.

   Opt-out
   - Telemetry is essential: a browser engine is a _very_ large complex beast costing billions to maintain
   - Opt-in telemetry _does not_ work and results in data that is unrepresentative and may be misleading
   Choice
   - Every new profile on first use provides data collection/use policy and the abillty to opt-out
   - It can be disabled at any time (Settings>Privacy & Security>Data Collection and Use)
   Data
   - no PII (Personally Identifiable Information)
   - can be viewed in about:telemetry
   - uses Prio [1][2][3], Glean [4], Oblivious HTTP [5][6]

   [1] https://crypto.stanford.edu/prio/
   [2] https://hacks.mozilla.org/2018/10/testing-privacy-preserving-telemetry-with-prio/
   [3] https://blog.mozilla.org/security/2019/06/06/next-steps-in-privacy-preserving-telemetry-with-prio/
   [4] https://firefox-source-docs.mozilla.org/toolkit/components/glean/index.html
   [5] https://firefox-source-docs.mozilla.org/toolkit/components/glean/user/ohttp.html
   [6] https://blog.mozilla.org/en/tag/oblivious-http/
***/
user_pref("_user.js.parrot", "8500 syntax error: the parrot's off the twig!");
/* 8500: enable new data submission [FF41+]
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", true);
/* 8501: enable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection and Use>Send technical... data ***/
user_pref("datareporting.healthreport.uploadEnabled", true);
/* 0802: enable telemetry
 * The "unified" pref affects the behavior of the "enabled" pref
 * - If "unified" is false then "enabled" controls the telemetry module
 * - If "unified" is true then "enabled" only controls whether to record extended data
 * [NOTE] "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease (true) or release builds (false) [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref("toolkit.telemetry.unified", true);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "https://incoming.telemetry.mozilla.org");
user_pref("toolkit.telemetry.archive.enabled", true);
user_pref("toolkit.telemetry.newProfilePing.enabled", true); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", true); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", true); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", true); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", true); // [FF57+]
/* 8503: disable Telemetry Coverage
 * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/ ***/
user_pref("toolkit.telemetry.coverage.opt-out", false); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", false); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "https://coverage.mozilla.org");

/*** [SECTION 9000]: NON-PROJECT RELATED ***/
user_pref("_arkenfox-overrides.js.parrot", "9000 syntax error: the parrot's cashed in 'is chips!");

/*** [SECTION 9999]: DEPRECATED / RENAMED ***/
user_pref("_arkenfox-overrides.js.parrot", "9999 syntax error: the parrot's shuffled off 'is mortal coil!");

/* END: internal custom pref to test for syntax errors ***/
user_pref("_arkenfox-overrides.js.parrot", "SUCCESS: No no he's not dead, he's, he's restin'!");

