# Minifier Benchmarks

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)).

Two tests are run: One exclusively applying [HTML minification](#1-html-minification-compared) (with the most aggressive settings that do not impact conformance), the other [enabling all minification features](#2-maximum-minification-compared) the respective minifier offers (this is play—it’s not a fair comparison and may exceed project needs).

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by maximum effectiveness](#2-maximum-minification-compared) (all minification and tree-shaking options enabled), and by the respective processing times
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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 87<br>(–17.1%) | ***85<br>(–19.3%)*** | 89<br>(–15.2%) | 86<br>(–18.2%) | 86<br>(–18.5%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 60<br>(–5.7%) | ***58<br>(–8.2%)*** | 59<br>(–7.1%) | 59<br>(–8.2%) | 59<br>(–8%) | 59<br>(–7.1%) |
| [BBC](https://www.bbc.co.uk/) | 668 | 664<br>(–0.6%) | 658<br>(–1.5%) | n/a | ***658<br>(–1.5%)*** | 660<br>(–1.1%) | 663<br>(–0.8%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 34<br>(–6.7%) | 33<br>(–8.7%) | 35<br>(–2.5%) | ***33<br>(–9%)*** | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [CERN](https://home.cern/) | 291 | 279<br>(–4%) | 275<br>(–5.6%) | 279<br>(–4.2%) | ***272<br>(–6.6%)*** | 277<br>(–4.7%) | 279<br>(–4.3%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–0.7%) | ***112<br>(–1.2%)*** | 112<br>(–0.7%) | 112<br>(–1.1%) | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [DIN](https://www.din.de/) | 256 | 184<br>(–28.3%) | ***178<br>(–30.6%)*** | 185<br>(–27.8%) | 179<br>(–30.3%) | 182<br>(–29%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 544 | 541<br>(–0.6%) | ***538<br>(–1.1%)*** | n/a | 539<br>(–1%) | 539<br>(–0.9%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7448 | 7084<br>(–4.9%) | 6838<br>(–8.2%) | n/a | ***6832<br>(–8.3%)*** | 6986<br>(–6.2%) | 7011<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 77<br>(–7.7%) | ***77<br>(–8.3%)*** | 78<br>(–6.6%) | 77<br>(–8.2%) | 77<br>(–7.9%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 55 | 51<br>(–7.8%) | ***48<br>(–12.8%)*** | 51<br>(–7.6%) | 48<br>(–12.7%) | 49<br>(–11%) | 50<br>(–9.4%) |
| [ELLE](https://www.elle.com/) | 720 | 715<br>(–0.7%) | ***710<br>(–1.4%)*** | n/a | 711<br>(–1.2%) | 712<br>(–1.1%) | 714<br>(–0.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.1%) | 33<br>(–33.9%) | 33<br>(–32.9%) | ***33<br>(–33.9%)*** | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 442 | 437<br>(–1.2%) | ***434<br>(–1.8%)*** | n/a | 434<br>(–1.7%) | 434<br>(–1.7%) | 439<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 289<br>(–3.1%) | 286<br>(–4.1%) | n/a | ***286<br>(–4.2%)*** | 286<br>(–4%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 206<br>(–2.7%) | ***193<br>(–8.8%)*** | 205<br>(–2.9%) | 196<br>(–7.1%) | 204<br>(–3.4%) | 206<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1593 | 1538<br>(–3.4%) | ***1456<br>(–8.6%)*** | n/a | 1529<br>(–4%) | 1533<br>(–3.7%) | 1533<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 186 | 136<br>(–26.8%) | 135<br>(–27.5%) | 136<br>(–26.6%) | ***134<br>(–27.5%)*** | 135<br>(–27.4%) | 136<br>(–26.7%) |
| [Front-End Social](https://front-end.social/) | 54 | 52<br>(–4.6%) | ***50<br>(–7.2%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 238<br>(+4.2%) | 229<br>(0%) | ***228<br>(–0.2%)*** | 229<br>(0%) | 229<br>(0%) | 247<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | ***11<br>(–26.3%)*** | 12<br>(–18.2%) | 11<br>(–26.3%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1857 | 1834<br>(–1.2%) | ***1811<br>(–2.5%)*** | n/a | 1822<br>(–1.9%) | 1825<br>(–1.7%) | 1843<br>(–0.8%) |
| [Ground News](https://ground.news/) | 3112 | 3089<br>(–0.7%) | ***3040<br>(–2.3%)*** | n/a | 3063<br>(–1.6%) | 3089<br>(–0.8%) | 3098<br>(–0.5%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 120<br>(–2.2%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 301 | 261<br>(–13.3%) | ***252<br>(–16.3%)*** | n/a | 253<br>(–15.8%) | 257<br>(–14.7%) | 259<br>(–13.9%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.6%) | ***32<br>(–61.8%)*** | 35<br>(–58%) | 32<br>(–61.1%) | 34<br>(–59.5%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–21.5%) | 33<br>(–23.9%) | 34<br>(–22.7%) | ***33<br>(–24.4%)*** | 33<br>(–23.4%) | 34<br>(–23%) |
| [KoRo](https://www.koro.com/) | 930 | 877<br>(–5.7%) | 872<br>(–6.3%) | n/a | ***867<br>(–6.8%)*** | 881<br>(–5.3%) | 901<br>(–3.1%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–6.1%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 509 | 504<br>(–1.1%) | 490<br>(–3.8%) | n/a | ***487<br>(–4.4%)*** | 501<br>(–1.7%) | 501<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | 12<br>(–30.3%) | 12<br>(–27.3%) | ***12<br>(–30.6%)*** | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 48<br>(–4.5%) | ***46<br>(–7%)*** | 48<br>(–3.7%) | 46<br>(–7%) | 46<br>(–7%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 115 | 69<br>(–40.3%) | ***67<br>(–41.9%)*** | 70<br>(–38.8%) | 69<br>(–40.4%) | 68<br>(–41.2%) | 70<br>(–39.2%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 306<br>(–11.5%) | 302<br>(–12.8%) | n/a | ***299<br>(–13.6%)*** | 304<br>(–12.1%) | 305<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 465 | 450<br>(–3.2%) | ***372<br>(–19.9%)*** | n/a | 382<br>(–17.8%) | 454<br>(–2.4%) | 464<br>(–0.2%) |
| [Mondoweiss](https://mondoweiss.net/) | 346 | 334<br>(–3.7%) | ***327<br>(–5.5%)*** | n/a | 327<br>(–5.5%) | 331<br>(–4.3%) | 332<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | ***35<br>(–25.9%)*** | 36<br>(–22.2%) | 35<br>(–25.9%) | 35<br>(–25.6%) | 36<br>(–23%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 120<br>(–2.9%) | 118<br>(–4.3%) | 120<br>(–2.8%) | ***117<br>(–5.4%)*** | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Opera](https://www.opera.com/) | 186 | 137<br>(–26.1%) | ***134<br>(–28.1%)*** | 137<br>(–26.4%) | 135<br>(–27.1%) | 136<br>(–26.8%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 178 | 150<br>(–15.9%) | ***147<br>(–17.2%)*** | 150<br>(–15.9%) | 149<br>(–16.5%) | 148<br>(–16.8%) | 150<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 147 | 144<br>(–2%) | ***141<br>(–3.6%)*** | 143<br>(–2.2%) | 142<br>(–3.5%) | 142<br>(–3%) | 143<br>(–2.2%) |
| [Piccalilli](https://piccalil.li/) | 78 | 76<br>(–2.8%) | 75<br>(–4.2%) | 76<br>(–2.3%) | ***75<br>(–4.3%)*** | 75<br>(–4%) | 76<br>(–2.4%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | ***29<br>(–23%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 139 | 138<br>(–1%) | 137<br>(–1.4%) | 137<br>(–1.2%) | ***136<br>(–2.4%)*** | 137<br>(–1.4%) | 137<br>(–1.3%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 70<br>(–1.7%) | ***67<br>(–5.9%)*** | 69<br>(–2%) | 67<br>(–5.3%) | 69<br>(–2.2%) | 69<br>(–2%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | 30<br>(–10.7%) | 32<br>(–7.3%) | ***30<br>(–10.7%)*** | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–13.1%) | ***17<br>(–17.6%)*** | 18<br>(–13.5%) | 17<br>(–17.5%) | 18<br>(–16.3%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 228 | 225<br>(–1.3%) | ***224<br>(–1.7%)*** | 227<br>(–0.7%) | 224<br>(–1.6%) | 226<br>(–0.9%) | 227<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 289 | 290<br>(+0.2%) | ***288<br>(–0.6%)*** | 289<br>(–0.1%) | 288<br>(–0.4%) | 288<br>(–0.4%) | 289<br>(+0%) |
| [Startpage](https://www.startpage.com/) | 22 | 21<br>(–2.4%) | ***21<br>(–2.6%)*** | 21<br>(–2.1%) | 21<br>(–2.5%) | 21<br>(–2.3%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 56 | 41<br>(–26.1%) | ***39<br>(–30.1%)*** | 41<br>(–27%) | 40<br>(–29.3%) | 40<br>(–28%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 464 | 433<br>(–6.6%) | ***406<br>(–12.5%)*** | n/a | 417<br>(–10.1%) | 429<br>(–7.5%) | 430<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.4%) | ***88<br>(–6.5%)*** | 89<br>(–6%) | 88<br>(–6.5%) | 89<br>(–6.2%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 125 | 112<br>(–10.6%) | ***108<br>(–13.6%)*** | 115<br>(–8.3%) | 109<br>(–13.1%) | 111<br>(–11.5%) | 115<br>(–8.3%) |
| [TPGi](https://www.tpgi.com/) | 195 | 175<br>(–10%) | ***175<br>(–10.3%)*** | 179<br>(–8.2%) | 175<br>(–10.1%) | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 255 | 217<br>(–14.6%) | ***213<br>(–16.4%)*** | 226<br>(–11.2%) | 215<br>(–15.7%) | 216<br>(–15.4%) | 226<br>(–11.2%) |
| [United Nations](https://www.un.org/en/) | 161 | 140<br>(–13%) | 133<br>(–17.1%) | 140<br>(–13%) | ***133<br>(–17.2%)*** | 137<br>(–14.5%) | 139<br>(–13.3%) |
| [Vivaldi](https://vivaldi.com/) | 92 | 84<br>(–8.9%) | ***82<br>(–10.8%)*** | 84<br>(–9.4%) | 83<br>(–10.7%) | 83<br>(–10.5%) | 84<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 48 | 39<br>(–18.4%) | ***38<br>(–20.1%)*** | 39<br>(–18.5%) | 38<br>(–19.8%) | 38<br>(–19.7%) | 39<br>(–18.4%) |
| [WordPress Blog](https://wordpress.com/blog/) | 222 | 205<br>(–7.6%) | ***201<br>(–9.1%)*** | 205<br>(–7.3%) | 202<br>(–9%) | 203<br>(–8.3%) | 206<br>(–7%) |
| [博客园](https://www.cnblogs.com/) | 79 | 56<br>(–29.1%) | ***56<br>(–29.5%)*** | 57<br>(–28.4%) | 56<br>(–29.4%) | 57<br>(–28.7%) | 57<br>(–28.1%) |
| [稀土掘金](https://juejin.cn/) | 77 | 75<br>(–3.3%) | ***73<br>(–6%)*** | 75<br>(–3.3%) | 74<br>(–4%) | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 63/63 | 63/63 | 47/63 | 63/63 | 63/63 | 63/63 |
| **Average processing time** |  | 28 ms | 29 ms | 1065 ms | 42 ms | ***8 ms*** | 160 ms |
| **Average result (KB)** | 403 | 383<br>(–5%) | ***372<br>(–7.6%)*** | 394<br>(–2.3%) | 374<br>(–7.1%) | 380<br>(–5.7%) | 383<br>(–5%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 82<br>(–21.9%) | 78<br>(–25.3%) | 84<br>(–19.6%) | ***78<br>(–25.8%)*** | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.2%) | 42<br>(–33.9%) | 57<br>(–9.9%) | ***39<br>(–38.8%)*** | 56<br>(–11.4%) | 59<br>(–7.1%) |
| [BBC](https://www.bbc.co.uk/) | 668 | 630<br>(–5.6%) | ***616<br>(–7.8%)*** | n/a | 618<br>(–7.4%) | 627<br>(–6.2%) | 663<br>(–0.8%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–6.8%) | ***32<br>(–10.1%)*** | 35<br>(–2.6%) | 32<br>(–9.9%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [CERN](https://home.cern/) | 291 | 263<br>(–9.5%) | 229<br>(–21.3%) | 269<br>(–7.7%) | ***209<br>(–28.1%)*** | 262<br>(–9.8%) | 279<br>(–4.3%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 108<br>(–4.5%) | 85<br>(–24.8%) | 112<br>(–1.1%) | ***85<br>(–25%)*** | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [DIN](https://www.din.de/) | 256 | 177<br>(–30.9%) | 134<br>(–47.6%) | 178<br>(–30.6%) | ***132<br>(–48.4%)*** | 176<br>(–31.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 544 | 511<br>(–6.1%) | 502<br>(–7.7%) | n/a | ***497<br>(–8.8%)*** | 503<br>(–7.5%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7448 | 7084<br>(–4.9%) | 6837<br>(–8.2%) | n/a | ***6831<br>(–8.3%)*** | 6986<br>(–6.2%) | 7011<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 74<br>(–11.1%) | 56<br>(–33.6%) | 76<br>(–9.5%) | ***54<br>(–35.4%)*** | 74<br>(–11.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 55 | 49<br>(–10.6%) | ***45<br>(–18.8%)*** | 50<br>(–9.8%) | 45<br>(–18.7%) | 49<br>(–11.9%) | 50<br>(–9.4%) |
| [ELLE](https://www.elle.com/) | 720 | 704<br>(–2.2%) | ***691<br>(–4%)*** | n/a | 697<br>(–3.1%) | 702<br>(–2.5%) | 714<br>(–0.7%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.2%) | 31<br>(–37.7%) | 33<br>(–33%) | ***31<br>(–37.7%)*** | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 442 | 431<br>(–2.3%) | 122<br>(–72.4%) | n/a | ***108<br>(–75.4%)*** | 429<br>(–2.9%) | 439<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 285<br>(–4.5%) | 258<br>(–13.4%) | n/a | ***240<br>(–19.4%)*** | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 197<br>(–6.7%) | 156<br>(–26.3%) | 200<br>(–5.3%) | ***141<br>(–33.4%)*** | 196<br>(–7.3%) | 206<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1593 | 1470<br>(–7.7%) | 1346<br>(–15.5%) | n/a | ***1328<br>(–16.6%)*** | 1528<br>(–4.1%) | 1533<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 186 | 129<br>(–30.4%) | 55<br>(–70.2%) | 130<br>(–29.8%) | ***55<br>(–70.5%)*** | 128<br>(–30.8%) | 136<br>(–26.7%) |
| [Front-End Social](https://front-end.social/) | 54 | 51<br>(–5.6%) | 47<br>(–13.7%) | 52<br>(–4%) | ***47<br>(–13.8%)*** | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 238<br>(+4.2%) | 221<br>(–3.2%) | 228<br>(–0.2%) | ***221<br>(–3.5%)*** | 229<br>(0%) | 247<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | 10<br>(–30.4%) | 12<br>(–18.2%) | ***10<br>(–30.4%)*** | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1857 | 1803<br>(–2.9%) | ***1435<br>(–22.7%)*** | n/a | n/a | 1804<br>(–2.9%) | 1843<br>(–0.8%) |
| [Ground News](https://ground.news/) | 3112 | 2910<br>(–6.5%) | ***2824<br>(–9.2%)*** | n/a | 2853<br>(–8.3%) | 2902<br>(–6.7%) | 3098<br>(–0.5%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.4%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 301 | 257<br>(–14.4%) | 242<br>(–19.7%) | n/a | ***241<br>(–19.9%)*** | 256<br>(–15%) | 259<br>(–13.9%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.8%) | ***31<br>(–62.5%)*** | 35<br>(–58.2%) | 32<br>(–61.9%) | 33<br>(–59.6%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–23.1%) | 32<br>(–26.3%) | 33<br>(–23.7%) | ***32<br>(–27.1%)*** | 33<br>(–24.8%) | 34<br>(–23%) |
| [KoRo](https://www.koro.com/) | 930 | 873<br>(–6.2%) | ***861<br>(–7.5%)*** | n/a | 879<br>(–5.5%) | 877<br>(–5.7%) | 901<br>(–3.1%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | 26<br>(–9%) | 28<br>(–5%) | ***25<br>(–14.9%)*** | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 509 | 485<br>(–4.8%) | 462<br>(–9.2%) | n/a | ***458<br>(–10.1%)*** | 481<br>(–5.5%) | 501<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–46.8%) | 10<br>(–42.7%) | ***9<br>(–47.3%)*** | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 47<br>(–5.4%) | 43<br>(–13.8%) | 48<br>(–3.9%) | ***43<br>(–14%)*** | 46<br>(–7.2%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 115 | 69<br>(–40.4%) | 66<br>(–43%) | 70<br>(–38.9%) | ***56<br>(–51.1%)*** | 68<br>(–41.3%) | 70<br>(–39.2%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 305<br>(–11.8%) | 224<br>(–35.3%) | n/a | ***218<br>(–37%)*** | 304<br>(–12.2%) | 305<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 465 | 446<br>(–4%) | 284<br>(–38.8%) | n/a | ***283<br>(–39.2%)*** | 451<br>(–3%) | 464<br>(–0.2%) |
| [Mondoweiss](https://mondoweiss.net/) | 346 | 327<br>(–5.6%) | 306<br>(–11.8%) | n/a | ***303<br>(–12.4%)*** | 321<br>(–7.2%) | 332<br>(–4%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | ***32<br>(–31.8%)*** | 36<br>(–22.2%) | 32<br>(–31.1%) | 35<br>(–25.6%) | 36<br>(–23%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 114<br>(–7.4%) | 87<br>(–29.1%) | 116<br>(–5.8%) | ***61<br>(–50.2%)*** | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Opera](https://www.opera.com/) | 186 | 132<br>(–28.7%) | ***84<br>(–54.6%)*** | 136<br>(–26.6%) | 85<br>(–54.1%) | 132<br>(–29.1%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 178 | 150<br>(–16%) | 146<br>(–17.9%) | 150<br>(–15.9%) | ***140<br>(–21.3%)*** | 148<br>(–16.9%) | 150<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 147 | 137<br>(–6.9%) | 95<br>(–35%) | 140<br>(–4.7%) | ***73<br>(–50.1%)*** | 135<br>(–7.7%) | 143<br>(–2.2%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4%) | 64<br>(–18%) | 76<br>(–3%) | ***49<br>(–36.9%)*** | 74<br>(–4.9%) | 76<br>(–2.4%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | 22<br>(–41.7%) | 32<br>(–13.5%) | ***22<br>(–41.8%)*** | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 139 | 123<br>(–11.5%) | 117<br>(–16.2%) | 137<br>(–1.4%) | ***115<br>(–17.4%)*** | 122<br>(–11.9%) | 137<br>(–1.3%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 65<br>(–8.5%) | 46<br>(–35.4%) | 66<br>(–6.6%) | ***42<br>(–40.3%)*** | 65<br>(–8.1%) | 69<br>(–2%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | 30<br>(–10.9%) | 32<br>(–7.3%) | ***30<br>(–11.1%)*** | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14%) | ***17<br>(–19.2%)*** | 18<br>(–14.2%) | 17<br>(–18.4%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 228 | 217<br>(–4.8%) | ***205<br>(–10%)*** | 219<br>(–4.2%) | 206<br>(–9.9%) | 217<br>(–4.7%) | 227<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 289 | 288<br>(–0.3%) | 277<br>(–4.2%) | 289<br>(–0.1%) | ***274<br>(–5.1%)*** | 287<br>(–0.9%) | 289<br>(+0%) |
| [Startpage](https://www.startpage.com/) | 22 | 19<br>(–13.7%) | 16<br>(–25.6%) | 19<br>(–13%) | ***16<br>(–27.2%)*** | 20<br>(–6%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 56 | 41<br>(–26.2%) | ***38<br>(–32.1%)*** | 41<br>(–27.1%) | 38<br>(–31.4%) | 40<br>(–28.2%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 464 | 419<br>(–9.6%) | ***381<br>(–17.9%)*** | n/a | 398<br>(–14.2%) | 420<br>(–9.4%) | 430<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.5%) | 85<br>(–10.4%) | 89<br>(–6.1%) | ***84<br>(–11%)*** | 88<br>(–6.3%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 125 | 106<br>(–15.3%) | 91<br>(–27.5%) | 112<br>(–10.9%) | ***90<br>(–28.2%)*** | 106<br>(–15%) | 115<br>(–8.3%) |
| [TPGi](https://www.tpgi.com/) | 195 | 151<br>(–22.6%) | 133<br>(–31.6%) | 159<br>(–18.7%) | ***130<br>(–33.1%)*** | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 255 | 199<br>(–21.7%) | 194<br>(–23.8%) | 210<br>(–17.7%) | ***179<br>(–29.9%)*** | 198<br>(–22.4%) | 226<br>(–11.2%) |
| [United Nations](https://www.un.org/en/) | 161 | 136<br>(–15.6%) | 100<br>(–37.6%) | 129<br>(–19.6%) | ***88<br>(–45.2%)*** | 134<br>(–16.9%) | 139<br>(–13.3%) |
| [Vivaldi](https://vivaldi.com/) | 92 | 81<br>(–12.2%) | 64<br>(–30.6%) | 82<br>(–11.7%) | ***64<br>(–31.1%)*** | 80<br>(–13%) | 84<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 48 | 37<br>(–22.3%) | ***34<br>(–28.6%)*** | 37<br>(–22.4%) | 34<br>(–28.4%) | 37<br>(–23.6%) | 39<br>(–18.4%) |
| [WordPress Blog](https://wordpress.com/blog/) | 222 | 183<br>(–17.5%) | 154<br>(–30.5%) | 192<br>(–13.4%) | ***151<br>(–31.7%)*** | 190<br>(–14.3%) | 206<br>(–7%) |
| [博客园](https://www.cnblogs.com/) | 79 | 56<br>(–29.7%) | 53<br>(–33.6%) | 57<br>(–28.6%) | ***49<br>(–38.5%)*** | 57<br>(–28.9%) | 57<br>(–28.1%) |
| [稀土掘金](https://juejin.cn/) | 77 | 66<br>(–14%) | 64<br>(–16.6%) | 73<br>(–5.9%) | ***59<br>(–23.5%)*** | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 63/63 | 63/63 | 47/63 | 62/63 | 63/63 | 63/63 |
| **Average processing time** |  | 31 ms | 55 ms | 1784 ms | 193 ms | ***10 ms*** | 165 ms |
| **Average result (KB)** | 403 | 373<br>(–7.4%) | ***339<br>(–16%)*** | 392<br>(–2.8%) | 343<br>(–15%) | 372<br>(–7.8%) | 383<br>(–5%) |

Benchmarks last updated: Oct 1, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - htmlcompressor.com incorrectly converts no-break spaces to spaces which can give an impression of greater effectiveness (last confirmed Apr 4, 2026).
  - Minimize only minifies HTML.
  - HTML Minifier Terser is not included in the benchmarks due to issues around whitespace collapsing and removal of code using modern CSS features, issues which distort the data at the expense of minifier users.
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
* Benchmarks are currently run manually (on a 2024 Apple Mac Mini) but may be automated in the future.