import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Typography, Popover, IconButton, InputBase } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
	},
	searchBtn: {
		color: 'white',
		marginRight: -10,
		marginTop: 4
	},
	searchIcon: {
		fontWeight: 'bold'
	},
	popover: {
		width: '100%',
	}
}));

const MobileSearch = ({ handleSearchChange, getAppBarSearch, handleEnter }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <SearchIcon className={classes.searchBtn} onClick={handleClick}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
				}}
				anchorPosition={{left: 0, top: 0}}
				className={classes.popover}
      >				
        <form onSubmit={handleEnter}>
          <NavLink to='/results'>
            <IconButton onClick={() => {getAppBarSearch()}}><SearchIcon /></IconButton>
          </NavLink>
          <InputBase onChange={handleSearchChange} />            
        </form>				
      </Popover>
    </div>
  );
}

export default MobileSearch 