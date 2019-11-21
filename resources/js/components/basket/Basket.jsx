import React from "react";
import Layout from "./Layout.jsx";
import BasketItem from "./BasketItem.jsx";

const Basket = props => {
    const { inCart, removeFromCart } = props;  

    let content = "";

    if (inCart.length === null) {
        content = <div>Nothing in your shopping cart...</div>;
    } else {
        content = (
            <>
                <div className="container-fluid text-center d-lg-block">
                    <h1>Your picks</h1>
                    <Layout />
                    {inCart.map(item => {
                        return (
                            <BasketItem
                                key={item.id}
                                item={item}
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
