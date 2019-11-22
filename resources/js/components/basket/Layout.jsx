import React from "react";

const Layout = () => {
    return (
        <div className="row ">
            <div className="col-10 mx-auto col-lg-2">
                <p>Name of product</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>Price</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>Venue</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>Date</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>Remove</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>Quantity</p>
            </div>
        </div>
    );
};

export default Layout;
