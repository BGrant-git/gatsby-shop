import React, { useState, useEffect, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import StoreContextProvider, { StoreContext } from "../context/context"
import MenuAppBar from "../components/navbar-footer/MenuAppBar"
import Footer from "../components/navbar-footer/Footer"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query myQuery {
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

  let numOfItems = cartItems.length

  const handleSearchChange = event => {
    setInput(event.target.value)
  }

  const getAppBarSearch = () => {
    setSearch(input)
  }

  useEffect(() => {
    const result = productsAll.filter(
      ele => ele.title.toLowerCase().indexOf(search.toLowerCase()) > 0
    )
    setResults(result)
  }, [search])

  const addToCart = event => {
    setCartItems([...cartItems, event])
  }

  const removeFromCart = event => {
    let hardCopy = [...cartItems]
    hardCopy = hardCopy.filter(ele => ele.title !== event.title)
    setCartItems(hardCopy)
    if (cartItems.length === 1) {
      setCartPrice(0)
    }
  }

  const clearCart = () => {
    setCartItems("")
    setCartPrice(0)
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartPrice(
        cartItems
          .map(item => item.variants[0].price)
          .map(item => parseFloat(item))
          .reduce((acc, curr) => acc + curr)
      )
    }
  }, [cartItems])

  const getViewProduct = event => {
    setViewProduct(event)
  }

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <StoreContextProvider>
      <ThemeProvider theme={theme}>
        <MenuAppBar
          handleSearchChange={handleSearchChange}
          getAppBarSearch={getAppBarSearch}
          numOfItems={numOfItems}
        />
        {children}
        <Footer />
      </ThemeProvider>
    </StoreContextProvider>
  )
}

export default Layout
