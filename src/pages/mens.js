import React from "react"
import { Grid } from "@material-ui/core/"
import TrackVisibility from "react-on-screen"

import ScrollToTop from "../components/ScrollToTop"
import MensBanner from "../components/mens/MensBanner"
import SortBy from "../components/SortBy"
import MensComponent from "../components/mens/MensComponent"

const Mens = () => {
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
      <TrackVisibility style={{ marginLeft: "95%" }}>
        <ScrollToTop scrollToTop={scrollToTop} />
      </TrackVisibility>
    </Grid>
  )
}

export default Mens
