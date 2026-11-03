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
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 86<br>(–18.4%) | ***84<br>(–20.1%)*** | 89<br>(–15.1%) | 86<br>(–18%) | n/a | 86<br>(–18.5%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 59<br>(–7.4%) | 59<br>(–7.6%) | 59<br>(–7.1%) | ***59<br>(–8.2%)*** | n/a | 59<br>(–8%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.8%) | ***110<br>(–19%)*** | 113<br>(–16.7%) | 112<br>(–17.8%) | n/a | 112<br>(–17.4%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 50<br>(–20.1%) | ***49<br>(–20.9%)*** | 51<br>(–18.9%) | 50<br>(–20.7%) | n/a | 50<br>(–19.9%) | 50<br>(–19.6%) |
| [AfricTivistes](https://www.africtivistes.org/) | 457 | 407<br>(–10.9%) | ***395<br>(–13.5%)*** | n/a | 396<br>(–13.2%) | n/a | 410<br>(–10.2%) | 449<br>(–1.6%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 189 | 162<br>(–14%) | ***159<br>(–15.9%)*** | 167<br>(–11.2%) | 159<br>(–15.8%) | n/a | 163<br>(–13.5%) | 166<br>(–11.7%) |
| [BBC](https://www.bbc.co.uk/) | 697 | 688<br>(–1.3%) | ***686<br>(–1.5%)*** | n/a | 687<br>(–1.5%) | n/a | 689<br>(–1.1%) | 692<br>(–0.7%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 102 | 86<br>(–15.7%) | ***83<br>(–18.9%)*** | 88<br>(–13.6%) | 85<br>(–16.7%) | n/a | 86<br>(–15.3%) | 87<br>(–14.7%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.5%) | ***33<br>(–9%)*** | 35<br>(–2.3%) | 33<br>(–8.6%) | n/a | 33<br>(–8.5%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 272 | 256<br>(–6.1%) | ***207<br>(–23.9%)*** | 269<br>(–1.2%) | 211<br>(–22.5%) | n/a | 258<br>(–5.2%) | 269<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 71 | 53<br>(–24.8%) | ***53<br>(–24.8%)*** | 55<br>(–21.7%) | 53<br>(–24.8%) | n/a | 54<br>(–24.3%) | 55<br>(–21.9%) |
| [CERN](https://home.cern/) | 292 | 278<br>(–4.8%) | 275<br>(–5.7%) | 280<br>(–4.2%) | ***272<br>(–6.6%)*** | n/a | 278<br>(–4.7%) | 279<br>(–4.3%) |
| [Codeberg](https://codeberg.org/) | 34 | 31<br>(–9%) | ***31<br>(–9.6%)*** | 31<br>(–8.2%) | 31<br>(–8.7%) | n/a | 31<br>(–9.1%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 123 | 113<br>(–7.8%) | ***110<br>(–10.8%)*** | 116<br>(–6%) | 112<br>(–8.5%) | n/a | 113<br>(–7.7%) | 115<br>(–6%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 112<br>(–1.3%) | ***111<br>(–1.9%)*** | 112<br>(–0.7%) | 112<br>(–1%) | n/a | 112<br>(–0.8%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 112 | 97<br>(–13.1%) | ***96<br>(–14.4%)*** | 101<br>(–9.8%) | 98<br>(–12%) | n/a | 98<br>(–12%) | 101<br>(–9.4%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 221<br>(–20.4%) | ***218<br>(–21.5%)*** | 270<br>(–3%) | 220<br>(–20.9%) | n/a | 223<br>(–20%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–29.2%) | 16<br>(–30.8%) | 17<br>(–27.7%) | ***16<br>(–30.9%)*** | n/a | 16<br>(–29.5%) | 17<br>(–28.3%) |
| [DIN](https://www.din.de/) | 256 | 181<br>(–29.2%) | ***177<br>(–31%)*** | 185<br>(–27.7%) | 179<br>(–30.2%) | n/a | 182<br>(–29.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 553 | 548<br>(–1%) | ***546<br>(–1.3%)*** | n/a | 547<br>(–1%) | n/a | 548<br>(–0.9%) | 550<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7467 | 6997<br>(–6.3%) | ***6856<br>(–8.2%)*** | n/a | 6911<br>(–7.4%) | n/a | 7004<br>(–6.2%) | 7029<br>(–5.9%) |
| [EDRi](https://edri.org/) | 85 | 78<br>(–8.3%) | ***78<br>(–8.8%)*** | 80<br>(–6.5%) | 79<br>(–7.5%) | n/a | 79<br>(–7.2%) | 80<br>(–6.5%) |
| [EFF](https://www.eff.org/) | 53 | 47<br>(–10.7%) | ***46<br>(–13.7%)*** | 49<br>(–8.1%) | 46<br>(–12.6%) | n/a | 47<br>(–11.6%) | 48<br>(–10.1%) |
| [ELLE](https://www.elle.com/) | 729 | 720<br>(–1.2%) | ***720<br>(–1.3%)*** | n/a | 721<br>(–1.1%) | n/a | 721<br>(–1.1%) | 724<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***188<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | n/a | 188<br>(–21.4%) | 205<br>(–14.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***33<br>(–34.2%)*** | 33<br>(–32.9%) | 33<br>(–33.9%) | n/a | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 444 | 437<br>(–1.6%) | ***435<br>(–1.8%)*** | n/a | 436<br>(–1.7%) | n/a | 436<br>(–1.7%) | 441<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 286<br>(–4%) | 286<br>(–4.1%) | n/a | ***285<br>(–4.2%)*** | n/a | 286<br>(–3.9%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 204<br>(–3.6%) | ***192<br>(–8.9%)*** | 206<br>(–2.6%) | 196<br>(–7.1%) | n/a | 204<br>(–3.4%) | 205<br>(–2.7%) |
| [FAZ](https://www.faz.net/aktuell/) | 1386 | 1324<br>(–4.4%) | ***1304<br>(–5.9%)*** | n/a | 1323<br>(–4.6%) | n/a | 1327<br>(–4.2%) | 1327<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 952 | 818<br>(–14.1%) | ***775<br>(–18.6%)*** | n/a | 829<br>(–12.9%) | n/a | 832<br>(–12.6%) | 830<br>(–12.8%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 114<br>(–4.6%) | ***113<br>(–5.4%)*** | 116<br>(–3.4%) | 114<br>(–5%) | n/a | 115<br>(–4.3%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 136<br>(–27.1%) | ***136<br>(–27.3%)*** | 138<br>(–26.3%) | 136<br>(–27.2%) | n/a | 136<br>(–27%) | 138<br>(–26.4%) |
| [Front-End Social](https://front-end.social/) | 54 | 50<br>(–7.6%) | ***50<br>(–7.6%)*** | 52<br>(–3.7%) | 50<br>(–7.2%) | n/a | 50<br>(–7.2%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 232 | 232<br>(0%) | 232<br>(0%) | ***231<br>(–0.2%)*** | 232<br>(0%) | n/a | 232<br>(0%) | 250<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***11<br>(–26.9%)*** | 12<br>(–17%) | 11<br>(–26.3%) | n/a | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1926 | 1893<br>(–1.7%) | ***1879<br>(–2.4%)*** | n/a | 1892<br>(–1.8%) | n/a | 1894<br>(–1.7%) | 1912<br>(–0.7%) |
| [Ground News](https://ground.news/) | 1738 | 1706<br>(–1.8%) | ***1658<br>(–4.6%)*** | n/a | 1690<br>(–2.7%) | n/a | 1714<br>(–1.3%) | 1723<br>(–0.8%) |
| [heise online](https://www.heise.de/) | 892 | 871<br>(–2.3%) | ***850<br>(–4.7%)*** | n/a | 858<br>(–3.8%) | n/a | 875<br>(–1.9%) | 876<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 60<br>(–3.8%) | ***59<br>(–4.2%)*** | 60<br>(–2.8%) | 60<br>(–4.1%) | n/a | 60<br>(–3.7%) | 60<br>(–3.1%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 393 | 366<br>(–7%) | ***364<br>(–7.5%)*** | n/a | 367<br>(–6.7%) | n/a | 368<br>(–6.4%) | 373<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3%)*** | 121<br>(–1.2%) | 120<br>(–2.2%) | n/a | 119<br>(–2.7%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 151<br>(–0.2%) | 151<br>(–0.2%) | ***151<br>(–0.2%)*** | 151<br>(–0.2%) | n/a | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 278 | 235<br>(–15.4%) | ***231<br>(–16.7%)*** | 240<br>(–13.7%) | 233<br>(–16.1%) | n/a | 236<br>(–14.8%) | 239<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 34<br>(–59.5%) | ***32<br>(–61.9%)*** | 35<br>(–57.3%) | 32<br>(–61.1%) | n/a | 34<br>(–59.5%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 45 | 35<br>(–22.6%) | 34<br>(–23.5%) | 35<br>(–21.7%) | ***34<br>(–23.7%)*** | n/a | 35<br>(–22.6%) | 35<br>(–22.3%) |
| [InfoQ China](https://www.infoq.cn/) | 668 | 641<br>(–4%) | ***637<br>(–4.6%)*** | n/a | 639<br>(–4.4%) | n/a | 641<br>(–3.9%) | 645<br>(–3.4%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 139<br>(–8.4%) | ***138<br>(–8.9%)*** | 144<br>(–5%) | 140<br>(–7.4%) | n/a | 141<br>(–7.1%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 137 | 79<br>(–42.3%) | ***77<br>(–43.8%)*** | 82<br>(–40%) | 79<br>(–42%) | n/a | 79<br>(–42.2%) | 81<br>(–40.7%) |
| [ITWeb](https://www.itweb.co.za/) | 325 | 299<br>(–7.9%) | ***281<br>(–13.6%)*** | n/a | 289<br>(–11.3%) | n/a | 304<br>(–6.5%) | 304<br>(–6.5%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 361<br>(–12.9%) | ***356<br>(–14%)*** | n/a | 358<br>(–13.7%) | n/a | 361<br>(–12.8%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 51 | 51<br>(–1.5%) | ***50<br>(–2%)*** | 51<br>(–0.8%) | 51<br>(–1.3%) | n/a | 50<br>(–1.6%) | 51<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 236<br>(–2.5%) | 235<br>(–3.1%) | 237<br>(–2.1%) | 236<br>(–2.8%) | n/a | 236<br>(–2.5%) | ***227<br>(–6.5%)*** |
| [KoRo](https://www.koro.com/) | 785 | 735<br>(–6.4%) | ***724<br>(–7.8%)*** | n/a | 733<br>(–6.7%) | n/a | 745<br>(–5.2%) | 757<br>(–3.6%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 53 | 45<br>(–15.1%) | 42<br>(–20.8%) | 46<br>(–12.1%) | ***42<br>(–21%)*** | n/a | 46<br>(–13.4%) | 45<br>(–14.3%) |
| [Ladybird](https://ladybird.org/) | 34 | 32<br>(–5.7%) | ***32<br>(–6.2%)*** | 32<br>(–4.9%) | 32<br>(–5.8%) | n/a | 32<br>(–5.5%) | 33<br>(–4.9%) |
| [Leanpub](https://leanpub.com/) | 523 | 512<br>(–2.1%) | 501<br>(–4.2%) | n/a | ***499<br>(–4.6%)*** | n/a | 513<br>(–1.8%) | 514<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 169 | 166<br>(–1.7%) | ***156<br>(–7.5%)*** | 167<br>(–1.2%) | 157<br>(–6.7%) | n/a | 166<br>(–1.7%) | 166<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 12<br>(–30.6%) | ***12<br>(–31.4%)*** | 12<br>(–27%) | 12<br>(–30.2%) | n/a | 12<br>(–30.1%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 46<br>(–7.4%) | ***46<br>(–7.4%)*** | 48<br>(–3.6%) | 47<br>(–7.1%) | n/a | 47<br>(–7%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 116 | 68<br>(–41.3%) | ***67<br>(–42.1%)*** | 71<br>(–38.8%) | 69<br>(–40.4%) | n/a | 68<br>(–41.2%) | 71<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 350 | 304<br>(–13.3%) | ***298<br>(–15%)*** | n/a | 303<br>(–13.5%) | n/a | 308<br>(–12%) | 309<br>(–11.9%) |
| [Mistral AI](https://mistral.ai/) | 311 | 299<br>(–4%) | ***245<br>(–21.3%)*** | n/a | 259<br>(–16.6%) | n/a | 302<br>(–2.9%) | 310<br>(–0.3%) |
| [Mondoweiss](https://mondoweiss.net/) | 126 | 113<br>(–10%) | ***110<br>(–12.5%)*** | 114<br>(–9.3%) | 111<br>(–12.2%) | n/a | 113<br>(–10%) | 114<br>(–9.2%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***35<br>(–26%)*** | 36<br>(–22.1%) | 35<br>(–25.8%) | n/a | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 333 | 308<br>(–7.4%) | ***306<br>(–7.9%)*** | n/a | 307<br>(–7.8%) | n/a | 309<br>(–7.2%) | 310<br>(–6.8%) |
| [Nikkei](https://www.nikkei.com/) | 663 | 619<br>(–6.7%) | ***601<br>(–9.4%)*** | n/a | 616<br>(–7.1%) | n/a | 619<br>(–6.7%) | 654<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 46 | 35<br>(–25%) | ***35<br>(–25.7%)*** | 36<br>(–23.3%) | 35<br>(–25.4%) | n/a | 35<br>(–25%) | 35<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 119<br>(–3.8%) | 118<br>(–4.4%) | 120<br>(–2.8%) | ***117<br>(–5.3%)*** | n/a | 119<br>(–3.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 318<br>(–1.9%) | ***316<br>(–2.6%)*** | n/a | 316<br>(–2.5%) | n/a | 318<br>(–1.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 103<br>(–5.9%) | ***97<br>(–11.5%)*** | 104<br>(–5.1%) | 97<br>(–11.2%) | n/a | 103<br>(–5.6%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 187 | 137<br>(–26.7%) | ***135<br>(–27.7%)*** | 139<br>(–25.9%) | 137<br>(–26.9%) | n/a | 138<br>(–26.5%) | 138<br>(–26.5%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.8%) | ***144<br>(–18.5%)*** | 149<br>(–15.8%) | 148<br>(–16.5%) | n/a | 147<br>(–16.8%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 147 | 142<br>(–3%) | ***141<br>(–3.7%)*** | 144<br>(–2.1%) | 142<br>(–3.4%) | n/a | 142<br>(–3%) | 144<br>(–2.2%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 152 | 145<br>(–4.7%) | ***141<br>(–7.1%)*** | 148<br>(–2.5%) | 142<br>(–6.7%) | n/a | 145<br>(–4.8%) | 148<br>(–2.3%) |
| [Piccalilli](https://piccalil.li/) | 78 | 75<br>(–4.6%) | ***74<br>(–4.8%)*** | 76<br>(–2.3%) | 75<br>(–4.2%) | n/a | 75<br>(–4%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–27.7%) | ***59<br>(–29.6%)*** | 63<br>(–24.7%) | 61<br>(–26.5%) | n/a | 62<br>(–25.3%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 420 | 386<br>(–8.1%) | 382<br>(–9.1%) | n/a | ***379<br>(–9.8%)*** | n/a | 388<br>(–7.6%) | 411<br>(–2%) |
| [Qiita](https://qiita.com/) | 373 | 363<br>(–2.9%) | ***362<br>(–3%)*** | n/a | 363<br>(–2.7%) | n/a | 363<br>(–2.7%) | 366<br>(–1.9%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***28<br>(–25.3%)*** | 32<br>(–13.5%) | 31<br>(–16.3%) | n/a | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 154 | 151<br>(–1.7%) | ***151<br>(–1.7%)*** | 152<br>(–1.1%) | 152<br>(–1.2%) | n/a | 152<br>(–1.2%) | 152<br>(–1.2%) |
| [Rappler](https://www.rappler.com/) | 790 | 746<br>(–5.6%) | ***739<br>(–6.5%)*** | n/a | 753<br>(–4.7%) | n/a | 754<br>(–4.6%) | 762<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 69<br>(–2.3%) | ***67<br>(–6.1%)*** | 69<br>(–2%) | 67<br>(–5.3%) | n/a | 69<br>(–2.2%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 183 | 170<br>(–7.4%) | ***168<br>(–8.2%)*** | 174<br>(–4.9%) | 170<br>(–7.4%) | n/a | 171<br>(–6.7%) | 174<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 134 | 91<br>(–32.1%) | ***84<br>(–37.3%)*** | 93<br>(–30.6%) | 84<br>(–37.3%) | n/a | 91<br>(–32.1%) | 93<br>(–30.1%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.8%) | ***30<br>(–10.9%)*** | 32<br>(–7.3%) | 30<br>(–10.7%) | n/a | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–13.3%) | ***18<br>(–14.7%)*** | 18<br>(–11%) | 18<br>(–14.5%) | n/a | 18<br>(–13.5%) | 18<br>(–11.4%) |
| [SFLC.in](https://sflc.in/) | 168 | 163<br>(–3%) | ***160<br>(–4.3%)*** | 165<br>(–1.5%) | 162<br>(–3.4%) | n/a | 164<br>(–2.2%) | 165<br>(–1.4%) |
| [SitePoint](https://www.sitepoint.com/) | 225 | 220<br>(–1.9%) | ***218<br>(–3%)*** | 223<br>(–0.7%) | 220<br>(–1.9%) | n/a | 222<br>(–1%) | 223<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 276 | 275<br>(–0.4%) | ***274<br>(–0.6%)*** | 276<br>(–0.1%) | 275<br>(–0.4%) | n/a | 275<br>(–0.4%) | 276<br>(0%) |
| [Startpage](https://www.startpage.com/) | 21 | 21<br>(–3%) | ***21<br>(–3.2%)*** | 21<br>(–2.1%) | 21<br>(–2.5%) | n/a | 21<br>(–2.3%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 58 | 41<br>(–28.4%) | ***40<br>(–30.4%)*** | 42<br>(–27%) | 41<br>(–29.4%) | n/a | 42<br>(–28%) | 42<br>(–27.2%) |
| [TAZ](https://taz.de/) | 384 | 356<br>(–7.3%) | ***334<br>(–13.2%)*** | n/a | 350<br>(–9%) | n/a | 356<br>(–7.3%) | 358<br>(–6.8%) |
| [TEDIC](https://www.tedic.org/) | 94 | 84<br>(–11%) | ***82<br>(–12.8%)*** | 85<br>(–9.9%) | 84<br>(–11%) | n/a | 84<br>(–10.7%) | 84<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 93 | 86<br>(–7.7%) | ***85<br>(–8%)*** | 87<br>(–5.9%) | 87<br>(–6.4%) | n/a | 87<br>(–6.2%) | 87<br>(–6%) |
| [The Left](https://left.eu/) | 126 | 111<br>(–12.1%) | ***108<br>(–14.8%)*** | 116<br>(–8.4%) | 110<br>(–13.2%) | n/a | 112<br>(–11.7%) | 116<br>(–8.5%) |
| [The Register](https://www.theregister.com/) | 1127 | 883<br>(–21.6%) | ***831<br>(–26.2%)*** | n/a | 851<br>(–24.5%) | n/a | 886<br>(–21.3%) | 887<br>(–21.3%) |
| [Toss Tech](https://toss.tech/) | 281 | 279<br>(–0.7%) | ***279<br>(–0.9%)*** | 280<br>(–0.6%) | 279<br>(–0.9%) | n/a | 279<br>(–0.7%) | 279<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 173<br>(–11.3%) | ***172<br>(–11.5%)*** | 179<br>(–8.2%) | 176<br>(–9.9%) | n/a | 176<br>(–9.7%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 59 | 56<br>(–4.9%) | ***56<br>(–5.5%)*** | 57<br>(–3.3%) | 56<br>(–5%) | n/a | 56<br>(–4.8%) | 57<br>(–3.3%) |
| [United Nations](https://www.un.org/en/) | 162 | 139<br>(–14.1%) | ***134<br>(–17.1%)*** | 141<br>(–12.9%) | 134<br>(–16.8%) | n/a | 138<br>(–14.3%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 92 | 82<br>(–10.6%) | ***82<br>(–11.1%)*** | 84<br>(–9.1%) | 83<br>(–10.2%) | n/a | 83<br>(–10.2%) | 84<br>(–9.1%) |
| [W3C](https://www.w3.org/) | 49 | 39<br>(–19.7%) | ***39<br>(–20%)*** | 40<br>(–18.3%) | 39<br>(–19.6%) | n/a | 39<br>(–19.6%) | 40<br>(–18.2%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 253 | 238<br>(–6%) | ***234<br>(–7.5%)*** | 242<br>(–4.6%) | 235<br>(–7.4%) | n/a | 238<br>(–6%) | 242<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 224 | 204<br>(–8.9%) | ***202<br>(–9.7%)*** | 207<br>(–7.2%) | 204<br>(–8.9%) | n/a | 205<br>(–8.3%) | 208<br>(–7.1%) |
| [博客园](https://www.cnblogs.com/) | 80 | 54<br>(–31.6%) | ***54<br>(–32.5%)*** | 57<br>(–28.2%) | 56<br>(–29.4%) | n/a | 57<br>(–28.8%) | 57<br>(–28.2%) |
| [稀土掘金](https://juejin.cn/) | 77 | 74<br>(–4.7%) | ***72<br>(–6.9%)*** | 75<br>(–3.3%) | 74<br>(–4%) | n/a | 74<br>(–3.9%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 107/107 | 107/107 | 79/107 | 107/107 | n/a | 107/107 | 107/107 |
| **Average processing time** |  | 23 ms | 16 ms | 163 ms<br>(estimate) | 33 ms | n/a | ***5.3 ms*** | 108 ms |
| **Median processing time** |  | 10 ms | 6.3 ms | 129 ms<br>(estimate) | 14 ms | n/a | ***1.9 ms*** | 31 ms |
| **Average result (KB)** | 331 | 306<br>(–7.6%) | ***299<br>(–9.6%)*** | 322<br>(–2.7%) | 303<br>(–8.5%) | n/a | 307<br>(–7.3%) | 311<br>(–6.1%) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc) | [HTML Minifier](https://github.com/j9t/html-minifier) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/maltsev/htmlnano) | [minify](https://github.com/tdewolff/minify) | [minify-html](https://github.com/wilsonzlin/minify-html) | [minimize](https://github.com/Swaagie/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 105 | 81<br>(–23.2%) | ***78<br>(–26%)*** | 84<br>(–19.6%) | 79<br>(–24.9%) | 82<br>(–21.7%) | 81<br>(–23.2%) | 90<br>(–14.6%) |
| [A List Apart](https://alistapart.com/) | 64 | 57<br>(–10.9%) | 45<br>(–29.4%) | 58<br>(–9.9%) | ***39<br>(–38.7%)*** | 57<br>(–10.3%) | 57<br>(–11.4%) | 59<br>(–7.1%) |
| [accessibility.nl](https://www.accessibility.nl/) | 136 | 112<br>(–17.9%) | 108<br>(–20.9%) | 113<br>(–16.9%) | ***107<br>(–21.1%)*** | 112<br>(–17.6%) | 112<br>(–17.6%) | 113<br>(–16.8%) |
| [African Declaration on Internet Rights](https://africaninternetrights.net/) | 62 | 50<br>(–20.1%) | ***49<br>(–21.3%)*** | 51<br>(–19.1%) | 49<br>(–21%) | 50<br>(–20.1%) | 50<br>(–20%) | 50<br>(–19.6%) |
| [AfricTivistes](https://www.africtivistes.org/) | 457 | 404<br>(–11.5%) | 393<br>(–13.9%) | n/a | ***388<br>(–14.9%)*** | 407<br>(–10.8%) | 408<br>(–10.7%) | 449<br>(–1.6%) |
| [Amnesty International Australia](https://www.amnesty.org.au/) | 189 | 152<br>(–19.6%) | 120<br>(–36.2%) | 152<br>(–19.2%) | ***115<br>(–39.1%)*** | n/a | 154<br>(–18.2%) | 166<br>(–11.7%) |
| [BBC](https://www.bbc.co.uk/) | 697 | 651<br>(–6.6%) | ***639<br>(–8.3%)*** | n/a | 641<br>(–7.9%) | 664<br>(–4.7%) | 652<br>(–6.5%) | 692<br>(–0.7%) |
| [Bits of Freedom](https://www.bitsoffreedom.nl/) | 102 | 84<br>(–17.3%) | ***67<br>(–34.5%)*** | 87<br>(–15.1%) | 68<br>(–33.2%) | 83<br>(–18.4%) | 84<br>(–17.3%) | 87<br>(–14.7%) |
| [BITV 2.0](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html) | 36 | 33<br>(–8.6%) | ***32<br>(–10.4%)*** | 35<br>(–2.6%) | 32<br>(–9.6%) | 34<br>(–6.1%) | 33<br>(–9.4%) | 35<br>(–2.4%) |
| [Canaltech](https://canaltech.com.br/) | 272 | 255<br>(–6.3%) | ***203<br>(–25.6%)*** | 269<br>(–1.3%) | 205<br>(–24.6%) | 255<br>(–6.2%) | 258<br>(–5.3%) | 269<br>(–1.2%) |
| [CCC](https://www.ccc.de/) | 71 | 53<br>(–24.9%) | ***53<br>(–25.7%)*** | 55<br>(–21.9%) | 53<br>(–25.7%) | 53<br>(–24.8%) | 54<br>(–24.4%) | 55<br>(–21.9%) |
| [CERN](https://home.cern/) | 292 | 262<br>(–10.3%) | 224<br>(–23.3%) | 269<br>(–7.7%) | ***213<br>(–27%)*** | 268<br>(–8.1%) | 263<br>(–9.8%) | 279<br>(–4.3%) |
| [Codeberg](https://codeberg.org/) | 34 | 30<br>(–9.7%) | 28<br>(–18.1%) | 31<br>(–9.2%) | ***28<br>(–18.4%)*** | 30<br>(–10.3%) | 30<br>(–9.8%) | 31<br>(–7.9%) |
| [Coding Rights](https://codingrights.org/) | 123 | 103<br>(–16%) | ***81<br>(–34.4%)*** | 108<br>(–11.8%) | 83<br>(–32.6%) | 105<br>(–14.6%) | 105<br>(–14.6%) | 115<br>(–6%) |
| [DeepSeek](https://www.deepseek.com/) | 113 | 107<br>(–5.2%) | ***84<br>(–25.2%)*** | 112<br>(–1.1%) | 85<br>(–24.9%) | 106<br>(–6.3%) | 108<br>(–4.4%) | 112<br>(–0.7%) |
| [Derechos Digitales](https://www.derechosdigitales.org/) | 112 | 94<br>(–15.6%) | ***66<br>(–40.6%)*** | 99<br>(–11.4%) | 67<br>(–40.4%) | 93<br>(–16.4%) | 96<br>(–14.2%) | 101<br>(–9.4%) |
| [Digital Rights Foundation](https://digitalrightsfoundation.pk/) | 278 | 216<br>(–22.4%) | 190<br>(–31.6%) | 266<br>(–4.5%) | ***178<br>(–35.9%)*** | 216<br>(–22.3%) | 218<br>(–21.8%) | 270<br>(–3.1%) |
| [Digital Rights Watch](https://digitalrightswatch.org.au/) | 23 | 16<br>(–30.4%) | 16<br>(–32.4%) | 16<br>(–29%) | ***16<br>(–32.7%)*** | 16<br>(–30.6%) | 16<br>(–30.5%) | 17<br>(–28.3%) |
| [DIN](https://www.din.de/) | 256 | 175<br>(–31.7%) | ***134<br>(–47.7%)*** | n/a | 135<br>(–47.3%) | n/a | 176<br>(–31.1%) | 184<br>(–28%) |
| [DLR](https://www.dlr.de/) | 553 | 517<br>(–6.5%) | 510<br>(–7.8%) | n/a | ***505<br>(–8.7%)*** | 510<br>(–7.8%) | 511<br>(–7.5%) | 550<br>(–0.5%) |
| [ECMAScript](https://tc39.es/ecma262/) | 7467 | 6997<br>(–6.3%) | ***6855<br>(–8.2%)*** | n/a | 6910<br>(–7.5%) | 6972<br>(–6.6%) | 7004<br>(–6.2%) | 7029<br>(–5.9%) |
| [EDRi](https://edri.org/) | 85 | 75<br>(–11.8%) | ***56<br>(–34.7%)*** | 77<br>(–9.3%) | 56<br>(–33.8%) | 75<br>(–11.3%) | 76<br>(–10.6%) | 80<br>(–6.5%) |
| [EFF](https://www.eff.org/) | 53 | 46<br>(–13.5%) | ***42<br>(–19.9%)*** | 47<br>(–10.5%) | 43<br>(–18.6%) | 46<br>(–13.7%) | 46<br>(–12.6%) | 48<br>(–10.1%) |
| [ELLE](https://www.elle.com/) | 729 | 709<br>(–2.7%) | ***698<br>(–4.2%)*** | n/a | 703<br>(–3.6%) | 721<br>(–1.1%) | 710<br>(–2.5%) | 724<br>(–0.7%) |
| [eMAG](https://emag.governoeletronico.gov.br/) | 240 | 192<br>(–20%) | ***187<br>(–21.8%)*** | 205<br>(–14.5%) | 200<br>(–16.6%) | 200<br>(–16.6%) | 188<br>(–21.4%) | 205<br>(–14.6%) |
| [European Alternatives](https://european-alternatives.eu/) | 50 | 33<br>(–33.9%) | ***31<br>(–38%)*** | 33<br>(–33%) | 31<br>(–37.8%) | 33<br>(–33.9%) | 33<br>(–33.5%) | 33<br>(–33%) |
| [European Green Party](https://europeangreens.eu/) | 444 | 431<br>(–2.7%) | 113<br>(–74.6%) | n/a | ***112<br>(–74.9%)*** | 435<br>(–2%) | 431<br>(–2.9%) | 441<br>(–0.5%) |
| [European Left Alliance](https://leftalliance.eu/) | 298 | 282<br>(–5.4%) | 245<br>(–17.8%) | n/a | ***241<br>(–19.1%)*** | 280<br>(–6%) | 282<br>(–5.2%) | 289<br>(–3%) |
| [European Network Against Racism](https://www.enar-eu.org/) | 211 | 195<br>(–7.7%) | ***142<br>(–32.6%)*** | 200<br>(–5.3%) | 144<br>(–32%) | 198<br>(–6.5%) | 196<br>(–7.3%) | 205<br>(–2.7%) |
| [FAZ](https://www.faz.net/aktuell/) | 1386 | 1256<br>(–9.3%) | 1152<br>(–16.9%) | n/a | ***1141<br>(–17.7%)*** | 1326<br>(–4.3%) | 1321<br>(–4.7%) | 1327<br>(–4.3%) |
| [Folha de S.Paulo](https://www.folha.uol.com.br/) | 952 | 809<br>(–15%) | ***696<br>(–26.9%)*** | n/a | 735<br>(–22.8%) | 796<br>(–16.4%) | 830<br>(–12.8%) | 830<br>(–12.8%) |
| [Foundation for Media Alternatives](https://fma.ph/) | 120 | 110<br>(–8.4%) | 72<br>(–39.5%) | 113<br>(–6%) | ***68<br>(–43.4%)*** | 111<br>(–7.2%) | 111<br>(–7.2%) | 115<br>(–3.7%) |
| [French Tech](https://lafrenchtech.gouv.fr/) | 187 | 130<br>(–30.7%) | ***56<br>(–69.9%)*** | 132<br>(–29.5%) | 56<br>(–69.8%) | 131<br>(–29.9%) | 130<br>(–30.5%) | 138<br>(–26.4%) |
| [Front-End Social](https://front-end.social/) | 54 | 49<br>(–8.6%) | ***46<br>(–14%)*** | 52<br>(–4%) | 47<br>(–13.6%) | 51<br>(–5.8%) | 50<br>(–7.6%) | 52<br>(–3.8%) |
| [Frontend Dogma](https://frontenddogma.com/) | 232 | 232<br>(0%) | ***225<br>(–3.1%)*** | 231<br>(–0.2%) | 225<br>(–3.1%) | 232<br>(0%) | 232<br>(0%) | 250<br>(+8%) |
| [Gaza Maps](https://gazamaps.com/) | 15 | 12<br>(–19.3%) | ***10<br>(–31%)*** | 12<br>(–18.2%) | 10<br>(–30.4%) | 12<br>(–19.2%) | 12<br>(–19.1%) | 12<br>(–18.4%) |
| [Genocide Watch](https://www.genocidewatch.com/) | 1926 | 1862<br>(–3.3%) | ***1445<br>(–25%)*** | n/a | 1518<br>(–21.2%) | 1868<br>(–3%) | 1873<br>(–2.8%) | 1912<br>(–0.7%) |
| [Ground News](https://ground.news/) | 1738 | 1627<br>(–6.3%) | ***1544<br>(–11.2%)*** | n/a | 1573<br>(–9.5%) | 1634<br>(–6%) | 1633<br>(–6%) | 1723<br>(–0.8%) |
| [heise online](https://www.heise.de/) | 892 | 870<br>(–2.4%) | ***846<br>(–5.2%)*** | n/a | 852<br>(–4.4%) | 855<br>(–4.1%) | 873<br>(–2.1%) | 876<br>(–1.7%) |
| [Hiperderecho](https://hiperderecho.org/) | 62 | 55<br>(–11.8%) | 42<br>(–32.1%) | 57<br>(–7.9%) | ***33<br>(–46.7%)*** | 56<br>(–9%) | 55<br>(–11%) | 60<br>(–3.1%) |
| [Hong Kong Free Press](https://hongkongfp.com/) | 393 | 360<br>(–8.5%) | ***309<br>(–21.4%)*** | n/a | 310<br>(–21.1%) | 361<br>(–8.1%) | 364<br>(–7.5%) | 373<br>(–5.3%) |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119<br>(–2.9%) | ***119<br>(–3.4%)*** | 121<br>(–1.3%) | 120<br>(–2.5%) | 121<br>(–1.6%) | 119<br>(–2.8%) | 123<br>(+0.5%) |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 151 | 151<br>(–0.3%) | ***151<br>(–0.4%)*** | 151<br>(–0.3%) | 151<br>(–0.4%) | 151<br>(–0.3%) | 151<br>(–0.2%) | 157<br>(+3.8%) |
| [Human Rights Watch](https://www.hrw.org/) | 278 | 232<br>(–16.5%) | ***220<br>(–20.7%)*** | 239<br>(–14.1%) | 221<br>(–20.3%) | 233<br>(–16%) | 235<br>(–15.2%) | 239<br>(–14%) |
| [IETF](https://www.ietf.org/) | 83 | 33<br>(–59.7%) | ***31<br>(–62.6%)*** | 35<br>(–58.2%) | 32<br>(–61.9%) | 33<br>(–60.1%) | 34<br>(–59.7%) | 34<br>(–58.5%) |
| [Igalia](https://www.igalia.com/) | 45 | 34<br>(–24.5%) | 33<br>(–26.1%) | 34<br>(–23.3%) | ***33<br>(–26.9%)*** | 34<br>(–25.1%) | 34<br>(–24.3%) | 35<br>(–22.3%) |
| [InfoQ China](https://www.infoq.cn/) | 668 | 639<br>(–4.3%) | 575<br>(–13.8%) | n/a | ***480<br>(–28%)*** | 640<br>(–4.1%) | 640<br>(–4.2%) | 645<br>(–3.4%) |
| [Intervozes](https://intervozes.org.br/) | 152 | 136<br>(–10.3%) | ***119<br>(–21.6%)*** | 143<br>(–6%) | 120<br>(–21%) | 136<br>(–10%) | 138<br>(–8.9%) | 144<br>(–4.9%) |
| [iTnews](https://www.itnews.com.au/) | 137 | 79<br>(–42.5%) | ***75<br>(–45.3%)*** | 82<br>(–40.2%) | 77<br>(–43.5%) | 80<br>(–41.4%) | 79<br>(–42.3%) | 81<br>(–40.7%) |
| [ITWeb](https://www.itweb.co.za/) | 325 | 294<br>(–9.5%) | 172<br>(–47.2%) | n/a | ***170<br>(–47.6%)*** | 300<br>(–7.7%) | 299<br>(–8.1%) | 304<br>(–6.5%) |
| [Jinbonet](https://act.jinbo.net/) | 414 | 343<br>(–17.3%) | 180<br>(–56.6%) | n/a | ***170<br>(–59%)*** | 347<br>(–16.2%) | 343<br>(–17.3%) | 402<br>(–2.9%) |
| [KDE](https://kde.org/) | 51 | 51<br>(–1.5%) | 44<br>(–14.4%) | 51<br>(–0.8%) | ***44<br>(–14.4%)*** | 51<br>(–0.6%) | 50<br>(–1.6%) | 51<br>(0%) |
| [Kenya Human Rights Commission](https://www.khrc.or.ke/) | 242 | 214<br>(–11.7%) | 210<br>(–13.4%) | 233<br>(–4%) | ***209<br>(–13.8%)*** | 217<br>(–10.6%) | 227<br>(–6.2%) | 227<br>(–6.5%) |
| [KoRo](https://www.koro.com/) | 785 | 731<br>(–6.9%) | ***719<br>(–8.5%)*** | n/a | 722<br>(–8%) | 745<br>(–5.2%) | 741<br>(–5.7%) | 757<br>(–3.6%) |
| [La Quadrature du Net](https://www.laquadrature.net/) | 53 | 42<br>(–20.8%) | 27<br>(–48.1%) | 44<br>(–17.3%) | ***24<br>(–53.7%)*** | 44<br>(–17.5%) | 43<br>(–19%) | 45<br>(–14.3%) |
| [Ladybird](https://ladybird.org/) | 34 | 32<br>(–6.1%) | 31<br>(–8.2%) | 32<br>(–5.6%) | ***31<br>(–8.3%)*** | 32<br>(–6.3%) | 32<br>(–5.9%) | 33<br>(–4.9%) |
| [Leanpub](https://leanpub.com/) | 523 | 494<br>(–5.5%) | 475<br>(–9%) | n/a | ***473<br>(–9.4%)*** | 497<br>(–4.9%) | 495<br>(–5.3%) | 514<br>(–1.6%) |
| [Legal Resources Centre](https://lrc.org.za/) | 169 | 163<br>(–3.5%) | ***133<br>(–20.9%)*** | 165<br>(–2.4%) | 134<br>(–20.6%) | 163<br>(–3.3%) | 163<br>(–3.5%) | 166<br>(–1.3%) |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 9<br>(–45.8%) | ***9<br>(–47.8%)*** | 10<br>(–42.7%) | 9<br>(–47.1%) | 9<br>(–45.8%) | 10<br>(–40.3%) | 12<br>(–27.5%) |
| [Mastodon](https://mastodon.social/explore) | 50 | 46<br>(–8.3%) | ***43<br>(–14.1%)*** | 48<br>(–3.9%) | 43<br>(–13.8%) | 47<br>(–5.7%) | 46<br>(–7.3%) | 48<br>(–3.8%) |
| [MDN](https://developer.mozilla.org/en-US/) | 116 | 68<br>(–41.4%) | 66<br>(–43.2%) | 71<br>(–38.8%) | ***60<br>(–48.2%)*** | 68<br>(–41.3%) | 68<br>(–41.3%) | 71<br>(–39.1%) |
| [Médecins Sans Frontières](https://www.msf.org/) | 350 | 303<br>(–13.5%) | ***220<br>(–37.1%)*** | n/a | 222<br>(–36.5%) | 281<br>(–19.9%) | 308<br>(–12%) | 309<br>(–11.9%) |
| [Mistral AI](https://mistral.ai/) | 311 | 295<br>(–5.1%) | ***178<br>(–42.9%)*** | n/a | 185<br>(–40.7%) | 288<br>(–7.5%) | 300<br>(–3.5%) | 310<br>(–0.3%) |
| [Mondoweiss](https://mondoweiss.net/) | 126 | 110<br>(–12.5%) | 93<br>(–26%) | 112<br>(–11%) | ***92<br>(–27.3%)*** | 111<br>(–11.8%) | 111<br>(–12%) | 114<br>(–9.2%) |
| [Mozilla](https://www.mozilla.org/) | 47 | 35<br>(–24.3%) | ***32<br>(–32%)*** | 36<br>(–22.1%) | 32<br>(–31.8%) | 35<br>(–25.2%) | 35<br>(–25.6%) | 36<br>(–22.9%) |
| [netzpolitik.org](https://netzpolitik.org/) | 333 | 296<br>(–11%) | 249<br>(–25%) | n/a | ***248<br>(–25.5%)*** | 302<br>(–9.1%) | 297<br>(–10.7%) | 310<br>(–6.8%) |
| [Nikkei](https://www.nikkei.com/) | 663 | 616<br>(–7.1%) | ***583<br>(–12.1%)*** | n/a | 598<br>(–9.8%) | 641<br>(–3.3%) | 619<br>(–6.7%) | 654<br>(–1.4%) |
| [noyb](https://noyb.eu/en) | 46 | 35<br>(–25.1%) | ***34<br>(–27.1%)*** | 36<br>(–23.3%) | 34<br>(–26.7%) | 35<br>(–24.9%) | 35<br>(–25%) | 35<br>(–23.6%) |
| [Omas gegen Rechts](https://www.omas-gegen-rechts.org/) | 123 | 113<br>(–8.3%) | 68<br>(–44.9%) | 116<br>(–5.8%) | ***64<br>(–47.9%)*** | 114<br>(–7.3%) | 114<br>(–7.7%) | 120<br>(–2.9%) |
| [Open Net Korea](https://www.opennetkorea.org/) | 325 | 311<br>(–4%) | 139<br>(–57.1%) | n/a | ***107<br>(–67.2%)*** | 315<br>(–3.1%) | 312<br>(–3.9%) | 319<br>(–1.7%) |
| [Open Rights Group](https://www.openrightsgroup.org/) | 110 | 97<br>(–11.2%) | 60<br>(–45.5%) | 102<br>(–7.2%) | ***58<br>(–46.7%)*** | 100<br>(–8.7%) | 98<br>(–10.9%) | 104<br>(–5.2%) |
| [Opera](https://www.opera.com/) | 187 | 132<br>(–29.4%) | ***85<br>(–54.8%)*** | 138<br>(–26.4%) | 86<br>(–54%) | 136<br>(–27.4%) | 133<br>(–28.9%) | 138<br>(–26.5%) |
| [OSCE](https://www.osce.org/) | 177 | 145<br>(–17.9%) | ***142<br>(–19.8%)*** | 149<br>(–15.9%) | 145<br>(–18.1%) | 148<br>(–16.6%) | 147<br>(–16.9%) | 149<br>(–15.7%) |
| [OZeWAI](https://ozewai.org/) | 147 | 135<br>(–7.9%) | 86<br>(–41.1%) | 140<br>(–4.7%) | ***81<br>(–44.7%)*** | 139<br>(–5.4%) | 135<br>(–7.7%) | 144<br>(–2.2%) |
| [PC Watch](https://pc.watch.impress.co.jp/) | 152 | 127<br>(–16.6%) | ***118<br>(–22.1%)*** | 134<br>(–12%) | 119<br>(–21.8%) | 126<br>(–16.9%) | 130<br>(–14.5%) | 148<br>(–2.3%) |
| [Piccalilli](https://piccalil.li/) | 78 | 74<br>(–5.7%) | 64<br>(–18.2%) | 76<br>(–3%) | ***61<br>(–21.4%)*** | 73<br>(–6.6%) | 74<br>(–4.9%) | 76<br>(–2.4%) |
| [Pollicy](https://pollicy.org/) | 83 | 60<br>(–28%) | ***46<br>(–44.8%)*** | 62<br>(–25%) | 48<br>(–42%) | 58<br>(–30.6%) | 62<br>(–25.6%) | 63<br>(–24.6%) |
| [Proton](https://proton.me/) | 420 | 376<br>(–10.6%) | 368<br>(–12.3%) | n/a | ***365<br>(–13.1%)*** | 379<br>(–9.7%) | 383<br>(–8.7%) | 411<br>(–2%) |
| [Qiita](https://qiita.com/) | 373 | 355<br>(–4.9%) | ***316<br>(–15.3%)*** | n/a | 321<br>(–14.2%) | 359<br>(–3.8%) | 357<br>(–4.4%) | 366<br>(–1.9%) |
| [Qooxdoo](https://qooxdoo.org/) | 37 | 28<br>(–23.4%) | ***21<br>(–42.5%)*** | 32<br>(–13.5%) | 22<br>(–41.7%) | 28<br>(–24.1%) | 29<br>(–21.5%) | 30<br>(–19.5%) |
| [Qwant](https://www.qwant.com/) | 154 | 136<br>(–11.7%) | ***129<br>(–15.8%)*** | 152<br>(–1.2%) | 130<br>(–15.2%) | 135<br>(–12.3%) | 136<br>(–11.5%) | 152<br>(–1.2%) |
| [Rappler](https://www.rappler.com/) | 790 | 729<br>(–7.7%) | ***455<br>(–42.4%)*** | n/a | 459<br>(–41.9%) | 726<br>(–8.1%) | 738<br>(–6.6%) | 762<br>(–3.6%) |
| [REJECT AIPAC](https://rejectaipac.org/) | 71 | 64<br>(–9.1%) | 45<br>(–36.2%) | 66<br>(–6.6%) | ***43<br>(–39.2%)*** | 66<br>(–7.4%) | 65<br>(–8.1%) | 69<br>(–2%) |
| [Research ICT Africa](https://researchictafrica.net/) | 183 | 164<br>(–10.4%) | 142<br>(–22.8%) | 171<br>(–6.6%) | ***140<br>(–23.6%)*** | 165<br>(–9.8%) | 166<br>(–9.3%) | 174<br>(–4.9%) |
| [RIPE NCC](https://www.ripe.net/) | 134 | 91<br>(–32.2%) | ***83<br>(–38%)*** | 93<br>(–30.7%) | 83<br>(–37.9%) | 91<br>(–32.2%) | 91<br>(–32.2%) | 93<br>(–30.1%) |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | 31<br>(–9.9%) | ***30<br>(–11.1%)*** | 32<br>(–7.3%) | 30<br>(–11%) | 31<br>(–10.3%) | 31<br>(–10%) | 31<br>(–7.8%) |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18<br>(–14.2%) | ***17<br>(–16.5%)*** | 18<br>(–11.8%) | 17<br>(–16.3%) | 18<br>(–14.1%) | 18<br>(–14.4%) | 18<br>(–11.4%) |
| [SFLC.in](https://sflc.in/) | 168 | 159<br>(–5.1%) | 131<br>(–22.1%) | 165<br>(–1.8%) | ***130<br>(–22.4%)*** | 162<br>(–3.1%) | 161<br>(–4.2%) | 165<br>(–1.4%) |
| [SitePoint](https://www.sitepoint.com/) | 225 | 212<br>(–5.4%) | ***200<br>(–11.1%)*** | 215<br>(–4.1%) | 202<br>(–10.2%) | 211<br>(–6.2%) | 214<br>(–4.6%) | 223<br>(–0.7%) |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 276 | 274<br>(–0.9%) | 263<br>(–4.9%) | 276<br>(–0.1%) | ***262<br>(–5.2%)*** | 275<br>(–0.2%) | 274<br>(–0.9%) | 276<br>(0%) |
| [Startpage](https://www.startpage.com/) | 21 | 18<br>(–14.3%) | 16<br>(–26.1%) | 19<br>(–13%) | ***16<br>(–26.9%)*** | 19<br>(–13.6%) | 20<br>(–6%) | 21<br>(–2.1%) |
| [Startup-Verband](https://startupverband.de/) | 58 | 41<br>(–28.5%) | ***39<br>(–32.4%)*** | 42<br>(–27.2%) | 40<br>(–31.5%) | 41<br>(–28.6%) | 42<br>(–28.2%) | 42<br>(–27.2%) |
| [TAZ](https://taz.de/) | 384 | 327<br>(–15%) | ***295<br>(–23.2%)*** | n/a | 320<br>(–16.8%) | 335<br>(–12.7%) | 338<br>(–12.2%) | 358<br>(–6.8%) |
| [TEDIC](https://www.tedic.org/) | 94 | 79<br>(–16.6%) | 52<br>(–45%) | 80<br>(–14.9%) | ***48<br>(–49.5%)*** | 79<br>(–15.7%) | 80<br>(–15.5%) | 84<br>(–10.5%) |
| [TetraLogical](https://tetralogical.com/) | 93 | 85<br>(–7.8%) | ***82<br>(–11.4%)*** | 87<br>(–6%) | 83<br>(–10.2%) | 84<br>(–9.1%) | 87<br>(–6.3%) | 87<br>(–6%) |
| [The Left](https://left.eu/) | 126 | 105<br>(–16.8%) | ***91<br>(–28.4%)*** | 112<br>(–11.1%) | 92<br>(–27.1%) | 107<br>(–15.6%) | 107<br>(–15.1%) | 116<br>(–8.5%) |
| [The Register](https://www.theregister.com/) | 1127 | 839<br>(–25.6%) | ***763<br>(–32.3%)*** | n/a | 784<br>(–30.4%) | 843<br>(–25.2%) | 851<br>(–24.5%) | 887<br>(–21.3%) |
| [Toss Tech](https://toss.tech/) | 281 | 272<br>(–3.4%) | ***268<br>(–4.6%)*** | 272<br>(–3.1%) | 268<br>(–4.6%) | 271<br>(–3.7%) | 270<br>(–3.9%) | 279<br>(–0.6%) |
| [TPGi](https://www.tpgi.com/) | 195 | 148<br>(–24%) | 132<br>(–32.5%) | 158<br>(–18.7%) | ***131<br>(–32.7%)*** | 150<br>(–22.9%) | 153<br>(–21.3%) | 179<br>(–8.2%) |
| [Track AIPAC](https://www.trackaipac.com/) | 59 | 56<br>(–4.9%) | 55<br>(–6.1%) | 57<br>(–3.3%) | ***55<br>(–6.3%)*** | 56<br>(–4.8%) | 56<br>(–4.8%) | 57<br>(–3.3%) |
| [United Nations](https://www.un.org/en/) | 162 | 135<br>(–16.6%) | 90<br>(–44.5%) | 130<br>(–19.5%) | ***89<br>(–44.7%)*** | 131<br>(–19.1%) | 134<br>(–16.7%) | 140<br>(–13.2%) |
| [Vivaldi](https://vivaldi.com/) | 92 | 79<br>(–14%) | ***64<br>(–31.1%)*** | 82<br>(–11.4%) | 64<br>(–30.4%) | n/a | 80<br>(–12.7%) | 84<br>(–9.1%) |
| [W3C](https://www.w3.org/) | 49 | 37<br>(–23.5%) | ***35<br>(–28.5%)*** | 38<br>(–22.2%) | 35<br>(–28.1%) | 37<br>(–23.5%) | 37<br>(–23.4%) | 40<br>(–18.2%) |
| [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) | 253 | 238<br>(–6.2%) | ***221<br>(–12.7%)*** | 241<br>(–4.8%) | 221<br>(–12.6%) | 238<br>(–5.9%) | 238<br>(–6.2%) | 242<br>(–4.6%) |
| [WordPress Blog](https://wordpress.com/blog/) | 224 | 182<br>(–18.7%) | ***153<br>(–31.5%)*** | 194<br>(–13.4%) | 154<br>(–31.1%) | 184<br>(–17.6%) | 192<br>(–14.3%) | 208<br>(–7.1%) |
| [博客园](https://www.cnblogs.com/) | 80 | 54<br>(–32.1%) | ***50<br>(–37%)*** | 57<br>(–28.7%) | 52<br>(–34.4%) | 54<br>(–31.8%) | 56<br>(–29%) | 57<br>(–28.2%) |
| [稀土掘金](https://juejin.cn/) | 77 | 65<br>(–15.5%) | ***58<br>(–24.4%)*** | 73<br>(–5.9%) | 59<br>(–23.3%) | 65<br>(–16%) | 66<br>(–14.7%) | 75<br>(–3.5%) |
| **Sites processed (of sites overall)** |  | 107/107 | 107/107 | 78/107 | 107/107 | 104/107 | 107/107 | 107/107 |
| **Average processing time** |  | 28 ms | 38 ms | 868 ms<br>(estimate) | 138 ms | ***6.2 ms*** | 7.9 ms | 111 ms |
| **Median processing time** |  | 12 ms | 17 ms | 773 ms<br>(estimate) | 77 ms | ***3.3 ms*** | 3.7 ms | 32 ms |
| **Average result (KB)** | 331 | 299<br>(–9.8%) | ***264<br>(–20.4%)*** | 321<br>(–3%) | 265<br>(–20.1%) | 302<br>(–9%) | 301<br>(–9%) | 311<br>(–6.1%) |

Benchmarks last updated: Nov 3, 2026 (Node.js 26.13.0, macOS 15.7.9, Apple M4)
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
* Configuration: Each minifier runs with a general configuration for all sites. Where a minifier offers a dedicated option to handle a case correctly (e.g., HTML Minifier’s `inlineCustomElements` for custom elements that are displayed inline), its output is not considered incorrect, even when that option isn’t set here (specifying custom settings for all sites for all minifiers is impractical).
* Calculation:
  - Calculations are done based on bytes, which are used to compare effectiveness.
  - Failed sites are not excluded from the calculation for the average result, but counted as unminified. This avoids test failures advantaging the respective minifier.
  - Processing times cover the minification call only (not reading, writing, or compressing files). Each local minifier runs in its own process and first runs once on all sites (untimed) to warm up. Per site, each then gets three more untimed warm-up runs, followed by five timed runs that the minifiers take in turns, in rotating order, so that system load affects all of them alike; the median of these runs is the site’s time. Sites are only timed when the system is mostly idle, and unsteady timings get re-measured. Minification caches that persist across calls are disabled where possible.
  - Average and median processing times of local minifiers are based on the sites all of them processed. Times within 5% of the fastest also count as fastest, as smaller differences are within measurement noise. htmlcompressor.com’s times are estimates: the difference between its response time and that of a request with the same content but minification off (which still removes comments). Network jitter makes estimates for single sites unreliable, so only averages and medians are shown, only if the average exceeds twice its standard error (otherwise “network noise”), and they don’t count as fastest.
* Benchmarks are currently run manually but may be automated in the future.
* Website: The results are also available on [the project website](https://j9t.github.io/minifier-benchmarks/), whose data (`site/data/`) each benchmark run updates. (To preview the site locally, serve the site/ folder, e.g., `npx serve site`).