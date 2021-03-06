import React, { useContext } from "react"
import { makeStyles, Typography, Button, Grid } from "@material-ui/core"

import { StoreContext } from "../../context/context"

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    border: "1px solid #dcdcdc",
    display: "flex",
    marginBottom: "-1px",
  },
  infoContainer: {
    display: "flex",
  },
  image: {
    height: 120,
  },
  info: {
    padding: 10,
  },
  btns: {
    borderRadius: 0,
  },
})

const CartItem = ({ element }) => {
  const classes = useStyles()

  const { cartItems } = useContext(StoreContext)

  const [cartItemsValue, setCartItemsValue] = cartItems

  const removeFromCart = event => {
    let hardCopy = [...cartItemsValue]
    hardCopy = hardCopy.filter(ele => ele.title !== event.title)
    setCartItemsValue(hardCopy)
  }

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      alignItems="center"
      justify="space-between"
    >
      <Grid item xs={12} sm={8} className={classes.infoContainer}>
        <img
          src={element.images[0].originalSrc}
          className={classes.image}
          alt=""
        />
        <div className={classes.info}>
          <Typography variant="h6" className={classes.title}>
            {element.title}
          </Typography>
          <Typography>£{element.variants[0].price}</Typography>
        </div>
      </Grid>
      <Grid item xs={5} sm={2} direction="column">
        <Button
          variant="contained"
          size="small"
          color="primary"
          disableElevation
          className={classes.btns}
          onClick={() => removeFromCart(element)}
        >
          remove
        </Button>
      </Grid>
    </Grid>
  )
}

export default CartItem
