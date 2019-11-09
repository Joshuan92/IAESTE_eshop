import React from 'react';
import Navbar from './Navbar.jsx';
import NewCarousel from './NewCarousel.jsx';
import Topbar from './Topbar.jsx';
import About from "./../components/about/About.jsx";
import Testimonials from './Testimonials.jsx';
import Clients from './../components/clients/Clients.jsx';
import Footer from './Footer.jsx';
import CareerFair from './../components/careerFair/CareerFair.jsx';
import ReadMore from './ReadMore.jsx';
import Partnership from './../components/partnership/Partnership.jsx';
import Freshman from './../components/freshman/Freshman.jsx';
import Internship from './Internship.jsx';
import Event from './../components/event/Event.jsx';
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
              <Testimonials />
              <Clients />
          </Route>

          <Route path='/partnership'>
              <Partnership/>
          </Route>

          <Route path='/freshman'>
              <Freshman />
          </Route>
      
          <Route path='/career'>
              <CareerFair/>
          </Route>

          <Route path='/events'>
              <Event />
          </Route>

          <Route path='/internship'>
              <Internship />
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