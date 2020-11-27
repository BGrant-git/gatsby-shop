import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, useMediaQuery } from '@material-ui/core'

import SuitsMob from './SuitsMob'
import SuitsTablet from './SuitsTablet'
import SuitsDesktop from './SuitsDesktop';

const useStyles = makeStyles({
	root: {
		margin: '7px 0px',
		borderRadius: 0,
		display: 'flex'
	}
})

const Suits = ({ productsSuits, getViewProduct }) => {
	const classes = useStyles()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
	const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	return (
		<Card className={classes.root}>
			{isMobile ? 
			<SuitsMob productsSuits={productsSuits} getViewProduct={getViewProduct}/>
			: null} 
			{isTablet && !isDesktop ? 
			<SuitsTablet productsSuits={productsSuits} />
			: null}
			{isDesktop ?
			<SuitsDesktop productsSuits={productsSuits} />
			: null}
		</Card>
	);
}

export default Suits ;