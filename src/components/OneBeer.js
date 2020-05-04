import React from 'react';
import { Link } from "react-router-dom";
// import './css/Gif.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './css/onebeer.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
    marginBottom: 30
  },
  media: {
    height: 160,
    backgroundSize: 'contain'
  },
});

 const OneBeer = (props) => {
    const classes = useStyles();

    return (

        //         <li
//         className="li"
//          key={beer.id}>


//             <div className="cardo">
//   <img className="card-img-top" src={beer.image_url} alt="Cardcap" />

//   <div className="card-body">
//     <h5 className="card-title">{beer.name}</h5>
//     <p className="card-text">{beer.description.slice(50, 100)}</p>
//     <p>#{beer.tagline}</p>
//     <span className="artLink">
//         <Link className="btn btn-primary linkz" to={`/beer/${beer.id}`}>Read MORE...</Link></span>
//   </div>
// </div>


//         </li>

        <div className="child-beer">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.beer.image_url}
            title="alabeer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.beer.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.beer.description.slice(50, 100)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link className="btn btn-primary linkz" to={`/beer/${props.beer.id}`}>Read MORE...</Link>
        
        </CardActions>
      </Card>
      </div>
    );
}


export default OneBeer;