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
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–5.8%) | ***57<br>(–8.4%)*** | 58<br>(–7.2%) | 58<br>(–7.7%) | 57<br>(–8.2%) | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 244 | 231<br>(–5.1%) | ***225<br>(–7.5%)*** | 229<br>(–5.9%) | 228<br>(–6.3%) | 227<br>(–6.6%) | 229<br>(–6%) |
| [BBC](https://www.bbc.co.uk/) | 676 | 671<br>(–0.7%) | ***666<br>(–1.5%)*** | n/a | 669<br>(–1.1%) | 668<br>(–1.2%) | 671<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.8%) | ***264<br>(–6.8%)*** | 278<br>(–1.7%) | 275<br>(–2.6%) | 274<br>(–3.1%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 290 | 279<br>(–4%) | ***271<br>(–6.8%)*** | 278<br>(–4.2%) | 278<br>(–4.3%) | 277<br>(–4.7%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 148 | 136<br>(–8%) | ***133<br>(–9.8%)*** | 134<br>(–9.1%) | 134<br>(–9.5%) | 134<br>(–9.4%) | 135<br>(–9%) |
| [DeepSeek](https://www.deepseek.com/) | 98 | 97<br>(–0.8%) | ***91<br>(–7.5%)*** | 97<br>(–1.2%) | 97<br>(–1.5%) | 97<br>(–1.3%) | 97<br>(–1.2%) |
| [DIN](https://www.din.de/) | 254 | 183<br>(–28.3%) | ***176<br>(–30.7%)*** | 184<br>(–27.8%) | 182<br>(–28.3%) | 181<br>(–29%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 544 | 541<br>(–0.6%) | ***539<br>(–1%)*** | n/a | 540<br>(–0.8%) | 539<br>(–0.9%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7421 | 7054<br>(–4.9%) | ***6813<br>(–8.2%)*** | n/a | 6929<br>(–6.6%) | 6958<br>(–6.2%) | 6983<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.7%) | ***77<br>(–8.2%)*** | 78<br>(–6.6%) | 78<br>(–7.6%) | 77<br>(–7.9%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 49<br>(–8%) | ***47<br>(–12.5%)*** | 49<br>(–7.8%) | 48<br>(–10%) | 47<br>(–11.2%) | 48<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.5%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1606 | 1555<br>(–3.2%) | ***1477<br>(–8%)*** | n/a | 1553<br>(–3.3%) | 1550<br>(–3.5%) | 1549<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 174 | 139<br>(–19.9%) | ***138<br>(–20.6%)*** | 140<br>(–19.6%) | 139<br>(–19.9%) | 138<br>(–20.4%) | 140<br>(–19.7%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 42<br>(–3.4%) | 40<br>(–6.3%) | 40<br>(–6.3%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 222 | 229<br>(+3.6%) | 222<br>(0%) | ***221<br>(–0.2%)*** | 235<br>(+6%) | 221<br>(0%) | 240<br>(+8.4%) |
| [Google](https://www.google.com/) | 80 | 123<br>(+54.8%) | 79<br>(–0.6%) | 79<br>(–0.3%) | ***79<br>(–0.8%)*** | 79<br>(–0.5%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 2488 | 2465<br>(–0.9%) | ***2425<br>(–2.5%)*** | n/a | 2469<br>(–0.8%) | 2465<br>(–0.9%) | 2474<br>(–0.5%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.8%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.4%) | ***32<br>(–61%)*** | 34<br>(–57.9%) | 34<br>(–59%) | 33<br>(–59.4%) | 34<br>(–58.4%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–21.9%) | ***32<br>(–27.7%)*** | 34<br>(–23%) | 34<br>(–23.4%) | 34<br>(–23.7%) | 34<br>(–23.3%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | ***28<br>(–6.4%)*** | 28<br>(–5%) | 28<br>(–5.4%) | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 360 | 356<br>(–1.1%) | ***349<br>(–3%)*** | n/a | 355<br>(–1.2%) | 353<br>(–1.8%) | 354<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–30%) | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 41<br>(–3.4%) | 40<br>(–6.4%) | 40<br>(–6.3%) | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 118 | 70<br>(–40.2%) | ***67<br>(–42.7%)*** | 72<br>(–38.8%) | 71<br>(–39.5%) | 69<br>(–41.2%) | 71<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 425 | 411<br>(–3.2%) | ***340<br>(–20%)*** | n/a | 423<br>(–0.3%) | 415<br>(–2.2%) | 425<br>(0%) |
| [Mondoweiss](https://mondoweiss.net/) | 403 | 399<br>(–1%) | ***383<br>(–5%)*** | n/a | 387<br>(–3.9%) | 387<br>(–3.9%) | 388<br>(–3.6%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***35<br>(–25.8%)*** | 37<br>(–22.2%) | 36<br>(–23.7%) | 35<br>(–25.6%) | 36<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 103 | 86<br>(–16.3%) | ***85<br>(–17.3%)*** | 86<br>(–15.9%) | 87<br>(–15.5%) | 85<br>(–16.8%) | 87<br>(–15.5%) |
| [Opera](https://www.opera.com/) | 185 | 135<br>(–26.9%) | ***132<br>(–28.7%)*** | 135<br>(–27.1%) | 134<br>(–27.4%) | 134<br>(–27.6%) | 134<br>(–27.6%) |
| [OSCE](https://www.osce.org/) | 171 | 143<br>(–16.1%) | ***141<br>(–17.3%)*** | 144<br>(–16%) | 144<br>(–15.8%) | 142<br>(–16.9%) | 144<br>(–15.8%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.4%)*** | 18<br>(–13.7%) | 18<br>(–14.6%) | 18<br>(–16.5%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 241 | 237<br>(–1.3%) | ***237<br>(–1.5%)*** | 239<br>(–0.7%) | 238<br>(–0.9%) | 238<br>(–0.9%) | 239<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 313 | 313<br>(+0.2%) | ***311<br>(–0.5%)*** | n/a | 312<br>(–0.2%) | 312<br>(–0.4%) | 313<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 51 | 38<br>(–26.3%) | ***36<br>(–29.3%)*** | 37<br>(–27.2%) | 37<br>(–27.7%) | 37<br>(–28.2%) | 37<br>(–27.1%) |
| [TAZ](https://taz.de/) | 415 | 392<br>(–5.6%) | ***372<br>(–10.3%)*** | n/a | 383<br>(–7.7%) | 384<br>(–7.5%) | 385<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | ***54<br>(–10.5%)*** | 54<br>(–9.8%) | 54<br>(–9.8%) | 54<br>(–10.1%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 162<br>(–8.5%) | ***160<br>(–9.9%)*** | 162<br>(–8.4%) | 161<br>(–9.3%) | 161<br>(–9.4%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 152 | 132<br>(–13.7%) | ***127<br>(–16.7%)*** | 131<br>(–13.7%) | 130<br>(–14.6%) | 129<br>(–15.2%) | 131<br>(–14%) |
| [UX Collective](https://uxdesign.cc/) | 156 | 201<br>(+29%) | 152<br>(–2.2%) | 154<br>(–0.7%) | 154<br>(–1.3%) | 154<br>(–1.3%) | ***151<br>(–2.7%)*** |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.8%) | ***82<br>(–10.7%)*** | 83<br>(–9.5%) | 82<br>(–9.8%) | 82<br>(–10.5%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 52 | 42<br>(–18.4%) | ***41<br>(–20.4%)*** | 42<br>(–18.8%) | 42<br>(–19.1%) | 42<br>(–19.9%) | 42<br>(–18.7%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 203<br>(–8%) | ***200<br>(–9.4%)*** | 205<br>(–7.5%) | 203<br>(–8.1%) | 202<br>(–8.6%) | 205<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 32 ms | 39 ms | 857 ms | 43 ms | ***9 ms*** | 199 ms |
| **Average result (KB)** | 399 | 380<br>(–4.7%) | ***366<br>(–8.2%)*** | 388<br>(–2.6%) | 375<br>(–5.9%) | 374<br>(–6.1%) | 377<br>(–5.5%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.1%) | 53<br>(–14.8%) | 56<br>(–10%) | ***39<br>(–37.4%)*** | 55<br>(–11.5%) | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 244 | 231<br>(–5.2%) | ***216<br>(–11.5%)*** | 229<br>(–5.9%) | 219<br>(–10.1%) | 227<br>(–6.7%) | 229<br>(–6%) |
| [BBC](https://www.bbc.co.uk/) | 676 | 636<br>(–6%) | ***621<br>(–8.1%)*** | n/a | 630<br>(–6.8%) | 632<br>(–6.5%) | 671<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.9%) | ***259<br>(–8.3%)*** | 278<br>(–1.7%) | 271<br>(–4%) | 274<br>(–3.2%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 290 | 263<br>(–9.4%) | 248<br>(–14.5%) | 268<br>(–7.7%) | ***216<br>(–25.6%)*** | 262<br>(–9.8%) | 278<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 148 | 131<br>(–11.3%) | 119<br>(–19.2%) | 130<br>(–11.9%) | ***103<br>(–30.6%)*** | 129<br>(–12.5%) | 135<br>(–9%) |
| [DeepSeek](https://www.deepseek.com/) | 98 | 95<br>(–3.2%) | ***71<br>(–27.4%)*** | 95<br>(–3.4%) | 77<br>(–21.6%) | 95<br>(–3.5%) | 97<br>(–1.2%) |
| [DIN](https://www.din.de/) | 254 | 176<br>(–30.8%) | 164<br>(–35.4%) | 177<br>(–30.6%) | ***136<br>(–46.5%)*** | 175<br>(–31.1%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 544 | 512<br>(–6%) | 502<br>(–7.8%) | n/a | ***497<br>(–8.6%)*** | 504<br>(–7.4%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7421 | 7054<br>(–4.9%) | ***6812<br>(–8.2%)*** | n/a | 6928<br>(–6.6%) | 6958<br>(–6.2%) | 6983<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 71<br>(–16%) | 76<br>(–9.6%) | ***55<br>(–34.7%)*** | 75<br>(–11.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 47<br>(–10.8%) | ***43<br>(–18.6%)*** | 48<br>(–10.1%) | 46<br>(–14.1%) | 47<br>(–12.2%) | 48<br>(–9.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–36.9%) | 33<br>(–33.5%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1606 | 1483<br>(–7.6%) | 1422<br>(–11.5%) | n/a | ***1351<br>(–15.8%)*** | 1542<br>(–4%) | 1549<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 174 | 133<br>(–23.6%) | 128<br>(–26.5%) | 134<br>(–23%) | ***58<br>(–66.9%)*** | 132<br>(–24%) | 140<br>(–19.7%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.2%) | 40<br>(–6.6%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 222 | 229<br>(+3.6%) | ***214<br>(–3.3%)*** | 221<br>(–0.2%) | 227<br>(+2.3%) | 221<br>(0%) | 240<br>(+8.4%) |
| [Google](https://www.google.com/) | 80 | 76<br>(–4.6%) | 75<br>(–5.3%) | 79<br>(–0.8%) | ***64<br>(–19.8%)*** | 77<br>(–3.6%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 2488 | 2321<br>(–6.7%) | ***2246<br>(–9.7%)*** | n/a | 2290<br>(–7.9%) | 2317<br>(–6.9%) | 2474<br>(–0.5%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.7%) | ***31<br>(–61.8%)*** | 34<br>(–58.1%) | 33<br>(–59.8%) | 33<br>(–59.5%) | 34<br>(–58.4%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–23.4%) | ***31<br>(–30.1%)*** | 33<br>(–23.9%) | 33<br>(–26.1%) | 33<br>(–25.3%) | 34<br>(–23.3%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | 27<br>(–7.7%) | 28<br>(–5%) | ***25<br>(–14.1%)*** | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 360 | 344<br>(–4.3%) | ***328<br>(–8.9%)*** | n/a | 335<br>(–7%) | 341<br>(–5.1%) | 354<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–46.5%) | 10<br>(–42.7%) | ***9<br>(–46.7%)*** | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.3%) | 40<br>(–6.6%) | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 118 | 70<br>(–40.3%) | 66<br>(–43.8%) | 72<br>(–38.9%) | ***54<br>(–53.9%)*** | 69<br>(–41.3%) | 71<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 425 | 411<br>(–3.2%) | ***258<br>(–39.2%)*** | n/a | 333<br>(–21.7%) | 415<br>(–2.3%) | 425<br>(0%) |
| [Mondoweiss](https://mondoweiss.net/) | 403 | 381<br>(–5.5%) | 367<br>(–9%) | n/a | ***360<br>(–10.6%)*** | 376<br>(–6.6%) | 388<br>(–3.6%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***32<br>(–31.6%)*** | 37<br>(–22.2%) | 33<br>(–29.4%) | 35<br>(–25.6%) | 36<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 103 | 85<br>(–17%) | ***60<br>(–41.7%)*** | 86<br>(–16.6%) | 61<br>(–41%) | 85<br>(–17.4%) | 87<br>(–15.5%) |
| [Opera](https://www.opera.com/) | 185 | 130<br>(–29.5%) | 122<br>(–33.8%) | 134<br>(–27.4%) | ***85<br>(–53.9%)*** | 129<br>(–30%) | 134<br>(–27.6%) |
| [OSCE](https://www.osce.org/) | 171 | 143<br>(–16.1%) | ***134<br>(–21.5%)*** | 144<br>(–16%) | 135<br>(–20.8%) | 142<br>(–17%) | 144<br>(–15.8%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19.1%)*** | 18<br>(–14.4%) | 18<br>(–16%) | 17<br>(–17.3%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 241 | 229<br>(–4.9%) | ***215<br>(–10.5%)*** | 231<br>(–4.1%) | 217<br>(–9.8%) | 229<br>(–4.6%) | 239<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 313 | 312<br>(–0.2%) | 309<br>(–1.2%) | n/a | ***296<br>(–5.4%)*** | 310<br>(–0.8%) | 313<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 51 | 37<br>(–26.4%) | ***35<br>(–31.1%)*** | 37<br>(–27.3%) | 36<br>(–29.6%) | 36<br>(–28.4%) | 37<br>(–27.1%) |
| [TAZ](https://taz.de/) | 415 | 373<br>(–10.1%) | ***349<br>(–16%)*** | n/a | 363<br>(–12.4%) | 374<br>(–9.8%) | 385<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.2%) | ***50<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.4%) | 54<br>(–10.2%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 136<br>(–23.4%) | 133<br>(–25.1%) | 142<br>(–20%) | ***117<br>(–34.2%)*** | 138<br>(–22%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 152 | 128<br>(–16.2%) | 113<br>(–25.5%) | 124<br>(–18.5%) | ***85<br>(–44.2%)*** | 125<br>(–17.6%) | 131<br>(–14%) |
| [UX Collective](https://uxdesign.cc/) | 156 | 145<br>(–6.5%) | ***132<br>(–15.1%)*** | 153<br>(–1.4%) | 133<br>(–14.8%) | 144<br>(–7.7%) | 151<br>(–2.7%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12%) | 73<br>(–20%) | 81<br>(–11.5%) | ***64<br>(–29.8%)*** | 80<br>(–12.8%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 52 | 40<br>(–22.1%) | ***37<br>(–28.4%)*** | 40<br>(–22.5%) | 38<br>(–27%) | 40<br>(–23.7%) | 42<br>(–18.7%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 182<br>(–17.9%) | 171<br>(–22.7%) | 191<br>(–13.6%) | ***153<br>(–30.9%)*** | 189<br>(–14.5%) | 205<br>(–7.2%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 38 ms | 65 ms | 1244 ms | 153 ms | ***11 ms*** | 196 ms |
| **Average result (KB)** | 399 | 368<br>(–7.6%) | 350<br>(–12.2%) | 386<br>(–3.1%) | ***348<br>(–12.7%)*** | 367<br>(–8%) | 377<br>(–5.5%) |

Benchmarks last updated: Jul 27, 2026
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