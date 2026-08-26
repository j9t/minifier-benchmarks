# Minifier Benchmarks

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)).

Two tests are run: One exclusively applying [HTML minification](#1-html-minification-compared) (with the most aggressive settings that do not impact conformance), the other [enabling all minification features](#2-maximum-minification-compared) the respective minifier offers (this is play—it’s not a fair comparison and may exceed project needs).

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by maximum effectiveness](#2-maximum-minification-compared) (all minification and tree-shaking options enabled), and by the respective processing times
* **🧑‍🏭 Minifier author?** [Add and configure your minifier and become a co-owner](https://github.com/j9t/minifier-benchmarks/compare)
* **💁 Innocent bystander?** [Please share observations and suggestions](https://github.com/j9t/minifier-benchmarks/issues)

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
| [A List Apart](https://alistapart.com/) | 64 | 60<br>(–5.7%) | ***58<br>(–8.2%)*** | 59<br>(–7.1%) | 59<br>(–7.6%) | 59<br>(–8%) | 59<br>(–7.2%) |
| [Apple](https://www.apple.com/) | 249 | 237<br>(–5.1%) | ***231<br>(–7.5%)*** | 235<br>(–5.9%) | 233<br>(–6.4%) | 233<br>(–6.7%) | 234<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 755 | 750<br>(–0.7%) | ***744<br>(–1.4%)*** | n/a | 747<br>(–1%) | 746<br>(–1.2%) | 749<br>(–0.8%) |
| [Bun](https://bun.sh/) | 258 | 253<br>(–1.9%) | ***238<br>(–7.6%)*** | 252<br>(–2.2%) | 250<br>(–3%) | 248<br>(–3.9%) | 250<br>(–2.9%) |
| [CERN](https://home.cern/) | 290 | 278<br>(–4%) | ***270<br>(–6.8%)*** | 278<br>(–4.2%) | 277<br>(–4.3%) | 276<br>(–4.7%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 175 | 162<br>(–7.3%) | ***160<br>(–9%)*** | 161<br>(–8.3%) | 160<br>(–8.7%) | 160<br>(–8.6%) | 161<br>(–8.2%) |
| [DeepSeek](https://www.deepseek.com/) | 85 | 84<br>(–0.5%) | ***83<br>(–1.8%)*** | 84<br>(–0.9%) | 84<br>(–1.3%) | 84<br>(–1%) | 84<br>(–0.9%) |
| [DIN](https://www.din.de/) | 253 | 182<br>(–28%) | ***176<br>(–30.4%)*** | 183<br>(–27.6%) | 182<br>(–28.1%) | 180<br>(–28.7%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 550 | 546<br>(–0.6%) | ***544<br>(–1%)*** | n/a | 545<br>(–0.8%) | 545<br>(–0.9%) | 547<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7416 | 7051<br>(–4.9%) | ***6809<br>(–8.2%)*** | n/a | 6925<br>(–6.6%) | 6954<br>(–6.2%) | 6978<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.7%) | ***77<br>(–8.2%)*** | 79<br>(–6.6%) | 78<br>(–7.6%) | 78<br>(–7.9%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 49<br>(–8%) | ***47<br>(–12.5%)*** | 49<br>(–7.8%) | 48<br>(–10%) | 47<br>(–11.2%) | 48<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33%) | ***33<br>(–33.8%)*** | 33<br>(–32.8%) | 33<br>(–33%) | 33<br>(–33.4%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1583 | 1529<br>(–3.4%) | ***1453<br>(–8.2%)*** | n/a | 1527<br>(–3.5%) | 1524<br>(–3.7%) | 1524<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 136<br>(–20.4%) | ***135<br>(–21.1%)*** | 137<br>(–20.1%) | 136<br>(–20.4%) | 135<br>(–20.9%) | 137<br>(–20.1%) |
| [Front-End Social](https://front-end.social/) | 54 | 52<br>(–4.6%) | ***50<br>(–7.2%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 239<br>(+4.2%) | 229<br>(0%) | ***229<br>(–0.2%)*** | 243<br>(+5.9%) | 229<br>(0%) | 248<br>(+8%) |
| [Google](https://www.google.com/) | 82 | 129<br>(+56.7%) | 82<br>(–0.6%) | 82<br>(–0.3%) | ***81<br>(–0.8%)*** | 82<br>(–0.5%) | 82<br>(–0.3%) |
| [Ground News](https://ground.news/) | 2132 | 2108<br>(–1.1%) | ***2069<br>(–2.9%)*** | n/a | 2112<br>(–0.9%) | 2109<br>(–1.1%) | 2118<br>(–0.6%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.8%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.6%) | ***32<br>(–61.2%)*** | 35<br>(–58.1%) | 34<br>(–59.2%) | 33<br>(–59.6%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 43 | 34<br>(–22.2%) | ***31<br>(–28.1%)*** | 33<br>(–23.3%) | 33<br>(–23.8%) | 33<br>(–24.1%) | 33<br>(–23.7%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–5.4%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 437 | 432<br>(–1.1%) | ***419<br>(–4.2%)*** | n/a | 432<br>(–1.2%) | 430<br>(–1.7%) | 430<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–30%) | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 63 | 60<br>(–4.9%) | ***58<br>(–7.8%)*** | 61<br>(–4%) | 58<br>(–7.8%) | 58<br>(–7.7%) | 61<br>(–4.1%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.2%) | ***68<br>(–42.7%)*** | 73<br>(–38.8%) | 72<br>(–39.5%) | 70<br>(–41.1%) | 72<br>(–39.1%) |
| [Mistral AI](https://mistral.ai/) | 459 | 446<br>(–3%) | ***366<br>(–20.4%)*** | n/a | 458<br>(–0.3%) | 449<br>(–2.2%) | 459<br>(–0.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 353 | 349<br>(–1.1%) | ***334<br>(–5.4%)*** | n/a | 338<br>(–4.3%) | 338<br>(–4.3%) | 339<br>(–3.9%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***35<br>(–25.8%)*** | 37<br>(–22.2%) | 36<br>(–23.7%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 105 | 87<br>(–17.2%) | ***86<br>(–18.2%)*** | 87<br>(–16.9%) | 88<br>(–16.5%) | 87<br>(–17.7%) | 88<br>(–16.5%) |
| [Opera](https://www.opera.com/) | 183 | 134<br>(–26.6%) | ***131<br>(–28.4%)*** | 134<br>(–26.9%) | 133<br>(–27.2%) | 133<br>(–27.3%) | 133<br>(–27.2%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***143<br>(–17.2%)*** | 145<br>(–15.9%) | 146<br>(–15.7%) | 144<br>(–16.8%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.3%)*** | 18<br>(–13.5%) | 18<br>(–14.5%) | 18<br>(–16.4%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 223 | 220<br>(–1.3%) | ***219<br>(–1.7%)*** | 221<br>(–0.7%) | 221<br>(–1%) | 221<br>(–1%) | 221<br>(–0.8%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 285 | 285<br>(+0.2%) | ***283<br>(–0.6%)*** | 285<br>(–0.1%) | 284<br>(–0.2%) | 284<br>(–0.4%) | 285<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 54 | 40<br>(–26.2%) | ***38<br>(–29.2%)*** | 39<br>(–27.1%) | 39<br>(–27.6%) | 39<br>(–28.1%) | 39<br>(–27.1%) |
| [TAZ](https://taz.de/) | 447 | 422<br>(–5.5%) | ***401<br>(–10.2%)*** | n/a | 414<br>(–7.3%) | 414<br>(–7.2%) | 416<br>(–6.9%) |
| [TetraLogical](https://tetralogical.com/) | 61 | 55<br>(–10.1%) | ***54<br>(–10.5%)*** | 55<br>(–9.7%) | 55<br>(–9.8%) | 55<br>(–10%) | 55<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 188 | 172<br>(–9%) | ***169<br>(–10.5%)*** | 173<br>(–8.3%) | 170<br>(–9.9%) | 170<br>(–9.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 154 | 133<br>(–13.5%) | ***129<br>(–16.5%)*** | 133<br>(–13.5%) | 132<br>(–14.5%) | 131<br>(–15%) | 133<br>(–13.8%) |
| [UX Collective](https://uxdesign.cc/) | 111 | 156<br>(+39.9%) | ***109<br>(–2.4%)*** | 111<br>(–0.7%) | 110<br>(–1.2%) | 110<br>(–1.2%) | 110<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.8%) | ***82<br>(–10.8%)*** | 83<br>(–9.5%) | 82<br>(–9.8%) | 82<br>(–10.5%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 41<br>(–18.8%) | ***40<br>(–20.8%)*** | 41<br>(–19.1%) | 40<br>(–19.5%) | 40<br>(–20.3%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 226 | 208<br>(–8%) | ***205<br>(–9.4%)*** | 209<br>(–7.4%) | 208<br>(–8.1%) | 206<br>(–8.5%) | 210<br>(–7.1%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 32 ms | 41 ms | 767 ms | 43 ms | ***9 ms*** | 199 ms |
| **Average result (KB)** | 394 | 375<br>(–4.8%) | ***360<br>(–8.4%)*** | 383<br>(–2.7%) | 370<br>(–6.1%) | 369<br>(–6.2%) | 372<br>(–5.6%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | ***22<br>(–28.4%)*** | 24<br>(–22.9%) | 23<br>(–26.5%) | 23<br>(–25.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.2%) | 42<br>(–33.9%) | 57<br>(–9.9%) | ***39<br>(–38.3%)*** | 56<br>(–11.4%) | 59<br>(–7.2%) |
| [Apple](https://www.apple.com/) | 249 | 237<br>(–5.1%) | ***221<br>(–11.4%)*** | 235<br>(–5.9%) | 224<br>(–10.1%) | 233<br>(–6.7%) | 234<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 755 | 712<br>(–5.6%) | ***697<br>(–7.7%)*** | n/a | 705<br>(–6.6%) | 708<br>(–6.1%) | 749<br>(–0.8%) |
| [Bun](https://bun.sh/) | 258 | 253<br>(–2.1%) | ***234<br>(–9.4%)*** | 252<br>(–2.2%) | 246<br>(–4.8%) | 247<br>(–4.1%) | 250<br>(–2.9%) |
| [CERN](https://home.cern/) | 290 | 263<br>(–9.4%) | 225<br>(–22.5%) | 268<br>(–7.7%) | ***215<br>(–25.7%)*** | 261<br>(–9.8%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 175 | 153<br>(–12.6%) | 136<br>(–22.1%) | 154<br>(–11.8%) | ***120<br>(–31.4%)*** | 153<br>(–12.9%) | 161<br>(–8.2%) |
| [DeepSeek](https://www.deepseek.com/) | 85 | 81<br>(–4.1%) | ***62<br>(–27.2%)*** | 84<br>(–1.4%) | 62<br>(–27%) | 82<br>(–3.8%) | 84<br>(–0.9%) |
| [DIN](https://www.din.de/) | 253 | 176<br>(–30.5%) | ***131<br>(–48.1%)*** | 176<br>(–30.3%) | 136<br>(–46.3%) | 175<br>(–30.8%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 550 | 517<br>(–6%) | 507<br>(–7.8%) | n/a | ***502<br>(–8.6%)*** | 509<br>(–7.3%) | 547<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7416 | 7051<br>(–4.9%) | ***6808<br>(–8.2%)*** | n/a | 6924<br>(–6.6%) | 6954<br>(–6.2%) | 6978<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 56<br>(–33.4%) | 76<br>(–9.6%) | ***55<br>(–34.7%)*** | 75<br>(–11.1%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 48<br>(–10.8%) | ***43<br>(–18.6%)*** | 48<br>(–10.1%) | 46<br>(–14.1%) | 47<br>(–12.2%) | 48<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.1%) | ***31<br>(–37.6%)*** | 33<br>(–32.9%) | 31<br>(–36.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1583 | 1462<br>(–7.6%) | 1336<br>(–15.6%) | n/a | ***1325<br>(–16.3%)*** | 1518<br>(–4.1%) | 1524<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 130<br>(–24.1%) | ***56<br>(–67.3%)*** | 131<br>(–23.5%) | 57<br>(–66.8%) | 129<br>(–24.6%) | 137<br>(–20.1%) |
| [Front-End Social](https://front-end.social/) | 54 | 51<br>(–5.6%) | ***47<br>(–13.9%)*** | 52<br>(–4%) | 47<br>(–13.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 239<br>(+4.2%) | ***222<br>(–3.2%)*** | 229<br>(–0.2%) | 235<br>(+2.3%) | 229<br>(0%) | 248<br>(+8%) |
| [Google](https://www.google.com/) | 82 | 78<br>(–4.6%) | 69<br>(–15.6%) | 81<br>(–0.8%) | ***66<br>(–19.2%)*** | 79<br>(–3.5%) | 82<br>(–0.3%) |
| [Ground News](https://ground.news/) | 2132 | 1991<br>(–6.6%) | ***1917<br>(–10.1%)*** | n/a | 1962<br>(–8%) | 1990<br>(–6.6%) | 2118<br>(–0.6%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.9%) | ***31<br>(–61.9%)*** | 35<br>(–58.3%) | 33<br>(–60%) | 33<br>(–59.7%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 43 | 33<br>(–23.8%) | ***30<br>(–30.3%)*** | 33<br>(–24.3%) | 32<br>(–26.5%) | 32<br>(–25.5%) | 33<br>(–23.7%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | 26<br>(–9%) | 28<br>(–5%) | ***25<br>(–14.2%)*** | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 437 | 416<br>(–4.8%) | ***393<br>(–10.2%)*** | n/a | 406<br>(–7%) | 413<br>(–5.5%) | 430<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.8%)*** | 10<br>(–42.7%) | 9<br>(–46.7%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 63 | 60<br>(–5.7%) | ***55<br>(–13.5%)*** | 60<br>(–4.3%) | 55<br>(–13.5%) | 58<br>(–8.1%) | 61<br>(–4.1%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.3%) | 67<br>(–43.7%) | 73<br>(–38.8%) | ***55<br>(–53.8%)*** | 70<br>(–41.2%) | 72<br>(–39.1%) |
| [Mistral AI](https://mistral.ai/) | 459 | 445<br>(–3.1%) | ***281<br>(–38.8%)*** | n/a | 363<br>(–20.9%) | 449<br>(–2.3%) | 459<br>(–0.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 353 | 333<br>(–5.7%) | ***312<br>(–11.5%)*** | n/a | 313<br>(–11.4%) | 328<br>(–7.2%) | 339<br>(–3.9%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***33<br>(–31.6%)*** | 37<br>(–22.2%) | 34<br>(–29.4%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 105 | 86<br>(–18%) | ***61<br>(–42%)*** | 87<br>(–17.5%) | 62<br>(–41.3%) | 86<br>(–18.3%) | 88<br>(–16.5%) |
| [Opera](https://www.opera.com/) | 183 | 130<br>(–29.3%) | ***82<br>(–55.2%)*** | 133<br>(–27.2%) | 84<br>(–53.9%) | 129<br>(–29.7%) | 133<br>(–27.2%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***136<br>(–21.3%)*** | 145<br>(–15.9%) | 137<br>(–20.7%) | 143<br>(–16.9%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19%)*** | 18<br>(–14.3%) | 18<br>(–15.9%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 223 | 212<br>(–5%) | ***201<br>(–10%)*** | 214<br>(–4.2%) | 202<br>(–9.2%) | 213<br>(–4.7%) | 221<br>(–0.8%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 285 | 284<br>(–0.3%) | 270<br>(–5.3%) | 285<br>(–0.1%) | ***267<br>(–6.1%)*** | 282<br>(–0.9%) | 285<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 54 | 40<br>(–26.3%) | ***37<br>(–31%)*** | 39<br>(–27.2%) | 38<br>(–29.5%) | 39<br>(–28.3%) | 39<br>(–27.1%) |
| [TAZ](https://taz.de/) | 447 | 404<br>(–9.5%) | ***377<br>(–15.6%)*** | n/a | 396<br>(–11.5%) | 406<br>(–9.2%) | 416<br>(–6.9%) |
| [TetraLogical](https://tetralogical.com/) | 61 | 54<br>(–10.3%) | ***50<br>(–16.9%)*** | 55<br>(–9.9%) | 51<br>(–16.3%) | 54<br>(–10.2%) | 55<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 188 | 145<br>(–23.2%) | 128<br>(–32.3%) | 152<br>(–19.1%) | ***125<br>(–33.4%)*** | 147<br>(–21.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 154 | 130<br>(–16%) | 96<br>(–37.6%) | 126<br>(–18.3%) | ***87<br>(–43.6%)*** | 127<br>(–17.4%) | 133<br>(–13.8%) |
| [UX Collective](https://uxdesign.cc/) | 111 | 104<br>(–6.8%) | ***95<br>(–14.2%)*** | 110<br>(–1.5%) | 97<br>(–12.6%) | 103<br>(–7.2%) | 110<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12%) | ***64<br>(–30.4%)*** | 81<br>(–11.5%) | 64<br>(–29.8%) | 80<br>(–12.8%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 39<br>(–22.5%) | ***36<br>(–29%)*** | 39<br>(–22.9%) | 36<br>(–27.4%) | 38<br>(–24.1%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 226 | 185<br>(–17.9%) | 155<br>(–31.2%) | 195<br>(–13.5%) | ***154<br>(–31.6%)*** | 193<br>(–14.6%) | 210<br>(–7.1%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 42 ms | 75 ms | 1274 ms | 157 ms | ***31 ms*** | 192 ms |
| **Average result (KB)** | 394 | 364<br>(–7.6%) | ***338<br>(–14.2%)*** | 381<br>(–3.2%) | 343<br>(–12.8%) | 362<br>(–8.1%) | 372<br>(–5.6%) |

Benchmarks last updated: Aug 26, 2026
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