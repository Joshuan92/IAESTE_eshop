import React from "react";

const ResumeItem = (props) => {

    const {name, place, event_date, price} = props;

    return (
        <div className="col-md-4 col-12 mb-4">
            <div className="card" style={{ width: "18rem", height: "20rem" }}>
                <div className="card-body">
                    <h2>{name}</h2>
                    <h3>{place}</h3>
                    <h3>{event_date}</h3>
                    <h3>{price} CZK</h3>
                </div>
            </div>
        </div>
    );
};

export default ResumeItem;
