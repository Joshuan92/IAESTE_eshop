import React from "react";
import { Link } from "react-router-dom";

const SingleFair = props => {
    const {
        name,
        short_desription,
        place,
        event_date,
        price,
        id,
        setInCart
    } = props;

    const handleClick = () => {
        setInCart(prevState => {
            const item = {
                name,
                short_desription,
                place,
                event_date,
                price,
                id,
                quantity: 1
            };
            //is item in cart
            console.log("prevCart", prevState);
            const hasItem = !!prevState.find(oldItem => oldItem.id === item.id); // !! Means not-not - so it checks if it is true or not. So if it finds item it procedes to first if. If it doesnt it goes to else
            let newCart;
            if (hasItem) {
                newCart = prevState.reduce((acc, oldItem) => {       // reduce takes two arguments accumulator and prevValue
                    if (+oldItem.id === +item.id) oldItem.quantity += 1;
                    return acc.concat(oldItem); // plus+ before id just to be sure that both are numbers
                }, []);
            } else {
                newCart = prevState.concat(item);
            }
            return newCart;
        });
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
                    >
                        Add to cart
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
