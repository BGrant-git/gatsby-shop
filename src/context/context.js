import React, { createContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    query theQuery {
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
  `)

  const productsQuery = Object.entries(data)

  const productsMens = productsQuery[0][1].nodes[0].products.sort(function (
    a,
    b
  ) {
    return a.title.localeCompare(b.title)
  })

  const productsWomens = productsQuery[0][1].nodes[1].products.sort(function (
    a,
    b
  ) {
    return a.title.localeCompare(b.title)
  })

  const productsAll = productsMens.concat(productsWomens)

  const productsSuits = productsQuery[0][1].nodes[2].products

  const [input, setInput] = useState("")
  const [search, setSearch] = useState("")
  const [cartPrice, setCartPrice] = useState("")
  const [cartItems, setCartItems] = useState("")
  const [results, setResults] = useState("")
  const [viewProduct, setViewProduct] = useState("")
  const [allProducts, setAllProducts] = useState(productsAll)
  const [mensProducts, setMensProducts] = useState(productsMens)
  const [womensProducts, setWomensProducts] = useState(productsWomens)

  return (
    <StoreContext.Provider
      value={{
        input: [input, setInput],
        search: [search, setSearch],
        cartPrice: [cartPrice, setCartPrice],
        cartItems: [cartItems, setCartItems],
        results: [results, setResults],
        viewProduct: [viewProduct, setViewProduct],
        allProducts: [allProducts, setAllProducts],
        mensProducts: [mensProducts, setMensProducts],
        womensProducts: [womensProducts, setWomensProducts],
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
