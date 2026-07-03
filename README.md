# browser-privacy-guide

This repo contains my recommendations on daily browsers setup on Android and Desktop to enhance privacy without site breaking.

For people with higher threat models that are, some suggestions is also mentioned but covered less thoroughly.

For iOS users, most suggestions don't apply. You may refer to [Privacy Guides](https://www.privacyguides.org/en/mobile-browsers) for some information.

## Firefox Hardening and Improvements

A particular strength of this guide is my hardening of Firefox in addition to the typically recommended [Enhanced Tracking Protection (ETP) Strict Mode](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) and uBlock Origin (uBO) for both Android and desktop without site breaking and other improvements. (Refer to [uBlock Origin](#ublock_origin) for my settings and remarks on it.)

### Firefox Cookies and Supercookies

- [Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI)](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection): Included in Enhanced Tracking Protection (ETP) Strict Mode. Work by maintaining a separate cookie jar for each website you visit. Any time a website, or third-party content embedded in a website, deposits a cookie in your browser, that cookie is confined to the cookie jar assigned to that website, such that it is not allowed to be shared with any other website.
- [State Partitioning](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/State_Partitioning): Enabled by default for all users.
  - Network Partitioning: Networking-related APIs are not intended to be used for websites to store data, but they can be abused for cross-site tracking. As such, the following network APIs and caches are permanently partitioned by the top-level site: HTTP Cache, Image Cache, Favicon Cache, Connection Pooling, Script Cache, Stylesheet Cache, DNS, HTTP Authentication, Alt-Svc, Speculative Connections, Fonts & Font Cache, HSTS, OCSP, Intermediate CA Cache, TLS Client Certificates, TLS Session Identifiers, Prefetch, Preconnect, CORS-preflight Cache, WebRTC deviceID, Backward/forward cache (bfcache).
  - Dynamic State Partitioning: To prevent JavaScript-accessible storage APIs from being used for cross-site tracking, accessible storage is partitioned by top-level site. To improve web compatibility, Firefox currently includes some heuristics to grant unpartitioned access to cookies automatically to third parties that receive user interaction. These heuristics are intended to allow some third-party integrations that are common on the web to continue to function.
- [Fission / Site Isolation](https://wiki.mozilla.org/Project_Fission): Site Isolation is a security feature that offers additional protection in case of large classes of security bugs. Site Isolation safely sandboxes web pages and web frames, isolating them from each other, further strengthening Firefox security. Fission is added in Firefox for Android in [version 147.0](https://www.firefox.com/en-US/firefox/android/147.0/releasenotes). To check it, go to <about:config>, and `fission.autostart` should be `true` if Fission is enabled.
- First Party Isolation: Replaced by Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI).
- [Firefox Multi-Account Containers (MAC)](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers): Use if you want to keep different set of cookies such as login info for a site. If you have no such need, not using it will have no direct impact on your privacy when using Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI). For people with higher threat models, however, consider utilizing this to improve your cross-site scripting (XSS), cross-site request forgery (CSRF), and cross-site leaks (XS-Leaks). Refer to [Firefox Cross-site Scripting (XSS)](#firefox-cross-site-scripting-xss), [Firefox Cross-Site Request Forgery (CSRF)](#firefox-cross-site-request-forgery-csrf), and [Firefox Cross-Site Leaks (XS-Leaks)](#firefox-cross-site-leaks-xs-leaks) sections.

<p>Disabling Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI) will expose you to cross-site cookies, which weaken your privacy a lot. Therefore:</p>
<ul>
<li><p>Do not use cookie-related extensions that don't work well with Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI) and/or Multi-Account Containers, such as Cookie AutoDelete. </p></li>
<li><p>Due to <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1767271">Bug 1767271</a>, adding a site to cookie-clearing exception will also disable it from Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI). Thus, do not add any cookie-clearing exception unless you are willing to</p>
<ul>
<li>let it access all cookies of other sites in cookie-clearing exceptions, and</li>
<li>let all other sites in cookie-clearing exceptions access its cookies.</li>
</ul>
<p>If you want some cookies to be preserved just disable cookie clearing. This will have no direct impact on your privacy when using Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI) except for the scenario that you also change your IP address, at which you should consider clearing cookies for anonymity. For people with higher threat models, however, consider the possible security impact on cross-site scripting (XSS), cross-site request forgery (CSRF), and cross-site leaks (XS-Leaks) protection. Refer to <a href="#firefox-cross-site-scripting-xss">Firefox Cross-site Scripting (XSS)</a>, <a href="#firefox-cross-site-request-forgery-csrf">Firefox Cross-Site Request Forgery (CSRF)</a>, and <a href="#firefox-cross-site-leaks-xs-leaks">Firefox Cross-Site Leaks (XS-Leaks)</a> sections.</p></li>
<li>You can view, delete, edit, import, and export cookies using an extension that is compatible with Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI) and Multi-Account Containers. I recommend Cookie Manager (<a href="https://addons.mozilla.org/en-US/android/addon/a-cookie-manager">Android</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/a-cookie-manager">Desktop</a>).</li>
</ul>

### Firefox Fingerprint

Besides [fingerprintingProtection (FPP)](https://wiki.mozilla.org/Fingerprinting) in Enhanced Tracking Protection (ETP) Strict Mode, I also use [CanvasBlocker](https://github.com/kkapsner/CanvasBlocker) and [My Fingerprint](https://github.com/omegaee/my-fingerprint) to spoof fingerprints. (Refer to [CanvasBlocker](#canvasblocker) and [My Fingerprint](my_fingerprint) for my settings and remarks.) The reason to use the later is to spoof fingerprints that are not supported by the former, such as offscreen canvas, fonts, and language. Thus, if you disable one of them, some metrics will be leaked. However, all randomizing is detectable. Only Tor Browser and Mullvad Browser with VPN can confidently address advanced scripts: enough metrics covered and a large crowd.

According to [fingerprint protection basics by Arkenfox](https://github.com/arkenfox/user.js/wiki/3.3-Overrides-%5BTo-RFP-or-Not%5D#-summary), a fingerprint protection should protect the real value of each metric, and a script that swallows a randomized value is a naive script. My settings protect more metrics than [fingerprintingProtection (FPP)](https://wiki.mozilla.org/Fingerprinting) in Enhanced Tracking Protection (ETP) Strict Mode, and is also arguably harder to detect than Block Fingerprint of Brave browser. This means that more scripts become naive. In [CanvasBlocker Detection test](https://canvasblocker.kkapsner.de/test/detectionTest.html), my settings only fails `known pixel value test 10: API tampering detected`, which is an [known issue of CanvasBlocker](https://github.com/kkapsner/CanvasBlocker/issues/593), while Block Fingerprint of Brave browser fails `error properties: API tampering detected`, `known pixel value test 1: API tampering detected`, `known pixel value test 10: API tampering detected`, and `readout - in - out test: API tampering detected`. In [CanvasBlocker webGL test](https://canvasblocker.kkapsner.de/test/webGL-Test.html), my settings has stealthy parameter spoofing and consistent offscreen canvas spoofing, while [using only CanvasBlocker fails the later](https://github.com/kkapsner/CanvasBlocker/issues/473) and using My Fingerprint only doesn't spoof parameter. See [Bug 1390089](https://bugzilla.mozilla.org/show_bug.cgi?id=1390089) for more information about offscreen canvas. This settings cause the performance to be a bit slower due to fingerprint randomization process, which can be tested on [CanvasBlocker performance test](https://canvasblocker.kkapsner.de/test/performanceTest.html).

### Firefox Referrer Policy

The HTTP `Referer` request header contains the absolute or partial address from which a resource has been requested. There are problematic uses such as tracking or stealing information, or even just side effects such as inadvertently leaking sensitive information.

`Referrer`-Policy header: The `Referrer`-Policy header provides fine-grained control over how and when browsers transmit the Referer header.
- `no-referrer`: Never send the Referer header.
- `same-origin`: Send the `Referrer` header, but only on same-origin requests.
- `strict-origin`: Send the `Referrer` header to all origins, but only include the URL without the path (e.g., `https://example.com/`).
- `strict-origin-when-cross-origin`: Send the full `Referrer` header on same-origin requests and only the URL without the path on cross-origin requests.

The following settings in Firefox control `Referrer`-Policy:
- `network.http.referer.defaultPolicy`: set the default referrer policy (default 2)
  - 0 = `no-referrer`
  - 1 = `same-origin`
  - 2 = `strict-origin-when-cross-origin`
- `network.http.referer.defaultPolicy.pbmode`: same as `network.http.referer.defaultPolicy` but only for Private Browsing (default 2)
- `network.http.referer.defaultPolicy.trackers`: same as `network.http.referer.defaultPolicy` but only for trackers (default 2)
- `network.http.referer.defaultPolicy.trackers.pbmode`: same as `network.http.referer.defaultPolicy.trackers` but only for Private Browsing (default 2)
- `network.http.sendRefererHeader`: controls whether or not to send a referrer regardless of origin (default 2)
  - 0 = never send the header
  - 1 = send the header only when clicking on links and similar elements
  - 2 = send on all requests (e.g. images, links, etc.)
- `network.http.referer.trimmingPolicy`: controls how much referrer to send regardless of origin (default 0). There's no need to set it other than 0. Only cross-origin requests matter.
  - 0 = send the full URL
  - 1 = send the URL without its query string
  - 2 = only send the origin
- `network.http.referer.XOriginTrimmingPolicy`: same as `network.http.referer.trimmingPolicy` but only for referrers across origins (default 0). For Enhanced Tracking Protection (ETP) Strict Mode, this doesn't matter since `network.http.referer.disallowCrossSiteRelaxingDefault` and `network.http.referer.disallowCrossSiteRelaxingDefault.pbmode` are true.
- `network.http.referer.XOriginPolicy`: controls whether or not to send a referrer across origins (default 0)
  - 0 = (default) send the referrer in all cases
  - 1 = send a referrer only when the base domains are the same
  - 2 = send a referrer only on same-origin
- `network.http.referer.spoofSource`: (default false). False is recommended since spoofing can affect Cross-Site Request Forgery (CSRF) protection according to [Arkenfox](https://github.com/arkenfox/user.js/blob/master/user.js).
  - false = use real referrer
  - true = spoof with URI of the current request
- `network.http.referer.disallowCrossSiteRelaxingDefault`: controls whether or not a referrer across origins can relax default `Referrer`-Policy (ETP Strict Mode set to true)
- `network.http.referer.disallowCrossSiteRelaxingDefault.pbmode`: same as `network.http.referer.disallowCrossSiteRelaxingDefault` but only for Private Browsing (ETP Strict Mode set to true)
- `network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation`: same as `network.http.referer.disallowCrossSiteRelaxingDefault` but only for top navigations (ETP Strict Mode set to true, due to [Bug 1734328](https://bugzilla.mozilla.org/show_bug.cgi?id=1734328).
- `network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation`: same as `network.http.referer.disallowCrossSiteRelaxingDefault` but only for Private Browsing (ETP Strict Mode set to false)

### Firefox WebGPU

To enable WebGPU in Firefox, go to <about:config>, and set `dom.webgpu.enabled` and `gfx.webrender.all` to `true`. This may not work on some GPUs and platforms.

### Firefox for Android Debug Menu

To enable Debug menu in Firefox for Android and its forks, go to Settings > About Firefox (or fork's name), and click Firefox's (or fork's) logo five times. Entries such as Install extension from file and Secret Settings will be shown in Settings.

### Firefox user.js

According to [Arkenfox wiki](https://github.com/arkenfox/user.js/wiki),
<blockquote>
A `user.js` file is a javascript file and is text based, and resides in your profile folder. It is used to set preferences for that profile when Firefox starts. You can update the user.js while Firefox is open, it is only ever read when Firefox starts.

Prefs must follow Mozilla's syntax which is `user_pref("prefname", value);`
- the pref name must be wrapped in quotation marks
- string values must be wrapped in quotation marks
- prefs are case sensitive
- a semi-colon is required at the end
</blockquote>

Some famous Firefox `user.js` include:

### Firefox Cross-Site Leaks (XS-Leaks)

For people with higher threat models only.

According to [XS-Leaks Wiki](https://xsleaks.dev),

<blockquote>Cross-site leaks (aka XS-Leaks, XSLeaks) are a class of vulnerabilities derived from side-channels built into the web platform. They take advantage of the web’s core principle of composability, which allows websites to interact with each other, and abuse legitimate mechanisms to infer information about the user.</blockquote>

Virtually all browsers, including Tor Browser, are subjected to it. You can test it on [XSinator XS-Leak Browser Test Suite](https://xsinator.com/testing.html). Note that many tests may have different results on multiple runs on the same setup and may be influenced by features such as fingerprint spoofing.

Refer to:
- [XSinator.com: From a Formal Model to the Automatic Evaluation of Cross-Site Leaks in Web Browsers (paper)](https://xsinator.com/paper.pdf)
- [XS-Leaks Wiki](https://xsleaks.dev)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XS-Leaks)
- [Bug 1742425](https://bugzilla.mozilla.org/show_bug.cgi?id=1742425)

### Firefox Further Hardening

For people with higher threat model, consider further hardening Firefox, which may break some sites and functions.
- [Arkenfox](https://github.com/arkenfox/user.js)
- [Betterfox](https://github.com/yokoffing/Betterfox)
- [Phonix](https://codeberg.org/celenity/Phoenix)
- [resistfingeprinting (RFP)](https://support.mozilla.org/en-US/kb/resist-fingerprinting)
- [higher blocking mode of uBlock Origin](https://github.com/gorhill/uBlock/wiki/Blocking-mode)
- [NoScript Security Suite](https://noscript.net)
- Hardened Firefox fork: Refer to [Browsers](#browsers) section.

### Firefox Tests

Refer to Arkenfox wiki:
- [Appendix A Test Sites](https://github.com/arkenfox/user.js/wiki/Appendix-A-Test-Sites)
- [Appendix B Test Sites [Fingerprinting]](https://github.com/arkenfox/user.js/wiki/Appendix-B-Test-Sites-%5BFingerprinting%5D)

## Browsers

Make sure your browsers are up-to-date for security reason.

### Android Browsers

The link on the name of a browser is the link to its source code. The link on the store that it comes from is the link to install it.

Stores:
- [FFUpdater](https://github.com/Tobi823/ffupdater) (`de.marmaro.krt.ffupdater`) from [F-Droid](https://f-droid.org/packages/de.marmaro.krt.ffupdater): Install and update browsers. All browsers below can be installed and updated in it.
- [Droid-fy](https://github.com/Droid-ify/client) (`com.looker.droidify`) from [F-Droid](https://f-droid.org/packages/com.looker.droidify): Install apps from F-Droid repositories (hereafter referred to as F-Droid).
- [Aurora Store](https://gitlab.com/AuroraOSS/AuroraStore) (`com.aurora.store`) from [F-Droid](https://f-droid.org/packages/com.aurora.store): Unofficial, FOSS client to Google Play to install and update apps on Google Play without login to a Google account.

Firefox and its forks:
- [Fennec F-Droid](https://gitlab.com/relan/fennecbuild) (`org.mozilla.fennec_fdroid`) from FFUpdater or [F-Droid](https://f-droid.org/packages/org.mozilla.fennec_fdroid): Based on Mozilla Firefox with proprietary bits and telemetry removed.
- [Firefox Focus](https://www.firefox.com/en-US/mobile/focus) from FFUpdater or [Google Play](https://play.google.com/store/apps/details?id=org.mozilla.focus): Essentially Firefox browser's private browsing tab.
- [Firefox Browser](https://www.mozilla.org/firefox/browsers/mobile/android) from FFUpdater or [Google Play](https://play.google.com/store/apps/details?id=org.mozilla.firefox): Mozilla Firefox. `about:config` not accessible.
- [Firefox Klar](https://support.mozilla.org/en-US/kb/what-firefox-klar-android) from FFUpdater or [Google Play](https://play.google.com/store/apps/details?id=org.mozilla.klar): Firefox Focus with a different name in German and telemetry disabled by default.
- [IronFox](https://gitlab.com/ironfox-oss/IronFox) from FFUpdater: Continuation of Divested Computing Group's Mull Browser, based on Mozilla Firefox. Hardened with [Phonix](https://codeberg.org/celenity/Phoenix) for privacy and security.
- [Tor Browser](https://gitlab.torproject.org/tpo/applications/tor-browser) from FFUpdater, [Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser), or [F-Droid](https://droidify.app/app/?id=org.torproject.torbrowser&repo_address=https://guardianproject.info/fdroid/archive): Based on Mozilla Firefox. For advanced user only. Use Tor, a distributed network of relays run by volunteers all around the world to prevent censorship and surveillance, prevent sites you visit from obtaining your IP and fingerprint. This is the only browser on Android that can confidently address advanced fingerprinting scripts and archive anonymity. Some sites and functions may break. Refer to [Tor Project](https://torproject.org) for more information. However, it is still subjected to XS-leaks. Refer to [Firefox XS-Leaks](#firefox-xs-leaks).

Chromium forks:
- [Vanadium](https://github.com/GrapheneOS/Vanadium): Based on Chromium. For GrapheneOS only. Refer to [GrapheneOS](https://grapheneos.org/features#vanadium).
- [Brave Browser](https://brave.com): Based on Chromium. Currently doesn't support extensions.
- [Cromite](https://github.com/uazo/cromite): Based on Chromium. Supports manifest V2 (needed by uBlock Origin) and extensions (experimental).

Since Firefox Multi-Account Containers (MAC) doesn't support Android, you can use multiple browsers to achieve similar functionality. Besides different browsers, Work Profile (in contrast to Personal Profile) can provide the second instance for each browser. I recommend using [Insular](https://gitlab.com/secure-system/Insular) (`com.oasisfeng.island.fdroid`) from [F-Droid](https://f-droid.org/packages/com.oasisfeng.island.fdroid) or [Shelter](https://gitea.angry.im/PeterCxy/Shelter) (`net.typeblog.shelter`) from [F-Droid](https://droidify.app/app/?id=net.typeblog.shelter&repo_address=https://fdroid.typeblog.net) to manage Work Profile.

For people with higher threat models, note that Firefox and its forks on Android are less secure than Chromium-based browsers (refer to [GrapheneOS](https://grapheneos.org/usage#web-browsing) and [madaidans](https://madaidans-insecurities.github.io/firefox-chromium.html)), while Chromium-based browser might lack enough privacy features.

### Desktop Browsers

- [Firefox Browser](https://www.firefox.com): Mozilla Firefox. My default browser. If you are Debian derivatives users, you may want to checkout my [switch-firefox-from-snap-to-deb](https://github.com/Willie169/switch-firefox-from-snap-to-deb) repo.
- [Brave Browser](https://brave.com): Based on Chromium.
- [LibreWolf](https://librewolf.net): Based on Mozilla Firefox. For advanced user only. LibreWolf is designed to increase protection against tracking and fingerprinting techniques, while also including a few security improvements. It has [resistfingeprinting (RFP)](https://support.mozilla.org/en-US/kb/resist-fingerprinting) enabled and sends referrer only when the full hostnames match (`network.http.referer.XOriginPolicy=2`). Some sites and functions may break.
- [Tor Browser](https://torproject.org): Based on Mozilla Firefox. For advanced user only. Use Tor, a distributed network of relays run by volunteers all around the world to prevent censorship and surveillance, prevent sites you visit from obtaining your IP and fingerprint. Tor Browser and Mullvad Browser with a trustworthy VPN are the only browsers that can confidently address advanced fingerprinting scripts and achieve anonymity. Some sites and functions may break. However, it is still subjected to XS-leaks. Refer to [Firefox XS-Leaks](#firefox-xs-leaks).
- [Mullvad Browser](https://mullvad.net/en/browser): Based on Mozilla Firefox. For advanced user only. Tor Browser without the Tor Network developed in a collaboration between Mullvad VPN and the Tor Project ([source code (GitHub)](https://github.com/mullvad/mullvad-browser)), typically used with a trustworthy VPN. Tor Browser and Mullvad Browser with a trustworthy VPN are the only browsers that can confidently address advanced fingerprinting scripts and achieve anonymity. Some sites and functions may break. However, it is still subjected to XS-leaks. Refer to [Firefox XS-Leaks](#firefox-xs-leaks).

The fingerprint and tracking resistance of Firefox forks is Firefox Browser without Enhanced Tracking Protection (ETP) Strict Mode < Firefox Browser with Enhanced Tracking Protection (ETP) Strict Mode < LibreWolf < Mullvad Browser with a trustworthy VPN = Tor Browser, while the likelihood of breaking sites and functions is the same.

## Search Engines

The engines contain my settings profiles in URL parameters when applicable, which includes disabling AI features, disabling safe search, and more.

Format:
```
Search string URL with %s in place of search term
Search suggestion URL with %s in place of search term (optional)
```

Search engines:
- [Bing](Bing.txt)
- [Brave](Brave.txt): Recommended.
- [Cambridge Dictionary](Cambridge%20Dictionary.txt)
- [DuckDuckGo](DuckDuckGo.txt):  Recommended.
- [DuckDuckGo HTML](DuckDuckGo%20HTML.txt)
- [DuckDuckGo Lite](DuckDuckGo%20Lite.txt)
- [DuckDuckGo NoAI](DuckDuckGo%20NoAI.txt)
- [Ecosia](Ecosia.txt)
- [GitHub](GitHub.txt)
- [Google Scholar](Google%20Scholar.txt)
- [Google Translate](Google%20Translate.txt)
- [Google](Google.txt)
- [Mojeek](Mojeek.txt)
- [Perplexity](Perplexity.txt)
- [Qwant Lite](Qwant%20Lite.txt)
- [Qwant](Qwant.txt)
- [Reddit](Reddit.txt)
- SearXNG: Find a trusted instance near you from [SearXNG instances](https://searx.space) or self-host one. Search string URL with %s in place of search term is the instance URL with `?q=%s` appended, such as `https://search.anoni.net/?q=%s`. Recommended.
- [Startpage](Startpage.txt): Recommended.
- [Wikipedia (en)](Wikipedia%20(en).txt)
- [Yahoo!](Yahoo!.txt)
- [YouTube](YouTube.txt)

## Browser Settings

TODO

### Gecko-Based Browsers

### Brave Browser

### Cromite

## Extensions

### Geck-based Browsers Extensions

Note for Android: If an extension is shown as un available, click Desktop site and ensure the link starts with `https://addons.mozilla.org/en-US/firefox` instead of `https://addons.mozilla.org/en-US/android`, then the Add to Firefox button may become clickable. Those need this will be labeled Android (Desktop) below.

Types:
- 2: Needed for privacy or security.
- 1: Optional.

<table>
<tr><th>Name</th><th>Source Code</th><th>Android</th><th>Desktop</th><th>Type</th><th>My Settings or Remarks</th><th>Self Description</th></tr>
<tr><td>Anime4K WebExtension</td><td><a href="https://github.com/chenmozhijin/Anime4K-WebExtension">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/anime4k-webextension">Android (Desktop)</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/anime4k-webextension">Desktop</a></td><td>1</td><td>Need WebGPU enabled to work and may not work on some GPUs and platforms. Refer to <a href="firefox-webgpu">Firefox WebGPU</a> section.</td><td>Real-time video super-resolution browser extension based on Anime4K.</td></tr>
<tr><td>Bitwarden Password Manager</td><td><a href="https://github.com/bitwarden/clients">GitHub</a></td><td>No need on Android. Use <a href="https://github.com/bitwarden/android">native app</a> from <a href="https://droidify.app/app/?id=com.x8bit.bitwarden&repo_address=https://mobileapp.bitwarden.com/fdroid/repo">F-Droid</a> or <a href="https://play.google.com/store/apps/details?id=com.x8bit.bitwarden">Google Play</a> instead.<td><a href="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager">Desktop</a></td><td>1</td><td>Do not use the browsers' built-in password managers. They are not as secure as dedicated password managers. I recommend those recommended by <a href="https://www.privacyguides.org/en/passwords">Privacy Guides</a>.</td><td>At home, at work, or on the go, Bitwarden easily secures all your passwords, passkeys, and sensitive information.</td></tr>
<tr id="canvasblocker"><td>CanvasBlocker</td><td><a href="https://github.com/kkapsner/CanvasBlocker">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/canvasblocker">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/canvasblocker">Desktop</a></td><td>2</td><td></td><td>Alters some JS APIs to prevent fingerprinting.</td></tr>
<tr><td>ClearURLs</td><td><a href="https://github.com/ClearURLs/Addon">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/clearurls">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/clearurls">Desktop</a></td><td>1</td><td></td><td>Removes tracking elements from URLs.</td></tr>
<tr><td>Cookie Manager</td><td><a href="https://github.com/Rob--W/cookie-manager">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/a-cookie-manager">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/a-cookie-manager">Desktop</a></td><td>1</td><td><blockquote>
By default, the Cookie Manager opens when the extension starts up. You can also turn off the automatic opening.

Supported features:
<ul>
<li>Viewing all cookies</li>
<li>Querying cookies by any combination of url, domain, path, cookie content (name/value), httpOnly/secure/sameSite/session flags, expiration time range.</li>
<li>Recognizes cookie jars (default, private browsing mode, container tabs aka userContext).</li>
<li>Allows you to remove individual cookies, or all matching cookies with one click.</li>
<li>Supports Firefox for Android (Fenix)</li>
<li>Supports the TOR Browser (and first-party domain cookies)</li>
<li>Supports partitioned cookies (known as State Partitioning or Total Cookie Protection)</li>
<li>Add cookies</li>
<li>Edit cookies</li>
<li>Import / export cookies
<ul>
<li>JSON format for backup and restoration purposes.</li>
<li>Netscape HTTP Cookie File format for use with other tools like curl and wget.</li>
</ul>
</li>
<li>Copying cookies to a different cookie jar</li>
<li>Whitelisting cookies</li>
</ul>
</blockquote>
<p>Refer to <a href="#firefox-cookies-and-supercookies">Firefox Cookies and Supercookies</a> section.</p></td><td>An efficient cookie manager. View, edit, delete and search for cookies. Supports private mode and Firefox mobile too. Designed for privacy and security aware users. Enable this extension to open the cookie manager, disable it if you are done.</td></tr>
<tr><td>Copy Link Text</td><td><a href="https://github.com/AbdellahSlimani/copy-link-text">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/copy-link-text-sytelix">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/copy-link-text-sytelix">Desktop</a></td><td>1</td><td></td><td>The only extension that lets you effortlessly copy link text on both desktop and mobile—via right-click, Alt+C shortcut, or Copy Mode activation.</td></tr>
<tr><td>Ctrl + Shift + C Should Copy</td><td><a href="https://github.com/jscher2000/Ctrl-Shift-C-Should-Copy">GitHub</a></td><td>No need on Android.</td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/ctrl-shift-c-should-copy">Desktop</a></td><td>1</td><td>Use if you want Ctrl+Shift+C to copy.</td><td>Intercepts Ctrl+Shift+C, blocks opening developer tools, and copies the selection to the clipboard.</td></tr>
<tr><td>Disable AI</td><td><a href="https://github.com/jruns/disable-ai">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/disable-ai">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/disable-ai">Desktop</a></td><td>1</td><td></td><td>Don't just hide results. Disable AI overviews on Brave Search, DuckDuckGo, Ecosia, Google, and Qwant so your searches consume less energy and water.</td></tr>
<tr><td>Download All Images</td><td><a href="https://github.com/belaviyo/save-images/">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/save-all-images-webextension">Android (Desktop)</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/save-all-images-webextension">Desktop</a></td><td>1</td><td></td><td>Easily save images with a wide range of customization features, such as file size, dimensions, and image type.</td></tr>
<tr><td>Firefox Multi-Account Containers</td><td><a href="https://github.com/mozilla/multi-account-containers">GitHub</a></td><td>Not available on Android due to <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1807456">Bug 1807456</a>. See <a href="#android-browsers"</a>Android Browsers</a> for instructions.</td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers">Desktop</a></td><td>1</td><td>Use if you want to keep different set of cookies such as login info for a site. Refer to <a href="#firefox-cookies-and-supercookies">Firefox Cookies and Supercookies</a> section.</td><td>Firefox Multi-Account Containers lets you keep parts of your online life separated into color-coded tabs. Cookies are separated by container, allowing you to use the web with multiple accounts and integrate Mozilla VPN for an extra layer of privacy.</td></tr>
<tr><td>Firefox Relay</td><td><a href="https://github.com/mozilla/fx-private-relay-add-on">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/private-relay">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/private-relay">Desktop</a></td><td>1</td><td>Need login to Mozilla account.</td><td>Firefox Relay lets you generate email aliases that forward to your real inbox. Use it to hide your real email address and protect yourself from hackers and unwanted mail.</td></tr>
<tr><td>floccus</td><td><a href="https://github.com/floccusaddon/floccus">GitHub</a></td><td><blockquote>Floccus requires specific bookmarks APIs, however, which have not been implemented in Firefox for Android yet. So, we still wait, but the waiting won't be long.</blockquote></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/floccus">Desktop</a></td><td>1</td><td>You can sync with Nextcloud Bookmarks (cannot make use of end-to-end encryption), with Linkwarden (cannot make use of end-to-end encryption and does not support keeping the order of bookmarks across syncs), with Karakeep (cannot make use of end-to-end encryption and does not support keeping the order of bookmarks across syncs), via WebDAV (can choose to use end-to-end encryption), via Git over HTTPS (can not make use of end-to-end encryption and currently not available in the mobile app), and via Google Drive (can choose to use end-to-end encryption), and via Dropbox (can choose to use end-to-end encryption).

The Android app floccus bookmark sync is available on [F-Droid](https://f-droid.org/packages/org.handmadeideas.floccus), [GitHub release](https://github.com/floccusaddon/floccus/releases), and [Google Play Store](https://play.google.com/store/apps/details?id=org.handmadeideas.floccus).</td><td>Securely synchronize bookmarks across Chrome, Firefox, Edge, and more using your own cloud storage.</td></tr>
<tr><td>Force Copy</td><td><a href="https://github.com/WindrunnerMax/TKScript">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/force-copy">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/force-copy">Desktop</a></td><td>1</td><td>Do not use Start since it may break some sites. It's recommended to use Once when you need.</td><td>Force Copy professionally circumvents limitations pertaining to Web Copying, Keyboard Usage, and Right-click Functionalities, facilitating an unhindered browsing experience. Open Source Project: https://github.com/WindrunnerMax/TKScript.</td></tr>
<tr><td>LibRedirect</td><td><a href="https://github.com/libredirect/browser_extension">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/libredirect">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/libredirect">Desktop</a></td><td>1</td><td></td><td>Redirects YouTube, Twitter, TikTok... requests to alternative privacy friendly frontends.</td></tr>
<tr><td>MobiDevTools</td><td><a href="https://sourceforge.net/projects/mobidevtools">SourceForge</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/mobidevtools">Android</a></td><td>No need on desktop.</td><td>1</td><td></td><td>an extension that adds Eruda developer tools to Firefox Android. Lets you use the console, inspect elements, and network monitor on your phone</td></tr>
<tr id="my_fingerprint"><td>My Fingerprint</td><td><a href="https://github.com/omegaee/my-fingerprint">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/my-fingerprint">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/my-fingerprint">Desktop</a></td><td>2</td><td><a href="My_Fingerprint.json">My_Fingerprint.json</a> is my settings. To apply it, go to any site, click My Fingerprint from Extensions, go to <code>Config > Script Config</code> and turn on Fast Injection Mode, go to <code>More > Subscribe</code>, paste <code>https://raw.githubusercontent.com/Willie169/browser-privacy-guide/refs/heads/main/My_Fingerprint.json</code> in it, and click the check mark.</td><td>Protect Your Browser Fingerprints</td></tr>
<tr><td>Plasma Integration</td><td><a href="https://invent.kde.org/plasma/plasma-browser-integration">KDE's GitLab</a></td><td>No need on Android.</td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/plasma-integration">Desktop</a></td><td>1</td><td>Use if you are use KDE Plasma desktop environment. No need otherwise.</td><td>Multitask efficiently by controlling browser functions from the Plasma desktop.</td></tr>
<tr><td>Read Aloud: A Text to Speech Voice Reader</td><td><a href="https://github.com/ken107/read-aloud">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/read-aloud">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/read-aloud">Desktop</a></td><td>1</td><td></td><td>Read out loud the current web-page article with one click. Supports 40+ languages.</td></tr>
<tr><td>Reddit NSFW Unblocker</td><td><a href="https://github.com/sixP-NaraKa/reddit-nsfw-unblocker">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/reddit-nsfw-unblocker">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/reddit-nsfw-unblocker">Desktop</a></td><td>1</td><td></td><td>Unblock and remove these pesky popups and blurs to freely view NSFW content! No login required. Made for the new Reddit (Beta) UI.</td></tr>
<tr><td>Redirect AMP to HTML</td><td><a href="https://github.com/da2x/amp2html">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/amp2html">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/amp2html">Desktop</a></td><td>1</td><td></td><td>Automatically redirects AMP pages to the regular web page variant.</td></tr>
<tr><td>Return YouTube Dislike</td><td><a href="https://github.com/Anarios/return-youtube-dislike">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes">Android (Desktop)</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes">Desktop</a></td><td>1</td><td></td><td>Returns ability to see dislike statistics on youtube</td></tr>
<tr><td>Search by Image</td><td><a href="https://github.com/dessant/search-by-image">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/search_by_image">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/search_by_image">Desktop</a></td><td>1</td><td></td><td>A powerful reverse image search tool, with support for various search engines, such as Google, Bing, Yandex, Baidu and TinEye.</td></tr>
<tr><td>TWP - Translate Web Pages</td><td><a href="https://github.com/FilipePS/Traduzir-paginas-web">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/traduzir-paginas-web">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web">Desktop</a></td><td>1</td><td><blockquote>Privacy policy: We do not collect any information. However, to translate, the contents of the web pages will be sent to Google or Yandex servers.</blockquote></td><td>Translate your page in real time using Google, Bing or Yandex. It is not necessary to open new tabs.</td></tr>
<tr><td>Ultra Volume Booster</td><td><a href="https://github.com/R3DHULK/Ultra-Volume-Booster">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/ultra-volume-booster">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/ultra-volume-booster">Desktop</a></td><td>1</td><td></td><td>Boost audio volume up to 1000% with a sleek dark glassmorphism UI</td></tr>
<tr><td>User-Agent Switcher and Manager</td><td><a href="https://github.com/ray-lothian/UserAgent-Switcher">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher">Android (Desktop)</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher">Desktop</a></td><td>1</td><td>Only change user agent string when you explicitly want to. Changing it by default may lead to inconsistent metrics and cause you to be more trackable.</td><td>Spoof websites trying to gather information about your web navigation—like your browser type and operating system—to deliver distinct content you may not want.</td></tr>
<tr><td>Violentmonkey</td><td><a href="https://addons.mozilla.org/en-US/android/addon/violentmonkey">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/violentmonkey">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/violentmonkey">Desktop</a></td><td>1</td><td><p>My settings and installed scripts are in <a href="violentmonkey.zip">violentmonkey.zip</a>, which includes the following installed scripts <a href="https://greasyfork.org/zh-CN/scripts/378351-csdngreener-csdn%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4-%E5%85%8D%E7%99%BB%E5%BD%95-%E4%B8%AA%E6%80%A7%E5%8C%96%E6%8E%92%E7%89%88-%E6%9C%80%E5%BC%BA%E8%80%81%E7%89%8C%E8%84%9A%E6%9C%AC-%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0">最强的老牌脚本CSDNGreener：CSDN广告完全过滤、人性化脚本优化</a> (homepage: <a href="https://github.com/adlered/CSDNGreener">CSDNGreener GitHub</a>), <a href="https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js">AdGuard Extra</a> (homepage: <a href="https://github.com/AdguardTeam/AdGuardExtra">AdGuardExtra GitHub</a>), and <a href="https://windrunnermax.github.io/TKScript/devtools.user.js">移除 DevTools 拦截器</a> (homepage: <a href="https://github.com/WindrunnerMax/TKScript">TKScript GitHub</a>).</p><p>This is my only recommended extension for userscript support since many userscripts don't function correctly under Greasemonkey, and Tampermonkey is no longer open source.</p></td><td>Userscript support for browsers, open source.</td></tr>
<tr><td>Web Archives</td><td><a href="https://github.com/dessant/web-archives">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/view-page-archive">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/view-page-archive">Desktop</a></td><td>1</td><td></td><td>View archived and cached versions of web pages on various search engines, such as the Wayback Machine and Archive․is.</td></tr>
<tr id="ublock_origin"><td>uBlock Origin</td><td><a href="https://github.com/gorhill/uBlock">GitHub</a></td><td><a href="https://addons.mozilla.org/en-US/android/addon/ublock-origin">Android</a></td><td><a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin">Desktop</a></td><td>2</td><td>My settings is <a href="my-ublock-backup.txt">my-ublock-backup.txt</a>, which uses <a href="https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-Benefits-of-blocking-3rd-party-iframe-tags">dynamic filtering of third-party iframe tags</a> to avoid site breaking. Adjust Regions, languages filter lists to match the sites you typically visit. My settings contains <code>cn [tw]  tw: AdGuard Chinese (中文)</code> and <code>[jp]  jp: AdGuard Japanese</code>. Do not blindly enable excessive filter lists, otherwise the loading time when visiting a site will increase. If you are not using ClearURLs or similar extensions, you may want to add Actually Legitimate URL Shortener Tool (<code>https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt</code>) and/or ClearURLs for uBo (unofficial) (<code>https://raw.githubusercontent.com/DandelionSprout/adfilt/refs/heads/master/ClearURLs%20for%20uBo/clear_urls_uboified.txt</code>) filter lists. See <a href="https://github.com/gorhill/uBlock/wiki">uBlock Origin wiki</a> for more information.</td><td>Finally, an efficient wide-spectrum content blocker. Easy on CPU and memory.</td></tr>
</table>

The following extensions should NOT be used because they may weaken your privacy or security:
- Privacy Badger: can be easily fingerprined and redundant with Enhanced Tracking Protection (ETP) Strict Mode and uBlock Origin.
- Cookie or supercookie-related extensions that don't work well with Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI), State Partitioning, and/or Multi-Account Containers, such as Cookie AutoDelete. I recommend to use Cookie Manager instead. Refer to [Firefox Cookies and Supercookies](#firefox-cookies-and-supercookies) section.
- uMatrix: No longer maintained. Most things it can do are covered by other extensions that do it better, notably uBlock Origin for any content blocking. If you still want to use it, do not add any content-security-policy (CSP) in it because it will affect the CSP of uBlock Origin due to [Bug 1462989](https://bugzilla.mozilla.org/show_bug.cgi?id=1462989).
- Ghostery – Privacy Ad Blocker, Disconnect, AdGuard AdBlocker, and other advertising, trackers, and/or pop-ups blockers: Redundant with Enhanced Tracking Protection (ETP) Strict Mode and uBlock Origin. If you still want to use them, do not add any content-security-policy (CSP) in it because it will affect the CSP of uBlock Origin due to [Bug 1462989](https://bugzilla.mozilla.org/show_bug.cgi?id=1462989).
- Chameleon and other fingerprint protection extensions: Already covered by settings and extensions in this repo. Use multiple extensions to protect a metric may cause significant performance issue. Refer to [Firefox Fingerprint](#firefox-fingerprint) section.
- LocalCDN, Decentraleyes, and other CDN extensions (arguably, according to [Arkenfox wiki](https://github.com/arkenfox/user.js/wiki/4.1-Extensions)):
  - Most of them are outdated.
  - They may break some sites.
  - They may be fingerprinted [according to cypherpunks, a Tor Project developer](https://gitlab.torproject.org/tpo/applications/tor-browser/-/work_items/22089#note_2639594).
- All extensions that
  - you don't trust to give the requested permissions,
  - break other privacy or security configurations, or
  - are unwantedly fingerprintable.

### Brave Browser for Desktop Extensions

TODO: update

- [Bitwarden Password Manager](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb)
- [Copy link text](https://chromewebstore.google.com/detail/copy-link-text/blpfhbolaobkkaalciociiglbefpglaf)
- [Disable AI](https://chromewebstore.google.com/detail/disable-ai/blhpdcldeaiejfmdfbjonoafgkndhfcg)
- [Download All Images](https://chromewebstore.google.com/detail/download-all-images/nnffbdeachhbpfapjklmpnmjcgamcdmm)
- [Force Copy](https://chromewebstore.google.com/detail/force-copy/cceclgeciefpanebkfkogecbjjchmico)
- [PDF Reader and Editor](https://chromewebstore.google.com/detail/pdf-reader-and-editor/ieepebpjnkhaiioojkepfniodjmjjihl)
- [Plasma Integration](https://chromewebstore.google.com/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai): Since I'm using KDE Plasma. If you're not using it, you don't need this.
- [Read Aloud: A Text to Speech Voice Reader](https://chromewebstore.google.com/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp)
- [Search by Image](https://chromewebstore.google.com/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci)
- uBlock Origin: Brave-hosted.
- [User-Agent Switcher and Manager](https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg)
- [Web Archives](https://chromewebstore.google.com/detail/web-archives/hkligngkgcpcolhcnkgccglchdafcnao)

## References and Resources

- <https://api-dashboard.search.brave.com/app/documentation/news-search/query>
- <https://assets.ironfoxoss.org/ublock/assets.jsont>
- <https://blog.mozilla.org/security/2021/01/26/supercookie-protections>
- <https://blog.mozilla.org/security/2021/02/23/total-cookie-protection>
- <https://blog.mozilla.org/security/2021/03/22/firefox-87-trims-http-referrers-by-default-to-protect-user-privacy/>
- <https://bugzilla.mozilla.org/show_bug.cgi?id=1390089>
- <https://bugzilla.mozilla.org/show_bug.cgi?id=1462989>
- <https://bugzilla.mozilla.org/show_bug.cgi?id=1734328>
- <https://bugzilla.mozilla.org/show_bug.cgi?id=1742425>
- <https://bugzilla.mozilla.org/show_bug.cgi?id=1767271>
- <https://bugzilla.mozilla.org/show_bug.cgi?id=1807456>
- <https://canvasblocker.kkapsner.de>
- <https://codeberg.org/celenity/BadBlock>
- <https://codeberg.org/celenity/Phoenix>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/DNT>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referer>
- <https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns>
- <https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/State_Partitioning>
- <https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XS-Leaks>
- <https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/Referrer_policy>
- <https://duckduckgo.com/duckduckgo-help-pages/settings/params>
- <https://duckduckgo.com/duckduckgo-help-pages/settings/save>
- <https://easylist.to>
- <https://en.wikipedia.org/wiki/Do_Not_Track>
- <https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters>
- <https://github.com/AdguardTeam/AdGuardExtra>
- <https://github.com/arkenfox/user.js/issues/1439>
- <https://github.com/arkenfox/user.js/raw/refs/heads/master/user.js>
- <https://github.com/arkenfox/user.js/wiki>
- <https://github.com/arkenfox/user.js>
- <https://github.com/easylist/easylist>
- <https://github.com/gorhill/uBlock/wiki>
- <https://github.com/gorhill/uBlock>
- <https://github.com/hagezi/dns-blocklists>
- <https://github.com/jruns/disable-ai>
- <https://github.com/kkapsner/CanvasBlocker>
- <https://github.com/liamengland1/miscfilters>
- <https://github.com/omegaee/my-fingerprint>
- <https://github.com/yokoffing/filterlists>
- <https://gitlab.com/DandelionSprout/adfilt>
- <https://gitlab.com/ironfox-oss/IronFox>
- <https://grapheneos.org/usage#web-browsing>
- <https://greasyfork.org>
- <https://madaidans-insecurities.github.io/firefox-chromium.html>
- <https://openuserjs.org>
- <https://serpapi.com/blog/google-search-parameters>
- <https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop>
- <https://support.mozilla.org/en-US/kb/resist-fingerprinting>
- <https://support.mozilla.org/en-US/questions/1130505>
- <https://trustmyip.com/referrer-leak-test>
- <https://wiki.mozilla.org/Fingerprinting>
- <https://wiki.mozilla.org/Project_Fission>
- <https://wiki.mozilla.org/Security/Referrer>
- <https://www.dedoimedo.com/computers/bing-search-no-ai.html>
- <https://www.privacyguides.org/en/desktop-browsers>
- <https://www.privacyguides.org/en/mobile-browsers>
- <https://www.privacyguides.org/en/passwords>
- <https://www.privacyguides.org/en/tor>
- <https://xsinator.com/paper.pdf>
- <https://xsinator.com/testing.html>
- <https://xsleaks.dev>

## LICENSE

This project is licensed under GPL-3.0-or-later. See [LICENSE.md](LICENSE.md).

