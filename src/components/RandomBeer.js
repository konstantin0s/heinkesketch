import React, { Component } from 'react';
import axios from 'axios';
import './css/random.css';
import Footer from './Footer';

class RandomBeer extends Component {


    constructor(props) {
      super(props);

      this.state = {
        beerz: []
      }
    }

      componentDidMount() {

        axios.get(`https://api.punkapi.com/v2/beers`)
        .then(res => {
          const beers = res.data;
          // beers.map((beer) => {
          //  beersArray.push(beer);
          var randomIndex = Math.floor((Math.random() * 20) + 1);
          this.setState({ beerz: beers[randomIndex] });
          // console.log(beers);
        })
      
    
    }
    
    render() {

      console.log(this.state.beerz);
      const { beerz } = this.state;
        return (

  <div className="cards random">
    
               
      <div className="one-card" key={beerz.id}>
        <img className="card-img-top" src={beerz.image_url} alt="Cardcap" />
        <div className="card-body">
          <h5 className="card-title">{beerz.name}</h5>
          <p className="card-text">{beerz.description}</p>
          <p className="card-text">Borned: {beerz.first_brewed}</p>
          <p className="card-text"> Combine with: { ' '} {beerz.food_pairing} { ' '}
      
      </p>
          <p className="card-text">by {beerz.contributed_by}</p>
          <button className="btn btn-primary">#{beerz.tagline}</button>
  </div>
</div>
<Footer />
            </div>
        )
    }
}

export default RandomBeer;
