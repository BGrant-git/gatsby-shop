import React from "react"
import Grid from "@material-ui/core/Grid"

import Layout from "../layout/layout"
import WomensBanner from "../components/womens/WomensBanner"
import SortBy from "../components/SortBy"
import WomensComponent from "../components/womens/WomensComponent"

const Womens = ({ addToCart, getViewProduct }) => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={false} sm={1} />
        <Grid container item direction="column" xs={12} sm={10}>
          <Grid item>
            <WomensBanner />
          </Grid>
          <Grid item>
            <SortBy />
          </Grid>
          <Grid container>
            <WomensComponent />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </Layout>
  )
}

export default Womens
