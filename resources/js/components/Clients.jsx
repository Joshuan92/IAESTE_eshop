import React from 'react';
import Cust1 from './../img/customer-1.png';
import Cust2 from './../img/customer-2.png';
import Cust3 from './../img/customer-3.png';
import Cust4 from './../img/customer-4.png';
import Cust5 from './../img/customer-5.png';
import Cust6 from './../img/customer-6.png';

export default class Clients extends React.Component {
  render(){
    return (
      <section className="bar bg-gray">
        <div className="container">
          <div className="heading text-center">
            <h2>Our Partners</h2>
          </div>
          <div className="partners">

            <div className="row party">
              <a className="item col-md-2 col-sm-12"><img src={ Cust1 } alt="" className="fluid"/></a>
              <a className="item col-md-2 col-sm-12"><img src={ Cust2 } alt="" className="fluid"/></a>
              <a className="item col-md-2 col-sm-12"><img src={ Cust3 } alt="" className="fluid"/></a>
              <a className="item col-md-2 col-sm-12"><img src={ Cust4 } alt="" className="fluid"/></a>
              <a className="item col-md-2 col-sm-12"><img src={ Cust5 } alt="" className="fluid"/></a>
              <a className="item col-md-2 col-sm-12"><img src={ Cust6 } alt="" className="fluid"/></a>
            </div>
          </div>
        </div>
      </section>
      )
    }
  }

