import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

import CartItem from '../components/CartItem'
import CheckoutBox from '../Components/CheckoutBox'

// for qty could make a local state for qty in the item component then have
// another one for the price it outputs which would be its original price times
// the qty

const useStyles = makeStyles({
	daddy: {
		backgroundColor: 'white'
	},
	title: {
		padding: 15,
	},
	itemsList: {
		marginBottom: 30,
		width: '100%',
		marginLeft: '3vw'
	},
	checkoutBox: {
		border: '1px solid #DCDCDC',
		marginBottom: 20,
		marginLeft: '-1px',
		minWidth: 150,
		height: 300,
		width: '100%'
	},
	empty: {
		border: '1px solid #DCDCDC',
		padding: 5
	}
})

const Cart = ({ cart, cartPrice, clearCart, addToCart }) => {
	const classes = useStyles()

	const[price, setPrice] = useState(0)

	return (
		<div className={classes.daddy}>
			<Grid container direction='row'>
				<Grid item xs={12} className={classes.title}>
					<Typography variant='h4' align='center'>
						CART
					</Typography>
				</Grid>
				<Grid item md={8} sm={12} className={classes.itemsList}>
					{cart 
					? cart.map((item, i) => <CartItem addToCart={addToCart} element={item} key={i} />)
					: <Typography variant='h5' className={classes.empty}>EMPTY!</Typography>}

				</Grid>
				<Grid item md={3} sm={12} className={classes.checkoutBox}>
					<CheckoutBox 
						cart={cart} 
						cartPrice={cartPrice}
						clearCart={clearCart} 
						/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Cart; 