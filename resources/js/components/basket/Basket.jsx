import React from "react";
import Layout from "./Layout.jsx";
import BasketItem from "./BasketItem.jsx";
import TotalPrice from "./TotalPrice.jsx";

const Basket = props => {
    const { inCart, setInCart, removeFromCart, totalPrice, loggedIn } = props;

    let content = "";

    const handleIncrement = (id) => {

        setInCart(inCart.map((item, i)=>{
            if(+item.id === +id){
                return Object.assign({}, item, {quantity: item.quantity + 1} );
            }

            return item;
        })
        )
    }

    const handleDecrement = (id) => {

        setInCart(inCart.map((item, i)=>{
            if(+item.id === +id){
                return Object.assign({}, item, {quantity: item.quantity - 1} );
            }

            return item;
        }).filter((item) => item.quantity > 0)
        )
    }

    if (inCart.length === null) {
        content = <div>Nothing in your shopping cart...</div>;
    } else {
        content = (
            <>
                <div className="container-fluid text-center d-lg-block">
                    <h1>Your picks</h1>
                    <Layout className="" />
                    {inCart.map(item => {
                        return (
                            <BasketItem
                                key={item.id}
                                item={item}
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                                removeFromCart={removeFromCart}
                            />
                        );
                    })}
                    <TotalPrice totalPrice={totalPrice}
                    loggedIn={loggedIn} />
                </div>
            </>
        );
    }

    return <>{content}</>;
};

export default Basket;
