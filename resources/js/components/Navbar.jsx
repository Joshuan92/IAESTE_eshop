import React from 'react';
import Logo from './../../../public/img/iaeste_ikariera.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Navbar extends React.Component {
  render(){
    return(
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#"><img src={ Logo }/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Careers Fairs</a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#interships">Internships</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="freshman.html">Freshman Guide</a>
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="partnerships.html">Partnerships</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="project_info.html">Project Information</a>
              </li>
              <li>
                <button type="button" className="btn btn-primary">Sign in</button>
              </li>
              <li>
                <button type="button" className="btn btn-primary">Register</button>
              </li>
              </ul>
            
          </div>
        </nav>
      </section>
    )
  }
  
  
}