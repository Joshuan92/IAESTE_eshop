import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Topbar extends React.Component {
  render(){
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
                    <li className="list-inline-item"><a href="#"><i className="fa fa-phone"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-envelope"></i></a></li>
                  </ul>
                  <div className="login">
                 <Link to='/login' className="login-btn"><i className="fa fa-sign-in"></i>
                  <span className="d-none d-md-inline-block">Sign In</span></Link>
                  <a href="#" className="signup-btn"><i className="fa fa-user"></i><span className="d-none d-md-inline-block">Sign Up</span></a></div>
                  <ul className="social-custom list-inline">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-envelope"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}