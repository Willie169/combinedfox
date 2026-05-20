# browser-privacy-guide

This repo contains my recommendations on daily browsers setup on Android and Desktop to enhance privacy without site breaking.

For people with higher threat models that are willing to trade off some convenience for privacy, security, or anonymity, some suggestions is also listed below but covered less thoroughly.

For iOS users, some suggestions may not apply to you and many extensions may not be available. You may refer to [Privacy Guides](https://www.privacyguides.org/en/mobile-browsers) for some information.

## Browser Hardening without Site Breaking

A particular strength is my hardening of Firefox for both Android and desktop without site breaking. Some explanation and recommendations are provided below.

### uBlock Origin

My settings for uBlock Origin (uBO) for Firefox uses [dynamic filtering of third-party iframe tags](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-Benefits-of-blocking-3rd-party-iframe-tags) to avoid site breaking.
<!-- TODO -->
I haven't decide whether this should be applied to Brave browsers as well due to fingerprint detection.

### Firefox Cookies and Supercookies

- Total Cookie Protection (TCP) / dynamic First Party Isolation (dFPI): Included in Enhanced Tracking Protection (ETP) Strict Mode. Work by maintaining a separate cookie jar for each website you visit. Any time a website, or third-party content embedded in a website, deposits a cookie in your browser, that cookie is confined to the cookie jar assigned to that website, such that it is not allowed to be shared with any other website.
- State Partitioning / Supercookies Protection: Enabled by default for all users.
  - Network Partitioning: Networking-related APIs are not intended to be used for websites to store data, but they can be abused for cross-site tracking. As such, the following network APIs and caches are permanently partitioned by the top-level site: HTTP Cache, Image Cache, Favicon Cache, Connection Pooling, Script Cache, Stylesheet Cache, DNS, HTTP Authentication, Alt-Svc, Speculative Connections, Fonts & Font Cache, HSTS, OCSP, Intermediate CA Cache, TLS Client Certificates, TLS Session Identifiers, Prefetch, Preconnect, CORS-preflight Cache, WebRTC deviceID, Backward/forward cache (bfcache).
  - Dynamic State Partitioning: To prevent JavaScript-accessible storage APIs from being used for cross-site tracking, accessible storage is partitioned by top-level site. To improve web compatibility, Firefox currently includes some heuristics to grant unpartitioned access to cookies automatically to third parties that receive user interaction. These heuristics are intended to allow some third-party integrations that are common on the web to continue to function.
- Multi-Account Containers: Use if you want to keep different set of cookies such as login info for a site. If you have no such need, this won't enhance your privacy more than the protection listed above.

### Firefox Fingerprint

I use CanvasBlocker and My Fingerprint to spoof fingerprints. The reason to use the later is to spoof fingerprints that are not supported by the former, such as offscreen canvas, fonts, and language. Thus, if you disable one of them, some metrics will be leaked. However, all randomizing is detectable. Only Tor Browser (and maybe Mullvad Browser) can confidently address advanced scripts: enough metrics covered and a large crowd.

According to [fingerprint protection basics by Arkenfox](https://github.com/arkenfox/user.js/wiki/3.3-Overrides-%5BTo-RFP-or-Not%5D#-summary), a fingerprint protection should protect the real value of each metric, and a script that swallows a randomized value is a naive script. My settings protect more metrics than fingerprintingProtection (FPP) in Enhanced Tracking Protection (ETP) Strict Mode. You can test them in sites such as [Test pages for CanvasBlocker](https://canvasblocker.kkapsner.de/test), [BrowserLeaks](https://browserleaks.com), and [Am I Unique?](http://amiunique.org). My settings is also arguably harder to detect than Block Fingerprint of Brave browser. This means that more scripts become naive. In [CanvasBlocker Detection test](https://canvasblocker.kkapsner.de/test/detectionTest.html), my settings only fails `known pixel value test 10: API tampering detected`, which is an [known issue of CanvasBlocker](https://github.com/kkapsner/CanvasBlocker/issues/593), while Block Fingerprint of Brave browser fails `error properties: API tampering detected`, `known pixel value test 1: API tampering detected`, `known pixel value test 10: API tampering detected`, and `readout - in - out test: API tampering detected`. In [CanvasBlocker webGL test](https://canvasblocker.kkapsner.de/test/webGL-Test.html), my settings has stealthy parameter spoofing and consistent offscreen canvas, while [CanvasBlocker only fails the later](https://github.com/kkapsner/CanvasBlocker/issues/473) and My Fingerprint only doesn't spoof parameter. See [Bug 1390089](https://bugzilla.mozilla.org/show_bug.cgi?id=1390089) for more information about offscreen canvas.

### Firefox for People with Higher Threat Models

Take a look at [Arkenfox](https://github.com/arkenfox/user.js), [higher block mode of uBlock Origin](https://github.com/gorhill/uBlock/wiki/Blocking-mode), and [resistfingeprinting (RFP)](https://github.com/arkenfox/user.js/wiki/3.3-Overrides-%5BTo-RFP-or-Not%5D), which may break some sites.

## Browsers

Make sure your browsers are up-to-date.

### Android

You can use [FFUpdater](https://github.com/Tobi823/ffupdater) (`de.marmaro.krt.ffupdater`), which you can install from [F-Droid](https://f-droid.org/packages/de.marmaro.krt.ffupdater), to auto update them.

- [Fennec F-Droid](https://f-droid.org/packages/org.mozilla.fennec_fdroid): Gecko-based.
- [Firefox for Android](https://www.firefox.com): Gecko-based.
- [Brave Browser](https://brave.com): Chromium-based. Currently doesn't support extensions.
- [Cromite](https://github.com/uazo/cromite): Chromium-based.

For people with higher threat models:
- [IronFox](https://gitlab.com/ironfox-oss/IronFox)
- [Tor Browser](https://torproject.org)
- Use desktop: Gecko-based browsers on Android are less secure than Chromium-based browsers, while Chromium-based browser might lack enough privacy settings. You may refer to [GrapheneOS on web-browsing](https://grapheneos.org/usage#web-browsing) for some information.

### Desktop

- [Firefox](https://www.firefox.com): Gecko-based. If you are Debian derivatives users, you may want to checkout my [switch-firefox-from-snap-to-deb](https://github.com/Willie169/switch-firefox-from-snap-to-deb) repo.
- [Brave Browser](https://brave.com): Chromium-based.

For people with higher threat models:
- See [Firefox for People with Higher Threat Models](#firefox-for-people-with-higher-threat-models)
- [Mullvad Browser](https://mullvad.net/en/browser)
- [Tor Browser](https://torproject.org)

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
- [DuckDuckGo HTML](DuckDuckGo%20HTML.txt)
- [DuckDuckGo Lite](DuckDuckGo%20Lite.txt)
- [DuckDuckGo](DuckDuckGo.txt):  Recommended.
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

### Gecko-Based

### Brave Browser

### Cromite

## Extensions

TODO: Update desktop ones

### Geck-based

Types:
- 2: Needed for browser privacy or security.
- 1: Optional, used to add more functionalities.

<table>
<tr><th>Name</th><th>Source Code</th><th>Android</th><th>Desktop</th><th>Type</th><th>My Settings or Remarks</th><th>Self Description</th></tr>
<tr><th>Bitwarden Password Manager</th><th><a hre="https://github.com/bitwarden/clients">GitHub</a></th><th>Not recommended, use [native app](https://github.com/bitwarden/android) from [F-Droid](https://droidify.app/app/?id=com.x8bit.bitwarden&repo_address=https://mobileapp.bitwarden.com/fdroid/repo) or [Google Play](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden) instead.<th><a hre="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager">Desktop</a></th><th>1</th><th>Do not use the browsers' built-in password managers. They are not as secure as dedicated password managers. I recommend those recommended by [Privacy Guides](https://www.privacyguides.org/en/passwords).</th><th>At home, at work, or on the go, Bitwarden easily secures all your passwords, passkeys, and sensitive information.</th></tr>
<tr><th>CanvasBlocker</th><th><a hre="https://github.com/kkapsner/CanvasBlocker">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/canvasblocker">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/canvasblocker">Desktop</a></th><th>2</th><th></th><th>Alters some JS APIs to prevent fingerprinting.</th></tr>
<tr><th>Cookie Manager</th><th><a hre="https://github.com/Rob--W/cookie-manager">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/a-cookie-manager">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/a-cookie-manager">Desktop</a></th><th>1</th><th>See [Firefox Cookies](#firefox-cookies)</th><th>An efficient cookie manager. View, edit, delete and search for cookies. Supports private mode and Firefox mobile too. Designed for privacy and security aware users. Enable this extension to open the cookie manager, disable it if you are done.</th></tr>
<tr><th>Copy Link Text</th><th><a hre="https://github.com/AbdellahSlimani/copy-link-text">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/copy-link-text-sytelix">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/copy-link-text-sytelix">Desktop</a></th><th>1</th><th></th><th>The only extension that lets you effortlessly copy link text on both desktop and mobile—via right-click, Alt+C shortcut, or Copy Mode activation.</th></tr>
<tr><th>Ctrl + Shift + C Should Copy</th><th><a hre="https://github.com/jscher2000/Ctrl-Shift-C-Should-Copy">GitHub</a></th><th>No need on Android.</th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/ctrl-shift-c-should-copy">Desktop</a></th><th>1</th><th>Use if you want Ctrl+Shift+C to copy.</th><th>Intercepts Ctrl+Shift+C, blocks opening developer tools, and copies the selection to the clipboard.</th></tr>
<tr><th>Disable AI</th><th><a hre="https://github.com/jruns/disable-ai">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/disable-ai">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/disable-ai">Desktop</a></th><th>1</th><th></th><th>Don't just hide results. Disable AI overviews on Brave Search, DuckDuckGo, Ecosia, Google, and Qwant so your searches consume less energy and water.</th></tr>
<tr><th>Download All Images</th><th><a hre="https://github.com/belaviyo/save-images/">GitHub</a></th><th>No available on Android.</th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/save-all-images-webextension">Desktop</a></th><th>1</th><th></th><th>Easily save images with a wide range of customization features, such as file size, dimensions, and image type.</th></tr>
<tr><th>Firefox Multi-Account Containers</th><th><a hre="https://github.com/mozilla/multi-account-containers">GitHub</a></th><th>Not available on Android. See [Bug 1807456](https://bugzilla.mozilla.org/show_bug.cgi?id=1807456) for details.</th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers">Desktop</a></th><th>1</th><th>Use if you want to keep different set of cookies such as login info for a site. See [Firefox Cookies and Supercookies](#firefox-cookies-and-supercookies) section for more information.</th><th>Firefox Multi-Account Containers lets you keep parts of your online life separated into color-coded tabs. Cookies are separated by container, allowing you to use the web with multiple accounts and integrate Mozilla VPN for an extra layer of privacy.</th></tr>
<tr><th>Firefox Relay</th><th><a hre="https://github.com/mozilla/fx-private-relay-add-on">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/private-relay">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/private-relay">Desktop</a></th><th>1</th><th></th><th>Firefox Relay lets you generate email aliases that forward to your real inbox. Use it to hide your real email address and protect yourself from hackers and unwanted mail.</th></tr>
<tr><th>Force Copy</th><th><a hre="https://github.com/WindrunnerMax/TKScript">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/force-copy">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/force-copy">Desktop</a></th><th>1</th><th></th><th>Force Copy professionally circumvents limitations pertaining to Web Copying, Keyboard Usage, and Right-click Functionalities, facilitating an unhindered browsing experience. Open Source Project: https://github.com/WindrunnerMax/TKScript.</th></tr>
<tr><th>My Fingerprint</th><th><a hre="https://github.com/omegaee/my-fingerprint">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/my-fingerprint">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/my-fingerprint">Desktop</a></th><th>2</th>[My_Fingerprint.json](My_Fingerprint.json) is my settings. To apply it, go to any site, click My Fingerprint from Extensions, go to `Config > Script Config` and turn on Fast Injection Mode, go to `More > Subscribe`, paste `https://raw.githubusercontent.com/Willie169/browser-privacy-guide/refs/heads/main/My_Fingerprint.json` in it, and click the check mark.<th></th><th>Protect Your Browser Fingerprints</th></tr>
<tr><th>Plasma Integration</th><th><a hre="https://invent.kde.org/plasma/plasma-browser-integration">KDE's GitLab</a></th><th>No need on Android.</th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/plasma-integration">Desktop</a></th><th>1</th><th>Use if you are use KDE Plasma desktop environment. No need otherwise.</th><th>Multitask efficiently by controlling browser functions from the Plasma desktop.</th></tr>
<tr><th>Play YouTube Video In Background</th><th><a hre="https://github.com/LabinatorSolutions/play-youtube-video-in-background">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/play-yt-video-in-background">Android</a></th><th>No need on desktop.</th><th>1</th><th></th><th>This extension ensures that videos on YouTube and Vimeo continue playing even when you switch tabs, minimize the browser, or lock your screen (on mobile). It eliminates the frustration of videos pausing automatically when they lose focus.</th></tr>
<tr><th>Read Aloud: A Text to Speech Voice Reader</th><th><a hre="https://github.com/ken107/read-aloud">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/read-aloud">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/read-aloud">Desktop</a></th><th>1</th><th></th><th>Read out loud the current web-page article with one click. Supports 40+ languages.</th></tr>
<tr><th>Reddit NSFW Unblocker</th><th><a hre="https://github.com/sixP-NaraKa/reddit-nsfw-unblocker">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/reddit-nsfw-unblocker">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/reddit-nsfw-unblocker">Desktop</a></th><th>1</th><th></th><th>Unblock and remove these pesky popups and blurs to freely view NSFW content! No login required. Made for the new Reddit (Beta) UI.</th></tr>
<tr><th>Redirect AMP to HTML</th><th><a hre="https://github.com/da2x/amp2html">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/amp2html">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/amp2html">Desktop</a></th><th>1</th><th></th><th>Don't just hide results. Disable AI overviews on Brave Search, DuckDuckGo, Ecosia, Google, and Qwant so your searches consume less energy and water.</th></tr>
<tr><th>Search by Image</th><th><a hre="https://github.com/dessant/search-by-image">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/search_by_image">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/search_by_image">Desktop</a></th><th>1</th><th></th><th>A powerful reverse image search tool, with support for various search engines, such as Google, Bing, Yandex, Baidu and TinEye.</th></tr>
<tr><th>TWP - Translate Web Pages</th><th><a hre="https://github.com/FilipePS/Traduzir-paginas-web">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/traduzir-paginas-web">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web">Desktop</a></th><th>1</th><th><blockquote>Privacy policy: We do not collect any information. However, to translate, the contents of the web pages will be sent to Google or Yandex servers.</blockquote></th><th>Translate your page in real time using Google, Bing or Yandex. It is not necessary to open new tabs.</th></tr>
<tr><th>Ultra Volume Booster</th><th><a hre="https://github.com/R3DHULK/Ultra-Volume-Booster">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/ultra-volume-booster">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/ultra-volume-booster">Desktop</a></th><th>1</th><th></th><th>Boost audio volume up to 1000% with a sleek dark glassmorphism UI</th></tr>
<tr><th>User-Agent Switcher</th><th><a hre="https://gitlab.com/ntninja/user-agent-switcher">GitLab</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/uaswitcher">Android</a></th><th>Not recommended, use User-Agent Switcher and Manager instead.</th><th>1</th><th>Only change user agent string when you explicitly want to. Changing it by default may lead to inconsistent metrics and cause you to be more trackable.</th><th>Easily override the browser's User-Agent string</th></tr>
<tr><th>User-Agent Switcher and Manager</th><th><a hre="https://github.com/ray-lothian/UserAgent-Switcher">GitHub</a></th><th>Not available for official stable Firefox, use User-Agent Switcher instead.</th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher">Desktop</a></th><th>1</th><th>Only change user agent string when you explicitly want to. Changing it by default may lead to inconsistent metrics and cause you to be more trackable.</th><th>Spoof websites trying to gather information about your web navigation—like your browser type and operating system—to deliver distinct content you may not want.</th></tr>
<tr><th>Violentmonkey</th><th><a hre="https://addons.mozilla.org/en-US/android/addon/violentmonkey">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/violentmonkey">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/violentmonkey">Desktop</a></th><th>1</th><th>This is my only recommended extension for userscript support since many userscripts don't function correctly under Greasemonkey and Tampermonkey is no longer open source. My settings and installed scripts are in [violentmonkey.zip](violentmonkey.zip).</th><th>Userscript support for browsers, open source.</th></tr>
<tr><th>Web Archives</th><th><a hre="https://github.com/dessant/web-archives">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/view-page-archive">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/view-page-archive">Desktop</a></th><th>1</th><th></th><th>View archived and cached versions of web pages on various search engines, such as the Wayback Machine and Archive․is.</th></tr>
<tr><th>YouTube Dislike Counter</th><th><a hre="https://github.com/Anarios/return-youtube-dislike">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/youtube-dislike-counter">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/youtube-dislike-counter">Desktop</a></th><th>1</th><th></th><th>Restores YouTube video dislike counts for both regular videos and shorts</th></tr>
<tr><th>uBlock Origin</th><th><a hre="https://github.com/gorhill/uBlock">GitHub</a></th><th><a hre="https://addons.mozilla.org/en-US/android/addon/ublock-origin">Android</a></th><th><a hre="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin">Desktop</a></th><th>2</th><th></th><th>Finally, an efficient wide-spectrum content blocker. Easy on CPU and memory.</th></tr>
</table>

### Brave Browser on Desktop

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

- <https://amiunique.org>
- <https://api-dashboard.search.brave.com/app/documentation/news-search/query>
- <https://browserleaks.com>
- <https://canvasblocker.kkapsner.de>
- <https://duckduckgo.com/duckduckgo-help-pages/settings/params>
- <https://duckduckgo.com/duckduckgo-help-pages/settings/save>
- <https://github.com/arkenfox/user.js/wiki>
- <https://github.com/jruns/disable-ai>
- <https://github.com/kkapsner/CanvasBlocker>
- <https://github.com/omegaee/my-fingerprint>
- <https://grapheneos.org/usage#web-browsing>
- <https://serpapi.com/blog/google-search-parameters>
- <https://www.dedoimedo.com/computers/bing-search-no-ai.html>
- <https://www.privacyguides.org/en/desktop-browsers>
- <https://www.privacyguides.org/en/mobile-browsers>
- <https://www.privacyguides.org/en/passwords>
- <https://www.privacyguides.org/en/tor>

## LICENSE

This repo is licensed under GPL-3.0-or-later. See [LICENSE.md](LICENSE.md) for the terms.
