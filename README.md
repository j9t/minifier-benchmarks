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
| [A List Apart](https://alistapart.com/) | 64 | 60<br>(–5.7%) | ***58<br>(–8.2%)*** | 59<br>(–7.1%) | 59<br>(–7.6%) | 59<br>(–8%) | 59<br>(–7.1%) |
| [Apple](https://www.apple.com/) | 249 | 236<br>(–5.1%) | ***230<br>(–7.6%)*** | 234<br>(–5.9%) | 233<br>(–6.4%) | 232<br>(–6.7%) | 234<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 676 | 672<br>(–0.7%) | ***666<br>(–1.5%)*** | n/a | 669<br>(–1%) | 668<br>(–1.2%) | 671<br>(–0.8%) |
| [Bun](https://bun.sh/) | 257 | 252<br>(–1.9%) | ***238<br>(–7.6%)*** | 252<br>(–2.2%) | 250<br>(–2.9%) | 247<br>(–3.9%) | 250<br>(–2.9%) |
| [CERN](https://home.cern/) | 290 | 279<br>(–4%) | ***270<br>(–6.8%)*** | 278<br>(–4.2%) | 278<br>(–4.3%) | 277<br>(–4.7%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 175 | 162<br>(–7.2%) | ***159<br>(–8.9%)*** | 161<br>(–8.2%) | 160<br>(–8.6%) | 160<br>(–8.5%) | 161<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 85 | 84<br>(–0.5%) | ***83<br>(–1.8%)*** | 84<br>(–0.9%) | 84<br>(–1.3%) | 84<br>(–1%) | 84<br>(–0.9%) |
| [DIN](https://www.din.de/) | 253 | 182<br>(–28%) | ***176<br>(–30.4%)*** | 183<br>(–27.6%) | 182<br>(–28.1%) | 180<br>(–28.7%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 556 | 553<br>(–0.6%) | ***550<br>(–1%)*** | n/a | 552<br>(–0.8%) | 551<br>(–0.9%) | 553<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7449 | 7085<br>(–4.9%) | ***6842<br>(–8.2%)*** | n/a | 6958<br>(–6.6%) | 6987<br>(–6.2%) | 7011<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.7%) | ***77<br>(–8.2%)*** | 79<br>(–6.6%) | 78<br>(–7.6%) | 78<br>(–7.9%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 48<br>(–8.1%) | ***46<br>(–12.7%)*** | 49<br>(–7.9%) | 47<br>(–10.1%) | 47<br>(–11.3%) | 48<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1588 | 1534<br>(–3.4%) | ***1458<br>(–8.2%)*** | n/a | 1532<br>(–3.5%) | 1529<br>(–3.7%) | 1529<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 136<br>(–20.4%) | ***135<br>(–21.1%)*** | 137<br>(–20.1%) | 136<br>(–20.4%) | 135<br>(–20.9%) | 137<br>(–20.1%) |
| [Front-End Social](https://front-end.social/) | 54 | 52<br>(–4.6%) | ***50<br>(–7.2%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 237<br>(+4.2%) | 228<br>(0%) | ***227<br>(–0.2%)*** | 241<br>(+5.9%) | 228<br>(0%) | 246<br>(+8%) |
| [Google](https://www.google.com/) | 82 | 129<br>(+56.5%) | 82<br>(–0.6%) | 82<br>(–0.3%) | ***82<br>(–0.8%)*** | 82<br>(–0.5%) | 82<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1889 | 1866<br>(–1.2%) | ***1828<br>(–3.2%)*** | n/a | 1871<br>(–1%) | 1867<br>(–1.2%) | 1876<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.8%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 35<br>(–58.3%) | ***32<br>(–60.8%)*** | 35<br>(–57.8%) | 34<br>(–58.9%) | 34<br>(–59.3%) | 35<br>(–58.3%) |
| [Igalia](https://www.igalia.com/) | 43 | 34<br>(–22.1%) | ***31<br>(–28%)*** | 33<br>(–23.2%) | 33<br>(–23.7%) | 33<br>(–24%) | 33<br>(–23.6%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–5.4%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 443 | 438<br>(–1.1%) | ***425<br>(–4.1%)*** | n/a | 438<br>(–1.1%) | 436<br>(–1.7%) | 436<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–30%) | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 64 | 61<br>(–4.9%) | ***59<br>(–7.8%)*** | 61<br>(–4%) | 59<br>(–7.8%) | 59<br>(–7.8%) | 61<br>(–4.1%) |
| [MDN](https://developer.mozilla.org/en-US/) | 115 | 69<br>(–40.3%) | ***66<br>(–42.8%)*** | 70<br>(–38.8%) | 70<br>(–39.3%) | 68<br>(–41.2%) | 70<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 460 | 446<br>(–3%) | ***366<br>(–20.4%)*** | n/a | 458<br>(–0.3%) | 450<br>(–2.2%) | 459<br>(–0.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 352 | 348<br>(–1.1%) | ***333<br>(–5.4%)*** | n/a | 337<br>(–4.3%) | 337<br>(–4.3%) | 338<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***35<br>(–25.8%)*** | 37<br>(–22.2%) | 36<br>(–23.7%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 105 | 87<br>(–17.2%) | ***86<br>(–18.2%)*** | 87<br>(–16.9%) | 88<br>(–16.5%) | 87<br>(–17.7%) | 88<br>(–16.5%) |
| [Opera](https://www.opera.com/) | 184 | 135<br>(–26.5%) | ***132<br>(–28.2%)*** | 135<br>(–26.8%) | 134<br>(–27.1%) | 134<br>(–27.2%) | 134<br>(–27.1%) |
| [OSCE](https://www.osce.org/) | 173 | 146<br>(–16%) | ***143<br>(–17.2%)*** | 146<br>(–15.9%) | 146<br>(–15.7%) | 144<br>(–16.8%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.3%)*** | 18<br>(–13.5%) | 18<br>(–14.5%) | 18<br>(–16.4%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 225 | 222<br>(–1.3%) | ***221<br>(–1.7%)*** | 223<br>(–0.7%) | 223<br>(–1%) | 223<br>(–1%) | 223<br>(–0.8%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 288 | 289<br>(+0.2%) | ***286<br>(–0.6%)*** | 288<br>(–0.1%) | 287<br>(–0.2%) | 287<br>(–0.4%) | 288<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 54 | 40<br>(–26.2%) | ***38<br>(–29.2%)*** | 39<br>(–27.2%) | 39<br>(–27.7%) | 39<br>(–28.1%) | 39<br>(–27.2%) |
| [TAZ](https://taz.de/) | 476 | 448<br>(–5.9%) | ***426<br>(–10.6%)*** | n/a | 440<br>(–7.6%) | 440<br>(–7.6%) | 442<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 63 | 57<br>(–9.8%) | ***57<br>(–10.2%)*** | 57<br>(–9.5%) | 57<br>(–9.6%) | 57<br>(–9.8%) | 57<br>(–9.5%) |
| [TPGi](https://www.tpgi.com/) | 189 | 172<br>(–9%) | ***169<br>(–10.4%)*** | 173<br>(–8.3%) | 170<br>(–9.9%) | 170<br>(–9.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 153 | 133<br>(–13.6%) | ***128<br>(–16.6%)*** | 132<br>(–13.6%) | 131<br>(–14.5%) | 130<br>(–15.1%) | 132<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 112 | 157<br>(+39.9%) | ***110<br>(–2.4%)*** | 111<br>(–0.7%) | 111<br>(–1.2%) | 111<br>(–1.2%) | 111<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.8%) | ***82<br>(–10.8%)*** | 83<br>(–9.5%) | 82<br>(–9.8%) | 82<br>(–10.5%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 41<br>(–18.8%) | ***40<br>(–20.8%)*** | 41<br>(–19.1%) | 40<br>(–19.5%) | 40<br>(–20.3%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 223 | 205<br>(–8.1%) | ***202<br>(–9.5%)*** | 207<br>(–7.5%) | 205<br>(–8.1%) | 204<br>(–8.6%) | 207<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 30 ms | 35 ms | 788 ms | 39 ms | ***9 ms*** | 188 ms |
| **Average result (KB)** | 389 | 370<br>(–4.8%) | ***355<br>(–8.6%)*** | 378<br>(–2.7%) | 365<br>(–6.2%) | 364<br>(–6.3%) | 367<br>(–5.7%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | ***22<br>(–28.4%)*** | 24<br>(–22.9%) | 23<br>(–26.5%) | 23<br>(–25.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.2%) | 42<br>(–33.9%) | 57<br>(–9.9%) | ***39<br>(–38.2%)*** | 56<br>(–11.4%) | 59<br>(–7.1%) |
| [Apple](https://www.apple.com/) | 249 | 236<br>(–5.1%) | ***220<br>(–11.5%)*** | 234<br>(–5.9%) | 224<br>(–9.9%) | 232<br>(–6.7%) | 234<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 676 | 638<br>(–5.7%) | ***624<br>(–7.8%)*** | n/a | 631<br>(–6.6%) | 635<br>(–6.2%) | 671<br>(–0.8%) |
| [Bun](https://bun.sh/) | 257 | 252<br>(–2.1%) | ***233<br>(–9.4%)*** | 252<br>(–2.2%) | 245<br>(–4.8%) | 247<br>(–4.1%) | 250<br>(–2.9%) |
| [CERN](https://home.cern/) | 290 | 263<br>(–9.4%) | 225<br>(–22.5%) | 268<br>(–7.7%) | ***216<br>(–25.7%)*** | 262<br>(–9.8%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 175 | 153<br>(–12.6%) | 136<br>(–22.1%) | 154<br>(–11.8%) | ***120<br>(–31.4%)*** | 153<br>(–12.8%) | 161<br>(–8.1%) |
| [DeepSeek](https://www.deepseek.com/) | 85 | 81<br>(–4.1%) | ***62<br>(–27.2%)*** | 84<br>(–1.4%) | 62<br>(–27%) | 82<br>(–3.8%) | 84<br>(–0.9%) |
| [DIN](https://www.din.de/) | 253 | 176<br>(–30.5%) | ***131<br>(–48.1%)*** | 176<br>(–30.3%) | 136<br>(–46.3%) | 175<br>(–30.8%) | 183<br>(–27.7%) |
| [DLR](https://www.dlr.de/) | 556 | 523<br>(–6%) | 513<br>(–7.8%) | n/a | ***508<br>(–8.6%)*** | 515<br>(–7.3%) | 553<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7449 | 7085<br>(–4.9%) | ***6841<br>(–8.2%)*** | n/a | 6957<br>(–6.6%) | 6987<br>(–6.2%) | 7011<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 56<br>(–33.4%) | 76<br>(–9.6%) | ***55<br>(–34.7%)*** | 75<br>(–11.1%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 47<br>(–11%) | ***43<br>(–18.8%)*** | 47<br>(–10.2%) | 45<br>(–14.2%) | 46<br>(–12.3%) | 48<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–36.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [FAZ](https://www.faz.net/aktuell/) | 1588 | 1466<br>(–7.7%) | 1341<br>(–15.6%) | n/a | ***1330<br>(–16.3%)*** | 1523<br>(–4.1%) | 1529<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 171 | 130<br>(–24.1%) | ***56<br>(–67.3%)*** | 131<br>(–23.5%) | 57<br>(–66.8%) | 129<br>(–24.6%) | 137<br>(–20.1%) |
| [Front-End Social](https://front-end.social/) | 54 | 51<br>(–5.6%) | ***47<br>(–13.9%)*** | 52<br>(–4%) | 47<br>(–13.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 237<br>(+4.2%) | ***221<br>(–3.1%)*** | 227<br>(–0.2%) | 233<br>(+2.3%) | 228<br>(0%) | 246<br>(+8%) |
| [Google](https://www.google.com/) | 82 | 79<br>(–4.6%) | 70<br>(–15.5%) | 82<br>(–0.8%) | ***67<br>(–19.2%)*** | 79<br>(–3.5%) | 82<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1889 | 1770<br>(–6.3%) | ***1698<br>(–10.1%)*** | n/a | 1742<br>(–7.8%) | 1769<br>(–6.3%) | 1876<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.6%) | ***32<br>(–61.6%)*** | 35<br>(–57.9%) | 33<br>(–59.7%) | 34<br>(–59.4%) | 35<br>(–58.3%) |
| [Igalia](https://www.igalia.com/) | 43 | 33<br>(–23.7%) | ***30<br>(–30.3%)*** | 33<br>(–24.2%) | 32<br>(–26.5%) | 32<br>(–25.4%) | 33<br>(–23.6%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | 26<br>(–9%) | 28<br>(–5%) | ***25<br>(–14.2%)*** | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 443 | 422<br>(–4.8%) | ***398<br>(–10.1%)*** | n/a | 412<br>(–7%) | 419<br>(–5.5%) | 436<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.8%)*** | 10<br>(–42.7%) | 9<br>(–46.7%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 64 | 60<br>(–5.7%) | ***55<br>(–13.5%)*** | 61<br>(–4.3%) | 55<br>(–13.4%) | 59<br>(–8.1%) | 61<br>(–4.1%) |
| [MDN](https://developer.mozilla.org/en-US/) | 115 | 69<br>(–40.4%) | 65<br>(–43.9%) | 70<br>(–38.9%) | ***58<br>(–50%)*** | 68<br>(–41.3%) | 70<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 460 | 445<br>(–3.1%) | ***281<br>(–38.8%)*** | n/a | 363<br>(–20.9%) | 449<br>(–2.3%) | 459<br>(–0.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 352 | 332<br>(–5.7%) | ***311<br>(–11.5%)*** | n/a | 312<br>(–11.4%) | 327<br>(–7.2%) | 338<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***33<br>(–31.6%)*** | 37<br>(–22.2%) | 34<br>(–29.4%) | 35<br>(–25.6%) | 37<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 105 | 86<br>(–18%) | ***61<br>(–42%)*** | 87<br>(–17.5%) | 62<br>(–41.3%) | 86<br>(–18.3%) | 88<br>(–16.5%) |
| [Opera](https://www.opera.com/) | 184 | 130<br>(–29.1%) | ***83<br>(–55%)*** | 134<br>(–27.1%) | 85<br>(–53.7%) | 129<br>(–29.6%) | 134<br>(–27.1%) |
| [OSCE](https://www.osce.org/) | 173 | 145<br>(–16%) | ***136<br>(–21.3%)*** | 146<br>(–15.9%) | 137<br>(–20.7%) | 144<br>(–16.9%) | 146<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19%)*** | 18<br>(–14.3%) | 18<br>(–15.9%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 225 | 214<br>(–4.9%) | ***203<br>(–9.9%)*** | 216<br>(–4.2%) | 205<br>(–9.1%) | 215<br>(–4.6%) | 223<br>(–0.8%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 288 | 287<br>(–0.3%) | 273<br>(–5.3%) | 288<br>(–0.1%) | ***270<br>(–6.1%)*** | 285<br>(–0.9%) | 288<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 54 | 40<br>(–26.3%) | ***37<br>(–31.1%)*** | 39<br>(–27.3%) | 38<br>(–29.6%) | 39<br>(–28.3%) | 39<br>(–27.2%) |
| [TAZ](https://taz.de/) | 476 | 430<br>(–9.7%) | ***400<br>(–15.9%)*** | n/a | 421<br>(–11.6%) | 431<br>(–9.4%) | 442<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 63 | 57<br>(–10%) | ***53<br>(–16.4%)*** | 57<br>(–9.6%) | 53<br>(–15.8%) | 57<br>(–10%) | 57<br>(–9.5%) |
| [TPGi](https://www.tpgi.com/) | 189 | 145<br>(–23.2%) | 128<br>(–32.3%) | 153<br>(–19.1%) | ***126<br>(–33.4%)*** | 147<br>(–21.9%) | 173<br>(–8.3%) |
| [United Nations](https://www.un.org/en/) | 153 | 129<br>(–16.1%) | 95<br>(–37.9%) | 125<br>(–18.4%) | ***86<br>(–43.9%)*** | 126<br>(–17.5%) | 132<br>(–13.9%) |
| [UX Collective](https://uxdesign.cc/) | 112 | 105<br>(–6.8%) | ***96<br>(–14.1%)*** | 111<br>(–1.5%) | 98<br>(–12.6%) | 104<br>(–7.1%) | 111<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12%) | ***64<br>(–30.4%)*** | 81<br>(–11.5%) | 64<br>(–29.8%) | 80<br>(–12.8%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 50 | 39<br>(–22.5%) | ***36<br>(–29%)*** | 39<br>(–22.9%) | 36<br>(–27.4%) | 38<br>(–24.1%) | 41<br>(–19%) |
| [WordPress Blog](https://wordpress.com/blog/) | 223 | 183<br>(–18%) | ***154<br>(–31.1%)*** | 193<br>(–13.6%) | 154<br>(–31%) | 191<br>(–14.6%) | 207<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 39/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 34 ms | 64 ms | 1325 ms | 142 ms | ***12 ms*** | 188 ms |
| **Average result (KB)** | 389 | 359<br>(–7.6%) | ***333<br>(–14.3%)*** | 376<br>(–3.2%) | 339<br>(–12.8%) | 357<br>(–8.1%) | 367<br>(–5.7%) |

Benchmarks last updated: Sep 2, 2026
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