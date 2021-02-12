import React, { useState, useContext } from "react"
import Grid from "@material-ui/core/Grid"

import { StoreContext } from "../../context/context"
import MensClothesItem from "./MensClothesItem"

const MensComponent = () => {
  const { mensProducts, viewProduct } = useContext(StoreContext)

  return (
    <>
      {mensProducts &&
        mensProducts[0] &&
        mensProducts[0].map((item, i) => (
          <Grid item md={4} sm={6} xs={12} key={i} style={{ marginBottom: 5 }}>
            <MensClothesItem
              element={item}
              // addToCart={addToCart}
              getViewProduct={viewProduct}
            />
          </Grid>
        ))}
    </>
  )
}

export default MensComponent
