import React, { useContext } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { StoreContext } from "../../context/context"

const useStyles = makeStyles({
  root: {
    width: "110",
    height: "99%",
    margin: "5px 5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 350,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  cartBtn: {
    justifyContent: "flex-end",
  },
})

const MensClothesItem = ({ element }) => {
  const classes = useStyles()

  const { cartItems, viewProduct } = useContext(StoreContext)

  const [cartItemsValue, setCartItemsValue] = cartItems
  const [viewProductValue, setViewProductvalue] = viewProduct

  const cartButtonHandler = () => {
    setCartItemsValue([...cartItemsValue, element])
  }

  const onProductButtonHandler = () => {
    setViewProductvalue([element])
  }

  return (
    <Card square className={classes.root}>
      <Link
        to="/product"
        className={classes.link}
        onClick={() => onProductButtonHandler()}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={element.images[0].originalSrc}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {element.title}
            </Typography>
            <Typography variant="h6" color="textPrimary" component="p">
              £{element.variants[0].price}
            </Typography>

            <Typography variant="body2" color="textPrimary" component="p">
              Tags: {element.tags.map(item => `${item}, `)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.cartBtn}>
        <Button
          size="small"
          color="primary"
          onClick={() => cartButtonHandler()}
          variant="contained"
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default MensClothesItem
