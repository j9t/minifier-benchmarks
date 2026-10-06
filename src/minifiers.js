// Local minifiers with their benchmark settings, each taking the input (a string, or a buffer
// if `isBufferInput`) and the site URL, and resolving to the minified output

import { minify as minifyHMN } from 'html-minifier-next';
import htmlnano from 'htmlnano';
import { minify as minifySWC } from '@swc/html';
import minifyHTMLPkg from '@minify-html/node';
import Minimize from 'minimize';

const { minify: minifyHTML } = minifyHTMLPkg;

export function createMinifiers({ isHtmlOnly, minifierConfig }) {
  const minimize = new Minimize();

  return {
    // @swc/html, https://swc.rs/docs/usage/html
    swchtml: {
      async minify(data) {
        const result = await minifySWC(data, {
          // Use most aggressive settings
          forceSetHtml5Doctype: true,
          minifyJs: !isHtmlOnly,
          minifyCss: !isHtmlOnly,
          minifyJson: !isHtmlOnly,
          minifyAdditionalScriptsContent: isHtmlOnly ? [] : [['application/ld+json', 'json']],
          minifyAdditionalAttributes: isHtmlOnly ? [] : [['style', 'css']],
          collapseWhitespaces: 'all',
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: 'all',
          collapseBooleanAttributes: true,
          normalizeAttributes: true,
          removeEmptyMetadataElements: true,
          minifyConditionalComments: true,
          tagOmission: true,
          quotes: true
        });
        return result.code;
      }
    },

    // HTML Minifier Next
    minifier: {
      minify(data, site) {
        // Load config (with caches disabled, as they persist across calls) and add site-specific minifyURLs;
        // a fresh object per call, as HTML Minifier Next memoizes options processing per object
        // @@ Disable or clear the URL cache, too, once HTML Minifier Next allows it
        const config = { ...minifierConfig, minifyURLs: site };

        // HTML-only mode: Disable CSS, JS, SVG, and other minification
        if (isHtmlOnly) {
          config.minifyCSS = false;
          config.minifyJS = false;
          config.minifySVG = false;
          config.minifyURLs = false;
          config.removeUnusedCSS = false;
        }

        return minifyHMN(data, config);
      }
    },

    // htmlnano, https://htmlnano.netlify.app/presets
    htmlnano: {
      async minify(data, site) {
        // Always use “max” preset for most aggressive HTML minification
        const preset = htmlnano.presets.max;
        const options = isHtmlOnly
          ? {
              minifyCss: false,
              minifyJs: false,
              minifyJson: false,
              minifySvg: false,
              minifyHtmlTemplate: false,
              removeUnusedCss: false
            }
          : {
              minifyUrls: site,
          };
        const result = await htmlnano.process(data, options, preset);
        return result.html;
      }
    },

    // minify-html, https://github.com/wilsonzlin/minify-html
    minifyhtml: {
      isBufferInput: true,
      minify(data) {
        return minifyHTML(data, {
          keep_closing_tags: false,
          keep_comments: false,
          keep_html_and_head_opening_tags: false,
          keep_input_type_text_attr: false,
          keep_ssi_comments: false,
          minify_css: !isHtmlOnly,
          minify_js: !isHtmlOnly, // Disable if Rust panics get too frequent
          preserve_brace_template_syntax: false,
          preserve_chevron_percent_template_syntax: false,
          remove_bangs: true,
          remove_processing_instructions: true,
          // minify-html calls the following four options “possibly” non-compliant
          // but `allow_noncompliant_unquoted_attribute_values` doesn’t seem to,
          // which is why it stays on
          allow_noncompliant_unquoted_attribute_values: true,
          allow_optimal_entities: false,
          allow_removing_spaces_between_attributes: false,
          minify_doctype: false
        });
      }
    },

    // Minimize, https://github.com/Swaagie/minimize
    minimize: {
      minify(data) {
        return new Promise((resolve, reject) => {
          minimize.parse(data, (err, minified) => err ? reject(err) : resolve(minified));
        });
      }
    }
  };
}