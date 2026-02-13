# Minifier Benchmarks (Beta)

A collection of regularly updated benchmarks for HTML+ minifiers ([context](https://dev.to/j9t/on-the-need-for-neutral-maintained-minifier-metrics-5715)). **Early release, benchmarks are still being cross-checked and fine-tuned.**

Two tests are run: One exclusively applying [HTML minification](#1-html-minification-compared) (with the most aggressive settings that do not impact conformance), the other [enabling all minification features](#2-maximum-minification-compared) the respective minifier offers (this is play—it’s not a fair comparison and may exceed project needs).

* **👩‍💻 Minifier user?** Compare HTML minifiers [by HTML minification effectiveness](#1-html-minification-compared), [by maximum effectiveness](#2-maximum-minification-compared) (all minification and tree-shaking options enabled), and by the respective processing times
* **🧑‍🏭 Minifier author?** [Add and configure your minifier and become a co-owner](https://github.com/j9t/minifier-benchmarks/compare)
* **💁 Innocent bystander?** [Please share observations and suggestions](https://github.com/j9t/minifier-benchmarks/issues/new)

<!-- Auto-generated benchmarks, don't edit -->
Benchmarks last updated: Feb 13, 2026

## 1. HTML Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next)<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 26 | 26 | 26 | 26 | **25** | 26 |
| [A List Apart](https://alistapart.com/) | 63 | 59 | **57** | 58 | 58 | **57** | 58 |
| [Apple](https://www.apple.com/) | 233 | 214 | **203** | 212 | 211 | 210 | 212 |
| [BBC](https://www.bbc.co.uk/) | 707 | 701 | 697 | n/a | 700 | **696** | 701 |
| [Bun](https://bun.sh/) | 461 | 451 | **444** | n/a | 454 | 452 | 455 |
| [CERN](https://home.cern/) | 150 | 92 | **81** | 95 | 91 | 91 | 92 |
| [CSS-Tricks](https://css-tricks.com/) | 155 | 143 | 141 | 141 | 141 | **140** | 141 |
| [DeepSeek](https://www.deepseek.com/) | 104 | 104 | **97** | 103 | 102 | 103 | 103 |
| [DIN](https://www.din.de/) | 250 | 181 | **176** | 182 | 182 | 179 | 182 |
| [DLR](https://www.dlr.de/) | 576 | 572 | **570** | n/a | 571 | **570** | 573 |
| [ECMAScript](https://tc39.es/ecma262/) | 7306 | 6716 | **6494** | n/a | 6679 | 6629 | 6680 |
| [EDRi](https://edri.org/) | 80 | **73** | **73** | 74 | 74 | **73** | 74 |
| [EFF](https://www.eff.org/) | 56 | 51 | **49** | 52 | 50 | 50 | 51 |
| [European Alternatives](https://european-alternatives.eu/) | 48 | **32** | **32** | **32** | **32** | **32** | **32** |
| [FAZ](https://www.faz.net/aktuell/) | 1587 | 1534 | **1503** | n/a | 1534 | 1522 | 1531 |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 133 | **131** | 132 | 132 | **131** | 132 |
| [Front-End Social](https://front-end.social/) | 36 | **34** | **34** | 35 | **34** | **34** | 35 |
| [Frontend Dogma](https://frontenddogma.com/) | 225 | 233 | 225 | **224** | 240 | 225 | 244 |
| [Google](https://www.google.com/) | 18 | **18** | **18** | **18** | **18** | **18** | **18** |
| [Ground News](https://ground.news/) | 1489 | 1467 | **1431** | n/a | 1474 | 1465 | 1476 |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | **119** | **119** | 121 | 124 | **119** | 123 |
| [IETF](https://www.ietf.org/) | 82 | 34 | **32** | 34 | 34 | 33 | 34 |
| [Igalia](https://www.igalia.com/) | 48 | 37 | **34** | 36 | 37 | 36 | 36 |
| [Ladybird](https://ladybird.org/) | 31 | 29 | **28** | 29 | 29 | 29 | 29 |
| [Leanpub](https://leanpub.com/) | 245 | 242 | **238** | 242 | 242 | 240 | 240 |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | **12** | **12** | **12** | **12** | **12** | **12** |
| [Mastodon](https://mastodon.social/explore) | 38 | 37 | 37 | 37 | **36** | **36** | 37 |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 67 | **65** | 68 | 67 | **65** | 68 |
| [Middle East Eye](https://www.middleeasteye.net/) | 220 | 204 | **195** | 201 | 200 | 197 | 200 |
| [Mistral AI](https://mistral.ai/) | 377 | 369 | **367** | n/a | 372 | 368 | 373 |
| [Mondoweiss](https://mondoweiss.net/) | 373 | 365 | **354** | n/a | 358 | 357 | 360 |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 | **35** | 36 | 36 | **35** | 36 |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | 81 | **80** | 81 | 82 | **80** | 81 |
| [Opera](https://www.opera.com/) | 209 | 153 | **150** | 153 | 152 | 152 | 152 |
| [OSCE](https://www.osce.org/) | 171 | 144 | 143 | 144 | 144 | **141** | 144 |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | **31** | **31** | 32 | **31** | **31** | **31** |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 | **175** | 176 | 177 | **175** | 176 |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 20 | **18** | **18** | **18** | **18** | **18** |
| [SitePoint](https://www.sitepoint.com/) | 481 | **475** | 477 | n/a | 477 | 476 | 478 |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 291 | 292 | **290** | 291 | 291 | **290** | 291 |
| [Startup-Verband](https://startupverband.de/) | 44 | 32 | **31** | 32 | 32 | **31** | 32 |
| [TAZ](https://taz.de/) | 421 | 399 | **379** | n/a | 391 | 389 | 392 |
| [TetraLogical](https://tetralogical.com/) | 59 | **53** | 54 | 54 | 54 | **53** | 54 |
| [TPGi](https://www.tpgi.com/) | 174 | 178 | **168** | 172 | 171 | 170 | 172 |
| [United Nations](https://www.un.org/en/) | 151 | 130 | **126** | 130 | 129 | 128 | 130 |
| [UX Collective](https://uxdesign.cc/) | 99 | 143 | **97** | 99 | 98 | 98 | 98 |
| [Vivaldi](https://vivaldi.com/) | 93 | 85 | **83** | 84 | **83** | **83** | 84 |
| [W3C](https://www.w3.org/) | 51 | 41 | **40** | 41 | 41 | **40** | 41 |
| **Average processing time** |  | 32 ms (48/48) | 42 ms (48/48) | 767 ms (38/48) | 35 ms (48/48) | **9 ms (48/48)** | 203 ms (48/48) |

## 2. Maximum Minification Compared

| Site | Original Size (KB) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next)<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [html­com­pressor.­com](https://htmlcompressor.com/) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Minifier Test](https://hell.meiert.org/core/html/minifier-test.html) | 31 | 24 | **23** | 24 | **23** | **23** | 26 |
| [A List Apart](https://alistapart.com/) | 63 | 57 | 53 | 56 | **39** | 55 | 58 |
| [Apple](https://www.apple.com/) | 233 | 213 | **193** | 212 | 202 | 209 | 212 |
| [BBC](https://www.bbc.co.uk/) | 707 | 669 | **654** | n/a | 662 | 663 | 701 |
| [Bun](https://bun.sh/) | 461 | 435 | 420 | n/a | **374** | 436 | 455 |
| [CERN](https://home.cern/) | 150 | 92 | **80** | 95 | 89 | 90 | 92 |
| [CSS-Tricks](https://css-tricks.com/) | 155 | 139 | 114 | 138 | **108** | 137 | 141 |
| [DeepSeek](https://www.deepseek.com/) | 104 | 99 | **83** | 99 | 89 | 98 | 103 |
| [DIN](https://www.din.de/) | 250 | 175 | 163 | 175 | **136** | 174 | 182 |
| [DLR](https://www.dlr.de/) | 576 | 541 | 531 | n/a | **526** | 533 | 573 |
| [ECMAScript](https://tc39.es/ecma262/) | 7306 | 6714 | **6492** | n/a | 6677 | 6627 | 6680 |
| [EDRi](https://edri.org/) | 80 | 71 | 67 | 72 | **53** | 70 | 74 |
| [EFF](https://www.eff.org/) | 56 | 50 | **46** | 50 | 48 | 49 | 51 |
| [European Alternatives](https://european-alternatives.eu/) | 48 | 32 | **30** | 32 | **30** | 32 | 32 |
| [FAZ](https://www.faz.net/aktuell/) | 1587 | 1527 | 1374 | n/a | **1322** | 1517 | 1531 |
| [French Tech](https://lafrenchtech.gouv.fr/) | 152 | 126 | 122 | 127 | **51** | 125 | 132 |
| [Front-End Social](https://front-end.social/) | 36 | 34 | **31** | 35 | **31** | 34 | 35 |
| [Frontend Dogma](https://frontenddogma.com/) | 225 | 233 | **217** | 224 | 231 | 225 | 244 |
| [Google](https://www.google.com/) | 18 | 17 | **16** | 18 | **16** | 17 | 18 |
| [Ground News](https://ground.news/) | 1489 | 1397 | **1325** | n/a | 1373 | 1395 | 1476 |
| [HTML 3.2](https://www.w3.org/TR/2018/SPSD-html32-20180315/) | 123 | 119 | **118** | 121 | 124 | 119 | 123 |
| [HTML Living Standard](https://html.spec.whatwg.org/multipage/) | 149 | 152 | **148** | 149 | 155 | 149 | 155 |
| [IETF](https://www.ietf.org/) | 82 | 34 | **31** | 34 | 33 | 33 | 34 |
| [Igalia](https://www.igalia.com/) | 48 | 36 | **33** | 36 | 35 | 35 | 36 |
| [Ladybird](https://ladybird.org/) | 31 | 29 | **27** | 29 | 28 | 29 | 29 |
| [Leanpub](https://leanpub.com/) | 245 | 231 | **225** | 242 | 228 | 229 | 240 |
| [Legge Stanca](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2004-01-17&atto.codiceRedazionale=004G0015&elenco30giorni=false) | 17 | 10 | **9** | 10 | **9** | 10 | 12 |
| [Mastodon](https://mastodon.social/explore) | 38 | 36 | 33 | 37 | **32** | 36 | 37 |
| [MDN](https://developer.mozilla.org/en-US/) | 109 | 66 | 62 | 68 | **50** | 65 | 68 |
| [Middle East Eye](https://www.middleeasteye.net/) | 220 | 204 | **194** | 200 | 199 | 197 | 200 |
| [Mistral AI](https://mistral.ai/) | 377 | 339 | **327** | n/a | 334 | 338 | 373 |
| [Mondoweiss](https://mondoweiss.net/) | 373 | 352 | **340** | n/a | n/a | 347 | 360 |
| [Mozilla](https://www.mozilla.org/) | 47 | 37 | **33** | 36 | **33** | 35 | 36 |
| [Nielsen Norman Group](https://www.nngroup.com/) | 97 | 80 | **58** | 80 | 59 | 79 | 81 |
| [Opera](https://www.opera.com/) | 209 | 147 | 134 | 152 | **100** | 146 | 152 |
| [OSCE](https://www.osce.org/) | 171 | 144 | **135** | 144 | 136 | 141 | 144 |
| [Scrum Guide](https://scrumguides.org/scrum-guide.html) | 34 | **31** | **31** | 32 | **31** | **31** | **31** |
| [Scrum.org](https://www.scrum.org/) | 207 | 177 | **172** | 176 | 173 | 175 | 176 |
| [SELFHTML](https://wiki.selfhtml.org/) | 21 | 18 | **17** | 18 | 18 | 18 | 18 |
| [SitePoint](https://www.sitepoint.com/) | 481 | 458 | **418** | n/a | 420 | 459 | 478 |
| [Smashing Magazine](https://www.smashingmagazine.com/) | 291 | 291 | 288 | 291 | **278** | 289 | 291 |
| [Startup-Verband](https://startupverband.de/) | 44 | 32 | **30** | 32 | 31 | 31 | 32 |
| [TAZ](https://taz.de/) | 421 | 375 | **350** | n/a | 366 | 377 | 392 |
| [TetraLogical](https://tetralogical.com/) | 59 | 53 | **49** | 54 | 50 | 53 | 54 |
| [TPGi](https://www.tpgi.com/) | 174 | 165 | 158 | 171 | **149** | 165 | 172 |
| [United Nations](https://www.un.org/en/) | 151 | 126 | 112 | 123 | **84** | 124 | 130 |
| [UX Collective](https://uxdesign.cc/) | 99 | 92 | **90** | 94 | 91 | 92 | 98 |
| [Vivaldi](https://vivaldi.com/) | 93 | 81 | **74** | 82 | n/a | 81 | 84 |
| [W3C](https://www.w3.org/) | 51 | 39 | **36** | 39 | 37 | 38 | 41 |
| [WordPress Blog](https://wordpress.com/blog/) | 194 | 158 | 149 | 168 | **135** | 165 | 181 |
| **Average processing time** |  | 36 ms (50/50) | 65 ms (50/50) | 1180 ms (40/50) | 161 ms (48/50) | **10 ms (50/50)** | 181 ms (50/50) |
<!-- End auto-generated -->

## Notes

* Minimize only minifies HTML.
* [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.