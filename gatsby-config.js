module.exports = {
  siteMetadata: {
    title: `Yennie Jun's Personal Website`,
    description: `Yennie Jun's personal website.`,
    author: `Yennie Jun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // "gatsby-plugin-catch-links", 
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sunflower.svg`, // This path is relative to the root of the site.
      },
    },
    
  ],
}
