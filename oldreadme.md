### IronFox

<blockquote>
Private, secure, user first web browser for Android. https://ironfoxoss.org/

IronFox is a fork of [Divested Computing Group](https://divested.dev/)'s [Mull Browser](https://web.archive.org/web/20250113132510/https://divestos.org/pages/our_apps#mull), based on [Mozilla Firefox](https://www.firefox.com/). Our goal is to continue the legacy of Mull by providing a free and open source, privacy and security-oriented web browser for daily use.

All users are HIGHLY recommended to take a look at our [documentation](https://ironfoxoss.org/docs/), ESPECIALLY the [Limitations](https://ironfoxoss.org/docs/limitations/) and [Frequently Asked Questions](https://ironfoxoss.org/docs/faq/) pages!

IronFox uses configs from [Phoenix](https://phoenix.celenity.dev/) as well as IronFox-specific changes to harden and configure Gecko’s preferences. For more information on Phoenix’s features, please see [the documentation here](https://codeberg.org/celenity/Phoenix/wiki/Features).
</blockquote>

Refer to [IronFox documentation](https://ironfoxoss.org/docs) and [repo](https://gitlab.com/ironfox-oss/IronFox) for more information.

## Browsers

Make sure your browsers are up-to-date for security reason.

### Android Browsers

The link on the name of a browser is the link to its source code. The link on the store that it comes from is the link to install it.

Stores:
- [FFUpdater](https://github.com/Tobi823/ffupdater) (`de.marmaro.krt.ffupdater`) from [F-Droid](https://f-droid.org/packages/de.marmaro.krt.ffupdater): Install and update browsers. All browsers below can be installed and updated in it.
- [Droid-fy](https://github.com/Droid-ify/client) (`com.looker.droidify`) from [F-Droid](https://f-droid.org/packages/com.looker.droidify): Install apps from F-Droid repositories (hereafter referred to as F-Droid).
- [Google Play Store](https://play.google.com): App store developed by Google.Requiring a Google account. Some browsers below can be installed and updated in it.
- [Aurora Store](https://gitlab.com/AuroraOSS/AuroraStore) (`com.aurora.store`) from [F-Droid](https://f-droid.org/packages/com.aurora.store): Unofficial, FOSS client to Google Play Store without requiring login to a Google account. Some browsers below can be installed and updated in it.

Firefox and its forks:
- [Fennec F-Droid](https://gitlab.com/relan/fennecbuild) (`org.mozilla.fennec_fdroid`) from FFUpdater or [F-Droid](https://f-droid.org/packages/org.mozilla.fennec_fdroid): Based on Mozilla Firefox with proprietary bits and telemetry removed.
- [Firefox Focus](https://www.firefox.com/en-US/mobile/focus) from FFUpdater or [Google Play](https://play.google.com/store/apps/details?id=org.mozilla.focus): Essentially Firefox browser's private browsing tab.
- [Firefox Browser](https://www.mozilla.org/firefox/browsers/mobile/android) from FFUpdater or [Google Play](https://play.google.com/store/apps/details?id=org.mozilla.firefox): Mozilla Firefox. `about:config` not accessible.
- [Firefox Klar](https://support.mozilla.org/en-US/kb/what-firefox-klar-android) from FFUpdater or [Google Play](https://play.google.com/store/apps/details?id=org.mozilla.klar): Firefox Focus with a different name in German and telemetry disabled by default.
- [IronFox](https://gitlab.com/ironfox-oss/IronFox) from FFUpdater: Continuation of Divested Computing Group's Mull Browser, based on Mozilla Firefox. Hardened with [Phonix](https://codeberg.org/celenity/Phoenix) for privacy and security.
- [Tor Browser](https://gitlab.torproject.org/tpo/applications/tor-browser) from FFUpdater, [Google Play](https://play.google.com/store/apps/details?id=org.torproject.torbrowser), or [F-Droid](https://droidify.app/app/?id=org.torproject.torbrowser&repo_address=https://guardianproject.info/fdroid/archive): Based on Mozilla Firefox. For advanced user only. Some sites and functions may break. Refer to [Tor Browser](#tor-browser) section.

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
- [Tor Browser](https://torproject.org): Based on Mozilla Firefox. For advanced user only. Some sites and functions may break. Refer to [Tor Browser](#tor-browser) section.
- [Mullvad Browser](https://mullvad.net/en/browser): Based on Mozilla Firefox. For advanced user only. Some sites and functions may break. Refer to [Mullvad Browser](#mullvad-browser) section.

The fingerprint and tracking resistance of Firefox forks is Firefox Browser without Enhanced Tracking Protection (ETP) Strict Mode < Firefox Browser with Enhanced Tracking Protection (ETP) Strict Mode < LibreWolf < Mullvad Browser with a trustworthy VPN = Tor Browser, while the likelihood of breaking sites and functions is the same.

## Search Engines

The engines contain my settings profiles in URL parameters when applicable, which includes disabling AI features, disabling safe search, and more.

Format:
```
Search string URL with %s in place of search term
Search suggestion URL with %s in place of search term (optional)
```

Search engines:
- [Bing](search-engines/Bing.txt)
- [Brave](search-engines/Brave.txt): Recommended.
- [Cambridge Dictionary](search-engines/Cambridge%20Dictionary.txt)
- [DuckDuckGo](search-engines/DuckDuckGo.txt):  Recommended.
- [DuckDuckGo HTML](search-engines/DuckDuckGo%20HTML.txt)
- [DuckDuckGo Lite](search-engines/DuckDuckGo%20Lite.txt)
- [DuckDuckGo NoAI](search-engines/DuckDuckGo%20NoAI.txt)
- [Ecosia](search-engines/Ecosia.txt)
- [GitHub](search-engines/GitHub.txt)
- [Google Scholar](search-engines/Google%20Scholar.txt)
- [Google Translate](search-engines/Google%20Translate.txt)
- [Google](search-engines/Google.txt)
- [Mojeek](search-engines/Mojeek.txt)
- [No search](search-engines/No%20search.txt): No search engine. Enter sites directly.
- [Perplexity](search-engines/Perplexity.txt)
- [Qwant Lite](search-engines/Qwant%20Lite.txt)
- [Qwant](search-engines/Qwant.txt)
- [Reddit](search-engines/Reddit.txt)
- SearXNG: Find a trusted instance near you from [SearXNG instances](https://searx.space) or self-host one. Search string URL with %s in place of search term is the instance URL with `?q=%s` appended, such as `https://search.anoni.net/?q=%s`. Recommended.
- [Startpage](search-engines/Startpage.txt): Recommended.
- [Wikipedia (en)](search-engines/Wikipedia%20(en).txt)
- [Yahoo!](search-engines/Yahoo!.txt)
- [YouTube](search-engines/YouTube.txt)

## Browser Settings

TODO

### Gecko-Based Browsers

### Brave Browser

### Cromite

## Extensions

### Geck-based Browsers Extensions


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
- <https://github.com/yokoffing/Betterfox>
- <https://github.com/yokoffing/filterlists>
- <https://gitlab.com/DandelionSprout/adfilt>
- <https://gitlab.com/ironfox-oss/IronFox>
- <https://grapheneos.org/usage#web-browsing>
- <https://greasyfork.org>
- <https://kb.mozillazine.org/Knowledge_Base>
- <https://madaidans-insecurities.github.io/firefox-chromium.html>
- <https://openuserjs.org>
- <https://serpapi.com/blog/google-search-parameters>
- <https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop>
- <https://support.mozilla.org/en-US/kb/resist-fingerprinting>
- <https://support.mozilla.org/en-US/questions/1130505>
- <https://trustmyip.com/referrer-leak-test>
- <https://wiki.mozilla.org/Fingerprinting>
- <https://wiki.mozilla.org/Project_Fission>
- <https://wiki.mozilla.org/Security/Fingerprinting>
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

This project is licensed under [MIT license](LICENSE.txt).


