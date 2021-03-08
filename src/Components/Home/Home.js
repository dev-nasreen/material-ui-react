import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'


const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
       fetch(url)
       .then(res => res.json())
       .then(data =>{ const CountryNum = (data);
        const first20 = CountryNum.slice(0, 20);
        setCountries(first20)
        console.log(first20);
       })
       
    }, [])
    
  
    return (
        <div>
               
       <h1>Whole WORLD is in the below. </h1>
        <div className="country-container">
       {
          countries.map(country =><Country country={country}></Country> ) 
       }
        </div>
        </div>
  
    );
};

export default Home;