import React from "react"
import Grid from "@material-ui/core/Grid"
import TrackVisibility from "react-on-screen"

import ScrollToTop from "../components/ScrollToTop"
import WomensBanner from "../components/womens/WomensBanner"
import SortBy from "../components/SortBy"
import WomensComponent from "../components/womens/WomensComponent"

const Womens = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
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
      <TrackVisibility style={{ marginLeft: "95%" }}>
        <ScrollToTop scrollToTop={scrollToTop} />
      </TrackVisibility>
    </Grid>
  )
}

export default Womens
