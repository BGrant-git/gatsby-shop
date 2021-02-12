import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core/'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 5,
    marginTop: 5
  },
  icons: {
    textAlign: 'center',
    paddingTop: 8
  },
  title: {
		flexGrow: 1,
    textAlign: 'center',
    textAlign: 'center'
  },
  listItem: {
    padding: 10
  }
}));

const Footer = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: 'none'}}>
        <Toolbar>
          <Grid container direction='column'>   
            <Grid container direction='row' style={{paddingTop:15}}>
              <Grid xs={12} sm={6} md={3}>
                <Typography variant='h5' className={classes.listItem}>ABOUT <span style={{color:'red'}}>US</span></Typography>
                <Typography variant='body1' className={classes.listItem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum optio corrupti possimus, dolorem quod aut dolor numquam!</Typography>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Typography variant='h5' className={classes.listItem}>OUR <span style={{color:'red'}}>LOCATIONS</span></Typography>
                <ul>
                  <li><Typography>Lorem</Typography></li>
                  <li><Typography>Ipsum</Typography></li>
                  <li><Typography>Dolor</Typography></li>
                </ul>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Typography variant='h5' className={classes.listItem}>LOREM <span style={{color:'red'}}>IPSUM</span></Typography>
                <ul>
                  <li><Typography>Lorem</Typography></li>
                  <li><Typography>Ipsum</Typography></li>
                  <li><Typography>Dolor</Typography></li>
                </ul>
              </Grid>
              <Grid xs={12} sm={6} md={3}>
                <Typography 
                  variant='h5' 
                  className={classes.listItem}>
                    CONTACT <span style={{color:'red'}}>US</span>
                </Typography>
                <Grid container direction='column' style={{padding: '15px 10px 0px 5px'}}>
                  <Grid item container direction='row' style={{paddingBottom:10}}>
                    <HomeWorkIcon />
                    <Typography style={{paddingLeft:10}}>
                      <strong>Company Name</strong><br />
                      123 Street Road<br />
                      City, AB1 2CD
                    </Typography>
                  </Grid>
                  <Grid item container direction='row' style={{paddingBottom:10}}>
                    <PhoneIcon />
                    <Typography style={{paddingLeft:10}}>07123456789</Typography>
                  </Grid>
                  <Grid item container direction='row' style={{paddingBottom:10}}>
                    <EmailIcon />
                    <Typography style={{paddingLeft:10}}>company@email.com</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction='column'>
              <Grid item className={classes.icons}>
                <a href='#' style={{color:'white'}}>
                  <FacebookIcon fontSize='large' />
                </a>
                <a href='#' style={{color:'white'}}>
                  <LinkedInIcon fontSize='large' />
                </a>
                <a href='#' style={{color:'white'}}>
                  <InstagramIcon fontSize='large' />
                </a>
                <a href='#' style={{color:'white'}}>
                  <TwitterIcon fontSize='large' />
                </a>     
              </Grid>
              <Grid item>      
                <Typography variant="body2" className={classes.title}>
                  Made by Ben G 2020<br />
                  All products are fabricated and info from H&M
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    )
  }

export default Footer