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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26<br>(–17.2%) | 26<br>(–17.4%) | 26<br>(–17%) | 26<br>(–16.4%) | ***25<br>(–19.2%)*** | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–6.4%) | 57<br>(–8.9%) | 58<br>(–7.4%) | 58<br>(–8.2%) | ***57<br>(–8.9%)*** | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 263 | 243<br>(–7.6%) | ***237<br>(–10.1%)*** | 242<br>(–8%) | 242<br>(–8.3%) | 239<br>(–9.1%) | 242<br>(–8.1%) |
| [BBC](https://www.bbc.co.uk/) | 721 | 715<br>(–0.7%) | ***710<br>(–1.5%)*** | n/a | 714<br>(–0.9%) | 710<br>(–1.5%) | 715<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 451<br>(–2.2%) | ***444<br>(–3.6%)*** | n/a | 454<br>(–1.5%) | 452<br>(–2%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.5%) | ***81<br>(–46.1%)*** | 95<br>(–36.9%) | 92<br>(–39.3%) | 91<br>(–39.7%) | 92<br>(–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 175 | 164<br>(–6.7%) | 161<br>(–8.4%) | 161<br>(–8%) | 161<br>(–8.2%) | ***160<br>(–8.7%)*** | 161<br>(–8%) |
| [DeepSeek](https://www.deepseek.com/) | 101 | 100<br>(–0.7%) | ***95<br>(–6.4%)*** | 100<br>(–1.1%) | 100<br>(–1.4%) | 100<br>(–1.2%) | 100<br>(–1.1%) |
| [DIN](https://www.din.de/) | 251 | 182<br>(–27.5%) | ***176<br>(–29.6%)*** | 183<br>(–27.1%) | 182<br>(–27.3%) | 179<br>(–28.5%) | 182<br>(–27.2%) |
| [DLR](https://www.dlr.de/) | 557 | 554<br>(–0.6%) | ***552<br>(–1%)*** | n/a | 553<br>(–0.8%) | 552<br>(–1%) | 554<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7305 | 6715<br>(–8.1%) | ***6493<br>(–11.1%)*** | n/a | 6678<br>(–8.6%) | 6628<br>(–9.3%) | 6679<br>(–8.6%) |
| [EDRi](https://edri.org/) | 80 | 73<br>(–8%) | 73<br>(–8.3%) | 74<br>(–7%) | 73<br>(–7.7%) | ***73<br>(–8.5%)*** | 74<br>(–7%) |
| [EFF](https://www.eff.org/) | 56 | 51<br>(–7.7%) | ***49<br>(–11.3%)*** | 52<br>(–7.4%) | 50<br>(–10.9%) | 50<br>(–11.1%) | 51<br>(–9.3%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.8%)*** | 33<br>(–32.9%) | 33<br>(–32.9%) | 33<br>(–33.7%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1379 | 1337<br>(–3%) | ***1323<br>(–4%)*** | n/a | 1335<br>(–3.2%) | 1326<br>(–3.9%) | 1331<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 133<br>(–12.9%) | 131<br>(–13.9%) | 132<br>(–13%) | 132<br>(–13.2%) | ***131<br>(–13.9%)*** | 132<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | 34<br>(–5.5%) | 35<br>(–3.1%) | 34<br>(–5.5%) | ***34<br>(–5.6%)*** | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 221 | 229<br>(+3.5%) | 221<br>(0%) | ***221<br>(–0.2%)*** | 236<br>(+6.7%) | 221<br>(0%) | 240<br>(+8.4%) |
| [Google](https://www.google.com/) | 19 | 18<br>(–0.6%) | 18<br>(–1.9%) | 18<br>(–0.9%) | ***18<br>(–2.3%)*** | 18<br>(–1.9%) | 18<br>(–0.9%) |
| [Ground News](https://ground.news/) | 2029 | 2005<br>(–1.2%) | ***1968<br>(–3%)*** | n/a | 2013<br>(–0.8%) | 2004<br>(–1.2%) | 2016<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+1.1%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.6%)*** | 149<br>(–0.2%) | 155<br>(+3.8%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.5%) | ***33<br>(–60.7%)*** | 35<br>(–58%) | 34<br>(–58.6%) | 34<br>(–59.6%) | 34<br>(–58.4%) |
| [Igalia](https://www.igalia.com/) | 49 | 38<br>(–23.7%) | ***35<br>(–29.1%)*** | 37<br>(–24.7%) | 37<br>(–24.6%) | 37<br>(–25.7%) | 37<br>(–25.1%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.6%) | ***22<br>(–7.4%)*** | 23<br>(–5.5%) | 23<br>(–5.6%) | 22<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 357 | 352<br>(–1.3%) | ***345<br>(–3.3%)*** | n/a | 352<br>(–1.3%) | 349<br>(–2.1%) | 351<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–29.6%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 33<br>(–3.5%) | 32<br>(–5.1%) | 33<br>(–2.9%) | 32<br>(–5.2%) | ***32<br>(–5.3%)*** | 33<br>(–3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 67<br>(–38.9%) | ***65<br>(–40.7%)*** | 68<br>(–37.5%) | 67<br>(–38.7%) | 65<br>(–40.2%) | 68<br>(–37.9%) |
| [Mistral AI](https://mistral.ai/) | 337 | 328<br>(–2.5%) | ***327<br>(–2.8%)*** | n/a | 332<br>(–1.4%) | 328<br>(–2.6%) | 333<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 388 | 379<br>(–2.2%) | ***368<br>(–5%)*** | n/a | 373<br>(–4%) | 371<br>(–4.3%) | 374<br>(–3.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | 36<br>(–24.3%) | 37<br>(–22.2%) | 36<br>(–23.7%) | ***35<br>(–26.1%)*** | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 100 | 83<br>(–16.9%) | 83<br>(–17.1%) | 83<br>(–16.6%) | 84<br>(–16%) | ***82<br>(–17.6%)*** | 83<br>(–16.2%) |
| [Opera](https://www.opera.com/) | 230 | 178<br>(–22.7%) | 175<br>(–24.2%) | 176<br>(–23.6%) | 177<br>(–23.2%) | ***174<br>(–24.2%)*** | 176<br>(–23.4%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | 145<br>(–16.4%) | 146<br>(–15.9%) | 146<br>(–15.6%) | ***143<br>(–17.3%)*** | 146<br>(–15.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***31<br>(–10.2%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 209 | 179<br>(–14.5%) | 177<br>(–15.2%) | 178<br>(–14.9%) | 179<br>(–14.5%) | ***177<br>(–15.2%)*** | 179<br>(–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 20<br>(–7.5%) | ***18<br>(–17.3%)*** | 18<br>(–13.5%) | 18<br>(–14.3%) | 18<br>(–16.7%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | ***230<br>(–1.3%)*** | 230<br>(–1.1%) | 231<br>(–0.7%) | 231<br>(–0.9%) | 230<br>(–1.1%) | 231<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 299 | 300<br>(+0.2%) | ***298<br>(–0.5%)*** | n/a | 299<br>(–0.2%) | 298<br>(–0.4%) | 299<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 43 | 32<br>(–26.5%) | ***30<br>(–29.4%)*** | 32<br>(–26.9%) | 31<br>(–27.2%) | 31<br>(–28.4%) | 32<br>(–26.6%) |
| [TAZ](https://taz.de/) | 403 | 381<br>(–5.5%) | ***362<br>(–10.3%)*** | n/a | 373<br>(–7.5%) | 371<br>(–7.9%) | 374<br>(–7.1%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | 54<br>(–9.2%) | 54<br>(–9.8%) | 54<br>(–9.7%) | ***54<br>(–10.3%)*** | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 190 | 178<br>(–6.3%) | ***175<br>(–8.1%)*** | 180<br>(–5.6%) | 176<br>(–7.6%) | 175<br>(–8%) | 180<br>(–5.7%) |
| [United Nations](https://www.un.org/en/) | 151 | 130<br>(–13.7%) | ***125<br>(–16.7%)*** | 130<br>(–13.8%) | 129<br>(–14.6%) | 128<br>(–15.3%) | 130<br>(–14%) |
| [UX Collective](https://uxdesign.cc/) | 99 | 143<br>(+44.2%) | ***97<br>(–2.5%)*** | 98<br>(–0.7%) | 98<br>(–1.1%) | 98<br>(–1.4%) | 98<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.7%) | 81<br>(–10.5%) | 82<br>(–9.5%) | 82<br>(–9.7%) | ***81<br>(–10.8%)*** | 82<br>(–9.5%) |
| [W3C](https://www.w3.org/) | 51 | 41<br>(–18.8%) | ***40<br>(–20.8%)*** | 41<br>(–19.1%) | 41<br>(–19.3%) | 40<br>(–20.4%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 194 | 179<br>(–7.9%) | ***176<br>(–9.1%)*** | 181<br>(–7%) | 179<br>(–7.7%) | 177<br>(–8.7%) | 181<br>(–6.9%) |
| **Sites processed (of sites overall)** |  | 49/49 | 49/49 | 38/49 | 49/49 | 49/49 | 49/49 |
| **Average processing time** |  | 32 ms | 41 ms | 869 ms | 36 ms | ***8 ms*** | 186 ms |
| **Average result (KB)** | 375 | 351<br>(–6.6%) | ***341<br>(–9.1%)*** | 364<br>(–3%) | 349<br>(–7.1%) | 346<br>(–7.9%) | 349<br>(–7%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.4%) | 24<br>(–22.9%) | ***23<br>(–26.2%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.6%) | 53<br>(–15.2%) | 56<br>(–10.2%) | ***39<br>(–37.5%)*** | 55<br>(–12.1%) | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 263 | 243<br>(–7.7%) | ***227<br>(–13.9%)*** | 242<br>(–8%) | 232<br>(–11.8%) | 239<br>(–9.1%) | 242<br>(–8.1%) |
| [BBC](https://www.bbc.co.uk/) | 721 | 681<br>(–5.4%) | ***666<br>(–7.5%)*** | n/a | 675<br>(–6.3%) | 676<br>(–6.2%) | 715<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 435<br>(–5.7%) | 420<br>(–8.8%) | n/a | ***374<br>(–18.9%)*** | 436<br>(–5.3%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.6%) | ***80<br>(–46.7%)*** | 95<br>(–37%) | 90<br>(–40.5%) | 90<br>(–40.1%) | 92<br>(–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 175 | 155<br>(–11.8%) | 129<br>(–26.2%) | 156<br>(–11.2%) | ***119<br>(–31.9%)*** | 154<br>(–12.1%) | 161<br>(–8%) |
| [DeepSeek](https://www.deepseek.com/) | 101 | 96<br>(–5%) | ***81<br>(–20.1%)*** | 96<br>(–5%) | 86<br>(–14.7%) | 96<br>(–5.4%) | 100<br>(–1.1%) |
| [DIN](https://www.din.de/) | 251 | 175<br>(–30.2%) | 163<br>(–34.8%) | 176<br>(–29.9%) | ***136<br>(–45.7%)*** | 174<br>(–30.6%) | 182<br>(–27.2%) |
| [DLR](https://www.dlr.de/) | 557 | 524<br>(–6%) | 514<br>(–7.8%) | n/a | ***509<br>(–8.7%)*** | 516<br>(–7.4%) | 554<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7305 | 6713<br>(–8.1%) | ***6491<br>(–11.2%)*** | n/a | 6676<br>(–8.6%) | 6626<br>(–9.3%) | 6679<br>(–8.6%) |
| [EDRi](https://edri.org/) | 80 | 71<br>(–11.3%) | 67<br>(–16.3%) | 72<br>(–9.6%) | ***53<br>(–33%)*** | 70<br>(–11.6%) | 74<br>(–7%) |
| [EFF](https://www.eff.org/) | 56 | 50<br>(–10.4%) | ***46<br>(–17.2%)*** | 50<br>(–9.6%) | 47<br>(–15%) | 49<br>(–12%) | 51<br>(–9.3%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–36.7%) | 33<br>(–33.8%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1379 | 1331<br>(–3.5%) | 1291<br>(–6.4%) | n/a | ***1221<br>(–11.5%)*** | 1320<br>(–4.3%) | 1331<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 126<br>(–17%) | 122<br>(–20%) | 127<br>(–16.5%) | ***51<br>(–66.2%)*** | 125<br>(–17.6%) | 132<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | ***31<br>(–13.9%)*** | 35<br>(–3.1%) | 31<br>(–13.7%) | 34<br>(–5.6%) | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 221 | 229<br>(+3.5%) | ***213<br>(–3.6%)*** | 221<br>(–0.2%) | 227<br>(+2.7%) | 221<br>(0%) | 240<br>(+8.4%) |
| [Google](https://www.google.com/) | 19 | 17<br>(–7.4%) | 17<br>(–9.7%) | 18<br>(–1.7%) | ***17<br>(–9.9%)*** | 18<br>(–5%) | 18<br>(–0.9%) |
| [Ground News](https://ground.news/) | 2029 | 1900<br>(–6.4%) | ***1824<br>(–10.1%)*** | n/a | 1872<br>(–7.8%) | 1897<br>(–6.5%) | 2016<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 124<br>(+0.9%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.7%)*** | 149<br>(–0.3%) | 155<br>(+3.7%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.8%) | ***32<br>(–61.5%)*** | 35<br>(–58.1%) | 34<br>(–59.4%) | 33<br>(–59.7%) | 34<br>(–58.4%) |
| [Igalia](https://www.igalia.com/) | 49 | 37<br>(–25.1%) | ***34<br>(–31.4%)*** | 37<br>(–25.6%) | 36<br>(–27.2%) | 36<br>(–27.1%) | 37<br>(–25.1%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.7%) | ***22<br>(–8.7%)*** | 23<br>(–5.5%) | 22<br>(–7.1%) | 22<br>(–6.7%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 357 | 342<br>(–4.2%) | ***326<br>(–8.5%)*** | n/a | 333<br>(–6.7%) | 339<br>(–5%) | 351<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.5%)*** | 10<br>(–42.7%) | 9<br>(–46.3%) | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 32<br>(–4.9%) | ***29<br>(–15.2%)*** | 33<br>(–3.3%) | 29<br>(–15.1%) | 32<br>(–5.7%) | 33<br>(–3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66<br>(–39%) | 63<br>(–42.6%) | 68<br>(–37.6%) | ***50<br>(–53.7%)*** | 65<br>(–40.2%) | 68<br>(–37.9%) |
| [Mistral AI](https://mistral.ai/) | 337 | 305<br>(–9.3%) | ***289<br>(–14.1%)*** | n/a | 296<br>(–12%) | 304<br>(–9.6%) | 333<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 388 | 366<br>(–5.7%) | 353<br>(–9%) | n/a | ***347<br>(–10.5%)*** | 361<br>(–6.8%) | 374<br>(–3.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***33<br>(–30.4%)*** | 37<br>(–22.2%) | 33<br>(–29.4%) | 35<br>(–26.1%) | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 100 | 82<br>(–17.7%) | ***59<br>(–41%)*** | 82<br>(–17.2%) | 60<br>(–40.1%) | 81<br>(–18.2%) | 83<br>(–16.2%) |
| [Opera](https://www.opera.com/) | 230 | 173<br>(–24.8%) | 147<br>(–36.4%) | 176<br>(–23.7%) | ***109<br>(–52.5%)*** | 170<br>(–26.1%) | 176<br>(–23.4%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***136<br>(–21.3%)*** | 146<br>(–15.9%) | 137<br>(–20.5%) | 143<br>(–17.4%) | 146<br>(–15.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***31<br>(–10.4%)*** | 32<br>(–7.3%) | 31<br>(–8.2%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 209 | 179<br>(–14.5%) | ***174<br>(–16.9%)*** | 178<br>(–14.9%) | 175<br>(–16.3%) | 177<br>(–15.3%) | 179<br>(–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.1%) | ***17<br>(–19%)*** | 18<br>(–14.2%) | 18<br>(–15.6%) | 18<br>(–17.5%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | 221<br>(–5%) | ***208<br>(–10.5%)*** | 231<br>(–1%) | 210<br>(–10%) | 222<br>(–4.8%) | 231<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 299 | 299<br>(–0.3%) | 296<br>(–1.3%) | n/a | ***286<br>(–4.6%)*** | 297<br>(–0.9%) | 299<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 43 | 32<br>(–26.6%) | ***30<br>(–30.9%)*** | 31<br>(–27%) | 31<br>(–28.7%) | 31<br>(–28.6%) | 32<br>(–26.6%) |
| [TAZ](https://taz.de/) | 403 | 360<br>(–10.6%) | ***337<br>(–16.4%)*** | n/a | 353<br>(–12.4%) | 361<br>(–10.4%) | 374<br>(–7.1%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.3%) | ***50<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.2%) | 54<br>(–10.5%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 190 | 153<br>(–19.7%) | 149<br>(–21.7%) | 161<br>(–15.5%) | ***134<br>(–29.6%)*** | 159<br>(–16.7%) | 180<br>(–5.7%) |
| [United Nations](https://www.un.org/en/) | 151 | 126<br>(–16.3%) | 112<br>(–25.6%) | 123<br>(–18.6%) | ***84<br>(–44.1%)*** | 124<br>(–17.8%) | 130<br>(–14%) |
| [UX Collective](https://uxdesign.cc/) | 99 | 92<br>(–7.2%) | ***90<br>(–9.5%)*** | 94<br>(–5.2%) | 90<br>(–8.9%) | 91<br>(–7.8%) | 98<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12.1%) | 72<br>(–20.2%) | 80<br>(–11.3%) | ***67<br>(–25.7%)*** | 79<br>(–12.8%) | 82<br>(–9.5%) |
| [W3C](https://www.w3.org/) | 51 | 39<br>(–22.5%) | ***36<br>(–28.8%)*** | 39<br>(–22.9%) | 37<br>(–27.3%) | 38<br>(–24.2%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 194 | 158<br>(–18.7%) | 149<br>(–23.5%) | 168<br>(–13.7%) | ***135<br>(–30.7%)*** | 165<br>(–14.9%) | 181<br>(–6.9%) |
| **Sites processed (of sites overall)** |  | 49/49 | 49/49 | 38/49 | 49/49 | 49/49 | 49/49 |
| **Average processing time** |  | 35 ms | 61 ms | 1220 ms | 156 ms | ***10 ms*** | 183 ms |
| **Average result (KB)** | 375 | 342<br>(–8.9%) | 327<br>(–12.8%) | 362<br>(–3.5%) | ***326<br>(–13.1%)*** | 339<br>(–9.8%) | 349<br>(–7%) |

Benchmarks last updated: Mar 6, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - Minimize only minifies HTML.
  - [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
* Benchmarks are currently run manually (on a 2024 Apple Mac Mini) but may be automated in the future.