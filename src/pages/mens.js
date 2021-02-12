import React, { useContext } from "react"
import { Grid } from "@material-ui/core/"

import { StoreContext } from "../context/context"
import Layout from "../layout/layout"
import MensBanner from "../components/mens/MensBanner"
import SortBy from "../components/SortBy"
import MensComponent from "../components/mens/MensComponent"

const Mens = () => (
  <Grid container>
    <Grid item xs={false} sm={1} />
    <Grid container item direction="column" xs={12} sm={10}>
      <Grid item>
        <MensBanner />
      </Grid>
      <Grid item>
        <SortBy />
      </Grid>
      <Grid container>
        <MensComponent />
      </Grid>
    </Grid>
    <Grid item xs={false} sm={1} />
  </Grid>
)

export default Mens
