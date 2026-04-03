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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26<br>(–17.2%) | ***25<br>(–19.6%)*** | n/a | 26<br>(–16.5%) | 25<br>(–19.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–6.4%) | 57<br>(–8.9%) | n/a | 58<br>(–8.3%) | ***57<br>(–8.9%)*** | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 248 | 238<br>(–4%) | ***232<br>(–6.4%)*** | n/a | 235<br>(–5.2%) | 233<br>(–5.9%) | 236<br>(–4.9%) |
| [BBC](https://www.bbc.co.uk/) | 700 | 695<br>(–0.7%) | ***689<br>(–1.5%)*** | n/a | 693<br>(–0.9%) | 690<br>(–1.4%) | 694<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 451<br>(–2.2%) | ***441<br>(–4.2%)*** | n/a | 454<br>(–1.5%) | 452<br>(–2%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.5%) | ***81<br>(–46%)*** | n/a | 91<br>(–39.3%) | 91<br>(–39.7%) | 92<br>(–38.6%) |
| [CSS-Tricks](https://css-tricks.com/) | 170 | 157<br>(–7.4%) | ***155<br>(–9%)*** | n/a | 156<br>(–8.4%) | 155<br>(–8.9%) | 156<br>(–8%) |
| [DeepSeek](https://www.deepseek.com/) | 101 | 100<br>(–0.7%) | ***94<br>(–6.9%)*** | n/a | 100<br>(–1.4%) | 100<br>(–1.2%) | 100<br>(–1.1%) |
| [DIN](https://www.din.de/) | 253 | 182<br>(–28.1%) | ***175<br>(–30.6%)*** | n/a | 182<br>(–28%) | 179<br>(–29%) | 182<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 566 | 563<br>(–0.7%) | ***560<br>(–1.1%)*** | n/a | 562<br>(–0.8%) | 561<br>(–1%) | 563<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7354 | 6761<br>(–8.1%) | ***6539<br>(–11.1%)*** | n/a | 6673<br>(–9.3%) | 6674<br>(–9.3%) | 6725<br>(–8.6%) |
| [EDRi](https://edri.org/) | 83 | 77<br>(–7.6%) | ***77<br>(–8.2%)*** | n/a | 77<br>(–7.5%) | 77<br>(–8.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 48<br>(–8.2%) | ***46<br>(–12.1%)*** | n/a | 47<br>(–10.1%) | 47<br>(–11.8%) | 48<br>(–9.9%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | n/a | 33<br>(–33.1%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1431 | 1388<br>(–3%) | ***1370<br>(–4.3%)*** | n/a | 1385<br>(–3.2%) | 1376<br>(–3.8%) | 1382<br>(–3.4%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 156 | 136<br>(–13%) | ***134<br>(–14%)*** | n/a | 135<br>(–13.3%) | 134<br>(–14%) | 136<br>(–13.2%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | 34<br>(–5.6%) | n/a | 34<br>(–5.5%) | ***34<br>(–5.6%)*** | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 219 | 227<br>(+3.6%) | 219<br>(0%) | n/a | 233<br>(+6.1%) | ***219<br>(0%)*** | 238<br>(+8.3%) |
| [Google](https://www.google.com/) | 78 | 123<br>(+57.7%) | 78<br>(–0.6%) | n/a | ***77<br>(–0.8%)*** | 78<br>(–0.5%) | 78<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1550 | 1526<br>(–1.6%) | ***1487<br>(–4.1%)*** | n/a | 1533<br>(–1.1%) | 1524<br>(–1.7%) | 1536<br>(–0.9%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | n/a | 124<br>(+0.9%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.6%)*** | n/a | 153<br>(+2.6%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.5%) | ***33<br>(–60.7%)*** | n/a | 34<br>(–59.1%) | 34<br>(–59.6%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 50 | 38<br>(–23.7%) | ***35<br>(–29%)*** | n/a | 37<br>(–25.2%) | 37<br>(–25.6%) | 37<br>(–25.1%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.6%) | ***22<br>(–7.3%)*** | n/a | 23<br>(–6.1%) | 23<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 343 | 339<br>(–1.3%) | ***330<br>(–3.7%)*** | n/a | 338<br>(–1.4%) | 336<br>(–2%) | 337<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | n/a | 12<br>(–29.7%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 33<br>(–3.5%) | ***32<br>(–5.3%)*** | n/a | 32<br>(–5.2%) | 32<br>(–5.3%) | 33<br>(–3.1%) |
| [MDN](https://developer.mozilla.org/en-US/) | 110 | 67<br>(–39.1%) | ***64<br>(–41.6%)*** | n/a | 68<br>(–38%) | 66<br>(–40.4%) | 68<br>(–38.2%) |
| [Mistral AI](https://mistral.ai/) | 349 | 341<br>(–2.5%) | ***339<br>(–3%)*** | n/a | 345<br>(–1.3%) | 340<br>(–2.6%) | 346<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 407 | 405<br>(–0.7%) | ***388<br>(–4.8%)*** | n/a | 392<br>(–3.8%) | 391<br>(–4.1%) | 394<br>(–3.3%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | 36<br>(–24.4%) | n/a | 36<br>(–23.8%) | ***35<br>(–26.1%)*** | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 102 | 85<br>(–16.5%) | ***84<br>(–17.4%)*** | n/a | 86<br>(–15.7%) | 84<br>(–17.2%) | 86<br>(–15.7%) |
| [Opera](https://www.opera.com/) | 231 | 178<br>(–22.9%) | ***173<br>(–25.1%)*** | n/a | 177<br>(–23.4%) | 175<br>(–24.3%) | 177<br>(–23.5%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | 143<br>(–17.2%) | n/a | 145<br>(–15.7%) | ***143<br>(–17.3%)*** | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***31<br>(–10.2%)*** | n/a | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 209 | 179<br>(–14.5%) | ***177<br>(–15.4%)*** | n/a | 178<br>(–14.8%) | 178<br>(–15.2%) | 179<br>(–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 20<br>(–7.5%) | ***18<br>(–17.3%)*** | n/a | 18<br>(–14.4%) | 18<br>(–16.7%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 235 | 232<br>(–1.3%) | ***231<br>(–1.6%)*** | n/a | 233<br>(–0.9%) | 233<br>(–1.1%) | 234<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 280 | 281<br>(+0.2%) | ***279<br>(–0.6%)*** | n/a | 280<br>(–0.2%) | 279<br>(–0.4%) | 280<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 44 | 33<br>(–26.2%) | ***32<br>(–29.1%)*** | n/a | 32<br>(–27%) | 32<br>(–28.1%) | 33<br>(–26.3%) |
| [TAZ](https://taz.de/) | 445 | 421<br>(–5.5%) | ***400<br>(–10.1%)*** | n/a | 411<br>(–7.7%) | 410<br>(–7.9%) | 413<br>(–7.3%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | ***54<br>(–10.4%)*** | n/a | 54<br>(–9.8%) | 54<br>(–10.3%) | 54<br>(–9.7%) |
| [TPGi](https://www.tpgi.com/) | 181 | 166<br>(–8.2%) | ***163<br>(–9.7%)*** | n/a | 164<br>(–9.2%) | 163<br>(–9.4%) | 166<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 152 | 131<br>(–13.6%) | ***127<br>(–16.6%)*** | n/a | 130<br>(–14.5%) | 129<br>(–15.2%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 97 | 139<br>(+43%) | ***95<br>(–2.7%)*** | n/a | 96<br>(–1.1%) | 96<br>(–1.4%) | 96<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.7%) | 81<br>(–10.7%) | n/a | 82<br>(–9.8%) | ***81<br>(–10.8%)*** | 82<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 41<br>(–18.9%) | ***40<br>(–21%)*** | n/a | 40<br>(–19.6%) | 40<br>(–20.6%) | 40<br>(–19.2%) |
| [WordPress Blog](https://wordpress.com/blog/) | 201 | 185<br>(–7.6%) | ***182<br>(–9.1%)*** | n/a | 185<br>(–7.5%) | 184<br>(–8.4%) | 187<br>(–6.7%) |
| **Sites processed (of sites overall)** |  | 49/49 | 49/49 | 0/49 | 49/49 | 49/49 | 49/49 |
| **Average processing time** |  | 31 ms | 40 ms | n/a | 36 ms | ***8 ms*** | 188 ms |
| **Average result (KB)** | 369 | 345<br>(–6.5%) | ***335<br>(–9.4%)*** | 369<br>(0%) | 341<br>(–7.6%) | 340<br>(–8.1%) | 343<br>(–7.2%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | n/a | ***23<br>(–26.5%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.6%) | 53<br>(–15.2%) | n/a | ***39<br>(–37.6%)*** | 55<br>(–12.1%) | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 248 | 237<br>(–4.2%) | ***222<br>(–10.4%)*** | n/a | 226<br>(–8.9%) | 233<br>(–5.9%) | 236<br>(–4.9%) |
| [BBC](https://www.bbc.co.uk/) | 700 | 658<br>(–6%) | ***643<br>(–8%)*** | n/a | 656<br>(–6.2%) | 653<br>(–6.7%) | 694<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 435<br>(–5.7%) | 420<br>(–8.8%) | n/a | ***374<br>(–18.9%)*** | 436<br>(–5.3%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 93<br>(–38.5%) | ***80<br>(–46.6%)*** | n/a | 90<br>(–40.5%) | 90<br>(–40.1%) | 92<br>(–38.6%) |
| [CSS-Tricks](https://css-tricks.com/) | 170 | 149<br>(–12.2%) | 125<br>(–26.2%) | n/a | ***115<br>(–32.2%)*** | 149<br>(–12.5%) | 156<br>(–8%) |
| [DeepSeek](https://www.deepseek.com/) | 101 | 96<br>(–5%) | ***81<br>(–20.1%)*** | n/a | 86<br>(–14.7%) | 96<br>(–5.4%) | 100<br>(–1.1%) |
| [DIN](https://www.din.de/) | 253 | 175<br>(–30.7%) | 163<br>(–35.3%) | n/a | ***136<br>(–46.3%)*** | 174<br>(–31.1%) | 182<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 566 | 532<br>(–6%) | 522<br>(–7.8%) | n/a | ***518<br>(–8.6%)*** | 524<br>(–7.4%) | 563<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7354 | 6759<br>(–8.1%) | ***6536<br>(–11.1%)*** | n/a | 6670<br>(–9.3%) | 6672<br>(–9.3%) | 6725<br>(–8.6%) |
| [EDRi](https://edri.org/) | 83 | 74<br>(–11.1%) | 70<br>(–15.9%) | n/a | ***54<br>(–34.7%)*** | 74<br>(–11.3%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 47<br>(–11.1%) | ***43<br>(–18.2%)*** | n/a | 45<br>(–14.4%) | 46<br>(–12.7%) | 48<br>(–9.9%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | n/a | 31<br>(–36.9%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1431 | 1382<br>(–3.5%) | 1326<br>(–7.4%) | n/a | ***1255<br>(–12.3%)*** | 1371<br>(–4.2%) | 1382<br>(–3.4%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 156 | 130<br>(–17%) | 125<br>(–20%) | n/a | ***55<br>(–65.1%)*** | 129<br>(–17.6%) | 136<br>(–13.2%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | ***31<br>(–13.9%)*** | n/a | 31<br>(–13.8%) | 34<br>(–5.6%) | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 219 | 227<br>(+3.7%) | ***212<br>(–3.5%)*** | n/a | 224<br>(+2.2%) | 219<br>(0%) | 238<br>(+8.3%) |
| [Google](https://www.google.com/) | 78 | 74<br>(–5%) | 74<br>(–5.7%) | n/a | ***62<br>(–20%)*** | 75<br>(–3.7%) | 78<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1550 | 1456<br>(–6%) | ***1380<br>(–11%)*** | n/a | 1430<br>(–7.8%) | 1454<br>(–6.2%) | 1536<br>(–0.9%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | n/a | 123<br>(+0.7%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.7%)*** | n/a | 153<br>(+2.5%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.8%) | ***32<br>(–61.5%)*** | n/a | 33<br>(–59.9%) | 33<br>(–59.7%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 50 | 37<br>(–25.1%) | ***34<br>(–31.3%)*** | n/a | 36<br>(–27.8%) | 36<br>(–27%) | 37<br>(–25.1%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.6%) | ***22<br>(–8.7%)*** | n/a | 22<br>(–7.7%) | 23<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 343 | 328<br>(–4.5%) | ***313<br>(–8.8%)*** | n/a | 319<br>(–7.1%) | 325<br>(–5.3%) | 337<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.5%)*** | n/a | 9<br>(–46.5%) | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 34 | 32<br>(–4.9%) | ***29<br>(–15.2%)*** | n/a | 29<br>(–15.1%) | 32<br>(–5.7%) | 33<br>(–3.1%) |
| [MDN](https://developer.mozilla.org/en-US/) | 110 | 67<br>(–39.2%) | 63<br>(–42.8%) | n/a | ***51<br>(–53.9%)*** | 65<br>(–40.5%) | 68<br>(–38.2%) |
| [Mistral AI](https://mistral.ai/) | 349 | 317<br>(–9.2%) | ***301<br>(–13.8%)*** | n/a | 309<br>(–11.7%) | 316<br>(–9.6%) | 346<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 407 | 384<br>(–5.8%) | 371<br>(–8.9%) | n/a | ***365<br>(–10.4%)*** | 379<br>(–6.9%) | 394<br>(–3.3%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***33<br>(–30.4%)*** | n/a | 33<br>(–29.5%) | 35<br>(–26.1%) | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 102 | 84<br>(–17.2%) | ***60<br>(–41.3%)*** | n/a | 60<br>(–40.5%) | 83<br>(–17.8%) | 86<br>(–15.7%) |
| [Opera](https://www.opera.com/) | 231 | 173<br>(–25%) | 147<br>(–36.5%) | n/a | ***109<br>(–52.7%)*** | 170<br>(–26.3%) | 177<br>(–23.5%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***136<br>(–21.3%)*** | n/a | 137<br>(–20.7%) | 143<br>(–17.4%) | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***31<br>(–10.4%)*** | n/a | 31<br>(–8.3%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 209 | 179<br>(–14.5%) | ***174<br>(–16.8%)*** | n/a | 175<br>(–16.5%) | 177<br>(–15.3%) | 179<br>(–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.1%) | ***17<br>(–19%)*** | n/a | 18<br>(–15.8%) | 18<br>(–17.5%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 235 | 224<br>(–5%) | ***210<br>(–10.6%)*** | n/a | 212<br>(–9.9%) | 224<br>(–4.8%) | 234<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 280 | 280<br>(–0.3%) | 276<br>(–1.4%) | n/a | ***266<br>(–5%)*** | 278<br>(–0.9%) | 280<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 44 | 33<br>(–26.3%) | ***31<br>(–30.7%)*** | n/a | 32<br>(–28.7%) | 32<br>(–28.3%) | 33<br>(–26.3%) |
| [TAZ](https://taz.de/) | 445 | 401<br>(–10%) | ***375<br>(–15.8%)*** | n/a | 391<br>(–12.3%) | 400<br>(–10.1%) | 413<br>(–7.3%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.3%) | ***50<br>(–17%)*** | n/a | 50<br>(–16.5%) | 54<br>(–10.5%) | 54<br>(–9.7%) |
| [TPGi](https://www.tpgi.com/) | 181 | 136<br>(–24.9%) | 132<br>(–26.6%) | n/a | ***117<br>(–35.3%)*** | 141<br>(–21.9%) | 166<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 152 | 127<br>(–16.2%) | 113<br>(–25.4%) | n/a | ***85<br>(–44%)*** | 125<br>(–17.6%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 97 | 90<br>(–7.1%) | ***88<br>(–9.5%)*** | n/a | 89<br>(–8.9%) | 90<br>(–7.8%) | 96<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12.1%) | 73<br>(–20.1%) | n/a | ***67<br>(–25.7%)*** | 79<br>(–12.7%) | 82<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 39<br>(–22.7%) | ***35<br>(–29.1%)*** | n/a | 36<br>(–27.6%) | 38<br>(–24.4%) | 40<br>(–19.2%) |
| [WordPress Blog](https://wordpress.com/blog/) | 201 | 165<br>(–18%) | 155<br>(–22.7%) | n/a | ***138<br>(–31.1%)*** | 172<br>(–14.4%) | 187<br>(–6.7%) |
| **Sites processed (of sites overall)** |  | 49/49 | 49/49 | 0/49 | 49/49 | 49/49 | 49/49 |
| **Average processing time** |  | 35 ms | 62 ms | n/a | 153 ms | ***11 ms*** | 188 ms |
| **Average result (KB)** | 369 | 336<br>(–9%) | 321<br>(–13%) | 369<br>(0%) | ***319<br>(–13.7%)*** | 333<br>(–9.8%) | 343<br>(–7.2%) |

Benchmarks last updated: Apr 3, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - htmlcompressor.com is currently unreachable (April 3, 2026) yet lacking other information, it is hoped to get back up again.
  - Minimize only minifies HTML.
  - [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
* Benchmarks are currently run manually (on a 2024 Apple Mac Mini) but may be automated in the future.