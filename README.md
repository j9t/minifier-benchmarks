# Minifier Benchmarks (Beta)

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)). **Early release, benchmarks are still being cross-checked and fine-tuned.**

Two tests are run: One exclusively applying [HTML minification](#1-html-minification-compared) (with the most aggressive settings that do not impact conformance), the other [enabling all minification features](#2-maximum-minification-compared) the respective minifier offers (this is play—it’s not a fair comparison and may exceed project needs).

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by maximum effectiveness](#2-maximum-minification-compared) (all minification and tree-shaking options enabled), and by the respective processing times
* **🧑‍🏭 Minifier author?** [Add and configure your minifier and become a co-owner](https://github.com/j9t/minifier-benchmarks/compare)
* **💁 Innocent bystander?** [Please share observations and suggestions](https://github.com/j9t/minifier-benchmarks/issues/new)

<!-- Auto-generated benchmarks, don't edit -->
Benchmarks last updated: Feb 6, 2026

## 1. HTML Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next)<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26 | **25** | 26 | 26 | **25** | 26 |
| [A List Apart](https://alistapart.com/) | 63 | 59 | **57** | 58 | 58 | **57** | 58 |
| [Apple](https://www.apple.com/) | 229 | 210 | **203** | 209 | 208 | 206 | 209 |
| [BBC](https://www.bbc.co.uk/) | 696 | 691 | **685** | n/a | 689 | **685** | 690 |
| [Bun](https://bun.sh/) | 461 | 451 | **441** | n/a | 454 | 452 | 455 |
| [CERN](https://home.cern/) | 151 | 93 | **81** | 95 | 91 | 91 | 92 |
| [Code Responsibly](https://mirrors.meiert.org/coderesponsibly.org/) | 9 | **8** | **8** | **8** | **8** | **8** | **8** |
| [CSS-Tricks](https://css-tricks.com/) | 155 | 143 | **140** | 141 | 141 | **140** | 141 |
| [DeepSeek](https://www.deepseek.com/) | 104 | 104 | **97** | 103 | 102 | 103 | 103 |
| [DIN](https://www.din.de/) | 250 | 181 | **175** | 182 | 182 | 179 | 182 |
| [DLR](https://www.dlr.de/) | 580 | 576 | **574** | n/a | 575 | **574** | 577 |
| [ECMAScript](https://tc39.es/ecma262/) | 7261 | 6671 | **6450** | n/a | 6636 | 6586 | 6637 |
| [EDRi](https://edri.org/) | 80 | **73** | **73** | 74 | 74 | **73** | 74 |
| [EFF](https://www.eff.org/) | 54 | 50 | **48** | 50 | 49 | **48** | 49 |
| [European Alternatives](https://european-alternatives.eu/) | 48 | **32** | **32** | **32** | **32** | **32** | **32** |
| [FAZ](https://www.faz.net/aktuell/) | 1573 | 1521 | **1485** | n/a | 1521 | 1509 | 1518 |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 132 | **131** | 132 | 132 | **131** | 132 |
| [Front-End Social](https://front-end.social/) | 36 | **34** | **34** | 35 | **34** | **34** | 35 |
| [Frontend Dogma](https://frontenddogma.com/) | 227 | 235 | **227** | **227** | 242 | **227** | 246 |
| [Google](https://www.google.com/) | 18 | **18** | **18** | **18** | **18** | **18** | **18** |
| [Ground News](https://ground.news/) | 1711 | 1687 | **1648** | n/a | 1695 | 1686 | 1698 |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | **119** | **119** | 121 | 124 | **119** | 123 |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152 | **148** | 149 | 155 | 149 | 155 |
| [IETF](https://www.ietf.org/) | 82 | 34 | **32** | 34 | 34 | 33 | 34 |
| [Igalia](https://www.igalia.com/) | 49 | 37 | **35** | 37 | 37 | 36 | 36 |
| [Ladybird](https://ladybird.org/) | 30 | 29 | **27** | 29 | 29 | 28 | 29 |
| [Leanpub](https://leanpub.com/) | 251 | 249 | **243** | 249 | 248 | 246 | 247 |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | **12** | **12** | **12** | **12** | **12** | **12** |
| [Mastodon](https://mastodon.social/explore) | 38 | **36** | 37 | 37 | **36** | **36** | 37 |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66 | **64** | 68 | 67 | 65 | 68 |
| [Middle East Eye](https://www.middleeasteye.net/) | 219 | 203 | **194** | 199 | 199 | 197 | 198 |
| [Mistral AI](https://mistral.ai/) | 342 | 334 | **331** | n/a | 338 | 332 | 338 |
| [Mondoweiss](https://mondoweiss.net/) | 376 | 367 | **356** | n/a | 360 | 359 | 362 |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 | **35** | 36 | 36 | **35** | 36 |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | 81 | **80** | 81 | 82 | **80** | 81 |
| [OSCE](https://www.osce.org/) | 173 | 145 | **143** | 145 | 146 | **143** | 145 |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 | **175** | 176 | 177 | **175** | 176 |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 19 | **17** | 18 | 18 | **17** | 18 |
| [SitePoint](https://www.sitepoint.com/) | 497 | 491 | **490** | n/a | 493 | 492 | 494 |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 287 | 288 | **285** | 287 | 287 | 286 | 287 |
| [Startup-Verband](https://startupverband.de/) | 42 | 31 | **30** | 31 | 31 | **30** | 31 |
| [TAZ](https://taz.de/) | 413 | 391 | **363** | n/a | 383 | 381 | 384 |
| [TetraLogical](https://tetralogical.com/) | 59 | **53** | **53** | **53** | **53** | **53** | **53** |
| [TPGi](https://www.tpgi.com/) | 174 | 177 | **167** | 171 | 170 | 169 | 171 |
| [United Nations](https://www.un.org/en/) | 151 | 131 | **126** | 131 | 130 | 128 | 130 |
| [UX Collective](https://uxdesign.cc/) | 97 | 140 | **95** | 96 | 96 | 96 | 96 |
| [Vivaldi](https://vivaldi.com/) | 93 | 85 | **82** | 84 | 83 | 83 | 84 |
| [W3C](https://www.w3.org/) | 50 | 41 | **40** | 41 | 41 | **40** | 41 |
| [WordPress Blog](https://wordpress.com/blog/) | 195 | 179 | **176** | 181 | 180 | 178 | 181 |
| **Average processing time** |  | 38 ms (49/49) | 51 ms (49/49) | 716 ms (39/49) | 45 ms (49/49) | **11 ms (49/49)** | 205 ms (49/49) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next)<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24 | **23** | 24 | **23** | **23** | 26 |
| [A List Apart](https://alistapart.com/) | 63 | 57 | 53 | 56 | **39** | 55 | 58 |
| [Apple](https://www.apple.com/) | 229 | 210 | **196** | 209 | 199 | 206 | 209 |
| [BBC](https://www.bbc.co.uk/) | 696 | 658 | **647** | n/a | 652 | 653 | 690 |
| [Bun](https://bun.sh/) | 461 | 435 | 421 | n/a | **374** | 436 | 455 |
| [CERN](https://home.cern/) | 151 | 92 | **80** | 95 | 90 | 90 | 92 |
| [Code Responsibly](https://mirrors.meiert.org/coderesponsibly.org/) | 9 | **8** | **8** | **8** | **8** | **8** | **8** |
| [CSS-Tricks](https://css-tricks.com/) | 155 | 139 | 127 | 138 | **108** | 137 | 141 |
| [DeepSeek](https://www.deepseek.com/) | 104 | 99 | 91 | 99 | **89** | 98 | 103 |
| [DIN](https://www.din.de/) | 250 | 175 | 147 | 175 | **136** | 174 | 182 |
| [DLR](https://www.dlr.de/) | 580 | 544 | 539 | n/a | **529** | 536 | 577 |
| [ECMAScript](https://tc39.es/ecma262/) | 7261 | 6669 | **6447** | n/a | 6633 | 6584 | 6637 |
| [EDRi](https://edri.org/) | 80 | 71 | 68 | 72 | **53** | 70 | 74 |
| [EFF](https://www.eff.org/) | 54 | 49 | **45** | 49 | 47 | 48 | 49 |
| [European Alternatives](https://european-alternatives.eu/) | 48 | 32 | **30** | 32 | **30** | 32 | 32 |
| [FAZ](https://www.faz.net/aktuell/) | 1573 | 1514 | 1436 | n/a | **1312** | 1504 | 1518 |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 126 | 122 | 127 | **51** | 125 | 132 |
| [Front-End Social](https://front-end.social/) | 36 | 34 | 34 | 35 | **31** | 34 | 35 |
| [Frontend Dogma](https://frontenddogma.com/) | 227 | 235 | **219** | 227 | 233 | 227 | 246 |
| [Google](https://www.google.com/) | 18 | 17 | **16** | 18 | **16** | 17 | 18 |
| [Ground News](https://ground.news/) | 1711 | 1604 | **1555** | n/a | 1578 | 1603 | 1698 |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119 | **118** | 121 | 124 | 119 | 123 |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152 | **148** | 149 | 155 | 149 | 155 |
| [IETF](https://www.ietf.org/) | 82 | 34 | **31** | 34 | 33 | 33 | 34 |
| [Igalia](https://www.igalia.com/) | 49 | 36 | **33** | 36 | 35 | 35 | 36 |
| [Ladybird](https://ladybird.org/) | 30 | 29 | **27** | 29 | 28 | 28 | 29 |
| [Leanpub](https://leanpub.com/) | 251 | 238 | **233** | 248 | 235 | 236 | 247 |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10 | **9** | 10 | **9** | 10 | 12 |
| [Mastodon](https://mastodon.social/explore) | 38 | 36 | 35 | 37 | **32** | 36 | 37 |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66 | 62 | 68 | **50** | 65 | 68 |
| [Middle East Eye](https://www.middleeasteye.net/) | 219 | 203 | **193** | 199 | 198 | 196 | 198 |
| [Mistral AI](https://mistral.ai/) | 342 | 310 | **305** | n/a | 307 | 309 | 338 |
| [Mondoweiss](https://mondoweiss.net/) | 376 | 354 | **342** | n/a | n/a | 350 | 362 |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 | **32** | 36 | 33 | 35 | 36 |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | 80 | 73 | 81 | **59** | 80 | 81 |
| [Opera](https://www.opera.com/) | 208 | 147 | 139 | 152 | **99** | 146 | 151 |
| [OSCE](https://www.osce.org/) | 173 | 145 | 142 | 145 | **137** | 142 | 145 |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 | 174 | 176 | **173** | 175 | 176 |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18 | **17** | 18 | 18 | **17** | 18 |
| [SitePoint](https://www.sitepoint.com/) | 497 | 474 | 458 | n/a | **432** | 475 | 494 |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 287 | 286 | 283 | 287 | **273** | 284 | 287 |
| [Startup-Verband](https://startupverband.de/) | 42 | 31 | **29** | 31 | 30 | 30 | 31 |
| [TAZ](https://taz.de/) | 413 | 371 | **338** | n/a | 363 | 371 | 384 |
| [TetraLogical](https://tetralogical.com/) | 59 | 53 | 52 | 53 | **49** | 53 | 53 |
| [TPGi](https://www.tpgi.com/) | 174 | 165 | 157 | 170 | **148** | 164 | 171 |
| [United Nations](https://www.un.org/en/) | 151 | 127 | 113 | 123 | **85** | 125 | 130 |
| [UX Collective](https://uxdesign.cc/) | 97 | 90 | **88** | 92 | 89 | 90 | 96 |
| [Vivaldi](https://vivaldi.com/) | 93 | 81 | **76** | 82 | n/a | 81 | 84 |
| [W3C](https://www.w3.org/) | 50 | 39 | **36** | 39 | 37 | 38 | 41 |
| [WordPress Blog](https://wordpress.com/blog/) | 195 | 158 | 151 | 168 | **135** | 166 | 181 |
| **Average processing time** |  | 36 ms (50/50) | 56 ms (50/50) | 1182 ms (40/50) | 166 ms (48/50) | **10 ms (50/50)** | 189 ms (50/50) |
<!-- End auto-generated -->

## Notes

* Minimize only minifies HTML.
* [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.