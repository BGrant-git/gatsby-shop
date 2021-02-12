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

const MensBanner = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.gq.com/photos/5a04edcb03714b6ea9a91e1b/16:9/pass/hub-jeans2.png"
        />
        {isMobile ? (
          <Typography className={classes.overlay} variant="h3">
            MEN'S
          </Typography>
        ) : (
          <Typography
            className={classes.overlay}
            variant="h2"
            fontWeight="fontWeightBold"
          >
            MEN'S
          </Typography>
        )}
      </CardActionArea>
    </Card>
  )
}

export default MensBanner
