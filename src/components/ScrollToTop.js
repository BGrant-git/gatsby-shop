import React from 'react';
import { IconButton, Zoom } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const ScrollToTop = ({ scrollToTop, isVisible }) => {

	return ( 
		<div style={{display:'flex',justifyContent:'flex-end'}}>
      <Zoom in={isVisible}>
        <IconButton 
          variant='contained'
          onClick={() => scrollToTop()}
          style={{
            backgroundColor: '#f44336',
            width: 46,
            boxShadow: '2px 2px 5px 0px rgba(0, 0, 0, .4)',
            marginTop: -40
          }}
          color='primary'
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Zoom>
    </div>
	 );
}

export default ScrollToTop; 