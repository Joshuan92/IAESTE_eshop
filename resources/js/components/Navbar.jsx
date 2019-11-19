import React from 'react';
import Logo from './../../../public/img/iaeste_ikariera.png';

export default class Navbar extends React.Component {
  render(){
    return(
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to='/' className="navbar-brand"><img src={ Logo }/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
              <Link to='/events' className="nav-link">Events</Link>
              </li>      
              <li className="nav-item">
              <Link to='/career' className="nav-link">Career fairs</Link>
              </li>
              <li className="nav-item">
              <Link to='/internship' className="nav-link">Internships</Link>
              </li>
              <li className="nav-item">
              <Link to='/freshman' className="nav-link">Freshman guide</Link>
              </li>
              <li className="nav-item"> 
              <Link to='/partnership' className="nav-link">Partnership</Link>
              </li>
              <li className="nav-item">
              <Link to='/projectinfo' className="nav-link">Project information</Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </section>
    )
  }
  
  
}