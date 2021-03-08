import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Country.css'
import { Link } from 'react-router-dom';


const Country = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));

    const classes = useStyles();
    const {name, capital, flag, currencies } = props.country;
    return (
    <div className='my-card'> 
     <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={flag}
        title="Paella dish"
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capital: {capital}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Currency: {currencies[0].name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      <Link to={`/country/${name}`}>
        <Button size="small" color="primary">
          Country Details
        </Button>
      </Link> 
      </CardActions>
    </Card>
    </div> 
    );
};

export default Country;