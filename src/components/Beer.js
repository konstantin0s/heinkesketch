import React, { Component } from 'react';
import './css/random.css';
import Footer from './Footer';
import axios from 'axios';

export default class Beer extends Component {
constructor(props) {
    super(props);

    this.state = {
        beer: []
    }
}


componentDidMount() {

    const { params } = this.props.match;

    axios.get(`https://api.punkapi.com/v2/beers/${params.id}`)
    .then(res => {
      const beer = res.data[0];
      console.log(beer);
      this.setState({ beer });
    })
    .catch(err => console.log(err));
}


    render() {
        const {beer } = this.state;
        return (
            <div>
              <div className="cards random">
    
               
    <div className="one-card" key={beer.id}>
      <img className="card-img-top" src={beer.image_url} alt="Cardcap" />
      <div className="card-body">
        <h5 className="card-title">{beer.name}</h5>
        <p className="card-text">{beer.description}</p>
        <p className="card-text">Borned: {beer.first_brewed}</p>
        <p className="card-text"> Combine with: { ' '} {beer.food_pairing} { ' '}
    
    </p>
        <p className="card-text">by {beer.contributed_by}</p>
        <button className="btn btn-primary">#{beer.tagline}</button>
</div>
</div>
<Footer />
          </div>
            </div>
        )
    }
}
