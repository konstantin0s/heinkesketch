import React, { Component } from 'react';
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
            <div className="grid">
       
                <ul className="ul">
        { this.state.beers.map(beer => <li
        className="li"
         key={beer.id}>


            <div className="cardo">
  <img className="card-img-top" src={beer.image_url} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{beer.name}</h5>
    <p className="card-text">{beer.description.slice(50, 100)}</p>
    <button className="btn btn-primary">{beer.tagline}</button>
  </div>
</div>


        </li>
         )}
    
      </ul>

            </div>
        )
    }
}

export default Beers;
