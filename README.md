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
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–5.8%) | ***57<br>(–8.4%)*** | 58<br>(–7.2%) | 58<br>(–7.7%) | 58<br>(–8.1%) | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 251 | 238<br>(–5.2%) | ***232<br>(–7.7%)*** | 236<br>(–5.9%) | 235<br>(–6.4%) | 234<br>(–6.7%) | 236<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 651 | 647<br>(–0.7%) | ***642<br>(–1.5%)*** | n/a | 644<br>(–1%) | 644<br>(–1.2%) | 646<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.8%) | ***264<br>(–6.8%)*** | 278<br>(–1.7%) | 275<br>(–2.6%) | 274<br>(–3.1%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 290 | 279<br>(–4%) | ***271<br>(–6.8%)*** | 278<br>(–4.2%) | 278<br>(–4.3%) | 277<br>(–4.7%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 170 | 157<br>(–7.5%) | ***154<br>(–9.3%)*** | 155<br>(–8.5%) | 154<br>(–9%) | 155<br>(–8.9%) | 155<br>(–8.5%) |
| [DeepSeek](https://www.deepseek.com/) | 98 | 97<br>(–0.8%) | ***91<br>(–7.5%)*** | 97<br>(–1.2%) | 97<br>(–1.5%) | 97<br>(–1.3%) | 97<br>(–1.2%) |
| [DIN](https://www.din.de/) | 253 | 182<br>(–28%) | ***176<br>(–30.4%)*** | 183<br>(–27.6%) | 182<br>(–28.1%) | 180<br>(–28.7%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 545 | 541<br>(–0.6%) | ***539<br>(–1%)*** | n/a | 540<br>(–0.8%) | 540<br>(–0.9%) | 542<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7413 | 7046<br>(–4.9%) | ***6805<br>(–8.2%)*** | n/a | 6921<br>(–6.6%) | 6950<br>(–6.2%) | 6974<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.7%) | ***77<br>(–8.2%)*** | 79<br>(–6.6%) | 78<br>(–7.6%) | 78<br>(–7.9%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 50<br>(–7.9%) | ***47<br>(–12.4%)*** | 50<br>(–7.7%) | 48<br>(–9.9%) | 48<br>(–11.1%) | 49<br>(–9.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.5%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1525 | 1474<br>(–3.4%) | ***1401<br>(–8.2%)*** | n/a | 1472<br>(–3.5%) | 1469<br>(–3.7%) | 1468<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 136<br>(–20.4%) | ***134<br>(–21.2%)*** | 136<br>(–20.1%) | 136<br>(–20.4%) | 135<br>(–20.9%) | 136<br>(–20.2%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 42<br>(–3.4%) | 40<br>(–6.3%) | 40<br>(–6.3%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 217 | 225<br>(+3.6%) | 217<br>(0%) | ***217<br>(–0.2%)*** | 231<br>(+6.2%) | 217<br>(0%) | 236<br>(+8.5%) |
| [Google](https://www.google.com/) | 82 | 128<br>(+56.6%) | 81<br>(–0.6%) | 81<br>(–0.3%) | ***81<br>(–0.8%)*** | 81<br>(–0.5%) | 81<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1514 | 1490<br>(–1.6%) | ***1450<br>(–4.2%)*** | n/a | 1495<br>(–1.3%) | 1491<br>(–1.6%) | 1500<br>(–0.9%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.8%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.5%) | ***32<br>(–61%)*** | 35<br>(–58%) | 34<br>(–59.1%) | 33<br>(–59.5%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 44 | 35<br>(–21.9%) | ***32<br>(–27.6%)*** | 34<br>(–22.9%) | 34<br>(–23.4%) | 34<br>(–23.7%) | 34<br>(–23.3%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.4%)*** | 28<br>(–5%) | 28<br>(–5.4%) | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 363 | 359<br>(–1%) | ***353<br>(–3%)*** | n/a | 359<br>(–1.2%) | 357<br>(–1.8%) | 357<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–30%) | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 54 | 51<br>(–4.6%) | ***50<br>(–7.3%)*** | 52<br>(–3.8%) | 50<br>(–7.2%) | 50<br>(–7.2%) | 52<br>(–3.9%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 70<br>(–40.2%) | ***67<br>(–42.7%)*** | 72<br>(–38.8%) | 71<br>(–39.5%) | 69<br>(–41.2%) | 71<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 425 | 412<br>(–3.2%) | ***341<br>(–19.9%)*** | n/a | 424<br>(–0.3%) | 416<br>(–2.2%) | 425<br>(+0%) |
| [Mondoweiss](https://mondoweiss.net/) | 354 | 351<br>(–1.1%) | ***335<br>(–5.4%)*** | n/a | 339<br>(–4.2%) | 339<br>(–4.3%) | 341<br>(–3.9%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***35<br>(–25.8%)*** | 37<br>(–22.2%) | 36<br>(–23.8%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 102 | 86<br>(–16.3%) | ***85<br>(–17.3%)*** | 86<br>(–16%) | 86<br>(–15.6%) | 85<br>(–16.8%) | 86<br>(–15.6%) |
| [Opera](https://www.opera.com/) | 183 | 134<br>(–26.6%) | ***131<br>(–28.4%)*** | 134<br>(–26.9%) | 133<br>(–27.2%) | 133<br>(–27.3%) | 133<br>(–27.2%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***143<br>(–17.2%)*** | 145<br>(–15.9%) | 146<br>(–15.7%) | 144<br>(–16.8%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.3%)*** | 18<br>(–13.5%) | 18<br>(–14.5%) | 18<br>(–16.4%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 237 | 234<br>(–1.3%) | ***233<br>(–1.6%)*** | 235<br>(–0.7%) | 235<br>(–0.9%) | 235<br>(–0.9%) | 235<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 296 | 297<br>(+0.2%) | ***295<br>(–0.5%)*** | n/a | 296<br>(–0.2%) | 295<br>(–0.4%) | 296<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 52 | 38<br>(–26.3%) | ***36<br>(–29.3%)*** | 38<br>(–27.2%) | 37<br>(–27.7%) | 37<br>(–28.2%) | 38<br>(–27.2%) |
| [TAZ](https://taz.de/) | 411 | 388<br>(–5.7%) | ***368<br>(–10.5%)*** | n/a | 380<br>(–7.6%) | 380<br>(–7.5%) | 382<br>(–7.1%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | ***54<br>(–10.5%)*** | 54<br>(–9.8%) | 54<br>(–9.8%) | 54<br>(–10.1%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 188 | 171<br>(–9%) | ***169<br>(–10.5%)*** | 173<br>(–8.3%) | 170<br>(–9.9%) | 170<br>(–9.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 154 | 133<br>(–13.5%) | ***128<br>(–16.6%)*** | 133<br>(–13.6%) | 131<br>(–14.5%) | 130<br>(–15.1%) | 132<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 118 | 163<br>(+37.8%) | ***116<br>(–2.3%)*** | 118<br>(–0.6%) | 117<br>(–1.1%) | 117<br>(–1.1%) | 116<br>(–1.7%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.8%) | ***82<br>(–10.8%)*** | 83<br>(–9.5%) | 82<br>(–9.8%) | 82<br>(–10.5%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 41<br>(–18.8%) | ***40<br>(–20.8%)*** | 41<br>(–19.1%) | 40<br>(–19.5%) | 40<br>(–20.3%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 207 | 192<br>(–7.4%) | ***189<br>(–8.9%)*** | 193<br>(–6.7%) | 192<br>(–7.5%) | 191<br>(–8%) | 194<br>(–6.5%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 34 ms | 43 ms | 853 ms | 41 ms | ***8 ms*** | 196 ms |
| **Average result (KB)** | 374 | 356<br>(–5%) | ***342<br>(–8.7%)*** | 364<br>(–2.8%) | 351<br>(–6.3%) | 350<br>(–6.5%) | 353<br>(–5.8%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.1%) | 53<br>(–14.7%) | 56<br>(–9.9%) | ***39<br>(–37.3%)*** | 55<br>(–11.4%) | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 251 | 238<br>(–5.1%) | ***222<br>(–11.6%)*** | 236<br>(–5.9%) | 226<br>(–10.1%) | 234<br>(–6.8%) | 236<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 651 | 613<br>(–5.8%) | ***600<br>(–7.9%)*** | n/a | 607<br>(–6.7%) | 610<br>(–6.3%) | 646<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.9%) | ***259<br>(–8.3%)*** | 278<br>(–1.7%) | 271<br>(–4%) | 274<br>(–3.2%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 290 | 263<br>(–9.4%) | 248<br>(–14.5%) | 268<br>(–7.7%) | ***216<br>(–25.6%)*** | 262<br>(–9.8%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 170 | 148<br>(–12.7%) | 136<br>(–19.9%) | 149<br>(–12.2%) | ***115<br>(–32.1%)*** | 148<br>(–13%) | 155<br>(–8.5%) |
| [DeepSeek](https://www.deepseek.com/) | 98 | 95<br>(–3.2%) | ***71<br>(–27.4%)*** | 95<br>(–3.4%) | 77<br>(–21.6%) | 95<br>(–3.6%) | 97<br>(–1.2%) |
| [DIN](https://www.din.de/) | 253 | 176<br>(–30.5%) | 164<br>(–35.1%) | 176<br>(–30.3%) | ***136<br>(–46.3%)*** | 175<br>(–30.8%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 545 | 512<br>(–6%) | 502<br>(–7.8%) | n/a | ***497<br>(–8.7%)*** | 505<br>(–7.4%) | 542<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7413 | 7046<br>(–4.9%) | ***6804<br>(–8.2%)*** | n/a | 6920<br>(–6.6%) | 6950<br>(–6.2%) | 6974<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 71<br>(–16%) | 76<br>(–9.6%) | ***55<br>(–34.7%)*** | 75<br>(–11.1%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 48<br>(–10.7%) | ***44<br>(–18.7%)*** | 48<br>(–10%) | 46<br>(–14.3%) | 47<br>(–12.1%) | 49<br>(–9.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–37%) | 33<br>(–33.6%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1525 | 1407<br>(–7.7%) | 1347<br>(–11.7%) | n/a | ***1272<br>(–16.6%)*** | 1461<br>(–4.2%) | 1468<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 129<br>(–24.2%) | 124<br>(–27.2%) | 130<br>(–23.6%) | ***56<br>(–66.9%)*** | 129<br>(–24.6%) | 136<br>(–20.2%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.2%) | 40<br>(–6.6%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 217 | 225<br>(+3.6%) | ***210<br>(–3.3%)*** | 217<br>(–0.2%) | 222<br>(+2.4%) | 217<br>(0%) | 236<br>(+8.5%) |
| [Google](https://www.google.com/) | 82 | 78<br>(–4.5%) | 77<br>(–5.2%) | 81<br>(–0.8%) | ***66<br>(–19.3%)*** | 79<br>(–3.5%) | 81<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1514 | 1424<br>(–6%) | ***1348<br>(–11%)*** | n/a | 1395<br>(–7.9%) | 1424<br>(–6%) | 1500<br>(–0.9%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.8%) | ***31<br>(–61.8%)*** | 34<br>(–58.1%) | 33<br>(–59.9%) | 33<br>(–59.6%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–23.4%) | ***31<br>(–30.1%)*** | 34<br>(–23.9%) | 33<br>(–26.1%) | 33<br>(–25.3%) | 34<br>(–23.3%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | 27<br>(–7.6%) | 28<br>(–5%) | ***25<br>(–14.2%)*** | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 363 | 347<br>(–4.4%) | ***331<br>(–9%)*** | n/a | 338<br>(–7.1%) | 344<br>(–5.2%) | 357<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–46.5%) | 10<br>(–42.7%) | ***9<br>(–46.7%)*** | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 54 | 51<br>(–5.6%) | ***46<br>(–13.9%)*** | 52<br>(–4.1%) | 46<br>(–13.8%) | 50<br>(–7.6%) | 52<br>(–3.9%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 70<br>(–40.3%) | 66<br>(–43.8%) | 71<br>(–38.8%) | ***54<br>(–53.9%)*** | 69<br>(–41.3%) | 71<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 425 | 412<br>(–3.2%) | ***259<br>(–39.2%)*** | n/a | 333<br>(–21.7%) | 416<br>(–2.3%) | 425<br>(+0%) |
| [Mondoweiss](https://mondoweiss.net/) | 354 | 334<br>(–5.7%) | 321<br>(–9.4%) | n/a | ***315<br>(–11.1%)*** | 329<br>(–7.2%) | 341<br>(–3.9%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***32<br>(–31.6%)*** | 37<br>(–22.2%) | 34<br>(–29.4%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 102 | 85<br>(–17.1%) | ***60<br>(–41.8%)*** | 85<br>(–16.6%) | 60<br>(–41.1%) | 85<br>(–17.4%) | 86<br>(–15.6%) |
| [Opera](https://www.opera.com/) | 183 | 130<br>(–29.2%) | 122<br>(–33.4%) | 133<br>(–27.2%) | ***84<br>(–53.9%)*** | 129<br>(–29.7%) | 133<br>(–27.2%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***136<br>(–21.3%)*** | 145<br>(–15.9%) | 137<br>(–20.7%) | 144<br>(–16.9%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19%)*** | 18<br>(–14.3%) | 18<br>(–15.9%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 237 | 225<br>(–5%) | ***212<br>(–10.5%)*** | 227<br>(–4.1%) | 213<br>(–9.9%) | 226<br>(–4.6%) | 235<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 296 | 296<br>(–0.3%) | 293<br>(–1.3%) | n/a | ***279<br>(–5.7%)*** | 294<br>(–0.8%) | 296<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 52 | 38<br>(–26.4%) | ***35<br>(–31.2%)*** | 37<br>(–27.3%) | 36<br>(–29.6%) | 37<br>(–28.4%) | 38<br>(–27.2%) |
| [TAZ](https://taz.de/) | 411 | 370<br>(–10.1%) | ***344<br>(–16.2%)*** | n/a | 361<br>(–12.1%) | 371<br>(–9.6%) | 382<br>(–7.1%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.2%) | ***50<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.3%) | 54<br>(–10.2%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 188 | 145<br>(–23.2%) | 141<br>(–24.9%) | 152<br>(–19.1%) | ***125<br>(–33.4%)*** | 147<br>(–21.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 154 | 129<br>(–16.1%) | 115<br>(–25.4%) | 125<br>(–18.4%) | ***86<br>(–43.9%)*** | 127<br>(–17.5%) | 132<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 118 | 110<br>(–7.3%) | ***103<br>(–13.3%)*** | 117<br>(–1.4%) | 103<br>(–12.9%) | 109<br>(–7.8%) | 116<br>(–1.7%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12%) | 73<br>(–20%) | 81<br>(–11.5%) | ***64<br>(–29.8%)*** | 80<br>(–12.8%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 39<br>(–22.6%) | ***36<br>(–28.9%)*** | 39<br>(–23%) | 36<br>(–27.5%) | 38<br>(–24.2%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 207 | 170<br>(–18%) | 161<br>(–22.5%) | 180<br>(–13.2%) | ***142<br>(–31.4%)*** | 178<br>(–14.2%) | 194<br>(–6.5%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 34 ms | 81 ms | 1303 ms | 156 ms | ***11 ms*** | 199 ms |
| **Average result (KB)** | 374 | 346<br>(–7.7%) | 328<br>(–12.5%) | 362<br>(–3.3%) | ***326<br>(–13%)*** | 344<br>(–8.1%) | 353<br>(–5.8%) |

Benchmarks last updated: Aug 7, 2026
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