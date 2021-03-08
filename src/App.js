import React from "react";
import Header from "./Components/Header/Header";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
         <Home></Home>
        </Route>
        <Route path='/country/:countryDetail'>
         <CountryDetail></CountryDetail>
        </Route>
        <Route path='/about'>
         <About></About>
        </Route>
        <Route path='/contact'>
         <Contact></Contact>
        </Route>
        <Route  path='*'>
          <h3>404 page not found.</h3>
        </Route>
      </Switch>
    </Router>
    
    </>
    
   
  );
}

export default App;
