import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
    Grid, 
    Card, 
		CardMedia, 
		CardActionArea,
    Typography, 
    useMediaQuery, 
		Button
				} from '@material-ui/core'

import Suits from '../Components/Suits'

const useStyles = makeStyles({
  root: {
		margin: '10px 0px',

	},
	mobContainer: {
		margin: '7px 0px'
	},
	imgContainer: {
		minWidth: '100%',
		margin: '7px 0px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
  media: {
		height: 600,
		position: 'relative'
	},
	mediaDesk: {
		height: 250,
		width: '50%',
		paddingTop: 350
	},
  overlay: {
		position: 'absolute',
		left: '20%',
		top: '20%',
		transform: 'translate(-10%, 50%)',
		color: 'white',
	},
	overlayDesk: {
		position: 'absolute',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	overlayBtn: {
		border: '2px solid white',
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.3)'
		}
	},
	banner: {
		margin: '10px 0px',
		width: '100%',
		height: 110,
		background: 'url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/pastel-abstract-1-vesna-antic.jpg)',
		backgroundSize: '100%',
		color: 'white'
	},
	trendingCard: {
		padding: '0px 0px 10px 0px',
		margin: '7px 0px'
	},
	trendingTitle: {	
		padding: 7,	
		marginBottom: 10,
		backgroundColor: '#212121',
		color: 'white'
	},
	trendingImg: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: 120,
		height: 120,
		objectFit: 'cover',
		borderRadius: '75px'
	 },

})

const Home = ({ productsSuits, getViewProduct }) => {

  const classes = useStyles()
  const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

	const trendingItems = [{
		0: {
			"img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fee%2F18%2Fee181337ce131ae050e02dc903e0124b1aa1b2bd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
			"name": "Women's jumpers"
		},
		1: {
			"img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe4%2Fd6%2Fe4d692dc39d54a030c6ccfd205c1d552dc2cc189.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_blazerssuits_blazers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
			"name": "Men's suits"
		},
		2: {
			"img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F81%2F22%2F812251eb67d5cc7ea3b47e05ffeeba6958a75eff.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shoes_boots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
			"name": "Boots"
		},
		3: {
			"img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7d%2Fcc%2F7dcc8017a2e0ae5f82be6f87fc50a35eff2ad8e8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_party%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
			"name": "Sequined dresses"
		},
		4: {
			"img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F09%2Fff09c50339afb655f7f8cf5feb22d485012cfa55.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_sport_sportbras%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
			"name": "Sportswear"
		},
		5: {
			"img": 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F81%2F22%2F812251eb67d5cc7ea3b47e05ffeeba6958a75eff.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_shoes_boots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
			"name": "Boots again"
		}
	}]
	const trendingItemsMob = Object.entries(trendingItems[0]).slice(0,3)

  return (
		<Grid container direction='column' justify='left' className={classes.root}>

			<Grid item>
				{isMobile ?
					<Card square className={classes.mobContainer}>
						<CardMedia
							className={classes.media}
							image='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Ff5%2Fa8f50561b3ba5f411bc5fcd92d92a389e6e4c426.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'
							/>
							<div className={classes.overlay}>
								<Typography variant='h4' align='left'>SALE ON WOMEN'S JUMPERS</Typography>
								<Button className={classes.overlayBtn}>shop now</Button>
							</div>
					</Card>
				:
					<Card square className={classes.imgContainer}>						
						<CardMedia
						className={classes.mediaDesk}
						image='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Ff5%2Fa8f50561b3ba5f411bc5fcd92d92a389e6e4c426.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'
						/>
						<CardMedia
						className={classes.mediaDesk}
						image='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F8c%2F7b8cbf70d163a2fa88566ac9d0f8b13f5f6c0997.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_jumpers%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'
						/>
						<div className={classes.overlayDesk}>
							<Typography variant='h3' align='center'>SALE ON WOMEN'S JUMPERS</Typography>
							<Button 
								className={classes.overlayBtn}
								size='large'
								style={{width: 150}}
								>SHOP NOW</Button>
						</div>
					</Card>
				}
			</Grid>

			<Grid item container>
				<Card square className={classes.banner}>
					<CardActionArea>						
						<div>
							{isMobile ?
							<Typography align='center' variant='h4' style={{height:110,padding:10}}>
								LOREM IPSUM
							</Typography>
							:
							<div style={{padding:20}}>
								<Typography align='center' variant='h4'>LOREM IPSUM</Typography>
								<Typography align='center' variant='h6'>CLICK HERE</Typography>
							</div>
							}						
						</div>
					</CardActionArea>
				</Card>
			</Grid>

			<Grid item container>
				<Suits productsSuits={productsSuits} getViewProduct={getViewProduct} />
			</Grid>

			<Grid item container direction='row'>
				<Grid item xs={12}>
					<Card square className={classes.trendingCard}>
						<Typography
							className={classes.trendingTitle}
							variant='h5'
							align='center'
							>
								TRENDING ITEMS
							</Typography>
							<Grid container>
								{ isMobile ? 
									trendingItemsMob.map((item, i) => (
										<Grid key={i} item xs={4}>		
											<CardActionArea className={classes.trendingItem}>
												<img className={classes.trendingImg} src={item[1].img} alt="" />
												<Typography align='center' style={{fontWeight:'bold'}}>{item[1].name}</Typography>
											</CardActionArea>
										</Grid>
									))
								: 
								Object.entries(trendingItems[0]).map((item, i) => (
									<Grid key={i} item sm={2}>		
										<CardActionArea className={classes.trendingItem}>
											<img className={classes.trendingImg} src={item[1].img} alt="" />
											<Typography align='center'>{item[1].name}</Typography>
										</CardActionArea>
									</Grid>
								))
								}								
							</Grid>
						</Card>
					</Grid>
				</Grid>				

		</Grid>
  );
}


export default Home; 