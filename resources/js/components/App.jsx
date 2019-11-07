import React from 'react';
import Navbar from './Navbar.jsx';
import NewCarousel from './NewCarousel.jsx';
import Topbar from './Topbar.jsx';
import About from "./About.jsx";
import Testimonials from './Testimonials.jsx';
import Clients from './Clients.jsx';
import Footer from './Footer.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './../../sass/app.scss'; 


export default class App extends React.Component {
  render() {
    return (
      <>
        <Topbar       />
        <Navbar       />
        
        <NewCarousel  />
        <About        />
        <Testimonials />
        <Clients      />
        <Footer       />
      </>
    )
   
  }
}