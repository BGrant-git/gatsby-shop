import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

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
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
