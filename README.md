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
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–5.8%) | 58<br>(–8.4%) | 58<br>(–7.2%) | 58<br>(–7.7%) | ***57<br>(–8.4%)*** | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 243 | 231<br>(–5.1%) | ***225<br>(–7.6%)*** | 229<br>(–5.8%) | 228<br>(–6.3%) | 226<br>(–6.9%) | 228<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 816 | 811<br>(–0.7%) | ***802<br>(–1.7%)*** | n/a | 809<br>(–0.9%) | 805<br>(–1.4%) | 809<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.8%) | ***264<br>(–6.8%)*** | 278<br>(–1.7%) | 276<br>(–2.5%) | 273<br>(–3.4%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 301 | 289<br>(–3.8%) | ***281<br>(–6.5%)*** | n/a | 288<br>(–4.2%) | 287<br>(–4.7%) | 289<br>(–4.1%) |
| [CSS-Tricks](https://css-tricks.com/) | 147 | 136<br>(–7.8%) | ***133<br>(–9.6%)*** | 134<br>(–8.9%) | 133<br>(–9.3%) | 133<br>(–9.5%) | 134<br>(–8.8%) |
| [DeepSeek](https://www.deepseek.com/) | 147 | 146<br>(–0.6%) | ***140<br>(–5.1%)*** | 146<br>(–0.8%) | 146<br>(–1.1%) | 146<br>(–0.9%) | 146<br>(–0.8%) |
| [DIN](https://www.din.de/) | 254 | 183<br>(–28.3%) | ***176<br>(–30.7%)*** | 184<br>(–27.8%) | 183<br>(–28.1%) | 180<br>(–29.1%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 563 | 559<br>(–0.6%) | ***557<br>(–1%)*** | n/a | 558<br>(–0.8%) | 557<br>(–1%) | 560<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7417 | 7050<br>(–4.9%) | ***6809<br>(–8.2%)*** | n/a | 6925<br>(–6.6%) | 6948<br>(–6.3%) | 6979<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.6%) | ***77<br>(–8.2%)*** | 79<br>(–6.6%) | 78<br>(–7.5%) | 77<br>(–8.1%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 49<br>(–8.1%) | ***46<br>(–12.7%)*** | 49<br>(–7.9%) | 48<br>(–10.1%) | 47<br>(–11.6%) | 48<br>(–9.8%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.9%)*** | 33<br>(–32.9%) | 33<br>(–33.1%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1587 | 1536<br>(–3.2%) | ***1457<br>(–8.2%)*** | n/a | 1534<br>(–3.3%) | 1527<br>(–3.8%) | 1531<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 175 | 140<br>(–20.1%) | ***138<br>(–20.8%)*** | 140<br>(–19.8%) | 140<br>(–20%) | 139<br>(–20.7%) | 140<br>(–19.9%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 42<br>(–3.4%) | 40<br>(–6.3%) | 40<br>(–6.4%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.6%) | 223<br>(0%) | ***223<br>(–0.2%)*** | 237<br>(+5.9%) | 223<br>(–0.1%) | 242<br>(+8.3%) |
| [Google](https://www.google.com/) | 80 | 123<br>(+54.7%) | 79<br>(–0.6%) | 79<br>(–0.3%) | ***79<br>(–0.8%)*** | 79<br>(–0.5%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 3139 | 3115<br>(–0.7%) | ***3075<br>(–2%)*** | n/a | 3122<br>(–0.5%) | 3114<br>(–0.8%) | 3125<br>(–0.4%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+0.9%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 155<br>(+2.6%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.2%) | ***32<br>(–60.7%)*** | 35<br>(–57.7%) | 34<br>(–58.8%) | 33<br>(–59.3%) | 34<br>(–58.2%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–21.2%) | ***32<br>(–27%)*** | 34<br>(–22.3%) | 34<br>(–22.8%) | 34<br>(–23.3%) | 34<br>(–22.7%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | ***28<br>(–6.4%)*** | 28<br>(–5%) | 28<br>(–5.4%) | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 338 | 335<br>(–1%) | ***328<br>(–2.9%)*** | n/a | 334<br>(–1.2%) | 332<br>(–1.9%) | 333<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–29.7%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–4.1%) | ***40<br>(–6.4%)*** | 41<br>(–3.4%) | 40<br>(–6.3%) | 40<br>(–6.4%) | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 118 | 70<br>(–40.2%) | ***67<br>(–42.7%)*** | 72<br>(–38.8%) | 72<br>(–39%) | 69<br>(–41.5%) | 71<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 424 | 408<br>(–3.7%) | ***403<br>(–4.8%)*** | n/a | 421<br>(–0.7%) | 410<br>(–3.3%) | 421<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 206 | 194<br>(–6%) | ***186<br>(–9.8%)*** | 192<br>(–7.1%) | 191<br>(–7.6%) | 190<br>(–8%) | 192<br>(–7.1%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | 35<br>(–25.8%) | 37<br>(–22.2%) | 36<br>(–23.8%) | ***35<br>(–26%)*** | 36<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 101 | 84<br>(–16.9%) | ***83<br>(–17.9%)*** | 84<br>(–16.5%) | 85<br>(–16.1%) | 83<br>(–17.6%) | 85<br>(–16.1%) |
| [Opera](https://www.opera.com/) | 188 | 137<br>(–27.3%) | ***133<br>(–29.1%)*** | 136<br>(–27.5%) | 136<br>(–27.8%) | 135<br>(–28.1%) | 135<br>(–27.9%) |
| [OSCE](https://www.osce.org/) | 172 | 144<br>(–16%) | 142<br>(–17.2%) | 144<br>(–15.9%) | 145<br>(–15.7%) | ***142<br>(–17.3%)*** | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.6%) | ***17<br>(–17.4%)*** | 18<br>(–13.6%) | 18<br>(–14.4%) | 17<br>(–16.8%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 237 | 234<br>(–1.3%) | ***233<br>(–1.5%)*** | 235<br>(–0.7%) | 235<br>(–0.9%) | 234<br>(–1.1%) | 235<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 303 | 303<br>(+0.2%) | ***301<br>(–0.5%)*** | n/a | 302<br>(–0.2%) | 301<br>(–0.4%) | 303<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 50 | 37<br>(–26.3%) | ***35<br>(–29.4%)*** | 36<br>(–27.1%) | 36<br>(–27.6%) | 36<br>(–28.4%) | 36<br>(–27.1%) |
| [TAZ](https://taz.de/) | 434 | 409<br>(–5.8%) | ***389<br>(–10.5%)*** | n/a | 400<br>(–7.8%) | 400<br>(–8%) | 403<br>(–7.3%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | ***54<br>(–10.5%)*** | 54<br>(–9.8%) | 54<br>(–9.8%) | 54<br>(–10.3%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 162<br>(–8.5%) | ***160<br>(–9.9%)*** | 162<br>(–8.5%) | 161<br>(–9.3%) | 160<br>(–9.6%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 155 | 134<br>(–13.4%) | ***130<br>(–16.5%)*** | 134<br>(–13.7%) | 133<br>(–14.3%) | 132<br>(–15%) | 134<br>(–13.7%) |
| [UX Collective](https://uxdesign.cc/) | 121 | 165<br>(+36.1%) | ***118<br>(–2.6%)*** | 120<br>(–0.7%) | 119<br>(–1.4%) | 119<br>(–1.5%) | 120<br>(–1.2%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.7%) | 81<br>(–10.7%) | 83<br>(–9.4%) | 82<br>(–9.7%) | ***81<br>(–10.7%)*** | 83<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 52 | 42<br>(–18.5%) | ***41<br>(–20.5%)*** | 42<br>(–18.8%) | 42<br>(–19.1%) | 41<br>(–20.1%) | 42<br>(–18.7%) |
| [WordPress Blog](https://wordpress.com/blog/) | 206 | 190<br>(–7.5%) | ***187<br>(–9%)*** | 192<br>(–6.8%) | 190<br>(–7.4%) | 189<br>(–8.3%) | 192<br>(–6.6%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 30 ms | 41 ms | 860 ms | 37 ms | ***9 ms*** | 191 ms |
| **Average result (KB)** | 411 | 392<br>(–4.6%) | ***379<br>(–7.7%)*** | 400<br>(–2.6%) | 387<br>(–5.7%) | 386<br>(–6.1%) | 389<br>(–5.3%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.5%) | 24<br>(–22.9%) | ***23<br>(–26.5%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.2%) | 53<br>(–14.8%) | 56<br>(–10%) | ***39<br>(–37.5%)*** | 55<br>(–11.8%) | 58<br>(–7.3%) |
| [Apple](https://www.apple.com/) | 243 | 231<br>(–5.2%) | ***215<br>(–11.6%)*** | 229<br>(–5.8%) | 219<br>(–10%) | 226<br>(–6.9%) | 228<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 816 | 767<br>(–6%) | ***749<br>(–8.2%)*** | n/a | 762<br>(–6.7%) | 761<br>(–6.8%) | 809<br>(–0.8%) |
| [Bun](https://bun.sh/) | 283 | 272<br>(–3.9%) | ***259<br>(–8.3%)*** | 278<br>(–1.7%) | 272<br>(–4%) | 273<br>(–3.4%) | 276<br>(–2.4%) |
| [CERN](https://home.cern/) | 301 | 273<br>(–9.1%) | 259<br>(–14%) | n/a | ***217<br>(–28%)*** | 272<br>(–9.7%) | 289<br>(–4.1%) |
| [CSS-Tricks](https://css-tricks.com/) | 147 | 130<br>(–11.9%) | 118<br>(–19.6%) | 129<br>(–12.2%) | ***102<br>(–31%)*** | 128<br>(–13.1%) | 134<br>(–8.8%) |
| [DeepSeek](https://www.deepseek.com/) | 147 | 141<br>(–4.1%) | ***118<br>(–20.2%)*** | 141<br>(–4%) | 123<br>(–16.3%) | 141<br>(–4.2%) | 146<br>(–0.8%) |
| [DIN](https://www.din.de/) | 254 | 176<br>(–30.8%) | 164<br>(–35.4%) | 177<br>(–30.6%) | ***136<br>(–46.4%)*** | 175<br>(–31.2%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 563 | 528<br>(–6.1%) | 518<br>(–7.9%) | n/a | ***514<br>(–8.7%)*** | 521<br>(–7.5%) | 560<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7417 | 7050<br>(–4.9%) | ***6808<br>(–8.2%)*** | n/a | 6924<br>(–6.6%) | 6948<br>(–6.3%) | 6979<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 71<br>(–15.9%) | 76<br>(–9.5%) | ***55<br>(–34.6%)*** | 75<br>(–11.3%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 53 | 47<br>(–10.9%) | ***43<br>(–18.8%)*** | 48<br>(–10.2%) | 46<br>(–14.2%) | 47<br>(–12.5%) | 48<br>(–9.8%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–37%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1587 | 1465<br>(–7.7%) | 1402<br>(–11.6%) | n/a | ***1333<br>(–16%)*** | 1519<br>(–4.2%) | 1531<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 175 | 133<br>(–23.8%) | 128<br>(–26.6%) | 134<br>(–23.2%) | ***58<br>(–66.8%)*** | 132<br>(–24.3%) | 140<br>(–19.9%) |
| [Front-End Social](https://front-end.social/) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.2%) | 40<br>(–6.7%) | 42<br>(–3.5%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 231<br>(+3.6%) | ***216<br>(–3.3%)*** | 223<br>(–0.2%) | 228<br>(+2.2%) | 223<br>(–0.1%) | 242<br>(+8.3%) |
| [Google](https://www.google.com/) | 80 | 76<br>(–4.6%) | 75<br>(–5.3%) | 79<br>(–0.8%) | ***64<br>(–19.7%)*** | 77<br>(–3.6%) | 79<br>(–0.3%) |
| [Ground News](https://ground.news/) | 3139 | 2923<br>(–6.9%) | ***2848<br>(–9.3%)*** | n/a | 2893<br>(–7.8%) | 2915<br>(–7.1%) | 3125<br>(–0.4%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 123<br>(+0.7%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 155<br>(+2.5%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 82 | 34<br>(–58.5%) | ***32<br>(–61.5%)*** | 35<br>(–57.8%) | 33<br>(–59.5%) | 33<br>(–59.4%) | 34<br>(–58.2%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–22.7%) | ***31<br>(–29.4%)*** | 34<br>(–23.3%) | 33<br>(–25.4%) | 33<br>(–24.8%) | 34<br>(–22.7%) |
| [Ladybird](https://ladybird.org/) | 30 | 28<br>(–3.9%) | 27<br>(–7.7%) | 28<br>(–5%) | ***25<br>(–14.1%)*** | 28<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 338 | 322<br>(–4.8%) | ***306<br>(–9.4%)*** | n/a | 313<br>(–7.5%) | 319<br>(–5.7%) | 333<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.5%)*** | 10<br>(–42.7%) | 9<br>(–46.5%) | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 43 | 41<br>(–5.2%) | ***37<br>(–14.4%)*** | 41<br>(–3.7%) | 37<br>(–14.3%) | 40<br>(–6.7%) | 41<br>(–3.5%) |
| [MDN](https://developer.mozilla.org/en-US/) | 118 | 70<br>(–40.3%) | 66<br>(–43.8%) | 72<br>(–38.9%) | ***54<br>(–53.8%)*** | 69<br>(–41.5%) | 71<br>(–39.2%) |
| [Mistral AI](https://mistral.ai/) | 424 | 408<br>(–3.7%) | ***322<br>(–23.9%)*** | n/a | 331<br>(–22%) | 410<br>(–3.3%) | 421<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 206 | 187<br>(–9.3%) | 173<br>(–16.3%) | 189<br>(–8.3%) | ***166<br>(–19.7%)*** | 186<br>(–9.8%) | 192<br>(–7.1%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***32<br>(–31.6%)*** | 37<br>(–22.2%) | 33<br>(–29.4%) | 35<br>(–26%) | 36<br>(–23%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 101 | 83<br>(–17.7%) | ***58<br>(–42.7%)*** | 84<br>(–17.2%) | 59<br>(–41.9%) | 83<br>(–18.2%) | 85<br>(–16.1%) |
| [Opera](https://www.opera.com/) | 188 | 132<br>(–29.9%) | 124<br>(–34.1%) | 136<br>(–27.7%) | ***86<br>(–54%)*** | 131<br>(–30.5%) | 135<br>(–27.9%) |
| [OSCE](https://www.osce.org/) | 172 | 144<br>(–16.1%) | ***135<br>(–21.4%)*** | 144<br>(–15.9%) | 136<br>(–20.7%) | 142<br>(–17.4%) | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 31<br>(–8.3%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–19.1%)*** | 18<br>(–14.4%) | 18<br>(–15.8%) | 17<br>(–17.6%) | 18<br>(–14.2%) |
| [SitePoint](https://www.sitepoint.com/) | 237 | 225<br>(–4.9%) | ***212<br>(–10.4%)*** | 227<br>(–4.1%) | 213<br>(–9.8%) | 226<br>(–4.7%) | 235<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 303 | 302<br>(–0.3%) | 299<br>(–1.3%) | n/a | ***288<br>(–4.7%)*** | 300<br>(–0.9%) | 303<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 50 | 37<br>(–26.4%) | ***34<br>(–31.1%)*** | 36<br>(–27.3%) | 35<br>(–29.4%) | 35<br>(–28.6%) | 36<br>(–27.1%) |
| [TAZ](https://taz.de/) | 434 | 389<br>(–10.3%) | ***363<br>(–16.4%)*** | n/a | 380<br>(–12.4%) | 390<br>(–10.3%) | 403<br>(–7.3%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.2%) | ***50<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.3%) | 54<br>(–10.5%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 177 | 136<br>(–23.4%) | 133<br>(–25.1%) | 142<br>(–20%) | ***117<br>(–34.2%)*** | 138<br>(–22.3%) | 162<br>(–8.5%) |
| [United Nations](https://www.un.org/en/) | 155 | 131<br>(–15.9%) | 116<br>(–25.4%) | 127<br>(–18.4%) | ***88<br>(–43.6%)*** | 128<br>(–17.6%) | 134<br>(–13.7%) |
| [UX Collective](https://uxdesign.cc/) | 121 | 114<br>(–5.9%) | ***102<br>(–16.2%)*** | 119<br>(–1.5%) | 102<br>(–15.8%) | 113<br>(–6.8%) | 120<br>(–1.2%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–11.9%) | 73<br>(–20%) | 81<br>(–11.4%) | ***64<br>(–29.7%)*** | 79<br>(–13%) | 83<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 52 | 40<br>(–22.1%) | ***37<br>(–28.5%)*** | 40<br>(–22.5%) | 38<br>(–27.1%) | 39<br>(–23.8%) | 42<br>(–18.7%) |
| [WordPress Blog](https://wordpress.com/blog/) | 206 | 169<br>(–17.9%) | 159<br>(–22.5%) | 179<br>(–13.1%) | ***142<br>(–31.1%)*** | 176<br>(–14.4%) | 192<br>(–6.6%) |
| **Sites processed (of sites overall)** |  | 48/48 | 48/48 | 38/48 | 48/48 | 48/48 | 48/48 |
| **Average processing time** |  | 35 ms | 66 ms | 1627 ms | 147 ms | ***11 ms*** | 190 ms |
| **Average result (KB)** | 411 | 379<br>(–7.7%) | 362<br>(–11.9%) | 398<br>(–3%) | ***359<br>(–12.6%)*** | 377<br>(–8.2%) | 389<br>(–5.3%) |

Benchmarks last updated: Jul 9, 2026
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