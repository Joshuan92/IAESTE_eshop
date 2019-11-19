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
import Navigation from "./Navigation.jsx";
import Event from "./event/Event.jsx";
import NewCompanyForm from "./companyForm/NewCompanyForm";
import UserForm from "./userForm/UserForm";
import ExistingCompanyForm from "./existingCompanyForm/ExistingCompanyForm";
import UserRegistration from "./registerUser/UserRegistration.jsx";
import { Router, Switch, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import history from "./history.js";

import "./../../sass/app.scss";
import FairDetail from "./careerFair/FairDetail.jsx";
import LoginForm from "./loginForm/LoginForm.jsx";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            token: null,
            logged_in: null
        }
    }

    getToken = () => {
        return window.localStorage.getItem('_token');
    }

    setToken = (token) => {
        window.localStorage.setItem('_token', token);
    }
    
    render() {
        return (
            <Router history={history}>
                <Topbar />
                <Navigation />

                <Switch>
                    <Route exact path="/react">
                        <NewCarousel />
                        <About />
                        <Testimonials />
                        <Clients />
                    </Route>

                    <Route path="/react/partnership">
                        <Partnership />
                    </Route>

                    <Route path="/react/freshman">
                        <Freshman />
                    </Route>

                    <Route path="/react/career">
                        <CareerFair />
                    </Route>

                    <Route path="/react/events">
                        <Event />
                    </Route>

                    <Route path="/react/internship">
                        <Internship />
                    </Route>

                    <Route path="/react/about">
                        <ReadMore />
                    </Route>

                    <Route path="/react/login">
                        <LoginForm/>
                    </Route>

                    <Route path="/react/existingCompanyForm">
                        <ExistingCompanyForm />
                    </Route>

                    <Route path="/react/projectinfo">
                        <Project />
                    </Route>

                    <Route path="/react/companyForm">
                        <NewCompanyForm />
                    </Route>

                    <Route path="/react/userForm">
                        <UserForm />
                    </Route>

                    <Route path="/react/user-registration">
                        <UserRegistration />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        );
    }
}
