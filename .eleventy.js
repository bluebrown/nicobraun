const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require('eleventy-plugin-nesting-toc');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function (eleventyConfig) {

    eleventyConfig.setLibrary("md",
        markdownIt({ html: true, linkify: true, typographer: true })
            .use(markdownItAnchor, {
                slugify: eleventyConfig.javascriptFunctions.slug,
                permalink: markdownItAnchor.permalink.headerLink()
            })
    );

    eleventyConfig.addPlugin(pluginTOC);

    eleventyConfig.addPlugin(syntaxHighlight)

    eleventyConfig.setTemplateFormats([
        "md",
        "css",
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