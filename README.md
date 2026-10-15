# Minifier Benchmarks

A collection of regularly updated benchmarks for web page minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)). Visit [the **Minifier
Benchmarks Project** website](https://j9t.github.io/minifier-benchmarks/) for interactive results.

Two tests are run: One exclusively applying [HTML minification](#1-html-minification-compared) (with the most aggressive settings that do not impact conformance), the other [enabling all minification features](#2-maximum-minification-compared) the respective minifier offers that keep output conformant (this is play—it’s not a fair comparison and may exceed project needs).

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by maximum effectiveness](#2-maximum-minification-compared) (all conformant minification and tree-shaking options enabled), and by the respective processing times
* **🧑‍🏭 Minifier author?** [Add and configure your minifier and become a co-owner](https://github.com/j9t/minifier-benchmarks/compare)
* **💁 Innocent bystander?** [Please share observations and suggestions](https://github.com/j9t/minifier-benchmarks/issues)

## 0. Minifier Overview

| | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Last npm update** | ![npm @swc/html](https://img.shields.io/npm/last-update/@swc/html) | ![npm HTML Minifier Next](https://img.shields.io/npm/last-update/html-minifier-next) | ![npm HTML Minifier Terser](https://img.shields.io/npm/last-update/html-minifier-terser) | n/a | ![npm htmlnano](https://img.shields.io/npm/last-update/htmlnano) | ![npm minify](https://img.shields.io/npm/last-update/@tdewolff/minify) | ![npm minify-html](https://img.shields.io/npm/last-update/@minify-html/node) | ![npm minimize](https://img.shields.io/npm/last-update/minimize) |
| **Socket health status** | [![Socket @swc/html](https://badge.socket.dev/npm/package/@swc/html)](https://socket.dev/npm/package/@swc/html) | [![Socket HTML Minifier Next](https://badge.socket.dev/npm/package/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [![Socket HTML Minifier Terser](https://badge.socket.dev/npm/package/html-minifier-terser)](https://socket.dev/npm/package/html-minifier-terser) | n/a | [![Socket htmlnano](https://badge.socket.dev/npm/package/htmlnano)](https://socket.dev/npm/package/htmlnano) | [![Socket minify](https://badge.socket.dev/npm/package/@tdewolff/minify)](https://socket.dev/npm/package/@tdewolff/minify) | [![Socket minify-html](https://badge.socket.dev/npm/package/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [![Socket minimize](https://badge.socket.dev/npm/package/minimize)](https://socket.dev/npm/package/minimize) |
| **GitHub sponsors** (please support your minifier) | [![Sponsors @swc/html](https://img.shields.io/github/sponsors/swc-project)](https://github.com/sponsors/swc-project) | [![Sponsors HTML Minifier Next](https://img.shields.io/github/sponsors/j9t)](https://github.com/sponsors/j9t) | [![Sponsors HTML Minifier Terser](https://img.shields.io/github/sponsors/terser)](https://github.com/sponsors/terser) | n/a | [![Sponsors htmlnano](https://img.shields.io/github/sponsors/maltsev)](https://github.com/sponsors/maltsev) | [![Sponsors minify](https://img.shields.io/github/sponsors/tdewolff)](https://github.com/sponsors/tdewolff) | [![Sponsors minify-html](https://img.shields.io/github/sponsors/wilsonzlin)](https://github.com/sponsors/wilsonzlin) | [![Sponsors minimize](https://img.shields.io/github/sponsors/Swaagie)](https://github.com/sponsors/Swaagie) |

<!--
| **Dependencies status** | ![Dependencies @swc/html](https://img.shields.io/depfu/dependencies/github/swc-project/swc) | ![Dependencies HTML Minifier Next](https://img.shields.io/depfu/dependencies/github/j9t/html-minifier-next) | ![Dependencies HTML Minifier Terser](https://img.shields.io/depfu/dependencies/github/terser/html-minifier-terser) | n/a | ![Dependencies htmlnano](https://img.shields.io/depfu/dependencies/github/maltsev/htmlnano) | ![Dependencies minify](https://img.shields.io/depfu/dependencies/github/tdewolff/minify) | ![Dependencies minify-html](https://img.shields.io/depfu/dependencies/github/wilsonzlin/minify-html) | ![Dependencies minimize](https://img.shields.io/depfu/dependencies/github/Swaagie/minimize) |
| **Code coverage** | ![Coverage @swc/html](https://img.shields.io/codecov/c/github/swc-project/swc) | ![Coverage HTML Minifier Next](https://img.shields.io/codecov/c/github/j9t/html-minifier-next) | ![Coverage HTML Minifier Terser](https://img.shields.io/codecov/c/github/terser/html-minifier-terser) | n/a | ![Coverage htmlnano](https://img.shields.io/codecov/c/github/maltsev/htmlnano) | ![Coverage minify](https://img.shields.io/codecov/c/github/tdewolff/minify) | ![Coverage minify-html](https://img.shields.io/codecov/c/github/wilsonzlin/minify-html) | ![Coverage minimize](https://img.shields.io/codecov/c/github/Swaagie/minimize) |
| **Quality score** | ![Quality @swc/html](https://img.shields.io/npms-io/quality-score/@swc/html) | ![Quality HTML Minifier Next](https://img.shields.io/npms-io/quality-score/html-minifier-next) | ![Quality HTML Minifier Terser](https://img.shields.io/npms-io/quality-score/html-minifier-terser) | n/a | ![Quality htmlnano](https://img.shields.io/npms-io/quality-score/htmlnano) | ![Quality minify](https://img.shields.io/npms-io/quality-score/@tdewolff/minify) | ![Quality minify-html](https://img.shields.io/npms-io/quality-score/@minify-html/node) | ![Quality minimize](https://img.shields.io/npms-io/quality-score/minimize) |
| **Unpacked size** | ![Size @swc/html](https://img.shields.io/npm/unpacked-size/@swc/html) | ![Size HTML Minifier Next](https://img.shields.io/npm/unpacked-size/html-minifier-next) | ![Size HTML Minifier Terser](https://img.shields.io/npm/unpacked-size/html-minifier-terser) | n/a | ![Size htmlnano](https://img.shields.io/npm/unpacked-size/htmlnano) | ![Size minify](https://img.shields.io/npm/unpacked-size/@tdewolff/minify) | ![Size minify-html](https://img.shields.io/npm/unpacked-size/@minify-html/node) | ![Size minimize](https://img.shields.io/npm/unpacked-size/minimize) |
-->

<!-- Auto-generated benchmarks, don't edit -->
## 1. HTML Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 87<br>(–17.1%) | ***85<br>(–19.3%)*** | 89<br>(–15.1%) | 86<br>(–18%) | n/a | 86<br>(–18.5%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 60<br>(–5.7%) | ***58<br>(–8.3%)*** | 59<br>(–7.1%) | 59<br>(–8.2%) | n/a | 59<br>(–8%) | 59<br>(–7.1%) |
| [AfricTivistes](https://www.africtivistes.org/) | 497 | 446<br>(–10.3%) | 431<br>(–13.4%) | n/a | ***428<br>(–14%)*** | n/a | 442<br>(–11%) | 489<br>(–1.5%) |
| [BBC](https://www.bbc.co.uk/) | 707 | 703<br>(–0.6%) | 697<br>(–1.4%) | n/a | ***697<br>(–1.5%)*** | n/a | 699<br>(–1.1%) | 702<br>(–0.8%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 34<br>(–6.7%) | ***33<br>(–8.7%)*** | 35<br>(–2.3%) | 33<br>(–8.6%) | n/a | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [CERN](https://home.cern/) | 291 | 280<br>(–4%) | 275<br>(–5.5%) | 279<br>(–4.1%) | ***272<br>(–6.5%)*** | n/a | 278<br>(–4.7%) | 279<br>(–4.3%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–0.7%) | ***112<br>(–1.2%)*** | 112<br>(–0.6%) | 112<br>(–1%) | n/a | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 110 | 97<br>(–11.8%) | ***96<br>(–13.5%)*** | 100<br>(–9.9%) | 97<br>(–12.1%) | n/a | 97<br>(–12.2%) | 100<br>(–9.5%) |
| [DIN](https://www.din.de/) | 256 | 184<br>(–28.3%) | ***178<br>(–30.6%)*** | 185<br>(–27.7%) | 179<br>(–30.2%) | n/a | 182<br>(–29%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 544 | 541<br>(–0.6%) | ***538<br>(–1.1%)*** | n/a | 538<br>(–1%) | n/a | 539<br>(–0.9%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7450 | 7085<br>(–4.9%) | ***6840<br>(–8.2%)*** | n/a | 6895<br>(–7.5%) | n/a | 6988<br>(–6.2%) | 7013<br>(–5.9%) |
| [EFF](https://www.eff.org/) | 54 | 49<br>(–8.2%) | ***47<br>(–13.2%)*** | 50<br>(–7.9%) | 47<br>(–12.4%) | n/a | 48<br>(–11.4%) | 49<br>(–9.8%) |
| [ELLE](https://www.elle.com/) | 737 | 732<br>(–0.7%) | ***727<br>(–1.4%)*** | n/a | 729<br>(–1.1%) | n/a | 729<br>(–1.1%) | 732<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 194<br>(–18.9%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | n/a | 189<br>(–21.4%) | 205<br>(–14.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.1%) | 33<br>(–33.8%) | 33<br>(–32.9%) | ***33<br>(–33.9%)*** | n/a | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 434<br>(–1.1%) | ***431<br>(–1.8%)*** | n/a | 431<br>(–1.7%) | n/a | 431<br>(–1.7%) | 436<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 289<br>(–3.1%) | 286<br>(–4.1%) | n/a | ***285<br>(–4.2%)*** | n/a | 286<br>(–3.9%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 205<br>(–2.7%) | ***192<br>(–8.8%)*** | 205<br>(–2.6%) | 196<br>(–7.1%) | n/a | 204<br>(–3.4%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1366 | 1320<br>(–3.4%) | ***1228<br>(–10.1%)*** | n/a | 1304<br>(–4.6%) | n/a | 1308<br>(–4.3%) | 1307<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 949 | 824<br>(–13.2%) | ***778<br>(–18%)*** | n/a | 824<br>(–13.2%) | n/a | 827<br>(–12.8%) | 825<br>(–13.1%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 185 | 137<br>(–26.2%) | 135<br>(–26.9%) | 137<br>(–26.1%) | ***135<br>(–27%)*** | n/a | 135<br>(–26.8%) | 137<br>(–26.2%) |
| [Front-End Social](https://front-end.social/) | 54 | 52<br>(–4.6%) | ***50<br>(–7.2%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | n/a | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 237<br>(+4.2%) | 228<br>(0%) | ***227<br>(–0.2%)*** | 228<br>(0%) | n/a | 228<br>(0%) | 246<br>(+8.1%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | ***11<br>(–26.4%)*** | 12<br>(–17%) | 11<br>(–26.3%) | n/a | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1838 | 1815<br>(–1.2%) | ***1792<br>(–2.5%)*** | n/a | 1804<br>(–1.8%) | n/a | 1807<br>(–1.7%) | 1824<br>(–0.8%) |
| [Ground News](https://ground.news/) | 1820 | 1798<br>(–1.2%) | ***1748<br>(–4%)*** | n/a | 1773<br>(–2.6%) | n/a | 1797<br>(–1.2%) | 1806<br>(–0.7%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 360 | 337<br>(–6.3%) | ***332<br>(–7.6%)*** | n/a | 333<br>(–7.4%) | n/a | 335<br>(–7%) | 340<br>(–5.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 120<br>(–2.2%) | n/a | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | n/a | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 271 | 234<br>(–13.5%) | ***226<br>(–16.7%)*** | 233<br>(–14%) | 227<br>(–16.3%) | n/a | 230<br>(–15%) | 232<br>(–14.2%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.4%) | ***32<br>(–61.9%)*** | 35<br>(–57.5%) | 32<br>(–61.2%) | n/a | 33<br>(–59.6%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 35<br>(–21.5%) | 33<br>(–23.9%) | 34<br>(–22.4%) | ***33<br>(–24.4%)*** | n/a | 34<br>(–23.4%) | 34<br>(–23%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 363<br>(–12.2%) | ***356<br>(–13.9%)*** | n/a | 357<br>(–13.7%) | n/a | 361<br>(–12.9%) | 402<br>(–2.9%) |
| [KoRo](https://www.koro.com/) | 1006 | 949<br>(–5.6%) | 941<br>(–6.4%) | n/a | ***940<br>(–6.5%)*** | n/a | 954<br>(–5.2%) | 977<br>(–2.9%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–6.1%) | n/a | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 527 | 522<br>(–1%) | 506<br>(–4%) | n/a | ***503<br>(–4.5%)*** | n/a | 518<br>(–1.8%) | 518<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27%) | 12<br>(–30.2%) | n/a | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 48<br>(–4.5%) | ***47<br>(–7.1%)*** | 48<br>(–3.7%) | 47<br>(–7.1%) | n/a | 47<br>(–7%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.1%) | ***69<br>(–41.8%)*** | 73<br>(–38.7%) | 71<br>(–40.3%) | n/a | 70<br>(–41.1%) | 72<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 306<br>(–11.5%) | ***297<br>(–14.2%)*** | n/a | 299<br>(–13.6%) | n/a | 304<br>(–12.1%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 333 | 323<br>(–3.2%) | ***270<br>(–18.9%)*** | n/a | 281<br>(–15.6%) | n/a | 322<br>(–3.5%) | 331<br>(–0.8%) |
| [Mondoweiss](https://mondoweiss.net/) | 343 | 331<br>(–3.7%) | ***324<br>(–5.6%)*** | n/a | 325<br>(–5.5%) | n/a | 328<br>(–4.4%) | 330<br>(–4.1%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | ***35<br>(–25.9%)*** | 36<br>(–22.1%) | 35<br>(–25.8%) | n/a | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [Nikkei](https://www.nikkei.com/) | 709 | 671<br>(–5.4%) | ***642<br>(–9.5%)*** | n/a | 658<br>(–7.2%) | n/a | 661<br>(–6.7%) | 700<br>(–1.3%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 120<br>(–2.9%) | 118<br>(–4.3%) | 120<br>(–2.8%) | ***117<br>(–5.3%)*** | n/a | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Opera](https://www.opera.com/) | 186 | 137<br>(–26%) | ***134<br>(–28.1%)*** | 137<br>(–26.2%) | 135<br>(–27.1%) | n/a | 136<br>(–26.7%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 177 | 149<br>(–15.9%) | ***146<br>(–17.2%)*** | 149<br>(–15.8%) | 148<br>(–16.5%) | n/a | 147<br>(–16.8%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 143<br>(–2%) | ***141<br>(–3.6%)*** | 143<br>(–2.2%) | 141<br>(–3.5%) | n/a | 142<br>(–3%) | 143<br>(–2.2%) |
| [Piccalilli](https://piccalil.li/) | 78 | 76<br>(–2.8%) | ***75<br>(–4.2%)*** | 76<br>(–2.3%) | 75<br>(–4.2%) | n/a | 75<br>(–4%) | 76<br>(–2.4%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | ***29<br>(–22.9%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | n/a | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 138 | 137<br>(–1%) | ***136<br>(–1.4%)*** | 136<br>(–1.2%) | 136<br>(–1.4%) | n/a | 136<br>(–1.4%) | 136<br>(–1.3%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 70<br>(–1.7%) | ***67<br>(–6%)*** | 69<br>(–2%) | 67<br>(–5.3%) | n/a | 69<br>(–2.2%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 184 | 173<br>(–5.8%) | ***169<br>(–7.8%)*** | 175<br>(–4.9%) | 170<br>(–7.3%) | n/a | 171<br>(–6.7%) | 175<br>(–4.9%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 30<br>(–10.7%) | n/a | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–13.1%) | ***17<br>(–17.6%)*** | 18<br>(–13.4%) | 17<br>(–17.4%) | n/a | 18<br>(–16.3%) | 18<br>(–14%) |
| [SFLC.in](https://sflc.in/) | 171 | 168<br>(–1.7%) | ***164<br>(–3.6%)*** | 168<br>(–1.4%) | 165<br>(–3.4%) | n/a | 167<br>(–2.2%) | 168<br>(–1.3%) |
| [SitePoint](https://www.sitepoint.com/) | 224 | 221<br>(–1.3%) | ***220<br>(–1.7%)*** | 222<br>(–0.7%) | 220<br>(–1.6%) | n/a | 221<br>(–1%) | 222<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 287 | 288<br>(+0.2%) | ***286<br>(–0.6%)*** | 287<br>(–0.1%) | 286<br>(–0.4%) | n/a | 286<br>(–0.4%) | 287<br>(0%) |
| [Startpage](https://www.startpage.com/) | 22 | 21<br>(–2.4%) | ***21<br>(–2.6%)*** | 21<br>(–2.1%) | 21<br>(–2.5%) | n/a | 21<br>(–2.3%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 57 | 42<br>(–26.2%) | ***39<br>(–30.2%)*** | 41<br>(–27%) | 40<br>(–29.4%) | n/a | 41<br>(–28.1%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 405 | 381<br>(–6%) | ***355<br>(–12.3%)*** | n/a | 372<br>(–8.3%) | n/a | 378<br>(–6.7%) | 379<br>(–6.4%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.4%) | ***88<br>(–6.5%)*** | 89<br>(–6%) | 88<br>(–6.5%) | n/a | 88<br>(–6.2%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 125 | 111<br>(–10.5%) | ***108<br>(–13.6%)*** | 114<br>(–8.2%) | 108<br>(–13%) | n/a | 110<br>(–11.4%) | 114<br>(–8.2%) |
| [TPGi](https://www.tpgi.com/) | 195 | 175<br>(–10%) | ***175<br>(–10.3%)*** | 179<br>(–8.2%) | 176<br>(–9.9%) | n/a | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 449 | 412<br>(–8.3%) | ***215<br>(–52.2%)*** | n/a | 410<br>(–8.7%) | n/a | 410<br>(–8.7%) | 228<br>(–49.3%) |
| [United Nations](https://www.un.org/en/) | 162 | 141<br>(–12.9%) | ***134<br>(–16.9%)*** | 141<br>(–12.9%) | 134<br>(–16.8%) | n/a | 138<br>(–14.3%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 84<br>(–8.9%) | ***83<br>(–10.8%)*** | 84<br>(–9.4%) | 83<br>(–10.5%) | n/a | 83<br>(–10.4%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 49 | 40<br>(–17.9%) | ***40<br>(–19.6%)*** | 40<br>(–17.9%) | 40<br>(–19.2%) | n/a | 40<br>(–19.1%) | 41<br>(–17.9%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 247 | 239<br>(–3.1%) | ***229<br>(–7.5%)*** | 236<br>(–4.6%) | 229<br>(–7.4%) | n/a | 232<br>(–6%) | 236<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 204<br>(–7.7%) | ***201<br>(–9.2%)*** | 205<br>(–7.3%) | 201<br>(–8.9%) | n/a | 202<br>(–8.4%) | 205<br>(–7.2%) |
| [博客园](https://www.cnblogs.com/) | 80 | 57<br>(–29.1%) | ***56<br>(–29.5%)*** | 57<br>(–28.1%) | 56<br>(–29.3%) | n/a | 57<br>(–28.7%) | 57<br>(–28.1%) |
| [稀土掘金](https://juejin.cn/) | 77 | 75<br>(–3.3%) | ***73<br>(–6.1%)*** | 75<br>(–3.3%) | 74<br>(–4%) | n/a | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 72/72 | 72/72 | 51/72 | 72/72 | n/a | 72/72 | 72/72 |
| **Average processing time** |  | 22 ms | 19 ms | 239 ms<br>(estimate) | 36 ms | n/a | ***6 ms*** | 144 ms |
| **Median processing time** |  | 10 ms | 7 ms | 219 ms<br>(estimate) | 16 ms | n/a | ***2 ms*** | 34 ms |
| **Average result (KB)** | 386 | 363<br>(–5.8%) | ***350<br>(–9.4%)*** | 377<br>(–2.3%) | 356<br>(–7.6%) | n/a | 360<br>(–6.6%) | 362<br>(–6.1%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 82<br>(–21.9%) | ***78<br>(–25.3%)*** | 84<br>(–19.6%) | 79<br>(–24.9%) | 82<br>(–21.7%) | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.2%) | 45<br>(–30%) | 57<br>(–9.9%) | ***39<br>(–38.6%)*** | 57<br>(–10.3%) | 56<br>(–11.4%) | 59<br>(–7.1%) |
| [AfricTivistes](https://www.africtivistes.org/) | 497 | 443<br>(–10.8%) | 427<br>(–14%) | n/a | ***420<br>(–15.5%)*** | 439<br>(–11.7%) | 440<br>(–11.5%) | 489<br>(–1.5%) |
| [BBC](https://www.bbc.co.uk/) | 707 | 668<br>(–5.6%) | ***651<br>(–7.9%)*** | n/a | 654<br>(–7.6%) | 674<br>(–4.7%) | 664<br>(–6.2%) | 702<br>(–0.8%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–6.8%) | ***32<br>(–10.1%)*** | 35<br>(–2.6%) | 32<br>(–9.6%) | 34<br>(–6.1%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [CERN](https://home.cern/) | 291 | 264<br>(–9.4%) | 224<br>(–23.1%) | 269<br>(–7.7%) | ***213<br>(–26.9%)*** | 268<br>(–8%) | 263<br>(–9.8%) | 279<br>(–4.3%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 108<br>(–4.5%) | 85<br>(–24.8%) | 112<br>(–1.1%) | ***85<br>(–24.9%)*** | 106<br>(–6.3%) | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 110 | 95<br>(–14.4%) | 66<br>(–40%) | 98<br>(–11.6%) | ***65<br>(–40.9%)*** | 92<br>(–16.5%) | 95<br>(–14.3%) | 100<br>(–9.5%) |
| [DIN](https://www.din.de/) | 256 | 177<br>(–30.9%) | ***134<br>(–47.6%)*** | 178<br>(–30.6%) | 135<br>(–47.4%) | 174<br>(–32.1%) | 176<br>(–31.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 544 | 511<br>(–6.2%) | 502<br>(–7.8%) | n/a | ***496<br>(–8.8%)*** | 501<br>(–7.8%) | 503<br>(–7.6%) | 541<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7450 | 7085<br>(–4.9%) | ***6839<br>(–8.2%)*** | n/a | 6894<br>(–7.5%) | 6956<br>(–6.6%) | 6987<br>(–6.2%) | 7013<br>(–5.9%) |
| [EFF](https://www.eff.org/) | 54 | 48<br>(–11%) | ***44<br>(–19.2%)*** | 48<br>(–10.2%) | 44<br>(–18.3%) | 47<br>(–13.4%) | 47<br>(–12.3%) | 49<br>(–9.8%) |
| [ELLE](https://www.elle.com/) | 737 | 721<br>(–2.2%) | ***707<br>(–4.1%)*** | n/a | 711<br>(–3.5%) | 729<br>(–1.1%) | 719<br>(–2.5%) | 732<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 194<br>(–18.9%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | 200<br>(–16.6%) | 189<br>(–21.4%) | 205<br>(–14.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.1%) | 31<br>(–37.6%) | 33<br>(–32.9%) | ***31<br>(–37.8%)*** | 33<br>(–33.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 429<br>(–2.3%) | 107<br>(–75.5%) | n/a | ***106<br>(–75.9%)*** | 430<br>(–1.9%) | 426<br>(–2.8%) | 436<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 284<br>(–4.5%) | 245<br>(–17.8%) | n/a | ***241<br>(–19.1%)*** | 280<br>(–6%) | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 197<br>(–6.7%) | ***142<br>(–32.5%)*** | 200<br>(–5.3%) | 143<br>(–32.1%) | 197<br>(–6.5%) | 195<br>(–7.3%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1366 | 1252<br>(–8.3%) | 1140<br>(–16.5%) | n/a | ***1126<br>(–17.6%)*** | 1307<br>(–4.3%) | 1302<br>(–4.7%) | 1307<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 949 | 816<br>(–14%) | ***703<br>(–26%)*** | n/a | 729<br>(–23.1%) | 791<br>(–16.7%) | 824<br>(–13.1%) | 825<br>(–13.1%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 185 | 130<br>(–29.9%) | 56<br>(–69.8%) | 131<br>(–29.3%) | ***55<br>(–70%)*** | 130<br>(–29.7%) | 129<br>(–30.3%) | 137<br>(–26.2%) |
| [Front-End Social](https://front-end.social/) | 54 | 51<br>(–5.6%) | ***47<br>(–13.7%)*** | 52<br>(–4%) | 47<br>(–13.6%) | 51<br>(–5.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 237<br>(+4.2%) | ***221<br>(–3.1%)*** | 227<br>(–0.2%) | 221<br>(–3.1%) | 228<br>(0%) | 228<br>(0%) | 246<br>(+8.1%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | ***10<br>(–30.4%)*** | 12<br>(–18.2%) | ***10<br>(–30.4%)*** | 12<br>(–19.2%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1838 | 1785<br>(–2.9%) | ***1360<br>(–26%)*** | n/a | 1431<br>(–22.2%) | 1780<br>(–3.1%) | 1785<br>(–2.9%) | 1824<br>(–0.8%) |
| [Ground News](https://ground.news/) | 1820 | 1707<br>(–6.2%) | ***1622<br>(–10.9%)*** | n/a | 1646<br>(–9.6%) | 1706<br>(–6.3%) | 1704<br>(–6.4%) | 1806<br>(–0.7%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 360 | 328<br>(–8.7%) | ***267<br>(–25.9%)*** | n/a | 267<br>(–25.7%) | 325<br>(–9.7%) | 330<br>(–8.3%) | 340<br>(–5.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***119<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.5%) | 121<br>(–1.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.3%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 271 | 231<br>(–14.6%) | 216<br>(–20.3%) | 232<br>(–14.4%) | ***215<br>(–20.6%)*** | 227<br>(–16.2%) | 229<br>(–15.4%) | 232<br>(–14.2%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.6%) | ***31<br>(–62.7%)*** | 34<br>(–58.3%) | 31<br>(–62%) | 33<br>(–60.2%) | 33<br>(–59.8%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–23%) | 32<br>(–26.3%) | 34<br>(–23.7%) | ***32<br>(–27%)*** | 33<br>(–25.5%) | 33<br>(–24.7%) | 34<br>(–23%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 345<br>(–16.6%) | 180<br>(–56.5%) | n/a | ***169<br>(–59.1%)*** | 347<br>(–16.3%) | 342<br>(–17.3%) | 402<br>(–2.9%) |
| [KoRo](https://www.koro.com/) | 1006 | 945<br>(–6%) | ***929<br>(–7.6%)*** | n/a | 932<br>(–7.3%) | 958<br>(–4.8%) | 949<br>(–5.6%) | 977<br>(–2.9%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | ***26<br>(–9.1%)*** | 28<br>(–5%) | 26<br>(–8.9%) | 27<br>(–6%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 527 | 503<br>(–4.6%) | 478<br>(–9.2%) | n/a | ***477<br>(–9.5%)*** | 500<br>(–5.1%) | 498<br>(–5.5%) | 518<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–47%) | 10<br>(–42.7%) | ***9<br>(–47.1%)*** | 9<br>(–45.8%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 47<br>(–5.4%) | ***43<br>(–13.8%)*** | 48<br>(–3.9%) | 43<br>(–13.7%) | 47<br>(–5.7%) | 46<br>(–7.3%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.2%) | 68<br>(–42.9%) | 73<br>(–38.8%) | ***62<br>(–47.9%)*** | 70<br>(–41.2%) | 70<br>(–41.2%) | 72<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 305<br>(–11.8%) | 219<br>(–36.7%) | n/a | ***218<br>(–37%)*** | 276<br>(–20.1%) | 304<br>(–12.2%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 333 | 319<br>(–4.3%) | ***198<br>(–40.7%)*** | n/a | 199<br>(–40.2%) | 308<br>(–7.7%) | 320<br>(–4.1%) | 331<br>(–0.8%) |
| [Mondoweiss](https://mondoweiss.net/) | 343 | 324<br>(–5.7%) | 303<br>(–11.7%) | n/a | ***303<br>(–11.9%)*** | 319<br>(–7.2%) | 319<br>(–7.2%) | 330<br>(–4.1%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | 32<br>(–31.8%) | 36<br>(–22.1%) | ***32<br>(–31.8%)*** | 35<br>(–25.2%) | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [Nikkei](https://www.nikkei.com/) | 709 | 668<br>(–5.8%) | ***625<br>(–11.9%)*** | n/a | 640<br>(–9.8%) | 684<br>(–3.5%) | 661<br>(–6.8%) | 700<br>(–1.3%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 114<br>(–7.4%) | 68<br>(–44.8%) | 116<br>(–5.8%) | ***64<br>(–47.9%)*** | 114<br>(–7.3%) | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Opera](https://www.opera.com/) | 186 | 132<br>(–28.7%) | ***84<br>(–55%)*** | 136<br>(–26.6%) | 85<br>(–54.3%) | 134<br>(–27.6%) | 132<br>(–29.1%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 177 | 149<br>(–15.9%) | 145<br>(–18%) | 149<br>(–15.9%) | ***145<br>(–18.1%)*** | 147<br>(–16.6%) | 147<br>(–16.9%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 136<br>(–6.9%) | 86<br>(–41.1%) | 139<br>(–4.7%) | ***81<br>(–44.8%)*** | 138<br>(–5.5%) | 135<br>(–7.8%) | 143<br>(–2.2%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4%) | 64<br>(–18.1%) | 76<br>(–3%) | ***61<br>(–21.4%)*** | 73<br>(–6.6%) | 74<br>(–4.9%) | 76<br>(–2.4%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | 22<br>(–41.6%) | 32<br>(–13.5%) | ***22<br>(–41.7%)*** | 28<br>(–24.1%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 138 | 122<br>(–11.4%) | ***116<br>(–16.3%)*** | 136<br>(–1.4%) | 116<br>(–16.1%) | 120<br>(–12.8%) | 122<br>(–11.9%) | 136<br>(–1.3%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 65<br>(–8.5%) | 45<br>(–36%) | 66<br>(–6.6%) | ***43<br>(–39.2%)*** | 66<br>(–7.4%) | 65<br>(–8.1%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 184 | 168<br>(–8.7%) | 143<br>(–22.3%) | 172<br>(–6.6%) | ***140<br>(–23.5%)*** | 166<br>(–9.8%) | 167<br>(–9.3%) | 175<br>(–4.9%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | 30<br>(–10.9%) | 32<br>(–7.3%) | ***30<br>(–11%)*** | 31<br>(–10.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14%) | ***17<br>(–19.2%)*** | 18<br>(–14.2%) | 17<br>(–19%) | 18<br>(–16.8%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SFLC.in](https://sflc.in/) | 171 | 164<br>(–3.7%) | 135<br>(–20.9%) | 168<br>(–1.7%) | ***133<br>(–21.9%)*** | 165<br>(–3.1%) | 164<br>(–4.1%) | 168<br>(–1.3%) |
| [SitePoint](https://www.sitepoint.com/) | 224 | 213<br>(–4.8%) | ***201<br>(–9.9%)*** | 214<br>(–4.1%) | 202<br>(–9.8%) | 210<br>(–6.1%) | 213<br>(–4.6%) | 222<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 287 | 287<br>(–0.3%) | 274<br>(–4.7%) | 287<br>(–0.1%) | ***273<br>(–5%)*** | 287<br>(–0.2%) | 285<br>(–0.9%) | 287<br>(0%) |
| [Startpage](https://www.startpage.com/) | 22 | 19<br>(–13.7%) | 16<br>(–25.6%) | 19<br>(–13%) | ***16<br>(–26.9%)*** | 19<br>(–13.6%) | 20<br>(–6%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 57 | 42<br>(–26.2%) | ***38<br>(–32.2%)*** | 41<br>(–27.2%) | 39<br>(–31.5%) | 40<br>(–28.7%) | 41<br>(–28.2%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 405 | 342<br>(–15.6%) | ***307<br>(–24.1%)*** | n/a | 333<br>(–17.9%) | 348<br>(–14%) | 355<br>(–12.5%) | 379<br>(–6.4%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.5%) | ***84<br>(–10.4%)*** | 88<br>(–6.1%) | 84<br>(–10.4%) | 86<br>(–9.1%) | 88<br>(–6.3%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 125 | 106<br>(–15.2%) | ***90<br>(–27.4%)*** | 111<br>(–10.8%) | 91<br>(–27%) | 105<br>(–15.3%) | 106<br>(–14.9%) | 114<br>(–8.2%) |
| [TPGi](https://www.tpgi.com/) | 195 | 151<br>(–22.6%) | 133<br>(–32%) | 159<br>(–18.7%) | ***131<br>(–32.5%)*** | 150<br>(–22.9%) | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 449 | 394<br>(–12.4%) | ***196<br>(–56.5%)*** | n/a | 385<br>(–14.3%) | 395<br>(–12.1%) | 392<br>(–12.7%) | 228<br>(–49.3%) |
| [United Nations](https://www.un.org/en/) | 162 | 137<br>(–15.5%) | 90<br>(–44.4%) | 130<br>(–19.5%) | ***89<br>(–44.8%)*** | 131<br>(–19.1%) | 134<br>(–16.8%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 81<br>(–12.2%) | ***64<br>(–30.6%)*** | 82<br>(–11.6%) | 64<br>(–30.6%) | n/a | 81<br>(–13%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 49 | 39<br>(–21.6%) | ***35<br>(–28.1%)*** | 39<br>(–21.7%) | 36<br>(–27.8%) | 38<br>(–23%) | 38<br>(–22.9%) | 41<br>(–17.9%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 247 | 239<br>(–3.3%) | ***216<br>(–12.5%)*** | 235<br>(–4.8%) | 216<br>(–12.5%) | 232<br>(–6%) | 232<br>(–6.3%) | 236<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 221 | 182<br>(–17.6%) | 153<br>(–30.8%) | 191<br>(–13.5%) | ***152<br>(–31.1%)*** | 182<br>(–17.7%) | 189<br>(–14.4%) | 205<br>(–7.2%) |
| [博客园](https://www.cnblogs.com/) | 80 | 56<br>(–29.6%) | 53<br>(–33.6%) | 57<br>(–28.6%) | ***53<br>(–34.2%)*** | 55<br>(–31.6%) | 57<br>(–28.9%) | 57<br>(–28.1%) |
| [稀土掘金](https://juejin.cn/) | 77 | 66<br>(–14%) | ***59<br>(–23.8%)*** | 73<br>(–5.9%) | 59<br>(–23.3%) | 65<br>(–16%) | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 72/72 | 72/72 | 51/72 | 72/72 | 71/72 | 72/72 | 72/72 |
| **Average processing time** |  | 29 ms | 48 ms | 871 ms<br>(estimate) | 162 ms | ***8 ms*** | 9 ms | 153 ms |
| **Median processing time** |  | 12 ms | 22 ms | 726 ms<br>(estimate) | 82 ms | ***4 ms*** | 4 ms | 36 ms |
| **Average result (KB)** | 386 | 355<br>(–8%) | ***314<br>(–18.7%)*** | 375<br>(–2.8%) | 319<br>(–17.4%) | 353<br>(–8.5%) | 354<br>(–8.4%) | 362<br>(–6.1%) |

Benchmarks last updated: Oct 15, 2026 (Node.js 24.22.0, macOS 15.7.9, Apple M4)
<!-- End auto-generated -->

## Notes

* Minifiers:
  - [HTML Minifier](https://github.com/kangax/html-minifier) is not included as it’s deprecated (HTML Minifier Next is its successor).
  - HTML Minifier Terser is not included due to several issues that distort the data at the expense of minifier users: For example, in HTML minification, it removes whitespace around newer inline elements (changing text) and drops some closing tags (e.g., `</a>`, which turns subsequent content into links); in CSS minification, it removes nested rules as well as `@scope` blocks (last confirmed Oct 15, 2026).
  - htmlcompressor.com incorrectly converts no-break spaces to spaces which can give an impression of greater effectiveness (last confirmed Apr 4, 2026).
  - htmlnano’s maximum minification removes some code that is in use—e.g., SVG sprite symbols that other SVGs reference, `:host` rules of declarative shadow DOM, and no-break spaces next to elements—which can give an impression of greater effectiveness (last confirmed Oct 1, 2026).
  - minify can’t limit minification to HTML (it always minifies CSS and JavaScript, too), which is why it only takes part in maximum minification.
    + Note: minify’s npm package includes native libraries for macOS on ARM, Linux on x64 and ARM, and Windows on x64; on other platforms, building the library requires Go 1.24+ and a C compiler (without it, minify’s results will show as “n/a”).
  - Minimize only minifies HTML.
* Configuration: Each minifier runs with a general configuration for all sites. Where a minifier offers a dedicated option to handle a case correctly (e.g., HTML Minifier Next’s `inlineCustomElements` for custom elements that are displayed inline), its output is not considered incorrect, even when that option isn’t set here (specifying custom settings for all sites for all minifiers is impractical).
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
  - Processing times cover the minification call only (not reading, writing, or compressing files). Each local minifier runs in its own process and first runs once on all sites (untimed) to warm up. Per site, each then gets three more untimed warm-up runs, followed by five timed runs that the minifiers take in turns, in rotating order, so that system load affects all of them alike; the median of these runs is the site’s time. Sites are only timed when the system is mostly idle, and unsteady timings get re-measured. Minification caches that persist across calls are disabled where possible.
  - Average and median processing times of local minifiers are based on the sites all of them processed. Times within 5% of the fastest also count as fastest, as smaller differences are within measurement noise. htmlcompressor.com’s times are estimates: the difference between its response time and that of a request with the same content but minification off (which still removes comments). Network jitter makes estimates for single sites unreliable, so only averages and medians are shown, only if the average exceeds twice its standard error (otherwise “network noise”), and they don’t count as fastest.
* Benchmarks are currently run manually but may be automated in the future.
* Website: The results are also available on [the project website](https://j9t.github.io/minifier-benchmarks/), whose data (`site/data/`) each benchmark run updates. (To preview the site locally, serve the site/ folder, e.g., `npx serve site`).