module.exports = {
  siteMetadata: {
    title: `Caminho Livre`,
    description: `Qualidade de vida é ter o Caminho Livre na estrada com você`,
    author: `@AzevedoDev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caminho Livre`,
        short_name: `CL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1d4c9d`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
