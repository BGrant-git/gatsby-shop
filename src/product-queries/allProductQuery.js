import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  {
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
