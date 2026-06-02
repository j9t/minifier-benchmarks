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
| [A List Apart](https://alistapart.com/) | 63 | 60<br>(–5.7%) | 58<br>(–8.3%) | 59<br>(–7.2%) | 58<br>(–7.6%) | ***58<br>(–8.3%)*** | 59<br>(–7.2%) |
| [Apple](https://www.apple.com/) | 253 | 240<br>(–5%) | ***234<br>(–7.6%)*** | 239<br>(–5.7%) | 237<br>(–6.2%) | 236<br>(–6.8%) | 238<br>(–5.9%) |
| [BBC](https://www.bbc.co.uk/) | 702 | 697<br>(–0.7%) | ***691<br>(–1.5%)*** | n/a | 695<br>(–1%) | 692<br>(–1.4%) | 696<br>(–0.9%) |
| [Bun](https://bun.sh/) | 461 | 451<br>(–2.2%) | ***441<br>(–4.2%)*** | n/a | 454<br>(–1.5%) | 452<br>(–2%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 286 | 274<br>(–3.9%) | ***267<br>(–6.7%)*** | 274<br>(–4.2%) | 273<br>(–4.3%) | 272<br>(–4.7%) | 274<br>(–4.2%) |
| [CSS-Tricks](https://css-tricks.com/) | 166 | 154<br>(–7.2%) | ***152<br>(–8.8%)*** | 153<br>(–8.1%) | 152<br>(–8.5%) | 152<br>(–8.7%) | 153<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 105 | 104<br>(–0.7%) | ***98<br>(–7.1%)*** | 104<br>(–1.1%) | 104<br>(–1.4%) | 104<br>(–1.2%) | 104<br>(–1.1%) |
| [DIN](https://www.din.de/) | 253 | 182<br>(–28.2%) | ***175<br>(–30.6%)*** | 183<br>(–27.7%) | 182<br>(–28%) | 179<br>(–29%) | 182<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 541 | 538<br>(–0.6%) | ***535<br>(–1%)*** | n/a | 537<br>(–0.8%) | 536<br>(–1%) | 538<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7236 | 6879<br>(–4.9%) | ***6645<br>(–8.2%)*** | n/a | 6757<br>(–6.6%) | 6779<br>(–6.3%) | 6809<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 77<br>(–7.6%) | ***77<br>(–8.2%)*** | 78<br>(–6.6%) | 77<br>(–7.5%) | 77<br>(–8.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 50<br>(–8%) | ***47<br>(–12.9%)*** | 50<br>(–7.8%) | 48<br>(–10%) | 48<br>(–11.5%) | 49<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1469 | 1422<br>(–3.2%) | ***1350<br>(–8.1%)*** | n/a | 1420<br>(–3.3%) | 1414<br>(–3.7%) | 1417<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 167 | 136<br>(–18.6%) | ***135<br>(–19.2%)*** | 136<br>(–18.3%) | 136<br>(–18.5%) | 135<br>(–19.1%) | 136<br>(–18.4%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | 34<br>(–5.6%) | 35<br>(–3.1%) | 34<br>(–5.5%) | ***34<br>(–5.6%)*** | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.6%) | 223<br>(0%) | ***223<br>(–0.2%)*** | 236<br>(+5.9%) | 223<br>(0%) | 242<br>(+8.3%) |
| [Google](https://www.google.com/) | 79 | 122<br>(+54.6%) | 78<br>(–0.6%) | 79<br>(–0.3%) | ***78<br>(–0.8%)*** | 78<br>(–0.6%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1943 | 1918<br>(–1.3%) | ***1879<br>(–3.3%)*** | n/a | 1925<br>(–0.9%) | 1917<br>(–1.3%) | 1929<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.9%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.6%) | ***32<br>(–61.2%)*** | 35<br>(–58.1%) | 34<br>(–59.2%) | 34<br>(–59.7%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 43 | 34<br>(–21.6%) | ***31<br>(–27.5%)*** | 33<br>(–22.7%) | 33<br>(–23.1%) | 33<br>(–23.7%) | 33<br>(–23.1%) |
| [Ladybird](https://ladybird.org/) | 30 | 29<br>(–3.9%) | ***28<br>(–6.5%)*** | 28<br>(–5.1%) | 28<br>(–5.5%) | 28<br>(–5.7%) | 28<br>(–5.1%) |
| [Leanpub](https://leanpub.com/) | 290 | 287<br>(–1.1%) | ***281<br>(–3.2%)*** | 287<br>(–1%) | 287<br>(–1.3%) | 285<br>(–1.9%) | 285<br>(–1.8%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–29.7%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 31 | 30<br>(–3.2%) | ***29<br>(–4.7%)*** | 30<br>(–2.7%) | 29<br>(–4.6%) | 29<br>(–4.6%) | 30<br>(–2.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 71<br>(–39.3%) | ***68<br>(–41.9%)*** | 73<br>(–37.9%) | 72<br>(–38.1%) | 69<br>(–40.6%) | 72<br>(–38.3%) |
| [Mistral AI](https://mistral.ai/) | 348 | 333<br>(–4.3%) | ***329<br>(–5.7%)*** | n/a | 345<br>(–0.9%) | 336<br>(–3.7%) | 345<br>(–0.9%) |
| [Mondoweiss](https://mondoweiss.net/) | 460 | 450<br>(–2%) | ***431<br>(–6.2%)*** | n/a | 439<br>(–4.6%) | 437<br>(–4.9%) | 440<br>(–4.3%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21.1%) | 35<br>(–26%) | 37<br>(–22.3%) | 36<br>(–23.9%) | ***35<br>(–26.2%)*** | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 100 | 84<br>(–16.3%) | ***83<br>(–17.3%)*** | 84<br>(–16%) | 84<br>(–15.5%) | 83<br>(–17%) | 84<br>(–15.6%) |
| [Opera](https://www.opera.com/) | 184 | 132<br>(–28.1%) | ***129<br>(–29.9%)*** | 132<br>(–28.3%) | 131<br>(–28.6%) | 131<br>(–28.9%) | 131<br>(–28.7%) |
| [OSCE](https://www.osce.org/) | 177 | 149<br>(–15.8%) | 146<br>(–17.1%) | 149<br>(–15.8%) | 149<br>(–15.6%) | ***146<br>(–17.1%)*** | 149<br>(–15.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.4%)*** | 18<br>(–13.6%) | 18<br>(–14.4%) | 17<br>(–16.8%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 262 | 259<br>(–1.3%) | ***258<br>(–1.5%)*** | 260<br>(–0.7%) | 260<br>(–0.9%) | 259<br>(–1.1%) | 260<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 285 | 286<br>(+0.2%) | ***284<br>(–0.6%)*** | 285<br>(–0.1%) | 285<br>(–0.2%) | 284<br>(–0.4%) | 285<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 45 | 33<br>(–26.3%) | ***32<br>(–29.3%)*** | 33<br>(–26.8%) | 33<br>(–27.2%) | 33<br>(–28.2%) | 33<br>(–26.5%) |
| [TAZ](https://taz.de/) | 451 | 426<br>(–5.6%) | ***404<br>(–10.3%)*** | n/a | 416<br>(–7.6%) | 415<br>(–7.8%) | 418<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10%) | ***54<br>(–10.4%)*** | 55<br>(–9.7%) | 55<br>(–9.7%) | 54<br>(–10.2%) | 55<br>(–9.7%) |
| [TPGi](https://www.tpgi.com/) | 180 | 166<br>(–8.2%) | ***163<br>(–9.7%)*** | 166<br>(–8.3%) | 164<br>(–9.2%) | 163<br>(–9.4%) | 165<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 152 | 132<br>(–13.6%) | ***127<br>(–16.7%)*** | 131<br>(–13.7%) | 130<br>(–14.5%) | 129<br>(–15.2%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 98 | 141<br>(+43.2%) | ***96<br>(–2.5%)*** | 98<br>(–0.7%) | 97<br>(–1.1%) | 97<br>(–1.4%) | 97<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 85<br>(–8.5%) | 84<br>(–10.4%) | 85<br>(–9.2%) | 84<br>(–9.5%) | ***84<br>(–10.5%)*** | 85<br>(–9.1%) |
| [W3C](https://www.w3.org/) | 51 | 41<br>(–18.7%) | ***40<br>(–20.8%)*** | 41<br>(–19.1%) | 41<br>(–19.4%) | 40<br>(–20.3%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 207 | 191<br>(–7.4%) | ***188<br>(–9%)*** | 193<br>(–6.8%) | 191<br>(–7.4%) | 190<br>(–8.3%) | 193<br>(–6.6%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 30 ms | 42 ms | 795 ms | 37 ms | ***9 ms*** | 190 ms |
| **Average result (KB)** | 382 | 364<br>(–4.9%) | ***351<br>(–8.1%)*** | 372<br>(–2.7%) | 359<br>(–6.1%) | 358<br>(–6.4%) | 361<br>(–5.6%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.1%) | 54<br>(–14.7%) | 57<br>(–9.9%) | ***40<br>(–37.1%)*** | 56<br>(–11.7%) | 59<br>(–7.2%) |
| [Apple](https://www.apple.com/) | 253 | 240<br>(–5.3%) | ***224<br>(–11.6%)*** | 238<br>(–5.9%) | 228<br>(–9.8%) | 236<br>(–6.9%) | 238<br>(–5.9%) |
| [BBC](https://www.bbc.co.uk/) | 702 | 660<br>(–5.9%) | ***645<br>(–8.1%)*** | n/a | 655<br>(–6.7%) | 655<br>(–6.7%) | 696<br>(–0.9%) |
| [Bun](https://bun.sh/) | 461 | 435<br>(–5.7%) | 420<br>(–8.8%) | n/a | ***374<br>(–18.9%)*** | 436<br>(–5.3%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 286 | 259<br>(–9.2%) | 245<br>(–14.2%) | 264<br>(–7.7%) | ***207<br>(–27.5%)*** | 258<br>(–9.7%) | 274<br>(–4.2%) |
| [CSS-Tricks](https://css-tricks.com/) | 166 | 145<br>(–13.1%) | 133<br>(–20.1%) | 146<br>(–12.3%) | ***112<br>(–32.8%)*** | 144<br>(–13.4%) | 153<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 105 | 100<br>(–5.1%) | ***84<br>(–19.9%)*** | 100<br>(–5.1%) | 90<br>(–14.4%) | 99<br>(–5.4%) | 104<br>(–1.1%) |
| [DIN](https://www.din.de/) | 253 | 175<br>(–30.8%) | 163<br>(–35.3%) | 176<br>(–30.5%) | ***136<br>(–46.4%)*** | 174<br>(–31.2%) | 182<br>(–27.8%) |
| [DLR](https://www.dlr.de/) | 541 | 508<br>(–6%) | 499<br>(–7.8%) | n/a | ***494<br>(–8.7%)*** | 501<br>(–7.4%) | 538<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7236 | 6879<br>(–4.9%) | ***6644<br>(–8.2%)*** | n/a | 6756<br>(–6.6%) | 6779<br>(–6.3%) | 6809<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 74<br>(–11.1%) | 70<br>(–15.9%) | 76<br>(–9.5%) | ***55<br>(–34.7%)*** | 74<br>(–11.3%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 48<br>(–10.8%) | ***44<br>(–18.9%)*** | 48<br>(–10%) | 46<br>(–14.1%) | 47<br>(–12.5%) | 49<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–37%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1469 | 1357<br>(–7.6%) | 1299<br>(–11.6%) | n/a | ***1224<br>(–16.7%)*** | 1407<br>(–4.2%) | 1417<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 167 | 130<br>(–22.4%) | 125<br>(–25.3%) | 131<br>(–21.9%) | ***55<br>(–67.4%)*** | 129<br>(–22.9%) | 136<br>(–18.4%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | ***31<br>(–13.9%)*** | 35<br>(–3.1%) | 31<br>(–13.8%) | 34<br>(–5.6%) | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.6%) | ***216<br>(–3.3%)*** | 223<br>(–0.2%) | 228<br>(+2.1%) | 223<br>(0%) | 242<br>(+8.3%) |
| [Google](https://www.google.com/) | 79 | 75<br>(–4.7%) | 75<br>(–5.4%) | 78<br>(–0.8%) | ***63<br>(–19.8%)*** | 76<br>(–3.6%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1943 | 1819<br>(–6.4%) | ***1741<br>(–10.4%)*** | n/a | 1789<br>(–7.9%) | 1817<br>(–6.5%) | 1929<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.7%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.9%) | ***32<br>(–61.9%)*** | 35<br>(–58.3%) | 33<br>(–60%) | 33<br>(–59.9%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 43 | 33<br>(–23.1%) | ***30<br>(–29.9%)*** | 33<br>(–23.7%) | 32<br>(–25.9%) | 32<br>(–25.3%) | 33<br>(–23.1%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | 27<br>(–7.7%) | 28<br>(–5.1%) | ***25<br>(–14.2%)*** | 28<br>(–5.8%) | 28<br>(–5.1%) |
| [Leanpub](https://leanpub.com/) | 290 | 276<br>(–4.9%) | ***261<br>(–10.1%)*** | 287<br>(–1.1%) | 267<br>(–8.1%) | 273<br>(–5.8%) | 285<br>(–1.8%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.5%)*** | 10<br>(–42.7%) | 9<br>(–46.5%) | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 31 | 29<br>(–4.7%) | ***26<br>(–15.6%)*** | 30<br>(–3.1%) | 26<br>(–15.5%) | 29<br>(–5.1%) | 30<br>(–2.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 71<br>(–39.4%) | 67<br>(–43%) | 72<br>(–38%) | ***55<br>(–53%)*** | 69<br>(–40.6%) | 72<br>(–38.3%) |
| [Mistral AI](https://mistral.ai/) | 348 | 333<br>(–4.4%) | ***253<br>(–27.5%)*** | n/a | 258<br>(–26%) | 335<br>(–3.8%) | 345<br>(–0.9%) |
| [Mondoweiss](https://mondoweiss.net/) | 460 | 432<br>(–5.9%) | 412<br>(–10.4%) | n/a | ***407<br>(–11.5%)*** | 426<br>(–7.3%) | 440<br>(–4.3%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21.1%) | ***32<br>(–31.8%)*** | 37<br>(–22.3%) | 33<br>(–29.6%) | 35<br>(–26.2%) | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 100 | 83<br>(–17%) | ***59<br>(–41.4%)*** | 83<br>(–16.6%) | 59<br>(–40.6%) | 82<br>(–17.6%) | 84<br>(–15.6%) |
| [Opera](https://www.opera.com/) | 184 | 127<br>(–30.7%) | 120<br>(–34.9%) | 131<br>(–28.6%) | ***83<br>(–55.1%)*** | 126<br>(–31.3%) | 131<br>(–28.7%) |
| [OSCE](https://www.osce.org/) | 177 | 149<br>(–15.9%) | ***139<br>(–21.1%)*** | 149<br>(–15.8%) | 141<br>(–20.5%) | 146<br>(–17.3%) | 149<br>(–15.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19.1%)*** | 18<br>(–14.4%) | 18<br>(–15.8%) | 17<br>(–17.6%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 262 | 249<br>(–4.8%) | ***232<br>(–11.4%)*** | 259<br>(–0.9%) | 233<br>(–10.9%) | 250<br>(–4.6%) | 260<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 285 | 284<br>(–0.3%) | 281<br>(–1.3%) | 285<br>(–0.1%) | ***271<br>(–4.9%)*** | 283<br>(–0.9%) | 285<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 45 | 33<br>(–26.4%) | ***31<br>(–30.9%)*** | 33<br>(–26.9%) | 32<br>(–29%) | 33<br>(–28.4%) | 33<br>(–26.5%) |
| [TAZ](https://taz.de/) | 451 | 405<br>(–10.1%) | ***378<br>(–16.2%)*** | n/a | 395<br>(–12.3%) | 405<br>(–10.2%) | 418<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.2%) | ***50<br>(–16.8%)*** | 55<br>(–9.8%) | 51<br>(–16.2%) | 54<br>(–10.4%) | 55<br>(–9.7%) |
| [TPGi](https://www.tpgi.com/) | 180 | 135<br>(–24.9%) | 132<br>(–26.6%) | 142<br>(–21.6%) | ***117<br>(–35.4%)*** | 141<br>(–21.9%) | 165<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 152 | 128<br>(–16.1%) | 113<br>(–25.5%) | 124<br>(–18.5%) | ***85<br>(–44%)*** | 125<br>(–17.7%) | 131<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 98 | 90<br>(–8.1%) | ***88<br>(–10.4%)*** | 92<br>(–6.2%) | 89<br>(–9.8%) | 90<br>(–8.7%) | 97<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 82<br>(–11.8%) | 75<br>(–19.7%) | 83<br>(–11%) | ***70<br>(–24.8%)*** | 82<br>(–12.4%) | 85<br>(–9.1%) |
| [W3C](https://www.w3.org/) | 51 | 39<br>(–22.5%) | ***36<br>(–28.8%)*** | 39<br>(–22.9%) | 37<br>(–27.4%) | 38<br>(–24.2%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 207 | 170<br>(–17.9%) | 160<br>(–22.5%) | 179<br>(–13.2%) | ***141<br>(–31.6%)*** | 177<br>(–14.4%) | 193<br>(–6.6%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 35 ms | 68 ms | 1333 ms | 159 ms | ***11 ms*** | 191 ms |
| **Average result (KB)** | 382 | 353<br>(–7.7%) | 336<br>(–12.1%) | 370<br>(–3.2%) | ***332<br>(–13.2%)*** | 350<br>(–8.3%) | 361<br>(–5.6%) |

Benchmarks last updated: Jun 2, 2026
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