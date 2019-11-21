import React from "react";
import { Link } from "react-router-dom";

const SingleFair = props => {
    const { name, short_desription, place, event_date, price, id, setInCart, setCount } = props;

    const handleClick = () => {
        const item = {
            name,
            short_desription,
            place,
            event_date,
            price,
            id
        };
        setInCart(prevState => prevState.concat(item));
        //setCount(prevState => ({count: prevState.price + 1}))
    };

    return (
        <div className="col-md-4 col-12 mb-4">
            <div className="card" style={{ width: "18rem", height: "30rem" }}>
                {/* <img src={img} className="card-img-top" alt={name} /> */}
                <div className="card-body">
                    <h2>{name}</h2>
                    <p className="card-text">{short_desription}</p>
                    <h3>{place}</h3>
                    <h3>{event_date}</h3>
                    <h3>{price} CZK</h3>
                    <button
                        className="form-control"
                        style={{ border: "1px solid blue", margin: "5px" }}
                        onClick={handleClick}
                    >Add to cart
                    </button>
                    <Link to={`/react/career/${id}`}>
                        <button
                            className="form-control"
                            style={{ border: "1px solid blue", margin: "5px" }}
                        >
                            More info
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFair;
