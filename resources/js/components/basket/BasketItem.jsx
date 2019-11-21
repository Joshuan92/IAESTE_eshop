import React from "react";
import Trash from './../../../../public/img/trash-can-icon.png'

const BasketItem = props => {
    const { name, place, event_date, price, id, removeFromCart } = props;

    return (
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{name}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{price} CZK</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{place}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{event_date}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p>
                <img className="trash" id={id} data-id={id} src={Trash} alt={id} onClick={removeFromCart} />
              </p>
            </div>
        </div>
    );
};

export default BasketItem;
