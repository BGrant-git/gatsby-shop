import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import Layout from "../layout/layout"
import DisplayResults from "../components/DisplayResults"

const useStyles = makeStyles({
  noResultsContainer: {
    height: 800,
    marginTop: -2,
  },
  root: {
    maxWidth: "100%",
    borderRadius: 0,
  },
  media: {
    height: 800,
  },
  overlay: {
    position: "absolute",
    top: "5%",
    left: "50%",
    color: "white",
    transform: "translate(-50%, 50%)",
    border: "8px solid white",
    padding: "2px",
    textAlign: "center",
  },
})

const Results = ({ results, addToCart }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          {results && results.length < 1 ? (
            <>
              <Grid container>
                <Grid item xs={12} className={classes.noResultsContainer}>
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media}
                      image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/empty-closet-shelves-psycho-shadow.jpg"
                      title="No Results"
                    />
                    <Typography
                      className={classes.overlay}
                      variant="h2"
                      fontWeight="fontWeightBold"
                    >
                      OH NO! NOTHING FOUND.
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Typography variant="body1">Search Results:</Typography>
              <Grid container direction="column">
                <Grid container>
                  {results
                    ? results.map((item, i) => (
                        <Grid item md={4} sm={6} xs={12} key={i}>
                          <DisplayResults
                            element={item}
                            addToCart={addToCart}
                          />
                        </Grid>
                      ))
                    : null}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  )
}
export default Results
