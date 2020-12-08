import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import { makeStyles } from '@material-ui/core/styles';
import { 
	Card, 
	Grid, 
	Typography,
	Button
	 } from '@material-ui/core'

const useStyles = makeStyles({
	items: {
		padding: 10
	},
	title: {
		padding: '5px 0px 10px',
		backgroundColor: '#212121',
		color: 'white'
	},
	suitCard: {
		height: 270,
		margin: 5,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#e8e7e5'
	},
	cardTitle: {
		padding: 5,
	},
	itemContainer: {
		display: 'flex',
		flexDirection: 'row'
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 40
	},
	cardImg: {		
		width: '60%',
	},
	cardBtn: {
		height: 40,
		marginTop: 10,
		padding: 5,
		backgroundColor: 'white'
	},
	carouselGrid: {
		padding: '15px 1.5vw 15px .2vw'
	},
	carousel: {
		height: 555,
		width: 'auto'
	}
})

const SuitsDesktop = ({ productsSuits }) => {
	const classes = useStyles()

	return ( 
		<Grid container direction='row' style={{height: 640}}>
			<Grid item xs={12}>
				<Typography 
					align='center' 
					variant='h4'
					className={classes.title}
					>
					LATEST SUITS IN
				</Typography>
			</Grid>
			<Grid item sm={7} md={8} className={classes.items}>
				<Grid container item>
					{productsSuits.map((item, i) => (
						<Grid item sm={12} md={6} lg={4} key={i} style={{marginBottom: 5}}>
							<Card square className={classes.suitCard}>
								<Typography align='center' variant='h6' className={classes.cardTitle}>{item.title}</Typography>
								<div className={classes.itemContainer}>
									<img className={classes.cardImg} src={item.images[0].originalSrc} />
									<div className={classes.info}>
										<Typography>£{item.variants[0].price}</Typography>
										<Button variant='contained' className={classes.cardBtn}>SHOP NOW</Button>
									</div>
								</div>
							</Card>
					</Grid>
					))}				
				</Grid>
			</Grid>
			<Grid item sm={5} md={4} className={classes.carouselGrid}>
				<Card square>
				<Carousel			
				infiniteLoop
				autoPlay
				interval={4000}
				stopOnHover={true}
				showThumbs={false}
				showStatus={false}
				>
					{productsSuits.map((item, i) => (
						<img className={classes.carousel}  key={i} src={item.images[0].originalSrc} />
					))}
				</Carousel>
				</Card>
			</Grid>
		</Grid>
	 );
}

export default SuitsDesktop; 