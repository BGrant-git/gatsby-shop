import React, { useContext } from "react"
import { Grid } from "@material-ui/core"
import TrackVisibility from "react-on-screen"

import "./app.css"
import { StoreContext } from "../context/context"
import ScrollToTop from "../components/ScrollToTop"

import Home from "./home"

const App = () => {
  const { suits } = useContext(StoreContext)

  const [suitsValue, setSuitsValue] = suits

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <Grid
      container
      direction="column"
      style={{ maxWidth: 1300, margin: "auto" }}
    >
      <Grid item container>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} md={10}>
          <Home productsSuits={suitsValue} />
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>

      <TrackVisibility>
        <ScrollToTop scrollToTop={scrollToTop} />
      </TrackVisibility>
    </Grid>
  )
}

export default App
