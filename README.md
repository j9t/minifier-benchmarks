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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26<br>(–17.2%) | 26<br>(–17.4%) | 26<br>(–17%) | 26<br>(–16.5%) | ***25<br>(–19.2%)*** | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–6.3%) | 57<br>(–8.8%) | 58<br>(–7.3%) | 58<br>(–8.2%) | ***57<br>(–8.9%)*** | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 229 | 211<br>(–8.1%) | ***204<br>(–11%)*** | 210<br>(–8.5%) | 209<br>(–9%) | 207<br>(–9.8%) | 209<br>(–8.7%) |
| [BBC](https://www.bbc.co.uk/) | 739 | 734<br>(–0.7%) | ***728<br>(–1.5%)*** | n/a | 732<br>(–1%) | 729<br>(–1.5%) | 733<br>(–0.9%) |
| [Bun](https://bun.sh/) | 461 | 451<br>(–2.2%) | ***444<br>(–3.6%)*** | n/a | 454<br>(–1.5%) | 452<br>(–2%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.5%) | ***81<br>(–46.1%)*** | 95<br>(–36.9%) | 91<br>(–39.4%) | 91<br>(–39.7%) | 92<br>(–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 171 | 159<br>(–6.9%) | 156<br>(–8.5%) | 157<br>(–7.9%) | 156<br>(–8.4%) | ***155<br>(–8.8%)*** | 157<br>(–7.9%) |
| [DeepSeek](https://www.deepseek.com/) | 101 | 100<br>(–0.7%) | ***95<br>(–6.4%)*** | 100<br>(–1.1%) | 100<br>(–1.4%) | 100<br>(–1.2%) | 100<br>(–1.1%) |
| [DIN](https://www.din.de/) | 252 | 181<br>(–28.1%) | ***176<br>(–30.1%)*** | 183<br>(–27.6%) | 182<br>(–28%) | 179<br>(–29%) | 182<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 559 | 555<br>(–0.6%) | ***553<br>(–1%)*** | n/a | 554<br>(–0.8%) | 553<br>(–1%) | 556<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7318 | 6728<br>(–8.1%) | ***6506<br>(–11.1%)*** | n/a | 6640<br>(–9.3%) | 6640<br>(–9.3%) | 6692<br>(–8.6%) |
| [EDRi](https://edri.org/) | 80 | 73<br>(–8%) | 73<br>(–8.3%) | 74<br>(–7%) | 73<br>(–7.9%) | ***73<br>(–8.5%)*** | 74<br>(–7%) |
| [EFF](https://www.eff.org/) | 53 | 49<br>(–8.1%) | ***47<br>(–11.9%)*** | 49<br>(–7.9%) | 48<br>(–10.1%) | 47<br>(–11.7%) | 48<br>(–9.8%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.8%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1383 | 1341<br>(–3%) | ***1328<br>(–4%)*** | n/a | 1338<br>(–3.2%) | 1330<br>(–3.8%) | 1335<br>(–3.4%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 155 | 135<br>(–12.9%) | ***133<br>(–14%)*** | 135<br>(–13.1%) | 134<br>(–13.3%) | 133<br>(–13.9%) | 135<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | 34<br>(–5.5%) | 35<br>(–3.1%) | 34<br>(–5.5%) | ***34<br>(–5.6%)*** | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.6%) | 223<br>(0%) | ***222<br>(–0.2%)*** | 236<br>(+6%) | 222<br>(0%) | 241<br>(+8.3%) |
| [Google](https://www.google.com/) | 78 | 123<br>(+57.9%) | 77<br>(–0.6%) | 77<br>(–0.3%) | ***77<br>(–0.8%)*** | 77<br>(–0.6%) | 77<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1719 | 1695<br>(–1.4%) | ***1658<br>(–3.5%)*** | n/a | 1702<br>(–1%) | 1694<br>(–1.4%) | 1705<br>(–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.9%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.6%)*** | 149<br>(–0.2%) | 153<br>(+2.6%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.6%) | ***33<br>(–60.8%)*** | 35<br>(–58.1%) | 34<br>(–59.1%) | 33<br>(–59.7%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 49 | 37<br>(–23.8%) | ***35<br>(–29.4%)*** | 37<br>(–24.8%) | 37<br>(–25.3%) | 36<br>(–25.7%) | 37<br>(–25.2%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.6%) | ***22<br>(–7.4%)*** | 23<br>(–5.5%) | 23<br>(–6.1%) | 22<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 360 | 355<br>(–1.3%) | ***348<br>(–3.3%)*** | n/a | 355<br>(–1.3%) | 352<br>(–2%) | 353<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–29.7%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 33<br>(–3.5%) | 32<br>(–5.1%) | 33<br>(–2.9%) | 32<br>(–5.2%) | ***32<br>(–5.2%)*** | 33<br>(–3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 110 | 67<br>(–39.1%) | ***65<br>(–40.9%)*** | 68<br>(–37.8%) | 68<br>(–38%) | 65<br>(–40.4%) | 68<br>(–38.2%) |
| [Mistral AI](https://mistral.ai/) | 348 | 340<br>(–2.5%) | ***338<br>(–2.8%)*** | n/a | 344<br>(–1.3%) | 339<br>(–2.6%) | 344<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 394 | 392<br>(–0.7%) | ***375<br>(–4.9%)*** | n/a | 379<br>(–3.9%) | 378<br>(–4.2%) | 381<br>(–3.4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | 36<br>(–24.3%) | 37<br>(–22.2%) | 36<br>(–23.8%) | ***35<br>(–26.1%)*** | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 101 | 84<br>(–16.5%) | 84<br>(–16.7%) | 85<br>(–16.1%) | 85<br>(–15.7%) | ***84<br>(–17.2%)*** | 85<br>(–15.8%) |
| [Opera](https://www.opera.com/) | 231 | 178<br>(–22.8%) | 175<br>(–24.2%) | 176<br>(–23.6%) | 177<br>(–23.3%) | ***175<br>(–24.3%)*** | 177<br>(–23.4%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | 144<br>(–16.4%) | 145<br>(–15.9%) | 146<br>(–15.7%) | ***143<br>(–17.3%)*** | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***31<br>(–10.2%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 210 | 180<br>(–14.4%) | 178<br>(–15.2%) | 179<br>(–14.9%) | 179<br>(–14.8%) | ***178<br>(–15.2%)*** | 179<br>(–14.6%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 20<br>(–7.5%) | ***18<br>(–17.3%)*** | 18<br>(–13.5%) | 18<br>(–14.4%) | 18<br>(–16.7%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | ***230<br>(–1.3%)*** | 231<br>(–1.1%) | 232<br>(–0.7%) | 231<br>(–0.9%) | 231<br>(–1.1%) | 232<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 292 | 292<br>(+0.2%) | ***290<br>(–0.5%)*** | 292<br>(–0.1%) | 291<br>(–0.2%) | 291<br>(–0.4%) | 292<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 45 | 33<br>(–26.2%) | ***32<br>(–29.1%)*** | 33<br>(–26.5%) | 33<br>(–27%) | 32<br>(–28%) | 33<br>(–26.2%) |
| [TAZ](https://taz.de/) | 438 | 414<br>(–5.6%) | ***394<br>(–10.2%)*** | n/a | 405<br>(–7.6%) | 403<br>(–7.9%) | 407<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | 54<br>(–9.2%) | 54<br>(–9.8%) | 54<br>(–9.8%) | ***53<br>(–10.3%)*** | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 182 | 167<br>(–8.1%) | ***164<br>(–9.6%)*** | 167<br>(–8.2%) | 165<br>(–9.1%) | 165<br>(–9.4%) | 167<br>(–8.2%) |
| [United Nations](https://www.un.org/en/) | 152 | 131<br>(–13.6%) | ***127<br>(–16.7%)*** | 131<br>(–13.7%) | 130<br>(–14.5%) | 129<br>(–15.2%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 99 | 143<br>(+44.4%) | ***97<br>(–2.5%)*** | 99<br>(–0.7%) | 98<br>(–1.1%) | 98<br>(–1.4%) | 98<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.7%) | 81<br>(–10.5%) | 82<br>(–9.5%) | 82<br>(–9.8%) | ***81<br>(–10.8%)*** | 82<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 51 | 41<br>(–18.7%) | ***40<br>(–20.7%)*** | 41<br>(–19.1%) | 41<br>(–19.4%) | 40<br>(–20.3%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 195 | 180<br>(–7.7%) | ***177<br>(–9%)*** | 181<br>(–7.1%) | 180<br>(–7.7%) | 178<br>(–8.6%) | 181<br>(–7%) |
| **Sites processed (of sites overall)** |  | 49/49 | 49/49 | 39/49 | 49/49 | 49/49 | 49/49 |
| **Average processing time** |  | 31 ms | 39 ms | 805 ms | 48 ms | ***9 ms*** | 185 ms |
| **Average result (KB)** | 371 | 347<br>(–6.5%) | ***337<br>(–9.2%)*** | 360<br>(–3.1%) | 343<br>(–7.6%) | 342<br>(–8%) | 345<br>(–7.1%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.4%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.6%) | 53<br>(–15.2%) | 56<br>(–10.2%) | ***39<br>(–37.6%)*** | 55<br>(–12%) | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 229 | 211<br>(–8.2%) | ***194<br>(–15.3%)*** | 210<br>(–8.5%) | 200<br>(–13%) | 207<br>(–9.8%) | 209<br>(–8.7%) |
| [BBC](https://www.bbc.co.uk/) | 739 | 700<br>(–5.3%) | ***684<br>(–7.5%)*** | n/a | 692<br>(–6.4%) | 694<br>(–6.1%) | 733<br>(–0.9%) |
| [Bun](https://bun.sh/) | 461 | 435<br>(–5.7%) | 420<br>(–8.8%) | n/a | ***374<br>(–18.9%)*** | 436<br>(–5.3%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.6%) | ***80<br>(–46.7%)*** | 95<br>(–36.9%) | 90<br>(–40.6%) | 90<br>(–40.1%) | 92<br>(–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 171 | 150<br>(–12.1%) | 126<br>(–26.1%) | 152<br>(–11.1%) | ***116<br>(–32.1%)*** | 149<br>(–12.4%) | 157<br>(–7.9%) |
| [DeepSeek](https://www.deepseek.com/) | 101 | 96<br>(–5%) | ***81<br>(–20.1%)*** | 96<br>(–5%) | 86<br>(–14.7%) | 96<br>(–5.4%) | 100<br>(–1.1%) |
| [DIN](https://www.din.de/) | 252 | 175<br>(–30.7%) | 163<br>(–35.3%) | 176<br>(–30.5%) | ***135<br>(–46.3%)*** | 174<br>(–31.1%) | 182<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 559 | 525<br>(–6%) | 515<br>(–7.8%) | n/a | ***510<br>(–8.7%)*** | 517<br>(–7.4%) | 556<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7318 | 6726<br>(–8.1%) | ***6504<br>(–11.1%)*** | n/a | 6637<br>(–9.3%) | 6638<br>(–9.3%) | 6692<br>(–8.6%) |
| [EDRi](https://edri.org/) | 80 | 71<br>(–11.3%) | 67<br>(–16.3%) | 72<br>(–9.6%) | ***53<br>(–33.2%)*** | 70<br>(–11.6%) | 74<br>(–7%) |
| [EFF](https://www.eff.org/) | 53 | 47<br>(–11%) | ***44<br>(–18.1%)*** | 48<br>(–10.2%) | 46<br>(–14.5%) | 47<br>(–12.6%) | 48<br>(–9.8%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–37%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1383 | 1335<br>(–3.5%) | 1295<br>(–6.3%) | n/a | ***1224<br>(–11.5%)*** | 1324<br>(–4.3%) | 1335<br>(–3.4%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 155 | 129<br>(–17%) | 124<br>(–20%) | 129<br>(–16.5%) | ***54<br>(–65.4%)*** | 128<br>(–17.6%) | 135<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | ***31<br>(–13.9%)*** | 35<br>(–3.1%) | 31<br>(–13.8%) | 34<br>(–5.6%) | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.7%) | ***215<br>(–3.5%)*** | 222<br>(–0.2%) | 227<br>(+2%) | 222<br>(0%) | 241<br>(+8.3%) |
| [Google](https://www.google.com/) | 78 | 74<br>(–5.1%) | 73<br>(–5.8%) | 77<br>(–0.8%) | ***62<br>(–20.1%)*** | 75<br>(–3.7%) | 77<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1719 | 1611<br>(–6.3%) | ***1536<br>(–10.6%)*** | n/a | 1584<br>(–7.8%) | 1608<br>(–6.4%) | 1705<br>(–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.7%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.7%)*** | 149<br>(–0.3%) | 153<br>(+2.5%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.9%) | ***32<br>(–61.6%)*** | 35<br>(–58.2%) | 33<br>(–59.9%) | 33<br>(–59.8%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 49 | 37<br>(–25.2%) | ***33<br>(–31.7%)*** | 36<br>(–25.7%) | 35<br>(–27.9%) | 36<br>(–27.1%) | 37<br>(–25.2%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.7%) | ***22<br>(–8.7%)*** | 23<br>(–5.5%) | 22<br>(–7.7%) | 22<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 360 | 344<br>(–4.2%) | ***329<br>(–8.5%)*** | n/a | 335<br>(–6.7%) | 342<br>(–5%) | 353<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.5%)*** | 10<br>(–42.7%) | 9<br>(–46.5%) | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 32<br>(–4.8%) | ***29<br>(–15.2%)*** | 33<br>(–3.3%) | 29<br>(–15.1%) | 32<br>(–5.6%) | 33<br>(–3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 110 | 67<br>(–39.2%) | 63<br>(–42.8%) | 68<br>(–37.8%) | ***51<br>(–53.9%)*** | 65<br>(–40.5%) | 68<br>(–38.2%) |
| [Mistral AI](https://mistral.ai/) | 348 | 316<br>(–9.3%) | ***300<br>(–13.8%)*** | n/a | 307<br>(–11.7%) | 315<br>(–9.6%) | 344<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 394 | 371<br>(–5.9%) | 359<br>(–9%) | n/a | ***353<br>(–10.5%)*** | 367<br>(–7%) | 381<br>(–3.4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***33<br>(–30.4%)*** | 37<br>(–22.2%) | 33<br>(–29.5%) | 35<br>(–26.1%) | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 101 | 84<br>(–17.3%) | ***59<br>(–41.4%)*** | 84<br>(–16.8%) | 60<br>(–40.6%) | 83<br>(–17.8%) | 85<br>(–15.8%) |
| [Opera](https://www.opera.com/) | 231 | 173<br>(–24.9%) | 147<br>(–36.5%) | 176<br>(–23.8%) | ***109<br>(–52.6%)*** | 170<br>(–26.2%) | 177<br>(–23.4%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***136<br>(–21.3%)*** | 145<br>(–15.9%) | 137<br>(–20.7%) | 143<br>(–17.4%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***31<br>(–10.4%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 210 | 180<br>(–14.5%) | ***175<br>(–16.8%)*** | 179<br>(–14.9%) | 175<br>(–16.6%) | 178<br>(–15.2%) | 179<br>(–14.6%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.1%) | ***17<br>(–19%)*** | 18<br>(–14.2%) | 18<br>(–15.7%) | 18<br>(–17.5%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | 222<br>(–5%) | ***209<br>(–10.5%)*** | 231<br>(–1%) | 210<br>(–10%) | 222<br>(–4.8%) | 232<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 292 | 291<br>(–0.3%) | 288<br>(–1.3%) | 292<br>(–0.1%) | ***278<br>(–4.8%)*** | 289<br>(–0.9%) | 292<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 45 | 33<br>(–26.3%) | ***31<br>(–30.7%)*** | 33<br>(–26.7%) | 32<br>(–28.6%) | 32<br>(–28.2%) | 33<br>(–26.2%) |
| [TAZ](https://taz.de/) | 438 | 394<br>(–10.2%) | ***368<br>(–16%)*** | n/a | 385<br>(–12.3%) | 394<br>(–10.2%) | 407<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.3%) | ***49<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.4%) | 53<br>(–10.5%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 182 | 137<br>(–24.9%) | 134<br>(–26.5%) | 143<br>(–21.5%) | ***118<br>(–35.2%)*** | 142<br>(–21.9%) | 167<br>(–8.2%) |
| [United Nations](https://www.un.org/en/) | 152 | 127<br>(–16.2%) | 113<br>(–25.5%) | 124<br>(–18.6%) | ***85<br>(–44%)*** | 125<br>(–17.7%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 99 | 92<br>(–7.2%) | ***90<br>(–9.5%)*** | 94<br>(–5.2%) | 90<br>(–8.9%) | 92<br>(–7.8%) | 98<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12.1%) | 73<br>(–20.1%) | 81<br>(–11.2%) | ***67<br>(–25.7%)*** | 79<br>(–12.7%) | 82<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 51 | 39<br>(–22.5%) | ***36<br>(–28.8%)*** | 39<br>(–22.9%) | 37<br>(–27.4%) | 39<br>(–24.1%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 195 | 159<br>(–18.5%) | 149<br>(–23.4%) | 168<br>(–13.7%) | ***135<br>(–30.7%)*** | 166<br>(–14.8%) | 181<br>(–7%) |
| **Sites processed (of sites overall)** |  | 49/49 | 49/49 | 39/49 | 49/49 | 49/49 | 49/49 |
| **Average processing time** |  | 36 ms | 63 ms | 1165 ms | 150 ms | ***11 ms*** | 181 ms |
| **Average result (KB)** | 371 | 338<br>(–9%) | 323<br>(–13%) | 358<br>(–3.6%) | ***321<br>(–13.6%)*** | 335<br>(–9.9%) | 345<br>(–7.1%) |

Benchmarks last updated: Mar 22, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - Minimize only minifies HTML.
  - [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
* Benchmarks are currently run manually (on a 2024 Apple Mac Mini) but may be automated in the future.