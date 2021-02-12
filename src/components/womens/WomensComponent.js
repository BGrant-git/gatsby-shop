import React, { useContext } from "react"
import Grid from "@material-ui/core/Grid"

import { StoreContext } from "../../context/context"
import WomensClothesItems from "./WomensClothesItems"

const WomensComponent = () => {
  const { womensProducts } = useContext(StoreContext)
  const womensProductsValue = womensProducts

  return (
    <>
      {womensProductsValue[0].map((item, i) => (
        <Grid item md={4} sm={6} xs={12} key={i} style={{ marginBottom: 5 }}>
          <WomensClothesItems
            element={item}
            // addToCart={addToCart}
            // getViewProduct={getViewProduct}
          />
        </Grid>
      ))}
    </>
  )
}

export default WomensComponent
