import React from 'react'
import Grid from '@material-ui/core/Grid'

import WomensBanner from '../Components/WomensBanner'
import SortBy from '../Components/SortBy'
import WomensClothesItems from '../Components/WomensClothesItems'



const Womens = ({ productsWomens, addToCart, getViewProduct }) => {

	return (
		<div>
			<Grid container direction='column'>
				<Grid item><WomensBanner /></Grid>
				<Grid item><SortBy /></Grid>
				<Grid container>
					{productsWomens.map((item, i) => (
						<Grid item md={4} sm={6} xs={12} key={i} style={{marginBottom: 5}}>
							<WomensClothesItems 
								addToCart={addToCart}
								element={item}
								getViewProduct={getViewProduct}
								/>
						</Grid>
					))}
					</Grid>
				</Grid>
		</div>
	)
}

export default Womens; 