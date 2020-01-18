import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import Home from './components/Home';

 class App extends Component {



  render() {
    return (
     <Router>
      <div className="App">

<Header />
<Route exact path="/" component={Home} />
<Route path="/beers" component={Beers} />
<Route path="/randombeer" component={RandomBeer} />
</div>
       </Router>
    );
  }
}


export default App;