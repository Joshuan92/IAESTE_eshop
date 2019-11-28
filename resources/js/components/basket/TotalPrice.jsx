import React from "react";
import {Link} from "react-router-dom";

const TotalPrice = props => {
    const { totalPrice } = props;

    return (
        <div className="row ">
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
                <Link to="/react/basket/resume">
                    <button className="btn btn-success">Finish order</button>
                </Link>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
        </div>
    );
};

export default TotalPrice;
