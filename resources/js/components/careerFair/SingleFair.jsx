import React from "react";

const SingleFair = props => {
    const { name, place, event_date, short_description } = props;

    return (
        <div className="col-md-4 col-12 mb-4">
            <div className="card" style={{ width: "18rem", height: "30rem" }}>
                {/* <img src={img} className="card-img-top" alt={name} /> */}
                <div className="card-body">
                    <h2>{name}</h2>
                    <p className="card-text">{short_description}</p>
                    <h3>{place}</h3>
                    <h3>{event_date}</h3>

                    <button
                        className="form-control"
                        style={{ border: "1px solid blue", margin: "5px" }}
                    >
                        More info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleFair;
