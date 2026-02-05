# Minifier Benchmarks

@@

## Legacy Minification Comparison

<!-- Auto-generated benchmarks, don’t edit -->
| Site | Original Size (KB) | [HTML Minifier Next](https://github.com/j9t/html-minifier-next) ([config](https://github.com/j9t/html-minifier-next/blob/main/benchmarks/html-minifier.json))<br>[![npm last update](https://img.shields.io/npm/last-update/html-minifier-next)](https://socket.dev/npm/package/html-minifier-next) | [htmlnano](https://github.com/posthtml/htmlnano)<br>[![npm last update](https://img.shields.io/npm/last-update/htmlnano)](https://socket.dev/npm/package/htmlnano) | [@swc/html](https://github.com/swc-project/swc)<br>[![npm last update](https://img.shields.io/npm/last-update/@swc/html)](https://socket.dev/npm/package/@swc/html) | [minify-html](https://github.com/wilsonzlin/minify-html)<br>[![npm last update](https://img.shields.io/npm/last-update/@minify-html/node)](https://socket.dev/npm/package/@minify-html/node) | [minimize](https://github.com/Swaagie/minimize)<br>[![npm last update](https://img.shields.io/npm/last-update/minimize)](https://socket.dev/npm/package/minimize) | [html­com­pressor.­com](https://htmlcompressor.com/) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [A List Apart](https://alistapart.com/) | 63 | **53** | 55 | 56 | 55 | 58 | 56 |
| [Apple](https://www.apple.com/) | 229 | **196** | 202 | 206 | 207 | 209 | 209 |
| [BBC](https://www.bbc.co.uk/) | 644 | **598** | 609 | 604 | 605 | 638 | n/a |
| **Average processing time** |  | 42 ms (3/3) | 346 ms (3/3) | 23 ms (3/3) | **8 ms (3/3)** | 61 ms (3/3) | 1351 ms (2/3) |

(Last updated: Feb 5, 2026)
<!-- End auto-generated -->