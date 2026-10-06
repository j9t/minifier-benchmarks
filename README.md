# Minifier Benchmarks

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)).

Two tests are run: One exclusively applying [HTML minification](#1-html-minification-compared) (with the most aggressive settings that do not impact conformance), the other [enabling all minification features](#2-maximum-minification-compared) the respective minifier offers that keep output conformant (this is play—it’s not a fair comparison and may exceed project needs).

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by maximum effectiveness](#2-maximum-minification-compared) (all conformant minification and tree-shaking options enabled), and by the respective processing times
* **🧑‍🏭 Minifier author?** [Add and configure your minifier and become a co-owner](https://github.com/j9t/minifier-benchmarks/compare)
* **💁 Innocent bystander?** [Please share observations and suggestions](https://github.com/j9t/minifier-benchmarks/issues)

## 0. Minifier Overview

| | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Last npm update** | ![npm @swc/html](https://img.shields.io/npm/last-update/@swc/html) | ![npm HTML Minifier Next](https://img.shields.io/npm/last-update/html-minifier-next) | ![npm HTML Minifier Terser](https://img.shields.io/npm/last-update/html-minifier-terser) | n/a | ![npm htmlnano](https://img.shields.io/npm/last-update/htmlnano) | ![npm minify-html](https://img.shields.io/npm/last-update/@minify-html/node) | ![npm minimize](https://img.shields.io/npm/last-update/minimize) |
| **Socket health status** | [![Socket @swc/html](https://badge.socket.dev/npm/package/@swc/html)](https://socket.dev/npm/package/@swc/html) | [![Socket HTML Minifier Next](https://badge.socket.dev/npm/package/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [![Socket HTML Minifier Terser](https://badge.socket.dev/npm/package/html-minifier-terser)](https://socket.dev/npm/package/html-minifier-terser) | n/a | [![Socket htmlnano](https://badge.socket.dev/npm/package/htmlnano)](https://socket.dev/npm/package/htmlnano) | [![Socket minify-html](https://badge.socket.dev/npm/package/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [![Socket minimize](https://badge.socket.dev/npm/package/minimize)](https://socket.dev/npm/package/minimize) |
| **GitHub sponsors** (please support your minifier) | [![Sponsors @swc/html](https://img.shields.io/github/sponsors/swc-project)](https://github.com/sponsors/swc-project) | [![Sponsors HTML Minifier Next](https://img.shields.io/github/sponsors/j9t)](https://github.com/sponsors/j9t) | [![Sponsors HTML Minifier Terser](https://img.shields.io/github/sponsors/terser)](https://github.com/sponsors/terser) | n/a | [![Sponsors htmlnano](https://img.shields.io/github/sponsors/maltsev)](https://github.com/sponsors/maltsev) | [![Sponsors minify-html](https://img.shields.io/github/sponsors/wilsonzlin)](https://github.com/sponsors/wilsonzlin) | [![Sponsors minimize](https://img.shields.io/github/sponsors/Swaagie)](https://github.com/sponsors/Swaagie) |

<!--
| **Dependencies status** | ![Dependencies @swc/html](https://img.shields.io/depfu/dependencies/github/swc-project/swc) | ![Dependencies HTML Minifier Next](https://img.shields.io/depfu/dependencies/github/j9t/html-minifier-next) | ![Dependencies HTML Minifier Terser](https://img.shields.io/depfu/dependencies/github/terser/html-minifier-terser) | n/a | ![Dependencies htmlnano](https://img.shields.io/depfu/dependencies/github/maltsev/htmlnano) | ![Dependencies minify-html](https://img.shields.io/depfu/dependencies/github/wilsonzlin/minify-html) | ![Dependencies minimize](https://img.shields.io/depfu/dependencies/github/Swaagie/minimize) |
| **Code coverage** | ![Coverage @swc/html](https://img.shields.io/codecov/c/github/swc-project/swc) | ![Coverage HTML Minifier Next](https://img.shields.io/codecov/c/github/j9t/html-minifier-next) | ![Coverage HTML Minifier Terser](https://img.shields.io/codecov/c/github/terser/html-minifier-terser) | n/a | ![Coverage htmlnano](https://img.shields.io/codecov/c/github/maltsev/htmlnano) | ![Coverage minify-html](https://img.shields.io/codecov/c/github/wilsonzlin/minify-html) | ![Coverage minimize](https://img.shields.io/codecov/c/github/Swaagie/minimize) |
| **Quality score** | ![Quality @swc/html](https://img.shields.io/npms-io/quality-score/@swc/html) | ![Quality HTML Minifier Next](https://img.shields.io/npms-io/quality-score/html-minifier-next) | ![Quality HTML Minifier Terser](https://img.shields.io/npms-io/quality-score/html-minifier-terser) | n/a | ![Quality htmlnano](https://img.shields.io/npms-io/quality-score/htmlnano) | ![Quality minify-html](https://img.shields.io/npms-io/quality-score/@minify-html/node) | ![Quality minimize](https://img.shields.io/npms-io/quality-score/minimize) |
| **Unpacked size** | ![Size @swc/html](https://img.shields.io/npm/unpacked-size/@swc/html) | ![Size HTML Minifier Next](https://img.shields.io/npm/unpacked-size/html-minifier-next) | ![Size HTML Minifier Terser](https://img.shields.io/npm/unpacked-size/html-minifier-terser) | n/a | ![Size htmlnano](https://img.shields.io/npm/unpacked-size/htmlnano) | ![Size minify-html](https://img.shields.io/npm/unpacked-size/@minify-html/node) | ![Size minimize](https://img.shields.io/npm/unpacked-size/minimize) |
-->

<!-- Auto-generated benchmarks, don't edit -->
## 1. HTML Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 87<br>(–17.1%) | ***85<br>(–19.3%)*** | 89<br>(–15.1%) | 86<br>(–18.2%) | 86<br>(–18.5%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 60<br>(–5.7%) | ***58<br>(–8.2%)*** | 59<br>(–7.1%) | 59<br>(–8.2%) | 59<br>(–8%) | 59<br>(–7.1%) |
| [BBC](https://www.bbc.co.uk/) | 737 | 733<br>(–0.6%) | 727<br>(–1.4%) | n/a | ***727<br>(–1.5%)*** | 729<br>(–1.2%) | 732<br>(–0.8%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 34<br>(–6.7%) | 33<br>(–8.7%) | 35<br>(–2.3%) | ***33<br>(–9%)*** | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [CERN](https://home.cern/) | 291 | 279<br>(–4%) | 275<br>(–5.6%) | 279<br>(–4.1%) | ***272<br>(–6.6%)*** | 277<br>(–4.7%) | 279<br>(–4.3%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–0.7%) | ***112<br>(–1.2%)*** | 112<br>(–0.6%) | 112<br>(–1.1%) | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [DIN](https://www.din.de/) | 256 | 184<br>(–28.3%) | ***178<br>(–30.6%)*** | 185<br>(–27.7%) | 179<br>(–30.3%) | 182<br>(–29%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 544 | 540<br>(–0.6%) | ***537<br>(–1.1%)*** | n/a | 538<br>(–1%) | 539<br>(–0.9%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7451 | 7086<br>(–4.9%) | 6841<br>(–8.2%) | n/a | ***6834<br>(–8.3%)*** | 6988<br>(–6.2%) | 7013<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 77<br>(–7.7%) | ***77<br>(–8.3%)*** | 78<br>(–6.6%) | 77<br>(–8.2%) | 77<br>(–7.9%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 50<br>(–7.9%) | ***47<br>(–12.9%)*** | 50<br>(–7.7%) | 47<br>(–12.8%) | 48<br>(–11.1%) | 49<br>(–9.5%) |
| [ELLE](https://www.elle.com/) | 721 | 716<br>(–0.7%) | ***711<br>(–1.4%)*** | n/a | 713<br>(–1.2%) | 713<br>(–1.1%) | 716<br>(–0.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | 33<br>(–33.9%) | 33<br>(–33%) | ***33<br>(–33.9%)*** | 33<br>(–33.5%) | 33<br>(–33.1%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 434<br>(–1.1%) | ***431<br>(–1.8%)*** | n/a | 431<br>(–1.7%) | 431<br>(–1.7%) | 436<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 289<br>(–3.1%) | 286<br>(–4.1%) | n/a | ***285<br>(–4.2%)*** | 286<br>(–3.9%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 210 | 205<br>(–2.7%) | ***192<br>(–8.8%)*** | 205<br>(–2.7%) | 195<br>(–7.2%) | 203<br>(–3.4%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1618 | 1563<br>(–3.4%) | ***1479<br>(–8.6%)*** | n/a | 1554<br>(–4%) | 1558<br>(–3.7%) | 1557<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 182 | 135<br>(–26.3%) | 133<br>(–27%) | 135<br>(–26.1%) | ***133<br>(–27%)*** | 133<br>(–26.9%) | 135<br>(–26.2%) |
| [Front-End Social](https://front-end.social/) | 54 | 52<br>(–4.6%) | ***50<br>(–7.2%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 238<br>(+4.2%) | 228<br>(0%) | ***228<br>(–0.2%)*** | 228<br>(0%) | 228<br>(0%) | 246<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | ***11<br>(–26.4%)*** | 12<br>(–17%) | 11<br>(–26.3%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1857 | 1834<br>(–1.2%) | ***1811<br>(–2.5%)*** | n/a | 1822<br>(–1.8%) | 1825<br>(–1.7%) | 1843<br>(–0.8%) |
| [Ground News](https://ground.news/) | 2189 | 2166<br>(–1%) | ***2120<br>(–3.2%)*** | n/a | 2140<br>(–2.2%) | 2166<br>(–1.1%) | 2175<br>(–0.6%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 120<br>(–2.2%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 299 | 258<br>(–13.4%) | ***250<br>(–16.4%)*** | n/a | 251<br>(–16%) | 254<br>(–14.8%) | 257<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.7%) | ***31<br>(–61.9%)*** | 35<br>(–57.4%) | 32<br>(–61.2%) | 33<br>(–59.6%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 35<br>(–21.7%) | 34<br>(–24.1%) | 34<br>(–22.6%) | ***33<br>(–24.6%)*** | 34<br>(–23.6%) | 34<br>(–23.2%) |
| [KoRo](https://www.koro.com/) | 946 | 892<br>(–5.7%) | 883<br>(–6.6%) | n/a | ***881<br>(–6.8%)*** | 896<br>(–5.3%) | 916<br>(–3.1%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–6.1%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 512 | 506<br>(–1.1%) | 492<br>(–4%) | n/a | ***489<br>(–4.5%)*** | 503<br>(–1.7%) | 504<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | 12<br>(–30.4%) | 12<br>(–27%) | ***12<br>(–30.6%)*** | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 48<br>(–4.5%) | ***47<br>(–7.1%)*** | 48<br>(–3.7%) | 47<br>(–7.1%) | 47<br>(–7%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.1%) | ***69<br>(–41.8%)*** | 73<br>(–38.7%) | 71<br>(–40.3%) | 70<br>(–41.1%) | 72<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 306<br>(–11.5%) | ***297<br>(–14.2%)*** | n/a | 299<br>(–13.6%) | 304<br>(–12.1%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 308 | 297<br>(–3.4%) | ***253<br>(–17.7%)*** | n/a | 264<br>(–14.3%) | 298<br>(–3.3%) | 306<br>(–0.7%) |
| [Mondoweiss](https://mondoweiss.net/) | 348 | 335<br>(–3.7%) | ***328<br>(–5.5%)*** | n/a | 329<br>(–5.5%) | 333<br>(–4.3%) | 334<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | ***34<br>(–25.9%)*** | 36<br>(–22.2%) | 34<br>(–25.9%) | 35<br>(–25.6%) | 36<br>(–23%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 120<br>(–2.9%) | 118<br>(–4.3%) | 120<br>(–2.8%) | ***117<br>(–5.4%)*** | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Opera](https://www.opera.com/) | 186 | 137<br>(–26%) | ***133<br>(–28.1%)*** | 137<br>(–26.2%) | 135<br>(–27.1%) | 136<br>(–26.7%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 181 | 152<br>(–15.8%) | ***150<br>(–17.1%)*** | 153<br>(–15.7%) | 151<br>(–16.4%) | 151<br>(–16.6%) | 153<br>(–15.6%) |
| [OZeWAI](https://ozewai.org/) | 147 | 144<br>(–2%) | ***141<br>(–3.6%)*** | 143<br>(–2.2%) | 141<br>(–3.5%) | 142<br>(–3.1%) | 143<br>(–2.2%) |
| [Piccalilli](https://piccalil.li/) | 78 | 76<br>(–2.8%) | 75<br>(–4.2%) | 76<br>(–2.3%) | ***75<br>(–4.3%)*** | 75<br>(–4%) | 76<br>(–2.4%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | ***29<br>(–22.9%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 139 | 137<br>(–1%) | 137<br>(–1.4%) | 137<br>(–1.2%) | ***136<br>(–2.4%)*** | 137<br>(–1.4%) | 137<br>(–1.3%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 70<br>(–1.7%) | ***67<br>(–6%)*** | 69<br>(–2%) | 67<br>(–5.3%) | 69<br>(–2.2%) | 69<br>(–2%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | 30<br>(–10.7%) | 32<br>(–7.3%) | ***30<br>(–10.7%)*** | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–13.1%) | ***17<br>(–17.6%)*** | 18<br>(–13.4%) | 17<br>(–17.5%) | 18<br>(–16.3%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 224 | 221<br>(–1.3%) | ***220<br>(–1.7%)*** | 223<br>(–0.7%) | 220<br>(–1.6%) | 222<br>(–1%) | 223<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 289 | 290<br>(+0.2%) | ***287<br>(–0.6%)*** | 289<br>(–0.1%) | 288<br>(–0.4%) | 288<br>(–0.4%) | 289<br>(+0%) |
| [Startpage](https://www.startpage.com/) | 22 | 21<br>(–2.4%) | ***21<br>(–2.6%)*** | 21<br>(–2.1%) | 21<br>(–2.5%) | 21<br>(–2.3%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 56 | 41<br>(–26.1%) | ***39<br>(–30.1%)*** | 41<br>(–27%) | 40<br>(–29.3%) | 40<br>(–28%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 465 | 434<br>(–6.7%) | ***406<br>(–12.6%)*** | n/a | 418<br>(–10.1%) | 430<br>(–7.5%) | 431<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.4%) | ***88<br>(–6.5%)*** | 89<br>(–6%) | 88<br>(–6.5%) | 88<br>(–6.2%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 125 | 112<br>(–10.6%) | ***108<br>(–13.7%)*** | 115<br>(–8.2%) | 109<br>(–13.1%) | 111<br>(–11.5%) | 115<br>(–8.3%) |
| [TPGi](https://www.tpgi.com/) | 195 | 175<br>(–10%) | ***175<br>(–10.3%)*** | 179<br>(–8.2%) | 175<br>(–10.1%) | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 358 | 320<br>(–10.5%) | ***214<br>(–40.2%)*** | n/a | 318<br>(–11.2%) | 319<br>(–11%) | 227<br>(–36.7%) |
| [United Nations](https://www.un.org/en/) | 161 | 140<br>(–13%) | 133<br>(–17.1%) | 140<br>(–12.9%) | ***133<br>(–17.1%)*** | 138<br>(–14.4%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 84<br>(–8.9%) | ***83<br>(–10.8%)*** | 84<br>(–9.4%) | 83<br>(–10.7%) | 83<br>(–10.4%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 47 | 39<br>(–18.5%) | ***38<br>(–20.2%)*** | 39<br>(–18.5%) | 38<br>(–19.9%) | 38<br>(–19.8%) | 39<br>(–18.5%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 204<br>(–7.7%) | ***201<br>(–9.3%)*** | 205<br>(–7.3%) | 201<br>(–9.1%) | 202<br>(–8.4%) | 205<br>(–7.2%) |
| [博客园](https://www.cnblogs.com/) | 79 | 56<br>(–29.3%) | ***55<br>(–29.7%)*** | 57<br>(–28.2%) | 55<br>(–29.6%) | 56<br>(–28.9%) | 57<br>(–28.2%) |
| [稀土掘金](https://juejin.cn/) | 77 | 75<br>(–3.3%) | ***73<br>(–6.1%)*** | 75<br>(–3.3%) | 74<br>(–4%) | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 63/63 | 63/63 | 46/63 | 63/63 | 63/63 | 63/63 |
| **Average processing time** |  | 23 ms | 18 ms | n/a<br>(network noise) | 25 ms | ***7 ms*** | 152 ms |
| **Median processing time** |  | 8 ms | 5 ms | n/a<br>(network noise) | 8 ms | ***2 ms*** | 31 ms |
| **Average result (KB)** | 389 | 369<br>(–5.2%) | ***357<br>(–8.2%)*** | 381<br>(–2.2%) | 361<br>(–7.2%) | 366<br>(–6%) | 368<br>(–5.6%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 82<br>(–21.9%) | 78<br>(–25.3%) | 84<br>(–19.6%) | ***78<br>(–25.8%)*** | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.2%) | 45<br>(–30%) | 57<br>(–9.9%) | ***39<br>(–38.8%)*** | 56<br>(–11.4%) | 59<br>(–7.1%) |
| [BBC](https://www.bbc.co.uk/) | 737 | 696<br>(–5.6%) | ***679<br>(–7.9%)*** | n/a | 683<br>(–7.4%) | 692<br>(–6.2%) | 732<br>(–0.8%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–6.8%) | ***32<br>(–10.1%)*** | 35<br>(–2.6%) | 32<br>(–9.9%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [CERN](https://home.cern/) | 291 | 264<br>(–9.5%) | 224<br>(–23.2%) | 269<br>(–7.7%) | ***209<br>(–28.1%)*** | 262<br>(–9.8%) | 279<br>(–4.3%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 108<br>(–4.5%) | 85<br>(–24.8%) | 112<br>(–1.1%) | ***85<br>(–25%)*** | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [DIN](https://www.din.de/) | 256 | 177<br>(–30.9%) | 134<br>(–47.6%) | 178<br>(–30.6%) | ***132<br>(–48.4%)*** | 176<br>(–31.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 544 | 510<br>(–6.1%) | 502<br>(–7.7%) | n/a | ***496<br>(–8.8%)*** | 503<br>(–7.5%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7451 | 7086<br>(–4.9%) | 6840<br>(–8.2%) | n/a | ***6833<br>(–8.3%)*** | 6988<br>(–6.2%) | 7013<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 74<br>(–11.1%) | 55<br>(–34.5%) | 76<br>(–9.5%) | ***54<br>(–35.4%)*** | 74<br>(–11.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 49<br>(–10.7%) | ***44<br>(–19%)*** | 49<br>(–9.9%) | 44<br>(–18.8%) | 48<br>(–12%) | 49<br>(–9.5%) |
| [ELLE](https://www.elle.com/) | 721 | 706<br>(–2.2%) | ***691<br>(–4.2%)*** | n/a | 699<br>(–3.1%) | 703<br>(–2.5%) | 716<br>(–0.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | 31<br>(–37.7%) | 33<br>(–33%) | ***31<br>(–37.7%)*** | 33<br>(–33.5%) | 33<br>(–33.1%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 429<br>(–2.3%) | 107<br>(–75.5%) | n/a | ***105<br>(–76%)*** | 426<br>(–2.8%) | 436<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 284<br>(–4.5%) | 245<br>(–17.8%) | n/a | ***240<br>(–19.4%)*** | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 210 | 196<br>(–6.8%) | 142<br>(–32.6%) | 199<br>(–5.3%) | ***140<br>(–33.4%)*** | 195<br>(–7.3%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1618 | 1494<br>(–7.6%) | 1364<br>(–15.7%) | n/a | ***1350<br>(–16.5%)*** | 1552<br>(–4.1%) | 1557<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 182 | 128<br>(–30%) | 54<br>(–70.4%) | 129<br>(–29.4%) | ***53<br>(–70.7%)*** | 127<br>(–30.4%) | 135<br>(–26.2%) |
| [Front-End Social](https://front-end.social/) | 54 | 51<br>(–5.6%) | 47<br>(–13.7%) | 52<br>(–4%) | ***47<br>(–13.8%)*** | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 238<br>(+4.2%) | 221<br>(–3.1%) | 228<br>(–0.2%) | ***220<br>(–3.5%)*** | 228<br>(0%) | 246<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | 10<br>(–30.4%) | 12<br>(–18.2%) | ***10<br>(–30.4%)*** | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1857 | 1803<br>(–2.9%) | ***1375<br>(–25.9%)*** | n/a | n/a | 1804<br>(–2.9%) | 1843<br>(–0.8%) |
| [Ground News](https://ground.news/) | 2189 | 2053<br>(–6.2%) | ***1970<br>(–10%)*** | n/a | 1999<br>(–8.7%) | 2048<br>(–6.4%) | 2175<br>(–0.6%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***119<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.4%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 299 | 255<br>(–14.4%) | 239<br>(–19.8%) | n/a | ***239<br>(–20%)*** | 253<br>(–15.1%) | 257<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.9%) | ***31<br>(–62.7%)*** | 34<br>(–58.3%) | 31<br>(–62%) | 33<br>(–59.7%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–23.3%) | 32<br>(–26.5%) | 34<br>(–23.9%) | ***32<br>(–27.3%)*** | 33<br>(–25%) | 34<br>(–23.2%) |
| [KoRo](https://www.koro.com/) | 946 | 887<br>(–6.2%) | ***871<br>(–7.9%)*** | n/a | 894<br>(–5.5%) | 891<br>(–5.7%) | 916<br>(–3.1%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | 26<br>(–9.1%) | 28<br>(–5%) | ***25<br>(–14.9%)*** | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 512 | 487<br>(–4.8%) | 464<br>(–9.3%) | n/a | ***460<br>(–10.1%)*** | 484<br>(–5.4%) | 504<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–47%) | 10<br>(–42.7%) | ***9<br>(–47.3%)*** | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 47<br>(–5.4%) | 43<br>(–13.8%) | 48<br>(–3.9%) | ***43<br>(–14%)*** | 46<br>(–7.3%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.2%) | 68<br>(–42.8%) | 73<br>(–38.8%) | ***59<br>(–50.7%)*** | 70<br>(–41.1%) | 72<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 305<br>(–11.8%) | 219<br>(–36.7%) | n/a | ***218<br>(–37%)*** | 304<br>(–12.2%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 308 | 294<br>(–4.6%) | ***185<br>(–40%)*** | n/a | 186<br>(–39.5%) | 296<br>(–4%) | 306<br>(–0.7%) |
| [Mondoweiss](https://mondoweiss.net/) | 348 | 328<br>(–5.6%) | 307<br>(–11.7%) | n/a | ***305<br>(–12.4%)*** | 323<br>(–7.2%) | 334<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | ***32<br>(–31.8%)*** | 36<br>(–22.2%) | 32<br>(–31.1%) | 35<br>(–25.6%) | 36<br>(–23%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 114<br>(–7.4%) | 68<br>(–44.8%) | 116<br>(–5.8%) | ***61<br>(–50.2%)*** | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Opera](https://www.opera.com/) | 186 | 132<br>(–28.7%) | ***84<br>(–55%)*** | 136<br>(–26.6%) | 85<br>(–54%) | 132<br>(–29.1%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 181 | 152<br>(–15.8%) | 149<br>(–17.8%) | 152<br>(–15.8%) | ***143<br>(–21.1%)*** | 151<br>(–16.8%) | 153<br>(–15.6%) |
| [OZeWAI](https://ozewai.org/) | 147 | 136<br>(–6.9%) | 86<br>(–41.1%) | 140<br>(–4.7%) | ***73<br>(–50.1%)*** | 135<br>(–7.7%) | 143<br>(–2.2%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4%) | 64<br>(–18.1%) | 76<br>(–3%) | ***49<br>(–36.9%)*** | 74<br>(–4.9%) | 76<br>(–2.4%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | 22<br>(–41.6%) | 32<br>(–13.5%) | ***22<br>(–41.8%)*** | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 139 | 123<br>(–11.4%) | 116<br>(–16.3%) | 137<br>(–1.4%) | ***114<br>(–17.5%)*** | 122<br>(–11.9%) | 137<br>(–1.3%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 65<br>(–8.5%) | 45<br>(–36%) | 66<br>(–6.6%) | ***42<br>(–40.3%)*** | 65<br>(–8.1%) | 69<br>(–2%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | 30<br>(–10.9%) | 32<br>(–7.3%) | ***30<br>(–11.1%)*** | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14%) | ***17<br>(–19.2%)*** | 18<br>(–14.2%) | 17<br>(–18.4%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 224 | 213<br>(–4.8%) | ***202<br>(–9.9%)*** | 215<br>(–4.2%) | 202<br>(–9.8%) | 214<br>(–4.7%) | 223<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 289 | 288<br>(–0.3%) | 276<br>(–4.7%) | 289<br>(–0.1%) | ***274<br>(–5.1%)*** | 287<br>(–0.9%) | 289<br>(+0%) |
| [Startpage](https://www.startpage.com/) | 22 | 19<br>(–13.7%) | 16<br>(–25.6%) | 19<br>(–13%) | ***16<br>(–27.2%)*** | 20<br>(–6%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 56 | 41<br>(–26.2%) | ***38<br>(–32.1%)*** | 41<br>(–27.1%) | 38<br>(–31.4%) | 40<br>(–28.2%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 465 | 420<br>(–9.7%) | ***380<br>(–18.1%)*** | n/a | 399<br>(–14.2%) | 421<br>(–9.4%) | 431<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.5%) | 84<br>(–10.4%) | 89<br>(–6.1%) | ***84<br>(–11%)*** | 88<br>(–6.3%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 125 | 106<br>(–15.3%) | 91<br>(–27.4%) | 111<br>(–10.9%) | ***90<br>(–28.2%)*** | 106<br>(–15%) | 115<br>(–8.3%) |
| [TPGi](https://www.tpgi.com/) | 195 | 151<br>(–22.6%) | 133<br>(–32%) | 159<br>(–18.7%) | ***130<br>(–33.1%)*** | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 358 | 302<br>(–15.5%) | ***195<br>(–45.6%)*** | n/a | 282<br>(–21.3%) | 301<br>(–16%) | 227<br>(–36.7%) |
| [United Nations](https://www.un.org/en/) | 161 | 136<br>(–15.6%) | 89<br>(–44.6%) | 129<br>(–19.6%) | ***88<br>(–45.1%)*** | 134<br>(–16.9%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 81<br>(–12.2%) | 64<br>(–30.6%) | 82<br>(–11.6%) | ***64<br>(–31%)*** | 81<br>(–13%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 47 | 37<br>(–22.3%) | ***34<br>(–28.7%)*** | 37<br>(–22.4%) | 34<br>(–28.4%) | 36<br>(–23.7%) | 39<br>(–18.5%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 182<br>(–17.6%) | 153<br>(–30.9%) | 191<br>(–13.6%) | ***150<br>(–32%)*** | 189<br>(–14.4%) | 205<br>(–7.2%) |
| [博客园](https://www.cnblogs.com/) | 79 | 55<br>(–29.9%) | 52<br>(–33.8%) | 56<br>(–28.7%) | ***48<br>(–38.7%)*** | 56<br>(–29.1%) | 57<br>(–28.2%) |
| [稀土掘金](https://juejin.cn/) | 77 | 66<br>(–14%) | ***59<br>(–23.8%)*** | 73<br>(–5.9%) | 59<br>(–23.5%) | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 63/63 | 63/63 | 46/63 | 62/63 | 63/63 | 63/63 |
| **Average processing time** |  | 26 ms | 41 ms | 656 ms<br>(estimate) | 113 ms | ***8 ms*** | 149 ms |
| **Median processing time** |  | 11 ms | 16 ms | 707 ms<br>(estimate) | 63 ms | ***3 ms*** | 30 ms |
| **Average result (KB)** | 389 | 361<br>(–7.4%) | ***322<br>(–17.2%)*** | 379<br>(–2.7%) | 331<br>(–15.1%) | 359<br>(–7.8%) | 368<br>(–5.6%) |

Benchmarks last updated: Oct 6, 2026 (Node.js 24.21.0, macOS 15.7.9, Apple M4)
<!-- End auto-generated -->

## Notes

* Minifiers:
  - HTML Minifier Terser is not included in the benchmarks due to issues around whitespace collapsing and removal of code using modern CSS features, issues which distort the data at the expense of minifier users.
  - htmlcompressor.com incorrectly converts no-break spaces to spaces which can give an impression of greater effectiveness (last confirmed Apr 4, 2026).
  - htmlnano’s maximum minification removes some code that is in use—e.g., SVG sprite symbols that other SVGs reference, `:host` rules of declarative shadow DOM, and no-break spaces next to elements—which can give an impression of greater effectiveness (last confirmed Oct 1, 2026).
  - Minimize only minifies HTML.
* Configuration: Each minifier runs with a general configuration for all sites. Where a minifier offers a dedicated option to handle a case correctly (e.g., HTML Minifier Next’s `inlineCustomElements` for custom elements that are displayed inline), its output is not considered incorrect, even when that option isn’t set here (specifying custom settings for all sites for all minifiers is impractical).
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
  - Processing times cover the minification call only (not reading, writing, or compressing files). Each local minifier runs in its own process and first runs once on all sites (untimed) to warm up. Per site, each then gets three more untimed warm-up runs, followed by five timed runs that the minifiers take in turns, in rotating order, so that system load affects all of them alike; the median of these runs is the site’s time. Sites are only timed when the system is mostly idle, and unsteady timings get re-measured. Minification caches that persist across calls are disabled where possible.
  - Average and median processing times of local minifiers are based on the sites all of them processed. Times within 5% of the fastest also count as fastest, as smaller differences are within measurement noise. htmlcompressor.com’s times are estimates: the difference between its response time and that of a request with the same content but minification off (which still removes comments). Network jitter makes estimates for single sites unreliable, so only averages and medians are shown, only if the average exceeds twice its standard error (otherwise “network noise”), and they don’t count as fastest.
* Benchmarks are currently run manually but may be automated in the future.