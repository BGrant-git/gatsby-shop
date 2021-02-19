module.exports = {
  pathPrefix: "/gatsby-shop",
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "src/pages",
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "shop1-habibi",
        accessToken: "5225afa1afaeae4e57839085b46f6a33",
        apiVersion: "2020-10",
        includeCollections: ["shop"],
      },
    },
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     disableAutoprefixing: false,
    //     disableMinification: false,
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //   },
    // },
  ],
}
