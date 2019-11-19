import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Basket from './../../../public/images/shopping-basket-24.png';

export default class Topbar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 d-md-block d-none">
              <p>Contact us on +420 220 443 068 or vscht@iaeste.cz</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end justify-content-between">
                <ul className="list-inline contact-info d-block d-md-none">
  
                </ul>
                <div className="login">
                  <Link to='/react/login' className="login-btn">
                    <span className="d-md-inline-block">Sign In</span></Link>
                  <Link to='/react/existingCompanyForm' className="signup-btn">
                  <span className="d-md-inline-block">Sign Up</span></Link>
                  <span className="d-md-inline-block ml-20"><img src={Basket} alt=""/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}