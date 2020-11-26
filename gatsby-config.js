
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "shop1-habibi",
        accessToken: "5225afa1afaeae4e57839085b46f6a33",
        apiVersion: "2020-10",
        includeCollections: ["shop"],        
        shopifyQueries: {
          products:`
          query MyQuery {
            allShopifyCollection {
              nodes {
                title
                products {
                  title
                  tags
                  images {
                    originalSrc
                  }
                  description
                  variants {
                    price
                  }
                }
              }
            }
          }
          
          `
        }
      },
    },
  ]
}