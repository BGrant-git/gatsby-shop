import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginTop: 5
  },
  media: {
    height: 400,
  },
  overlay: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    color: 'white',
    transform: 'translate(-50%, 50%)',
    border: '4px solid white',
    padding: '2px'
   }
  
})

const SaleBanner = () => {
  
  const classes = useStyles()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          title="Sale"
        />
        {!isMobile ? 
        <Typography 
          className={classes.overlay} 
          variant='h2'
          fontWeight="fontWeightBold"          
          >
            SALE ON NOW!
          </Typography>
          : <Typography 
          className={classes.overlay} 
          variant='h4'
          fontWeight="fontWeightBold"          
          >
            SALE!
          </Typography>
        }
        
      </CardActionArea>
    </Card>
  );
}

 
export default SaleBanner;