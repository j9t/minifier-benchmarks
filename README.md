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

| | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier](https://github.com/j9t/html-minifier) | [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Last npm update** | ![npm @swc/html](https://img.shields.io/npm/last-update/@swc/html) | ![npm HTML Minifier](https://img.shields.io/npm/last-update/html-minifier) | ![npm HTML Minifier Terser](https://img.shields.io/npm/last-update/html-minifier-terser) | n/a | ![npm htmlnano](https://img.shields.io/npm/last-update/htmlnano) | ![npm minify](https://img.shields.io/npm/last-update/@tdewolff/minify) | ![npm minify-html](https://img.shields.io/npm/last-update/@minify-html/node) | ![npm minimize](https://img.shields.io/npm/last-update/minimize) |
| **Socket health status** | [![Socket @swc/html](https://badge.socket.dev/npm/package/@swc/html)](https://socket.dev/npm/package/@swc/html) | [![Socket HTML Minifier](https://badge.socket.dev/npm/package/html-minifier)](https://socket.dev/npm/package/html-minifier) | [![Socket HTML Minifier Terser](https://badge.socket.dev/npm/package/html-minifier-terser)](https://socket.dev/npm/package/html-minifier-terser) | n/a | [![Socket htmlnano](https://badge.socket.dev/npm/package/htmlnano)](https://socket.dev/npm/package/htmlnano) | [![Socket minify](https://badge.socket.dev/npm/package/@tdewolff/minify)](https://socket.dev/npm/package/@tdewolff/minify) | [![Socket minify-html](https://badge.socket.dev/npm/package/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [![Socket minimize](https://badge.socket.dev/npm/package/minimize)](https://socket.dev/npm/package/minimize) |
| **GitHub sponsors** (please support your minifier) | [![Sponsors @swc/html](https://img.shields.io/github/sponsors/swc-project)](https://github.com/sponsors/swc-project) | [![Sponsors HTML Minifier](https://img.shields.io/github/sponsors/j9t)](https://github.com/sponsors/j9t) | [![Sponsors HTML Minifier Terser](https://img.shields.io/github/sponsors/terser)](https://github.com/sponsors/terser) | n/a | [![Sponsors htmlnano](https://img.shields.io/github/sponsors/maltsev)](https://github.com/sponsors/maltsev) | [![Sponsors minify](https://img.shields.io/github/sponsors/tdewolff)](https://github.com/sponsors/tdewolff) | [![Sponsors minify-html](https://img.shields.io/github/sponsors/wilsonzlin)](https://github.com/sponsors/wilsonzlin) | [![Sponsors minimize](https://img.shields.io/github/sponsors/Swaagie)](https://github.com/sponsors/Swaagie) |

<!--
| **Dependencies status** | ![Dependencies @swc/html](https://img.shields.io/depfu/dependencies/github/swc-project/swc) | ![Dependencies HTML Minifier](https://img.shields.io/depfu/dependencies/github/j9t/html-minifier) | ![Dependencies HTML Minifier Terser](https://img.shields.io/depfu/dependencies/github/terser/html-minifier-terser) | n/a | ![Dependencies htmlnano](https://img.shields.io/depfu/dependencies/github/maltsev/htmlnano) | ![Dependencies minify](https://img.shields.io/depfu/dependencies/github/tdewolff/minify) | ![Dependencies minify-html](https://img.shields.io/depfu/dependencies/github/wilsonzlin/minify-html) | ![Dependencies minimize](https://img.shields.io/depfu/dependencies/github/Swaagie/minimize) |
| **Code coverage** | ![Coverage @swc/html](https://img.shields.io/codecov/c/github/swc-project/swc) | ![Coverage HTML Minifier](https://img.shields.io/codecov/c/github/j9t/html-minifier) | ![Coverage HTML Minifier Terser](https://img.shields.io/codecov/c/github/terser/html-minifier-terser) | n/a | ![Coverage htmlnano](https://img.shields.io/codecov/c/github/maltsev/htmlnano) | ![Coverage minify](https://img.shields.io/codecov/c/github/tdewolff/minify) | ![Coverage minify-html](https://img.shields.io/codecov/c/github/wilsonzlin/minify-html) | ![Coverage minimize](https://img.shields.io/codecov/c/github/Swaagie/minimize) |
| **Quality score** | ![Quality @swc/html](https://img.shields.io/npms-io/quality-score/@swc/html) | ![Quality HTML Minifier](https://img.shields.io/npms-io/quality-score/html-minifier) | ![Quality HTML Minifier Terser](https://img.shields.io/npms-io/quality-score/html-minifier-terser) | n/a | ![Quality htmlnano](https://img.shields.io/npms-io/quality-score/htmlnano) | ![Quality minify](https://img.shields.io/npms-io/quality-score/@tdewolff/minify) | ![Quality minify-html](https://img.shields.io/npms-io/quality-score/@minify-html/node) | ![Quality minimize](https://img.shields.io/npms-io/quality-score/minimize) |
| **Unpacked size** | ![Size @swc/html](https://img.shields.io/npm/unpacked-size/@swc/html) | ![Size HTML Minifier](https://img.shields.io/npm/unpacked-size/html-minifier) | ![Size HTML Minifier Terser](https://img.shields.io/npm/unpacked-size/html-minifier-terser) | n/a | ![Size htmlnano](https://img.shields.io/npm/unpacked-size/htmlnano) | ![Size minify](https://img.shields.io/npm/unpacked-size/@tdewolff/minify) | ![Size minify-html](https://img.shields.io/npm/unpacked-size/@minify-html/node) | ![Size minimize](https://img.shields.io/npm/unpacked-size/minimize) |
-->

<!-- Auto-generated benchmarks, don't edit -->
## 1. HTML Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier](https://github.com/j9t/html-minifier) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 86<br>(–18.4%) | ***84<br>(–20.1%)*** | 89<br>(–15.1%) | 86<br>(–18%) | n/a | 85<br>(–18.5%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 59<br>(–7.4%) | 59<br>(–7.6%) | 59<br>(–7.1%) | ***59<br>(–8.2%)*** | n/a | 59<br>(–8%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.8%) | ***110<br>(–19%)*** | 113<br>(–16.7%) | 112<br>(–17.8%) | n/a | 112<br>(–17.4%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 64 | 51<br>(–19.7%) | ***51<br>(–20.5%)*** | 52<br>(–18.5%) | 51<br>(–20.3%) | n/a | 51<br>(–19.5%) | 52<br>(–19.1%) |
| [AfricTivistes](https://www.africtivistes.org/) | 457 | 407<br>(–10.9%) | ***395<br>(–13.5%)*** | n/a | 396<br>(–13.2%) | n/a | 410<br>(–10.2%) | 449<br>(–1.6%) |
| [Al-Haq](https://www.alhaq.org/) | 90 | 62<br>(–30.9%) | ***60<br>(–32.7%)*** | 64<br>(–28.8%) | 62<br>(–31.4%) | n/a | 63<br>(–29.8%) | 64<br>(–29%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 194 | 167<br>(–13.8%) | ***164<br>(–15.7%)*** | 173<br>(–11%) | 164<br>(–15.5%) | n/a | 168<br>(–13.3%) | 172<br>(–11.5%) |
| [BBC](https://www.bbc.co.uk/) | 686 | 676<br>(–1.4%) | ***675<br>(–1.6%)*** | n/a | 675<br>(–1.5%) | n/a | 677<br>(–1.2%) | 680<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 102 | 86<br>(–15.7%) | ***83<br>(–18.9%)*** | 88<br>(–13.6%) | 85<br>(–16.7%) | n/a | 86<br>(–15.3%) | 87<br>(–14.7%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.5%) | ***33<br>(–9%)*** | 35<br>(–2.3%) | 33<br>(–8.6%) | n/a | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 278 | 262<br>(–6%) | ***212<br>(–23.9%)*** | 275<br>(–1.2%) | 216<br>(–22.6%) | n/a | 264<br>(–5.1%) | 275<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 70 | 53<br>(–24.7%) | ***53<br>(–24.8%)*** | 55<br>(–21.7%) | 53<br>(–24.8%) | n/a | 53<br>(–24.3%) | 55<br>(–21.9%) |
| [CERN](https://home.cern/) | 292 | 278<br>(–4.8%) | 275<br>(–5.7%) | 280<br>(–4.2%) | ***272<br>(–6.6%)*** | n/a | 278<br>(–4.7%) | 279<br>(–4.3%) |
| [Citizen Lab](https://citizenlab.ca/) | 129 | 121<br>(–5.8%) | ***121<br>(–5.9%)*** | 123<br>(–4.8%) | 121<br>(–5.7%) | n/a | 122<br>(–5.5%) | 123<br>(–4.7%) |
| [Codeberg](https://codeberg.org/) | 34 | 31<br>(–9%) | ***31<br>(–9.6%)*** | 31<br>(–8.2%) | 31<br>(–8.7%) | n/a | 31<br>(–9.1%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 123 | 113<br>(–7.8%) | ***110<br>(–10.8%)*** | 116<br>(–6%) | 112<br>(–8.5%) | n/a | 113<br>(–7.7%) | 115<br>(–6%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–1.3%) | ***111<br>(–1.9%)*** | 112<br>(–0.7%) | 112<br>(–1%) | n/a | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 112 | 97<br>(–13.3%) | ***96<br>(–14.6%)*** | 101<br>(–10%) | 98<br>(–12.2%) | n/a | 98<br>(–12.2%) | 101<br>(–9.7%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 222<br>(–20.4%) | ***218<br>(–21.5%)*** | 270<br>(–3%) | 220<br>(–20.9%) | n/a | 223<br>(–20%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–29.3%) | 16<br>(–30.9%) | 17<br>(–27.8%) | ***16<br>(–31%)*** | n/a | 16<br>(–29.5%) | 16<br>(–28.4%) |
| [DIN](https://www.din.de/) | 256 | 181<br>(–29.2%) | ***177<br>(–31%)*** | 185<br>(–27.7%) | 179<br>(–30.2%) | n/a | 182<br>(–29.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 553 | 548<br>(–1%) | ***546<br>(–1.3%)*** | n/a | 547<br>(–1%) | n/a | 548<br>(–0.9%) | 550<br>(–0.5%) |
| [dxsrc](https://dxsrc.org/) | 232 | 232<br>(0%) | 232<br>(0%) | ***231<br>(–0.2%)*** | 232<br>(0%) | n/a | 232<br>(0%) | 250<br>(+8%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7636 | 7168<br>(–6.1%) | ***7024<br>(–8%)*** | n/a | 7083<br>(–7.2%) | n/a | 7174<br>(–6%) | 7195<br>(–5.8%) |
| [EDRi](https://edri.org/) | 85 | 78<br>(–8.3%) | ***78<br>(–8.8%)*** | 80<br>(–6.5%) | 79<br>(–7.5%) | n/a | 79<br>(–7.2%) | 80<br>(–6.5%) |
| [EFF](https://www.eff.org/) | 54 | 48<br>(–10.5%) | ***46<br>(–13.4%)*** | 49<br>(–7.9%) | 47<br>(–12.4%) | n/a | 48<br>(–11.4%) | 48<br>(–9.8%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | n/a | 188<br>(–21.4%) | 205<br>(–14.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***33<br>(–34.2%)*** | 33<br>(–32.9%) | 33<br>(–33.9%) | n/a | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 444 | 437<br>(–1.6%) | ***435<br>(–1.8%)*** | n/a | 436<br>(–1.7%) | n/a | 436<br>(–1.7%) | 441<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 286<br>(–4%) | 286<br>(–4.1%) | n/a | ***285<br>(–4.2%)*** | n/a | 286<br>(–3.9%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 204<br>(–3.6%) | ***192<br>(–8.9%)*** | 206<br>(–2.6%) | 196<br>(–7.1%) | n/a | 204<br>(–3.4%) | 205<br>(–2.7%) |
| [Fairphone](https://www.fairphone.com/) | 151 | 95<br>(–37.2%) | ***86<br>(–42.8%)*** | 96<br>(–36.3%) | 90<br>(–40.3%) | n/a | 94<br>(–37.9%) | 95<br>(–37%) |
| [FAZ](https://www.faz.net/aktuell/) | 1390 | 1328<br>(–4.4%) | ***1309<br>(–5.8%)*** | n/a | 1327<br>(–4.5%) | n/a | 1331<br>(–4.2%) | 1331<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 972 | 836<br>(–14%) | ***791<br>(–18.6%)*** | n/a | 847<br>(–12.8%) | n/a | 851<br>(–12.5%) | 848<br>(–12.8%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 114<br>(–4.6%) | ***113<br>(–5.4%)*** | 116<br>(–3.4%) | 114<br>(–5%) | n/a | 115<br>(–4.3%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 136<br>(–27.1%) | ***136<br>(–27.3%)*** | 138<br>(–26.3%) | 136<br>(–27.2%) | n/a | 136<br>(–27%) | 138<br>(–26.4%) |
| [Front-End Social](https://front-end.social/) | 54 | 50<br>(–7.6%) | ***50<br>(–7.6%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | n/a | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***11<br>(–26.9%)*** | 12<br>(–17%) | 11<br>(–26.3%) | n/a | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Ground News](https://ground.news/) | 3587 | 3556<br>(–0.9%) | ***3508<br>(–2.2%)*** | n/a | 3540<br>(–1.3%) | n/a | 3564<br>(–0.7%) | 3573<br>(–0.4%) |
| [heise online](https://www.heise.de/) | 902 | 882<br>(–2.3%) | ***862<br>(–4.4%)*** | n/a | 871<br>(–3.5%) | n/a | 885<br>(–1.9%) | 887<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 60<br>(–3.8%) | ***59<br>(–4.2%)*** | 60<br>(–2.8%) | 60<br>(–4.1%) | n/a | 60<br>(–3.7%) | 60<br>(–3.1%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 393 | 365<br>(–7%) | ***364<br>(–7.5%)*** | n/a | 366<br>(–6.8%) | n/a | 368<br>(–6.4%) | 372<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3%)*** | 121<br>(–1.2%) | 120<br>(–2.2%) | n/a | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 152 | 151<br>(–0.2%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | n/a | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 278 | 235<br>(–15.4%) | ***231<br>(–16.7%)*** | 240<br>(–13.7%) | 233<br>(–16.1%) | n/a | 237<br>(–14.9%) | 239<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–59.5%) | ***32<br>(–61.9%)*** | 35<br>(–57.3%) | 32<br>(–61.1%) | n/a | 34<br>(–59.5%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 45 | 35<br>(–22.7%) | 34<br>(–23.5%) | 35<br>(–21.7%) | ***34<br>(–23.7%)*** | n/a | 35<br>(–22.7%) | 35<br>(–22.3%) |
| [iLaw](https://www.ilaw.or.th/) | 403 | 376<br>(–6.5%) | ***370<br>(–8%)*** | n/a | 376<br>(–6.6%) | n/a | 381<br>(–5.3%) | 381<br>(–5.4%) |
| [InfoQ China](https://www.infoq.cn/) | 667 | 641<br>(–3.9%) | ***637<br>(–4.4%)*** | n/a | 638<br>(–4.3%) | n/a | 641<br>(–3.9%) | 644<br>(–3.4%) |
| [inkyfada](https://inkyfada.com/fr/) | 340 | 300<br>(–11.8%) | ***278<br>(–18.2%)*** | n/a | 300<br>(–11.8%) | n/a | 304<br>(–10.7%) | 305<br>(–10.2%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 139<br>(–8.4%) | ***138<br>(–8.9%)*** | 144<br>(–5%) | 140<br>(–7.4%) | n/a | 141<br>(–7.1%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 138 | 80<br>(–42.3%) | ***77<br>(–44%)*** | 83<br>(–40%) | 79<br>(–42.6%) | n/a | 80<br>(–42.2%) | 82<br>(–40.7%) |
| [ITWeb](https://www.itweb.co.za/) | 326 | 301<br>(–7.7%) | ***285<br>(–12.8%)*** | n/a | 292<br>(–10.5%) | n/a | 306<br>(–6.3%) | 306<br>(–6.2%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 361<br>(–12.9%) | ***356<br>(–14%)*** | n/a | 358<br>(–13.7%) | n/a | 361<br>(–12.8%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 51 | 50<br>(–1.5%) | ***50<br>(–2%)*** | 51<br>(–0.8%) | 50<br>(–1.3%) | n/a | 50<br>(–1.6%) | 51<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 236<br>(–2.5%) | 235<br>(–3.1%) | 237<br>(–2.1%) | 236<br>(–2.8%) | n/a | 236<br>(–2.5%) | ***227<br>(–6.5%)*** |
| [Kloop](https://kloop.kg/) | 196 | 179<br>(–8.7%) | ***172<br>(–12%)*** | 184<br>(–6%) | 176<br>(–10%) | n/a | 179<br>(–8.4%) | 184<br>(–6.3%) |
| [KoRo](https://www.koro.com/) | 790 | 740<br>(–6.4%) | ***728<br>(–7.9%)*** | n/a | 737<br>(–6.7%) | n/a | 749<br>(–5.2%) | 761<br>(–3.6%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 54 | 46<br>(–14.7%) | 43<br>(–20.2%) | 48<br>(–11.8%) | ***43<br>(–20.4%)*** | n/a | 47<br>(–13.1%) | 47<br>(–13.9%) |
| [Ladybird](https://ladybird.org/) | 34 | 32<br>(–5.7%) | ***32<br>(–6.3%)*** | 32<br>(–5%) | 32<br>(–5.9%) | n/a | 32<br>(–5.5%) | 32<br>(–4.9%) |
| [Leanpub](https://leanpub.com/) | 512 | 501<br>(–2.1%) | 490<br>(–4.3%) | n/a | ***488<br>(–4.7%)*** | n/a | 502<br>(–1.8%) | 503<br>(–1.7%) |
| [Legal Resources Centre](https://lrc.org.za/) | 169 | 166<br>(–1.7%) | ***156<br>(–7.5%)*** | 167<br>(–1.2%) | 157<br>(–6.7%) | n/a | 166<br>(–1.7%) | 166<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–30.6%) | ***12<br>(–31.4%)*** | 12<br>(–27%) | 12<br>(–30.2%) | n/a | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mada Masr](https://www.madamasr.com/en/) | 176 | 153<br>(–13.3%) | ***91<br>(–48.4%)*** | 155<br>(–12.3%) | 149<br>(–15.6%) | n/a | 153<br>(–13.3%) | 154<br>(–13%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 47<br>(–7.4%) | ***47<br>(–7.5%)*** | 49<br>(–3.7%) | 47<br>(–7.1%) | n/a | 47<br>(–7%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 69<br>(–41.3%) | ***68<br>(–42.1%)*** | 72<br>(–38.8%) | 70<br>(–40.4%) | n/a | 69<br>(–41.2%) | 71<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 350 | 304<br>(–13.2%) | ***298<br>(–14.9%)*** | n/a | 303<br>(–13.4%) | n/a | 308<br>(–11.9%) | 309<br>(–11.9%) |
| [Media Foundation for West Africa](https://mfwa.org/) | 332 | 301<br>(–9.3%) | ***294<br>(–11.3%)*** | n/a | 298<br>(–10.3%) | n/a | 301<br>(–9.1%) | 307<br>(–7.3%) |
| [Mistral AI](https://mistral.ai/) | 314 | 301<br>(–4%) | ***248<br>(–20.9%)*** | n/a | 263<br>(–16.1%) | n/a | 305<br>(–2.9%) | 313<br>(–0.3%) |
| [Mondoweiss](https://mondoweiss.net/) | 137 | 124<br>(–9.2%) | ***121<br>(–11.5%)*** | 125<br>(–8.6%) | 121<br>(–11.2%) | n/a | 124<br>(–9.2%) | 125<br>(–8.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***35<br>(–26%)*** | 36<br>(–22.1%) | 35<br>(–25.8%) | n/a | 35<br>(–25.5%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 333 | 308<br>(–7.4%) | ***307<br>(–7.9%)*** | n/a | 307<br>(–7.8%) | n/a | 309<br>(–7.2%) | 310<br>(–6.8%) |
| [Nextcloud](https://nextcloud.com/) | 236 | 211<br>(–10.6%) | ***206<br>(–12.9%)*** | 217<br>(–8.3%) | 208<br>(–12.1%) | n/a | 212<br>(–10.2%) | 213<br>(–9.8%) |
| [Nikkei](https://www.nikkei.com/) | 703 | 656<br>(–6.6%) | ***638<br>(–9.2%)*** | n/a | 653<br>(–7%) | n/a | 656<br>(–6.6%) | 693<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 47 | 35<br>(–25.2%) | ***35<br>(–26.1%)*** | 36<br>(–23.4%) | 35<br>(–25.8%) | n/a | 35<br>(–25.1%) | 36<br>(–23.7%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 119<br>(–3.8%) | 118<br>(–4.4%) | 120<br>(–2.8%) | ***117<br>(–5.3%)*** | n/a | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 318<br>(–1.9%) | ***316<br>(–2.6%)*** | n/a | 316<br>(–2.5%) | n/a | 318<br>(–1.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 103<br>(–5.9%) | ***97<br>(–11.5%)*** | 104<br>(–5.1%) | 97<br>(–11.2%) | n/a | 103<br>(–5.6%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 192 | 142<br>(–26.2%) | ***140<br>(–27.1%)*** | 143<br>(–25.3%) | 141<br>(–26.3%) | n/a | 142<br>(–25.9%) | 142<br>(–25.9%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.9%) | ***144<br>(–18.5%)*** | 149<br>(–15.8%) | 148<br>(–16.5%) | n/a | 147<br>(–16.8%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 147 | 142<br>(–3%) | ***141<br>(–3.7%)*** | 144<br>(–2.1%) | 142<br>(–3.4%) | n/a | 142<br>(–3%) | 144<br>(–2.2%) |
| [Página 12](https://www.pagina12.com.ar/) | 886 | 893<br>(+0.7%) | ***874<br>(–1.4%)*** | n/a | 875<br>(–1.2%) | n/a | 879<br>(–0.8%) | 881<br>(–0.6%) |
| [Paradigm Initiative](https://paradigmhq.org/) | 428 | 363<br>(–15%) | ***353<br>(–17.4%)*** | n/a | 358<br>(–16.4%) | n/a | 364<br>(–14.8%) | 403<br>(–5.9%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 164 | 156<br>(–4.9%) | ***152<br>(–7.1%)*** | 160<br>(–2.5%) | 153<br>(–6.8%) | n/a | 156<br>(–4.9%) | 160<br>(–2.4%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4.6%) | ***74<br>(–4.8%)*** | 76<br>(–2.3%) | 75<br>(–4.2%) | n/a | 75<br>(–4%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–27.7%) | ***59<br>(–29.6%)*** | 63<br>(–24.7%) | 61<br>(–26.5%) | n/a | 62<br>(–25.3%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 420 | 386<br>(–8.1%) | 382<br>(–9.1%) | n/a | ***379<br>(–9.8%)*** | n/a | 388<br>(–7.6%) | 412<br>(–2%) |
| [Qiita](https://qiita.com/) | 377 | 366<br>(–2.9%) | ***366<br>(–3%)*** | n/a | 367<br>(–2.7%) | n/a | 367<br>(–2.7%) | 370<br>(–1.9%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***28<br>(–25.3%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | n/a | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 153 | 151<br>(–1.7%) | ***151<br>(–1.7%)*** | 152<br>(–1.1%) | 152<br>(–1.2%) | n/a | 152<br>(–1.2%) | 152<br>(–1.2%) |
| [R3D](https://r3d.mx/) | 309 | 305<br>(–1.4%) | ***304<br>(–1.6%)*** | n/a | 304<br>(–1.6%) | n/a | 305<br>(–1.4%) | 305<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 788 | 744<br>(–5.6%) | ***737<br>(–6.5%)*** | n/a | 751<br>(–4.7%) | n/a | 752<br>(–4.6%) | 760<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 69<br>(–2.3%) | ***67<br>(–6.1%)*** | 69<br>(–2%) | 67<br>(–5.3%) | n/a | 69<br>(–2.2%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 183 | 170<br>(–7.4%) | ***168<br>(–8.2%)*** | 174<br>(–4.9%) | 170<br>(–7.4%) | n/a | 171<br>(–6.7%) | 174<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 134 | 91<br>(–32.2%) | ***84<br>(–37.3%)*** | 93<br>(–30.6%) | 84<br>(–37.3%) | n/a | 91<br>(–32.2%) | 93<br>(–30.1%) |
| [SAFEnet](https://safenet.or.id/) | 812 | 783<br>(–3.5%) | ***777<br>(–4.3%)*** | n/a | 783<br>(–3.6%) | n/a | 785<br>(–3.3%) | 791<br>(–2.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.8%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 30<br>(–10.7%) | n/a | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–13.3%) | ***18<br>(–14.7%)*** | 18<br>(–11%) | 18<br>(–14.5%) | n/a | 18<br>(–13.5%) | 18<br>(–11.4%) |
| [SFLC.in](https://sflc.in/) | 213 | 208<br>(–2.4%) | ***205<br>(–3.4%)*** | 210<br>(–1.2%) | 207<br>(–2.7%) | n/a | 209<br>(–1.7%) | 210<br>(–1.1%) |
| [SitePoint](https://www.sitepoint.com/) | 227 | 222<br>(–1.9%) | ***220<br>(–3%)*** | 225<br>(–0.7%) | 222<br>(–1.9%) | n/a | 224<br>(–1%) | 225<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 273 | 272<br>(–0.4%) | ***271<br>(–0.6%)*** | 273<br>(–0.1%) | 272<br>(–0.4%) | n/a | 272<br>(–0.4%) | 273<br>(0%) |
| [SMEX](https://smex.org/) | 175 | 171<br>(–2.2%) | ***165<br>(–5.6%)*** | 172<br>(–1.6%) | 165<br>(–5.4%) | n/a | 171<br>(–2.1%) | 172<br>(–1.5%) |
| [Startup-Verband](https://startupverband.de/) | 58 | 41<br>(–28.6%) | ***40<br>(–30.5%)*** | 42<br>(–27.2%) | 41<br>(–29.5%) | n/a | 41<br>(–28.1%) | 42<br>(–27.3%) |
| [TAZ](https://taz.de/) | 408 | 379<br>(–7.1%) | ***356<br>(–12.7%)*** | n/a | 373<br>(–8.7%) | n/a | 379<br>(–7.1%) | 381<br>(–6.6%) |
| [TEDIC](https://www.tedic.org/) | 94 | 84<br>(–10.9%) | ***82<br>(–12.8%)*** | 85<br>(–9.8%) | 84<br>(–11%) | n/a | 84<br>(–10.7%) | 85<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 93 | 86<br>(–7.7%) | ***85<br>(–8%)*** | 87<br>(–5.9%) | 87<br>(–6.4%) | n/a | 87<br>(–6.2%) | 87<br>(–6%) |
| [The Daily Star](https://www.thedailystar.net/) | 274 | 220<br>(–19.6%) | ***218<br>(–20.4%)*** | 225<br>(–17.9%) | 220<br>(–19.4%) | n/a | 221<br>(–19.2%) | 222<br>(–18.7%) |
| [The Kyiv Independent](https://kyivindependent.com/) | 371 | 361<br>(–2.5%) | ***356<br>(–4%)*** | n/a | 359<br>(–3.2%) | n/a | 362<br>(–2.2%) | 367<br>(–1%) |
| [The Left](https://left.eu/) | 127 | 112<br>(–12%) | ***108<br>(–14.7%)*** | 116<br>(–8.4%) | 110<br>(–13.1%) | n/a | 112<br>(–11.6%) | 116<br>(–8.5%) |
| [The Register](https://www.theregister.com/) | 1112 | 887<br>(–20.2%) | ***836<br>(–24.8%)*** | n/a | 856<br>(–23.1%) | n/a | 891<br>(–19.9%) | 892<br>(–19.8%) |
| [The Spinoff](https://thespinoff.co.nz/) | 522 | 504<br>(–3.5%) | ***480<br>(–8%)*** | n/a | 485<br>(–7.2%) | n/a | 512<br>(–2%) | 516<br>(–1.2%) |
| [Threema](https://threema.com/en) | 700 | 470<br>(–32.8%) | ***365<br>(–47.8%)*** | n/a | 471<br>(–32.8%) | n/a | 494<br>(–29.5%) | 371<br>(–47%) |
| [Toss Tech](https://toss.tech/) | 278 | 276<br>(–0.7%) | ***275<br>(–0.9%)*** | 276<br>(–0.5%) | 276<br>(–0.9%) | n/a | 276<br>(–0.7%) | 276<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 173<br>(–11.3%) | ***172<br>(–11.5%)*** | 179<br>(–8.2%) | 176<br>(–9.9%) | n/a | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 59 | 56<br>(–4.9%) | ***56<br>(–5.5%)*** | 57<br>(–3.3%) | 56<br>(–5%) | n/a | 56<br>(–4.8%) | 57<br>(–3.3%) |
| [United Nations](https://www.un.org/en/) | 161 | 139<br>(–14.1%) | ***134<br>(–17.1%)*** | 141<br>(–12.9%) | 134<br>(–16.9%) | n/a | 138<br>(–14.3%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 78 | 68<br>(–12.5%) | ***68<br>(–13.1%)*** | 70<br>(–10.8%) | 69<br>(–12%) | n/a | 69<br>(–12%) | 70<br>(–10.7%) |
| [W3C](https://www.w3.org/) | 49 | 39<br>(–19.8%) | ***39<br>(–20.1%)*** | 40<br>(–18.3%) | 39<br>(–19.7%) | n/a | 39<br>(–19.7%) | 40<br>(–18.3%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 259 | 244<br>(–5.9%) | ***240<br>(–7.4%)*** | 247<br>(–4.5%) | 240<br>(–7.3%) | n/a | 244<br>(–5.9%) | 247<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 226 | 206<br>(–8.8%) | ***204<br>(–9.6%)*** | 210<br>(–7.1%) | 206<br>(–8.8%) | n/a | 207<br>(–8.2%) | 210<br>(–7%) |
| [Yle](https://yle.fi/) | 505 | 500<br>(–1%) | ***474<br>(–6.1%)*** | n/a | 479<br>(–5.2%) | n/a | 500<br>(–1%) | 500<br>(–1%) |
| [報導者](https://www.twreporter.org/) | 354 | 351<br>(–1%) | ***342<br>(–3.5%)*** | n/a | 348<br>(–1.8%) | n/a | 352<br>(–0.6%) | 352<br>(–0.5%) |
| [博客园](https://www.cnblogs.com/) | 79 | 54<br>(–31.5%) | ***54<br>(–32.4%)*** | 57<br>(–28.2%) | 56<br>(–29.4%) | n/a | 57<br>(–28.7%) | 57<br>(–28.1%) |
| [稀土掘金](https://juejin.cn/) | 77 | 74<br>(–4.7%) | ***72<br>(–6.9%)*** | 75<br>(–3.3%) | 74<br>(–4%) | n/a | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 124/124 | 124/124 | 86/124 | 124/124 | n/a | 124/124 | 124/124 |
| **Average processing time** |  | 23 ms | 16 ms | 187 ms<br>(estimate) | 31 ms | n/a | ***5.1 ms*** | 108 ms |
| **Median processing time** |  | 11 ms | 7.9 ms | 149 ms<br>(estimate) | 16 ms | n/a | ***2.1 ms*** | 35 ms |
| **Average result (KB)** | 341 | 315<br>(–7.8%) | ***306<br>(–10.2%)*** | 332<br>(–2.7%) | 311<br>(–8.8%) | n/a | 316<br>(–7.5%) | 319<br>(–6.6%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier](https://github.com/j9t/html-minifier) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 81<br>(–23.2%) | ***78<br>(–26.1%)*** | 84<br>(–19.6%) | 79<br>(–24.9%) | 82<br>(–21.7%) | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 57<br>(–10.9%) | 45<br>(–29.4%) | 57<br>(–9.9%) | ***39<br>(–38.7%)*** | 57<br>(–10.3%) | 57<br>(–11.4%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.9%) | 108<br>(–20.9%) | 113<br>(–16.9%) | ***107<br>(–21.1%)*** | 112<br>(–17.6%) | 112<br>(–17.6%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 64 | 51<br>(–19.8%) | ***50<br>(–20.9%)*** | 52<br>(–18.7%) | 51<br>(–20.7%) | 51<br>(–19.6%) | 51<br>(–19.7%) | 52<br>(–19.1%) |
| [AfricTivistes](https://www.africtivistes.org/) | 457 | 404<br>(–11.5%) | 393<br>(–13.9%) | n/a | ***388<br>(–14.9%)*** | 407<br>(–10.8%) | 408<br>(–10.7%) | 449<br>(–1.6%) |
| [Al-Haq](https://www.alhaq.org/) | 90 | 49<br>(–45.2%) | 42<br>(–52.9%) | 49<br>(–45.6%) | ***40<br>(–55.5%)*** | 48<br>(–47.1%) | 51<br>(–43.1%) | 64<br>(–29%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 194 | 155<br>(–19.8%) | 123<br>(–36.3%) | 156<br>(–19.3%) | ***116<br>(–40%)*** | n/a | 158<br>(–18.4%) | 172<br>(–11.5%) |
| [BBC](https://www.bbc.co.uk/) | 686 | 641<br>(–6.4%) | ***630<br>(–8.1%)*** | n/a | 633<br>(–7.7%) | 653<br>(–4.7%) | 643<br>(–6.3%) | 680<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 102 | 84<br>(–17.3%) | ***67<br>(–34.5%)*** | 87<br>(–15.1%) | 68<br>(–33.2%) | 83<br>(–18.4%) | 84<br>(–17.3%) | 87<br>(–14.7%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.6%) | ***32<br>(–10.4%)*** | 35<br>(–2.6%) | 32<br>(–9.6%) | 34<br>(–6.1%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 278 | 261<br>(–6.2%) | ***207<br>(–25.6%)*** | 275<br>(–1.3%) | 210<br>(–24.6%) | 261<br>(–6.1%) | 264<br>(–5.2%) | 275<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 70 | 53<br>(–24.9%) | ***52<br>(–25.7%)*** | 55<br>(–21.8%) | 52<br>(–25.7%) | 53<br>(–24.8%) | 53<br>(–24.4%) | 55<br>(–21.9%) |
| [CERN](https://home.cern/) | 292 | 262<br>(–10.3%) | 224<br>(–23.3%) | 269<br>(–7.7%) | ***213<br>(–27%)*** | 268<br>(–8.1%) | 263<br>(–9.8%) | 279<br>(–4.3%) |
| [Citizen Lab](https://citizenlab.ca/) | 129 | 118<br>(–8%) | 85<br>(–33.8%) | 120<br>(–6.4%) | ***85<br>(–34%)*** | 118<br>(–8.4%) | 119<br>(–7.5%) | 123<br>(–4.7%) |
| [Codeberg](https://codeberg.org/) | 34 | 30<br>(–9.7%) | 28<br>(–18.1%) | 31<br>(–9.2%) | ***28<br>(–18.4%)*** | 30<br>(–10.3%) | 30<br>(–9.8%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 123 | 103<br>(–16%) | ***81<br>(–34.4%)*** | 108<br>(–11.8%) | 83<br>(–32.6%) | 105<br>(–14.6%) | 105<br>(–14.6%) | 115<br>(–6%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 107<br>(–5.2%) | ***84<br>(–25.2%)*** | 112<br>(–1.1%) | 85<br>(–24.9%) | 106<br>(–6.3%) | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 112 | 94<br>(–15.8%) | ***66<br>(–40.8%)*** | 99<br>(–11.7%) | 66<br>(–40.6%) | 93<br>(–16.6%) | 96<br>(–14.4%) | 101<br>(–9.7%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 216<br>(–22.4%) | 191<br>(–31.6%) | 266<br>(–4.6%) | ***178<br>(–36%)*** | 216<br>(–22.3%) | 218<br>(–21.8%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–30.5%) | 15<br>(–32.5%) | 16<br>(–29.1%) | ***15<br>(–32.8%)*** | 16<br>(–30.7%) | 16<br>(–30.6%) | 16<br>(–28.4%) |
| [DIN](https://www.din.de/) | 256 | 175<br>(–31.7%) | ***134<br>(–47.7%)*** | n/a | 135<br>(–47.3%) | n/a | 176<br>(–31.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 553 | 517<br>(–6.5%) | 510<br>(–7.8%) | n/a | ***505<br>(–8.7%)*** | 510<br>(–7.8%) | 511<br>(–7.5%) | 550<br>(–0.5%) |
| [dxsrc](https://dxsrc.org/) | 232 | 232<br>(0%) | ***224<br>(–3.1%)*** | 231<br>(–0.2%) | 225<br>(–3.1%) | 232<br>(0%) | 232<br>(0%) | 250<br>(+8%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7636 | 7168<br>(–6.1%) | ***7023<br>(–8%)*** | n/a | 7082<br>(–7.3%) | 7143<br>(–6.5%) | 7174<br>(–6%) | 7195<br>(–5.8%) |
| [EDRi](https://edri.org/) | 85 | 75<br>(–11.8%) | ***56<br>(–34.7%)*** | 77<br>(–9.3%) | 56<br>(–33.8%) | 75<br>(–11.3%) | 76<br>(–10.6%) | 80<br>(–6.5%) |
| [EFF](https://www.eff.org/) | 54 | 47<br>(–13.3%) | ***43<br>(–19.5%)*** | 48<br>(–10.3%) | 44<br>(–18.3%) | 46<br>(–13.5%) | 47<br>(–12.3%) | 48<br>(–9.8%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***187<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | 200<br>(–16.6%) | 188<br>(–21.4%) | 205<br>(–14.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***31<br>(–38%)*** | 33<br>(–33%) | 31<br>(–37.8%) | 33<br>(–33.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 444 | 431<br>(–2.7%) | 113<br>(–74.6%) | n/a | ***112<br>(–74.9%)*** | 435<br>(–2%) | 431<br>(–2.9%) | 441<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 282<br>(–5.4%) | 245<br>(–17.8%) | n/a | ***241<br>(–19.1%)*** | 280<br>(–6%) | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 195<br>(–7.7%) | ***142<br>(–32.6%)*** | 200<br>(–5.3%) | 144<br>(–32%) | 198<br>(–6.5%) | 196<br>(–7.3%) | 205<br>(–2.7%) |
| [Fairphone](https://www.fairphone.com/) | 151 | 89<br>(–40.7%) | ***80<br>(–46.8%)*** | n/a | 84<br>(–44.5%) | 89<br>(–41%) | 91<br>(–39.7%) | 95<br>(–37%) |
| [FAZ](https://www.faz.net/aktuell/) | 1390 | 1260<br>(–9.3%) | 1152<br>(–17.1%) | n/a | ***1141<br>(–17.9%)*** | 1330<br>(–4.3%) | 1325<br>(–4.6%) | 1331<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 972 | 827<br>(–14.9%) | ***711<br>(–26.9%)*** | n/a | 751<br>(–22.8%) | 814<br>(–16.3%) | 848<br>(–12.8%) | 848<br>(–12.8%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 110<br>(–8.4%) | 72<br>(–39.5%) | 113<br>(–6%) | ***68<br>(–43.3%)*** | 111<br>(–7.2%) | 111<br>(–7.2%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 130<br>(–30.7%) | ***56<br>(–69.9%)*** | 132<br>(–29.5%) | 56<br>(–69.8%) | 131<br>(–29.9%) | 130<br>(–30.5%) | 138<br>(–26.4%) |
| [Front-End Social](https://front-end.social/) | 54 | 49<br>(–8.6%) | ***46<br>(–14%)*** | 52<br>(–4%) | 47<br>(–13.6%) | 51<br>(–5.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***10<br>(–31%)*** | 12<br>(–18.2%) | 10<br>(–30.4%) | 12<br>(–19.2%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Ground News](https://ground.news/) | 3587 | 3344<br>(–6.8%) | ***3260<br>(–9.1%)*** | n/a | 3281<br>(–8.5%) | 3341<br>(–6.9%) | 3340<br>(–6.9%) | 3573<br>(–0.4%) |
| [heise online](https://www.heise.de/) | 902 | 881<br>(–2.3%) | ***858<br>(–4.9%)*** | n/a | 865<br>(–4.1%) | 866<br>(–4.1%) | 883<br>(–2.1%) | 887<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 55<br>(–11.8%) | 42<br>(–32.1%) | 57<br>(–7.9%) | ***33<br>(–46.6%)*** | 56<br>(–9%) | 55<br>(–11%) | 60<br>(–3.1%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 393 | 360<br>(–8.5%) | ***309<br>(–21.5%)*** | n/a | 310<br>(–21.1%) | 361<br>(–8.1%) | 364<br>(–7.5%) | 372<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.5%) | 121<br>(–1.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 152 | 151<br>(–0.3%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.3%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 278 | 232<br>(–16.5%) | ***220<br>(–20.8%)*** | 239<br>(–14.1%) | 221<br>(–20.3%) | 233<br>(–16.1%) | 236<br>(–15.2%) | 239<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 33<br>(–59.7%) | ***31<br>(–62.6%)*** | 35<br>(–58.2%) | 32<br>(–61.9%) | 33<br>(–60.1%) | 34<br>(–59.7%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 45 | 34<br>(–24.5%) | 33<br>(–26.2%) | 34<br>(–23.3%) | ***33<br>(–26.9%)*** | 33<br>(–25.1%) | 34<br>(–24.4%) | 35<br>(–22.3%) |
| [iLaw](https://www.ilaw.or.th/) | 403 | 343<br>(–14.7%) | ***289<br>(–28.2%)*** | n/a | 292<br>(–27.4%) | 344<br>(–14.6%) | 350<br>(–12.9%) | 381<br>(–5.4%) |
| [InfoQ China](https://www.infoq.cn/) | 667 | 639<br>(–4.2%) | 575<br>(–13.7%) | n/a | ***480<br>(–28%)*** | 640<br>(–4%) | 639<br>(–4.1%) | 644<br>(–3.4%) |
| [inkyfada](https://inkyfada.com/fr/) | 340 | 295<br>(–13.3%) | ***221<br>(–34.9%)*** | n/a | 234<br>(–31.2%) | 292<br>(–14%) | 300<br>(–11.9%) | 305<br>(–10.2%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 136<br>(–10.3%) | ***119<br>(–21.6%)*** | 143<br>(–6%) | 120<br>(–21%) | 136<br>(–10%) | 138<br>(–8.9%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 138 | 79<br>(–42.6%) | ***75<br>(–45.6%)*** | 83<br>(–40.4%) | 77<br>(–44.2%) | 81<br>(–41.6%) | 80<br>(–42.5%) | 82<br>(–40.7%) |
| [ITWeb](https://www.itweb.co.za/) | 326 | 296<br>(–9.2%) | 175<br>(–46.3%) | n/a | ***174<br>(–46.7%)*** | 302<br>(–7.5%) | 301<br>(–7.9%) | 306<br>(–6.2%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 343<br>(–17.3%) | 180<br>(–56.6%) | n/a | ***170<br>(–59%)*** | 347<br>(–16.2%) | 343<br>(–17.3%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 51 | 50<br>(–1.5%) | 44<br>(–14.4%) | 51<br>(–0.8%) | ***44<br>(–14.5%)*** | 51<br>(–0.6%) | 50<br>(–1.6%) | 51<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 214<br>(–11.7%) | 210<br>(–13.4%) | 233<br>(–4%) | ***209<br>(–13.8%)*** | 217<br>(–10.6%) | 227<br>(–6.2%) | 227<br>(–6.5%) |
| [Kloop](https://kloop.kg/) | 196 | 158<br>(–19.4%) | ***128<br>(–34.9%)*** | 178<br>(–9.3%) | 128<br>(–34.4%) | 168<br>(–14%) | 160<br>(–18.4%) | 184<br>(–6.3%) |
| [KoRo](https://www.koro.com/) | 790 | 736<br>(–6.9%) | ***722<br>(–8.6%)*** | n/a | 726<br>(–8.1%) | 749<br>(–5.2%) | 745<br>(–5.7%) | 761<br>(–3.6%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 54 | 43<br>(–21%) | 28<br>(–47.6%) | 45<br>(–17.4%) | ***25<br>(–53%)*** | 45<br>(–17.8%) | 44<br>(–19%) | 47<br>(–13.9%) |
| [Ladybird](https://ladybird.org/) | 34 | 32<br>(–6.1%) | 31<br>(–8.3%) | 32<br>(–5.6%) | ***31<br>(–8.4%)*** | 32<br>(–6.4%) | 32<br>(–5.9%) | 32<br>(–4.9%) |
| [Leanpub](https://leanpub.com/) | 512 | 484<br>(–5.5%) | 465<br>(–9.1%) | n/a | ***463<br>(–9.5%)*** | 487<br>(–4.9%) | 485<br>(–5.3%) | 503<br>(–1.7%) |
| [Legal Resources Centre](https://lrc.org.za/) | 169 | 163<br>(–3.5%) | ***133<br>(–20.9%)*** | 165<br>(–2.4%) | 134<br>(–20.6%) | 163<br>(–3.3%) | 163<br>(–3.5%) | 166<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 9<br>(–45.8%) | ***9<br>(–47.8%)*** | 10<br>(–42.7%) | 9<br>(–47.1%) | 9<br>(–45.8%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mada Masr](https://www.madamasr.com/en/) | 176 | 145<br>(–17.7%) | ***66<br>(–62.5%)*** | 149<br>(–15.8%) | 120<br>(–31.8%) | 145<br>(–18%) | 147<br>(–16.5%) | 154<br>(–13%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 46<br>(–8.4%) | ***43<br>(–14.1%)*** | 48<br>(–3.9%) | 43<br>(–13.8%) | 48<br>(–5.7%) | 47<br>(–7.3%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 117 | 69<br>(–41.4%) | 66<br>(–43.2%) | 72<br>(–38.8%) | ***61<br>(–48.1%)*** | 69<br>(–41.3%) | 69<br>(–41.3%) | 71<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 350 | 303<br>(–13.5%) | ***221<br>(–37%)*** | n/a | 223<br>(–36.4%) | 281<br>(–19.8%) | 308<br>(–12%) | 309<br>(–11.9%) |
| [Media Foundation for West Africa](https://mfwa.org/) | 332 | 293<br>(–11.5%) | ***239<br>(–27.9%)*** | n/a | 254<br>(–23.6%) | 289<br>(–12.7%) | 295<br>(–10.9%) | 307<br>(–7.3%) |
| [Mistral AI](https://mistral.ai/) | 314 | 298<br>(–5.1%) | ***180<br>(–42.6%)*** | n/a | 187<br>(–40.5%) | 290<br>(–7.5%) | 303<br>(–3.5%) | 313<br>(–0.3%) |
| [Mondoweiss](https://mondoweiss.net/) | 137 | 120<br>(–12.4%) | 103<br>(–24.8%) | 123<br>(–10.2%) | ***101<br>(–26%)*** | 121<br>(–11.7%) | 120<br>(–12%) | 125<br>(–8.5%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***32<br>(–31.9%)*** | 36<br>(–22.1%) | 32<br>(–31.8%) | 35<br>(–25.2%) | 35<br>(–25.5%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 333 | 297<br>(–10.9%) | 250<br>(–24.9%) | n/a | ***248<br>(–25.5%)*** | 303<br>(–9.1%) | 298<br>(–10.6%) | 310<br>(–6.8%) |
| [Nextcloud](https://nextcloud.com/) | 236 | 195<br>(–17.6%) | ***173<br>(–26.6%)*** | 202<br>(–14.6%) | 173<br>(–26.6%) | 195<br>(–17.4%) | 200<br>(–15.4%) | 213<br>(–9.8%) |
| [Nikkei](https://www.nikkei.com/) | 703 | 654<br>(–7%) | ***620<br>(–11.8%)*** | n/a | 635<br>(–9.6%) | 678<br>(–3.5%) | 656<br>(–6.6%) | 693<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 47 | 35<br>(–25.2%) | ***34<br>(–27.5%)*** | 36<br>(–23.4%) | 34<br>(–27.1%) | 35<br>(–25.1%) | 35<br>(–25.1%) | 36<br>(–23.7%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 113<br>(–8.3%) | 68<br>(–44.9%) | 116<br>(–5.8%) | ***64<br>(–47.9%)*** | 114<br>(–7.3%) | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 311<br>(–4%) | 139<br>(–57.1%) | n/a | ***107<br>(–67.2%)*** | 315<br>(–3.1%) | 312<br>(–3.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 97<br>(–11.2%) | 60<br>(–45.5%) | 102<br>(–7.2%) | ***58<br>(–46.7%)*** | 100<br>(–8.7%) | 98<br>(–10.9%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 192 | 137<br>(–28.8%) | ***89<br>(–53.6%)*** | 142<br>(–25.8%) | 91<br>(–52.8%) | 140<br>(–26.8%) | 138<br>(–28.3%) | 142<br>(–25.9%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.9%) | ***142<br>(–19.8%)*** | 149<br>(–15.9%) | 145<br>(–18.1%) | 148<br>(–16.6%) | 147<br>(–16.9%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 147 | 135<br>(–7.9%) | 86<br>(–41.1%) | 140<br>(–4.7%) | ***81<br>(–44.7%)*** | 139<br>(–5.4%) | 135<br>(–7.7%) | 144<br>(–2.2%) |
| [Página 12](https://www.pagina12.com.ar/) | 886 | 850<br>(–4%) | 799<br>(–9.9%) | n/a | ***796<br>(–10.1%)*** | 832<br>(–6.1%) | 833<br>(–6%) | 881<br>(–0.6%) |
| [Paradigm Initiative](https://paradigmhq.org/) | 428 | 350<br>(–18.2%) | ***309<br>(–27.9%)*** | n/a | 310<br>(–27.6%) | 354<br>(–17.3%) | 354<br>(–17.3%) | 403<br>(–5.9%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 164 | 137<br>(–16.5%) | ***128<br>(–21.7%)*** | 144<br>(–12%) | 129<br>(–21.4%) | 136<br>(–16.8%) | 140<br>(–14.6%) | 160<br>(–2.4%) |
| [Piccalilli](https://piccalil.li/) | 78 | 74<br>(–5.7%) | 64<br>(–18.2%) | 76<br>(–3%) | ***61<br>(–21.4%)*** | 73<br>(–6.6%) | 74<br>(–4.9%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–28%) | ***46<br>(–44.8%)*** | 62<br>(–25%) | 48<br>(–42%) | 58<br>(–30.6%) | 62<br>(–25.6%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 420 | 376<br>(–10.6%) | 368<br>(–12.3%) | n/a | ***365<br>(–13.1%)*** | 379<br>(–9.7%) | 383<br>(–8.7%) | 412<br>(–2%) |
| [Qiita](https://qiita.com/) | 377 | 359<br>(–4.9%) | ***320<br>(–15.2%)*** | n/a | 324<br>(–14.1%) | 363<br>(–3.8%) | 361<br>(–4.3%) | 370<br>(–1.9%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***21<br>(–42.5%)*** | 32<br>(–13.5%) | 22<br>(–41.7%) | 28<br>(–24.1%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 153 | 135<br>(–11.8%) | ***129<br>(–15.8%)*** | 152<br>(–1.2%) | 130<br>(–15.2%) | 135<br>(–12.3%) | 136<br>(–11.5%) | 152<br>(–1.2%) |
| [R3D](https://r3d.mx/) | 309 | 297<br>(–4%) | 107<br>(–65.4%) | n/a | ***106<br>(–65.6%)*** | 301<br>(–2.6%) | 297<br>(–4%) | 305<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 788 | 727<br>(–7.7%) | ***453<br>(–42.6%)*** | n/a | 457<br>(–42.1%) | 724<br>(–8.1%) | 736<br>(–6.7%) | 760<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 64<br>(–9.1%) | 45<br>(–36.2%) | 66<br>(–6.6%) | ***43<br>(–39.2%)*** | 66<br>(–7.4%) | 65<br>(–8.1%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 183 | 164<br>(–10.4%) | 142<br>(–22.8%) | 171<br>(–6.6%) | ***140<br>(–23.6%)*** | 165<br>(–9.8%) | 166<br>(–9.3%) | 174<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 134 | 91<br>(–32.2%) | ***83<br>(–38%)*** | 93<br>(–30.7%) | 83<br>(–37.9%) | 91<br>(–32.2%) | 91<br>(–32.2%) | 93<br>(–30.1%) |
| [SAFEnet](https://safenet.or.id/) | 812 | 658<br>(–19%) | 637<br>(–21.5%) | n/a | ***635<br>(–21.8%)*** | 651<br>(–19.8%) | 656<br>(–19.2%) | 791<br>(–2.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.9%) | ***30<br>(–11.1%)*** | 32<br>(–7.3%) | 30<br>(–11%) | 31<br>(–10.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–16.5%)*** | 18<br>(–11.8%) | 17<br>(–16.3%) | 18<br>(–14.1%) | 18<br>(–14.4%) | 18<br>(–11.4%) |
| [SFLC.in](https://sflc.in/) | 213 | 202<br>(–4.8%) | ***173<br>(–18.5%)*** | 210<br>(–1.4%) | 175<br>(–17.7%) | 206<br>(–3.3%) | 204<br>(–4.2%) | 210<br>(–1.1%) |
| [SitePoint](https://www.sitepoint.com/) | 227 | 214<br>(–5.4%) | ***201<br>(–11.1%)*** | 217<br>(–4.1%) | 203<br>(–10.2%) | 213<br>(–6.2%) | 216<br>(–4.7%) | 225<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 273 | 271<br>(–0.9%) | 260<br>(–5%) | 273<br>(–0.1%) | ***259<br>(–5.3%)*** | 272<br>(–0.2%) | 271<br>(–0.9%) | 273<br>(0%) |
| [SMEX](https://smex.org/) | 175 | 165<br>(–5.7%) | 130<br>(–25.6%) | 170<br>(–2.7%) | ***127<br>(–27.6%)*** | 166<br>(–5.1%) | 166<br>(–5.2%) | 172<br>(–1.5%) |
| [Startup-Verband](https://startupverband.de/) | 58 | 41<br>(–28.6%) | ***39<br>(–32.6%)*** | 42<br>(–27.3%) | 39<br>(–31.6%) | 41<br>(–28.7%) | 41<br>(–28.3%) | 42<br>(–27.3%) |
| [TAZ](https://taz.de/) | 408 | 345<br>(–15.6%) | ***313<br>(–23.4%)*** | n/a | 338<br>(–17.2%) | 354<br>(–13.3%) | 358<br>(–12.3%) | 381<br>(–6.6%) |
| [TEDIC](https://www.tedic.org/) | 94 | 79<br>(–16.5%) | 52<br>(–44.9%) | 80<br>(–14.8%) | ***48<br>(–49.4%)*** | 80<br>(–15.6%) | 80<br>(–15.5%) | 85<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 93 | 85<br>(–7.8%) | ***82<br>(–11.4%)*** | 87<br>(–6%) | 83<br>(–10.2%) | 84<br>(–9.1%) | 87<br>(–6.3%) | 87<br>(–6%) |
| [The Daily Star](https://www.thedailystar.net/) | 274 | 216<br>(–21.1%) | ***207<br>(–24.4%)*** | 222<br>(–18.9%) | 209<br>(–23.8%) | 216<br>(–21%) | 219<br>(–19.8%) | 222<br>(–18.7%) |
| [The Kyiv Independent](https://kyivindependent.com/) | 371 | 343<br>(–7.3%) | ***325<br>(–12.2%)*** | n/a | 329<br>(–11.3%) | 346<br>(–6.7%) | 343<br>(–7.5%) | 367<br>(–1%) |
| [The Left](https://left.eu/) | 127 | 105<br>(–17%) | ***91<br>(–28.6%)*** | 113<br>(–11.3%) | 92<br>(–27.3%) | 107<br>(–15.7%) | 107<br>(–15.3%) | 116<br>(–8.5%) |
| [The Register](https://www.theregister.com/) | 1112 | 841<br>(–24.4%) | ***766<br>(–31.2%)*** | n/a | 786<br>(–29.3%) | 845<br>(–24.1%) | 854<br>(–23.2%) | 892<br>(–19.8%) |
| [The Spinoff](https://thespinoff.co.nz/) | 522 | 503<br>(–3.7%) | ***455<br>(–12.9%)*** | n/a | 472<br>(–9.7%) | n/a | 512<br>(–2%) | 516<br>(–1.2%) |
| [Threema](https://threema.com/en) | 700 | 470<br>(–32.9%) | ***350<br>(–50%)*** | n/a | 352<br>(–49.7%) | 421<br>(–39.9%) | 387<br>(–44.7%) | 371<br>(–47%) |
| [Toss Tech](https://toss.tech/) | 278 | 269<br>(–3.4%) | ***265<br>(–4.6%)*** | 269<br>(–3.1%) | 265<br>(–4.6%) | 268<br>(–3.7%) | 267<br>(–3.9%) | 276<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 148<br>(–24%) | 132<br>(–32.5%) | 158<br>(–18.7%) | ***131<br>(–32.7%)*** | 150<br>(–22.9%) | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 59 | 56<br>(–4.9%) | 55<br>(–6.1%) | 57<br>(–3.3%) | ***55<br>(–6.3%)*** | 56<br>(–4.8%) | 56<br>(–4.8%) | 57<br>(–3.3%) |
| [United Nations](https://www.un.org/en/) | 161 | 135<br>(–16.7%) | 90<br>(–44.6%) | 130<br>(–19.5%) | ***89<br>(–44.8%)*** | 131<br>(–19.1%) | 134<br>(–16.8%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 78 | 66<br>(–15.2%) | ***60<br>(–23.1%)*** | 69<br>(–12.4%) | 61<br>(–22.2%) | n/a | 67<br>(–13.8%) | 70<br>(–10.7%) |
| [W3C](https://www.w3.org/) | 49 | 37<br>(–23.6%) | ***35<br>(–28.6%)*** | 38<br>(–22.3%) | 35<br>(–28.3%) | 37<br>(–23.7%) | 37<br>(–23.6%) | 40<br>(–18.3%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 259 | 243<br>(–6.1%) | ***226<br>(–12.7%)*** | 247<br>(–4.7%) | 226<br>(–12.6%) | 244<br>(–5.9%) | 243<br>(–6.2%) | 247<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 226 | 184<br>(–18.6%) | ***153<br>(–32.5%)*** | 196<br>(–13.4%) | 153<br>(–32.1%) | 186<br>(–17.5%) | 194<br>(–14.2%) | 210<br>(–7%) |
| [Yle](https://yle.fi/) | 505 | 456<br>(–9.7%) | 403<br>(–20.2%) | n/a | ***400<br>(–20.7%)*** | 461<br>(–8.7%) | 455<br>(–10%) | 500<br>(–1%) |
| [報導者](https://www.twreporter.org/) | 354 | 326<br>(–8%) | ***293<br>(–17.3%)*** | n/a | 298<br>(–15.8%) | 333<br>(–6%) | 327<br>(–7.5%) | 352<br>(–0.5%) |
| [博客园](https://www.cnblogs.com/) | 79 | 54<br>(–32.1%) | ***50<br>(–36.9%)*** | 57<br>(–28.6%) | 52<br>(–34.3%) | 54<br>(–31.7%) | 56<br>(–28.9%) | 57<br>(–28.1%) |
| [稀土掘金](https://juejin.cn/) | 77 | 65<br>(–15.5%) | ***58<br>(–24.4%)*** | 73<br>(–5.9%) | 59<br>(–23.3%) | 65<br>(–16%) | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 124/124 | 124/124 | 84/124 | 124/124 | 120/124 | 124/124 | 124/124 |
| **Average processing time** |  | 28 ms | 38 ms | 844 ms<br>(estimate) | 138 ms | ***6.3 ms*** | 7.6 ms | 107 ms |
| **Median processing time** |  | 14 ms | 21 ms | 740 ms<br>(estimate) | 80 ms | ***3.8 ms*** | 4.3 ms | 34 ms |
| **Average result (KB)** | 341 | 304<br>(–10.8%) | ***270<br>(–21%)*** | 331<br>(–3%) | 271<br>(–20.7%) | 306<br>(–10.3%) | 306<br>(–10.4%) | 319<br>(–6.6%) |

Benchmarks last updated: Nov 6, 2026 (Node.js 26.13.0, macOS 15.7.9, Apple M4)
<!-- End auto-generated -->

## Notes

* Minifiers:
  - @swc/html runs with `collapseWhitespaces: 'smart'`, as its more aggressive `'all'` removes whitespace between inline elements, fusing words (e.g., “and <a>videos</a> and” becomes “andvideosand”).
  - [HTML Minifier Next](https://github.com/j9t/html-minifier-next) isn’t included anymore as it was merged with and continues as HTML Minifier (as of HTML Minifier 5).
  - HTML Minifier Terser is not included due to several issues that distort the data at the expense of minifier users: For example, in HTML minification, it removes whitespace around newer inline elements (changing text) and drops some closing tags (e.g., `</a>`, which turns subsequent content into links); in CSS minification, it removes nested rules as well as `@scope` blocks (last confirmed Oct 15, 2026).
  - htmlcompressor.com incorrectly converts no-break spaces to spaces which can give an impression of greater effectiveness (last confirmed Apr 4, 2026).
  - htmlnano’s maximum minification removes some code that is in use—e.g., SVG sprite symbols that other SVGs reference, `:host` rules of declarative shadow DOM, and no-break spaces next to elements—which can give an impression of greater effectiveness (last confirmed Oct 1, 2026).
  - minify can’t limit minification to HTML (it always minifies CSS and JavaScript, too), which is why it only takes part in maximum minification.
    + Note: minify’s npm package includes native libraries for macOS on ARM, Linux on x64 and ARM, and Windows on x64; on other platforms, building the library requires Go 1.24+ and a C compiler (without it, minify’s results will show as “n/a”).
  - Minimize only minifies HTML.
* Sites: The sample set (sites.json) is shared with [HTML Minifier’s backtest](https://github.com/j9t/html-minifier/blob/main/backtest/sites.json)—when changing one, change both. Reserves are kept in sites.backup.json.
* Configuration: Each minifier runs with a general configuration for all sites. Where a minifier offers a dedicated option to handle a case correctly (e.g., HTML Minifier’s `inlineCustomElements` for custom elements that are displayed inline), its output is not considered incorrect, even when that option isn’t set here (specifying custom settings for all sites for all minifiers is impractical).
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
  - Processing times cover the minification call only (not reading, writing, or compressing files). Each local minifier runs in its own process and first runs once on all sites (untimed) to warm up. Per site, each then gets three more untimed warm-up runs, followed by five timed runs that the minifiers take in turns, in rotating order, so that system load affects all of them alike; the median of these runs is the site’s time. Sites are only timed when the system is mostly idle, and unsteady timings get re-measured. Minification caches that persist across calls are disabled where possible.
  - Average and median processing times of local minifiers are based on the sites all of them processed. Times within 5% of the fastest also count as fastest, as smaller differences are within measurement noise. htmlcompressor.com’s times are estimates: the difference between its response time and that of a request with the same content but minification off (which still removes comments). Network jitter makes estimates for single sites unreliable, so only averages and medians are shown, only if the average exceeds twice its standard error (otherwise “network noise”), and they don’t count as fastest.
* Benchmarks are currently run manually but may be automated in the future.
* Website: The results are also available on [the project website](https://j9t.github.io/minifier-benchmarks/), whose data (`site/data/`) each benchmark run updates. (To preview the site locally, serve the site/ folder, e.g., `npx serve site`).