const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require('eleventy-plugin-nesting-toc');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

    eleventyConfig.setLibrary("md",
        markdownIt({ html: true, linkify: true, typographer: true })
            .use(markdownItAnchor, {
                slugify: eleventyConfig.javascriptFunctions.slug,
                permalink: markdownItAnchor.permalink.headerLink()
            })
    );

    eleventyConfig.addPlugin(pluginTOC);

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        if( outputPath && outputPath.endsWith(".html") ) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
          });
          return minified;
        }
    
        return content;
      });

    
    eleventyConfig.addShortcode('teaser', function(content) {
        return content.substring(0, 200);
    })

    eleventyConfig.setTemplateFormats([
        "md",
        "njk",
        "svg",
    ]);

    return {
        dir: {
            input: 'src',
            output: "dist"
        },
    }
}