import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

import SortBy from './SortBy'

const useStyles = makeStyles(() => ({
	root: {
		marginBottom: -5,
		marginTop: 1
	},
	search: {
		margin: '10px 0px',
		width: '100%'
	}
}))

const SearchBar = ({ handleChange }) => {

	const classes = useStyles()

	return ( 
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={false} sm={3}></Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						className={classes.search}
						id="outlined-textarea"
						label="SEARCH"
						multiline
						variant="standard"
						onChange={handleChange}
					/>		
				</Grid>
				<Grid item xs={12} sm={4}>
					<SortBy />
				</Grid>
				<Grid item xs={false} sm={1}></Grid>
			</Grid>
		</div>
	);
}
 
export default SearchBar;

