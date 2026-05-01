# Minifier Benchmarks

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)).

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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26<br>(–17.2%) | ***25<br>(–19.6%)*** | 26<br>(–17%) | 26<br>(–16.5%) | 25<br>(–19.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 64 | 60<br>(–6.4%) | 58<br>(–8.9%) | 59<br>(–7.2%) | 59<br>(–8.2%) | ***58<br>(–8.9%)*** | 59<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 244 | 232<br>(–5.1%) | ***225<br>(–7.8%)*** | 230<br>(–5.8%) | 229<br>(–6.3%) | 228<br>(–6.9%) | 230<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 701 | 697<br>(–0.7%) | ***691<br>(–1.5%)*** | n/a | 695<br>(–0.9%) | 692<br>(–1.4%) | 696<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 451<br>(–2.2%) | ***441<br>(–4.2%)*** | n/a | 454<br>(–1.5%) | 452<br>(–2%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.3%) | ***82<br>(–45.8%)*** | 96<br>(–36.7%) | 92<br>(–39.1%) | 92<br>(–39.5%) | 93<br>(–38.5%) |
| [CSS-Tricks](https://css-tricks.com/) | 168 | 156<br>(–7.5%) | ***153<br>(–9.1%)*** | 155<br>(–8%) | 153<br>(–8.8%) | 153<br>(–9%) | 155<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 105 | 104<br>(–0.7%) | ***98<br>(–7.1%)*** | 104<br>(–1.1%) | 104<br>(–1.4%) | 104<br>(–1.2%) | 104<br>(–1.1%) |
| [DIN](https://www.din.de/) | 253 | 182<br>(–28.2%) | ***176<br>(–30.6%)*** | 183<br>(–27.7%) | 182<br>(–28%) | 180<br>(–29%) | 183<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 547 | 544<br>(–0.6%) | ***541<br>(–1%)*** | n/a | 543<br>(–0.8%) | 542<br>(–1%) | 544<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7237 | 6880<br>(–4.9%) | ***6645<br>(–8.2%)*** | n/a | 6757<br>(–6.6%) | 6780<br>(–6.3%) | 6810<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 77<br>(–7.6%) | ***77<br>(–8.2%)*** | 78<br>(–6.6%) | 77<br>(–7.5%) | 77<br>(–8.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 55 | 50<br>(–8%) | ***48<br>(–12.5%)*** | 50<br>(–7.7%) | 49<br>(–9.9%) | 48<br>(–11.4%) | 49<br>(–9.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1389 | 1347<br>(–3%) | ***1329<br>(–4.3%)*** | n/a | 1344<br>(–3.2%) | 1335<br>(–3.8%) | 1341<br>(–3.4%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 154 | 134<br>(–12.9%) | ***133<br>(–13.9%)*** | 134<br>(–13%) | 134<br>(–13.2%) | 133<br>(–13.9%) | 134<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | 34<br>(–5.6%) | 35<br>(–3.1%) | 34<br>(–5.5%) | ***34<br>(–5.6%)*** | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 221 | 229<br>(+3.6%) | 221<br>(0%) | ***220<br>(–0.2%)*** | 234<br>(+6%) | 220<br>(0%) | 239<br>(+8.3%) |
| [Google](https://www.google.com/) | 79 | 124<br>(+57.6%) | 78<br>(–0.6%) | 79<br>(–0.3%) | ***78<br>(–0.8%)*** | 79<br>(–0.5%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1804 | 1780<br>(–1.3%) | ***1741<br>(–3.5%)*** | n/a | 1787<br>(–0.9%) | 1779<br>(–1.4%) | 1790<br>(–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.9%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.6%)*** | 149<br>(–0.2%) | 153<br>(+2.6%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.7%) | ***32<br>(–61.2%)*** | 35<br>(–58.2%) | 34<br>(–59.3%) | 34<br>(–59.8%) | 34<br>(–58.7%) |
| [Igalia](https://www.igalia.com/) | 49 | 37<br>(–24.1%) | ***34<br>(–29.4%)*** | 37<br>(–25.1%) | 36<br>(–25.6%) | 36<br>(–26%) | 36<br>(–25.5%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.6%) | ***23<br>(–7.3%)*** | 23<br>(–5.5%) | 23<br>(–6.1%) | 23<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 338 | 334<br>(–1.3%) | ***325<br>(–3.8%)*** | n/a | 333<br>(–1.4%) | 331<br>(–2.1%) | 332<br>(–1.8%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–29.7%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 33<br>(–3.5%) | ***32<br>(–5.3%)*** | 33<br>(–2.9%) | 32<br>(–5.2%) | 32<br>(–5.3%) | 33<br>(–3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 71<br>(–39.2%) | ***68<br>(–41.7%)*** | 73<br>(–37.8%) | 73<br>(–38%) | 70<br>(–40.4%) | 72<br>(–38.2%) |
| [Mistral AI](https://mistral.ai/) | 350 | 341<br>(–2.5%) | ***339<br>(–3%)*** | n/a | 345<br>(–1.3%) | 341<br>(–2.6%) | 346<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 400 | 396<br>(–1.2%) | ***381<br>(–4.9%)*** | n/a | 385<br>(–3.9%) | 384<br>(–4.2%) | 387<br>(–3.4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | 35<br>(–25.9%) | 37<br>(–22.3%) | 36<br>(–23.9%) | ***35<br>(–26.1%)*** | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 100 | 84<br>(–16.2%) | ***83<br>(–17.3%)*** | 84<br>(–15.9%) | 85<br>(–15.5%) | 83<br>(–17%) | 85<br>(–15.5%) |
| [Opera](https://www.opera.com/) | 231 | 178<br>(–22.9%) | ***173<br>(–25.1%)*** | 176<br>(–23.8%) | 177<br>(–23.5%) | 175<br>(–24.4%) | 177<br>(–23.6%) |
| [OSCE](https://www.osce.org/) | 177 | 149<br>(–15.7%) | 147<br>(–16.9%) | 149<br>(–15.7%) | 150<br>(–15.5%) | ***147<br>(–17%)*** | 150<br>(–15.5%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 20<br>(–7.5%) | ***18<br>(–17.3%)*** | 18<br>(–13.6%) | 18<br>(–14.4%) | 18<br>(–16.7%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | 230<br>(–1.3%) | ***229<br>(–1.5%)*** | 231<br>(–0.7%) | 231<br>(–0.9%) | 230<br>(–1.1%) | 231<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 283 | 283<br>(+0.2%) | ***281<br>(–0.6%)*** | 283<br>(–0.1%) | 282<br>(–0.2%) | 281<br>(–0.4%) | 283<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 46 | 34<br>(–26.1%) | ***33<br>(–29%)*** | 34<br>(–26.5%) | 34<br>(–26.9%) | 33<br>(–27.9%) | 34<br>(–26.2%) |
| [TAZ](https://taz.de/) | 413 | 389<br>(–5.6%) | ***370<br>(–10.4%)*** | n/a | 380<br>(–7.9%) | 379<br>(–8.1%) | 382<br>(–7.4%) |
| [TetraLogical](https://tetralogical.com/) | 61 | 55<br>(–10%) | ***54<br>(–10.3%)*** | 55<br>(–9.7%) | 55<br>(–9.7%) | 54<br>(–10.2%) | 55<br>(–9.7%) |
| [TPGi](https://www.tpgi.com/) | 181 | 166<br>(–8.2%) | ***163<br>(–9.7%)*** | 166<br>(–8.3%) | 164<br>(–9.2%) | 163<br>(–9.4%) | 165<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 152 | 131<br>(–13.6%) | ***127<br>(–16.7%)*** | 131<br>(–13.7%) | 130<br>(–14.5%) | 129<br>(–15.2%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 96 | 137<br>(+42.6%) | ***94<br>(–2.6%)*** | 95<br>(–0.8%) | 95<br>(–1.2%) | 95<br>(–1.4%) | 95<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 85<br>(–8.6%) | 84<br>(–10.5%) | 85<br>(–9.2%) | 85<br>(–9.5%) | ***84<br>(–10.5%)*** | 85<br>(–9.2%) |
| [W3C](https://www.w3.org/) | 51 | 41<br>(–18.7%) | ***40<br>(–20.7%)*** | 41<br>(–19%) | 41<br>(–19.4%) | 40<br>(–20.3%) | 41<br>(–18.9%) |
| [WordPress Blog](https://wordpress.com/blog/) | 206 | 191<br>(–7.4%) | ***188<br>(–9%)*** | 192<br>(–6.8%) | 191<br>(–7.4%) | 189<br>(–8.3%) | 193<br>(–6.6%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 30 ms | 43 ms | 773 ms | 35 ms | ***8 ms*** | 189 ms |
| **Average result (KB)** | 374 | 355<br>(–5.1%) | ***344<br>(–8.1%)*** | 363<br>(–2.9%) | 350<br>(–6.4%) | 349<br>(–6.7%) | 352<br>(–5.9%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.6%) | 54<br>(–15.1%) | 58<br>(–10%) | ***40<br>(–37%)*** | 56<br>(–12%) | 59<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 244 | 232<br>(–5.2%) | ***215<br>(–11.9%)*** | 230<br>(–5.9%) | 220<br>(–10.1%) | 227<br>(–7%) | 230<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 701 | 660<br>(–5.9%) | ***645<br>(–8%)*** | n/a | 656<br>(–6.5%) | 655<br>(–6.7%) | 696<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 435<br>(–5.7%) | 420<br>(–8.8%) | n/a | ***374<br>(–18.9%)*** | 436<br>(–5.3%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.3%) | ***81<br>(–46.5%)*** | 96<br>(–36.7%) | 90<br>(–40.3%) | 91<br>(–39.9%) | 93<br>(–38.5%) |
| [CSS-Tricks](https://css-tricks.com/) | 168 | 145<br>(–13.5%) | 134<br>(–20.4%) | 147<br>(–12.4%) | ***114<br>(–32.4%)*** | 145<br>(–13.5%) | 155<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 105 | 100<br>(–5.1%) | ***84<br>(–19.9%)*** | 100<br>(–5.1%) | 90<br>(–14.4%) | 99<br>(–5.4%) | 104<br>(–1.1%) |
| [DIN](https://www.din.de/) | 253 | 175<br>(–30.8%) | 164<br>(–35.3%) | 176<br>(–30.5%) | ***136<br>(–46.3%)*** | 174<br>(–31.1%) | 183<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 547 | 514<br>(–6%) | 504<br>(–7.8%) | n/a | ***500<br>(–8.7%)*** | 506<br>(–7.4%) | 544<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7237 | 6880<br>(–4.9%) | ***6644<br>(–8.2%)*** | n/a | 6756<br>(–6.6%) | 6780<br>(–6.3%) | 6810<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 74<br>(–11.1%) | 70<br>(–15.8%) | 76<br>(–9.5%) | ***55<br>(–34.6%)*** | 74<br>(–11.3%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 55 | 49<br>(–10.7%) | ***44<br>(–18.6%)*** | 49<br>(–9.9%) | 47<br>(–14.1%) | 48<br>(–12.4%) | 49<br>(–9.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–37%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1389 | 1340<br>(–3.5%) | 1284<br>(–7.5%) | n/a | ***1213<br>(–12.7%)*** | 1329<br>(–4.3%) | 1341<br>(–3.4%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 154 | 128<br>(–17%) | 124<br>(–20%) | 129<br>(–16.4%) | ***53<br>(–65.5%)*** | 127<br>(–17.5%) | 134<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | ***31<br>(–13.9%)*** | 35<br>(–3.1%) | 31<br>(–13.8%) | 34<br>(–5.6%) | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 221 | 229<br>(+3.6%) | ***213<br>(–3.4%)*** | 220<br>(–0.2%) | 225<br>(+2.2%) | 220<br>(0%) | 239<br>(+8.3%) |
| [Google](https://www.google.com/) | 79 | 75<br>(–5%) | 74<br>(–5.7%) | 78<br>(–0.8%) | ***63<br>(–19.9%)*** | 76<br>(–3.7%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1804 | 1689<br>(–6.3%) | ***1615<br>(–10.5%)*** | n/a | 1663<br>(–7.8%) | 1687<br>(–6.5%) | 1790<br>(–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.7%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.7%)*** | 149<br>(–0.3%) | 153<br>(+2.5%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–59%) | ***32<br>(–62%)*** | 35<br>(–58.3%) | 33<br>(–60%) | 33<br>(–59.9%) | 34<br>(–58.7%) |
| [Igalia](https://www.igalia.com/) | 49 | 36<br>(–25.4%) | ***33<br>(–31.8%)*** | 36<br>(–26%) | 35<br>(–28.2%) | 35<br>(–27.4%) | 36<br>(–25.5%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.6%) | ***22<br>(–8.7%)*** | 23<br>(–5.5%) | 23<br>(–7.7%) | 23<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 338 | 323<br>(–4.3%) | ***306<br>(–9.5%)*** | n/a | 314<br>(–7%) | 321<br>(–5.2%) | 332<br>(–1.8%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.5%)*** | 10<br>(–42.7%) | 9<br>(–46.5%) | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 32<br>(–4.9%) | ***29<br>(–15.2%)*** | 33<br>(–3.3%) | 29<br>(–15.1%) | 32<br>(–5.7%) | 33<br>(–3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 71<br>(–39.3%) | 67<br>(–42.8%) | 73<br>(–37.8%) | ***55<br>(–52.9%)*** | 70<br>(–40.5%) | 72<br>(–38.2%) |
| [Mistral AI](https://mistral.ai/) | 350 | 318<br>(–9.2%) | ***302<br>(–13.7%)*** | n/a | 309<br>(–11.6%) | 317<br>(–9.5%) | 346<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 400 | 377<br>(–5.8%) | 364<br>(–9%) | n/a | ***358<br>(–10.7%)*** | 373<br>(–6.9%) | 387<br>(–3.4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***32<br>(–31.7%)*** | 37<br>(–22.3%) | 33<br>(–29.6%) | 35<br>(–26.1%) | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 100 | 83<br>(–17%) | ***59<br>(–41.2%)*** | 84<br>(–16.5%) | 60<br>(–40.5%) | 83<br>(–17.5%) | 85<br>(–15.5%) |
| [Opera](https://www.opera.com/) | 231 | 173<br>(–25%) | 147<br>(–36.6%) | 176<br>(–24%) | ***109<br>(–52.7%)*** | 170<br>(–26.3%) | 177<br>(–23.6%) |
| [OSCE](https://www.osce.org/) | 177 | 149<br>(–15.7%) | ***140<br>(–21%)*** | 149<br>(–15.7%) | 141<br>(–20.4%) | 147<br>(–17.2%) | 150<br>(–15.5%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.1%) | ***17<br>(–19%)*** | 18<br>(–14.3%) | 18<br>(–15.8%) | 18<br>(–17.5%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | 221<br>(–5%) | ***208<br>(–10.6%)*** | 231<br>(–1%) | 210<br>(–10%) | 222<br>(–4.8%) | 231<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 283 | 282<br>(–0.3%) | 279<br>(–1.4%) | 282<br>(–0.1%) | ***269<br>(–5%)*** | 280<br>(–0.9%) | 283<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 46 | 34<br>(–26.2%) | ***32<br>(–30.6%)*** | 34<br>(–26.6%) | 33<br>(–28.6%) | 33<br>(–28.1%) | 34<br>(–26.2%) |
| [TAZ](https://taz.de/) | 413 | 370<br>(–10.5%) | ***345<br>(–16.5%)*** | n/a | 360<br>(–12.8%) | 369<br>(–10.6%) | 382<br>(–7.4%) |
| [TetraLogical](https://tetralogical.com/) | 61 | 54<br>(–10.2%) | ***50<br>(–16.8%)*** | 55<br>(–9.9%) | 51<br>(–16.4%) | 54<br>(–10.4%) | 55<br>(–9.7%) |
| [TPGi](https://www.tpgi.com/) | 181 | 135<br>(–24.9%) | 132<br>(–26.6%) | 142<br>(–21.6%) | ***117<br>(–35.4%)*** | 141<br>(–21.9%) | 165<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 152 | 128<br>(–16.1%) | 113<br>(–25.5%) | 124<br>(–18.5%) | ***85<br>(–44.1%)*** | 125<br>(–17.7%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 96 | 89<br>(–7.1%) | ***87<br>(–9.4%)*** | 91<br>(–5.1%) | 88<br>(–8.8%) | 89<br>(–7.7%) | 95<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 82<br>(–11.9%) | 75<br>(–19.7%) | 83<br>(–11%) | ***70<br>(–25.2%)*** | 82<br>(–12.5%) | 85<br>(–9.2%) |
| [W3C](https://www.w3.org/) | 51 | 39<br>(–22.4%) | ***36<br>(–28.7%)*** | 39<br>(–22.8%) | 37<br>(–27.3%) | 38<br>(–24.1%) | 41<br>(–18.9%) |
| [WordPress Blog](https://wordpress.com/blog/) | 206 | 169<br>(–17.9%) | 160<br>(–22.5%) | 179<br>(–13.2%) | ***141<br>(–31.7%)*** | 177<br>(–14.4%) | 193<br>(–6.6%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 35 ms | 65 ms | 1323 ms | 140 ms | ***11 ms*** | 190 ms |
| **Average result (KB)** | 374 | 345<br>(–7.7%) | 330<br>(–11.8%) | 361<br>(–3.5%) | ***327<br>(–12.7%)*** | 342<br>(–8.6%) | 352<br>(–5.9%) |

Benchmarks last updated: May 1, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - htmlcompressor.com incorrectly converts no-break spaces to spaces which can give an impression of greater effectiveness (last confirmed Apr 4, 2026).
  - minify-html “invalidates” markup, notably by removing spaces in doctypes (`<!doctypehtml>`) (last confirmed Apr 4, 2026).
  - Minimize only minifies HTML.
  - [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
* Benchmarks are currently run manually (on a 2024 Apple Mac Mini) but may be automated in the future.