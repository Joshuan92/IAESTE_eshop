import React from 'react';
import Expo from './../../../public/img/expo.jpg';
import Lisbon from './../../../../img/lisbon.jpg';
import Brussels from './../../../../img/brussels.jpg';


export default class Carousel extends React.Component {
  render(){
    return (
      <div id="slider">
          <div id="headerSlider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
          <li data-target="#headerSlider" data-slide-to="1"></li>
          <li data-target="#headerSlider" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src={ Expo } alt="First slide"/>
            <div className="carousel-caption">
              <h5>Become our partner</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src={ Lisbon } alt="Second slide"/>
            <div className="carousel-caption">
              <h5>Become our partner</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src={ Brussels } alt="Third slide"/>
            <div className="carousel-caption">
              <h5>Become our partner</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  </div>
    )
  }
}