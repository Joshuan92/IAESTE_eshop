import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Basket from "./../../../public/img/shopping-basket-24.png";

const Topbar = props => {
    const { totalCount, token, loggedIn, setLoggedIn } = props;

    let datetime = new Date().toISOString();

    let token_timestamp = ''

    if(token){

        token_timestamp = JSON.parse(token).token_timestamp;

    }

    

    let loginBtns = ""

    console.log(loggedIn);
    

    if (loggedIn && datetime < token_timestamp)
    {

        loginBtns =
            <div className="login">
                <Link to="/react/login" className="login-btn">
                    <span className="d-md-inline-block">
                        Your profile
                    </span>
                </Link>
                <Link
                    to="/react/signUp"
                    className="signup-btn"
                >
                    <span className="d-md-inline-block">
                        Logout
                    </span>
                </Link>
                <Link to="/react/basket" className="basket">
                    <img src={Basket} alt="" />
                    <span className="d-md-inline-block ml-20">
                        <div className="totalCount">
                            <div>{totalCount()}</div>
                        </div>
                    </span>
                </Link>
            </div>



    }
    else
    {
        loginBtns = 
            <div className="login">
                <Link to="/react/login" className="login-btn">
                    <span className="d-md-inline-block">
                        Sign In
                    </span>
                </Link>
                <Link
                    to="/react/signUp"
                    className="signup-btn"
                >
                    <span className="d-md-inline-block">
                        Sign Up
                    </span>
                </Link>
                <Link to="/react/basket" className="basket">
                    <img src={Basket} alt="" />
                    <span className="d-md-inline-block ml-20">
                        <div className="totalCount">
                            <div>{totalCount()}</div>
                        </div>
                    </span>
                </Link>
            </div>

        setLoggedIn(false);

        
        
    }


    return (
        <div className="top-bar">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 d-md-block d-none">
                        <p>Contact us on +420 220 443 068 or iaeste@iaeste.cz</p>
                    </div>
                    <div className="col-md-6 right">
                        <div className="d-flex justify-content-md-end justify-content-between">
                            <ul className="list-inline contact-info d-block d-md-none"></ul>
                            {loginBtns}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
