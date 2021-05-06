module.exports = {
    pathPrefix: ``,
    siteMetadata: {
        title: `Click4fit`,
        description: `Click4fit description.`,
        author: `Oakfusion`,
        keywords: ``,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -100,
            },
        },
        {
            resolve: `gatsby-plugin-tawk`,
            options: {
                tawkId: process.env.GATSBY_TAWK_ID,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `md_posts`,
                path: `${__dirname}/src/md_posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Click4fit`,
                short_name: `Click4fit`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            staticFolderName: "static",
                            include: ["featured"],
                            exclude: ["featured.skip"],
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            linkImagesToOriginal: false,
                            wrapperStyle: "max-width: 100vw;",
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-react-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/intl`,
                // supported language
                languages: [`pl`],
                // language file path
                defaultLanguage: `pl`,
                // option to redirect to `/ko` when connecting `/`
                redirect: true,
                // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
                redirectDefaultLanguageToRoot: false,
                // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
                ignoredPaths: [],
            },
        },
    ],
};
