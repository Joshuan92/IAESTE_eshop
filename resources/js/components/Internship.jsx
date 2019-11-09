import React from 'react';
import Intern1 from './../../../public/img/internship1.jpeg';
import Intern2 from './../../../public/img/internship2.jpeg';
import Intern3 from './../../../public/img/internship3.jpeg';
import Intern4 from './../../../public/img/internship4.jpeg';

import Slider from "react-slick";

export default class Internship extends React.Component {
  render(){
    
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }; 

    return (
          <div className="container">
       
            <div className="row portfolio-project">
              <div className="col-sm-8">
                <Slider {...settings}>
                    <div className="item"><img src={ Intern1 } alt="" className="img_fluid"/></div>
                    
                    <div className="item"><img src={ Intern2 }  alt="" className="img_fluid"/></div>
                    
                    <div className="item"><img src={ Intern3 }  alt="" className="img_fluid"/></div>
                    
                    <div className="item"><img src={ Intern4 }  alt="" className="img_fluid"/></div>
                </Slider>
              
              </div>
              
            <div className="col-sm-12">
              <div className="heading">
                <h3>Project description</h3>
                  </div>
                    <p>Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like.</p>
                    <p>To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.</p>
                </div>
          </div>
       </div>
    )
  }
}