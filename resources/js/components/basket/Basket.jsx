import React from "react";
import Layout from "./Layout.jsx";
import BasketItem from "./BasketItem.jsx";

const Basket = props => {
    const { inCart, removeFromCart } = props;

    const basketItem = inCart;

    console.log("basket", basketItem);

    let content = "";

    if (basketItem.length === null) {
        content = <div>Nothing in your shopping cart...</div>;
    } else {
        content = (
            <>
                <div className="container-fluid text-center d-lg-block">
                    <h1>Your picks</h1>
                    <Layout />
                    {basketItem.map(item => {
                        return (
                            <BasketItem
                                key={item.id}
                                name={item.name}
                                place={item.place}
                                price={item.price}
                                event_date={item.event_date}
                                removeFromCart={removeFromCart}
                            />
                        );
                    })}
                </div>
            </>
        );
    }

    return <>{content}</>;
};

export default Basket;
