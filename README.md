# browser-privacy-guide

This repo contains my recommendations on daily browsers setup on Android and Desktop for better privacy. A particular strength is the focus on fingerprint spoofing on Firefox for both Android and desktop. For people with higher threat models that are willing to trade off some convenience for privacy, security, or anonymity, some suggestions is also listed below but covered less thoroughly.

## My Browsers

### Android

Use [FFUpdater](https://github.com/Tobi823/ffupdater) (`de.marmaro.krt.ffupdater`), which you can install from [F-Droid](https://f-droid.org/packages/de.marmaro.krt.ffupdater), to auto update them.

- [Fennec F-Droid](https://f-droid.org/packages/org.mozilla.fennec_fdroid)
- [Firefox for Android](https://www.firefox.com)
- [Brave Browser](https://brave.com)
- [Cromite](https://github.com/uazo/cromite): Currently not covered in the [My Browser Settings](#my-browser-settings) and [My Extensions](#my-extensions) sections below. May be added in the future.
<!-- TODO: Cromite -->

For people with higher threat models:
- [IronFox](https://gitlab.com/ironfox-oss/IronFox)
- [Tor Browser](https://torproject.org)
- Use desktop: Firefox derivatives on Android is less secure than Chromium derivatives, while Chromium derivatives might lack enough privacy settings.

### Desktop

- [Firefox](https://www.firefox.com): If you are Debian derivatives users, you may want to checkout my [switch-firefox-from-snap-to-deb](https://github.com/Willie169/switch-firefox-from-snap-to-deb) repo.
- [Brave Browser](https://brave.com)

For people with higher threat models:
- Firefox with [Arkenfox](https://github.com/arkenfox/user.js)
- [Mullvad Browser](https://mullvad.net/en/browser)
- [Tor Browser](https://torproject.org)

## My Search Engines

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

## My Browser Settings

TODO
<!-- TODO -->

### Firefox (Desktop), Fennec F-Droid, and Firefox for Android

### Brave Browser (Desktop) and Brave Browser (Android)

## My Extensions

<!-- TODO: Update desktop -->

### Fennec F-Droid and Firefox for Android

- [Background Playback Helper (YouTube & Vimeo)](https://addons.mozilla.org/en-US/android/addon/playback-helper-youtube-vimeo): An extension that successfully keeps video playback running in background on YouTube as of May 16, 2026. Many other similar extensions no longer work now.
- [Bitwarden Password Manager](https://addons.mozilla.org/en-US/android/addon/bitwarden-password-manager)
- [CanvasBlocker](https://addons.mozilla.org/en-US/android/addon/canvasblocker)
- [ClearURLs](https://addons.mozilla.org/en-US/android/addon/clearurls)
- [Cookie AutoDelete](https://addons.mozilla.org/en-US/android/addon/cookie-autodelete)
- [Cookie-Editor](https://addons.mozilla.org/en-US/android/addon/cookie-editor)
- [Copy Link Text](https://addons.mozilla.org/en-US/android/addon/copy-link-text-sytelix)
- [Disable AI](https://addons.mozilla.org/en-US/android/addon/disable-ai)
- [Firefox Relay](https://addons.mozilla.org/en-US/android/addon/private-relay)
- [Force Copy](https://addons.mozilla.org/en-US/android/addon/force-copy)
- [My Fingerprint](https://addons.mozilla.org/en-US/android/addon/my-fingerprint)
- [Read Aloud: A Text to Speech Voice Reader](https://addons.mozilla.org/en-US/android/addon/read-aloud)
- [Reddit NSFW Unblocker](https://addons.mozilla.org/en-US/android/addon/reddit-nsfw-unblocker)
- [Redirect AMP to HTML](https://addons.mozilla.org/en-US/android/addon/amp2html)
- [Search by Image](https://addons.mozilla.org/en-US/android/addon/search_by_image)
- [Sink It for Reddit](https://addons.mozilla.org/en-US/android/addon/sink-it-for-reddit)
- [TWP - Translate Web Pages](https://addons.mozilla.org/en-US/android/addon/traduzir-paginas-web)
- [Ultra Volume Booster](https://addons.mozilla.org/en-US/android/addon/ultra-volume-booster)
- [User-Agent Switcher](https://addons.mozilla.org/en-US/android/addon/uaswitcher)
- [Web Archives](https://addons.mozilla.org/en-US/android/addon/view-page-archive)
- [uBlock Origin](https://addons.mozilla.org/en-US/android/addon/ublock-origin)

### Firefox (Desktop)

- [Background Playback Helper (YouTube & Vimeo)](https://addons.mozilla.org/en-US/firefox/addon/playback-helper-youtube-vimeo)
- [Bitwarden Password Manager](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager)
- [Brisk](https://addons.mozilla.org/en-US/firefox/addon/brisk)
- [CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker)
- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls)
- [Cookie AutoDelete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete)
- [Cookie-Editor](https://addons.mozilla.org/en-US/firefox/addon/cookie-editor)
- [Copy Link Text](https://addons.mozilla.org/en-US/firefox/addon/copy-link-text-sytelix)
- [Ctrl + Shift + C Should Copy](https://addons.mozilla.org/en-US/firefox/addon/ctrl-shift-c-should-copy)
- [Disable AI](https://addons.mozilla.org/en-US/firefox/addon/disable-ai)
- [Download All Images](https://addons.mozilla.org/en-US/firefox/addon/save-all-images-webextension)
- [docu.md Markdown Viewer](https://addons.mozilla.org/en-US/firefox/addon/markdown-viewer-extension)
- [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers)
- [Firefox Relay](https://addons.mozilla.org/en-US/firefox/addon/private-relay)
- [Force Copy](https://addons.mozilla.org/en-US/firefox/addon/force-copy)
- [My Fingerprint](https://addons.mozilla.org/en-US/firefox/addon/my-fingerprint)
- [Plasma Integration](https://addons.mozilla.org/en-US/firefox/addon/plasma-integration): Since I'm using KDE Plasma. If you're not using it, you don't need this.
- [Read Aloud: A Text to Speech Voice Reader](https://addons.mozilla.org/en-US/firefox/addon/read-aloud)
- [Reddit NSFW Unblocker](https://addons.mozilla.org/en-US/firefox/addon/reddit-nsfw-unblocker)
- [Redirect AMP to HTML](https://addons.mozilla.org/en-US/firefox/addon/amp2html)
- [Search by Image](https://addons.mozilla.org/en-US/firefox/addon/search_by_image)
- [Sink It for Reddit](https://addons.mozilla.org/en-US/firefox/addon/sink-it-for-reddit)
- [TWP - Translate Web Pages](https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web)
- [Ultra Volume Booster](https://addons.mozilla.org/en-US/firefox/addon/ultra-volume-booster)
- [User-Agent Switcher and Manager](https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher)
- [Web Archives](https://addons.mozilla.org/en-US/firefox/addon/view-page-archive)
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin)

### Brave Browser (Desktop)

- [Brisk](https://github.com/BrisklyDev/brisk-browser-extension): Need to manually download and install the latest version from releases.
- [Bitwarden Password Manager](https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb)
- [Cookie-Editor](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)
- [Copy link text](https://chromewebstore.google.com/detail/copy-link-text/blpfhbolaobkkaalciociiglbefpglaf)
- [Disable AI](https://chromewebstore.google.com/detail/disable-ai/blhpdcldeaiejfmdfbjonoafgkndhfcg)
- [docu.md Markdown Viewer](https://chromewebstore.google.com/detail/documd-markdown-viewer/jekhhoflgcfoikceikgeenibinpojaoi)
- [Download All Images](https://chromewebstore.google.com/detail/download-all-images/nnffbdeachhbpfapjklmpnmjcgamcdmm)
- [Force Copy](https://chromewebstore.google.com/detail/force-copy/cceclgeciefpanebkfkogecbjjchmico)
- [PDF Reader and Editor](https://chromewebstore.google.com/detail/pdf-reader-and-editor/ieepebpjnkhaiioojkepfniodjmjjihl)
- [Plasma Integration](https://chromewebstore.google.com/detail/plasma-integration/cimiefiiaegbelhefglklhhakcgmhkai): Since I'm using KDE Plasma. If you're not using it, you don't need this.
- [Read Aloud: A Text to Speech Voice Reader](https://chromewebstore.google.com/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp)
- [Search by Image](https://chromewebstore.google.com/detail/search-by-image/cnojnbdhbhnkbcieeekonklommdnndci)
- [Sink It for Reddit](https://chromewebstore.google.com/detail/sink-it-for-reddit/cjkclcbbldkmaifjlbnjlpkfigpeckkg)
- uBlock Origin: Brave-hosted.
- [User-Agent Switcher and Manager](https://chromewebstore.google.com/detail/user-agent-switcher-and-m/bhchdcejhohfmigjafbampogmaanbfkg)
- [Web Archives](https://chromewebstore.google.com/detail/web-archives/hkligngkgcpcolhcnkgccglchdafcnao)

### My Extension Settings

The settigns apply for all Firefox (desktop), Fennec F-Droid, and Firefox for Android. Note that my settings for CanvasBlocker and My Fingerprint are designed to be used together to solve <https://github.com/kkapsner/CanvasBlocker/issues/473> and to spoof fingerprints that are not supported by one of them. Disable one of them may cause fingerprint leak.

- [CanvasBlocker-settings.json](CanvasBlocker-settings.json): My settings for CanvasBlocker.
- [CAD_CoreSettings.json](CAD_CoreSettings.json): My settings for Cookie AutoDelete. Note that you need to go to `Menu > List of Expression` to add Whitelist sites, whose cookies will not be deleted automatically.
- [My_Fingerprint.json](My_Fingerprint.json): My settings for My Fingerprint. You can go to `Config > Script Config` to turn on Fast Injection Mode, and go to `More > Subscribe`, paste `https://raw.githubusercontent.com/Willie169/browser-privacy-guide/refs/heads/main/My_Fingerprint.json` in it, and click the check mark to use my config.

The settigns apply for all browsers.

- [my-ublock-backup.txt](my-ublock-backup.txt): My settings for uBlock Origin.

## References and Resources

- <https://amiunique.org>
- <https://api-dashboard.search.brave.com/app/documentation/news-search/query>
- <https://browserleaks.com>
- <https://canvasblocker.kkapsner.de>
- <https://duckduckgo.com/duckduckgo-help-pages/settings/params>
- <https://duckduckgo.com/duckduckgo-help-pages/settings/save>
- <https://github.com/jruns/disable-ai>
- <https://github.com/kkapsner/CanvasBlocker>
- <https://github.com/omegaee/my-fingerprint>
- <https://serpapi.com/blog/google-search-parameters>
- <https://www.dedoimedo.com/computers/bing-search-no-ai.html>
- <https://www.privacyguides.org/en/desktop-browsers>
- <https://www.privacyguides.org/en/mobile-browsers>
- <https://www.privacyguides.org/en/tor>
