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
        {/* <div className="container p-50">
          <Slider {...settings} className="karussel">
              <div className="item d-flex"><img src={ Intern1 } alt="" className="img_fluid"/><h1 style={{color: '#fff' }}>Become our member today!</h1></div>
              
              <div className="item d-flex"><img src={ Intern2 }  alt="" className="img_fluid"/><h1>Have time of your life with IAESTE!</h1></div>
              
              <div className="item d-flex"><img src={ Intern3 }  alt="" className="img_fluid"/><h1>With IAESTE, you will never be alone!</h1></div>
              
              <div className="item d-flex"><img src={ Intern4 }  alt="" className="img_fluid"/><h1>IAESTE, experience for life.</h1></div>
          </Slider>
        </div> */}
      </div>
      )
    }
}