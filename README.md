# Minifier Benchmarks (Beta)

@@

<!-- Auto-generated benchmarks, don't edit -->
Benchmarks last updated: Feb 5, 2026

## HTML Minification Compared

| Site | Original Size (KB) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) ([config](https://github.com/j9t/html-minifier-next/blob/main/benchmarks/html-minifier.json))<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) | [html­com­pressor.­com](https://htmlcompressor.com/) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [A List Apart](https://alistapart.com/) | 63 | 57 | 57 | **56** | 57 | 58 | 58 |
| [Apple](https://www.apple.com/) | 229 | **203** | 209 | 206 | 207 | 209 | 209 |
| [BBC](https://www.bbc.co.uk/) | 644 | 634 | 609 | **605** | 636 | 638 | n/a |
| **Average processing time** |  | 26 ms (3/3) | 308 ms (3/3) | 30 ms (3/3) | **5 ms (3/3)** | 52 ms (3/3) | 1073 ms (2/3) |

## Maximum Minification Compared

| Site | Original Size (KB) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) ([config](https://github.com/j9t/html-minifier-next/blob/main/benchmarks/html-minifier.json))<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) | [html­com­pressor.­com](https://htmlcompressor.com/) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [A List Apart](https://alistapart.com/) | 63 | **53** | 57 | 56 | 55 | 58 | 56 |
| [Apple](https://www.apple.com/) | 229 | **196** | 208 | 206 | 207 | 209 | 209 |
| [BBC](https://www.bbc.co.uk/) | 644 | **599** | 609 | 605 | 606 | 638 | n/a |
| **Average processing time** |  | 56 ms (3/3) | 288 ms (3/3) | 26 ms (3/3) | **11 ms (3/3)** | 55 ms (3/3) | 1292 ms (2/3) |
<!-- End auto-generated -->

## Notes

* Minimize only minifies HTML.
* [HTML Minifier Terser](https://github.com/terser/html-minifier-terser) is currently not included due to issues around whitespace collapsing and removal of code using modern CSS features, issues which appeared to distort the data.