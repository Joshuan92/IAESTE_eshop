import React from 'react';
import Intern1 from './../../../public/img/internship1.jpeg';
import Intern2 from './../../../public/img/internship2.jpeg';
import Intern3 from './../../../public/img/internship3.jpeg';
import Intern4 from './../../../public/img/internship4.jpeg';

import Slider from "react-slick";

export default class NewCarousel extends React.Component {
  render(){

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="intro-image">
        
      </div>
      )
    }
}