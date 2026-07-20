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
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–5.8%) | 57<br>(–8.4%) | 58<br>(–7.2%) | 58<br>(–7.7%) | ***57<br>(–8.4%)*** | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 243 | 231<br>(–5.1%) | ***225<br>(–7.6%)*** | 229<br>(–5.8%) | 228<br>(–6.3%) | 227<br>(–6.9%) | 229<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 835 | 830<br>(–0.6%) | ***823<br>(–1.5%)*** | n/a | 826<br>(–1%) | 823<br>(–1.4%) | 828<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.8%) | ***264<br>(–6.8%)*** | 278<br>(–1.7%) | 276<br>(–2.6%) | 273<br>(–3.4%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 301 | 289<br>(–3.8%) | ***281<br>(–6.5%)*** | n/a | 288<br>(–4.2%) | 287<br>(–4.7%) | 288<br>(–4.1%) |
| [CSS-Tricks](https://css-tricks.com/) | 148 | 136<br>(–7.9%) | ***134<br>(–9.8%)*** | 135<br>(–9.1%) | 134<br>(–9.5%) | 134<br>(–9.7%) | 135<br>(–9%) |
| [DeepSeek](https://www.deepseek.com/) | 147 | 146<br>(–0.6%) | ***139<br>(–5.2%)*** | 146<br>(–0.8%) | 145<br>(–1.1%) | 146<br>(–0.9%) | 146<br>(–0.8%) |
| [DIN](https://www.din.de/) | 254 | 183<br>(–28.3%) | ***176<br>(–30.7%)*** | 184<br>(–27.8%) | 182<br>(–28.3%) | 180<br>(–29.1%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 565 | 561<br>(–0.6%) | ***559<br>(–1%)*** | n/a | 560<br>(–0.8%) | 559<br>(–1%) | 562<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7421 | 7054<br>(–4.9%) | ***6813<br>(–8.2%)*** | n/a | 6929<br>(–6.6%) | 6952<br>(–6.3%) | 6983<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.7%) | ***77<br>(–8.2%)*** | 78<br>(–6.6%) | 78<br>(–7.6%) | 77<br>(–8.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 49<br>(–8.1%) | ***46<br>(–12.7%)*** | 49<br>(–7.9%) | 48<br>(–10.1%) | 47<br>(–11.6%) | 48<br>(–9.8%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1579 | 1528<br>(–3.2%) | ***1451<br>(–8.1%)*** | n/a | 1526<br>(–3.3%) | 1519<br>(–3.8%) | 1523<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 175 | 140<br>(–20%) | ***139<br>(–20.7%)*** | 141<br>(–19.7%) | 140<br>(–20%) | 139<br>(–20.6%) | 141<br>(–19.8%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 42<br>(–3.4%) | 40<br>(–6.3%) | 40<br>(–6.4%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 224 | 232<br>(+3.6%) | 224<br>(0%) | ***223<br>(–0.2%)*** | 237<br>(+5.9%) | 224<br>(–0.1%) | 243<br>(+8.3%) |
| [Google](https://www.google.com/) | 80 | 123<br>(+54.7%) | 79<br>(–0.6%) | 79<br>(–0.3%) | ***79<br>(–0.8%)*** | 79<br>(–0.5%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 3480 | 3457<br>(–0.7%) | ***3417<br>(–1.8%)*** | n/a | 3461<br>(–0.5%) | 3455<br>(–0.7%) | 3466<br>(–0.4%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.8%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.4%) | ***32<br>(–61%)*** | 34<br>(–57.9%) | 33<br>(–59%) | 33<br>(–59.5%) | 34<br>(–58.4%) |
| [Igalia](https://www.igalia.com/) | 43 | 34<br>(–21.4%) | ***32<br>(–27.2%)*** | 34<br>(–22.5%) | 33<br>(–23%) | 33<br>(–23.5%) | 33<br>(–22.9%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | ***28<br>(–6.4%)*** | 28<br>(–5%) | 28<br>(–5.4%) | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 348 | 344<br>(–1.1%) | ***337<br>(–3%)*** | n/a | 344<br>(–1.2%) | 341<br>(–1.9%) | 342<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–30%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 41<br>(–3.4%) | 40<br>(–6.4%) | 40<br>(–6.4%) | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.2%) | ***68<br>(–42.7%)*** | 73<br>(–38.8%) | 72<br>(–39.5%) | 69<br>(–41.4%) | 72<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 423 | 410<br>(–3.1%) | ***339<br>(–20%)*** | n/a | 422<br>(–0.3%) | 411<br>(–2.8%) | 423<br>(0%) |
| [Mondoweiss](https://mondoweiss.net/) | 406 | 401<br>(–1.1%) | ***385<br>(–5%)*** | n/a | 390<br>(–3.9%) | 389<br>(–4.1%) | 391<br>(–3.6%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | 35<br>(–25.8%) | 37<br>(–22.2%) | 36<br>(–23.8%) | ***35<br>(–26%)*** | 36<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 103 | 86<br>(–16.3%) | ***85<br>(–17.3%)*** | 86<br>(–15.9%) | 87<br>(–15.5%) | 85<br>(–17%) | 87<br>(–15.5%) |
| [Opera](https://www.opera.com/) | 185 | 135<br>(–26.9%) | ***132<br>(–28.6%)*** | 135<br>(–27.1%) | 134<br>(–27.4%) | 134<br>(–27.7%) | 134<br>(–27.5%) |
| [OSCE](https://www.osce.org/) | 172 | 145<br>(–16%) | 143<br>(–17.2%) | 145<br>(–15.9%) | 145<br>(–15.7%) | ***142<br>(–17.3%)*** | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.4%)*** | 18<br>(–13.6%) | 18<br>(–14.6%) | 17<br>(–16.8%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 242 | 239<br>(–1.3%) | ***238<br>(–1.5%)*** | 240<br>(–0.7%) | 240<br>(–0.9%) | 239<br>(–1.1%) | 240<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 310 | 311<br>(+0.2%) | ***309<br>(–0.5%)*** | n/a | 310<br>(–0.2%) | 309<br>(–0.4%) | 310<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 51 | 38<br>(–26.3%) | ***36<br>(–29.3%)*** | 37<br>(–27.2%) | 37<br>(–27.7%) | 36<br>(–28.4%) | 37<br>(–27.1%) |
| [TAZ](https://taz.de/) | 432 | 407<br>(–5.7%) | ***387<br>(–10.5%)*** | n/a | 398<br>(–7.7%) | 397<br>(–8%) | 400<br>(–7.3%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | ***54<br>(–10.5%)*** | 54<br>(–9.8%) | 54<br>(–9.8%) | 54<br>(–10.3%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 162<br>(–8.5%) | ***160<br>(–9.9%)*** | 162<br>(–8.5%) | 161<br>(–9.3%) | 160<br>(–9.6%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 154 | 133<br>(–13.5%) | ***128<br>(–16.6%)*** | 133<br>(–13.6%) | 131<br>(–14.5%) | 130<br>(–15.1%) | 132<br>(–13.8%) |
| [UX Collective](https://uxdesign.cc/) | 153 | 197<br>(+29%) | 149<br>(–2.2%) | 152<br>(–0.8%) | 151<br>(–1.3%) | 150<br>(–1.4%) | ***149<br>(–2.6%)*** |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.8%) | 82<br>(–10.7%) | 83<br>(–9.5%) | 82<br>(–9.8%) | ***82<br>(–10.8%)*** | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 52 | 42<br>(–18.4%) | ***41<br>(–20.4%)*** | 42<br>(–18.7%) | 42<br>(–19%) | 42<br>(–19.9%) | 42<br>(–18.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 203<br>(–8%) | ***200<br>(–9.5%)*** | 205<br>(–7.5%) | 203<br>(–8.1%) | 202<br>(–8.8%) | 205<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 37/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 30 ms | 39 ms | 771 ms | 39 ms | ***9 ms*** | 197 ms |
| **Average result (KB)** | 424 | 405<br>(–4.5%) | ***391<br>(–7.7%)*** | 414<br>(–2.4%) | 400<br>(–5.6%) | 399<br>(–5.9%) | 402<br>(–5.2%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.1%) | 53<br>(–14.8%) | 56<br>(–10%) | ***39<br>(–37.4%)*** | 55<br>(–11.7%) | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 243 | 231<br>(–5.2%) | ***215<br>(–11.6%)*** | 229<br>(–5.8%) | 219<br>(–10.1%) | 227<br>(–6.9%) | 229<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 835 | 786<br>(–5.8%) | ***769<br>(–7.9%)*** | n/a | 780<br>(–6.5%) | 780<br>(–6.6%) | 828<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.9%) | ***259<br>(–8.3%)*** | 278<br>(–1.7%) | 272<br>(–4%) | 273<br>(–3.4%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 301 | 273<br>(–9.1%) | 259<br>(–14%) | n/a | ***216<br>(–28%)*** | 272<br>(–9.7%) | 288<br>(–4.1%) |
| [CSS-Tricks](https://css-tricks.com/) | 148 | 131<br>(–11.3%) | 119<br>(–19.3%) | 130<br>(–11.9%) | ***103<br>(–30.6%)*** | 129<br>(–12.8%) | 135<br>(–9%) |
| [DeepSeek](https://www.deepseek.com/) | 147 | 141<br>(–4.1%) | ***117<br>(–20.2%)*** | 141<br>(–4%) | 123<br>(–16.3%) | 141<br>(–4.2%) | 146<br>(–0.8%) |
| [DIN](https://www.din.de/) | 254 | 176<br>(–30.8%) | 164<br>(–35.4%) | 177<br>(–30.6%) | ***136<br>(–46.5%)*** | 175<br>(–31.2%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 565 | 530<br>(–6.1%) | 520<br>(–7.8%) | n/a | ***516<br>(–8.7%)*** | 523<br>(–7.5%) | 562<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7421 | 7054<br>(–4.9%) | ***6812<br>(–8.2%)*** | n/a | 6928<br>(–6.6%) | 6952<br>(–6.3%) | 6983<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 71<br>(–16%) | 76<br>(–9.6%) | ***55<br>(–34.7%)*** | 74<br>(–11.3%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 47<br>(–10.9%) | ***43<br>(–18.9%)*** | 48<br>(–10.2%) | 45<br>(–14.4%) | 46<br>(–12.6%) | 48<br>(–9.8%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–37%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1579 | 1458<br>(–7.7%) | 1396<br>(–11.5%) | n/a | ***1326<br>(–16%)*** | 1511<br>(–4.2%) | 1523<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 175 | 134<br>(–23.7%) | 129<br>(–26.6%) | 135<br>(–23.1%) | ***59<br>(–66.6%)*** | 133<br>(–24.2%) | 141<br>(–19.8%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.2%) | 40<br>(–6.7%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 224 | 232<br>(+3.6%) | ***217<br>(–3.3%)*** | 223<br>(–0.2%) | 229<br>(+2.3%) | 224<br>(–0.1%) | 243<br>(+8.3%) |
| [Google](https://www.google.com/) | 80 | 76<br>(–4.6%) | 75<br>(–5.3%) | 79<br>(–0.8%) | ***64<br>(–19.7%)*** | 77<br>(–3.6%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 3480 | 3242<br>(–6.8%) | ***3167<br>(–9%)*** | n/a | 3207<br>(–7.8%) | 3232<br>(–7.1%) | 3466<br>(–0.4%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.6%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.7%) | ***31<br>(–61.8%)*** | 34<br>(–58.1%) | 33<br>(–59.8%) | 33<br>(–59.7%) | 34<br>(–58.4%) |
| [Igalia](https://www.igalia.com/) | 43 | 33<br>(–23%) | ***31<br>(–29.6%)*** | 33<br>(–23.5%) | 32<br>(–25.6%) | 33<br>(–25%) | 33<br>(–22.9%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | 27<br>(–7.7%) | 28<br>(–5%) | ***25<br>(–14.1%)*** | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 348 | 334<br>(–3.9%) | ***318<br>(–8.6%)*** | n/a | 325<br>(–6.6%) | 331<br>(–4.8%) | 342<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–46.5%) | 10<br>(–42.7%) | ***9<br>(–46.7%)*** | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.3%) | 40<br>(–6.7%) | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.3%) | 67<br>(–43.8%) | 72<br>(–38.9%) | ***55<br>(–53.7%)*** | 69<br>(–41.5%) | 72<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 423 | 410<br>(–3.2%) | ***258<br>(–39.1%)*** | n/a | 332<br>(–21.6%) | 411<br>(–2.9%) | 423<br>(0%) |
| [Mondoweiss](https://mondoweiss.net/) | 406 | 383<br>(–5.5%) | 369<br>(–8.9%) | n/a | ***363<br>(–10.6%)*** | 378<br>(–6.8%) | 391<br>(–3.6%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***32<br>(–31.6%)*** | 37<br>(–22.2%) | 33<br>(–29.4%) | 35<br>(–26%) | 36<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 103 | 85<br>(–17%) | ***60<br>(–41.7%)*** | 86<br>(–16.6%) | 61<br>(–41%) | 85<br>(–17.6%) | 87<br>(–15.5%) |
| [Opera](https://www.opera.com/) | 185 | 131<br>(–29.5%) | 123<br>(–33.7%) | 135<br>(–27.3%) | ***85<br>(–54%)*** | 130<br>(–30.1%) | 134<br>(–27.5%) |
| [OSCE](https://www.osce.org/) | 172 | 144<br>(–16%) | ***135<br>(–21.3%)*** | 145<br>(–15.9%) | 137<br>(–20.7%) | 142<br>(–17.4%) | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19.1%)*** | 18<br>(–14.4%) | 18<br>(–16%) | 17<br>(–17.6%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 242 | 230<br>(–5%) | ***216<br>(–10.6%)*** | 232<br>(–4.2%) | 218<br>(–10%) | 230<br>(–4.9%) | 240<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 310 | 309<br>(–0.3%) | 306<br>(–1.2%) | n/a | ***293<br>(–5.4%)*** | 308<br>(–0.8%) | 310<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 51 | 37<br>(–26.4%) | ***35<br>(–31.1%)*** | 37<br>(–27.3%) | 36<br>(–29.6%) | 36<br>(–28.6%) | 37<br>(–27.1%) |
| [TAZ](https://taz.de/) | 432 | 387<br>(–10.3%) | ***361<br>(–16.4%)*** | n/a | 378<br>(–12.4%) | 387<br>(–10.3%) | 400<br>(–7.3%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.3%) | ***50<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.4%) | 54<br>(–10.5%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 136<br>(–23.4%) | 133<br>(–25.1%) | 142<br>(–20%) | ***117<br>(–34.2%)*** | 138<br>(–22.3%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 154 | 129<br>(–16%) | 115<br>(–25.3%) | 125<br>(–18.4%) | ***86<br>(–43.8%)*** | 127<br>(–17.5%) | 132<br>(–13.8%) |
| [UX Collective](https://uxdesign.cc/) | 153 | 143<br>(–6.5%) | ***130<br>(–15.2%)*** | 151<br>(–1.4%) | 130<br>(–14.9%) | 141<br>(–7.7%) | 149<br>(–2.6%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12%) | 73<br>(–20%) | 81<br>(–11.5%) | ***64<br>(–29.8%)*** | 79<br>(–13.1%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 52 | 41<br>(–22%) | ***37<br>(–28.3%)*** | 40<br>(–22.4%) | 38<br>(–26.9%) | 40<br>(–23.6%) | 42<br>(–18.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 182<br>(–17.9%) | 171<br>(–22.7%) | 191<br>(–13.6%) | ***153<br>(–30.9%)*** | 189<br>(–14.7%) | 205<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 37/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 35 ms | 61 ms | 1322 ms | 153 ms | ***10 ms*** | 192 ms |
| **Average result (KB)** | 424 | 392<br>(–7.6%) | 373<br>(–11.9%) | 412<br>(–2.9%) | ***371<br>(–12.4%)*** | 389<br>(–8.1%) | 402<br>(–5.2%) |

Benchmarks last updated: Jul 20, 2026
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