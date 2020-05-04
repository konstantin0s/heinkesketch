import React, { Component } from 'react';
import './css/random.css';
import Footer from './Footer';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
              <div className="cards phantom">
    
        
<Card key={beer.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Beer"
          height="140"
          image={beer.image_url}
          title="Contemplative Beer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {beer.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {beer.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {beer.first_brewed}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
    Combine with:  {beer.food_pairing} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        by {beer.contributed_by}
        </Button>
        <Button size="small" color="primary">
        # {beer.tagline}
        </Button>
      </CardActions>
    </Card>
          </div>
          <Footer />
            </div>
        )
    }
}
