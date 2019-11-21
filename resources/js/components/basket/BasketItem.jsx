import React from "react";
import Trash from './../../../../public/img/trash-can-icon.png';
import { useParams } from "react-router-dom";

const BasketItem = props => {
    const { item, removeFromCart } = props;

    return (
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p></p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{item.name}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{item.price} CZK</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{item.place}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>{item.event_date}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
              <p>
                <img className="trash" id={item.id} data-id={item.id} src={Trash} alt={item.id} onClick={removeFromCart} />
              </p>
            </div>
        </div>
    );
};

export default BasketItem;
