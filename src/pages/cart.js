import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

import Layout from "../layout/layout"
import CartItem from "../components/checkout/CartItem"
import CheckoutBox from "../components/checkout/CheckoutBox"

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
  title: {
    padding: 15,
  },
  itemsList: {
    marginBottom: 30,
    width: "100%",
    // marginLeft: '3vw',
    marginRight: -1,
  },
  checkoutBox: {
    border: "1px solid #DCDCDC",
    marginBottom: 20,
    minWidth: 150,
    height: 300,
    width: "100%",
  },
  empty: {
    border: "1px solid #DCDCDC",
    padding: "5px 20px",
  },
})

const Cart = ({ cart, cartPrice, clearCart, addToCart, removeFromCart }) => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs={12} className={classes.title}>
            <Typography variant="h4" align="center">
              CART
            </Typography>
          </Grid>
          <Grid item md={1} sm={false} style={{ marginRight: -35 }}></Grid>
          <Grid item md={8} sm={12} className={classes.itemsList}>
            {cart && cart.length > 0 ? (
              cart.map((item, i) => (
                <CartItem
                  addToCart={addToCart}
                  element={item}
                  removeFromCart={removeFromCart}
                  key={i}
                />
              ))
            ) : (
              <Typography variant="h5" className={classes.empty}>
                EMPTY!
              </Typography>
            )}
          </Grid>
          <Grid item md={3} sm={12} className={classes.checkoutBox}>
            <CheckoutBox
              cart={cart}
              cartPrice={cartPrice}
              clearCart={clearCart}
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Cart