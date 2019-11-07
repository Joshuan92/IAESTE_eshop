import React from 'react';

export default class Topbar extends React.Component {
  render(){
    return (
      <div className="top-bar">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 d-md-block d-none">
                <p>Contact us on +420 777 555 333 or hello@universal.com.</p>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-md-end justify-content-between">
                  <ul className="list-inline contact-info d-block d-md-none">
                    <li className="list-inline-item"><a href="#"><i className="fa fa-phone"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fa fa-envelope"></i></a></li>
                  </ul>
                  <div className="login"><a href="#" data-toggle="modal" data-target="#login-modal" className="login-btn"><i className="fa fa-sign-in"></i><span className="d-none d-md-inline-block">Sign In</span></a><a href="customer-register.html" className="signup-btn"><i className="fa fa-user"></i><span className="d-none d-md-inline-block">Sign Up</span></a></div>
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