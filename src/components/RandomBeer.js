import React, { Component } from 'react';
import axios from 'axios';

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
          let beersArray = [];
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
        return (
    
               <div className="cards random">
    
               
                     <div className="one-card" key={this.state.beerz.id}>
  <img className="card-img-top" src={this.state.beerz.image_url} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{this.state.beerz.name}</h5>
    <p className="card-text">{this.state.beerz.description}</p>
    <button className="btn btn-primary">{this.state.beerz.tagline}</button>
  </div>
</div>

            </div>
        )
    }
}

export default RandomBeer;
