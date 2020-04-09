import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { bounceInDown } from 'react-animations';
import { bounceInUp } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;
const bounceInx = keyframes`${bounceInDown}`;
const bounceAndUp = keyframes`${bounceInUp}`;
 
const BouncyDiv = styled.div`
  animation: infinite 5s ${bounceAnimation};
`;

const BounceDiv = styled.div`
  animation: infinite 3s ${bounceInx};
`;

const BouDiv = styled.div`
  animation: infinite 9s ${bounceAndUp};
`;


 class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="bird-container">

                    <div className="bird">
                    <BouncyDiv>
                    <Link className="link"
                     style={linkStyle} to="/randombeer" > Random Beer</Link>
                     </BouncyDiv>

                     <BounceDiv>
                    <Link className="link"
                     style={linkStyle} to="/randombeer" > Random Beer</Link>
                     </BounceDiv>

                     <BouDiv>
                    <Link className="link"
                     style={linkStyle} to="/randombeer" > Random Beer</Link>
                     </BouDiv>
                    
                    </div>
                </div>
        
            </div>
        )
    }
}


const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '20px',
    marginLeft: '20px'
}

export default Home;
