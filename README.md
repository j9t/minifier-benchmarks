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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26<br>(–17.2%) | ***25<br>(–19.6%)*** | 26<br>(–17.1%) | 26<br>(–18.5%) | 25<br>(–19.1%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 64 | 60<br>(–5.7%) | ***58<br>(–8.2%)*** | 59<br>(–7.1%) | 59<br>(–8.2%) | 59<br>(–8%) | 59<br>(–7.1%) |
| [Apple](https://www.apple.com/) | 248 | 236<br>(–5.1%) | ***230<br>(–7.5%)*** | 234<br>(–5.9%) | 231<br>(–7.1%) | 232<br>(–6.7%) | 233<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 645 | 640<br>(–0.7%) | 635<br>(–1.5%) | n/a | ***635<br>(–1.5%)*** | 637<br>(–1.2%) | 640<br>(–0.8%) |
| [Bun](https://bun.sh/) | 256 | 251<br>(–1.9%) | 237<br>(–7.6%) | 250<br>(–2.2%) | ***233<br>(–8.9%)*** | 246<br>(–3.9%) | 249<br>(–2.9%) |
| [CERN](https://home.cern/) | 291 | 279<br>(–4%) | ***271<br>(–6.8%)*** | 279<br>(–4.2%) | 272<br>(–6.6%) | 277<br>(–4.7%) | 279<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 178 | 165<br>(–7.1%) | ***162<br>(–8.8%)*** | 164<br>(–8%) | 162<br>(–8.7%) | 163<br>(–8.4%) | 164<br>(–8%) |
| [DeepSeek](https://www.deepseek.com/) | 90 | 89<br>(–0.6%) | ***88<br>(–1.6%)*** | 89<br>(–0.8%) | 89<br>(–1.3%) | 89<br>(–1%) | 89<br>(–0.8%) |
| [DIN](https://www.din.de/) | 256 | 184<br>(–28.3%) | ***177<br>(–30.7%)*** | 185<br>(–27.8%) | 179<br>(–30.3%) | 182<br>(–29%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 543 | 540<br>(–0.6%) | ***537<br>(–1%)*** | n/a | 537<br>(–1%) | 538<br>(–0.9%) | 540<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7448 | 7084<br>(–4.9%) | 6841<br>(–8.2%) | n/a | ***6832<br>(–8.3%)*** | 6986<br>(–6.2%) | 7011<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 78<br>(–7.7%) | 77<br>(–8.3%) | 79<br>(–6.6%) | ***77<br>(–8.3%)*** | 77<br>(–7.9%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 50<br>(–7.9%) | 48<br>(–12.3%) | 50<br>(–7.6%) | ***48<br>(–12.7%)*** | 48<br>(–11%) | 49<br>(–9.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | 33<br>(–33.9%) | 33<br>(–32.9%) | ***33<br>(–33.9%)*** | 33<br>(–33.5%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1602 | 1548<br>(–3.4%) | ***1472<br>(–8.2%)*** | n/a | 1539<br>(–4%) | 1543<br>(–3.7%) | 1543<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 186 | 136<br>(–27%) | ***134<br>(–27.7%)*** | 136<br>(–26.6%) | 134<br>(–27.5%) | 135<br>(–27.4%) | 136<br>(–26.7%) |
| [Front-End Social](https://front-end.social/) | 54 | 52<br>(–4.6%) | ***50<br>(–7.2%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 239<br>(+4.2%) | 229<br>(0%) | ***228<br>(–0.2%)*** | 229<br>(0%) | 229<br>(0%) | 247<br>(+8%) |
| [Google](https://www.google.com/) | 84 | 131<br>(+56.5%) | 83<br>(–0.6%) | 83<br>(–0.3%) | ***83<br>(–0.9%)*** | 83<br>(–0.5%) | 83<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1921 | 1898<br>(–1.2%) | ***1858<br>(–3.3%)*** | n/a | 1873<br>(–2.5%) | 1898<br>(–1.2%) | 1907<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | ***119<br>(–3%)*** | 121<br>(–1.2%) | 120<br>(–2.2%) | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.6%)*** | 151<br>(–0.2%) | 151<br>(–0.2%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.5%) | 32<br>(–61.1%) | 35<br>(–58%) | ***32<br>(–61.1%)*** | 34<br>(–59.5%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–21.7%) | ***32<br>(–27.5%)*** | 34<br>(–22.8%) | 33<br>(–24.5%) | 33<br>(–23.5%) | 34<br>(–23.2%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–6.1%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 500 | 494<br>(–1.1%) | ***477<br>(–4.6%)*** | n/a | 477<br>(–4.5%) | 491<br>(–1.7%) | 492<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | 12<br>(–30.4%) | 12<br>(–27.3%) | ***12<br>(–30.6%)*** | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 48<br>(–4.5%) | ***47<br>(–7.1%)*** | 49<br>(–3.7%) | 47<br>(–7.1%) | 47<br>(–7%) | 49<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 70<br>(–40.2%) | ***67<br>(–42.7%)*** | 72<br>(–38.8%) | 70<br>(–40.3%) | 69<br>(–41.2%) | 71<br>(–39.1%) |
| [Mistral AI](https://mistral.ai/) | 464 | 449<br>(–3.2%) | ***369<br>(–20.4%)*** | n/a | 381<br>(–17.8%) | 453<br>(–2.4%) | 463<br>(–0.2%) |
| [Mondoweiss](https://mondoweiss.net/) | 362 | 358<br>(–1%) | ***343<br>(–5.3%)*** | n/a | 343<br>(–5.3%) | 347<br>(–4.2%) | 348<br>(–3.9%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | 36<br>(–25.7%) | 38<br>(–22.2%) | ***36<br>(–25.7%)*** | 36<br>(–25.5%) | 37<br>(–22.9%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 107 | 87<br>(–19.1%) | ***86<br>(–20.1%)*** | 87<br>(–18.8%) | 86<br>(–19.2%) | 86<br>(–19.6%) | 87<br>(–18.4%) |
| [Opera](https://www.opera.com/) | 186 | 137<br>(–26.1%) | ***134<br>(–28.1%)*** | 137<br>(–26.4%) | 135<br>(–27.1%) | 136<br>(–26.8%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 174 | 147<br>(–16%) | ***145<br>(–17.2%)*** | 147<br>(–15.9%) | 146<br>(–16.5%) | 145<br>(–16.8%) | 147<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | 30<br>(–10.7%) | 32<br>(–7.3%) | ***30<br>(–10.7%)*** | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19<br>(–7.5%) | 17<br>(–17.3%) | 18<br>(–13.5%) | ***17<br>(–17.5%)*** | 18<br>(–16.3%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 224 | 221<br>(–1.3%) | ***220<br>(–1.7%)*** | 222<br>(–0.7%) | 220<br>(–1.6%) | 221<br>(–1%) | 222<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 289 | 290<br>(+0.2%) | ***288<br>(–0.6%)*** | 289<br>(–0.1%) | 288<br>(–0.4%) | 288<br>(–0.4%) | 289<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 56 | 41<br>(–26.1%) | 40<br>(–29%) | 41<br>(–27%) | ***40<br>(–29.3%)*** | 40<br>(–28%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 467 | 440<br>(–5.8%) | ***419<br>(–10.4%)*** | n/a | 420<br>(–10.1%) | 432<br>(–7.5%) | 434<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.4%) | 88<br>(–6.4%) | 89<br>(–6%) | ***88<br>(–6.5%)*** | 89<br>(–6.2%) | 89<br>(–6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 178<br>(–8.9%) | ***175<br>(–10.3%)*** | 179<br>(–8.2%) | 175<br>(–10.1%) | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [United Nations](https://www.un.org/en/) | 161 | 140<br>(–13%) | 135<br>(–15.9%) | 140<br>(–13%) | ***133<br>(–17.1%)*** | 138<br>(–14.4%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 83<br>(–8.8%) | 82<br>(–10.7%) | 83<br>(–9.5%) | ***82<br>(–10.8%)*** | 82<br>(–10.5%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 49 | 40<br>(–18.4%) | ***39<br>(–20.2%)*** | 40<br>(–18.5%) | 39<br>(–19.8%) | 39<br>(–19.7%) | 40<br>(–18.4%) |
| [WordPress Blog](https://wordpress.com/blog/) | 222 | 205<br>(–7.6%) | ***201<br>(–9.3%)*** | 205<br>(–7.3%) | 202<br>(–9%) | 203<br>(–8.3%) | 206<br>(–7%) |
| **Sites processed (of sites overall)** |  | 47/47 | 47/47 | 38/47 | 47/47 | 47/47 | 47/47 |
| **Average processing time** |  | 30 ms | 34 ms | 768 ms | 46 ms | ***9 ms*** | 203 ms |
| **Average result (KB)** | 397 | 377<br>(–5.2%) | ***363<br>(–8.7%)*** | 386<br>(–2.8%) | 365<br>(–8.1%) | 372<br>(–6.4%) | 374<br>(–5.8%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–27.8%) | 24<br>(–22.9%) | ***22<br>(–28.5%)*** | 23<br>(–25.2%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.2%) | 42<br>(–33.9%) | 57<br>(–9.9%) | ***39<br>(–38.8%)*** | 56<br>(–11.4%) | 59<br>(–7.1%) |
| [Apple](https://www.apple.com/) | 248 | 236<br>(–5.1%) | ***220<br>(–11.3%)*** | 234<br>(–5.9%) | 222<br>(–10.6%) | 232<br>(–6.7%) | 233<br>(–6.1%) |
| [BBC](https://www.bbc.co.uk/) | 645 | 607<br>(–5.8%) | ***594<br>(–7.9%)*** | n/a | 596<br>(–7.5%) | 604<br>(–6.3%) | 640<br>(–0.8%) |
| [Bun](https://bun.sh/) | 256 | 251<br>(–2.1%) | 232<br>(–9.4%) | 250<br>(–2.2%) | ***229<br>(–10.7%)*** | 246<br>(–4.1%) | 249<br>(–2.9%) |
| [CERN](https://home.cern/) | 291 | 263<br>(–9.5%) | 225<br>(–22.6%) | 269<br>(–7.7%) | ***209<br>(–28.1%)*** | 262<br>(–9.8%) | 279<br>(–4.3%) |
| [CSS-Tricks](https://css-tricks.com/) | 178 | 155<br>(–12.6%) | 139<br>(–21.7%) | 157<br>(–11.8%) | ***122<br>(–31.4%)*** | 155<br>(–12.8%) | 164<br>(–8%) |
| [DeepSeek](https://www.deepseek.com/) | 90 | 86<br>(–4%) | 64<br>(–28.2%) | 89<br>(–1.4%) | ***64<br>(–28.3%)*** | 87<br>(–3.5%) | 89<br>(–0.8%) |
| [DIN](https://www.din.de/) | 256 | 177<br>(–30.9%) | 134<br>(–47.8%) | 178<br>(–30.6%) | ***132<br>(–48.4%)*** | 176<br>(–31.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 543 | 509<br>(–6.2%) | 501<br>(–7.7%) | n/a | ***495<br>(–8.8%)*** | 502<br>(–7.6%) | 540<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7448 | 7084<br>(–4.9%) | 6840<br>(–8.2%) | n/a | ***6831<br>(–8.3%)*** | 6986<br>(–6.2%) | 7011<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 75<br>(–11.2%) | 56<br>(–33.5%) | 76<br>(–9.6%) | ***54<br>(–35.4%)*** | 75<br>(–11.1%) | 79<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 49<br>(–10.7%) | 45<br>(–18.3%) | 49<br>(–9.9%) | ***44<br>(–18.7%)*** | 48<br>(–12%) | 49<br>(–9.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | 31<br>(–37.7%) | 33<br>(–33%) | ***31<br>(–37.7%)*** | 33<br>(–33.5%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1602 | 1480<br>(–7.6%) | 1361<br>(–15.1%) | n/a | ***1338<br>(–16.5%)*** | 1538<br>(–4%) | 1543<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 186 | 129<br>(–30.4%) | 55<br>(–70.5%) | 130<br>(–29.8%) | ***55<br>(–70.5%)*** | 128<br>(–30.8%) | 136<br>(–26.7%) |
| [Front-End Social](https://front-end.social/) | 54 | 51<br>(–5.6%) | 47<br>(–13.7%) | 52<br>(–4%) | ***47<br>(–13.8%)*** | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 239<br>(+4.2%) | 222<br>(–3.1%) | 228<br>(–0.2%) | ***221<br>(–3.6%)*** | 229<br>(0%) | 247<br>(+8%) |
| [Google](https://www.google.com/) | 84 | 80<br>(–4.5%) | 71<br>(–15.3%) | 83<br>(–0.8%) | ***68<br>(–19%)*** | 81<br>(–3.5%) | 83<br>(–0.3%) |
| [Ground News](https://ground.news/) | 1921 | 1801<br>(–6.2%) | ***1726<br>(–10.1%)*** | n/a | 1749<br>(–8.9%) | 1800<br>(–6.3%) | 1907<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.4%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***150<br>(–0.7%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.8%) | 32<br>(–61.8%) | 35<br>(–58.2%) | ***32<br>(–61.9%)*** | 33<br>(–59.6%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–23.2%) | ***31<br>(–29.8%)*** | 33<br>(–23.8%) | 32<br>(–27.3%) | 33<br>(–24.9%) | 34<br>(–23.2%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | 26<br>(–9%) | 28<br>(–5%) | ***25<br>(–14.9%)*** | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 500 | 476<br>(–4.8%) | 450<br>(–10%) | n/a | ***449<br>(–10.2%)*** | 472<br>(–5.5%) | 492<br>(–1.6%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–46.8%) | 10<br>(–42.7%) | ***9<br>(–47.3%)*** | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 48<br>(–5.4%) | 44<br>(–13.8%) | 48<br>(–3.9%) | ***43<br>(–13.9%)*** | 47<br>(–7.3%) | 49<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 70<br>(–40.3%) | 66<br>(–43.7%) | 72<br>(–38.8%) | ***57<br>(–50.9%)*** | 69<br>(–41.2%) | 71<br>(–39.1%) |
| [Mistral AI](https://mistral.ai/) | 464 | 445<br>(–4%) | ***281<br>(–39.4%)*** | n/a | 282<br>(–39.2%) | 450<br>(–3%) | 463<br>(–0.2%) |
| [Mondoweiss](https://mondoweiss.net/) | 362 | 341<br>(–5.8%) | 320<br>(–11.5%) | n/a | ***317<br>(–12.5%)*** | 336<br>(–7.3%) | 348<br>(–3.9%) |
| [Mozilla](https://www.mozilla.org/) | 48 | 38<br>(–21%) | ***33<br>(–31.5%)*** | 38<br>(–22.2%) | 33<br>(–30.8%) | 36<br>(–25.5%) | 37<br>(–22.9%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 107 | 86<br>(–19.8%) | 64<br>(–40.5%) | 86<br>(–19.4%) | ***60<br>(–43.6%)*** | 85<br>(–20.2%) | 87<br>(–18.4%) |
| [Opera](https://www.opera.com/) | 186 | 132<br>(–28.8%) | ***84<br>(–54.5%)*** | 136<br>(–26.6%) | 85<br>(–54.1%) | 132<br>(–29.1%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 174 | 147<br>(–16%) | 143<br>(–17.9%) | 147<br>(–15.9%) | ***137<br>(–21.4%)*** | 145<br>(–16.9%) | 147<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | 30<br>(–10.9%) | 32<br>(–7.3%) | ***30<br>(–11.1%)*** | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.1%) | ***17<br>(–18.9%)*** | 18<br>(–14.2%) | 17<br>(–18.4%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SitePoint](https://www.sitepoint.com/) | 224 | 212<br>(–5%) | ***201<br>(–9.9%)*** | 214<br>(–4.1%) | 202<br>(–9.8%) | 213<br>(–4.6%) | 222<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 289 | 289<br>(–0.3%) | 277<br>(–4.2%) | 289<br>(–0.1%) | ***274<br>(–5.1%)*** | 287<br>(–0.9%) | 289<br>(0%) |
| [Startup-Verband](https://startupverband.de/) | 56 | 41<br>(–26.2%) | 39<br>(–31%) | 41<br>(–27.1%) | ***38<br>(–31.4%)*** | 40<br>(–28.2%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 467 | 422<br>(–9.6%) | ***394<br>(–15.8%)*** | n/a | 401<br>(–14.1%) | 424<br>(–9.3%) | 434<br>(–7.2%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.5%) | 85<br>(–10.4%) | 89<br>(–6.1%) | ***84<br>(–10.9%)*** | 88<br>(–6.3%) | 89<br>(–6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 151<br>(–22.6%) | 133<br>(–31.6%) | 159<br>(–18.7%) | ***130<br>(–33.1%)*** | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [United Nations](https://www.un.org/en/) | 161 | 136<br>(–15.6%) | 102<br>(–36.4%) | 129<br>(–19.6%) | ***88<br>(–45.1%)*** | 134<br>(–16.9%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 91 | 80<br>(–12%) | 64<br>(–30.3%) | 81<br>(–11.5%) | ***63<br>(–30.9%)*** | 80<br>(–12.8%) | 83<br>(–9.4%) |
| [W3C](https://www.w3.org/) | 49 | 38<br>(–22.3%) | ***35<br>(–28.6%)*** | 38<br>(–22.4%) | 35<br>(–28.2%) | 37<br>(–23.6%) | 40<br>(–18.4%) |
| [WordPress Blog](https://wordpress.com/blog/) | 222 | 183<br>(–17.5%) | 154<br>(–30.7%) | 192<br>(–13.4%) | ***151<br>(–31.7%)*** | 190<br>(–14.3%) | 206<br>(–7%) |
| **Sites processed (of sites overall)** |  | 47/47 | 47/47 | 38/47 | 47/47 | 47/47 | 47/47 |
| **Average processing time** |  | 36 ms | 67 ms | 1373 ms | 165 ms | ***11 ms*** | 201 ms |
| **Average result (KB)** | 397 | 367<br>(–7.7%) | 341<br>(–14.3%) | 384<br>(–3.4%) | ***339<br>(–14.8%)*** | 365<br>(–8.1%) | 374<br>(–5.8%) |

Benchmarks last updated: Sep 28, 2026
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