/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ead6m7uip6ed`,
        accessToken: `0EijnARHPKRPkWm_lsgbNDY3ssYRY7B-YTrXdn7Zuho`,
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-styleguide`,
      options: {
        basePath: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
  ],
}
