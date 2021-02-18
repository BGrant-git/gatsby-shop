import React, { useContext, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"

import { StoreContext } from "../../context/context"

const useStyles = makeStyles({
  root: {},
  info: {
    padding: 20,
  },
  buttonsBox: {
    borderTop: "1px solid #DCDCDC",
    padding: "20px 0px 20px 20px",
  },
  checkoutBtn: {
    borderRadius: 0,
    height: 60,
  },
  clearBtn: {
    borderRadius: 0,
    width: 70,
    backgroundColor: "white",
  },
})

const CheckoutBox = () => {
  const classes = useStyles()

  const { cartItems, cartPrice } = useContext(StoreContext)

  const [cartItemsValue, setCartItemsValue] = cartItems
  const [cartPriceValue, setCartPriceValue] = cartPrice

  const clearCart = () => {
    setCartItemsValue([])
    setCartPriceValue(0)
  }

  useEffect(() => {
    if (cartItemsValue.length > 0) {
      setCartPriceValue(
        cartItemsValue
          .map(item => item.variants[0].price)
          .map(item => parseFloat(item))
          .reduce((acc, curr) => acc + curr)
      )
    }
  }, [cartItems])

  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <Typography variant="subtitle1">Total Items</Typography>
        <Typography variant="h4">
          {!!cartItemsValue ? cartItemsValue.length : null}
        </Typography>
        <Typography variant="subtitle1">Price</Typography>
        <Typography variant="h4">
          £{(Math.round(cartPriceValue * 100) / 100).toFixed(2)}
        </Typography>
      </div>
      <div className={classes.buttonsBox}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.checkoutBtn}
        >
          CHECKOUT
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.clearBtn}
          onClick={() => clearCart()}
        >
          CLEAR
        </Button>
      </div>
    </div>
  )
}

export default CheckoutBox
