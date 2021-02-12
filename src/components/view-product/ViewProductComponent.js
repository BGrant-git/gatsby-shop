import React, { useContext } from "react"
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

import { StoreContext } from "../../context/context"

import ShareIcon from "@material-ui/icons/Share"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

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

const ViewProductComponent = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const { viewProduct } = useContext(StoreContext)

  console.log(viewProduct)

  return (
    <>
      {/* {isMobile ? (
        <>
          <Grid item>
            <Card square className={classes.mobileCard}>
              <Typography style={{ padding: 15 }} variant="h4">
                {viewProduct.title.toUpperCase()}
              </Typography>
              <CardMedia
                className={classes.mobImg}
                image={viewProduct.images[0].originalSrc}
                title="img"
              />
              <Typography style={{ padding: 15 }} variant="body1">
                {viewProduct.description}
              </Typography>
              <Typography variant="h6">
                £{viewProduct.variants[0].price}
              </Typography>
              <Typography style={{ padding: 15 }} variant="body2">
                Tags: {viewProduct.tags}
              </Typography>
              <CardActions className={classes.mobBtns}>
                <Button
                  size="small"
                  color="primary"
                  // onClick={() => {
                  //   addToCart(viewProduct)
                  // }}
                  variant="contained"
                >
                  <ShoppingCartIcon />
                </Button>
                <Button size="small" color="primary" variant="contained">
                  <ShareIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </>
      ) : (
        <Card square className={classes.deskCard}>
          <Grid item container direction="row">
            {viewProduct ? (
              <>
                <Grid item sm={3}>
                  <img
                    src={viewProduct.images[0].originalSrc}
                    alt=""
                    className={classes.deskImg}
                  />
                </Grid>
                <Grid item sm={7} className={classes.type}>
                  <Typography variant="h5" className={classes.deskText}>
                    {viewProduct.title.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" className={classes.deskText}>
                    {viewProduct.description}
                  </Typography>
                  <Typography variant="h6" className={classes.deskText}>
                    £{viewProduct.variants[0].price}
                  </Typography>
                  <Typography variant="subtitle1">
                    Tags: {viewProduct.tags}
                  </Typography>
                </Grid>{" "}
              </>
            ) : null}
            <Grid item sm={2} className={classes.deskBtnsBox}>
              <Button
                size="small"
                color="primary"
                // onClick={() => {
                //   addToCart(viewProduct)
                // }}
                variant="contained"
                className={classes.deskBtns}
              >
                <ShoppingCartIcon />
              </Button>
              <Button
                size="small"
                color="primary"
                variant="contained"
                className={classes.deskBtns}
              >
                <ShareIcon />
              </Button>
            </Grid>
          </Grid>
        </Card>
      )} */}
    </>
  )
}

export default ViewProductComponent
