import React from "react";

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
                <p></p>
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
