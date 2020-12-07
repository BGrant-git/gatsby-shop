import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		
	},
	info: {
		padding: 20
	},
	buttonsBox: {
		borderTop: '1px solid #DCDCDC',
		padding: '20px 0px 20px 20px'
	},
	checkoutBtn: {
		borderRadius: 0,
		height: 60
	},
	clearBtn: {
		borderRadius: 0,
		width: 70,
		backgroundColor: 'white'
	}
})

const CheckoutBox = ({ cart, cartPrice, clearCart }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.info}>
				<Typography variant='subtitle1'>Total Items</Typography>
				<Typography variant='h4'>{cart.length}</Typography>
				<Typography variant='subtitle1'>Price</Typography>
				<Typography variant='h4'>£{(Math.round(cartPrice*100)/100).toFixed(2)}</Typography>
			</div>
			<div className={classes.buttonsBox}>
				<Button 
					variant="contained" 
					color="primary" 
					disableElevation 
					className={classes.checkoutBtn}>
					CHECKOUT
				</Button>
				<Button 
					variant="contained" 
					color="secondary" 
					disableElevation 
					className={classes.clearBtn}
					onClick={() => clearCart()}
					>
					CLEAR
				</Button>
			</div>
		</div>
	);
}

export default CheckoutBox; 