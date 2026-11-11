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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 86<br>(–18.4%) | ***84<br>(–19.9%)*** | 89<br>(–15.1%) | 86<br>(–18%) | n/a | 85<br>(–18.5%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 59<br>(–7.4%) | 59<br>(–7.6%) | 59<br>(–7.1%) | ***59<br>(–8.2%)*** | n/a | 59<br>(–8%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.8%) | ***110<br>(–19%)*** | 113<br>(–16.7%) | 112<br>(–17.8%) | n/a | 112<br>(–17.4%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 50<br>(–20.1%) | ***49<br>(–20.9%)*** | 51<br>(–18.9%) | 50<br>(–20.7%) | n/a | 50<br>(–19.8%) | 50<br>(–19.5%) |
| [AfricTivistes](https://www.africtivistes.org/) | 457 | 407<br>(–10.9%) | ***395<br>(–13.5%)*** | n/a | 396<br>(–13.2%) | n/a | 410<br>(–10.2%) | 449<br>(–1.6%) |
| [Al-Haq](https://www.alhaq.org/) | 90 | 62<br>(–30.9%) | ***60<br>(–32.7%)*** | 64<br>(–28.8%) | 62<br>(–31.5%) | n/a | 63<br>(–29.8%) | 64<br>(–29%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 196 | 169<br>(–13.6%) | 167<br>(–14.8%) | 174<br>(–10.9%) | ***166<br>(–15.4%)*** | n/a | 170<br>(–13.2%) | 173<br>(–11.4%) |
| [BBC](https://www.bbc.co.uk/) | 708 | 698<br>(–1.4%) | ***697<br>(–1.6%)*** | n/a | 697<br>(–1.5%) | n/a | 700<br>(–1.2%) | 703<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 102 | 86<br>(–15.7%) | ***83<br>(–18.9%)*** | 88<br>(–13.6%) | 85<br>(–16.7%) | n/a | 86<br>(–15.3%) | 87<br>(–14.7%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.5%) | ***33<br>(–9%)*** | 35<br>(–2.3%) | 33<br>(–8.6%) | n/a | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 278 | 262<br>(–6%) | ***212<br>(–23.9%)*** | 275<br>(–1.2%) | 216<br>(–22.6%) | n/a | 264<br>(–5.2%) | 275<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 70 | 53<br>(–24.7%) | ***53<br>(–24.8%)*** | 55<br>(–21.7%) | 53<br>(–24.8%) | n/a | 53<br>(–24.2%) | 55<br>(–21.8%) |
| [CERN](https://home.cern/) | 292 | 278<br>(–4.8%) | 275<br>(–5.6%) | 280<br>(–4.2%) | ***273<br>(–6.6%)*** | n/a | 278<br>(–4.7%) | 279<br>(–4.3%) |
| [Citizen Lab](https://citizenlab.ca/) | 133 | 125<br>(–5.8%) | ***125<br>(–5.9%)*** | 127<br>(–4.8%) | 126<br>(–5.7%) | n/a | 126<br>(–5.5%) | 127<br>(–4.7%) |
| [Codeberg](https://codeberg.org/) | 34 | 31<br>(–9%) | ***30<br>(–9.6%)*** | 31<br>(–8.2%) | 31<br>(–8.7%) | n/a | 31<br>(–9.1%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 123 | 113<br>(–7.8%) | ***110<br>(–10.8%)*** | 116<br>(–6%) | 112<br>(–8.5%) | n/a | 113<br>(–7.7%) | 115<br>(–6%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–1.3%) | ***111<br>(–1.9%)*** | 112<br>(–0.7%) | 112<br>(–1%) | n/a | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 111 | 97<br>(–13.3%) | ***95<br>(–14.4%)*** | 100<br>(–10%) | 98<br>(–12.2%) | n/a | 98<br>(–12.3%) | 101<br>(–9.7%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 222<br>(–20.4%) | ***219<br>(–21.5%)*** | 270<br>(–3%) | 220<br>(–20.9%) | n/a | 223<br>(–20%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–29.1%) | 16<br>(–30.8%) | 16<br>(–27.6%) | ***16<br>(–30.9%)*** | n/a | 16<br>(–29.4%) | 16<br>(–28.2%) |
| [DIN](https://www.din.de/) | 256 | 181<br>(–29.2%) | ***177<br>(–31%)*** | 185<br>(–27.8%) | 179<br>(–30.2%) | n/a | 182<br>(–29.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 547 | 542<br>(–0.9%) | ***541<br>(–1.2%)*** | n/a | 542<br>(–1%) | n/a | 542<br>(–0.9%) | 544<br>(–0.5%) |
| [dxsrc](https://dxsrc.org/) | 233 | 233<br>(0%) | 233<br>(0%) | ***233<br>(–0.2%)*** | 233<br>(0%) | n/a | 233<br>(0%) | 252<br>(+7.9%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7636 | 7168<br>(–6.1%) | ***7025<br>(–8%)*** | n/a | 7084<br>(–7.2%) | n/a | 7175<br>(–6%) | 7196<br>(–5.8%) |
| [EDRi](https://edri.org/) | 85 | 78<br>(–8.3%) | ***78<br>(–8.7%)*** | 80<br>(–6.5%) | 79<br>(–7.5%) | n/a | 79<br>(–7.2%) | 80<br>(–6.5%) |
| [EFF](https://www.eff.org/) | 55 | 49<br>(–10.4%) | ***47<br>(–13.4%)*** | 50<br>(–7.9%) | 48<br>(–12.3%) | n/a | 49<br>(–11.3%) | 49<br>(–9.8%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***188<br>(–21.6%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | n/a | 188<br>(–21.4%) | 205<br>(–14.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***33<br>(–34.2%)*** | 33<br>(–32.9%) | 33<br>(–33.9%) | n/a | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 445 | 438<br>(–1.6%) | ***437<br>(–1.8%)*** | n/a | 437<br>(–1.7%) | n/a | 437<br>(–1.7%) | 443<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 286<br>(–4%) | 286<br>(–4.1%) | n/a | ***285<br>(–4.2%)*** | n/a | 286<br>(–3.9%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 204<br>(–3.6%) | ***193<br>(–8.9%)*** | 206<br>(–2.6%) | 196<br>(–7.1%) | n/a | 204<br>(–3.4%) | 205<br>(–2.7%) |
| [Fairphone](https://www.fairphone.com/) | 155 | 97<br>(–37.4%) | ***88<br>(–43.4%)*** | 98<br>(–36.5%) | 92<br>(–40.4%) | n/a | 96<br>(–38%) | 97<br>(–37.2%) |
| [FAZ](https://www.faz.net/aktuell/) | 1395 | 1333<br>(–4.4%) | ***1315<br>(–5.7%)*** | n/a | 1332<br>(–4.5%) | n/a | 1336<br>(–4.2%) | 1335<br>(–4.2%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 944 | 806<br>(–14.7%) | ***761<br>(–19.4%)*** | n/a | 818<br>(–13.4%) | n/a | 821<br>(–13.1%) | 819<br>(–13.3%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 121 | 116<br>(–4.6%) | ***115<br>(–5.2%)*** | 117<br>(–3.4%) | 116<br>(–4.9%) | n/a | 116<br>(–4.2%) | 117<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 136<br>(–27.1%) | ***136<br>(–27.3%)*** | 138<br>(–26.3%) | 136<br>(–27.2%) | n/a | 137<br>(–27%) | 138<br>(–26.4%) |
| [Front-End Social](https://front-end.social/) | 54 | 50<br>(–7.6%) | ***50<br>(–7.6%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | n/a | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***11<br>(–26.9%)*** | 12<br>(–17%) | 11<br>(–26.3%) | n/a | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Ground News](https://ground.news/) | 2660 | 2629<br>(–1.2%) | ***2581<br>(–3%)*** | n/a | 2613<br>(–1.8%) | n/a | 2636<br>(–0.9%) | 2646<br>(–0.5%) |
| [heise online](https://www.heise.de/) | 860 | 840<br>(–2.4%) | ***819<br>(–4.7%)*** | n/a | 828<br>(–3.8%) | n/a | 843<br>(–2%) | 845<br>(–1.8%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 60<br>(–3.8%) | 60<br>(–4.1%) | 60<br>(–2.8%) | ***60<br>(–4.1%)*** | n/a | 60<br>(–3.7%) | 60<br>(–3.1%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 396 | 368<br>(–7%) | ***367<br>(–7.4%)*** | n/a | 369<br>(–6.8%) | n/a | 371<br>(–6.4%) | 375<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3%)*** | 121<br>(–1.2%) | 120<br>(–2.2%) | n/a | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 152 | 151<br>(–0.2%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | n/a | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 278 | 235<br>(–15.4%) | ***232<br>(–16.7%)*** | 240<br>(–13.7%) | 233<br>(–16.1%) | n/a | 237<br>(–14.8%) | 239<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–59.5%) | ***32<br>(–61.9%)*** | 35<br>(–57.3%) | 32<br>(–61.1%) | n/a | 34<br>(–59.5%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 45 | 35<br>(–22.7%) | 34<br>(–23.7%) | 35<br>(–21.7%) | ***34<br>(–23.7%)*** | n/a | 35<br>(–22.7%) | 35<br>(–22.4%) |
| [iLaw](https://www.ilaw.or.th/) | 410 | 383<br>(–6.7%) | ***377<br>(–8.1%)*** | n/a | 383<br>(–6.7%) | n/a | 388<br>(–5.3%) | 387<br>(–5.6%) |
| [InfoQ China](https://www.infoq.cn/) | 676 | 650<br>(–3.9%) | ***646<br>(–4.5%)*** | n/a | 647<br>(–4.2%) | n/a | 650<br>(–3.8%) | 654<br>(–3.3%) |
| [inkyfada](https://inkyfada.com/fr/) | 336 | 295<br>(–12.3%) | ***274<br>(–18.3%)*** | n/a | 295<br>(–12.1%) | n/a | 298<br>(–11.1%) | 300<br>(–10.6%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 139<br>(–8.4%) | ***138<br>(–8.8%)*** | 144<br>(–5%) | 140<br>(–7.4%) | n/a | 141<br>(–7.1%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 139 | 81<br>(–42.1%) | ***78<br>(–43.9%)*** | 84<br>(–39.9%) | 80<br>(–42.5%) | n/a | 81<br>(–42.1%) | 83<br>(–40.5%) |
| [ITWeb](https://www.itweb.co.za/) | 326 | 301<br>(–7.8%) | ***282<br>(–13.5%)*** | n/a | 290<br>(–11.1%) | n/a | 305<br>(–6.4%) | 306<br>(–6.3%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 360<br>(–12.9%) | ***357<br>(–13.8%)*** | n/a | 357<br>(–13.7%) | n/a | 360<br>(–12.9%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 51 | 50<br>(–1.5%) | ***50<br>(–2%)*** | 51<br>(–0.8%) | 51<br>(–1.3%) | n/a | 50<br>(–1.6%) | 51<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 236<br>(–2.5%) | 235<br>(–3%) | 237<br>(–2.1%) | 236<br>(–2.8%) | n/a | 236<br>(–2.5%) | ***227<br>(–6.5%)*** |
| [Kloop](https://kloop.kg/) | 196 | 179<br>(–8.8%) | ***172<br>(–12%)*** | 184<br>(–6%) | 176<br>(–10%) | n/a | 179<br>(–8.4%) | 183<br>(–6.3%) |
| [KoRo](https://www.koro.com/) | 765 | 716<br>(–6.3%) | ***705<br>(–7.8%)*** | n/a | 714<br>(–6.6%) | n/a | 726<br>(–5.1%) | 737<br>(–3.6%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 53 | 45<br>(–15%) | 42<br>(–20.7%) | 46<br>(–12.1%) | ***42<br>(–20.9%)*** | n/a | 46<br>(–13.4%) | 45<br>(–14.3%) |
| [Ladybird](https://ladybird.org/) | 34 | 32<br>(–5.7%) | ***32<br>(–6.3%)*** | 32<br>(–5%) | 32<br>(–5.9%) | n/a | 32<br>(–5.5%) | 32<br>(–4.9%) |
| [Leanpub](https://leanpub.com/) | 518 | 508<br>(–2%) | 497<br>(–4.1%) | n/a | ***495<br>(–4.6%)*** | n/a | 509<br>(–1.7%) | 510<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 169 | 166<br>(–1.7%) | ***156<br>(–7.5%)*** | 167<br>(–1.2%) | 157<br>(–6.7%) | n/a | 166<br>(–1.7%) | 166<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–30.6%) | ***12<br>(–31.4%)*** | 12<br>(–27%) | 12<br>(–30.2%) | n/a | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mada Masr](https://www.madamasr.com/en/) | 175 | 152<br>(–13.4%) | ***91<br>(–48.1%)*** | 153<br>(–12.4%) | 148<br>(–15.7%) | n/a | 152<br>(–13.3%) | 152<br>(–13%) |
| [Mastodon](https://mastodon.social/explore) | 46 | 43<br>(–7.1%) | ***43<br>(–7.1%)*** | 44<br>(–3.5%) | 43<br>(–6.7%) | n/a | 43<br>(–6.7%) | 44<br>(–3.7%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 70<br>(–41.2%) | ***69<br>(–41.8%)*** | 73<br>(–38.7%) | 71<br>(–40.3%) | n/a | 70<br>(–41.1%) | 73<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 350 | 303<br>(–13.3%) | ***297<br>(–15%)*** | n/a | 302<br>(–13.5%) | n/a | 308<br>(–12%) | 308<br>(–12%) |
| [Media Foundation for West Africa](https://mfwa.org/) | 332 | 301<br>(–9.3%) | ***294<br>(–11.3%)*** | n/a | 298<br>(–10.3%) | n/a | 301<br>(–9.1%) | 307<br>(–7.3%) |
| [Mistral AI](https://mistral.ai/) | 314 | 302<br>(–4%) | ***249<br>(–20.9%)*** | n/a | 264<br>(–16.1%) | n/a | 305<br>(–2.9%) | 313<br>(–0.3%) |
| [Mondoweiss](https://mondoweiss.net/) | 131 | 119<br>(–9.6%) | ***115<br>(–11.9%)*** | 119<br>(–9%) | 116<br>(–11.7%) | n/a | 119<br>(–9.6%) | 119<br>(–8.9%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***35<br>(–26%)*** | 36<br>(–22.1%) | 35<br>(–25.8%) | n/a | 35<br>(–25.5%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 334 | 309<br>(–7.3%) | ***308<br>(–7.8%)*** | n/a | 308<br>(–7.8%) | n/a | 310<br>(–7.1%) | 311<br>(–6.8%) |
| [Nextcloud](https://nextcloud.com/) | 236 | 211<br>(–10.6%) | ***206<br>(–12.7%)*** | 217<br>(–8.3%) | 208<br>(–12.1%) | n/a | 212<br>(–10.2%) | 213<br>(–9.8%) |
| [Nikkei](https://www.nikkei.com/) | 698 | 651<br>(–6.7%) | ***633<br>(–9.3%)*** | n/a | 648<br>(–7.1%) | n/a | 651<br>(–6.7%) | 688<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 47 | 35<br>(–25%) | ***35<br>(–26%)*** | 36<br>(–23.3%) | 35<br>(–25.7%) | n/a | 35<br>(–25%) | 36<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 119<br>(–3.8%) | 118<br>(–4.3%) | 120<br>(–2.8%) | ***117<br>(–5.3%)*** | n/a | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 318<br>(–1.9%) | ***316<br>(–2.5%)*** | n/a | 316<br>(–2.5%) | n/a | 318<br>(–1.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 103<br>(–5.9%) | ***97<br>(–11.5%)*** | 104<br>(–5.1%) | 97<br>(–11.2%) | n/a | 103<br>(–5.6%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 192 | 142<br>(–26.1%) | ***140<br>(–27%)*** | 144<br>(–25.3%) | 142<br>(–26.2%) | n/a | 143<br>(–25.9%) | 143<br>(–25.8%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.8%) | ***144<br>(–18.4%)*** | 149<br>(–15.8%) | 148<br>(–16.5%) | n/a | 147<br>(–16.8%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 142<br>(–3%) | ***141<br>(–3.6%)*** | 143<br>(–2.1%) | 141<br>(–3.5%) | n/a | 142<br>(–3%) | 143<br>(–2.2%) |
| [Página 12](https://www.pagina12.com.ar/) | 877 | 881<br>(+0.4%) | ***865<br>(–1.4%)*** | n/a | 866<br>(–1.3%) | n/a | 870<br>(–0.8%) | 872<br>(–0.6%) |
| [Paradigm Initiative](https://paradigmhq.org/) | 425 | 361<br>(–15.1%) | ***351<br>(–17.4%)*** | n/a | 355<br>(–16.4%) | n/a | 362<br>(–14.9%) | 400<br>(–5.9%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 168 | 159<br>(–5.1%) | ***156<br>(–7.2%)*** | 164<br>(–2.6%) | 156<br>(–6.9%) | n/a | 159<br>(–5.1%) | 164<br>(–2.5%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4.5%) | ***75<br>(–4.8%)*** | 77<br>(–2.3%) | 75<br>(–4.2%) | n/a | 75<br>(–4%) | 77<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–27.7%) | ***59<br>(–29.6%)*** | 63<br>(–24.7%) | 61<br>(–26.5%) | n/a | 62<br>(–25.3%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 425 | 391<br>(–8.1%) | 387<br>(–8.9%) | n/a | ***383<br>(–9.8%)*** | n/a | 393<br>(–7.6%) | 416<br>(–2%) |
| [Qiita](https://qiita.com/) | 369 | 358<br>(–2.9%) | ***358<br>(–3%)*** | n/a | 359<br>(–2.7%) | n/a | 359<br>(–2.7%) | 362<br>(–1.9%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***28<br>(–25.3%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | n/a | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 154 | 151<br>(–1.7%) | ***151<br>(–1.7%)*** | 152<br>(–1.1%) | 152<br>(–1.2%) | n/a | 152<br>(–1.2%) | 152<br>(–1.2%) |
| [R3D](https://r3d.mx/) | 309 | 305<br>(–1.4%) | 304<br>(–1.6%) | n/a | ***304<br>(–1.6%)*** | n/a | 305<br>(–1.4%) | 305<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 788 | 744<br>(–5.6%) | ***737<br>(–6.5%)*** | n/a | 751<br>(–4.7%) | n/a | 752<br>(–4.6%) | 760<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 69<br>(–2.3%) | ***67<br>(–6%)*** | 69<br>(–2%) | 67<br>(–5.3%) | n/a | 69<br>(–2.2%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 183 | 170<br>(–7.4%) | ***168<br>(–8.2%)*** | 174<br>(–4.9%) | 170<br>(–7.4%) | n/a | 171<br>(–6.7%) | 174<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 134 | 91<br>(–32.1%) | ***84<br>(–37.3%)*** | 93<br>(–30.6%) | 84<br>(–37.2%) | n/a | 91<br>(–32.1%) | 94<br>(–30.1%) |
| [SAFEnet](https://safenet.or.id/) | 812 | 783<br>(–3.5%) | ***778<br>(–4.3%)*** | n/a | 783<br>(–3.6%) | n/a | 785<br>(–3.3%) | 791<br>(–2.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.8%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 30<br>(–10.7%) | n/a | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–13.3%) | ***18<br>(–14.7%)*** | 18<br>(–11%) | 18<br>(–14.5%) | n/a | 18<br>(–13.5%) | 18<br>(–11.4%) |
| [SFLC.in](https://sflc.in/) | 213 | 208<br>(–2.4%) | ***205<br>(–3.4%)*** | 210<br>(–1.2%) | 207<br>(–2.7%) | n/a | 209<br>(–1.7%) | 210<br>(–1.1%) |
| [SitePoint](https://www.sitepoint.com/) | 226 | 221<br>(–1.9%) | ***219<br>(–2.9%)*** | 224<br>(–0.7%) | 221<br>(–1.8%) | n/a | 223<br>(–1%) | 224<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 272 | 271<br>(–0.4%) | ***270<br>(–0.6%)*** | 272<br>(–0.1%) | 271<br>(–0.4%) | n/a | 271<br>(–0.4%) | 272<br>(0%) |
| [SMEX](https://smex.org/) | 175 | 171<br>(–2.2%) | ***165<br>(–5.5%)*** | 172<br>(–1.6%) | 165<br>(–5.4%) | n/a | 171<br>(–2.1%) | 172<br>(–1.5%) |
| [Startup-Verband](https://startupverband.de/) | 58 | 41<br>(–28.6%) | ***40<br>(–30.5%)*** | 42<br>(–27.2%) | 41<br>(–29.5%) | n/a | 41<br>(–28.1%) | 42<br>(–27.3%) |
| [TAZ](https://taz.de/) | 420 | 390<br>(–7.2%) | ***367<br>(–12.8%)*** | n/a | 383<br>(–8.9%) | n/a | 390<br>(–7.2%) | 392<br>(–6.7%) |
| [TEDIC](https://www.tedic.org/) | 98 | 88<br>(–10.5%) | ***86<br>(–12.2%)*** | 89<br>(–9.5%) | 88<br>(–10.6%) | n/a | 88<br>(–10.2%) | 88<br>(–10.1%) |
| [TetraLogical](https://tetralogical.com/) | 93 | 86<br>(–7.7%) | ***85<br>(–8%)*** | 87<br>(–5.9%) | 87<br>(–6.4%) | n/a | 87<br>(–6.2%) | 87<br>(–6%) |
| [The Daily Star](https://www.thedailystar.net/) | 272 | 219<br>(–19.6%) | ***217<br>(–20.4%)*** | 224<br>(–17.9%) | 220<br>(–19.4%) | n/a | 220<br>(–19.2%) | 221<br>(–18.7%) |
| [The Kyiv Independent](https://kyivindependent.com/) | 400 | 390<br>(–2.5%) | ***385<br>(–3.9%)*** | n/a | 388<br>(–3.1%) | n/a | 392<br>(–2.1%) | 396<br>(–1%) |
| [The Left](https://left.eu/) | 128 | 113<br>(–11.9%) | ***109<br>(–14.5%)*** | 117<br>(–8.3%) | 111<br>(–13%) | n/a | 113<br>(–11.5%) | 117<br>(–8.4%) |
| [The Register](https://www.theregister.com/) | 1110 | 885<br>(–20.3%) | ***834<br>(–24.9%)*** | n/a | 853<br>(–23.1%) | n/a | 889<br>(–20%) | 890<br>(–19.9%) |
| [The Spinoff](https://thespinoff.co.nz/) | 483 | 466<br>(–3.5%) | ***444<br>(–8.1%)*** | n/a | 448<br>(–7.4%) | n/a | 474<br>(–2%) | 477<br>(–1.2%) |
| [Threema](https://threema.com/en) | 700 | 470<br>(–32.8%) | ***365<br>(–47.8%)*** | n/a | 471<br>(–32.8%) | n/a | 494<br>(–29.5%) | 371<br>(–47%) |
| [Toss Tech](https://toss.tech/) | 298 | 295<br>(–0.7%) | ***295<br>(–0.9%)*** | 296<br>(–0.5%) | 295<br>(–0.8%) | n/a | 295<br>(–0.7%) | 296<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 173<br>(–11.3%) | ***172<br>(–11.5%)*** | 179<br>(–8.2%) | 176<br>(–9.9%) | n/a | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 59 | 56<br>(–4.9%) | ***56<br>(–5.4%)*** | 57<br>(–3.3%) | 56<br>(–5%) | n/a | 56<br>(–4.8%) | 57<br>(–3.3%) |
| [United Nations](https://www.un.org/en/) | 162 | 139<br>(–14.1%) | ***134<br>(–17.1%)*** | 141<br>(–12.9%) | 135<br>(–16.8%) | n/a | 139<br>(–14.3%) | 140<br>(–13.1%) |
| [Vivaldi](https://vivaldi.com/) | 79 | 69<br>(–12.5%) | ***68<br>(–13.1%)*** | 70<br>(–10.7%) | 69<br>(–12%) | n/a | 69<br>(–12%) | 70<br>(–10.7%) |
| [W3C](https://www.w3.org/) | 48 | 39<br>(–19.8%) | ***39<br>(–20.1%)*** | 40<br>(–18.4%) | 39<br>(–19.7%) | n/a | 39<br>(–19.7%) | 40<br>(–18.3%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 260 | 244<br>(–5.9%) | ***240<br>(–7.4%)*** | 248<br>(–4.5%) | 241<br>(–7.2%) | n/a | 244<br>(–5.9%) | 248<br>(–4.5%) |
| [WordPress Blog](https://wordpress.com/blog/) | 225 | 205<br>(–8.9%) | ***203<br>(–9.7%)*** | 209<br>(–7.2%) | 205<br>(–8.9%) | n/a | 206<br>(–8.3%) | 209<br>(–7.1%) |
| [Yle](https://yle.fi/) | 555 | 550<br>(–1%) | ***524<br>(–5.7%)*** | n/a | 528<br>(–4.8%) | n/a | 550<br>(–0.9%) | 550<br>(–1%) |
| [報導者](https://www.twreporter.org/) | 344 | 341<br>(–1%) | ***332<br>(–3.6%)*** | n/a | 338<br>(–1.8%) | n/a | 342<br>(–0.6%) | 342<br>(–0.5%) |
| [博客园](https://www.cnblogs.com/) | 80 | 55<br>(–31.4%) | ***54<br>(–32.2%)*** | 58<br>(–28%) | 57<br>(–29.2%) | n/a | 57<br>(–28.6%) | 58<br>(–28%) |
| [稀土掘金](https://juejin.cn/) | 77 | 74<br>(–4.7%) | ***72<br>(–6.9%)*** | 75<br>(–3.3%) | 74<br>(–4%) | n/a | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 124/124 | 124/124 | 86/124 | 124/124 | n/a | 124/124 | 124/124 |
| **Average processing time** |  | 22 ms | 16 ms | 194 ms<br>(estimate) | 31 ms | n/a | ***4.9 ms*** | 103 ms |
| **Median processing time** |  | 11 ms | 7.9 ms | 201 ms<br>(estimate) | 16 ms | n/a | ***2.0 ms*** | 33 ms |
| **Average result (KB)** | 334 | 307<br>(–8%) | ***299<br>(–10.4%)*** | 325<br>(–2.8%) | 304<br>(–9%) | n/a | 308<br>(–7.6%) | 311<br>(–6.8%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier](https://github.com/j9t/html-minifier) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 81<br>(–23.2%) | ***78<br>(–25.8%)*** | 84<br>(–19.6%) | 79<br>(–24.9%) | 82<br>(–21.7%) | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 57<br>(–10.9%) | 41<br>(–35.2%) | 58<br>(–9.9%) | ***39<br>(–38.7%)*** | 57<br>(–10.3%) | 57<br>(–11.4%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.9%) | 108<br>(–20.9%) | 113<br>(–16.9%) | ***107<br>(–21.1%)*** | 112<br>(–17.6%) | 112<br>(–17.6%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 50<br>(–20.1%) | ***49<br>(–21.3%)*** | 51<br>(–19.1%) | 49<br>(–21%) | 50<br>(–20.1%) | 50<br>(–20%) | 50<br>(–19.5%) |
| [AfricTivistes](https://www.africtivistes.org/) | 457 | 404<br>(–11.5%) | 393<br>(–13.9%) | n/a | ***388<br>(–14.9%)*** | 407<br>(–10.8%) | 408<br>(–10.7%) | 449<br>(–1.6%) |
| [Al-Haq](https://www.alhaq.org/) | 90 | 49<br>(–45.2%) | 42<br>(–53.7%) | 49<br>(–45.6%) | ***40<br>(–55.5%)*** | 47<br>(–47.1%) | 51<br>(–43.1%) | 64<br>(–29%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 196 | 157<br>(–19.6%) | 122<br>(–37.5%) | 158<br>(–19.1%) | ***118<br>(–39.5%)*** | n/a | 160<br>(–18.2%) | 173<br>(–11.4%) |
| [BBC](https://www.bbc.co.uk/) | 708 | 663<br>(–6.5%) | ***651<br>(–8.1%)*** | n/a | 653<br>(–7.8%) | 675<br>(–4.7%) | 664<br>(–6.3%) | 703<br>(–0.8%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 102 | 84<br>(–17.3%) | ***67<br>(–34.7%)*** | 87<br>(–15.1%) | 68<br>(–33.2%) | 83<br>(–18.4%) | 84<br>(–17.3%) | 87<br>(–14.7%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.6%) | ***32<br>(–10.4%)*** | 35<br>(–2.6%) | 32<br>(–9.6%) | 34<br>(–6.1%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 278 | 261<br>(–6.2%) | ***207<br>(–25.6%)*** | 275<br>(–1.3%) | 210<br>(–24.6%) | 261<br>(–6.2%) | 264<br>(–5.3%) | 275<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 70 | 53<br>(–24.9%) | ***52<br>(–25.7%)*** | 55<br>(–21.8%) | 52<br>(–25.7%) | 53<br>(–24.8%) | 53<br>(–24.3%) | 55<br>(–21.8%) |
| [CERN](https://home.cern/) | 292 | 262<br>(–10.3%) | 224<br>(–23.2%) | 269<br>(–7.7%) | ***213<br>(–27%)*** | 268<br>(–8.1%) | 263<br>(–9.8%) | 279<br>(–4.3%) |
| [Citizen Lab](https://citizenlab.ca/) | 133 | 123<br>(–7.9%) | 89<br>(–33%) | 125<br>(–6.4%) | ***89<br>(–33.3%)*** | 122<br>(–8.3%) | 123<br>(–7.4%) | 127<br>(–4.7%) |
| [Codeberg](https://codeberg.org/) | 34 | 30<br>(–9.7%) | 28<br>(–18.1%) | 31<br>(–9.3%) | ***28<br>(–18.4%)*** | 30<br>(–10.3%) | 30<br>(–9.9%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 123 | 103<br>(–16%) | ***81<br>(–34.3%)*** | 108<br>(–11.8%) | 83<br>(–32.6%) | 105<br>(–14.6%) | 105<br>(–14.6%) | 115<br>(–6%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 107<br>(–5.2%) | ***84<br>(–25.2%)*** | 112<br>(–1.1%) | 85<br>(–24.9%) | 106<br>(–6.3%) | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 111 | 94<br>(–15.9%) | 66<br>(–40.6%) | 98<br>(–11.7%) | ***66<br>(–40.7%)*** | 93<br>(–16.6%) | 95<br>(–14.4%) | 101<br>(–9.7%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 216<br>(–22.4%) | ***178<br>(–36.2%)*** | 266<br>(–4.6%) | 178<br>(–36%) | 216<br>(–22.3%) | 218<br>(–21.8%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–30.3%) | 15<br>(–32.4%) | 16<br>(–28.9%) | ***15<br>(–32.6%)*** | 16<br>(–30.5%) | 16<br>(–30.4%) | 16<br>(–28.2%) |
| [DIN](https://www.din.de/) | 256 | 175<br>(–31.7%) | ***134<br>(–47.7%)*** | n/a | 135<br>(–47.3%) | n/a | 176<br>(–31.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 547 | 512<br>(–6.5%) | 505<br>(–7.8%) | n/a | ***500<br>(–8.7%)*** | 505<br>(–7.8%) | 506<br>(–7.5%) | 544<br>(–0.5%) |
| [dxsrc](https://dxsrc.org/) | 233 | 233<br>(0%) | ***226<br>(–3.1%)*** | 233<br>(–0.2%) | 226<br>(–3%) | 233<br>(0%) | 233<br>(0%) | 252<br>(+7.9%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7636 | 7168<br>(–6.1%) | ***7024<br>(–8%)*** | n/a | 7083<br>(–7.3%) | 7144<br>(–6.5%) | 7175<br>(–6%) | 7196<br>(–5.8%) |
| [EDRi](https://edri.org/) | 85 | 75<br>(–11.8%) | ***56<br>(–34.7%)*** | 77<br>(–9.3%) | 56<br>(–33.8%) | 75<br>(–11.3%) | 76<br>(–10.6%) | 80<br>(–6.5%) |
| [EFF](https://www.eff.org/) | 55 | 48<br>(–13.2%) | ***44<br>(–19.4%)*** | 49<br>(–10.1%) | 45<br>(–18.2%) | 47<br>(–13.3%) | 48<br>(–12.2%) | 49<br>(–9.8%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***188<br>(–21.6%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | 200<br>(–16.6%) | 188<br>(–21.4%) | 205<br>(–14.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***31<br>(–38%)*** | 33<br>(–33%) | 31<br>(–37.8%) | 33<br>(–33.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 445 | 433<br>(–2.8%) | 113<br>(–74.6%) | n/a | ***112<br>(–74.9%)*** | 436<br>(–2%) | 432<br>(–2.9%) | 443<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 282<br>(–5.4%) | 245<br>(–17.7%) | n/a | ***241<br>(–19.1%)*** | 280<br>(–6%) | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 195<br>(–7.7%) | ***142<br>(–32.6%)*** | 200<br>(–5.3%) | 144<br>(–32%) | 198<br>(–6.5%) | 196<br>(–7.3%) | 205<br>(–2.7%) |
| [Fairphone](https://www.fairphone.com/) | 155 | 92<br>(–40.8%) | ***82<br>(–47.2%)*** | n/a | 86<br>(–44.5%) | 91<br>(–41%) | 93<br>(–39.7%) | 97<br>(–37.2%) |
| [FAZ](https://www.faz.net/aktuell/) | 1395 | 1266<br>(–9.3%) | 1158<br>(–16.9%) | n/a | ***1148<br>(–17.7%)*** | 1335<br>(–4.3%) | 1330<br>(–4.6%) | 1335<br>(–4.2%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 944 | 799<br>(–15.4%) | ***682<br>(–27.7%)*** | n/a | 723<br>(–23.5%) | 784<br>(–17%) | 818<br>(–13.3%) | 819<br>(–13.3%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 121 | 111<br>(–8.4%) | 69<br>(–42.9%) | 114<br>(–5.9%) | ***68<br>(–44%)*** | 113<br>(–7.2%) | 113<br>(–7.2%) | 117<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 130<br>(–30.7%) | ***56<br>(–69.9%)*** | 132<br>(–29.5%) | 56<br>(–69.8%) | 131<br>(–29.9%) | 130<br>(–30.5%) | 138<br>(–26.4%) |
| [Front-End Social](https://front-end.social/) | 54 | 49<br>(–8.6%) | ***46<br>(–14%)*** | 52<br>(–4%) | 47<br>(–13.6%) | 51<br>(–5.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***10<br>(–31%)*** | 12<br>(–18.2%) | 10<br>(–30.4%) | 12<br>(–19.2%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Ground News](https://ground.news/) | 2660 | 2483<br>(–6.6%) | ***2400<br>(–9.8%)*** | n/a | 2424<br>(–8.9%) | 2485<br>(–6.6%) | 2484<br>(–6.6%) | 2646<br>(–0.5%) |
| [heise online](https://www.heise.de/) | 860 | 839<br>(–2.5%) | ***815<br>(–5.2%)*** | n/a | 822<br>(–4.4%) | 824<br>(–4.2%) | 841<br>(–2.2%) | 845<br>(–1.8%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 55<br>(–11.8%) | 34<br>(–46%) | 57<br>(–7.9%) | ***33<br>(–46.6%)*** | 56<br>(–9%) | 55<br>(–11%) | 60<br>(–3.1%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 396 | 363<br>(–8.4%) | ***312<br>(–21.3%)*** | n/a | 313<br>(–20.9%) | 365<br>(–8%) | 367<br>(–7.4%) | 375<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.5%) | 121<br>(–1.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 152 | 151<br>(–0.3%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.3%) | 151<br>(–0.3%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 278 | 232<br>(–16.5%) | ***220<br>(–20.7%)*** | 239<br>(–14.1%) | 222<br>(–20.3%) | 233<br>(–16%) | 236<br>(–15.2%) | 239<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 33<br>(–59.7%) | ***31<br>(–62.6%)*** | 35<br>(–58.2%) | 32<br>(–61.9%) | 33<br>(–60.1%) | 34<br>(–59.7%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 45 | 34<br>(–24.5%) | 33<br>(–26.4%) | 34<br>(–23.4%) | ***33<br>(–27%)*** | 34<br>(–25.2%) | 34<br>(–24.4%) | 35<br>(–22.4%) |
| [iLaw](https://www.ilaw.or.th/) | 410 | 350<br>(–14.7%) | ***288<br>(–29.9%)*** | n/a | 299<br>(–27.1%) | 351<br>(–14.4%) | 357<br>(–12.9%) | 387<br>(–5.6%) |
| [InfoQ China](https://www.infoq.cn/) | 676 | 648<br>(–4.1%) | 583<br>(–13.7%) | n/a | ***489<br>(–27.7%)*** | 649<br>(–4%) | 648<br>(–4.1%) | 654<br>(–3.3%) |
| [inkyfada](https://inkyfada.com/fr/) | 336 | 290<br>(–13.8%) | ***217<br>(–35.3%)*** | n/a | 230<br>(–31.6%) | 287<br>(–14.5%) | 294<br>(–12.4%) | 300<br>(–10.6%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 136<br>(–10.3%) | ***119<br>(–21.5%)*** | 143<br>(–6%) | 120<br>(–21%) | 136<br>(–10%) | 138<br>(–8.9%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 139 | 80<br>(–42.5%) | ***76<br>(–45.4%)*** | 83<br>(–40.2%) | 78<br>(–44%) | 82<br>(–41.4%) | 80<br>(–42.3%) | 83<br>(–40.5%) |
| [ITWeb](https://www.itweb.co.za/) | 326 | 296<br>(–9.3%) | 173<br>(–47%) | n/a | ***172<br>(–47.4%)*** | 301<br>(–7.6%) | 300<br>(–8%) | 306<br>(–6.3%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 342<br>(–17.3%) | 176<br>(–57.4%) | n/a | ***169<br>(–59.1%)*** | 346<br>(–16.3%) | 342<br>(–17.3%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 51 | 50<br>(–1.5%) | 44<br>(–14.4%) | 51<br>(–0.8%) | ***44<br>(–14.4%)*** | 51<br>(–0.6%) | 50<br>(–1.6%) | 51<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 214<br>(–11.7%) | 210<br>(–13.3%) | 233<br>(–4%) | ***209<br>(–13.8%)*** | 217<br>(–10.6%) | 227<br>(–6.2%) | 227<br>(–6.5%) |
| [Kloop](https://kloop.kg/) | 196 | 158<br>(–19.5%) | ***126<br>(–35.5%)*** | 178<br>(–9.3%) | 128<br>(–34.5%) | 168<br>(–14%) | 160<br>(–18.4%) | 183<br>(–6.3%) |
| [KoRo](https://www.koro.com/) | 765 | 712<br>(–6.9%) | ***698<br>(–8.7%)*** | n/a | 704<br>(–8%) | 725<br>(–5.2%) | 722<br>(–5.6%) | 737<br>(–3.6%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 53 | 42<br>(–20.7%) | 26<br>(–50.5%) | 44<br>(–17.3%) | ***25<br>(–53.6%)*** | 44<br>(–17.5%) | 43<br>(–19%) | 45<br>(–14.3%) |
| [Ladybird](https://ladybird.org/) | 34 | 32<br>(–6.1%) | 31<br>(–8.3%) | 32<br>(–5.6%) | ***31<br>(–8.4%)*** | 32<br>(–6.4%) | 32<br>(–5.9%) | 32<br>(–4.9%) |
| [Leanpub](https://leanpub.com/) | 518 | 489<br>(–5.6%) | 471<br>(–9.1%) | n/a | ***469<br>(–9.5%)*** | 492<br>(–5%) | 490<br>(–5.4%) | 510<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 169 | 163<br>(–3.5%) | ***133<br>(–20.9%)*** | 165<br>(–2.4%) | 134<br>(–20.6%) | 163<br>(–3.3%) | 163<br>(–3.5%) | 166<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 9<br>(–45.8%) | ***9<br>(–47.8%)*** | 10<br>(–42.7%) | 9<br>(–47.1%) | 9<br>(–45.8%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mada Masr](https://www.madamasr.com/en/) | 175 | 144<br>(–17.8%) | ***65<br>(–62.8%)*** | 147<br>(–15.9%) | 119<br>(–32%) | 143<br>(–18.1%) | 146<br>(–16.7%) | 152<br>(–13%) |
| [Mastodon](https://mastodon.social/explore) | 46 | 42<br>(–8.1%) | ***39<br>(–14.4%)*** | 44<br>(–3.8%) | 40<br>(–14%) | 43<br>(–5.7%) | 43<br>(–7%) | 44<br>(–3.7%) |
| [MDN](https://developer.mozilla.org/en-US/) | 119 | 70<br>(–41.3%) | 68<br>(–42.9%) | 73<br>(–38.7%) | ***62<br>(–47.9%)*** | 70<br>(–41.1%) | 70<br>(–41.1%) | 73<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 350 | 302<br>(–13.6%) | ***220<br>(–37.1%)*** | n/a | 222<br>(–36.6%) | 280<br>(–19.9%) | 307<br>(–12%) | 308<br>(–12%) |
| [Media Foundation for West Africa](https://mfwa.org/) | 332 | 293<br>(–11.5%) | ***238<br>(–28.1%)*** | n/a | 253<br>(–23.6%) | 289<br>(–12.7%) | 295<br>(–10.9%) | 307<br>(–7.3%) |
| [Mistral AI](https://mistral.ai/) | 314 | 298<br>(–5.2%) | ***180<br>(–42.8%)*** | n/a | 187<br>(–40.5%) | 291<br>(–7.5%) | 303<br>(–3.6%) | 313<br>(–0.3%) |
| [Mondoweiss](https://mondoweiss.net/) | 131 | 115<br>(–12.5%) | 96<br>(–26.6%) | 117<br>(–10.6%) | ***96<br>(–26.7%)*** | 116<br>(–11.8%) | 115<br>(–12%) | 119<br>(–8.9%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***32<br>(–31.9%)*** | 36<br>(–22.1%) | 32<br>(–31.8%) | 35<br>(–25.2%) | 35<br>(–25.5%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 334 | 298<br>(–10.9%) | 250<br>(–25%) | n/a | ***249<br>(–25.4%)*** | 304<br>(–9%) | 298<br>(–10.6%) | 311<br>(–6.8%) |
| [Nextcloud](https://nextcloud.com/) | 236 | 195<br>(–17.6%) | ***173<br>(–26.8%)*** | 202<br>(–14.6%) | 174<br>(–26.6%) | 195<br>(–17.3%) | 200<br>(–15.4%) | 213<br>(–9.8%) |
| [Nikkei](https://www.nikkei.com/) | 698 | 648<br>(–7.1%) | ***615<br>(–11.9%)*** | n/a | 630<br>(–9.7%) | 673<br>(–3.5%) | 651<br>(–6.7%) | 688<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 47 | 35<br>(–25%) | ***34<br>(–27.3%)*** | 36<br>(–23.3%) | 34<br>(–26.9%) | 35<br>(–24.9%) | 35<br>(–25%) | 36<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 113<br>(–8.3%) | 68<br>(–44.9%) | 116<br>(–5.8%) | ***64<br>(–47.9%)*** | 114<br>(–7.3%) | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 311<br>(–4%) | 115<br>(–64.6%) | n/a | ***107<br>(–67.2%)*** | 315<br>(–3.1%) | 312<br>(–3.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 97<br>(–11.2%) | 60<br>(–45.5%) | 102<br>(–7.2%) | ***58<br>(–46.7%)*** | 100<br>(–8.7%) | 98<br>(–10.9%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 192 | 137<br>(–28.7%) | ***89<br>(–53.7%)*** | 143<br>(–25.7%) | 91<br>(–52.9%) | 141<br>(–26.7%) | 138<br>(–28.2%) | 143<br>(–25.8%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.9%) | ***142<br>(–19.8%)*** | 149<br>(–15.9%) | 145<br>(–18.1%) | 148<br>(–16.6%) | 147<br>(–16.9%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 146 | 135<br>(–7.9%) | 85<br>(–41.5%) | 139<br>(–4.7%) | ***81<br>(–44.8%)*** | 138<br>(–5.5%) | 135<br>(–7.7%) | 143<br>(–2.2%) |
| [Página 12](https://www.pagina12.com.ar/) | 877 | 840<br>(–4.3%) | 791<br>(–9.8%) | n/a | ***788<br>(–10.1%)*** | 823<br>(–6.1%) | 825<br>(–5.9%) | 872<br>(–0.6%) |
| [Paradigm Initiative](https://paradigmhq.org/) | 425 | 348<br>(–18.2%) | ***305<br>(–28.2%)*** | n/a | 307<br>(–27.7%) | 351<br>(–17.4%) | 351<br>(–17.4%) | 400<br>(–5.9%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 168 | 140<br>(–16.4%) | ***132<br>(–21.5%)*** | 148<br>(–11.8%) | 132<br>(–21.2%) | 140<br>(–16.7%) | 144<br>(–14.5%) | 164<br>(–2.5%) |
| [Piccalilli](https://piccalil.li/) | 78 | 74<br>(–5.7%) | 64<br>(–18.2%) | 76<br>(–3%) | ***62<br>(–21.3%)*** | 73<br>(–6.6%) | 75<br>(–4.9%) | 77<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–28%) | ***46<br>(–44.8%)*** | 62<br>(–25%) | 48<br>(–42%) | 58<br>(–30.6%) | 62<br>(–25.6%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 425 | 380<br>(–10.5%) | 373<br>(–12.3%) | n/a | ***370<br>(–13%)*** | 384<br>(–9.6%) | 388<br>(–8.7%) | 416<br>(–2%) |
| [Qiita](https://qiita.com/) | 369 | 351<br>(–4.9%) | ***312<br>(–15.4%)*** | n/a | 316<br>(–14.3%) | 355<br>(–3.8%) | 353<br>(–4.4%) | 362<br>(–1.9%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***21<br>(–42.5%)*** | 32<br>(–13.5%) | 22<br>(–41.7%) | 28<br>(–24.1%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 154 | 135<br>(–11.8%) | ***129<br>(–15.8%)*** | 152<br>(–1.2%) | 130<br>(–15.2%) | 135<br>(–12.3%) | 136<br>(–11.5%) | 152<br>(–1.2%) |
| [R3D](https://r3d.mx/) | 309 | 297<br>(–4%) | 107<br>(–65.3%) | n/a | ***106<br>(–65.6%)*** | 301<br>(–2.6%) | 297<br>(–4%) | 305<br>(–1.3%) |
| [Rappler](https://www.rappler.com/) | 788 | 727<br>(–7.7%) | ***452<br>(–42.6%)*** | n/a | 456<br>(–42.1%) | 724<br>(–8.1%) | 736<br>(–6.6%) | 760<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 64<br>(–9.1%) | 44<br>(–37.6%) | 66<br>(–6.6%) | ***43<br>(–39.2%)*** | 66<br>(–7.4%) | 65<br>(–8.1%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 183 | 164<br>(–10.4%) | 141<br>(–22.9%) | 171<br>(–6.6%) | ***140<br>(–23.6%)*** | 165<br>(–9.8%) | 166<br>(–9.3%) | 174<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 134 | 91<br>(–32.2%) | ***83<br>(–37.9%)*** | 93<br>(–30.7%) | 83<br>(–37.9%) | 91<br>(–32.2%) | 91<br>(–32.2%) | 94<br>(–30.1%) |
| [SAFEnet](https://safenet.or.id/) | 812 | 658<br>(–19%) | 636<br>(–21.7%) | n/a | ***635<br>(–21.8%)*** | 651<br>(–19.8%) | 656<br>(–19.2%) | 791<br>(–2.6%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.9%) | ***30<br>(–11.1%)*** | 32<br>(–7.3%) | 30<br>(–11%) | 31<br>(–10.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–16.5%)*** | 18<br>(–11.8%) | 17<br>(–16.3%) | 18<br>(–14.1%) | 18<br>(–14.4%) | 18<br>(–11.4%) |
| [SFLC.in](https://sflc.in/) | 213 | 202<br>(–4.8%) | ***173<br>(–18.5%)*** | 210<br>(–1.4%) | 175<br>(–17.7%) | 206<br>(–3.3%) | 204<br>(–4.2%) | 210<br>(–1.1%) |
| [SitePoint](https://www.sitepoint.com/) | 226 | 213<br>(–5.4%) | ***201<br>(–11%)*** | 216<br>(–4.1%) | 203<br>(–10.1%) | 212<br>(–6.2%) | 215<br>(–4.6%) | 224<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 272 | 270<br>(–0.9%) | 259<br>(–5%) | 272<br>(–0.1%) | ***258<br>(–5.3%)*** | 271<br>(–0.2%) | 270<br>(–0.9%) | 272<br>(0%) |
| [SMEX](https://smex.org/) | 175 | 165<br>(–5.7%) | 130<br>(–25.8%) | 170<br>(–2.7%) | ***127<br>(–27.6%)*** | 166<br>(–5.1%) | 166<br>(–5.2%) | 172<br>(–1.5%) |
| [Startup-Verband](https://startupverband.de/) | 58 | 41<br>(–28.6%) | ***39<br>(–32.6%)*** | 42<br>(–27.3%) | 39<br>(–31.6%) | 41<br>(–28.7%) | 41<br>(–28.3%) | 42<br>(–27.3%) |
| [TAZ](https://taz.de/) | 420 | 355<br>(–15.5%) | ***322<br>(–23.3%)*** | n/a | 347<br>(–17.4%) | 364<br>(–13.3%) | 368<br>(–12.4%) | 392<br>(–6.7%) |
| [TEDIC](https://www.tedic.org/) | 98 | 81<br>(–17.8%) | ***49<br>(–50%)*** | 83<br>(–16.1%) | 50<br>(–49.5%) | 82<br>(–16.9%) | 83<br>(–16.1%) | 88<br>(–10.1%) |
| [TetraLogical](https://tetralogical.com/) | 93 | 85<br>(–7.8%) | ***82<br>(–11.4%)*** | 87<br>(–6%) | 83<br>(–10.2%) | 84<br>(–9.1%) | 87<br>(–6.3%) | 87<br>(–6%) |
| [The Daily Star](https://www.thedailystar.net/) | 272 | 215<br>(–21.1%) | ***206<br>(–24.4%)*** | 221<br>(–18.9%) | 208<br>(–23.7%) | 215<br>(–21%) | 219<br>(–19.8%) | 221<br>(–18.7%) |
| [The Kyiv Independent](https://kyivindependent.com/) | 400 | 372<br>(–7%) | ***346<br>(–13.6%)*** | n/a | 349<br>(–12.7%) | 374<br>(–6.6%) | 372<br>(–7%) | 396<br>(–1%) |
| [The Left](https://left.eu/) | 128 | 106<br>(–16.7%) | ***92<br>(–28.2%)*** | 114<br>(–11.1%) | 93<br>(–27%) | 108<br>(–15.5%) | 108<br>(–15.1%) | 117<br>(–8.4%) |
| [The Register](https://www.theregister.com/) | 1110 | 839<br>(–24.4%) | ***763<br>(–31.3%)*** | n/a | 784<br>(–29.4%) | 843<br>(–24.1%) | 852<br>(–23.3%) | 890<br>(–19.9%) |
| [The Spinoff](https://thespinoff.co.nz/) | 483 | 465<br>(–3.7%) | ***421<br>(–12.8%)*** | n/a | 437<br>(–9.5%) | n/a | 473<br>(–2%) | 477<br>(–1.2%) |
| [Threema](https://threema.com/en) | 700 | 470<br>(–32.9%) | ***350<br>(–50%)*** | n/a | 352<br>(–49.7%) | 421<br>(–39.9%) | 387<br>(–44.7%) | 371<br>(–47%) |
| [Toss Tech](https://toss.tech/) | 298 | 288<br>(–3.2%) | 285<br>(–4.4%) | 289<br>(–3%) | ***284<br>(–4.4%)*** | 287<br>(–3.6%) | 286<br>(–3.8%) | 296<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 148<br>(–24%) | 132<br>(–32.4%) | 158<br>(–18.7%) | ***131<br>(–32.7%)*** | 150<br>(–22.9%) | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 59 | 56<br>(–4.9%) | 55<br>(–6%) | 57<br>(–3.3%) | ***55<br>(–6.3%)*** | 56<br>(–4.8%) | 56<br>(–4.8%) | 57<br>(–3.3%) |
| [United Nations](https://www.un.org/en/) | 162 | 135<br>(–16.6%) | 90<br>(–44.4%) | 130<br>(–19.5%) | ***89<br>(–44.7%)*** | 131<br>(–19.1%) | 135<br>(–16.7%) | 140<br>(–13.1%) |
| [Vivaldi](https://vivaldi.com/) | 79 | 67<br>(–15.2%) | ***60<br>(–23.1%)*** | 69<br>(–12.3%) | 61<br>(–22.2%) | n/a | 68<br>(–13.8%) | 70<br>(–10.7%) |
| [W3C](https://www.w3.org/) | 48 | 37<br>(–23.7%) | ***35<br>(–28.7%)*** | 38<br>(–22.4%) | 35<br>(–28.3%) | 37<br>(–23.7%) | 37<br>(–23.6%) | 40<br>(–18.3%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 260 | 244<br>(–6.1%) | ***226<br>(–12.9%)*** | 247<br>(–4.7%) | 226<br>(–12.8%) | 244<br>(–5.8%) | 244<br>(–6.1%) | 248<br>(–4.5%) |
| [WordPress Blog](https://wordpress.com/blog/) | 225 | 183<br>(–18.6%) | ***153<br>(–31.9%)*** | 195<br>(–13.4%) | 154<br>(–31.6%) | 185<br>(–17.6%) | 193<br>(–14.2%) | 209<br>(–7.1%) |
| [Yle](https://yle.fi/) | 555 | 502<br>(–9.6%) | 447<br>(–19.4%) | n/a | ***444<br>(–20.1%)*** | 507<br>(–8.7%) | 500<br>(–10%) | 550<br>(–1%) |
| [報導者](https://www.twreporter.org/) | 344 | 317<br>(–7.8%) | ***284<br>(–17.4%)*** | n/a | 289<br>(–15.9%) | 324<br>(–5.8%) | 319<br>(–7.4%) | 342<br>(–0.5%) |
| [博客园](https://www.cnblogs.com/) | 80 | 55<br>(–31.9%) | ***51<br>(–36.7%)*** | 57<br>(–28.5%) | 53<br>(–34.2%) | 55<br>(–31.5%) | 57<br>(–28.8%) | 58<br>(–28%) |
| [稀土掘金](https://juejin.cn/) | 77 | 65<br>(–15.5%) | ***59<br>(–24.3%)*** | 73<br>(–5.9%) | 59<br>(–23.4%) | 65<br>(–16%) | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 124/124 | 124/124 | 84/124 | 124/124 | 120/124 | 124/124 | 124/124 |
| **Average processing time** |  | 27 ms | 37 ms | 840 ms<br>(estimate) | 137 ms | ***6.3 ms*** | 7.4 ms | 106 ms |
| **Median processing time** |  | 14 ms | 19 ms | 849 ms<br>(estimate) | 87 ms | ***4.0 ms*** | 4.3 ms | 34 ms |
| **Average result (KB)** | 334 | 297<br>(–10.9%) | ***262<br>(–21.5%)*** | 324<br>(–3.1%) | 264<br>(–21%) | 299<br>(–10.4%) | 299<br>(–10.4%) | 311<br>(–6.8%) |

Benchmarks last updated: Nov 11, 2026 (Node.js 26.13.0, macOS 15.7.9, Apple M4)
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