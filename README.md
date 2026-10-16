# Minifier Benchmarks

A collection of regularly updated benchmarks for web page minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)).

<!-- What’s this, GitHub -->
<div align="center">
	<a href="https://j9t.github.io/minifier-benchmarks/"><img src="https://j9t.github.io/minifier-benchmarks/logo.svg" alt="The Minifier Benchmarks Project.”" width="150" height="150"></a><br>
	Visit <a href="https://j9t.github.io/minifier-benchmarks/">the <strong>Minifier Benchmarks Project</strong> website</a> for interactive results.<br><br>
</div>

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
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 51<br>(–17.6%) | ***49<br>(–20.8%)*** | 50<br>(–19%) | 49<br>(–20.7%) | n/a | 50<br>(–19.9%) | 50<br>(–19.6%) |
| [AfricTivistes](https://www.africtivistes.org/) | 497 | 446<br>(–10.2%) | 431<br>(–13.3%) | n/a | ***428<br>(–13.9%)*** | n/a | 442<br>(–10.9%) | 489<br>(–1.6%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 197 | 173<br>(–12.4%) | 168<br>(–14.7%) | 176<br>(–10.8%) | ***167<br>(–15.2%)*** | n/a | 171<br>(–13.1%) | 175<br>(–11.2%) |
| [BBC](https://www.bbc.co.uk/) | 798 | 793<br>(–0.7%) | 786<br>(–1.5%) | n/a | ***786<br>(–1.5%)*** | n/a | 789<br>(–1.2%) | 792<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 100 | 86<br>(–13.8%) | ***82<br>(–18.1%)*** | 86<br>(–13.5%) | 83<br>(–16.5%) | n/a | 85<br>(–15.1%) | 85<br>(–14.4%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 34<br>(–6.7%) | ***33<br>(–8.7%)*** | 35<br>(–2.3%) | 33<br>(–8.6%) | n/a | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 271 | 257<br>(–5.1%) | ***209<br>(–22.9%)*** | 268<br>(–1.2%) | 210<br>(–22.6%) | n/a | 257<br>(–5.2%) | 268<br>(–1.2%) |
| [CERN](https://home.cern/) | 292 | 280<br>(–4%) | 276<br>(–5.5%) | 280<br>(–4.1%) | ***273<br>(–6.5%)*** | n/a | 278<br>(–4.7%) | 279<br>(–4.3%) |
| [Codeberg](https://codeberg.org/) | 34 | 31<br>(–7%) | ***31<br>(–9.3%)*** | 31<br>(–8.2%) | 31<br>(–8.7%) | n/a | 31<br>(–9.1%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 120 | 112<br>(–6.2%) | ***106<br>(–11%)*** | 112<br>(–6.1%) | 109<br>(–8.7%) | n/a | 110<br>(–7.9%) | 112<br>(–6.2%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–0.7%) | ***112<br>(–1.2%)*** | 112<br>(–0.6%) | 112<br>(–1%) | n/a | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 111 | 98<br>(–11.8%) | ***96<br>(–13.4%)*** | 100<br>(–9.8%) | 97<br>(–12.1%) | n/a | 97<br>(–12.1%) | 100<br>(–9.5%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 224<br>(–19.5%) | ***219<br>(–21.2%)*** | 270<br>(–3%) | 220<br>(–20.9%) | n/a | 223<br>(–20%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 17<br>(–27.6%) | 16<br>(–30.7%) | 17<br>(–27.5%) | ***16<br>(–30.7%)*** | n/a | 16<br>(–29.3%) | 17<br>(–28.2%) |
| [DIN](https://www.din.de/) | 255 | 183<br>(–28.3%) | ***177<br>(–30.6%)*** | 184<br>(–27.7%) | 178<br>(–30.1%) | n/a | 181<br>(–29%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 545 | 542<br>(–0.6%) | ***539<br>(–1.1%)*** | n/a | 540<br>(–1%) | n/a | 540<br>(–0.9%) | 543<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7450 | 7085<br>(–4.9%) | ***6840<br>(–8.2%)*** | n/a | 6895<br>(–7.5%) | n/a | 6987<br>(–6.2%) | 7012<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 77<br>(–7.7%) | ***77<br>(–8.3%)*** | 78<br>(–6.6%) | 77<br>(–8.2%) | n/a | 77<br>(–7.9%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 50<br>(–8.2%) | ***47<br>(–13.1%)*** | 50<br>(–7.9%) | 47<br>(–12.3%) | n/a | 48<br>(–11.3%) | 49<br>(–9.7%) |
| [ELLE](https://www.elle.com/) | 726 | 721<br>(–0.7%) | ***716<br>(–1.4%)*** | n/a | 718<br>(–1.1%) | n/a | 718<br>(–1.1%) | 721<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 194<br>(–18.9%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | n/a | 189<br>(–21.4%) | 205<br>(–14.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33%) | 33<br>(–33.8%) | 33<br>(–32.9%) | ***33<br>(–33.9%)*** | n/a | 33<br>(–33.4%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 434<br>(–1.1%) | ***431<br>(–1.8%)*** | n/a | 431<br>(–1.7%) | n/a | 431<br>(–1.7%) | 437<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 289<br>(–3.1%) | 286<br>(–4.1%) | n/a | ***285<br>(–4.2%)*** | n/a | 286<br>(–3.9%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 205<br>(–2.7%) | ***192<br>(–8.8%)*** | 205<br>(–2.6%) | 196<br>(–7.1%) | n/a | 204<br>(–3.4%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1396 | 1349<br>(–3.3%) | ***1256<br>(–10%)*** | n/a | 1332<br>(–4.5%) | n/a | 1336<br>(–4.2%) | 1336<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 957 | 829<br>(–13.4%) | ***783<br>(–18.2%)*** | n/a | 829<br>(–13.4%) | n/a | 832<br>(–13%) | 830<br>(–13.2%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 116<br>(–3.5%) | ***114<br>(–5.1%)*** | 116<br>(–3.4%) | 114<br>(–5%) | n/a | 115<br>(–4.2%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 138<br>(–26.3%) | 136<br>(–27%) | 138<br>(–26.2%) | ***136<br>(–27.1%)*** | n/a | 136<br>(–26.9%) | 138<br>(–26.3%) |
| [Front-End Social](https://front-end.social/) | 54 | 52<br>(–4.6%) | ***50<br>(–7.2%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | n/a | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 238<br>(+4.2%) | 228<br>(0%) | ***228<br>(–0.2%)*** | 228<br>(0%) | n/a | 228<br>(0%) | 247<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | ***11<br>(–26.4%)*** | 12<br>(–17%) | 11<br>(–26.3%) | n/a | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1839 | 1816<br>(–1.2%) | ***1793<br>(–2.5%)*** | n/a | 1805<br>(–1.9%) | n/a | 1807<br>(–1.7%) | 1825<br>(–0.8%) |
| [Ground News](https://ground.news/) | 2132 | 2109<br>(–1.1%) | ***2058<br>(–3.5%)*** | n/a | 2084<br>(–2.2%) | n/a | 2108<br>(–1.1%) | 2118<br>(–0.7%) |
| [heise online](https://www.heise.de/) | 905 | 897<br>(–0.9%) | ***867<br>(–4.3%)*** | n/a | 870<br>(–3.8%) | n/a | 888<br>(–1.9%) | 890<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 60<br>(–2.7%) | ***59<br>(–4.4%)*** | 60<br>(–2.9%) | 59<br>(–4.1%) | n/a | 60<br>(–3.7%) | 60<br>(–3.2%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 393 | 371<br>(–5.6%) | ***365<br>(–7%)*** | n/a | 366<br>(–6.8%) | n/a | 368<br>(–6.4%) | 372<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | ***119<br>(–3%)*** | 119<br>(–3%) | 121<br>(–1.2%) | 120<br>(–2.2%) | n/a | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | n/a | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 272 | 235<br>(–13.5%) | ***227<br>(–16.6%)*** | 234<br>(–14%) | 228<br>(–16.2%) | n/a | 231<br>(–15%) | 233<br>(–14.2%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.4%) | ***32<br>(–61.9%)*** | 35<br>(–57.5%) | 32<br>(–61.2%) | n/a | 33<br>(–59.6%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–21.6%) | 33<br>(–24%) | 34<br>(–22.5%) | ***33<br>(–24.5%)*** | n/a | 33<br>(–23.5%) | 34<br>(–23.1%) |
| [InfoQ China](https://www.infoq.cn/) | 668 | 645<br>(–3.5%) | ***638<br>(–4.5%)*** | n/a | 639<br>(–4.3%) | n/a | 642<br>(–3.9%) | 645<br>(–3.4%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 141<br>(–6.9%) | ***140<br>(–7.8%)*** | 144<br>(–5%) | 140<br>(–7.4%) | n/a | 141<br>(–7.1%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 139 | 82<br>(–40.6%) | ***79<br>(–42.8%)*** | 83<br>(–39.9%) | 81<br>(–41.9%) | n/a | 80<br>(–42.1%) | 83<br>(–40.5%) |
| [ITWeb](https://www.itweb.co.za/) | 313 | 296<br>(–5.5%) | ***277<br>(–11.5%)*** | n/a | 280<br>(–10.5%) | n/a | 293<br>(–6.3%) | 293<br>(–6.3%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 363<br>(–12.2%) | ***356<br>(–13.9%)*** | n/a | 357<br>(–13.7%) | n/a | 361<br>(–12.9%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 54 | 55<br>(+1.9%) | ***53<br>(–1.9%)*** | 53<br>(–0.8%) | 53<br>(–1.2%) | n/a | 53<br>(–1.6%) | 54<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 238<br>(–1.6%) | 235<br>(–3%) | 237<br>(–2.1%) | 236<br>(–2.8%) | n/a | 236<br>(–2.5%) | ***227<br>(–6.5%)*** |
| [KoRo](https://www.koro.com/) | 946 | 892<br>(–5.7%) | 883<br>(–6.6%) | n/a | ***883<br>(–6.7%)*** | n/a | 896<br>(–5.3%) | 917<br>(–3.1%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 54 | 47<br>(–13.6%) | ***43<br>(–21%)*** | 48<br>(–11.8%) | 43<br>(–20.7%) | n/a | 47<br>(–13.3%) | 46<br>(–14%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–3.9%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–6.1%) | n/a | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 519 | 514<br>(–1%) | 498<br>(–4%) | n/a | ***495<br>(–4.5%)*** | n/a | 510<br>(–1.8%) | 510<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 170 | 169<br>(–0.6%) | ***157<br>(–7.6%)*** | 168<br>(–1.2%) | 158<br>(–7%) | n/a | 167<br>(–1.7%) | 168<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–28.5%) | ***12<br>(–30.4%)*** | 12<br>(–27%) | 12<br>(–30.2%) | n/a | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 48<br>(–4.5%) | ***47<br>(–7.1%)*** | 48<br>(–3.7%) | 47<br>(–7.1%) | n/a | 47<br>(–7%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.1%) | ***69<br>(–41.8%)*** | 73<br>(–38.7%) | 71<br>(–40.3%) | n/a | 70<br>(–41.1%) | 72<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 306<br>(–11.5%) | ***297<br>(–14.2%)*** | n/a | 299<br>(–13.6%) | n/a | 304<br>(–12.1%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 318 | 309<br>(–2.8%) | ***257<br>(–19.4%)*** | n/a | 267<br>(–16%) | n/a | 308<br>(–3.2%) | 316<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 344 | 331<br>(–3.8%) | ***325<br>(–5.6%)*** | n/a | 325<br>(–5.5%) | n/a | 329<br>(–4.4%) | 330<br>(–4.1%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | ***35<br>(–25.9%)*** | 36<br>(–22.1%) | 35<br>(–25.8%) | n/a | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 344 | 323<br>(–6.1%) | 319<br>(–7.3%) | n/a | ***319<br>(–7.3%)*** | n/a | 320<br>(–6.9%) | 322<br>(–6.5%) |
| [Nikkei](https://www.nikkei.com/) | 710 | 672<br>(–5.4%) | ***643<br>(–9.5%)*** | n/a | 659<br>(–7.2%) | n/a | 662<br>(–6.7%) | 700<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 46 | 36<br>(–22%) | ***35<br>(–25.6%)*** | 36<br>(–23.3%) | 35<br>(–25.4%) | n/a | 35<br>(–25%) | 35<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 120<br>(–2.9%) | 118<br>(–4.3%) | 120<br>(–2.8%) | ***117<br>(–5.3%)*** | n/a | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 319<br>(–1.6%) | ***316<br>(–2.6%)*** | n/a | 316<br>(–2.5%) | n/a | 318<br>(–1.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 104<br>(–5.2%) | 98<br>(–11%) | 105<br>(–5.1%) | ***98<br>(–11.2%)*** | n/a | 104<br>(–5.6%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 186 | 137<br>(–26%) | ***133<br>(–28.1%)*** | 137<br>(–26.2%) | 135<br>(–27.1%) | n/a | 136<br>(–26.7%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 177 | 148<br>(–15.9%) | ***146<br>(–17.3%)*** | 149<br>(–15.8%) | 147<br>(–16.5%) | n/a | 147<br>(–16.8%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 143<br>(–2%) | ***141<br>(–3.6%)*** | 143<br>(–2.1%) | 141<br>(–3.5%) | n/a | 142<br>(–3%) | 143<br>(–2.2%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 184 | 179<br>(–2.9%) | ***171<br>(–7.2%)*** | 179<br>(–2.7%) | 171<br>(–7%) | n/a | 174<br>(–5.3%) | 179<br>(–2.5%) |
| [Piccalilli](https://piccalil.li/) | 78 | 76<br>(–2.8%) | ***75<br>(–4.2%)*** | 76<br>(–2.3%) | 75<br>(–4.2%) | n/a | 75<br>(–4%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 61<br>(–26.3%) | ***61<br>(–27.2%)*** | 63<br>(–24.7%) | 61<br>(–26.5%) | n/a | 62<br>(–25.3%) | 63<br>(–24.6%) |
| [Qiita](https://qiita.com/) | 317 | 312<br>(–1.4%) | ***305<br>(–3.5%)*** | n/a | 307<br>(–3%) | n/a | 307<br>(–3%) | 310<br>(–2.1%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | ***29<br>(–22.9%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | n/a | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 138 | 137<br>(–1%) | ***136<br>(–1.4%)*** | 136<br>(–1.2%) | 136<br>(–1.4%) | n/a | 136<br>(–1.4%) | 136<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 785 | 748<br>(–4.7%) | ***743<br>(–5.3%)*** | n/a | 748<br>(–4.7%) | n/a | 749<br>(–4.6%) | 757<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 70<br>(–1.7%) | ***67<br>(–6%)*** | 69<br>(–2%) | 67<br>(–5.3%) | n/a | 69<br>(–2.2%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 184 | 173<br>(–5.8%) | ***169<br>(–7.8%)*** | 175<br>(–4.9%) | 170<br>(–7.3%) | n/a | 171<br>(–6.7%) | 175<br>(–4.9%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–8.9%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 30<br>(–10.7%) | n/a | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–13.1%) | ***17<br>(–17.6%)*** | 18<br>(–13.4%) | 17<br>(–17.4%) | n/a | 18<br>(–16.3%) | 18<br>(–14%) |
| [SFLC.in](https://sflc.in/) | 169 | 166<br>(–1.7%) | ***163<br>(–3.6%)*** | 166<br>(–1.5%) | 163<br>(–3.4%) | n/a | 165<br>(–2.2%) | 166<br>(–1.4%) |
| [SitePoint](https://www.sitepoint.com/) | 223 | 220<br>(–1.3%) | ***219<br>(–1.6%)*** | 221<br>(–0.7%) | 219<br>(–1.6%) | n/a | 221<br>(–1%) | 221<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 282 | 283<br>(+0.2%) | ***280<br>(–0.6%)*** | 282<br>(–0.1%) | 281<br>(–0.4%) | n/a | 281<br>(–0.4%) | 282<br>(0%) |
| [Startpage](https://www.startpage.com/) | 22 | 21<br>(–2.4%) | ***21<br>(–2.6%)*** | 21<br>(–2.1%) | 21<br>(–2.5%) | n/a | 21<br>(–2.3%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 57 | 42<br>(–26.2%) | ***39<br>(–30.2%)*** | 41<br>(–27%) | 40<br>(–29.4%) | n/a | 41<br>(–28.1%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 392 | 368<br>(–6.1%) | ***342<br>(–12.6%)*** | n/a | 359<br>(–8.4%) | n/a | 365<br>(–6.8%) | 366<br>(–6.6%) |
| [TEDIC](https://www.tedic.org/) | 95 | 86<br>(–9.9%) | ***83<br>(–12.5%)*** | 86<br>(–9.8%) | 85<br>(–11%) | n/a | 85<br>(–10.6%) | 85<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.4%) | ***88<br>(–6.5%)*** | 89<br>(–6%) | 88<br>(–6.5%) | n/a | 88<br>(–6.2%) | 88<br>(–6%) |
| [The Left](https://left.eu/) | 124 | 111<br>(–10.5%) | ***107<br>(–13.6%)*** | 114<br>(–8.2%) | 108<br>(–13%) | n/a | 110<br>(–11.5%) | 114<br>(–8.3%) |
| [The Register](https://www.theregister.com/) | 1123 | 893<br>(–20.5%) | ***834<br>(–25.8%)*** | n/a | 853<br>(–24.1%) | n/a | 883<br>(–21.4%) | 883<br>(–21.4%) |
| [Toss Tech](https://toss.tech/) | 285 | 284<br>(–0.2%) | ***282<br>(–0.9%)*** | 283<br>(–0.5%) | 282<br>(–0.9%) | n/a | 282<br>(–0.7%) | 283<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 175<br>(–9.9%) | ***175<br>(–10.3%)*** | 179<br>(–8.2%) | 176<br>(–9.9%) | n/a | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 575 | 538<br>(–6.5%) | ***214<br>(–62.7%)*** | n/a | 536<br>(–6.8%) | n/a | 536<br>(–6.8%) | 227<br>(–60.5%) |
| [United Nations](https://www.un.org/en/) | 161 | 140<br>(–12.9%) | ***134<br>(–17%)*** | 140<br>(–12.9%) | 134<br>(–16.9%) | n/a | 138<br>(–14.4%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 84<br>(–8.9%) | ***83<br>(–10.8%)*** | 84<br>(–9.4%) | 83<br>(–10.5%) | n/a | 83<br>(–10.4%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 49 | 40<br>(–17.9%) | ***40<br>(–19.6%)*** | 40<br>(–17.9%) | 40<br>(–19.2%) | n/a | 40<br>(–19.2%) | 40<br>(–17.9%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 253 | 245<br>(–3.1%) | ***234<br>(–7.4%)*** | 241<br>(–4.6%) | 234<br>(–7.3%) | n/a | 237<br>(–6%) | 241<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 223 | 206<br>(–7.6%) | ***203<br>(–9.2%)*** | 207<br>(–7.2%) | 204<br>(–8.9%) | n/a | 205<br>(–8.3%) | 208<br>(–7.1%) |
| [博客园](https://www.cnblogs.com/) | 80 | 57<br>(–29.2%) | ***56<br>(–29.6%)*** | 58<br>(–28.2%) | 57<br>(–29.4%) | n/a | 57<br>(–28.8%) | 58<br>(–28.2%) |
| [稀土掘金](https://juejin.cn/) | 77 | 75<br>(–3.3%) | ***73<br>(–6.1%)*** | 75<br>(–3.3%) | 74<br>(–4%) | n/a | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 103/103 | 103/103 | 74/103 | 103/103 | n/a | 103/103 | 103/103 |
| **Average processing time** |  | 19 ms | 15 ms | 190 ms<br>(estimate) | 31 ms | n/a | ***5.3 ms*** | 117 ms |
| **Median processing time** |  | 9.2 ms | 6.1 ms | 136 ms<br>(estimate) | 13 ms | n/a | ***1.9 ms*** | 34 ms |
| **Average result (KB)** | 350 | 328<br>(–6.2%) | ***315<br>(–10%)*** | 341<br>(–2.4%) | 321<br>(–8.2%) | n/a | 325<br>(–7%) | 326<br>(–6.7%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 82<br>(–21.9%) | ***78<br>(–25.3%)*** | 84<br>(–19.6%) | 79<br>(–24.9%) | 82<br>(–21.7%) | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 58<br>(–9.2%) | 45<br>(–30%) | 57<br>(–9.9%) | ***39<br>(–38.6%)*** | 57<br>(–10.3%) | 56<br>(–11.4%) | 59<br>(–7.1%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 51<br>(–17.7%) | ***49<br>(–21.2%)*** | 50<br>(–19.1%) | 49<br>(–21.1%) | 50<br>(–20.1%) | 50<br>(–20.1%) | 50<br>(–19.6%) |
| [AfricTivistes](https://www.africtivistes.org/) | 497 | 443<br>(–10.7%) | 427<br>(–13.9%) | n/a | ***420<br>(–15.4%)*** | 439<br>(–11.6%) | 440<br>(–11.4%) | 489<br>(–1.6%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 197 | 161<br>(–18.4%) | 127<br>(–35.6%) | 160<br>(–18.9%) | ***120<br>(–39.3%)*** | n/a | 162<br>(–18.1%) | 175<br>(–11.2%) |
| [BBC](https://www.bbc.co.uk/) | 798 | 752<br>(–5.8%) | ***734<br>(–8.1%)*** | n/a | 736<br>(–7.8%) | 759<br>(–4.8%) | 747<br>(–6.3%) | 792<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 100 | 84<br>(–15.4%) | ***66<br>(–34%)*** | 85<br>(–15%) | 67<br>(–33.4%) | 82<br>(–18.3%) | 83<br>(–17.1%) | 85<br>(–14.4%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–6.8%) | ***32<br>(–10.1%)*** | 35<br>(–2.6%) | 32<br>(–9.6%) | 34<br>(–6.1%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 271 | 257<br>(–5.3%) | ***204<br>(–24.8%)*** | 268<br>(–1.3%) | 204<br>(–24.6%) | 254<br>(–6.2%) | 257<br>(–5.3%) | 268<br>(–1.2%) |
| [CERN](https://home.cern/) | 292 | 264<br>(–9.4%) | 224<br>(–23.1%) | 269<br>(–7.7%) | ***213<br>(–26.8%)*** | 268<br>(–8%) | 263<br>(–9.8%) | 279<br>(–4.3%) |
| [Codeberg](https://codeberg.org/) | 34 | 31<br>(–7.8%) | 28<br>(–17.9%) | 31<br>(–9.2%) | ***28<br>(–18.4%)*** | 30<br>(–10.3%) | 30<br>(–9.8%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 120 | 102<br>(–14.6%) | ***78<br>(–34.8%)*** | 105<br>(–12.1%) | 80<br>(–33%) | 102<br>(–15%) | 102<br>(–15%) | 112<br>(–6.2%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 108<br>(–4.5%) | 85<br>(–24.8%) | 112<br>(–1.1%) | ***85<br>(–24.9%)*** | 106<br>(–6.3%) | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 111 | 95<br>(–14.4%) | 66<br>(–39.9%) | 98<br>(–11.5%) | ***65<br>(–40.8%)*** | 92<br>(–16.5%) | 95<br>(–14.3%) | 100<br>(–9.5%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 219<br>(–21.4%) | 191<br>(–31.4%) | 266<br>(–4.5%) | ***178<br>(–35.9%)*** | 216<br>(–22.3%) | 218<br>(–21.8%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 17<br>(–28.7%) | 16<br>(–32.3%) | 16<br>(–28.8%) | ***16<br>(–32.5%)*** | 16<br>(–30.4%) | 16<br>(–30.3%) | 17<br>(–28.2%) |
| [DIN](https://www.din.de/) | 255 | 176<br>(–30.9%) | ***133<br>(–47.7%)*** | 177<br>(–30.6%) | 134<br>(–47.5%) | 173<br>(–32.1%) | 175<br>(–31.1%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 545 | 512<br>(–6.1%) | 503<br>(–7.7%) | n/a | ***498<br>(–8.7%)*** | 503<br>(–7.8%) | 504<br>(–7.5%) | 543<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7450 | 7085<br>(–4.9%) | ***6839<br>(–8.2%)*** | n/a | 6894<br>(–7.5%) | 6956<br>(–6.6%) | 6987<br>(–6.2%) | 7012<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 74<br>(–11.1%) | ***55<br>(–34.5%)*** | 76<br>(–9.5%) | 55<br>(–34.4%) | 74<br>(–12.1%) | 74<br>(–11.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 48<br>(–11%) | ***44<br>(–19.2%)*** | 49<br>(–10.2%) | 44<br>(–18.2%) | 47<br>(–13.4%) | 47<br>(–12.2%) | 49<br>(–9.7%) |
| [ELLE](https://www.elle.com/) | 726 | 710<br>(–2.2%) | ***696<br>(–4.1%)*** | n/a | 700<br>(–3.5%) | 718<br>(–1.1%) | 707<br>(–2.5%) | 721<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 194<br>(–18.9%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | 200<br>(–16.6%) | 189<br>(–21.4%) | 205<br>(–14.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.1%) | 31<br>(–37.6%) | 33<br>(–32.9%) | ***31<br>(–37.7%)*** | 33<br>(–33.8%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 429<br>(–2.3%) | 108<br>(–75.5%) | n/a | ***106<br>(–75.8%)*** | 430<br>(–1.9%) | 426<br>(–2.8%) | 437<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 284<br>(–4.5%) | 245<br>(–17.8%) | n/a | ***241<br>(–19.1%)*** | 280<br>(–6%) | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 197<br>(–6.7%) | ***142<br>(–32.5%)*** | 200<br>(–5.3%) | 143<br>(–32.1%) | 197<br>(–6.5%) | 195<br>(–7.3%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1396 | 1279<br>(–8.3%) | 1168<br>(–16.3%) | n/a | ***1152<br>(–17.5%)*** | 1336<br>(–4.3%) | 1331<br>(–4.6%) | 1336<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 957 | 821<br>(–14.2%) | ***706<br>(–26.2%)*** | n/a | 734<br>(–23.3%) | 795<br>(–16.9%) | 830<br>(–13.3%) | 830<br>(–13.2%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 111<br>(–7.3%) | 73<br>(–39.2%) | 113<br>(–5.9%) | ***68<br>(–43.3%)*** | 111<br>(–7.2%) | 111<br>(–7.2%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 131<br>(–29.9%) | 57<br>(–69.6%) | 132<br>(–29.4%) | ***56<br>(–69.8%)*** | 131<br>(–29.8%) | 130<br>(–30.4%) | 138<br>(–26.3%) |
| [Front-End Social](https://front-end.social/) | 54 | 51<br>(–5.6%) | ***47<br>(–13.7%)*** | 52<br>(–4%) | 47<br>(–13.6%) | 51<br>(–5.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 228 | 238<br>(+4.2%) | ***221<br>(–3.1%)*** | 228<br>(–0.2%) | 221<br>(–3.1%) | 228<br>(0%) | 228<br>(0%) | 247<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–18.2%) | ***10<br>(–30.4%)*** | 12<br>(–18.2%) | ***10<br>(–30.4%)*** | 12<br>(–19.2%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1839 | 1786<br>(–2.9%) | ***1361<br>(–26%)*** | n/a | 1432<br>(–22.1%) | 1781<br>(–3.1%) | 1786<br>(–2.9%) | 1825<br>(–0.8%) |
| [Ground News](https://ground.news/) | 2132 | 2000<br>(–6.2%) | ***1913<br>(–10.3%)*** | n/a | 1936<br>(–9.2%) | 1997<br>(–6.3%) | 1995<br>(–6.4%) | 2118<br>(–0.7%) |
| [heise online](https://www.heise.de/) | 905 | 896<br>(–1%) | ***862<br>(–4.8%)*** | n/a | 865<br>(–4.5%) | 868<br>(–4.1%) | 886<br>(–2.1%) | 890<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 55<br>(–10.7%) | 42<br>(–32.2%) | 57<br>(–7.9%) | ***33<br>(–46.8%)*** | 56<br>(–9%) | 55<br>(–11%) | 60<br>(–3.2%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 393 | 365<br>(–7.1%) | 310<br>(–21%) | n/a | ***310<br>(–21.1%)*** | 361<br>(–8.1%) | 363<br>(–7.5%) | 372<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–3.1%) | ***119<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.5%) | 121<br>(–1.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 154<br>(+1.8%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.3%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 272 | 232<br>(–14.6%) | 217<br>(–20.3%) | 233<br>(–14.3%) | ***216<br>(–20.5%)*** | 228<br>(–16.2%) | 230<br>(–15.3%) | 233<br>(–14.2%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–58.6%) | ***31<br>(–62.7%)*** | 34<br>(–58.3%) | 31<br>(–62%) | 33<br>(–60.2%) | 33<br>(–59.8%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 34<br>(–23.1%) | 32<br>(–26.4%) | 33<br>(–23.8%) | ***32<br>(–27.1%)*** | 32<br>(–25.7%) | 33<br>(–24.9%) | 34<br>(–23.1%) |
| [InfoQ China](https://www.infoq.cn/) | 668 | 643<br>(–3.7%) | 577<br>(–13.6%) | n/a | ***482<br>(–27.8%)*** | 641<br>(–4%) | 640<br>(–4.1%) | 645<br>(–3.4%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 138<br>(–8.8%) | 120<br>(–20.6%) | 143<br>(–6%) | ***120<br>(–20.9%)*** | 137<br>(–10%) | 138<br>(–8.9%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 139 | 82<br>(–40.8%) | ***77<br>(–44.3%)*** | 83<br>(–40.1%) | 79<br>(–43.4%) | 81<br>(–41.3%) | 80<br>(–42.2%) | 83<br>(–40.5%) |
| [ITWeb](https://www.itweb.co.za/) | 313 | 291<br>(–7%) | 165<br>(–47.3%) | n/a | ***162<br>(–48.2%)*** | 290<br>(–7.4%) | 288<br>(–7.9%) | 293<br>(–6.3%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 345<br>(–16.6%) | 180<br>(–56.5%) | n/a | ***169<br>(–59.1%)*** | 347<br>(–16.3%) | 342<br>(–17.3%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 54 | 55<br>(+1.9%) | ***46<br>(–14%)*** | 53<br>(–0.8%) | 46<br>(–13.9%) | 53<br>(–0.6%) | 53<br>(–1.6%) | 54<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 216<br>(–10.9%) | 210<br>(–13.3%) | 233<br>(–4%) | ***209<br>(–13.8%)*** | 217<br>(–10.6%) | 227<br>(–6.2%) | 227<br>(–6.5%) |
| [KoRo](https://www.koro.com/) | 946 | 888<br>(–6.2%) | ***871<br>(–7.9%)*** | n/a | 875<br>(–7.6%) | 900<br>(–4.9%) | 892<br>(–5.7%) | 917<br>(–3.1%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 54 | 43<br>(–19.9%) | 28<br>(–48.4%) | 44<br>(–17.5%) | ***25<br>(–53.3%)*** | 44<br>(–17.9%) | 44<br>(–19.2%) | 46<br>(–14%) |
| [Ladybird](https://ladybird.org/) | 29 | 28<br>(–4%) | ***26<br>(–9.1%)*** | 28<br>(–5%) | 26<br>(–8.9%) | 27<br>(–6%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 519 | 495<br>(–4.6%) | 471<br>(–9.3%) | n/a | ***469<br>(–9.5%)*** | 493<br>(–5.1%) | 490<br>(–5.5%) | 510<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 170 | 166<br>(–2.5%) | ***134<br>(–20.9%)*** | 166<br>(–2.4%) | 134<br>(–20.9%) | 164<br>(–3.3%) | 164<br>(–3.5%) | 168<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10<br>(–43.8%) | 9<br>(–47%) | 10<br>(–42.7%) | ***9<br>(–47.1%)*** | 9<br>(–45.8%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 47<br>(–5.4%) | ***43<br>(–13.8%)*** | 48<br>(–3.9%) | 43<br>(–13.8%) | 47<br>(–5.7%) | 46<br>(–7.3%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 71<br>(–40.2%) | 68<br>(–42.9%) | 73<br>(–38.8%) | ***62<br>(–47.9%)*** | 70<br>(–41.2%) | 70<br>(–41.2%) | 72<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 305<br>(–11.8%) | 219<br>(–36.7%) | n/a | ***218<br>(–37%)*** | 276<br>(–20.1%) | 304<br>(–12.2%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 318 | 306<br>(–3.9%) | ***188<br>(–41.1%)*** | n/a | 189<br>(–40.5%) | 295<br>(–7.3%) | 306<br>(–3.9%) | 316<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 344 | 325<br>(–5.6%) | 304<br>(–11.7%) | n/a | ***303<br>(–11.9%)*** | 320<br>(–7.1%) | 319<br>(–7.2%) | 330<br>(–4.1%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 37<br>(–20.9%) | 32<br>(–31.8%) | 36<br>(–22.1%) | ***32<br>(–31.8%)*** | 35<br>(–25.2%) | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 344 | 311<br>(–9.5%) | 256<br>(–25.7%) | n/a | ***253<br>(–26.4%)*** | 314<br>(–8.8%) | 309<br>(–10.2%) | 322<br>(–6.5%) |
| [Nikkei](https://www.nikkei.com/) | 710 | 669<br>(–5.8%) | ***626<br>(–11.9%)*** | n/a | 641<br>(–9.8%) | 685<br>(–3.5%) | 662<br>(–6.8%) | 700<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 46 | 36<br>(–22.1%) | ***34<br>(–26.9%)*** | 36<br>(–23.3%) | 34<br>(–26.7%) | 35<br>(–25%) | 35<br>(–25%) | 35<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 114<br>(–7.4%) | 68<br>(–44.8%) | 116<br>(–5.8%) | ***64<br>(–47.9%)*** | 114<br>(–7.3%) | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 312<br>(–3.7%) | 139<br>(–57.1%) | n/a | ***107<br>(–67.2%)*** | 315<br>(–3.1%) | 312<br>(–3.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 99<br>(–10.6%) | 60<br>(–45.4%) | 102<br>(–7.3%) | ***59<br>(–46.9%)*** | 101<br>(–8.7%) | 98<br>(–11.1%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 186 | 132<br>(–28.7%) | ***83<br>(–55.1%)*** | 136<br>(–26.6%) | 85<br>(–54.3%) | 134<br>(–27.6%) | 132<br>(–29.1%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 177 | 148<br>(–16%) | 145<br>(–18%) | 148<br>(–15.9%) | ***145<br>(–18.1%)*** | 147<br>(–16.6%) | 147<br>(–16.9%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 136<br>(–6.9%) | 86<br>(–41.1%) | 139<br>(–4.7%) | ***81<br>(–44.8%)*** | 138<br>(–5.5%) | 135<br>(–7.7%) | 143<br>(–2.2%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 184 | 161<br>(–12.7%) | ***147<br>(–19.9%)*** | 165<br>(–10.5%) | 148<br>(–19.7%) | 156<br>(–15.3%) | 159<br>(–13.4%) | 179<br>(–2.5%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4%) | 64<br>(–18.1%) | 76<br>(–3%) | ***61<br>(–21.4%)*** | 73<br>(–6.6%) | 74<br>(–4.9%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 61<br>(–26.6%) | ***48<br>(–42.2%)*** | 62<br>(–25%) | 48<br>(–42%) | 58<br>(–30.6%) | 62<br>(–25.6%) | 63<br>(–24.6%) |
| [Qiita](https://qiita.com/) | 317 | 305<br>(–3.8%) | ***265<br>(–16.3%)*** | n/a | 270<br>(–14.7%) | 305<br>(–3.7%) | 301<br>(–5.1%) | 310<br>(–2.1%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 29<br>(–21.8%) | 22<br>(–41.6%) | 32<br>(–13.5%) | ***22<br>(–41.7%)*** | 28<br>(–24.1%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 138 | 122<br>(–11.4%) | ***116<br>(–16.3%)*** | 136<br>(–1.4%) | 116<br>(–16.1%) | 120<br>(–12.8%) | 122<br>(–11.9%) | 136<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 785 | 732<br>(–6.8%) | 460<br>(–41.4%) | n/a | ***453<br>(–42.2%)*** | 721<br>(–8.1%) | 732<br>(–6.7%) | 757<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 65<br>(–8.5%) | 45<br>(–36%) | 66<br>(–6.6%) | ***43<br>(–39.2%)*** | 66<br>(–7.4%) | 65<br>(–8.1%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 184 | 168<br>(–8.7%) | 143<br>(–22.3%) | 172<br>(–6.6%) | ***140<br>(–23.5%)*** | 166<br>(–9.8%) | 167<br>(–9.3%) | 175<br>(–4.9%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9%) | 30<br>(–10.9%) | 32<br>(–7.3%) | ***30<br>(–11%)*** | 31<br>(–10.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14%) | ***17<br>(–19.2%)*** | 18<br>(–14.2%) | 17<br>(–19%) | 18<br>(–16.8%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SFLC.in](https://sflc.in/) | 169 | 162<br>(–3.7%) | 133<br>(–21.2%) | 166<br>(–1.8%) | ***131<br>(–22.3%)*** | 163<br>(–3.1%) | 162<br>(–4.2%) | 166<br>(–1.4%) |
| [SitePoint](https://www.sitepoint.com/) | 223 | 212<br>(–4.8%) | ***201<br>(–9.9%)*** | 214<br>(–4.2%) | 201<br>(–9.8%) | 209<br>(–6.2%) | 213<br>(–4.6%) | 221<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 282 | 281<br>(–0.3%) | 268<br>(–4.8%) | 282<br>(–0.1%) | ***268<br>(–5.1%)*** | 281<br>(–0.2%) | 279<br>(–0.9%) | 282<br>(0%) |
| [Startpage](https://www.startpage.com/) | 22 | 19<br>(–13.7%) | 16<br>(–25.6%) | 19<br>(–13%) | ***16<br>(–26.9%)*** | 19<br>(–13.6%) | 20<br>(–6%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 57 | 42<br>(–26.2%) | ***38<br>(–32.2%)*** | 41<br>(–27.2%) | 39<br>(–31.5%) | 40<br>(–28.7%) | 41<br>(–28.2%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 392 | 333<br>(–14.9%) | ***299<br>(–23.6%)*** | n/a | 325<br>(–17.2%) | 340<br>(–13.3%) | 344<br>(–12.2%) | 366<br>(–6.6%) |
| [TEDIC](https://www.tedic.org/) | 95 | 80<br>(–15.5%) | 53<br>(–44.7%) | 81<br>(–14.8%) | ***48<br>(–49.3%)*** | 80<br>(–15.6%) | 80<br>(–15.4%) | 85<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 88<br>(–6.5%) | ***84<br>(–10.4%)*** | 88<br>(–6.1%) | 84<br>(–10.4%) | 86<br>(–9.1%) | 88<br>(–6.3%) | 88<br>(–6%) |
| [The Left](https://left.eu/) | 124 | 105<br>(–15.3%) | ***90<br>(–27.5%)*** | 111<br>(–10.9%) | 91<br>(–27.1%) | 105<br>(–15.4%) | 106<br>(–15%) | 114<br>(–8.3%) |
| [The Register](https://www.theregister.com/) | 1123 | 849<br>(–24.5%) | ***766<br>(–31.8%)*** | n/a | 785<br>(–30.1%) | 839<br>(–25.3%) | 848<br>(–24.6%) | 883<br>(–21.4%) |
| [Toss Tech](https://toss.tech/) | 285 | 277<br>(–2.8%) | 271<br>(–4.6%) | 276<br>(–3.1%) | ***271<br>(–4.6%)*** | 274<br>(–3.7%) | 273<br>(–4%) | 283<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 151<br>(–22.6%) | 132<br>(–32.1%) | 158<br>(–18.7%) | ***131<br>(–32.6%)*** | 150<br>(–22.9%) | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 575 | 520<br>(–9.6%) | ***195<br>(–66.1%)*** | n/a | 511<br>(–11.1%) | 521<br>(–9.4%) | 518<br>(–9.9%) | 227<br>(–60.5%) |
| [United Nations](https://www.un.org/en/) | 161 | 136<br>(–15.5%) | 89<br>(–44.5%) | 129<br>(–19.6%) | ***89<br>(–44.8%)*** | 130<br>(–19.1%) | 134<br>(–16.8%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 81<br>(–12.2%) | ***64<br>(–30.6%)*** | 82<br>(–11.6%) | 64<br>(–30.6%) | n/a | 81<br>(–13%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 49 | 39<br>(–21.7%) | ***35<br>(–28.1%)*** | 39<br>(–21.8%) | 36<br>(–27.8%) | 38<br>(–23.1%) | 38<br>(–22.9%) | 40<br>(–17.9%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 253 | 244<br>(–3.3%) | ***221<br>(–12.6%)*** | 241<br>(–4.8%) | 221<br>(–12.5%) | 238<br>(–5.9%) | 237<br>(–6.2%) | 241<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 223 | 184<br>(–17.5%) | 154<br>(–30.9%) | 193<br>(–13.4%) | ***154<br>(–31.2%)*** | 184<br>(–17.6%) | 191<br>(–14.3%) | 208<br>(–7.1%) |
| [博客园](https://www.cnblogs.com/) | 80 | 56<br>(–29.7%) | 53<br>(–33.8%) | 57<br>(–28.6%) | ***53<br>(–34.4%)*** | 55<br>(–31.7%) | 57<br>(–29%) | 58<br>(–28.2%) |
| [稀土掘金](https://juejin.cn/) | 77 | 66<br>(–14%) | ***59<br>(–23.8%)*** | 73<br>(–5.9%) | 59<br>(–23.3%) | 65<br>(–16%) | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 103/103 | 103/103 | 74/103 | 103/103 | 101/103 | 103/103 | 103/103 |
| **Average processing time** |  | 25 ms | 41 ms | 827 ms<br>(estimate) | 157 ms | ***7.0 ms*** | 8.2 ms | 119 ms |
| **Median processing time** |  | 12 ms | 18 ms | 778 ms<br>(estimate) | 85 ms | ***4.0 ms*** | ***4.1 ms*** | 34 ms |
| **Average result (KB)** | 350 | 320<br>(–8.5%) | ***278<br>(–20.6%)*** | 339<br>(–3%) | 281<br>(–19.7%) | 318<br>(–9%) | 319<br>(–8.9%) | 326<br>(–6.7%) |

Benchmarks last updated: Oct 16, 2026 (Node.js 24.22.0, macOS 15.7.9, Apple M4)
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