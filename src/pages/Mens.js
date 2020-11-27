import React from 'react';
import { Grid, Button } from '@material-ui/core/'

import MensBanner from '../Components/MensBanner'
import SortBy from '../Components/SortBy'
import MensClothesItem from '../Components/MensClothesItem'

const Mens = ({ productsMens, addToCart, getViewProduct }) => {

	return (
		<div>
			<Grid container direction='column'>
				<Grid item><MensBanner /></Grid>
				<Grid item><SortBy /></Grid>
				<Grid container>
					{productsMens.map((item, i) => (
						<Grid item md={4} sm={6} xs={12} key={i} style={{marginBottom: 5}}>
							<MensClothesItem 
								element={item}
								addToCart={addToCart}
								getViewProduct={getViewProduct}
								/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</div>
	)
}

export default Mens; 