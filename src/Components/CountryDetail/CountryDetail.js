import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const CountryDetail = () => {
    let {countryDetail} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url =`https://restcountries.eu/rest/v2/name/${countryDetail}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>  setCountry(data[0]))
    }, [countryDetail]);

   // console.log(country.currencies[0].name);
   
  // console.log(country.languages.nativeName);
    let money = "";
  if(country.currencies){
     money = country.currencies[0].name
  }
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
      
    return (
        <div>
     <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={country.flag}
        title="Paella dish"
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <h2>{country.name}</h2>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <strong>Capital:</strong>  {country.capital}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Population:</strong> {country.population}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Region: </strong> {country.region}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">

          <strong>Currency: </strong> {money} 
          </Typography>


        </CardContent>
      </CardActionArea>
      <CardActions>
    
      </CardActions>
    </Card>
        </div>
    );
};

export default CountryDetail;