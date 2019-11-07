import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import Mac from './../img/template-mac.png';
import Customize from './../img/template-easy-customize.png';
import Code from './../img/template-easy-code.png';


export default class Rollercaster extends React.Component {
  render() {
    return (
            <Carousel autoPlay>
                <div className="okno" >
                    <img src={ Mac }/>
                    <p className="legend">Legend 1</p>
                </div>
                <div className="okno">
                    <img src={ Customize } />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="okno">
                    <img src={ Code } />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          )
      }
  }
