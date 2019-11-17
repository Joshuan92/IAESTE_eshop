import React from 'react';
import InternKar from './InternKar.jsx'

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
        <InternKar />
      </div>
      )
    }
}