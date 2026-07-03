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
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–5.8%) | 58<br>(–8.3%) | 58<br>(–7.2%) | 58<br>(–7.7%) | ***58<br>(–8.4%)*** | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 244 | 232<br>(–5%) | ***226<br>(–7.4%)*** | 230<br>(–5.8%) | 229<br>(–6.2%) | 228<br>(–6.9%) | 230<br>(–6%) |
| [BBC](https://www.bbc.co.uk/) | 757 | 752<br>(–0.6%) | ***744<br>(–1.8%)*** | n/a | 750<br>(–0.9%) | 746<br>(–1.4%) | 751<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.8%) | ***264<br>(–6.8%)*** | 278<br>(–1.7%) | 276<br>(–2.5%) | 273<br>(–3.4%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 301 | 289<br>(–3.8%) | ***281<br>(–6.5%)*** | n/a | 288<br>(–4.2%) | 287<br>(–4.7%) | 288<br>(–4.1%) |
| [CSS-Tricks](https://css-tricks.com/) | 168 | 156<br>(–7.2%) | ***153<br>(–8.8%)*** | 155<br>(–8.1%) | 154<br>(–8.6%) | 153<br>(–8.8%) | 155<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 147 | 147<br>(–0.6%) | ***140<br>(–5.1%)*** | 146<br>(–0.8%) | 146<br>(–1.1%) | 146<br>(–0.9%) | 146<br>(–0.8%) |
| [DIN](https://www.din.de/) | 254 | 182<br>(–28.2%) | ***176<br>(–30.6%)*** | 184<br>(–27.8%) | 183<br>(–28.1%) | 180<br>(–29.1%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 563 | 559<br>(–0.6%) | ***557<br>(–1%)*** | n/a | 558<br>(–0.8%) | 557<br>(–1%) | 560<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7415 | 7048<br>(–4.9%) | ***6808<br>(–8.2%)*** | n/a | 6924<br>(–6.6%) | 6946<br>(–6.3%) | 6977<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.6%) | 78<br>(–7.6%) | 79<br>(–6.6%) | 78<br>(–7.5%) | ***77<br>(–8.1%)*** | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 50<br>(–8%) | ***47<br>(–12.6%)*** | 50<br>(–7.8%) | 49<br>(–10%) | 48<br>(–11.5%) | 49<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1576 | 1526<br>(–3.2%) | ***1448<br>(–8.1%)*** | n/a | 1524<br>(–3.3%) | 1517<br>(–3.8%) | 1521<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 172 | 138<br>(–19.8%) | ***137<br>(–20.5%)*** | 139<br>(–19.6%) | 138<br>(–19.8%) | 137<br>(–20.4%) | 139<br>(–19.6%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–4.1%) | 40<br>(–6.3%) | 42<br>(–3.4%) | 40<br>(–6.3%) | ***40<br>(–6.4%)*** | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.6%) | 223<br>(0%) | ***222<br>(–0.2%)*** | 236<br>(+6%) | 223<br>(0%) | 241<br>(+8.3%) |
| [Google](https://www.google.com/) | 80 | 123<br>(+54.8%) | 79<br>(–0.6%) | 80<br>(–0.3%) | ***79<br>(–0.8%)*** | 79<br>(–0.5%) | 80<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1549 | 1526<br>(–1.5%) | ***1486<br>(–4.1%)*** | n/a | 1532<br>(–1.1%) | 1524<br>(–1.6%) | 1535<br>(–0.9%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.9%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 152 | 154<br>(+1.8%) | ***151<br>(–0.6%)*** | 151<br>(–0.2%) | 156<br>(+2.6%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.2%) | ***32<br>(–60.7%)*** | 35<br>(–57.7%) | 34<br>(–58.8%) | 33<br>(–59.3%) | 34<br>(–58.2%) |
| [Igalia](https://www.igalia.com/) | 43 | 34<br>(–21.6%) | ***31<br>(–27.4%)*** | 33<br>(–22.7%) | 33<br>(–23.1%) | 33<br>(–23.7%) | 33<br>(–23.1%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | ***28<br>(–6.4%)*** | 28<br>(–5%) | 28<br>(–5.4%) | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 334 | 330<br>(–1.1%) | ***323<br>(–3.1%)*** | n/a | 330<br>(–1.2%) | 327<br>(–1.9%) | 328<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | 12<br>(–28.5%) | 12<br>(–27.3%) | 12<br>(–29.7%) | ***12<br>(–30.2%)*** | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–4.1%) | 40<br>(–6.4%) | 41<br>(–3.4%) | 40<br>(–6.3%) | ***40<br>(–6.4%)*** | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.2%) | ***68<br>(–42.7%)*** | 73<br>(–38.8%) | 72<br>(–39%) | 70<br>(–41.4%) | 72<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 429 | 413<br>(–3.7%) | ***409<br>(–4.8%)*** | n/a | 427<br>(–0.7%) | 415<br>(–3.2%) | 427<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 235 | 221<br>(–6.2%) | ***214<br>(–8.9%)*** | 220<br>(–6.5%) | 219<br>(–6.9%) | 218<br>(–7.5%) | 220<br>(–6.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21.1%) | 35<br>(–25.9%) | 37<br>(–22.3%) | 36<br>(–23.9%) | ***35<br>(–26.2%)*** | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 101 | 84<br>(–16.9%) | ***83<br>(–17.8%)*** | 84<br>(–16.5%) | 85<br>(–16%) | 83<br>(–17.5%) | 85<br>(–16.1%) |
| [Opera](https://www.opera.com/) | 185 | 134<br>(–27.4%) | ***131<br>(–29.2%)*** | 134<br>(–27.7%) | 134<br>(–27.9%) | 133<br>(–28.3%) | 133<br>(–28.1%) |
| [OSCE](https://www.osce.org/) | 172 | 145<br>(–16%) | 143<br>(–17.2%) | 145<br>(–15.9%) | 145<br>(–15.7%) | ***142<br>(–17.3%)*** | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.4%)*** | 18<br>(–13.6%) | 18<br>(–14.4%) | 17<br>(–16.8%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 234 | 231<br>(–1.3%) | ***231<br>(–1.5%)*** | 233<br>(–0.7%) | 232<br>(–0.9%) | 232<br>(–1.1%) | 233<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 297 | 297<br>(+0.2%) | ***295<br>(–0.5%)*** | n/a | 296<br>(–0.2%) | 296<br>(–0.4%) | 297<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 50 | 36<br>(–26.4%) | ***35<br>(–29.4%)*** | 36<br>(–27.2%) | 36<br>(–27.7%) | 35<br>(–28.5%) | 36<br>(–27.1%) |
| [TAZ](https://taz.de/) | 430 | 406<br>(–5.7%) | ***386<br>(–10.4%)*** | n/a | 397<br>(–7.7%) | 396<br>(–7.9%) | 399<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | ***54<br>(–10.5%)*** | 54<br>(–9.8%) | 54<br>(–9.8%) | 54<br>(–10.3%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 162<br>(–8.5%) | ***160<br>(–9.9%)*** | 162<br>(–8.5%) | 161<br>(–9.3%) | 160<br>(–9.6%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 153 | 132<br>(–13.6%) | ***128<br>(–16.4%)*** | 132<br>(–13.7%) | 131<br>(–14.5%) | 130<br>(–15.2%) | 132<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 100 | 143<br>(+42.9%) | ***98<br>(–2.4%)*** | 100<br>(–0.7%) | 99<br>(–1.1%) | 99<br>(–1.3%) | 99<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.7%) | 81<br>(–10.7%) | 83<br>(–9.4%) | 82<br>(–9.7%) | ***81<br>(–10.7%)*** | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 41<br>(–18.7%) | ***40<br>(–20.8%)*** | 41<br>(–19.1%) | 41<br>(–19.4%) | 40<br>(–20.3%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 220 | 202<br>(–8%) | ***199<br>(–9.3%)*** | 203<br>(–7.5%) | 202<br>(–8%) | 200<br>(–8.9%) | 204<br>(–7.3%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 29 ms | 42 ms | 817 ms | 38 ms | ***9 ms*** | 192 ms |
| **Average result (KB)** | 377 | 358<br>(–5.1%) | ***345<br>(–8.4%)*** | 366<br>(–2.8%) | 353<br>(–6.3%) | 352<br>(–6.6%) | 355<br>(–5.8%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.2%) | 54<br>(–14.8%) | 56<br>(–10%) | ***39<br>(–37.5%)*** | 55<br>(–11.8%) | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 244 | 232<br>(–5.1%) | ***216<br>(–11.4%)*** | 230<br>(–5.8%) | 220<br>(–10%) | 227<br>(–6.9%) | 230<br>(–6%) |
| [BBC](https://www.bbc.co.uk/) | 757 | 711<br>(–6.1%) | ***694<br>(–8.4%)*** | n/a | 706<br>(–6.7%) | 705<br>(–6.9%) | 751<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.9%) | ***259<br>(–8.3%)*** | 278<br>(–1.7%) | 272<br>(–4%) | 273<br>(–3.4%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 301 | 273<br>(–9.1%) | 258<br>(–14%) | n/a | ***216<br>(–28%)*** | 271<br>(–9.7%) | 288<br>(–4.1%) |
| [CSS-Tricks](https://css-tricks.com/) | 168 | 146<br>(–13.1%) | 134<br>(–20.1%) | 147<br>(–12.3%) | ***113<br>(–32.7%)*** | 146<br>(–13.4%) | 155<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 147 | 141<br>(–4%) | ***118<br>(–20.1%)*** | 141<br>(–4%) | 123<br>(–16.3%) | 141<br>(–4.2%) | 146<br>(–0.8%) |
| [DIN](https://www.din.de/) | 254 | 176<br>(–30.8%) | 164<br>(–35.3%) | 177<br>(–30.6%) | ***136<br>(–46.3%)*** | 175<br>(–31.2%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 563 | 528<br>(–6.1%) | 518<br>(–7.9%) | n/a | ***514<br>(–8.7%)*** | 521<br>(–7.5%) | 560<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7415 | 7048<br>(–4.9%) | ***6807<br>(–8.2%)*** | n/a | 6923<br>(–6.6%) | 6946<br>(–6.3%) | 6977<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 71<br>(–15.4%) | 76<br>(–9.5%) | ***55<br>(–34.6%)*** | 75<br>(–11.3%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 48<br>(–10.8%) | ***44<br>(–18.6%)*** | 48<br>(–10.1%) | 46<br>(–14.2%) | 47<br>(–12.5%) | 49<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–36.9%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1576 | 1456<br>(–7.6%) | 1393<br>(–11.6%) | n/a | ***1324<br>(–16%)*** | 1509<br>(–4.2%) | 1521<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 172 | 132<br>(–23.6%) | 127<br>(–26.3%) | 133<br>(–23%) | ***57<br>(–67.1%)*** | 131<br>(–24.1%) | 139<br>(–19.6%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–5.2%) | ***37<br>(–14.3%)*** | 41<br>(–3.7%) | 37<br>(–14.2%) | 40<br>(–6.7%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.6%) | ***215<br>(–3.3%)*** | 222<br>(–0.2%) | 228<br>(+2.2%) | 223<br>(0%) | 241<br>(+8.3%) |
| [Google](https://www.google.com/) | 80 | 76<br>(–4.6%) | 76<br>(–5.3%) | 79<br>(–0.8%) | ***64<br>(–19.7%)*** | 77<br>(–3.6%) | 80<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1549 | 1454<br>(–6.1%) | ***1380<br>(–10.9%)*** | n/a | 1429<br>(–7.7%) | 1452<br>(–6.2%) | 1535<br>(–0.9%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.7%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 152 | 154<br>(+1.8%) | ***151<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.5%) | ***32<br>(–61.5%)*** | 35<br>(–57.8%) | 33<br>(–59.6%) | 33<br>(–59.4%) | 34<br>(–58.2%) |
| [Igalia](https://www.igalia.com/) | 43 | 33<br>(–23.1%) | ***30<br>(–29.8%)*** | 33<br>(–23.7%) | 32<br>(–25.8%) | 32<br>(–25.2%) | 33<br>(–23.1%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | 27<br>(–7.7%) | 28<br>(–5%) | ***25<br>(–14.1%)*** | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 334 | 319<br>(–4.2%) | ***303<br>(–9%)*** | n/a | 310<br>(–7%) | 316<br>(–5.1%) | 328<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–44.7%) | 10<br>(–42.7%) | ***9<br>(–46.5%)*** | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.3%) | 40<br>(–6.7%) | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.3%) | 67<br>(–43.8%) | 73<br>(–38.9%) | ***55<br>(–53.7%)*** | 69<br>(–41.5%) | 72<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 429 | 413<br>(–3.8%) | ***327<br>(–23.9%)*** | n/a | 335<br>(–22%) | 415<br>(–3.3%) | 427<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 235 | 212<br>(–9.8%) | 198<br>(–15.9%) | 215<br>(–8.8%) | ***172<br>(–27.1%)*** | 211<br>(–10.5%) | 220<br>(–6.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21.1%) | ***32<br>(–31.7%)*** | 37<br>(–22.3%) | 33<br>(–29.6%) | 35<br>(–26.2%) | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 101 | 83<br>(–17.6%) | ***58<br>(–42.5%)*** | 84<br>(–17.1%) | 59<br>(–41.8%) | 83<br>(–18.1%) | 85<br>(–16.1%) |
| [Opera](https://www.opera.com/) | 185 | 130<br>(–30.1%) | 122<br>(–34.2%) | 134<br>(–27.9%) | ***84<br>(–54.5%)*** | 129<br>(–30.7%) | 133<br>(–28.1%) |
| [OSCE](https://www.osce.org/) | 172 | 145<br>(–16.1%) | ***135<br>(–21.4%)*** | 145<br>(–16%) | 137<br>(–20.7%) | 142<br>(–17.4%) | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19.1%)*** | 18<br>(–14.4%) | 18<br>(–15.8%) | 17<br>(–17.6%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 234 | 223<br>(–4.9%) | ***210<br>(–10.5%)*** | 225<br>(–4.1%) | 211<br>(–9.9%) | 223<br>(–4.7%) | 233<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 297 | 296<br>(–0.3%) | 293<br>(–1.3%) | n/a | ***283<br>(–4.8%)*** | 294<br>(–0.9%) | 297<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 50 | 36<br>(–26.5%) | ***34<br>(–31.1%)*** | 36<br>(–27.3%) | 35<br>(–29.5%) | 35<br>(–28.7%) | 36<br>(–27.1%) |
| [TAZ](https://taz.de/) | 430 | 386<br>(–10.3%) | ***360<br>(–16.3%)*** | n/a | 377<br>(–12.4%) | 386<br>(–10.2%) | 399<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.2%) | ***50<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.3%) | 54<br>(–10.5%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 136<br>(–23.4%) | 133<br>(–25.1%) | 142<br>(–20%) | ***117<br>(–34.2%)*** | 138<br>(–22.3%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 153 | 128<br>(–16.1%) | 114<br>(–25.2%) | 125<br>(–18.5%) | ***86<br>(–44%)*** | 126<br>(–17.6%) | 132<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 100 | 93<br>(–7.4%) | ***91<br>(–9.4%)*** | 95<br>(–5.6%) | 91<br>(–9.3%) | 92<br>(–7.9%) | 99<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–11.9%) | 73<br>(–20%) | 81<br>(–11.4%) | ***64<br>(–29.8%)*** | 79<br>(–13%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 39<br>(–22.5%) | ***36<br>(–28.8%)*** | 39<br>(–22.9%) | 37<br>(–27.3%) | 38<br>(–24.1%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 220 | 181<br>(–17.8%) | 170<br>(–22.5%) | 190<br>(–13.5%) | ***152<br>(–30.6%)*** | 188<br>(–14.6%) | 204<br>(–7.3%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 33 ms | 64 ms | 1456 ms | 142 ms | ***11 ms*** | 193 ms |
| **Average result (KB)** | 377 | 348<br>(–7.7%) | 331<br>(–12.2%) | 364<br>(–3.4%) | ***327<br>(–13.1%)*** | 346<br>(–8.3%) | 355<br>(–5.8%) |

Benchmarks last updated: Jul 3, 2026
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