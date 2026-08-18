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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26<br>(–17.2%) | ***25<br>(–19.6%)*** | 26<br>(–17%) | 26<br>(–16.5%) | 25<br>(–19.1%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–5.8%) | ***58<br>(–8.4%)*** | 58<br>(–7.2%) | 58<br>(–7.7%) | 58<br>(–8.1%) | 58<br>(–7.2%) |
| [Apple](https://www.apple.com/) | 248 | 236<br>(–5.1%) | ***230<br>(–7.5%)*** | 234<br>(–5.9%) | 233<br>(–6.4%) | 232<br>(–6.7%) | 233<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 668 | 663<br>(–0.7%) | ***658<br>(–1.4%)*** | n/a | 661<br>(–1%) | 660<br>(–1.2%) | 663<br>(–0.8%) |
| [Bun](https://bun.sh/) | 231 | 227<br>(–2%) | ***215<br>(–6.9%)*** | 226<br>(–2.2%) | 224<br>(–3.1%) | 222<br>(–4.1%) | 224<br>(–3.1%) |
| [CERN](https://home.cern/) | 290 | 279<br>(–4%) | ***271<br>(–6.8%)*** | 278<br>(–4.2%) | 278<br>(–4.3%) | 277<br>(–4.7%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 171 | 158<br>(–7.5%) | ***155<br>(–9.2%)*** | 156<br>(–8.5%) | 155<br>(–8.9%) | 156<br>(–8.8%) | 156<br>(–8.4%) |
| [DeepSeek](https://www.deepseek.com/) | 84 | 84<br>(–0.7%) | ***83<br>(–1.7%)*** | 84<br>(–0.9%) | 83<br>(–1.3%) | 84<br>(–1%) | 84<br>(–0.9%) |
| [DIN](https://www.din.de/) | 253 | 182<br>(–28%) | ***176<br>(–30.4%)*** | 183<br>(–27.6%) | 182<br>(–28.1%) | 180<br>(–28.7%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 562 | 558<br>(–0.6%) | ***556<br>(–1.1%)*** | n/a | 557<br>(–0.8%) | 557<br>(–1%) | 559<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7410 | 7044<br>(–4.9%) | ***6803<br>(–8.2%)*** | n/a | 6919<br>(–6.6%) | 6947<br>(–6.2%) | 6972<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.7%) | ***77<br>(–8.2%)*** | 79<br>(–6.6%) | 78<br>(–7.6%) | 78<br>(–7.9%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 49<br>(–8%) | ***47<br>(–12.5%)*** | 49<br>(–7.8%) | 48<br>(–10%) | 47<br>(–11.2%) | 48<br>(–9.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33%) | ***33<br>(–33.8%)*** | 33<br>(–32.8%) | 33<br>(–33%) | 33<br>(–33.4%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1552 | 1498<br>(–3.4%) | ***1424<br>(–8.2%)*** | n/a | 1496<br>(–3.6%) | 1494<br>(–3.7%) | 1493<br>(–3.8%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 136<br>(–20.4%) | ***134<br>(–21.2%)*** | 136<br>(–20.1%) | 136<br>(–20.4%) | 135<br>(–20.9%) | 136<br>(–20.2%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 42<br>(–3.4%) | 40<br>(–6.3%) | 40<br>(–6.3%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 231 | 241<br>(+4.2%) | 231<br>(0%) | ***230<br>(–0.2%)*** | 244<br>(+5.8%) | 231<br>(0%) | 249<br>(+7.9%) |
| [Google](https://www.google.com/) | 82 | 128<br>(+56.5%) | 81<br>(–0.6%) | 82<br>(–0.3%) | ***81<br>(–0.8%)*** | 81<br>(–0.5%) | 82<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1754 | 1731<br>(–1.3%) | ***1690<br>(–3.6%)*** | n/a | 1734<br>(–1.1%) | 1731<br>(–1.3%) | 1740<br>(–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.8%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.5%) | ***32<br>(–61.1%)*** | 34<br>(–58.1%) | 34<br>(–59.1%) | 33<br>(–59.5%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 43 | 34<br>(–22.1%) | ***31<br>(–27.9%)*** | 33<br>(–23.2%) | 33<br>(–23.6%) | 33<br>(–24%) | 33<br>(–23.5%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–5.4%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 347 | 344<br>(–1.1%) | ***337<br>(–2.9%)*** | n/a | 343<br>(–1.2%) | 341<br>(–1.8%) | 341<br>(–1.8%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–30%) | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 54 | 51<br>(–4.6%) | ***50<br>(–7.3%)*** | 52<br>(–3.8%) | 50<br>(–7.2%) | 50<br>(–7.2%) | 52<br>(–3.9%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.2%) | ***68<br>(–42.7%)*** | 73<br>(–38.7%) | 72<br>(–39.5%) | 70<br>(–41.1%) | 72<br>(–39.1%) |
| [Mistral AI](https://mistral.ai/) | 456 | 442<br>(–3%) | ***362<br>(–20.5%)*** | n/a | 454<br>(–0.3%) | 446<br>(–2.2%) | 456<br>(0%) |
| [Mondoweiss](https://mondoweiss.net/) | 349 | 345<br>(–1.1%) | ***329<br>(–5.6%)*** | n/a | 334<br>(–4.4%) | 333<br>(–4.4%) | 335<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***35<br>(–25.8%)*** | 37<br>(–22.2%) | 36<br>(–23.7%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 105 | 87<br>(–17.2%) | ***86<br>(–18.2%)*** | 87<br>(–16.9%) | 88<br>(–16.5%) | 87<br>(–17.7%) | 88<br>(–16.5%) |
| [Opera](https://www.opera.com/) | 183 | 134<br>(–26.6%) | ***131<br>(–28.4%)*** | 134<br>(–26.9%) | 133<br>(–27.2%) | 133<br>(–27.3%) | 133<br>(–27.2%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***143<br>(–17.2%)*** | 145<br>(–15.9%) | 146<br>(–15.7%) | 144<br>(–16.8%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.3%)*** | 18<br>(–13.5%) | 18<br>(–14.5%) | 18<br>(–16.4%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 250 | 247<br>(–1.3%) | ***246<br>(–1.6%)*** | 249<br>(–0.7%) | 248<br>(–0.9%) | 248<br>(–0.9%) | 249<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 288 | 288<br>(+0.2%) | ***286<br>(–0.6%)*** | 288<br>(–0.1%) | 287<br>(–0.2%) | 287<br>(–0.4%) | 288<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 52 | 38<br>(–26.3%) | ***37<br>(–29.4%)*** | 38<br>(–27.2%) | 38<br>(–27.7%) | 37<br>(–28.3%) | 38<br>(–27.2%) |
| [TAZ](https://taz.de/) | 439 | 414<br>(–5.6%) | ***393<br>(–10.4%)*** | n/a | 406<br>(–7.5%) | 407<br>(–7.4%) | 408<br>(–7%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | ***54<br>(–10.4%)*** | 54<br>(–9.7%) | 54<br>(–9.8%) | 54<br>(–10%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 188 | 172<br>(–9%) | ***169<br>(–10.5%)*** | 173<br>(–8.3%) | 170<br>(–9.9%) | 170<br>(–9.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 154 | 133<br>(–13.5%) | ***128<br>(–16.6%)*** | 133<br>(–13.5%) | 132<br>(–14.5%) | 131<br>(–15%) | 133<br>(–13.8%) |
| [UX Collective](https://uxdesign.cc/) | 116 | 160<br>(+38.5%) | ***113<br>(–2.3%)*** | 115<br>(–0.6%) | 114<br>(–1.1%) | 114<br>(–1.1%) | 114<br>(–1.6%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.8%) | ***82<br>(–10.8%)*** | 83<br>(–9.5%) | 82<br>(–9.8%) | 82<br>(–10.5%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 41<br>(–18.8%) | ***40<br>(–20.9%)*** | 40<br>(–19.2%) | 40<br>(–19.5%) | 40<br>(–20.3%) | 41<br>(–19.1%) |
| [WordPress Blog](https://wordpress.com/blog/) | 223 | 205<br>(–8.1%) | ***202<br>(–9.5%)*** | 206<br>(–7.5%) | 205<br>(–8.2%) | 204<br>(–8.6%) | 207<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 29 ms | 40 ms | 831 ms | 41 ms | ***9 ms*** | 196 ms |
| **Average result (KB)** | 381 | 362<br>(–4.9%) | ***348<br>(–8.6%)*** | 370<br>(–2.8%) | 357<br>(–6.3%) | 356<br>(–6.4%) | 359<br>(–5.8%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | ***22<br>(–28.4%)*** | 24<br>(–22.9%) | 23<br>(–26.5%) | 23<br>(–25.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.2%) | 42<br>(–34%) | 57<br>(–10%) | ***39<br>(–37.5%)*** | 56<br>(–11.5%) | 58<br>(–7.2%) |
| [Apple](https://www.apple.com/) | 248 | 236<br>(–5.1%) | ***220<br>(–11.4%)*** | 234<br>(–5.9%) | 223<br>(–10%) | 232<br>(–6.7%) | 233<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 668 | 629<br>(–5.7%) | ***615<br>(–7.8%)*** | n/a | 623<br>(–6.7%) | 626<br>(–6.3%) | 663<br>(–0.8%) |
| [Bun](https://bun.sh/) | 231 | 226<br>(–2.1%) | ***211<br>(–8.9%)*** | 226<br>(–2.2%) | 219<br>(–5.1%) | 222<br>(–4.2%) | 224<br>(–3.1%) |
| [CERN](https://home.cern/) | 290 | 263<br>(–9.4%) | 225<br>(–22.5%) | 268<br>(–7.7%) | ***216<br>(–25.6%)*** | 262<br>(–9.8%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 171 | 149<br>(–12.6%) | 133<br>(–22.4%) | 150<br>(–12.1%) | ***116<br>(–31.9%)*** | 149<br>(–12.9%) | 156<br>(–8.4%) |
| [DeepSeek](https://www.deepseek.com/) | 84 | 81<br>(–4%) | ***61<br>(–27.2%)*** | 83<br>(–1.4%) | 62<br>(–27.1%) | 81<br>(–3.8%) | 84<br>(–0.9%) |
| [DIN](https://www.din.de/) | 253 | 176<br>(–30.5%) | 164<br>(–35.2%) | 176<br>(–30.3%) | ***136<br>(–46.3%)*** | 175<br>(–30.8%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 562 | 529<br>(–5.9%) | 519<br>(–7.7%) | n/a | ***514<br>(–8.6%)*** | 521<br>(–7.3%) | 559<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7410 | 7044<br>(–4.9%) | ***6802<br>(–8.2%)*** | n/a | 6918<br>(–6.6%) | 6947<br>(–6.2%) | 6972<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 56<br>(–33.4%) | 76<br>(–9.6%) | ***55<br>(–34.7%)*** | 75<br>(–11.1%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 48<br>(–10.8%) | ***43<br>(–18.7%)*** | 48<br>(–10.1%) | 46<br>(–14.3%) | 47<br>(–12.2%) | 48<br>(–9.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.1%) | ***31<br>(–37.6%)*** | 33<br>(–32.9%) | 31<br>(–36.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1552 | 1433<br>(–7.6%) | 1309<br>(–15.6%) | n/a | ***1298<br>(–16.4%)*** | 1488<br>(–4.1%) | 1493<br>(–3.8%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 129<br>(–24.2%) | ***56<br>(–67.4%)*** | 130<br>(–23.6%) | 56<br>(–66.9%) | 129<br>(–24.6%) | 136<br>(–20.2%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.2%) | 40<br>(–6.6%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 231 | 241<br>(+4.2%) | ***224<br>(–3.2%)*** | 230<br>(–0.2%) | 236<br>(+2.2%) | 231<br>(0%) | 249<br>(+7.9%) |
| [Google](https://www.google.com/) | 82 | 78<br>(–4.6%) | 69<br>(–15.6%) | 81<br>(–0.8%) | ***66<br>(–19.3%)*** | 79<br>(–3.5%) | 82<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1754 | 1644<br>(–6.2%) | ***1568<br>(–10.6%)*** | n/a | 1614<br>(–8%) | 1644<br>(–6.3%) | 1740<br>(–0.8%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.8%) | ***31<br>(–61.9%)*** | 34<br>(–58.2%) | 33<br>(–59.9%) | 33<br>(–59.7%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 43 | 33<br>(–23.7%) | ***30<br>(–30.2%)*** | 33<br>(–24.2%) | 32<br>(–26.4%) | 32<br>(–25.3%) | 33<br>(–23.5%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | 26<br>(–9%) | 28<br>(–5%) | ***25<br>(–14.2%)*** | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 347 | 331<br>(–4.7%) | ***315<br>(–9.3%)*** | n/a | 321<br>(–7.5%) | 328<br>(–5.5%) | 341<br>(–1.8%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.8%)*** | 10<br>(–42.7%) | 9<br>(–46.7%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 54 | 51<br>(–5.6%) | ***46<br>(–13.9%)*** | 52<br>(–4.1%) | 46<br>(–13.8%) | 50<br>(–7.6%) | 52<br>(–3.9%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.3%) | 67<br>(–43.7%) | 73<br>(–38.8%) | ***55<br>(–53.8%)*** | 70<br>(–41.2%) | 72<br>(–39.1%) |
| [Mistral AI](https://mistral.ai/) | 456 | 441<br>(–3.2%) | ***278<br>(–39.1%)*** | n/a | 360<br>(–21.1%) | 445<br>(–2.3%) | 456<br>(0%) |
| [Mondoweiss](https://mondoweiss.net/) | 349 | 329<br>(–5.8%) | ***309<br>(–11.5%)*** | n/a | 310<br>(–11.2%) | 323<br>(–7.3%) | 335<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***33<br>(–31.6%)*** | 37<br>(–22.2%) | 34<br>(–29.4%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 105 | 86<br>(–17.9%) | ***61<br>(–42%)*** | 87<br>(–17.5%) | 62<br>(–41.3%) | 86<br>(–18.3%) | 88<br>(–16.5%) |
| [Opera](https://www.opera.com/) | 183 | 130<br>(–29.3%) | ***82<br>(–55.2%)*** | 133<br>(–27.2%) | 84<br>(–53.9%) | 129<br>(–29.7%) | 133<br>(–27.2%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***136<br>(–21.3%)*** | 145<br>(–15.9%) | 137<br>(–20.7%) | 144<br>(–16.9%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19%)*** | 18<br>(–14.3%) | 18<br>(–15.9%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 250 | 238<br>(–4.8%) | ***220<br>(–12%)*** | 240<br>(–4%) | 222<br>(–11.3%) | 239<br>(–4.5%) | 249<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 288 | 287<br>(–0.3%) | 273<br>(–5%) | 288<br>(–0.1%) | ***271<br>(–5.9%)*** | 285<br>(–0.9%) | 288<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 52 | 38<br>(–26.4%) | ***36<br>(–31.2%)*** | 38<br>(–27.3%) | 37<br>(–29.7%) | 37<br>(–28.4%) | 38<br>(–27.2%) |
| [TAZ](https://taz.de/) | 439 | 396<br>(–9.7%) | ***370<br>(–15.8%)*** | n/a | 388<br>(–11.7%) | 398<br>(–9.3%) | 408<br>(–7%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.2%) | ***50<br>(–16.9%)*** | 54<br>(–9.9%) | 50<br>(–16.3%) | 54<br>(–10.2%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 188 | 145<br>(–23.2%) | 128<br>(–32.3%) | 152<br>(–19.1%) | ***125<br>(–33.4%)*** | 147<br>(–21.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 154 | 129<br>(–16%) | 96<br>(–37.7%) | 126<br>(–18.3%) | ***87<br>(–43.7%)*** | 127<br>(–17.4%) | 133<br>(–13.8%) |
| [UX Collective](https://uxdesign.cc/) | 116 | 107<br>(–7.2%) | ***100<br>(–14%)*** | 114<br>(–1.4%) | 101<br>(–12.8%) | 107<br>(–7.6%) | 114<br>(–1.6%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12%) | ***64<br>(–30.4%)*** | 81<br>(–11.5%) | 64<br>(–29.8%) | 80<br>(–12.8%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 39<br>(–22.6%) | ***36<br>(–28.9%)*** | 39<br>(–23%) | 36<br>(–27.5%) | 38<br>(–24.2%) | 41<br>(–19.1%) |
| [WordPress Blog](https://wordpress.com/blog/) | 223 | 183<br>(–18%) | ***154<br>(–31.1%)*** | 193<br>(–13.6%) | 154<br>(–31%) | 191<br>(–14.6%) | 207<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 34 ms | 67 ms | 1296 ms | 154 ms | ***10 ms*** | 184 ms |
| **Average result (KB)** | 381 | 352<br>(–7.6%) | ***326<br>(–14.3%)*** | 368<br>(–3.3%) | 331<br>(–13%) | 350<br>(–8.1%) | 359<br>(–5.8%) |

Benchmarks last updated: Aug 18, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - htmlcompressor.com incorrectly converts no-break spaces to spaces which can give an impression of greater effectiveness (last confirmed Apr 4, 2026).
  - Minimize only minifies HTML.
  - [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
* Benchmarks are currently run manually (on a 2024 Apple Mac Mini) but may be automated in the future.