import React from 'react';
import rocket from './rocket.png';
import './css/footer.css'
import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

const bounceThat = keyframes`${bounceIn}`;
 
const BionceDiv = styled.div`
  animation: infinite 5s ${bounceThat};
`;

export default function Footer() {
    return (
        <div>
              <footer className="blog-footer">
              <BionceDiv className="toTop">
         <p>
         <a className="toTop" href="#masthead">
           <img src={rocket} alt="Rocket" />
               </a>
         </p>
                 </BionceDiv>
    
    
         <p> 
         HeinkeSketch &copy; Copyright 2020
       </p>
    </footer>

        </div>
    )
}