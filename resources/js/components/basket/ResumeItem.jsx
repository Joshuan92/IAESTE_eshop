import React from "react";

const ResumeItem = props => {
    const { name, place, event_date, price } = props;

    return (
        <div className="col-md-4 col-12 mb-4">
            <div className="card" style={{ width: "10rem", height: "12rem" }}>
                <div className="card-body">
                    <p>{name}</p>
                    <p>{place}</p>
                    <p>{price} CZK</p>
                </div>
            </div>
        </div>
    );
};

export default ResumeItem;
