import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

import { StoreContext } from "../context/context"
import CartItem from "../components/checkout/CartItem"
import CheckoutBox from "../components/checkout/CheckoutBox"

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
  },
  title: {
    padding: 15,
    marginTop: "20px",
  },
  itemsList: {
    marginBottom: 30,
    width: "100%",
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

const Cart = ({ cart, cartPrice, addToCart }) => {
  const classes = useStyles()

  const { cartItems } = useContext(StoreContext)

  const [cartItemsValue, setCartItemsValue] = cartItems

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" align="center">
            CART
          </Typography>
        </Grid>
        <Grid item md={1} sm={false} style={{ marginRight: -35 }}></Grid>
        <Grid item md={8} sm={12} className={classes.itemsList}>
          {cartItemsValue.length > 0 ? (
            cartItems[0].map((item, i) => (
              <CartItem addToCart={addToCart} element={item} key={i} />
            ))
          ) : (
            <Typography variant="h5" className={classes.empty}>
              EMPTY!
            </Typography>
          )}
        </Grid>
        <Grid item md={3} sm={12} className={classes.checkoutBox}>
          <CheckoutBox cart={cart} cartPrice={cartPrice} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Cart
