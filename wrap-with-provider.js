import React from "react"

import StoreContextProvider from "./src/context/context"
import Layout from "./src/layout/layout"

export default ({ element }) => {
  return (
    <StoreContextProvider>
      <Layout>{element}</Layout>
    </StoreContextProvider>
  )
}
