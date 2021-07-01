const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "md",
        "css",
        "njk",
        "svg",
    ]);

    eleventyConfig.addPlugin(syntaxHighlight)

    // use to slugify anchors
    const slugify = eleventyConfig.javascriptFunctions.slug;

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
            slugify,
            permalink: true,
            permalinkClass: "tdbc-anchor",
            permalinkSymbol: "#",
            permalinkSpace: true,
            permalinkBefore: false,
        })
    );

    return {
        dir: {
            input: 'src',
            output: "dist"
        },
    }
}