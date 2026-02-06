# Minifier Benchmarks (Beta)

A collection of regularly updated benchmarks for HTML minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)).

**⚠️ Early release, benchmarks are still being checked and fine-tuned.**

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by overall “maximum” effectiveness](#2-maximum-minification-compared) (all available options checked), and by the respective processing times
* **🧑‍🏭 Minifier author?** [Add and configure your minifier and become a co-owner](https://github.com/j9t/minifier-benchmarks/compare)
* **💁 Innocent bystander?** [Please share feedback and suggestions](https://github.com/j9t/minifier-benchmarks/issues/new)

<!-- Auto-generated benchmarks, don't edit -->
Benchmarks last updated: Feb 6, 2026

## 1. HTML Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next)<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | **24** | 25 | 26 | 26 | 25 | 26 |
| [A List Apart](https://alistapart.com/) | 63 | **57** | **57** | 58 | 58 | **57** | 60 |
| [Apple](https://www.apple.com/) | 229 | 211 | **203** | 209 | 208 | 206 | 210 |
| [BBC](https://www.bbc.co.uk/) | 688 | **652** | 677 | n/a | 681 | 678 | 682 |
| [Bun](https://bun.sh/) | 461 | **435** | 441 | n/a | 454 | 452 | 455 |
| [CERN](https://home.cern/) | 151 | 93 | **81** | 95 | 92 | 91 | 93 |
| [Code Responsibly](https://mirrors.meiert.org/coderesponsibly.org/) | 9 | **8** | **8** | **8** | **8** | **8** | **8** |
| [CSS-Tricks](https://css-tricks.com/) | 155 | **139** | 140 | 141 | 141 | 140 | 142 |
| [DeepSeek](https://www.deepseek.com/) | 104 | 99 | **97** | 103 | 102 | 103 | 103 |
| [DIN](https://www.din.de/) | 250 | **175** | **175** | 182 | 182 | 179 | 183 |
| [DLR](https://www.dlr.de/) | 580 | **544** | 574 | n/a | 575 | 574 | 578 |
| [ECMAScript](https://tc39.es/ecma262/) | 7261 | 6669 | **6450** | n/a | 6636 | 6586 | 6644 |
| [EDRi](https://edri.org/) | 80 | **71** | 73 | 74 | 74 | 73 | 74 |
| [EFF](https://www.eff.org/) | 54 | 49 | **48** | 50 | 49 | **48** | 50 |
| [European Alternatives](https://european-alternatives.eu/) | 48 | **32** | **32** | **32** | **32** | **32** | **32** |
| [FAZ](https://www.faz.net/aktuell/) | 1526 | 1472 | **1442** | n/a | 1476 | 1465 | 1507 |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | **127** | 131 | 132 | 132 | 131 | 133 |
| [Front-End Social](https://front-end.social/) | 36 | **34** | **34** | 35 | **34** | **34** | 35 |
| [Frontend Dogma](https://frontenddogma.com/) | 227 | 235 | **227** | **227** | 242 | **227** | 246 |
| [Google](https://www.google.com/) | 18 | **17** | 18 | 18 | 18 | 18 | 18 |
| [Ground News](https://ground.news/) | 1715 | **1611** | 1651 | n/a | 1699 | 1690 | 1705 |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | **119** | **119** | 121 | 124 | **119** | 123 |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152 | **148** | 149 | 155 | 149 | 155 |
| [IETF](https://www.ietf.org/) | 82 | 34 | **32** | 34 | 34 | 33 | 34 |
| [Igalia](https://www.igalia.com/) | 49 | 36 | **35** | 37 | 37 | 36 | 37 |
| [Ladybird](https://ladybird.org/) | 30 | 29 | **27** | 29 | 29 | 28 | 29 |
| [Leanpub](https://leanpub.com/) | 251 | **238** | 243 | 249 | 248 | 246 | 247 |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | **10** | 12 | 12 | 12 | 12 | 15 |
| [Mastodon](https://mastodon.social/explore) | 38 | **36** | 37 | 37 | **36** | **36** | 37 |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66 | **64** | 68 | 67 | 65 | 71 |
| [Middle East Eye](https://www.middleeasteye.net/) | 219 | 203 | **195** | 200 | 200 | 197 | 200 |
| [Mistral AI](https://mistral.ai/) | 342 | **311** | 331 | n/a | 338 | 332 | 339 |
| [Mondoweiss](https://mondoweiss.net/) | 376 | **354** | 356 | n/a | 360 | 359 | 363 |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 | **35** | 36 | 36 | **35** | 38 |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | **80** | **80** | 81 | 82 | **80** | 82 |
| [Opera](https://www.opera.com/) | 208 | **147** | 149 | 152 | 151 | 151 | 152 |
| [OSCE](https://www.osce.org/) | 173 | 145 | **143** | 145 | 146 | **143** | 145 |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 | **175** | 176 | 177 | **175** | 176 |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18 | **17** | 18 | 18 | **17** | 19 |
| [SitePoint](https://www.sitepoint.com/) | 497 | **474** | 490 | n/a | 493 | 492 | 494 |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 287 | 287 | **285** | 287 | 287 | 286 | 287 |
| [Startup-Verband](https://startupverband.de/) | 42 | 31 | **30** | 31 | 31 | **30** | 32 |
| [TAZ](https://taz.de/) | 412 | 370 | **362** | n/a | 382 | 380 | 383 |
| [TetraLogical](https://tetralogical.com/) | 59 | **53** | **53** | **53** | **53** | **53** | **53** |
| [TPGi](https://www.tpgi.com/) | 174 | **165** | 167 | 171 | 170 | 169 | 171 |
| [United Nations](https://www.un.org/en/) | 151 | 127 | **126** | 131 | 130 | 128 | 134 |
| [UX Collective](https://uxdesign.cc/) | 97 | **90** | 94 | 96 | 96 | 96 | 96 |
| [Vivaldi](https://vivaldi.com/) | 93 | **81** | 82 | 84 | 83 | 83 | 84 |
| [W3C](https://www.w3.org/) | 51 | **39** | 40 | 41 | 41 | 40 | 41 |
| [WordPress Blog](https://wordpress.com/blog/) | 194 | **158** | 176 | 180 | 179 | 177 | 182 |
| **Average processing time** |  | 35 ms (50/50) | 41 ms (50/50) | 763 ms (40/50) | 37 ms (50/50) | **8 ms (50/50)** | 190 ms (50/50) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next)<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24 | **23** | 24 | **23** | **23** | 26 |
| [A List Apart](https://alistapart.com/) | 63 | 57 | 53 | 56 | **39** | 55 | 60 |
| [Apple](https://www.apple.com/) | 229 | 210 | **196** | 209 | 199 | 206 | 210 |
| [BBC](https://www.bbc.co.uk/) | 688 | 652 | **639** | n/a | 644 | 646 | 682 |
| [Bun](https://bun.sh/) | 461 | 435 | 421 | n/a | **374** | 436 | 455 |
| [CERN](https://home.cern/) | 151 | 93 | **80** | 95 | 90 | 90 | 93 |
| [Code Responsibly](https://mirrors.meiert.org/coderesponsibly.org/) | 9 | **8** | **8** | **8** | **8** | **8** | **8** |
| [CSS-Tricks](https://css-tricks.com/) | 155 | 139 | 127 | 138 | **108** | 137 | 142 |
| [DeepSeek](https://www.deepseek.com/) | 104 | 99 | 91 | 99 | **89** | 98 | 103 |
| [DIN](https://www.din.de/) | 250 | 175 | 147 | 175 | **136** | 174 | 183 |
| [DLR](https://www.dlr.de/) | 580 | 544 | 539 | n/a | **529** | 536 | 578 |
| [ECMAScript](https://tc39.es/ecma262/) | 7261 | 6669 | **6447** | n/a | 6633 | 6584 | 6644 |
| [EDRi](https://edri.org/) | 80 | 71 | 68 | 72 | **53** | 70 | 74 |
| [EFF](https://www.eff.org/) | 54 | 49 | **45** | 49 | 47 | 48 | 50 |
| [European Alternatives](https://european-alternatives.eu/) | 48 | 32 | **30** | 32 | **30** | 32 | 32 |
| [FAZ](https://www.faz.net/aktuell/) | 1526 | 1471 | 1395 | n/a | **1273** | 1459 | 1507 |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 127 | 122 | 127 | **51** | 125 | 133 |
| [Front-End Social](https://front-end.social/) | 36 | 34 | 34 | 35 | **31** | 34 | 35 |
| [Frontend Dogma](https://frontenddogma.com/) | 227 | 235 | **219** | 227 | 233 | 227 | 246 |
| [Google](https://www.google.com/) | 18 | 17 | **16** | 18 | **16** | 17 | 18 |
| [Ground News](https://ground.news/) | 1715 | 1611 | **1558** | n/a | 1582 | 1605 | 1705 |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119 | **118** | 121 | 124 | 119 | 123 |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152 | **148** | 149 | 155 | 149 | 155 |
| [IETF](https://www.ietf.org/) | 82 | 34 | **31** | 34 | 33 | 33 | 34 |
| [Igalia](https://www.igalia.com/) | 49 | 36 | **33** | 36 | 35 | 35 | 37 |
| [Ladybird](https://ladybird.org/) | 30 | 29 | **27** | 29 | 28 | 28 | 29 |
| [Leanpub](https://leanpub.com/) | 251 | 238 | **233** | 248 | 235 | 236 | 247 |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10 | **9** | 10 | **9** | 10 | 15 |
| [Mastodon](https://mastodon.social/explore) | 38 | 36 | 35 | 37 | **32** | 36 | 37 |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66 | 62 | 68 | **50** | 65 | 71 |
| [Middle East Eye](https://www.middleeasteye.net/) | 219 | 203 | **194** | 200 | 198 | 197 | 200 |
| [Mistral AI](https://mistral.ai/) | 342 | 311 | **305** | n/a | 307 | 309 | 339 |
| [Mondoweiss](https://mondoweiss.net/) | 376 | 354 | **342** | n/a | n/a | 350 | 363 |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 | **32** | 36 | 33 | 35 | 38 |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | 80 | 73 | 81 | **59** | 80 | 82 |
| [Opera](https://www.opera.com/) | 208 | 147 | 139 | 152 | **99** | 146 | 152 |
| [OSCE](https://www.osce.org/) | 173 | 145 | 142 | 145 | **137** | 142 | 145 |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 | 174 | 176 | **173** | 175 | 176 |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18 | **17** | 18 | 18 | **17** | 19 |
| [SitePoint](https://www.sitepoint.com/) | 497 | 474 | 458 | n/a | **432** | 475 | 494 |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 287 | 287 | 283 | 287 | **273** | 284 | 287 |
| [Startup-Verband](https://startupverband.de/) | 42 | 31 | **29** | 31 | 30 | 30 | 32 |
| [TAZ](https://taz.de/) | 412 | 370 | **338** | n/a | 362 | 370 | 383 |
| [TetraLogical](https://tetralogical.com/) | 59 | 53 | 52 | 53 | **49** | 53 | 53 |
| [TPGi](https://www.tpgi.com/) | 174 | 165 | 157 | 170 | **148** | 164 | 171 |
| [United Nations](https://www.un.org/en/) | 151 | 127 | 113 | 123 | **85** | 125 | 134 |
| [UX Collective](https://uxdesign.cc/) | 97 | 90 | **88** | 92 | **88** | 89 | 96 |
| [Vivaldi](https://vivaldi.com/) | 93 | 81 | **76** | 82 | n/a | 81 | 84 |
| [W3C](https://www.w3.org/) | 51 | 39 | **36** | 39 | 37 | 38 | 41 |
| [WordPress Blog](https://wordpress.com/blog/) | 194 | 158 | 150 | 168 | **134** | 165 | 182 |
| **Average processing time** |  | 36 ms (50/50) | 54 ms (50/50) | 1181 ms (40/50) | 169 ms (48/50) | **11 ms (50/50)** | 197 ms (50/50) |
<!-- End auto-generated -->

## Notes

Comparability: “Maximum” is useful to gauge overall capability, but does not enable a fair comparison—this is not possible as the minifiers presented have different feature sets. This can be deceptive: If you don’t use inline SVG, for example, a minifier that compresses SVG may look more capable, but may not be the better choice for the project.

Minifiers: Minimize only minifies HTML. [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.