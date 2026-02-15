# Minifier Benchmarks (Beta)

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)). **Early release, benchmarks are still being cross-checked and fine-tuned.**

Two tests are run: One exclusively applying [HTML minification](#1-html-minification-compared) (with the most aggressive settings that do not impact conformance), the other [enabling all minification features](#2-maximum-minification-compared) the respective minifier offers (this is play—it’s not a fair comparison and may exceed project needs).

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by maximum effectiveness](#2-maximum-minification-compared) (all minification and tree-shaking options enabled), and by the respective processing times
* **🧑‍🏭 Minifier author?** [Add and configure your minifier and become a co-owner](https://github.com/j9t/minifier-benchmarks/compare)
* **💁 Innocent bystander?** [Please share observations and suggestions](https://github.com/j9t/minifier-benchmarks/issues/new)

## 0. Minifier Overview

| | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- |
| **Last npm update** | ![npm @swc/html](https://img.shields.io/npm/last-update/@swc/html) | ![npm HTML Minifier Next](https://img.shields.io/npm/last-update/html-minifier-next) | n/a | ![npm htmlnano](https://img.shields.io/npm/last-update/htmlnano) | ![npm minify-html](https://img.shields.io/npm/last-update/@minify-html/node) | ![npm minimize](https://img.shields.io/npm/last-update/minimize) |
| **Socket health status** | [![Socket @swc/html](https://badge.socket.dev/npm/package/@swc/html)](https://socket.dev/npm/package/@swc/html) | [![Socket HTML Minifier Next](https://badge.socket.dev/npm/package/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | n/a | [![Socket htmlnano](https://badge.socket.dev/npm/package/htmlnano)](https://socket.dev/npm/package/htmlnano) | [![Socket minify-html](https://badge.socket.dev/npm/package/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [![Socket minimize](https://badge.socket.dev/npm/package/minimize)](https://socket.dev/npm/package/minimize) |
| **GitHub sponsors** | [![Sponsors @swc/html](https://img.shields.io/github/sponsors/swc-project)](https://github.com/sponsors/swc-project) | [![Sponsors HTML Minifier Next](https://img.shields.io/github/sponsors/j9t)](https://github.com/sponsors/j9t) | n/a | n/a | n/a | n/a |

<!--
| **Dependencies status** | ![Dependencies @swc/html](https://img.shields.io/depfu/dependencies/github/swc-project/swc) | ![Dependencies HTML Minifier Next](https://img.shields.io/depfu/dependencies/github/j9t/html-minifier-next) | n/a | ![Dependencies htmlnano](https://img.shields.io/depfu/dependencies/github/maltsev/htmlnano) | ![Dependencies minify-html](https://img.shields.io/depfu/dependencies/github/wilsonzlin/minify-html) | ![Dependencies minimize](https://img.shields.io/depfu/dependencies/github/Swaagie/minimize) |
| **Code coverage** | ![Coverage @swc/html](https://img.shields.io/codecov/c/github/swc-project/swc) | ![Coverage HTML Minifier Next](https://img.shields.io/codecov/c/github/j9t/html-minifier-next) | n/a | ![Coverage htmlnano](https://img.shields.io/codecov/c/github/maltsev/htmlnano) | ![Coverage minify-html](https://img.shields.io/codecov/c/github/wilsonzlin/minify-html) | ![Coverage minimize](https://img.shields.io/codecov/c/github/Swaagie/minimize) |
| **Quality score** | ![Quality @swc/html](https://img.shields.io/npms-io/quality-score/@swc/html) | ![Quality HTML Minifier Next](https://img.shields.io/npms-io/quality-score/html-minifier-next) | n/a | ![Quality htmlnano](https://img.shields.io/npms-io/quality-score/htmlnano) | ![Quality minify-html](https://img.shields.io/npms-io/quality-score/@minify-html/node) | ![Quality minimize](https://img.shields.io/npms-io/quality-score/minimize) |
| **Unpacked size** | ![Size @swc/html](https://img.shields.io/npm/unpacked-size/@swc/html) | ![Size HTML Minifier Next](https://img.shields.io/npm/unpacked-size/html-minifier-next) | n/a | ![Size htmlnano](https://img.shields.io/npm/unpacked-size/htmlnano) | ![Size minify-html](https://img.shields.io/npm/unpacked-size/@minify-html/node) | ![Size minimize](https://img.shields.io/npm/unpacked-size/minimize) |
-->

<!-- Auto-generated benchmarks, don't edit -->
## 1. HTML Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26 (–17.2%) | 26 (–17.4%) | 26 (–17%) | 26 (–16.4%) | ***25 (–19.2%)*** | 26 (–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 59 (–6.4%) | 57 (–8.9%) | 58 (–7.4%) | 58 (–8.2%) | ***57 (–8.9%)*** | 58 (–7.4%) |
| [Apple](https://www.apple.com/) | 227 | 209 (–8.3%) | ***202 (–11.1%)*** | 207 (–8.8%) | 206 (–9.2%) | 205 (–10.1%) | 207 (–8.9%) |
| [BBC](https://www.bbc.co.uk/) | 668 | 663 (–0.7%) | 658 (–1.4%) | n/a | 661 (–0.9%) | ***658 (–1.4%)*** | 662 (–0.8%) |
| [Bun](https://bun.sh/) | 461 | 451 (–2.2%) | ***444 (–3.6%)*** | n/a | 454 (–1.5%) | 452 (–2%) | 455 (–1.3%) |
| [CERN](https://home.cern/) | 150 | 92 (–38.6%) | ***81 (–46.1%)*** | 95 (–37%) | 91 (–39.3%) | 91 (–39.8%) | 92 (–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 155 | 143 (–7.6%) | 141 (–9%) | 141 (–8.8%) | 141 (–8.8%) | ***140 (–9.3%)*** | 141 (–8.7%) |
| [DeepSeek](https://www.deepseek.com/) | 104 | 104 (–0.2%) | ***97 (–6.2%)*** | 103 (–1%) | 102 (–1.4%) | 103 (–1.2%) | 103 (–1.1%) |
| [DIN](https://www.din.de/) | 250 | 181 (–27.5%) | ***176 (–29.6%)*** | 182 (–27.1%) | 182 (–27.2%) | 179 (–28.5%) | 182 (–27.2%) |
| [DLR](https://www.dlr.de/) | 576 | 572 (–0.6%) | ***570 (–1%)*** | n/a | 571 (–0.8%) | 570 (–1%) | 573 (–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7306 | 6716 (–8.1%) | ***6494 (–11.1%)*** | n/a | 6679 (–8.6%) | 6629 (–9.3%) | 6680 (–8.6%) |
| [EDRi](https://edri.org/) | 80 | 73 (–8%) | 73 (–8.3%) | 74 (–7%) | 74 (–7.7%) | ***73 (–8.4%)*** | 74 (–7%) |
| [EFF](https://www.eff.org/) | 56 | 51 (–7.8%) | ***49 (–11.4%)*** | 52 (–7.5%) | 50 (–9.6%) | 50 (–11.2%) | 51 (–9.4%) |
| [European Alternatives](https://european-alternatives.eu/) | 48 | 32 (–32.5%) | ***32 (–33.1%)*** | 32 (–32.3%) | 32 (–32.3%) | 32 (–33%) | 32 (–32.4%) |
| [FAZ](https://www.faz.net/aktuell/) | 1594 | 1541 (–3.3%) | ***1510 (–5.3%)*** | n/a | 1542 (–3.3%) | 1530 (–4%) | 1539 (–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 133 (–13%) | 131 (–14%) | 132 (–13.1%) | 132 (–13.3%) | ***131 (–14%)*** | 132 (–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34 (–3.7%) | 34 (–3.2%) | 35 (–3.1%) | 34 (–5.5%) | ***34 (–5.6%)*** | 35 (–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 225 | 233 (+3.5%) | 225 (0%) | ***225 (–0.2%)*** | 240 (+6.6%) | 225 (0%) | 244 (+8.3%) |
| [Google](https://www.google.com/) | 18 | 18 (–0.6%) | 18 (–2%) | 18 (–0.9%) | ***18 (–2.3%)*** | 18 (–1.9%) | 18 (–0.9%) |
| [Ground News](https://ground.news/) | 1634 | 1609 (–1.5%) | ***1572 (–3.8%)*** | n/a | 1617 (–1%) | 1608 (–1.6%) | 1620 (–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119 (–3%) | 119 (–3%) | 121 (–1.2%) | 124 (+1.1%) | ***119 (–3.2%)*** | 123 (+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152 (+1.8%) | ***148 (–0.6%)*** | 149 (–0.2%) | 155 (+3.8%) | 149 (–0.3%) | 155 (+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34 (–58.8%) | ***32 (–61%)*** | 34 (–58.4%) | 34 (–59%) | 33 (–60%) | 34 (–58.8%) |
| [Igalia](https://www.igalia.com/) | 48 | 37 (–23.5%) | ***34 (–28.9%)*** | 37 (–24.6%) | 37 (–24.5%) | 36 (–25.5%) | 36 (–25%) |
| [Ladybird](https://ladybird.org/) | 31 | 29 (–4.6%) | ***28 (–9.9%)*** | 29 (–5.8%) | 29 (–5.7%) | 29 (–6.4%) | 29 (–5.9%) |
| [Leanpub](https://leanpub.com/) | 238 | 235 (–1.1%) | ***231 (–3%)*** | 235 (–1.2%) | 235 (–1.4%) | 233 (–2%) | 233 (–2%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12 (–28.5%) | ***12 (–30.4%)*** | 12 (–27.3%) | 12 (–29.6%) | 12 (–30.2%) | 12 (–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 38 | 37 (–3.8%) | 37 (–3.4%) | 37 (–3.2%) | 36 (–5.8%) | ***36 (–5.8%)*** | 37 (–3.3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 107 | 65 (–39%) | ***63 (–40.8%)*** | 67 (–37.6%) | 66 (–38.7%) | 64 (–40.2%) | 67 (–38%) |
| [Middle East Eye](https://www.middleeasteye.net/) | 220 | 204 (–7.3%) | ***195 (–11.2%)*** | 200 (–8.8%) | 200 (–8.9%) | 197 (–10.3%) | 199 (–9.3%) |
| [Mistral AI](https://mistral.ai/) | 377 | 369 (–2.1%) | ***367 (–2.6%)*** | n/a | 372 (–1.2%) | 368 (–2.4%) | 373 (–0.9%) |
| [Mondoweiss](https://mondoweiss.net/) | 373 | 365 (–2.3%) | ***354 (–5.2%)*** | n/a | 358 (–4.1%) | 357 (–4.4%) | 359 (–3.7%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 (–21%) | 35 (–24.3%) | 36 (–22.2%) | 36 (–23.7%) | ***35 (–26.1%)*** | 36 (–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | 81 (–16.7%) | 80 (–17%) | 81 (–16.3%) | 82 (–15.8%) | ***80 (–17.4%)*** | 81 (–16%) |
| [Opera](https://www.opera.com/) | 209 | 153 (–26.7%) | ***150 (–28.2%)*** | 153 (–27%) | 152 (–27.1%) | 152 (–27.5%) | 152 (–27.3%) |
| [OSCE](https://www.osce.org/) | 171 | 144 (–16.2%) | 143 (–16.6%) | 144 (–16.1%) | 144 (–15.7%) | ***141 (–17.4%)*** | 144 (–15.8%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31 (–8.9%) | ***31 (–10.1%)*** | 32 (–7.3%) | 31 (–7.9%) | 31 (–10.1%) | 31 (–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 (–14.5%) | 175 (–15.2%) | 176 (–14.9%) | 177 (–14.5%) | ***175 (–15.2%)*** | 176 (–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 20 (–7.5%) | ***18 (–17.3%)*** | 18 (–13.5%) | 18 (–14.2%) | 18 (–16.7%) | 18 (–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 481 | ***475 (–1.3%)*** | 476 (–0.9%) | n/a | 476 (–0.9%) | 476 (–1.1%) | 477 (–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 292 | 293 (+0.2%) | ***291 (–0.5%)*** | 292 (–0.1%) | 292 (–0.2%) | 291 (–0.4%) | 292 (+0%) |
| [Startup-Verband](https://startupverband.de/) | 44 | 32 (–26.2%) | ***31 (–29.1%)*** | 32 (–26.6%) | 32 (–26.9%) | 31 (–28.1%) | 32 (–26.3%) |
| [TAZ](https://taz.de/) | 421 | 399 (–5.3%) | ***379 (–9.9%)*** | n/a | 391 (–7.3%) | 389 (–7.6%) | 392 (–6.8%) |
| [TetraLogical](https://tetralogical.com/) | 59 | 53 (–10%) | 54 (–9%) | 54 (–9.6%) | 54 (–9.5%) | ***53 (–10.2%)*** | 54 (–9.6%) |
| [TPGi](https://www.tpgi.com/) | 174 | 178 (+2.1%) | ***168 (–3.6%)*** | 172 (–1.6%) | 170 (–2.2%) | 170 (–2.7%) | 171 (–1.6%) |
| [United Nations](https://www.un.org/en/) | 151 | 130 (–13.7%) | ***125 (–16.7%)*** | 130 (–13.8%) | 129 (–14.6%) | 128 (–15.3%) | 130 (–14%) |
| [UX Collective](https://uxdesign.cc/) | 98 | 141 (+44.5%) | ***95 (–2.6%)*** | 97 (–0.8%) | 96 (–1.2%) | 96 (–1.4%) | 97 (–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 85 (–8.8%) | ***83 (–11%)*** | 84 (–9.8%) | 83 (–10%) | 83 (–11%) | 84 (–9.7%) |
| [W3C](https://www.w3.org/) | 51 | 41 (–18.8%) | ***40 (–20.8%)*** | 41 (–19.2%) | 41 (–19.4%) | 40 (–20.4%) | 41 (–19.1%) |
| [WordPress Blog](https://wordpress.com/blog/) | 194 | 179 (–7.8%) | ***176 (–9%)*** | 180 (–7%) | 179 (–7.7%) | 177 (–8.7%) | 181 (–6.9%) |
| **Sites processed (of sites overall)** |  | 50/50 | 50/50 | 40/50 | 50/50 | 50/50 | 50/50 |
| **Average processing time** |  | 31 ms | 41 ms | 768 ms | 31 ms | ***8 ms*** | 182 ms |
| **Average result (KB)** | 370 | 345 (–6.7%) | ***335 (–9.3%)*** | 358 (–3.1%) | 343 (–7.2%) | 340 (–8%) | 343 (–7.1%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24 (–23.3%) | 23 (–25.4%) | 24 (–22.9%) | ***23 (–26.2%)*** | 23 (–25.3%) | 26 (–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57 (–9.6%) | 53 (–15.2%) | 56 (–10.2%) | ***39 (–37.5%)*** | 55 (–12.1%) | 58 (–7.4%) |
| [Apple](https://www.apple.com/) | 227 | 208 (–8.4%) | ***192 (–15.4%)*** | 207 (–8.8%) | 197 (–13.2%) | 204 (–10.1%) | 207 (–8.9%) |
| [BBC](https://www.bbc.co.uk/) | 668 | 632 (–5.3%) | ***618 (–7.4%)*** | n/a | 625 (–6.4%) | 627 (–6.1%) | 662 (–0.8%) |
| [Bun](https://bun.sh/) | 461 | 435 (–5.7%) | 420 (–8.8%) | n/a | ***374 (–18.9%)*** | 436 (–5.3%) | 455 (–1.3%) |
| [CERN](https://home.cern/) | 150 | 92 (–38.6%) | ***80 (–46.8%)*** | 95 (–37%) | 89 (–40.5%) | 90 (–40.2%) | 92 (–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 155 | 139 (–10.3%) | 114 (–26.5%) | 138 (–11%) | ***108 (–30.2%)*** | 137 (–11.6%) | 141 (–8.7%) |
| [DeepSeek](https://www.deepseek.com/) | 104 | 99 (–5%) | ***83 (–19.7%)*** | 99 (–4.9%) | 89 (–14.5%) | 98 (–5.4%) | 103 (–1.1%) |
| [DIN](https://www.din.de/) | 250 | 175 (–30.1%) | 163 (–34.7%) | 175 (–29.9%) | ***136 (–45.7%)*** | 174 (–30.6%) | 182 (–27.2%) |
| [DLR](https://www.dlr.de/) | 576 | 541 (–6.1%) | 531 (–7.9%) | n/a | ***526 (–8.7%)*** | 533 (–7.5%) | 573 (–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7306 | 6714 (–8.1%) | ***6492 (–11.2%)*** | n/a | 6677 (–8.6%) | 6627 (–9.3%) | 6680 (–8.6%) |
| [EDRi](https://edri.org/) | 80 | 71 (–11.3%) | 67 (–16.3%) | 72 (–9.5%) | ***53 (–33%)*** | 70 (–11.6%) | 74 (–7%) |
| [EFF](https://www.eff.org/) | 56 | 50 (–10.5%) | ***46 (–17.4%)*** | 50 (–9.7%) | 48 (–13.7%) | 49 (–12.1%) | 51 (–9.4%) |
| [European Alternatives](https://european-alternatives.eu/) | 48 | 32 (–32.5%) | ***30 (–37.1%)*** | 32 (–32.4%) | 30 (–36.3%) | 32 (–33.1%) | 32 (–32.4%) |
| [FAZ](https://www.faz.net/aktuell/) | 1594 | 1535 (–3.7%) | 1381 (–13.4%) | n/a | ***1329 (–16.6%)*** | 1524 (–4.4%) | 1539 (–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 126 (–17.1%) | 122 (–20.1%) | 127 (–16.5%) | ***51 (–66.2%)*** | 125 (–17.7%) | 132 (–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34 (–3.7%) | 31 (–11.6%) | 35 (–3.1%) | ***31 (–13.7%)*** | 34 (–5.6%) | 35 (–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 225 | 233 (+3.5%) | ***217 (–3.6%)*** | 225 (–0.2%) | 231 (+2.6%) | 225 (0%) | 244 (+8.3%) |
| [Google](https://www.google.com/) | 18 | 17 (–7.9%) | 17 (–10.2%) | 18 (–1.7%) | ***16 (–10.5%)*** | 18 (–5%) | 18 (–0.9%) |
| [Ground News](https://ground.news/) | 1634 | 1534 (–6.1%) | ***1457 (–10.8%)*** | n/a | 1508 (–7.7%) | 1533 (–6.2%) | 1620 (–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119 (–3.1%) | ***118 (–3.4%)*** | 121 (–1.3%) | 124 (+0.9%) | 119 (–3.3%) | 123 (+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152 (+1.8%) | ***148 (–0.7%)*** | 149 (–0.3%) | 155 (+3.7%) | 149 (–0.3%) | 155 (+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34 (–59.2%) | ***31 (–61.8%)*** | 34 (–58.5%) | 33 (–59.8%) | 33 (–60.1%) | 34 (–58.8%) |
| [Igalia](https://www.igalia.com/) | 48 | 36 (–24.9%) | ***33 (–31.2%)*** | 36 (–25.5%) | 35 (–27.1%) | 35 (–26.9%) | 36 (–25%) |
| [Ladybird](https://ladybird.org/) | 31 | 29 (–4.6%) | ***27 (–11.9%)*** | 29 (–5.8%) | 28 (–7.8%) | 29 (–6.4%) | 29 (–5.9%) |
| [Leanpub](https://leanpub.com/) | 238 | 226 (–5%) | ***220 (–7.5%)*** | 235 (–1.2%) | 223 (–6.2%) | 224 (–5.9%) | 233 (–2%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10 (–43.8%) | ***9 (–46.5%)*** | 10 (–42.7%) | 9 (–46.3%) | 10 (–40.5%) | 12 (–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 38 | 36 (–5%) | 33 (–12.5%) | 37 (–3.5%) | ***32 (–14.7%)*** | 36 (–6.2%) | 37 (–3.3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 107 | 65 (–39.1%) | 61 (–42.7%) | 67 (–37.7%) | ***49 (–54%)*** | 64 (–40.3%) | 67 (–38%) |
| [Middle East Eye](https://www.middleeasteye.net/) | 220 | 204 (–7.3%) | ***194 (–11.8%)*** | 200 (–8.8%) | 199 (–9.4%) | 197 (–10.3%) | 199 (–9.3%) |
| [Mistral AI](https://mistral.ai/) | 377 | 339 (–9.9%) | ***327 (–13.2%)*** | n/a | 334 (–11.2%) | 338 (–10.3%) | 373 (–0.9%) |
| [Mondoweiss](https://mondoweiss.net/) | 373 | 352 (–5.7%) | ***340 (–9%)*** | n/a | n/a | 347 (–6.9%) | 359 (–3.7%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 (–21%) | ***33 (–30.4%)*** | 36 (–22.2%) | 33 (–29.4%) | 35 (–26.1%) | 36 (–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | 80 (–17.5%) | ***58 (–40.5%)*** | 80 (–16.9%) | 59 (–39.5%) | 79 (–18%) | 81 (–16%) |
| [Opera](https://www.opera.com/) | 209 | 147 (–29.4%) | 134 (–35.9%) | 152 (–27.2%) | ***100 (–52.3%)*** | 146 (–30%) | 152 (–27.3%) |
| [OSCE](https://www.osce.org/) | 171 | 144 (–16.2%) | ***135 (–21.5%)*** | 144 (–16.1%) | 136 (–20.7%) | 141 (–17.6%) | 144 (–15.8%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31 (–9%) | ***31 (–10.3%)*** | 32 (–7.3%) | 31 (–8.2%) | 31 (–10.1%) | 31 (–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 (–14.5%) | ***172 (–16.9%)*** | 176 (–14.9%) | 173 (–16.3%) | 175 (–15.3%) | 176 (–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18 (–14%) | ***17 (–18.9%)*** | 18 (–14.2%) | 18 (–15.6%) | 18 (–17.5%) | 18 (–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 481 | 458 (–4.8%) | ***418 (–13.1%)*** | n/a | 420 (–12.6%) | 459 (–4.5%) | 477 (–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 292 | 291 (–0.3%) | 288 (–1.3%) | 292 (–0.1%) | ***278 (–4.7%)*** | 290 (–0.9%) | 292 (+0%) |
| [Startup-Verband](https://startupverband.de/) | 44 | 32 (–26.3%) | ***30 (–30.6%)*** | 32 (–26.8%) | 31 (–28.4%) | 31 (–28.3%) | 32 (–26.3%) |
| [TAZ](https://taz.de/) | 421 | 374 (–11.1%) | ***350 (–16.8%)*** | n/a | 366 (–13.1%) | 377 (–10.5%) | 392 (–6.8%) |
| [TetraLogical](https://tetralogical.com/) | 59 | 53 (–10.1%) | ***49 (–16.9%)*** | 53 (–9.8%) | 50 (–16.1%) | 53 (–10.3%) | 54 (–9.6%) |
| [TPGi](https://www.tpgi.com/) | 174 | 165 (–5.2%) | 158 (–9.5%) | 171 (–1.8%) | ***149 (–14.7%)*** | 165 (–5.6%) | 171 (–1.6%) |
| [United Nations](https://www.un.org/en/) | 151 | 126 (–16.2%) | 112 (–25.6%) | 123 (–18.6%) | ***84 (–44.1%)*** | 124 (–17.8%) | 130 (–14%) |
| [UX Collective](https://uxdesign.cc/) | 98 | 90 (–7.3%) | ***88 (–9.7%)*** | 92 (–5.2%) | 89 (–9%) | 90 (–7.9%) | 97 (–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 81 (–12.1%) | ***74 (–20.5%)*** | 82 (–11.4%) | n/a | 81 (–12.9%) | 84 (–9.7%) |
| [W3C](https://www.w3.org/) | 51 | 39 (–22.6%) | ***36 (–28.9%)*** | 39 (–23%) | 37 (–27.4%) | 38 (–24.3%) | 41 (–19.1%) |
| [WordPress Blog](https://wordpress.com/blog/) | 194 | 158 (–18.7%) | 149 (–23.4%) | 167 (–13.7%) | ***134 (–30.7%)*** | 165 (–14.9%) | 181 (–6.9%) |
| **Sites processed (of sites overall)** |  | 50/50 | 50/50 | 40/50 | 48/50 | 50/50 | 50/50 |
| **Average processing time** |  | 34 ms | 62 ms | 1216 ms | 145 ms | ***10 ms*** | 179 ms |
| **Average result (KB)** | 370 | 337 (–8.8%) | ***320 (–13.4%)*** | 357 (–3.4%) | 321 (–13.1%) | 334 (–9.7%) | 343 (–7.1%) |

Benchmarks last updated: Feb 15, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - Minimize only minifies HTML.
  - [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.
* Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.