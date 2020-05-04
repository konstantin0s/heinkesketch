import React, { Component } from 'react';
import Footer from './Footer';
import './css/beers.css';
import axios from 'axios';
import OneBeer from './OneBeer';


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

      searchingFor = term => {
        return (x) =>  {
          return x.name.includes(term) || !term;
        }
      }
    
      jsUcfirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
      
    
    
      searchHandler =  event => {
        this.setState({term: 
        this.jsUcfirst(event.target.value)})
      }
    

    render() {
        console.log(this.state.beers);
        return (
            <div className="grid">

    <div className="container">
    <form>

        <input onChange={this.searchHandler} className="form-item input" type="text"
          placeholder="Search" aria-label="Search" />

              <div className="search">

              </div>

</form>
              </div>
       
                <ul className="ul">
        { this.state.beers.filter(this.searchingFor(this.state.term)).map(beer => 
        <OneBeer beer={beer} key={beer.id} />
         )}
    
      </ul>

      <Footer />
            </div>
        )
    }
}

export default Beers;
