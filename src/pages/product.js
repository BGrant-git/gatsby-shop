import React from "react"
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  CardActions,
  useTheme,
  makeStyles,
} from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Layout from "../layout/layout"
import ViewProductComponent from "../components/view-product/ViewProductComponent"

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  mobileCard: {
    textAlign: "center",
  },
  mobImg: {
    width: "100%",
    height: 350,
    margin: "auto",
  },
  mobBtns: {
    justifyContent: "center",
  },
  deskCard: {
    marginTop: 30,
  },
  deskImg: {
    height: 285,
    marginBottom: -4,
  },
  deskText: {
    padding: 5,
  },
  deskBtnsBox: {
    padding: 5,
    marginTop: 190,
  },
  deskBtns: {
    margin: 2,
    padding: 5,
  },
  type: {
    padding: 15,
    paddingLeft: 40,
  },
})

const Product = ({ viewProduct, addToCart }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Grid
          container
          direction="column"
          className={classes.root}
          style={!isMobile ? { marginBottom: 200 } : null}
        >
          <ViewProductComponent />
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  )
}

export default Product
