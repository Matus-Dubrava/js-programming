/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],
  siteMetadata: {
    title: "Gatsby-Bootstrap",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `practice.codingsrc.com`,
    //     protocol: `http`,
    //     hostingWPCOM: false, // custom hosting server
    //   },
    // },
  ],
}
