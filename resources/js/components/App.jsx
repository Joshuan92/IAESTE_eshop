import React from 'react';
import Navbar from './Navbar.jsx';
import NewCarousel from './NewCarousel.jsx';
import Topbar from './Topbar.jsx';
import About from "./About.jsx";
import Testimonials from './Testimonials.jsx';
import Clients from './Clients.jsx';
import Footer from './Footer.jsx';
import CareerFair from './CareerFair.jsx';
import ReadMore from './ReadMore.jsx';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './../../sass/app.scss'; 


export default class App extends React.Component {
  render() {
    return (
      <Router
        basename={'/'}  >
           
        <Topbar />
        <Navbar />

        <Switch >
          <Route exact path='/'>
              <NewCarousel/>
              <About/>
              <Testimonials exact path='/' />
          </Route>

          <Route path='/career'>
              <CareerFair/>
          </Route>

          <Route path='/about' >
            <ReadMore />
          </Route>

          
        </Switch>
        
        <Footer />
      </Router>
    )
   
  }
}