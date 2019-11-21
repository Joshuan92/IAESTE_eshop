import React, { useState, useEffect } from "react";
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
import ExistingCompanyForm from "./existingCompanyForm/ExistingCompanyForm";
import UserRegistration from "./registerUser/UserRegistration.jsx";
import { Router, Switch, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import history from "./history.js";
import Basket from "./basket/Basket.jsx";
import useLocalStorage from "./useLocalStorage";

import "./../../sass/app.scss";
import LoginForm from "./loginForm/LoginForm.jsx";

const App = () => {
    const [fairs, setFairs] = useState([]);

    const [token, setToken] = useState(null);
    const [loggedIn, setLoggedIn] = useState(null);
    const [loading, setLoading] = useState(true);
    const [inCart, setInCart] = useLocalStorage("basket", []);
    const [newCart, setNewCart] = useState();


    useEffect(() => {
        fetch("/api/projects")
            .then(resp => resp.json())
            .then(data => {
                setFairs(data);
                setLoading(false);
            });
    }, []);

    const removeFromCart = e => {

        let item = [];


        for (let i = 0; i < inCart.length; i++)
        {
            item = inCart.filter(f => f.id != e.target.dataset.id);

        }
        console.log('item', item);
        async function save(ITEM){

            await setNewCart(ITEM);
            console.log('haf');
            

        }

        save(item);
        
        console.log('newCart', newCart);
        
        

    };

    useEffect(() => {}, [inCart]);

    useEffect(() => {
        setLoading(true);
    }, []);

    /*   useEffect(() => {
        console.log(count);
    }, [count]); */

    /*  getToken = () => {
        return window.localStorage.getItem('_token');
    }

    setToken = (token) => {
        window.localStorage.setItem('_token', token);
    } */

    return (
        <>
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
                        <CareerFair
                            fairs={fairs}
                            setInCart={setInCart}
                            inCart={inCart}
                            loading={loading}

                        />
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
                        <LoginForm />
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
                        <UserRegistration />
                    </Route>

                    <Route path="/react/basket">
                        <Basket
                            removeFromCart={removeFromCart}
                            inCart={inCart}
                        />
                    </Route>

                    <Route path="/react/user-registration">
                        <UserRegistration />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </>
    );
};

export default App;
