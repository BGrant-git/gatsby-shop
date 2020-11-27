import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
		maxWidth: '100%',
		margin: '20px 0px'
  },
  media: {
    height: 300,
  },
});

const Filler = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://gcn.ie/wp-content/uploads/2019/05/make-change-help-planet-slow-fashion.jpg"
					title="Very Yes"
        />
      </CardActionArea>
    </Card>
  );
}

export default Filler