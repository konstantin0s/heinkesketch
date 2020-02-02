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

  <svg className="card__svg" viewBox="0 0 800 500">

<path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
<path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
</svg>

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
