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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 86<br>(–18.4%) | ***84<br>(–20.1%)*** | 89<br>(–15.1%) | 86<br>(–18%) | n/a | 86<br>(–18.5%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 59<br>(–7.4%) | ***58<br>(–8.3%)*** | 59<br>(–7.1%) | 59<br>(–8.2%) | n/a | 59<br>(–8%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.8%) | ***110<br>(–18.9%)*** | 113<br>(–16.7%) | 112<br>(–17.8%) | n/a | 112<br>(–17.4%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 50<br>(–20.1%) | ***49<br>(–20.8%)*** | 50<br>(–19%) | 49<br>(–20.7%) | n/a | 50<br>(–19.9%) | 50<br>(–19.6%) |
| [AfricTivistes](https://www.africtivistes.org/) | 497 | 439<br>(–11.7%) | ***427<br>(–14.1%)*** | n/a | 428<br>(–13.9%) | n/a | 442<br>(–10.9%) | 489<br>(–1.6%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 192 | 165<br>(–13.7%) | ***162<br>(–15.6%)*** | 171<br>(–11%) | 162<br>(–15.5%) | n/a | 166<br>(–13.3%) | 170<br>(–11.5%) |
| [BBC](https://www.bbc.co.uk/) | 701 | 692<br>(–1.4%) | ***690<br>(–1.6%)*** | n/a | 691<br>(–1.5%) | n/a | 693<br>(–1.2%) | 696<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 100 | 84<br>(–15.5%) | ***81<br>(–18.6%)*** | 86<br>(–13.5%) | 83<br>(–16.5%) | n/a | 85<br>(–15.1%) | 85<br>(–14.4%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.5%) | ***33<br>(–8.8%)*** | 35<br>(–2.3%) | 33<br>(–8.6%) | n/a | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 272 | 255<br>(–6.1%) | ***206<br>(–24.1%)*** | 269<br>(–1.2%) | 210<br>(–22.8%) | n/a | 258<br>(–5.2%) | 269<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 70 | 53<br>(–24.7%) | ***53<br>(–24.8%)*** | 55<br>(–21.7%) | 53<br>(–24.8%) | n/a | 53<br>(–24.2%) | 55<br>(–21.8%) |
| [CERN](https://home.cern/) | 292 | 278<br>(–4.8%) | 275<br>(–5.6%) | 280<br>(–4.1%) | ***273<br>(–6.5%)*** | n/a | 278<br>(–4.7%) | 279<br>(–4.3%) |
| [Codeberg](https://codeberg.org/) | 34 | 31<br>(–9%) | ***31<br>(–9.3%)*** | 31<br>(–8.2%) | 31<br>(–8.7%) | n/a | 31<br>(–9.1%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 120 | 110<br>(–8%) | ***106<br>(–11%)*** | 112<br>(–6.1%) | 109<br>(–8.7%) | n/a | 110<br>(–7.9%) | 112<br>(–6.2%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–1.3%) | ***111<br>(–1.7%)*** | 112<br>(–0.7%) | 112<br>(–1%) | n/a | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 111 | 96<br>(–13.2%) | ***95<br>(–14.5%)*** | 100<br>(–9.8%) | 97<br>(–12.1%) | n/a | 97<br>(–12.1%) | 100<br>(–9.5%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 221<br>(–20.4%) | ***218<br>(–21.5%)*** | 270<br>(–3%) | 220<br>(–20.9%) | n/a | 223<br>(–20%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–29%) | 16<br>(–30.7%) | 17<br>(–27.5%) | ***16<br>(–30.7%)*** | n/a | 16<br>(–29.3%) | 17<br>(–28.2%) |
| [DIN](https://www.din.de/) | 255 | 180<br>(–29.1%) | ***176<br>(–30.9%)*** | 184<br>(–27.7%) | 178<br>(–30.1%) | n/a | 181<br>(–29%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 545 | 540<br>(–0.9%) | ***539<br>(–1.2%)*** | n/a | 540<br>(–1%) | n/a | 540<br>(–0.9%) | 543<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7450 | 6981<br>(–6.3%) | ***6840<br>(–8.2%)*** | n/a | 6895<br>(–7.5%) | n/a | 6988<br>(–6.2%) | 7013<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 76<br>(–9%) | ***76<br>(–9.5%)*** | 78<br>(–6.6%) | 77<br>(–8.2%) | n/a | 77<br>(–7.9%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 48<br>(–10.4%) | ***47<br>(–13.1%)*** | 50<br>(–7.9%) | 47<br>(–12.3%) | n/a | 48<br>(–11.3%) | 49<br>(–9.8%) |
| [ELLE](https://www.elle.com/) | 726 | 717<br>(–1.2%) | ***716<br>(–1.2%)*** | n/a | 717<br>(–1.1%) | n/a | 717<br>(–1.1%) | 720<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | n/a | 189<br>(–21.4%) | 205<br>(–14.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***33<br>(–34.2%)*** | 33<br>(–32.9%) | 33<br>(–33.9%) | n/a | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 432<br>(–1.6%) | ***431<br>(–1.8%)*** | n/a | 431<br>(–1.7%) | n/a | 431<br>(–1.7%) | 437<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 286<br>(–4%) | 286<br>(–4.1%) | n/a | ***285<br>(–4.2%)*** | n/a | 286<br>(–3.9%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 203<br>(–3.6%) | ***192<br>(–8.9%)*** | 205<br>(–2.6%) | 196<br>(–7.1%) | n/a | 204<br>(–3.4%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1410 | 1347<br>(–4.5%) | ***1330<br>(–5.7%)*** | n/a | 1346<br>(–4.6%) | n/a | 1350<br>(–4.3%) | 1350<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 930 | 799<br>(–14.1%) | ***757<br>(–18.6%)*** | n/a | 809<br>(–13%) | n/a | 813<br>(–12.6%) | 810<br>(–12.9%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 114<br>(–4.6%) | ***113<br>(–5.3%)*** | 116<br>(–3.4%) | 114<br>(–5%) | n/a | 115<br>(–4.2%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 136<br>(–27%) | ***136<br>(–27.2%)*** | 138<br>(–26.2%) | 136<br>(–27.1%) | n/a | 136<br>(–26.9%) | 138<br>(–26.3%) |
| [Front-End Social](https://front-end.social/) | 54 | 50<br>(–7.6%) | ***50<br>(–7.6%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | n/a | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 229<br>(0%) | 229<br>(0%) | ***228<br>(–0.2%)*** | 229<br>(0%) | n/a | 229<br>(0%) | 247<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***11<br>(–26.6%)*** | 12<br>(–17%) | 11<br>(–26.3%) | n/a | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1843 | 1811<br>(–1.8%) | ***1797<br>(–2.5%)*** | n/a | 1809<br>(–1.8%) | n/a | 1811<br>(–1.7%) | 1829<br>(–0.8%) |
| [Ground News](https://ground.news/) | 2351 | 2318<br>(–1.4%) | ***2270<br>(–3.5%)*** | n/a | 2302<br>(–2.1%) | n/a | 2326<br>(–1%) | 2336<br>(–0.6%) |
| [heise online](https://www.heise.de/) | 916 | 895<br>(–2.3%) | ***874<br>(–4.7%)*** | n/a | 881<br>(–3.8%) | n/a | 899<br>(–1.9%) | 900<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 60<br>(–3.8%) | ***59<br>(–4.2%)*** | 60<br>(–2.9%) | 59<br>(–4.1%) | n/a | 60<br>(–3.7%) | 60<br>(–3.2%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 394 | 366<br>(–7%) | ***364<br>(–7.5%)*** | n/a | 367<br>(–6.8%) | n/a | 369<br>(–6.4%) | 373<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3%)*** | 121<br>(–1.2%) | 120<br>(–2.2%) | n/a | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 151<br>(–0.2%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | n/a | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 272 | 230<br>(–15.5%) | ***226<br>(–16.8%)*** | 234<br>(–14%) | 228<br>(–16.2%) | n/a | 231<br>(–15%) | 233<br>(–14.2%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–59.3%) | ***32<br>(–61.9%)*** | 35<br>(–57.5%) | 32<br>(–61.2%) | n/a | 33<br>(–59.6%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 33<br>(–23.5%) | 33<br>(–24%) | 34<br>(–22.5%) | ***33<br>(–24.5%)*** | n/a | 33<br>(–23.5%) | 34<br>(–23.1%) |
| [InfoQ China](https://www.infoq.cn/) | 671 | 645<br>(–3.9%) | ***641<br>(–4.5%)*** | n/a | 643<br>(–4.3%) | n/a | 645<br>(–3.9%) | 649<br>(–3.4%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 139<br>(–8.4%) | ***138<br>(–8.9%)*** | 144<br>(–5%) | 140<br>(–7.4%) | n/a | 141<br>(–7.1%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 139 | 80<br>(–42.1%) | ***78<br>(–43.7%)*** | 84<br>(–39.8%) | 81<br>(–41.9%) | n/a | 80<br>(–42.1%) | 83<br>(–40.5%) |
| [ITWeb](https://www.itweb.co.za/) | 313 | 289<br>(–7.7%) | ***273<br>(–12.8%)*** | n/a | 280<br>(–10.5%) | n/a | 293<br>(–6.3%) | 293<br>(–6.3%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 361<br>(–12.9%) | ***356<br>(–14%)*** | n/a | 357<br>(–13.7%) | n/a | 361<br>(–12.9%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 54 | 53<br>(–1.5%) | ***52<br>(–2.2%)*** | 53<br>(–0.8%) | 53<br>(–1.2%) | n/a | 53<br>(–1.6%) | 54<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 236<br>(–2.5%) | 235<br>(–3.1%) | 237<br>(–2.1%) | 236<br>(–2.8%) | n/a | 236<br>(–2.5%) | ***227<br>(–6.5%)*** |
| [KoRo](https://www.koro.com/) | 950 | 888<br>(–6.6%) | ***876<br>(–7.8%)*** | n/a | 886<br>(–6.7%) | n/a | 900<br>(–5.3%) | 921<br>(–3.1%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 54 | 46<br>(–14.9%) | ***43<br>(–21%)*** | 48<br>(–11.8%) | 43<br>(–20.7%) | n/a | 47<br>(–13.3%) | 46<br>(–14%) |
| [Ladybird](https://ladybird.org/) | 29 | 27<br>(–5.8%) | ***27<br>(–6.5%)*** | 28<br>(–5%) | 27<br>(–6.1%) | n/a | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 529 | 518<br>(–2%) | 506<br>(–4.2%) | n/a | ***505<br>(–4.5%)*** | n/a | 519<br>(–1.8%) | 520<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 170 | 167<br>(–1.7%) | ***157<br>(–7.7%)*** | 168<br>(–1.2%) | 158<br>(–7%) | n/a | 167<br>(–1.7%) | 168<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–30.6%) | ***12<br>(–30.8%)*** | 12<br>(–27%) | 12<br>(–30.2%) | n/a | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 46<br>(–7.4%) | ***46<br>(–7.4%)*** | 48<br>(–3.7%) | 47<br>(–7.1%) | n/a | 47<br>(–7%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 116 | 68<br>(–41.3%) | ***67<br>(–42.1%)*** | 71<br>(–38.8%) | 69<br>(–40.4%) | n/a | 68<br>(–41.2%) | 71<br>(–39.2%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 300<br>(–13.4%) | ***293<br>(–15.2%)*** | n/a | 299<br>(–13.6%) | n/a | 304<br>(–12.1%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 318 | 305<br>(–4.3%) | ***252<br>(–20.8%)*** | n/a | 267<br>(–16%) | n/a | 308<br>(–3.2%) | 316<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 138 | 125<br>(–9.1%) | ***122<br>(–11.4%)*** | 126<br>(–8.5%) | 123<br>(–11.2%) | n/a | 125<br>(–9.2%) | 126<br>(–8.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***35<br>(–26%)*** | 36<br>(–22.1%) | 35<br>(–25.8%) | n/a | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 342 | 318<br>(–7%) | ***317<br>(–7.3%)*** | n/a | 317<br>(–7.2%) | n/a | 319<br>(–6.8%) | 320<br>(–6.4%) |
| [Nikkei](https://www.nikkei.com/) | 663 | 619<br>(–6.7%) | ***601<br>(–9.4%)*** | n/a | 616<br>(–7.1%) | n/a | 619<br>(–6.7%) | 654<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 46 | 35<br>(–25.1%) | ***35<br>(–25.6%)*** | 36<br>(–23.3%) | 35<br>(–25.4%) | n/a | 35<br>(–25%) | 35<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 119<br>(–3.8%) | 118<br>(–4.3%) | 120<br>(–2.8%) | ***117<br>(–5.3%)*** | n/a | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 318<br>(–1.9%) | ***316<br>(–2.6%)*** | n/a | 316<br>(–2.5%) | n/a | 318<br>(–1.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 104<br>(–6%) | ***98<br>(–11.5%)*** | 105<br>(–5.1%) | 98<br>(–11.2%) | n/a | 104<br>(–5.6%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 186 | 136<br>(–26.9%) | ***134<br>(–27.9%)*** | 137<br>(–26.2%) | 135<br>(–27.1%) | n/a | 136<br>(–26.7%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.9%) | ***144<br>(–18.4%)*** | 149<br>(–15.8%) | 147<br>(–16.5%) | n/a | 147<br>(–16.8%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 142<br>(–3%) | ***141<br>(–3.8%)*** | 143<br>(–2.1%) | 141<br>(–3.5%) | n/a | 142<br>(–3%) | 143<br>(–2.2%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 181 | 172<br>(–5.2%) | ***168<br>(–7.2%)*** | 176<br>(–2.6%) | 169<br>(–6.9%) | n/a | 172<br>(–5.2%) | 177<br>(–2.5%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4.6%) | ***74<br>(–4.8%)*** | 76<br>(–2.3%) | 75<br>(–4.2%) | n/a | 75<br>(–4%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–27.7%) | ***59<br>(–29.6%)*** | 63<br>(–24.7%) | 61<br>(–26.5%) | n/a | 62<br>(–25.3%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 417 | 383<br>(–8.1%) | 379<br>(–9%) | n/a | ***375<br>(–9.9%)*** | n/a | 385<br>(–7.6%) | 408<br>(–2%) |
| [Qiita](https://qiita.com/) | 309 | 299<br>(–3.1%) | ***299<br>(–3.2%)*** | n/a | 300<br>(–3%) | n/a | 300<br>(–3%) | 303<br>(–2.1%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***28<br>(–25.3%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | n/a | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 138 | 136<br>(–1.9%) | ***136<br>(–1.9%)*** | 136<br>(–1.2%) | 136<br>(–1.4%) | n/a | 136<br>(–1.4%) | 136<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 785 | 741<br>(–5.6%) | ***736<br>(–6.3%)*** | n/a | 748<br>(–4.7%) | n/a | 749<br>(–4.6%) | 757<br>(–3.6%) |
| [Research ICT Africa](https://researchictafrica.net/) | 184 | 170<br>(–7.4%) | ***169<br>(–8.2%)*** | 175<br>(–4.9%) | 170<br>(–7.3%) | n/a | 171<br>(–6.7%) | 175<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 135 | 92<br>(–32%) | ***85<br>(–37.1%)*** | 94<br>(–30.5%) | 85<br>(–37.1%) | n/a | 92<br>(–32%) | 94<br>(–29.9%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.8%) | ***30<br>(–10.7%)*** | 32<br>(–7.3%) | 30<br>(–10.7%) | n/a | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–16.2%) | ***17<br>(–17.6%)*** | 18<br>(–13.4%) | 17<br>(–17.4%) | n/a | 18<br>(–16.3%) | 18<br>(–14%) |
| [SFLC.in](https://sflc.in/) | 169 | 164<br>(–3%) | ***161<br>(–4.2%)*** | 166<br>(–1.5%) | 163<br>(–3.4%) | n/a | 165<br>(–2.2%) | 166<br>(–1.4%) |
| [SitePoint](https://www.sitepoint.com/) | 223 | 219<br>(–1.9%) | ***217<br>(–2.6%)*** | 221<br>(–0.7%) | 220<br>(–1.6%) | n/a | 221<br>(–1%) | 221<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 282 | 281<br>(–0.4%) | ***280<br>(–0.6%)*** | 282<br>(–0.1%) | 281<br>(–0.4%) | n/a | 281<br>(–0.4%) | 282<br>(0%) |
| [Startpage](https://www.startpage.com/) | 22 | 21<br>(–3%) | ***21<br>(–3.2%)*** | 21<br>(–2.1%) | 21<br>(–2.5%) | n/a | 21<br>(–2.3%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 57 | 40<br>(–28.5%) | ***39<br>(–30.3%)*** | 41<br>(–27%) | 40<br>(–29.4%) | n/a | 41<br>(–28.1%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 418 | 389<br>(–7%) | ***366<br>(–12.5%)*** | n/a | 382<br>(–8.6%) | n/a | 389<br>(–7%) | 390<br>(–6.7%) |
| [TEDIC](https://www.tedic.org/) | 95 | 84<br>(–10.9%) | ***83<br>(–12.8%)*** | 85<br>(–9.8%) | 84<br>(–11%) | n/a | 85<br>(–10.7%) | 85<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 87<br>(–7.8%) | ***87<br>(–8.2%)*** | 89<br>(–6%) | 88<br>(–6.5%) | n/a | 88<br>(–6.2%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 124 | 110<br>(–11.9%) | ***106<br>(–14.5%)*** | 114<br>(–8.2%) | 108<br>(–13%) | n/a | 110<br>(–11.5%) | 114<br>(–8.3%) |
| [The Register](https://www.theregister.com/) | 1124 | 880<br>(–21.7%) | ***834<br>(–25.8%)*** | n/a | 854<br>(–24.1%) | n/a | 883<br>(–21.4%) | 884<br>(–21.4%) |
| [Toss Tech](https://toss.tech/) | 284 | 282<br>(–0.7%) | ***282<br>(–0.9%)*** | 283<br>(–0.5%) | 282<br>(–0.9%) | n/a | 282<br>(–0.7%) | 283<br>(–0.6%) |
| [Track AIPAC](https://www.trackaipac.com/) | 575 | 536<br>(–6.8%) | ***214<br>(–62.8%)*** | n/a | 536<br>(–6.8%) | n/a | 536<br>(–6.8%) | 227<br>(–60.5%) |
| [United Nations](https://www.un.org/en/) | 161 | 138<br>(–14.1%) | ***133<br>(–17%)*** | 140<br>(–13%) | 134<br>(–16.9%) | n/a | 138<br>(–14.4%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 83<br>(–10.9%) | ***82<br>(–11.3%)*** | 84<br>(–9.4%) | 83<br>(–10.5%) | n/a | 83<br>(–10.4%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 49 | 40<br>(–19.3%) | ***40<br>(–19.6%)*** | 40<br>(–17.9%) | 40<br>(–19.2%) | n/a | 40<br>(–19.2%) | 40<br>(–17.9%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 247 | 232<br>(–6%) | ***228<br>(–7.5%)*** | 235<br>(–4.6%) | 229<br>(–7.4%) | n/a | 232<br>(–6.1%) | 235<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 222 | 203<br>(–8.9%) | ***201<br>(–9.7%)*** | 206<br>(–7.3%) | 203<br>(–8.9%) | n/a | 204<br>(–8.4%) | 207<br>(–7.1%) |
| [博客园](https://www.cnblogs.com/) | 79 | 54<br>(–31.8%) | ***53<br>(–32.6%)*** | 57<br>(–28.4%) | 56<br>(–29.6%) | n/a | 56<br>(–29%) | 57<br>(–28.4%) |
| [稀土掘金](https://juejin.cn/) | 77 | 74<br>(–4.7%) | ***72<br>(–6.9%)*** | 75<br>(–3.3%) | 74<br>(–4%) | n/a | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 105/105 | 105/105 | 76/105 | 105/105 | n/a | 105/105 | 105/105 |
| **Average processing time** |  | 23 ms | 15 ms | 185 ms<br>(estimate) | 31 ms | n/a | ***5.2 ms*** | 114 ms |
| **Median processing time** |  | 10 ms | 5.9 ms | 106 ms<br>(estimate) | 13 ms | n/a | ***1.8 ms*** | 34 ms |
| **Average result (KB)** | 347 | 321<br>(–7.5%) | ***311<br>(–10.2%)*** | 338<br>(–2.6%) | 318<br>(–8.4%) | n/a | 322<br>(–7.2%) | 323<br>(–6.8%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 81<br>(–23.2%) | ***78<br>(–26%)*** | 84<br>(–19.6%) | 79<br>(–24.9%) | 82<br>(–21.7%) | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 57<br>(–10.9%) | 45<br>(–30%) | 57<br>(–9.9%) | ***39<br>(–38.6%)*** | 57<br>(–10.3%) | 56<br>(–11.4%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.9%) | 108<br>(–20.8%) | 113<br>(–16.9%) | ***107<br>(–21.1%)*** | 112<br>(–17.6%) | 112<br>(–17.6%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 50<br>(–20.2%) | ***49<br>(–21.2%)*** | 50<br>(–19.1%) | 49<br>(–21.1%) | 50<br>(–20.1%) | 50<br>(–20.1%) | 50<br>(–19.6%) |
| [AfricTivistes](https://www.africtivistes.org/) | 497 | 436<br>(–12.2%) | 424<br>(–14.6%) | n/a | ***420<br>(–15.4%)*** | 439<br>(–11.6%) | 440<br>(–11.4%) | 489<br>(–1.6%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 192 | 155<br>(–19.3%) | 124<br>(–35.6%) | 156<br>(–18.8%) | ***118<br>(–38.5%)*** | n/a | 157<br>(–17.9%) | 170<br>(–11.5%) |
| [BBC](https://www.bbc.co.uk/) | 701 | 657<br>(–6.3%) | ***646<br>(–7.9%)*** | n/a | 648<br>(–7.6%) | 669<br>(–4.6%) | 658<br>(–6.1%) | 696<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 100 | 83<br>(–17.1%) | ***65<br>(–34.6%)*** | 85<br>(–15%) | 67<br>(–33.4%) | 82<br>(–18.3%) | 83<br>(–17.1%) | 85<br>(–14.4%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.6%) | ***32<br>(–10.2%)*** | 35<br>(–2.6%) | 32<br>(–9.6%) | 34<br>(–6.1%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 272 | 255<br>(–6.3%) | ***202<br>(–25.8%)*** | 268<br>(–1.3%) | 204<br>(–24.8%) | 255<br>(–6.2%) | 257<br>(–5.3%) | 269<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 70 | 53<br>(–24.8%) | ***52<br>(–25.7%)*** | 55<br>(–21.8%) | 52<br>(–25.6%) | 53<br>(–24.8%) | 53<br>(–24.3%) | 55<br>(–21.8%) |
| [CERN](https://home.cern/) | 292 | 262<br>(–10.2%) | 224<br>(–23.1%) | 269<br>(–7.7%) | ***213<br>(–26.8%)*** | 268<br>(–8%) | 263<br>(–9.8%) | 279<br>(–4.3%) |
| [Codeberg](https://codeberg.org/) | 34 | 30<br>(–9.7%) | 28<br>(–17.9%) | 31<br>(–9.2%) | ***28<br>(–18.4%)*** | 30<br>(–10.3%) | 30<br>(–9.8%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 120 | 100<br>(–16.4%) | ***78<br>(–34.8%)*** | 105<br>(–12.1%) | 80<br>(–33%) | 102<br>(–15%) | 102<br>(–15%) | 112<br>(–6.2%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 107<br>(–5.2%) | ***85<br>(–25%)*** | 112<br>(–1.1%) | 85<br>(–24.9%) | 106<br>(–6.3%) | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 111 | 93<br>(–15.8%) | ***65<br>(–41%)*** | 98<br>(–11.5%) | 65<br>(–40.8%) | 92<br>(–16.5%) | 95<br>(–14.3%) | 100<br>(–9.5%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 216<br>(–22.4%) | 190<br>(–31.6%) | 266<br>(–4.5%) | ***178<br>(–35.9%)*** | 216<br>(–22.3%) | 218<br>(–21.8%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–30.2%) | 16<br>(–32.3%) | 16<br>(–28.8%) | ***16<br>(–32.5%)*** | 16<br>(–30.4%) | 16<br>(–30.3%) | 17<br>(–28.2%) |
| [DIN](https://www.din.de/) | 255 | 174<br>(–31.7%) | ***133<br>(–47.7%)*** | 177<br>(–30.6%) | 134<br>(–47.5%) | 173<br>(–32.1%) | 175<br>(–31.1%) | 183<br>(–27.9%) |
| [DLR](https://www.dlr.de/) | 545 | 510<br>(–6.5%) | 503<br>(–7.8%) | n/a | ***498<br>(–8.7%)*** | 503<br>(–7.8%) | 504<br>(–7.5%) | 543<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7450 | 6981<br>(–6.3%) | ***6840<br>(–8.2%)*** | n/a | 6894<br>(–7.5%) | 6956<br>(–6.6%) | 6988<br>(–6.2%) | 7013<br>(–5.9%) |
| [EDRi](https://edri.org/) | 84 | 73<br>(–12.4%) | ***54<br>(–35.4%)*** | 76<br>(–9.5%) | 55<br>(–34.4%) | 74<br>(–12.1%) | 74<br>(–11.1%) | 78<br>(–6.7%) |
| [EFF](https://www.eff.org/) | 54 | 47<br>(–13.2%) | ***44<br>(–19.2%)*** | 49<br>(–10.2%) | 44<br>(–18.3%) | 47<br>(–13.4%) | 47<br>(–12.3%) | 49<br>(–9.8%) |
| [ELLE](https://www.elle.com/) | 726 | 706<br>(–2.7%) | ***695<br>(–4.2%)*** | n/a | 700<br>(–3.6%) | 718<br>(–1.1%) | 707<br>(–2.5%) | 720<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | 200<br>(–16.6%) | 189<br>(–21.4%) | 205<br>(–14.5%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***31<br>(–38%)*** | 33<br>(–32.9%) | 31<br>(–37.8%) | 33<br>(–33.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 439 | 427<br>(–2.7%) | 107<br>(–75.5%) | n/a | ***106<br>(–75.8%)*** | 430<br>(–1.9%) | 426<br>(–2.8%) | 437<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 281<br>(–5.4%) | 245<br>(–17.8%) | n/a | ***241<br>(–19.1%)*** | 280<br>(–6%) | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 194<br>(–7.7%) | ***142<br>(–32.7%)*** | 200<br>(–5.3%) | 143<br>(–32.1%) | 197<br>(–6.5%) | 195<br>(–7.3%) | 205<br>(–2.8%) |
| [FAZ](https://www.faz.net/aktuell/) | 1410 | 1277<br>(–9.4%) | 1179<br>(–16.4%) | n/a | ***1165<br>(–17.4%)*** | 1350<br>(–4.3%) | 1345<br>(–4.7%) | 1350<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 930 | 791<br>(–14.9%) | ***679<br>(–27%)*** | n/a | 716<br>(–23%) | 777<br>(–16.4%) | 810<br>(–12.9%) | 810<br>(–12.9%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 110<br>(–8.4%) | 73<br>(–39.4%) | 113<br>(–5.9%) | ***68<br>(–43.3%)*** | 111<br>(–7.2%) | 111<br>(–7.2%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 130<br>(–30.6%) | ***56<br>(–69.8%)*** | 132<br>(–29.4%) | 56<br>(–69.8%) | 131<br>(–29.8%) | 130<br>(–30.4%) | 138<br>(–26.3%) |
| [Front-End Social](https://front-end.social/) | 54 | 49<br>(–8.6%) | ***46<br>(–14%)*** | 52<br>(–4%) | 47<br>(–13.6%) | 51<br>(–5.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 229 | 229<br>(0%) | ***221<br>(–3.1%)*** | 228<br>(–0.2%) | 222<br>(–3.1%) | 229<br>(0%) | 229<br>(0%) | 247<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***10<br>(–30.6%)*** | 12<br>(–18.2%) | 10<br>(–30.4%) | 12<br>(–19.2%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1843 | 1780<br>(–3.4%) | ***1364<br>(–26%)*** | n/a | 1436<br>(–22.1%) | 1785<br>(–3.1%) | 1790<br>(–2.9%) | 1829<br>(–0.8%) |
| [Ground News](https://ground.news/) | 2351 | 2198<br>(–6.5%) | ***2113<br>(–10.1%)*** | n/a | 2139<br>(–9%) | 2202<br>(–6.3%) | 2201<br>(–6.4%) | 2336<br>(–0.6%) |
| [heise online](https://www.heise.de/) | 916 | 895<br>(–2.4%) | ***869<br>(–5.2%)*** | n/a | 876<br>(–4.4%) | 879<br>(–4.1%) | 897<br>(–2.1%) | 900<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 55<br>(–11.8%) | 42<br>(–32.2%) | 57<br>(–7.9%) | ***33<br>(–46.8%)*** | 56<br>(–9%) | 55<br>(–11%) | 60<br>(–3.2%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 394 | 360<br>(–8.5%) | ***309<br>(–21.5%)*** | n/a | 311<br>(–21.1%) | 362<br>(–8.1%) | 364<br>(–7.4%) | 373<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.5%) | 121<br>(–1.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 151<br>(–0.3%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.3%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 272 | 227<br>(–16.6%) | ***215<br>(–20.9%)*** | 233<br>(–14.3%) | 216<br>(–20.5%) | 228<br>(–16.2%) | 230<br>(–15.3%) | 233<br>(–14.2%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–59.5%) | ***31<br>(–62.7%)*** | 34<br>(–58.3%) | 31<br>(–62%) | 33<br>(–60.2%) | 33<br>(–59.8%) | 34<br>(–58.6%) |
| [Igalia](https://www.igalia.com/) | 44 | 33<br>(–25%) | 32<br>(–26.4%) | 33<br>(–23.8%) | ***32<br>(–27.1%)*** | 32<br>(–25.7%) | 33<br>(–24.9%) | 34<br>(–23.1%) |
| [InfoQ China](https://www.infoq.cn/) | 671 | 643<br>(–4.2%) | 581<br>(–13.5%) | n/a | ***485<br>(–27.7%)*** | 644<br>(–4%) | 644<br>(–4.1%) | 649<br>(–3.4%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 136<br>(–10.3%) | ***119<br>(–21.5%)*** | 143<br>(–6%) | 120<br>(–20.9%) | 137<br>(–10%) | 138<br>(–8.9%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 139 | 80<br>(–42.4%) | ***76<br>(–45.1%)*** | 83<br>(–40.1%) | 79<br>(–43.3%) | 81<br>(–41.3%) | 80<br>(–42.2%) | 83<br>(–40.5%) |
| [ITWeb](https://www.itweb.co.za/) | 313 | 284<br>(–9.3%) | 164<br>(–47.7%) | n/a | ***162<br>(–48.2%)*** | 290<br>(–7.4%) | 288<br>(–7.9%) | 293<br>(–6.3%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 342<br>(–17.3%) | 180<br>(–56.6%) | n/a | ***169<br>(–59.1%)*** | 347<br>(–16.3%) | 342<br>(–17.3%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 54 | 53<br>(–1.5%) | ***46<br>(–14.2%)*** | 53<br>(–0.8%) | 46<br>(–14%) | 53<br>(–0.6%) | 53<br>(–1.6%) | 54<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 214<br>(–11.7%) | 210<br>(–13.4%) | 233<br>(–4%) | ***209<br>(–13.8%)*** | 217<br>(–10.6%) | 227<br>(–6.2%) | 227<br>(–6.5%) |
| [KoRo](https://www.koro.com/) | 950 | 884<br>(–7%) | ***867<br>(–8.8%)*** | n/a | 878<br>(–7.5%) | 904<br>(–4.9%) | 896<br>(–5.7%) | 921<br>(–3.1%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 54 | 42<br>(–21.2%) | 28<br>(–48.4%) | 44<br>(–17.5%) | ***25<br>(–53.3%)*** | 44<br>(–17.9%) | 44<br>(–19.2%) | 46<br>(–14%) |
| [Ladybird](https://ladybird.org/) | 29 | 27<br>(–5.9%) | ***26<br>(–9.1%)*** | 28<br>(–5%) | 26<br>(–8.9%) | 27<br>(–6%) | 27<br>(–5.7%) | 28<br>(–5%) |
| [Leanpub](https://leanpub.com/) | 529 | 498<br>(–5.7%) | 479<br>(–9.3%) | n/a | ***479<br>(–9.5%)*** | 502<br>(–5.1%) | 499<br>(–5.5%) | 520<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 170 | 164<br>(–3.5%) | ***134<br>(–21%)*** | 166<br>(–2.4%) | 134<br>(–20.9%) | 164<br>(–3.3%) | 164<br>(–3.5%) | 168<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 9<br>(–45.8%) | ***9<br>(–47.2%)*** | 10<br>(–42.7%) | 9<br>(–47.1%) | 9<br>(–45.8%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 46<br>(–8.3%) | ***43<br>(–14.1%)*** | 48<br>(–3.9%) | 43<br>(–13.8%) | 47<br>(–5.7%) | 46<br>(–7.3%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 116 | 68<br>(–41.4%) | 66<br>(–43.2%) | 71<br>(–38.8%) | ***60<br>(–48.2%)*** | 68<br>(–41.3%) | 68<br>(–41.3%) | 71<br>(–39.2%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 346 | 299<br>(–13.7%) | ***216<br>(–37.5%)*** | n/a | 218<br>(–37%) | 276<br>(–20.1%) | 304<br>(–12.2%) | 304<br>(–12.1%) |
| [Mistral AI](https://mistral.ai/) | 318 | 301<br>(–5.4%) | ***183<br>(–42.5%)*** | n/a | 189<br>(–40.5%) | 295<br>(–7.3%) | 306<br>(–3.9%) | 316<br>(–0.6%) |
| [Mondoweiss](https://mondoweiss.net/) | 138 | 121<br>(–12.3%) | 104<br>(–24.5%) | 124<br>(–10.1%) | ***102<br>(–25.7%)*** | 122<br>(–11.6%) | 122<br>(–11.9%) | 126<br>(–8.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***32<br>(–31.9%)*** | 36<br>(–22.1%) | 32<br>(–31.8%) | 35<br>(–25.2%) | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 342 | 306<br>(–10.4%) | 254<br>(–25.7%) | n/a | ***252<br>(–26.4%)*** | 312<br>(–8.7%) | 307<br>(–10.1%) | 320<br>(–6.4%) |
| [Nikkei](https://www.nikkei.com/) | 663 | 617<br>(–7.1%) | ***584<br>(–12.1%)*** | n/a | 599<br>(–9.8%) | 641<br>(–3.3%) | 619<br>(–6.7%) | 654<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 46 | 35<br>(–25.1%) | ***34<br>(–26.9%)*** | 36<br>(–23.3%) | 34<br>(–26.7%) | 35<br>(–25%) | 35<br>(–25%) | 35<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 113<br>(–8.3%) | 68<br>(–44.8%) | 116<br>(–5.8%) | ***64<br>(–47.9%)*** | 114<br>(–7.3%) | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 311<br>(–4%) | 139<br>(–57.1%) | n/a | ***107<br>(–67.2%)*** | 315<br>(–3.1%) | 312<br>(–3.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 98<br>(–11.4%) | 60<br>(–45.7%) | 102<br>(–7.3%) | ***59<br>(–46.9%)*** | 101<br>(–8.7%) | 98<br>(–11.1%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 186 | 131<br>(–29.6%) | ***83<br>(–55.2%)*** | 136<br>(–26.6%) | 85<br>(–54.3%) | 134<br>(–27.6%) | 132<br>(–29.1%) | 136<br>(–26.7%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.9%) | ***142<br>(–19.8%)*** | 148<br>(–15.9%) | 145<br>(–18.1%) | 147<br>(–16.6%) | 147<br>(–16.9%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 135<br>(–7.9%) | 86<br>(–41.3%) | 139<br>(–4.7%) | ***81<br>(–44.8%)*** | 138<br>(–5.5%) | 135<br>(–7.7%) | 143<br>(–2.2%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 181 | 154<br>(–15.1%) | ***144<br>(–20.2%)*** | 162<br>(–10.6%) | 145<br>(–20%) | 153<br>(–15.4%) | 157<br>(–13.4%) | 177<br>(–2.5%) |
| [Piccalilli](https://piccalil.li/) | 78 | 74<br>(–5.7%) | 64<br>(–18.2%) | 76<br>(–3%) | ***61<br>(–21.4%)*** | 73<br>(–6.6%) | 74<br>(–4.9%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–28%) | ***46<br>(–44.7%)*** | 62<br>(–25%) | 48<br>(–42%) | 58<br>(–30.6%) | 62<br>(–25.6%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 417 | 372<br>(–10.6%) | 366<br>(–12.2%) | n/a | ***362<br>(–13.1%)*** | 376<br>(–9.7%) | 380<br>(–8.8%) | 408<br>(–2%) |
| [Qiita](https://qiita.com/) | 309 | 292<br>(–5.5%) | ***258<br>(–16.4%)*** | n/a | 263<br>(–14.9%) | 298<br>(–3.7%) | 294<br>(–5%) | 303<br>(–2.1%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***21<br>(–42.5%)*** | 32<br>(–13.5%) | 22<br>(–41.7%) | 28<br>(–24.1%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 138 | 121<br>(–12.2%) | ***115<br>(–16.6%)*** | 136<br>(–1.4%) | 116<br>(–16.1%) | 120<br>(–12.8%) | 122<br>(–11.9%) | 136<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 785 | 724<br>(–7.8%) | ***452<br>(–42.5%)*** | n/a | 454<br>(–42.2%) | 722<br>(–8.1%) | 733<br>(–6.7%) | 757<br>(–3.6%) |
| [Research ICT Africa](https://researchictafrica.net/) | 184 | 165<br>(–10.3%) | 142<br>(–22.7%) | 172<br>(–6.6%) | ***140<br>(–23.5%)*** | 166<br>(–9.8%) | 167<br>(–9.3%) | 175<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 135 | 91<br>(–32.1%) | ***84<br>(–37.7%)*** | 93<br>(–30.6%) | 84<br>(–37.7%) | 91<br>(–32.1%) | 91<br>(–32.1%) | 94<br>(–29.9%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.9%) | 30<br>(–10.9%) | 32<br>(–7.3%) | ***30<br>(–11%)*** | 31<br>(–10.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 17<br>(–17.1%) | ***17<br>(–19.2%)*** | 18<br>(–14.2%) | 17<br>(–19%) | 18<br>(–16.8%) | 17<br>(–17.2%) | 18<br>(–14%) |
| [SFLC.in](https://sflc.in/) | 169 | 160<br>(–5.1%) | 132<br>(–21.9%) | 166<br>(–1.8%) | ***131<br>(–22.3%)*** | 163<br>(–3.1%) | 162<br>(–4.2%) | 166<br>(–1.4%) |
| [SitePoint](https://www.sitepoint.com/) | 223 | 211<br>(–5.4%) | ***199<br>(–10.7%)*** | 214<br>(–4.2%) | 201<br>(–9.8%) | 209<br>(–6.2%) | 213<br>(–4.6%) | 221<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 282 | 280<br>(–0.9%) | 269<br>(–4.8%) | 282<br>(–0.1%) | ***268<br>(–5.1%)*** | 281<br>(–0.2%) | 280<br>(–0.9%) | 282<br>(0%) |
| [Startpage](https://www.startpage.com/) | 22 | 18<br>(–14.3%) | 16<br>(–26%) | 19<br>(–13%) | ***16<br>(–26.9%)*** | 19<br>(–13.6%) | 20<br>(–6%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 57 | 40<br>(–28.6%) | ***38<br>(–32.3%)*** | 41<br>(–27.2%) | 39<br>(–31.5%) | 40<br>(–28.7%) | 41<br>(–28.2%) | 41<br>(–27.1%) |
| [TAZ](https://taz.de/) | 418 | 355<br>(–15.2%) | ***322<br>(–23%)*** | n/a | 348<br>(–16.9%) | 364<br>(–13%) | 368<br>(–12.1%) | 390<br>(–6.7%) |
| [TEDIC](https://www.tedic.org/) | 95 | 79<br>(–16.5%) | 52<br>(–45%) | 81<br>(–14.8%) | ***48<br>(–49.4%)*** | 80<br>(–15.6%) | 80<br>(–15.5%) | 85<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 94 | 87<br>(–7.9%) | ***83<br>(–11.6%)*** | 89<br>(–6.1%) | 85<br>(–10.3%) | 86<br>(–9.1%) | 88<br>(–6.3%) | 89<br>(–6%) |
| [The Left](https://left.eu/) | 124 | 104<br>(–16.7%) | ***89<br>(–28.4%)*** | 111<br>(–10.9%) | 91<br>(–27.1%) | 105<br>(–15.4%) | 106<br>(–15%) | 114<br>(–8.3%) |
| [The Register](https://www.theregister.com/) | 1124 | 836<br>(–25.6%) | ***766<br>(–31.8%)*** | n/a | 787<br>(–30%) | 840<br>(–25.3%) | 848<br>(–24.5%) | 884<br>(–21.4%) |
| [Toss Tech](https://toss.tech/) | 284 | 275<br>(–3.4%) | 271<br>(–4.6%) | 275<br>(–3.1%) | ***271<br>(–4.6%)*** | 274<br>(–3.7%) | 273<br>(–4%) | 283<br>(–0.6%) |
| [Track AIPAC](https://www.trackaipac.com/) | 575 | 518<br>(–10%) | ***195<br>(–66.1%)*** | n/a | 511<br>(–11.1%) | 521<br>(–9.4%) | 518<br>(–9.9%) | 227<br>(–60.5%) |
| [United Nations](https://www.un.org/en/) | 161 | 134<br>(–16.7%) | 89<br>(–44.5%) | 129<br>(–19.6%) | ***89<br>(–44.9%)*** | 130<br>(–19.1%) | 134<br>(–16.8%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 93 | 79<br>(–14.3%) | ***64<br>(–31.2%)*** | 82<br>(–11.6%) | 64<br>(–30.6%) | n/a | 81<br>(–13%) | 84<br>(–9.3%) |
| [W3C](https://www.w3.org/) | 49 | 38<br>(–23%) | ***35<br>(–28.1%)*** | 39<br>(–21.8%) | 36<br>(–27.8%) | 38<br>(–23.1%) | 38<br>(–22.9%) | 40<br>(–17.9%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 247 | 231<br>(–6.3%) | ***216<br>(–12.6%)*** | 235<br>(–4.8%) | 216<br>(–12.5%) | 232<br>(–6%) | 231<br>(–6.3%) | 235<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 222 | 181<br>(–18.8%) | ***152<br>(–31.6%)*** | 192<br>(–13.5%) | 153<br>(–31.3%) | 183<br>(–17.7%) | 190<br>(–14.4%) | 207<br>(–7.1%) |
| [博客园](https://www.cnblogs.com/) | 79 | 54<br>(–32.4%) | ***50<br>(–37%)*** | 56<br>(–28.9%) | 52<br>(–34.7%) | 54<br>(–32%) | 56<br>(–29.2%) | 57<br>(–28.4%) |
| [稀土掘金](https://juejin.cn/) | 77 | 65<br>(–15.4%) | ***58<br>(–24.3%)*** | 73<br>(–5.9%) | 59<br>(–23.3%) | 65<br>(–16%) | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 105/105 | 105/105 | 76/105 | 105/105 | 103/105 | 105/105 | 105/105 |
| **Average processing time** |  | 28 ms | 39 ms | 781 ms<br>(estimate) | 146 ms | ***6.5 ms*** | 7.7 ms | 115 ms |
| **Median processing time** |  | 12 ms | 18 ms | 691 ms<br>(estimate) | 76 ms | ***3.4 ms*** | 3.7 ms | 34 ms |
| **Average result (KB)** | 347 | 313<br>(–9.7%) | ***275<br>(–20.7%)*** | 336<br>(–3.1%) | 279<br>(–19.6%) | 315<br>(–9.1%) | 316<br>(–9%) | 323<br>(–6.8%) |

Benchmarks last updated: Oct 18, 2026 (Node.js 24.22.0, macOS 15.7.9, Apple M4)
<!-- End auto-generated -->

## Notes

* Minifiers:
  - @swc/html runs with `collapseWhitespaces: 'smart'`, as its more aggressive `'all'` removes whitespace between inline elements, fusing words (e.g., “and <a>videos</a> and” becomes “andvideosand”).
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