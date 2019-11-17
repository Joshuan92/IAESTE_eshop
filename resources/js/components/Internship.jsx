import React from 'react';
import InternKar from './InternKar.jsx'

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
              <InternKar />
              
              </div>
              
            <div className="col-sm-12">
              <div className="heading">
                <h3>Project description</h3>
                  </div>
                    <p>Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like.</p>
                    <p>To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.</p>
                </div>
          </div>
       
    )
  }
}