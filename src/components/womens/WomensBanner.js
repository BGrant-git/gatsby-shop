import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    borderRadius: 0,
    marginTop: 30,
  },
  media: {
    height: 100,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: "50%",
    color: "white",
    transform: "translate(-50%, 8%)",
    border: "4px solid white",
    paddingBottom: 5,
  },
})

const WomensBanner = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        {isMobile ? (
          <Typography className={classes.overlay} variant="h3">
            WOMEN'S
          </Typography>
        ) : (
          <Typography
            className={classes.overlay}
            variant="h2"
            fontWeight="fontWeightBold"
          >
            WOMEN'S
          </Typography>
        )}
      </CardActionArea>
    </Card>
  )
}

export default WomensBanner
