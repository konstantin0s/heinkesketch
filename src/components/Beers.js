import React, { Component } from 'react';
import Footer from './Footer';
import './css/beers.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Beers extends Component {

    state = {
        beers: []
      }

      componentDidMount() {
        axios.get(`https://api.punkapi.com/v2/beers`)
          .then(res => {
            const beers = res.data;
            this.setState({ beers });
          })
          .catch(err => console.log(err));
      }
    

    render() {
        console.log(this.state.beers);
        return (
            <div id="masthead" className="grid">
       
                <ul className="ul">
        { this.state.beers.map(beer => <li
        className="li"
         key={beer.id}>


            <div className="cardo">
  <img className="card-img-top" src={beer.image_url} alt="Cardcap" />

  <div className="card-body">
    <h5 className="card-title">{beer.name}</h5>
    <p className="card-text">{beer.description.slice(50, 100)}</p>
    <p>#{beer.tagline}</p>
    <span className="artLink">
        <Link className="btn btn-primary linkz" to={`/beer/${beer.id}`}>Read MORE...</Link></span>
  </div>
</div>


        </li>
         )}
    
      </ul>

      <Footer />
            </div>
        )
    }
}

export default Beers;
