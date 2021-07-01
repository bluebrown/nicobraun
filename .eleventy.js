const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "md",
        "css",
        "njk",
        "svg",
    ]);

    eleventyConfig.addPlugin(syntaxHighlight)

    const pluginTOC = require('eleventy-plugin-nesting-toc');
    eleventyConfig.addPlugin(pluginTOC);

    const markdownIt = require('markdown-it');
    const markdownItAnchor = require('markdown-it-anchor');
    eleventyConfig.setLibrary("md",
        markdownIt({
            html: true,
            linkify: true,
            typographer: true,
        }).use(markdownItAnchor, {
            slugify: eleventyConfig.javascriptFunctions.slug,
            permalink: markdownItAnchor.permalink.headerLink()
        })
    );

    return {
        dir: {
            input: 'src',
            output: "dist"
        },
    }
}