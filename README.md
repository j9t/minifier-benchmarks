# Minifier Benchmarks (Beta)

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)). **Early release, benchmarks are still being cross-checked and fine-tuned.**

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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26<br>(–17.2%) | 26<br>(–17.4%) | 26<br>(–17%) | 26<br>(–16.4%) | ***25<br>(–19.2%)*** | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 59<br>(–6.4%) | 57<br>(–8.9%) | 58<br>(–7.4%) | 58<br>(–8.2%) | ***57<br>(–8.9%)*** | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 225 | 207<br>(–8%) | ***200<br>(–10.9%)*** | 206<br>(–8.5%) | 205<br>(–8.9%) | 203<br>(–9.8%) | 206<br>(–8.6%) |
| [BBC](https://www.bbc.co.uk/) | 727 | 722<br>(–0.7%) | 717<br>(–1.4%) | n/a | 720<br>(–0.9%) | ***716<br>(–1.4%)*** | 721<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 451<br>(–2.2%) | ***444<br>(–3.6%)*** | n/a | 454<br>(–1.5%) | 452<br>(–2%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 92<br>(–38.6%) | ***81<br>(–46.1%)*** | 95<br>(–37%) | 91<br>(–39.3%) | 91<br>(–39.8%) | 92<br>(–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 153 | 142<br>(–7.6%) | 140<br>(–8.9%) | 140<br>(–8.7%) | 140<br>(–8.7%) | ***139<br>(–9.3%)*** | 140<br>(–8.6%) |
| [DeepSeek](https://www.deepseek.com/) | 104 | 104<br>(–0.2%) | ***97<br>(–6.2%)*** | 103<br>(–1%) | 102<br>(–1.4%) | 103<br>(–1.2%) | 103<br>(–1.1%) |
| [DIN](https://www.din.de/) | 250 | 182<br>(–27.5%) | ***176<br>(–29.5%)*** | 183<br>(–27.1%) | 182<br>(–27.2%) | 179<br>(–28.4%) | 182<br>(–27.2%) |
| [DLR](https://www.dlr.de/) | 571 | 567<br>(–0.6%) | ***565<br>(–1%)*** | n/a | 566<br>(–0.8%) | 565<br>(–1%) | 568<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7308 | 6717<br>(–8.1%) | ***6496<br>(–11.1%)*** | n/a | 6681<br>(–8.6%) | 6630<br>(–9.3%) | 6681<br>(–8.6%) |
| [EDRi](https://edri.org/) | 80 | 73<br>(–8%) | 73<br>(–8.3%) | 74<br>(–7%) | 73<br>(–7.7%) | ***73<br>(–8.5%)*** | 74<br>(–7%) |
| [EFF](https://www.eff.org/) | 56 | 52<br>(–7.7%) | ***50<br>(–11.1%)*** | 52<br>(–7.4%) | 50<br>(–10.8%) | 50<br>(–11%) | 51<br>(–9.2%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.1%) | ***33<br>(–33.8%)*** | 33<br>(–32.9%) | 33<br>(–32.9%) | 33<br>(–33.7%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1352 | 1311<br>(–3%) | ***1297<br>(–4%)*** | n/a | 1308<br>(–3.2%) | 1299<br>(–3.9%) | 1305<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 132<br>(–12.9%) | 131<br>(–13.9%) | 132<br>(–13.1%) | 132<br>(–13.2%) | ***131<br>(–13.9%)*** | 132<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | 34<br>(–3.2%) | 35<br>(–3.1%) | 34<br>(–5.5%) | ***34<br>(–5.6%)*** | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 230<br>(+3.5%) | 223<br>(0%) | ***222<br>(–0.2%)*** | 238<br>(+6.7%) | 223<br>(0%) | 241<br>(+8.3%) |
| [Google](https://www.google.com/) | 18 | 18<br>(–0.6%) | 18<br>(–2%) | 18<br>(–0.9%) | ***18<br>(–2.3%)*** | 18<br>(–1.9%) | 18<br>(–0.9%) |
| [Ground News](https://ground.news/) | 1996 | 1973<br>(–1.2%) | ***1936<br>(–3%)*** | n/a | 1980<br>(–0.8%) | 1972<br>(–1.2%) | 1983<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3%) | 119<br>(–3%) | 121<br>(–1.2%) | 124<br>(+1.1%) | ***119<br>(–3.2%)*** | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.6%)*** | 149<br>(–0.2%) | 155<br>(+3.8%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.5%) | ***33<br>(–60.8%)*** | 35<br>(–58.1%) | 34<br>(–58.7%) | 33<br>(–59.6%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 50 | 38<br>(–23.6%) | ***35<br>(–28.9%)*** | 38<br>(–24.6%) | 38<br>(–24.5%) | 37<br>(–25.5%) | 37<br>(–25%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.6%) | ***22<br>(–7.4%)*** | 23<br>(–5.5%) | 23<br>(–5.5%) | 22<br>(–6.6%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 342 | 337<br>(–1.3%) | ***330<br>(–3.3%)*** | n/a | 337<br>(–1.3%) | 335<br>(–2.1%) | 336<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27.3%) | 12<br>(–29.6%) | 12<br>(–30.2%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 39 | 37<br>(–3.9%) | 37<br>(–3.4%) | 38<br>(–3.2%) | 36<br>(–5.9%) | ***36<br>(–5.9%)*** | 37<br>(–3.3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66<br>(–39%) | ***64<br>(–40.8%)*** | 68<br>(–37.6%) | 67<br>(–38.7%) | 65<br>(–40.2%) | 67<br>(–38%) |
| [Middle East Eye](https://www.middleeasteye.net/) | 220 | 204<br>(–7.3%) | ***195<br>(–11.2%)*** | 200<br>(–8.8%) | 200<br>(–8.9%) | 197<br>(–10.2%) | 199<br>(–9.3%) |
| [Mistral AI](https://mistral.ai/) | 337 | 328<br>(–2.5%) | ***327<br>(–2.8%)*** | n/a | 332<br>(–1.3%) | 328<br>(–2.6%) | 333<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 386 | 378<br>(–2.3%) | ***366<br>(–5.1%)*** | n/a | 371<br>(–4.1%) | 369<br>(–4.4%) | 372<br>(–3.6%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | 35<br>(–24.3%) | 36<br>(–22.2%) | 36<br>(–23.7%) | ***35<br>(–26.1%)*** | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 99 | 83<br>(–17%) | 82<br>(–17.1%) | 83<br>(–16.6%) | 83<br>(–16.1%) | ***82<br>(–17.6%)*** | 83<br>(–16.2%) |
| [Opera](https://www.opera.com/) | 230 | 178<br>(–22.7%) | 175<br>(–24.2%) | 176<br>(–23.6%) | 177<br>(–23.2%) | ***174<br>(–24.2%)*** | 176<br>(–23.4%) |
| [OSCE](https://www.osce.org/) | 172 | 144<br>(–16.1%) | 144<br>(–16.5%) | 144<br>(–16%) | 145<br>(–15.6%) | ***142<br>(–17.3%)*** | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***31<br>(–10.1%)*** | 32<br>(–7.3%) | 31<br>(–7.9%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 209 | 179<br>(–14.5%) | 178<br>(–15.2%) | 178<br>(–14.9%) | 179<br>(–14.5%) | ***177<br>(–15.2%)*** | 179<br>(–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 20<br>(–7.5%) | ***18<br>(–17.3%)*** | 18<br>(–13.5%) | 18<br>(–14.3%) | 18<br>(–16.7%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | ***229<br>(–1.3%)*** | 230<br>(–1.1%) | 231<br>(–0.7%) | 230<br>(–0.9%) | 230<br>(–1.1%) | 231<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 293 | 293<br>(+0.2%) | ***291<br>(–0.5%)*** | 293<br>(–0.1%) | 292<br>(–0.2%) | 292<br>(–0.4%) | 293<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 42 | 31<br>(–26.5%) | ***30<br>(–29.5%)*** | 31<br>(–27%) | 31<br>(–27.2%) | 30<br>(–28.4%) | 31<br>(–26.7%) |
| [TAZ](https://taz.de/) | 410 | 388<br>(–5.4%) | ***368<br>(–10.2%)*** | n/a | 380<br>(–7.4%) | 378<br>(–7.8%) | 381<br>(–7%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.1%) | 55<br>(–9.2%) | 54<br>(–9.7%) | 54<br>(–9.6%) | ***54<br>(–10.3%)*** | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 174 | 178<br>(+2.1%) | ***168<br>(–3.6%)*** | 172<br>(–1.6%) | 171<br>(–2.2%) | 170<br>(–2.7%) | 172<br>(–1.6%) |
| [United Nations](https://www.un.org/en/) | 151 | 130<br>(–13.7%) | ***125<br>(–16.8%)*** | 130<br>(–13.8%) | 129<br>(–14.6%) | 128<br>(–15.3%) | 130<br>(–14%) |
| [UX Collective](https://uxdesign.cc/) | 99 | 143<br>(+44%) | ***97<br>(–2.6%)*** | 99<br>(–0.8%) | 98<br>(–1.2%) | 98<br>(–1.4%) | 98<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 85<br>(–8.8%) | ***83<br>(–11%)*** | 84<br>(–9.8%) | 83<br>(–10%) | 83<br>(–11%) | 84<br>(–9.7%) |
| [W3C](https://www.w3.org/) | 51 | 41<br>(–18.7%) | ***40<br>(–20.7%)*** | 41<br>(–19%) | 41<br>(–19.3%) | 41<br>(–20.3%) | 41<br>(–18.9%) |
| [WordPress Blog](https://wordpress.com/blog/) | 193 | 178<br>(–7.8%) | ***176<br>(–9.1%)*** | 180<br>(–7.1%) | 178<br>(–7.7%) | 176<br>(–8.7%) | 180<br>(–7%) |
| **Sites processed (of sites overall)** |  | 50/50 | 50/50 | 40/50 | 50/50 | 50/50 | 50/50 |
| **Average processing time** |  | 32 ms | 41 ms | 806 ms | 35 ms | ***8 ms*** | 185 ms |
| **Average result (KB)** | 370 | 346<br>(–6.6%) | ***336<br>(–9.1%)*** | 359<br>(–3.1%) | 344<br>(–7.1%) | 341<br>(–7.9%) | 344<br>(–7%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24<br>(–23.3%) | 23<br>(–25.4%) | 24<br>(–22.9%) | ***23<br>(–26.2%)*** | 23<br>(–25.3%) | 26<br>(–16.3%) |
| [A List Apart](https://alistapart.com/) | 63 | 57<br>(–9.6%) | 53<br>(–15.2%) | 56<br>(–10.2%) | ***39<br>(–37.5%)*** | 55<br>(–12.1%) | 58<br>(–7.4%) |
| [Apple](https://www.apple.com/) | 225 | 207<br>(–8.2%) | ***191<br>(–15.2%)*** | 206<br>(–8.5%) | 196<br>(–13%) | 203<br>(–9.8%) | 206<br>(–8.6%) |
| [BBC](https://www.bbc.co.uk/) | 727 | 688<br>(–5.4%) | ***673<br>(–7.4%)*** | n/a | 681<br>(–6.3%) | 682<br>(–6.1%) | 721<br>(–0.8%) |
| [Bun](https://bun.sh/) | 461 | 435<br>(–5.7%) | 420<br>(–8.8%) | n/a | ***374<br>(–18.9%)*** | 436<br>(–5.3%) | 455<br>(–1.3%) |
| [CERN](https://home.cern/) | 151 | 92<br>(–38.6%) | ***80<br>(–46.8%)*** | 95<br>(–37%) | 90<br>(–40.5%) | 90<br>(–40.1%) | 92<br>(–38.7%) |
| [CSS-Tricks](https://css-tricks.com/) | 153 | 137<br>(–10.3%) | 113<br>(–26.5%) | 137<br>(–10.9%) | ***107<br>(–30.1%)*** | 136<br>(–11.6%) | 140<br>(–8.6%) |
| [DeepSeek](https://www.deepseek.com/) | 104 | 99<br>(–5%) | ***83<br>(–19.7%)*** | 99<br>(–4.9%) | 89<br>(–14.5%) | 98<br>(–5.4%) | 103<br>(–1.1%) |
| [DIN](https://www.din.de/) | 250 | 175<br>(–30.1%) | 163<br>(–34.7%) | 176<br>(–29.9%) | ***136<br>(–45.7%)*** | 174<br>(–30.6%) | 182<br>(–27.2%) |
| [DLR](https://www.dlr.de/) | 571 | 536<br>(–6.1%) | 526<br>(–7.8%) | n/a | ***521<br>(–8.7%)*** | 528<br>(–7.5%) | 568<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7308 | 6715<br>(–8.1%) | ***6493<br>(–11.2%)*** | n/a | 6678<br>(–8.6%) | 6628<br>(–9.3%) | 6681<br>(–8.6%) |
| [EDRi](https://edri.org/) | 80 | 71<br>(–11.3%) | 67<br>(–16.3%) | 72<br>(–9.6%) | ***53<br>(–33%)*** | 70<br>(–11.6%) | 74<br>(–7%) |
| [EFF](https://www.eff.org/) | 56 | 50<br>(–10.3%) | ***47<br>(–17%)*** | 51<br>(–9.5%) | 48<br>(–14.9%) | 50<br>(–11.9%) | 51<br>(–9.2%) |
| [European Alternatives](https://european-alternatives.eu/) | 49 | 33<br>(–33.2%) | ***31<br>(–37.7%)*** | 33<br>(–33%) | 31<br>(–36.8%) | 33<br>(–33.8%) | 33<br>(–33.1%) |
| [FAZ](https://www.faz.net/aktuell/) | 1352 | 1305<br>(–3.5%) | 1265<br>(–6.4%) | n/a | ***1195<br>(–11.6%)*** | 1294<br>(–4.3%) | 1305<br>(–3.5%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 126<br>(–17.1%) | 122<br>(–20%) | 127<br>(–16.5%) | ***51<br>(–66.3%)*** | 125<br>(–17.6%) | 132<br>(–13.1%) |
| [Front-End Social](https://front-end.social/) | 36 | 34<br>(–3.7%) | 31<br>(–11.6%) | 35<br>(–3.1%) | ***31<br>(–13.7%)*** | 34<br>(–5.6%) | 35<br>(–3.1%) |
| [Frontend Dogma](https://frontenddogma.com/) | 223 | 230<br>(+3.5%) | ***215<br>(–3.6%)*** | 222<br>(–0.2%) | 229<br>(+2.7%) | 223<br>(0%) | 241<br>(+8.3%) |
| [Google](https://www.google.com/) | 18 | 17<br>(–7.3%) | 17<br>(–9.6%) | 18<br>(–1.7%) | ***17<br>(–9.9%)*** | 17<br>(–5%) | 18<br>(–0.9%) |
| [Ground News](https://ground.news/) | 1996 | 1869<br>(–6.4%) | ***1794<br>(–10.1%)*** | n/a | 1841<br>(–7.8%) | 1865<br>(–6.6%) | 1983<br>(–0.7%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***118<br>(–3.4%)*** | 121<br>(–1.3%) | 124<br>(+0.9%) | 119<br>(–3.3%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152<br>(+1.8%) | ***148<br>(–0.7%)*** | 149<br>(–0.3%) | 155<br>(+3.7%) | 149<br>(–0.3%) | 155<br>(+3.8%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.9%) | ***32<br>(–61.5%)*** | 35<br>(–58.2%) | 34<br>(–59.5%) | 33<br>(–59.8%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 50 | 37<br>(–24.9%) | ***34<br>(–31.2%)*** | 37<br>(–25.4%) | 36<br>(–27%) | 36<br>(–26.9%) | 37<br>(–25%) |
| [Ladybird](https://ladybird.org/) | 24 | 23<br>(–4.7%) | ***22<br>(–8.7%)*** | 23<br>(–5.5%) | 22<br>(–7.1%) | 22<br>(–6.7%) | 23<br>(–5.6%) |
| [Leanpub](https://leanpub.com/) | 342 | 328<br>(–4.1%) | ***313<br>(–8.5%)*** | n/a | 319<br>(–6.7%) | 325<br>(–4.8%) | 336<br>(–1.7%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | ***9<br>(–46.5%)*** | 10<br>(–42.7%) | 9<br>(–46.3%) | 10<br>(–40.5%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 39 | 37<br>(–5.1%) | 34<br>(–12.3%) | 37<br>(–3.6%) | ***33<br>(–14.6%)*** | 36<br>(–6.3%) | 37<br>(–3.3%) |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66<br>(–39.1%) | 62<br>(–42.7%) | 68<br>(–37.7%) | ***50<br>(–53.8%)*** | 65<br>(–40.3%) | 67<br>(–38%) |
| [Middle East Eye](https://www.middleeasteye.net/) | 220 | 204<br>(–7.3%) | ***194<br>(–11.8%)*** | 200<br>(–8.8%) | 199<br>(–9.4%) | 197<br>(–10.3%) | 199<br>(–9.3%) |
| [Mistral AI](https://mistral.ai/) | 337 | 306<br>(–9.3%) | ***289<br>(–14.1%)*** | n/a | 297<br>(–12%) | 305<br>(–9.6%) | 333<br>(–1.1%) |
| [Mondoweiss](https://mondoweiss.net/) | 386 | 364<br>(–5.8%) | ***351<br>(–9%)*** | n/a | n/a | 360<br>(–6.9%) | 372<br>(–3.6%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–21%) | ***33<br>(–30.4%)*** | 36<br>(–22.2%) | 33<br>(–29.4%) | 35<br>(–26.1%) | 36<br>(–23.1%) |
| [Nielsen Norman Group](https://www.nngroup.com/) | 99 | 82<br>(–17.7%) | ***59<br>(–41%)*** | 82<br>(–17.2%) | 60<br>(–40.1%) | 81<br>(–18.2%) | 83<br>(–16.2%) |
| [Opera](https://www.opera.com/) | 230 | 173<br>(–24.8%) | 147<br>(–36.4%) | 176<br>(–23.7%) | ***109<br>(–52.5%)*** | 170<br>(–26.1%) | 176<br>(–23.4%) |
| [OSCE](https://www.osce.org/) | 172 | 144<br>(–16.1%) | ***135<br>(–21.4%)*** | 144<br>(–16%) | 136<br>(–20.6%) | 142<br>(–17.5%) | 145<br>(–15.7%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | ***31<br>(–10.3%)*** | 32<br>(–7.3%) | 31<br>(–8.2%) | 31<br>(–10.1%) | 31<br>(–7.8%) |
| [Scrum.org](https://www.scrum.org/) | 209 | 179<br>(–14.5%) | ***174<br>(–16.9%)*** | 178<br>(–14.9%) | 175<br>(–16.3%) | 177<br>(–15.3%) | 179<br>(–14.7%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.1%) | ***17<br>(–19%)*** | 18<br>(–14.2%) | 18<br>(–15.6%) | 18<br>(–17.5%) | 18<br>(–14.1%) |
| [SitePoint](https://www.sitepoint.com/) | 233 | 221<br>(–5%) | ***208<br>(–10.5%)*** | 230<br>(–1%) | 209<br>(–10%) | 221<br>(–4.8%) | 231<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 293 | 292<br>(–0.3%) | 289<br>(–1.3%) | 293<br>(–0.1%) | ***279<br>(–4.7%)*** | 290<br>(–0.9%) | 293<br>(+0%) |
| [Startup-Verband](https://startupverband.de/) | 42 | 31<br>(–26.7%) | ***29<br>(–31%)*** | 31<br>(–27.1%) | 30<br>(–28.8%) | 30<br>(–28.6%) | 31<br>(–26.7%) |
| [TAZ](https://taz.de/) | 410 | 367<br>(–10.4%) | ***343<br>(–16.2%)*** | n/a | 360<br>(–12.2%) | 368<br>(–10.2%) | 381<br>(–7%) |
| [TetraLogical](https://tetralogical.com/) | 60 | 54<br>(–10.3%) | ***50<br>(–17%)*** | 54<br>(–9.9%) | 50<br>(–16.2%) | 54<br>(–10.5%) | 54<br>(–9.8%) |
| [TPGi](https://www.tpgi.com/) | 174 | 165<br>(–5.2%) | 158<br>(–9.5%) | 171<br>(–1.8%) | ***149<br>(–14.7%)*** | 165<br>(–5.6%) | 172<br>(–1.6%) |
| [United Nations](https://www.un.org/en/) | 151 | 126<br>(–16.3%) | 112<br>(–25.6%) | 123<br>(–18.7%) | ***84<br>(–44.1%)*** | 124<br>(–17.8%) | 130<br>(–14%) |
| [UX Collective](https://uxdesign.cc/) | 99 | 92<br>(–7.2%) | ***90<br>(–9.6%)*** | 94<br>(–5.2%) | 91<br>(–8.9%) | 92<br>(–7.8%) | 98<br>(–0.9%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 81<br>(–12.1%) | ***74<br>(–20.5%)*** | 82<br>(–11.4%) | n/a | 81<br>(–12.9%) | 84<br>(–9.7%) |
| [W3C](https://www.w3.org/) | 51 | 39<br>(–22.4%) | ***36<br>(–28.7%)*** | 39<br>(–22.8%) | 37<br>(–27.2%) | 39<br>(–24.1%) | 41<br>(–18.9%) |
| [WordPress Blog](https://wordpress.com/blog/) | 193 | 157<br>(–18.7%) | 148<br>(–23.5%) | 167<br>(–13.7%) | ***134<br>(–30.8%)*** | 164<br>(–14.9%) | 180<br>(–7%) |
| **Sites processed (of sites overall)** |  | 50/50 | 50/50 | 40/50 | 48/50 | 50/50 | 50/50 |
| **Average processing time** |  | 36 ms | 62 ms | 1218 ms | 154 ms | ***13 ms*** | 186 ms |
| **Average result (KB)** | 370 | 337<br>(–8.8%) | ***323<br>(–12.7%)*** | 357<br>(–3.4%) | 323<br>(–12.6%) | 334<br>(–9.7%) | 344<br>(–7%) |

Benchmarks last updated: Feb 27, 2026
<!-- End auto-generated -->

## Notes

* Minifiers:
  - Minimize only minifies HTML.
  - [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
* Benchmarks are currently run manually (on a 2024 Apple Mac Mini) but may be automated in the future.