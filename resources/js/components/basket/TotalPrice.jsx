import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const TotalPrice = props => {
    const { totalPrice, loggedIn } = props;

    const [redirectState, setRedirectState] = useState(false);

    let content = "";

    const redirect = () => {
        if (loggedIn) {
            setRedirectState(<Redirect to="/react/basket/resume" />);
        } else {
            setRedirectState(<Redirect to="/react/login" />);
        }
    };

    return (
        <div className="row" style={{ margin: "10px" }}>
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>Total: {totalPrice()} CZK </p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <button className="btn btn-success" onClick={redirect}>
                    Finish order
                </button>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
            {content}
            {redirectState ? redirectState : null}
        </div>
    );
};

export default TotalPrice;
