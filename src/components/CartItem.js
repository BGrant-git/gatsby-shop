import { makeStyles, Typography, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react'


const useStyles = makeStyles({
	root: {
		overflow: 'hidden',
		border: '1px solid #dcdcdc',
		display: 'flex',
		marginBottom: '-1px'
	},
	infoContainer: {
		display: 'flex'
	},
	image: {
		height: 120
	},
	info: {
		padding: 5
	},
	qty: {

	},
	btns: {
		borderRadius: 0
	},
})

const CartItem = ({ element, addToCart }) => {
	const classes = useStyles()

	const[quantity, setQuantity] = useState(1)

	const incQuantity = () => {
		setQuantity(quantity + 1)
	}

	return (
			<Grid container 
				className={classes.root} 
				direction='row' 
				alignItems='center'>
				<Grid item xs={12} sm={8} className={classes.infoContainer}>
					<img src={element.img} className={classes.image} />
					<div className={classes.info}>
						<Typography variant='h6' className={classes.title}>
							{element.name}
						</Typography>
						<Typography>
							£{element.price}
						</Typography>
					</div>
				</Grid>
				<Grid item xs={5} sm={2} className={classes.qty} direction='column'>
					<Typography>
						QTY: {quantity}
					</Typography>
				</Grid>
				<Grid item xs={5} sm={2} direction='column'>
					<Button 
						variant='contained' 
						color='primary' 
						disableElevation 
						className={classes.btns} 
						onClick={() => {
							addToCart(element)
							incQuantity()
						}}
						>+</Button>
					<Button 
						variant='contained' 
						color='secondary' 
						disableElevation 
						className={classes.btns} 
						>-</Button>
				</Grid>
			</Grid>
	);
}

export default CartItem; 