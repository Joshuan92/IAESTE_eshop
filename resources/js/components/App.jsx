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
import SignUpNavigation from "./SignUpNavigation/SignUpNavigation";
import { Router, Switch, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserInformationPage from './registerUser/UserInformationPage.jsx'
import history from "./history.js";
import Basket from "./basket/Basket.jsx";
import useLocalStorage from "./useLocalStorage";
import UserRegistrationForNewCompany from "./companyForm/UserRegistrationForNewCompany.jsx"
import Page404 from "./Page404.jsx"

import Logout from "./Logout.jsx"

import "./../../sass/app.scss";
import LoginForm from "./loginForm/LoginForm.jsx";
import UserRegistrationRouter from "./registerUser/UserRegisterRouter.jsx";

const App = () => {
    const [fairs, setFairs] = useState([]);
    const [loginData, setLoginData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [inCart, setInCart] = useLocalStorage("basket", []);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [sort, setSort] = useState("ASC");
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState();


    const [loggedIn, setLoggedIn] = useState(null);
    const [token, setToken] = useState(false);


    useEffect(()=>{

        setToken (()=>{
      
            return window.localStorage.getItem('_token');
        
        })

    }, [loggedIn])
    

    let url = `/api/projects?per_page=${postsPerPage}&page=${currentPage}&sort=${sort}`;

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setFairs(data.data);
                setLastPage(data.last_page)
                setLoading(false);
            });
    }, [postsPerPage, sort, currentPage]);

    const totalCount = () => {
        let countOfItems = inCart.length;

        return countOfItems;
    };

    const totalPrice = () => {
        let totalPrice = 0;

        for (let i = 0; i < inCart.length; i++) {
            totalPrice += inCart[i].price * inCart[i].quantity;
        }
        return totalPrice;
    };

    const removeFromCart = e => {
        const clickedItemID = e.target.id;

        const filterItem = item => clickedItemID != item.id;

        setInCart(prevCart => prevCart.filter(filterItem));
    };

    useEffect(() => {}, [inCart]);

    useEffect(() => {
        setLoading(true);
    }, []);

    // getToken = () => {
    //     return window.localStorage.getItem('_token');
    // }



    return (
        <>
            <Router history={history}>
                <Topbar 
                    totalCount={totalCount}
                    token={token} 
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                 />
                <Navigation />
                {/* <Page404/> */}


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
                            postsPerPage={postsPerPage}
                            setPostsPerPage={setPostsPerPage}
                            sort={sort}
                            setSort={setSort}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            lastPage={lastPage}
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
                        <LoginForm
                        loginData={loginData} 
                        setLoginData={setLoginData}
                        setLoggedIn={setLoggedIn}
                         />
                    </Route>

                    <Route path="/react/signUp">
                        <SignUpNavigation />
                    </Route>

                    <Route path="/react/projectinfo">
                        <Project />
                    </Route>

                    <Route path="/react/company-registration-form">
                        <NewCompanyForm />
                    </Route>

                    <Route path="/react/new-company/user-registration">
                        <UserRegistrationForNewCompany
                            setLoggedIn={setLoggedIn}


                         />
                    </Route>

                    <Route path="/react/userform">
                        <UserRegistrationRouter
                            
                            setLoggedIn={setLoggedIn}
                        
                        />
                    </Route>

                    <Route exact path="/react/user-information-page" component={UserInformationPage}>
                       
                    </Route>

                    <Route path="/react/basket">
                        <Basket
                            removeFromCart={removeFromCart}
                            inCart={inCart}
                            setInCart={setInCart}
                            totalPrice={totalPrice}
                        />
                    </Route>

                    <Route path="/react/basket">
                        <Basket
                            removeFromCart={removeFromCart}
                            inCart={inCart}
                            setInCart={setInCart}
                            totalPrice={totalPrice}
                        />
                    </Route>


                    
                </Switch>

                <Footer />
            </Router>
        </>
    );
};

export default App;
