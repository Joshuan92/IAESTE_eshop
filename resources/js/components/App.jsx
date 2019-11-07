import React from 'react';
import Navbar from './Navbar.jsx';
import NewCarousel from './NewCarousel.jsx';
import Topbar from './Topbar.jsx';
import About from "./About.jsx";
import Testimonials from './Testimonials.jsx';
import Clients from './Clients.jsx';
import Footer from './Footer.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarieerFair from './CarierFairs.jsx';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Topbar       />
        <Navbar       />
        <HashRouter>

        <Route exact path="/carieer" component={ CarieerFairs } />
        </HashRouter>
        <NewCarousel  />
        <About        />
        <Testimonials />
        <Clients      />
        <Footer       />
      </>
    )
   
  }
}