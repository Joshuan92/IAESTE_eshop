import React from "react";
import Navbar from "./Navbar.jsx";
import NewCarousel from "./NewCarousel.jsx";
import Topbar from "./Topbar.jsx";
import About from "./about/About.jsx";
import Testimonials from "./Testimonials.jsx";
import Clients from "./clients/Clients.jsx";
import Footer from "./Footer.jsx";
import CareerFair from "./careerFair/CareerFair.jsx";
import ReadMore from "./ReadMore.jsx";
import Partnership from "./partnership/Partnership.jsx";
import Freshman from "./freshman/Freshman.jsx";
import Project from "./projectInfo/Project.jsx";
import Internship from "./Internship.jsx";
import Login from "./loginForm/Login.jsx";
import Navigation from "./Navigation.jsx";
import Event from "./event/Event.jsx";
import NewCompanyForm from "./companyForm/NewCompanyForm";
import UserForm from "./userForm/UserForm";
import ExistingCompanyForm from "./existingCompanyForm/ExistingCompanyForm";
import HooksForm from "./0_withHooks/HooksForm.jsx";
import UserRegistration from "./registerUser/UserRegistration.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./../../sass/app.scss";
import FairDetail from "./careerFair/FairDetail.jsx";

export default class App extends React.Component {
    render() {
        return (
            <Router basename={"/react"}>
                <Topbar />
                <Navigation />

                <Switch>
                    <Route exact path="/">
                        <NewCarousel />
                        <About />
                        <Testimonials />
                        <Clients />
                    </Route>

                    <Route path="/partnership">
                        <Partnership />
                    </Route>

                    <Route path="/career/:route">
                        <FairDetail />
                    </Route>

                    <Route path="/freshman">
                        <Freshman />
                    </Route>

                    <Route path="/career">
                        <CareerFair />
                    </Route>

                    <Route path="/events">
                        <Event />
                    </Route>

                    <Route path="/internship">
                        <Internship />
                    </Route>

                    <Route path="/about">
                        <ReadMore />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/existingCompanyForm">
                        <ExistingCompanyForm />
                    </Route>

                    <Route path="/projectinfo">
                        <Project />
                    </Route>

                    <Route path="/companyForm">
                        <NewCompanyForm />
                    </Route>

                    <Route path="/userForm">
                        <UserForm />
                    </Route>

                    <Route path="/user-registration">
                        <UserRegistration />
                    </Route>

                    <Route path="/hooks">
                        <HooksForm />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        );
    }
}
