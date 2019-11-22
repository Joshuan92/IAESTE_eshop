import React from "react";
import { useParams } from "react-router-dom";
//import { DateTime } from "luxon";

const FairDetail = props => {
    let { id } = useParams(); // params jsou všechny informace, které přišly na exact path
    let fair = props.fairs.filter(f => f.id == id)[0]; // mapujeme skrze fairs -–> filtrujeme - filter bere jako parametr funkci a jako argument v našem případě ID. Dvě rovnítka jsou proto, že dostáváme číslo na druhé straně je string.
    console.log(props.fairs);
    console.log(id);
    console.log('text',fair);
    const { name, place, event_date, short_description, price } = fair;

    const handleClick = () => {
        console.log('short', short_description)
        props.setInCart(prevState => {
            const item = {
                name,
                short_description,
                place,
                event_date,
                price,
                id,
                quantity: 1
            };
            //is item in cart
            console.log("prevCart", prevState);
            const hasItem = !!prevState.find(oldItem => oldItem.id === item.id);
            let newCart;
            if (hasItem) {
                newCart = prevState.reduce((acc, oldItem) => {
                    if (+oldItem.id == +item.id) oldItem.quantity += 1;
                    return acc.concat(oldItem);
                }, []);
            } else {
                newCart = prevState.concat(item);
            }
            return newCart;
        });
    };

    return (
        <div className="row center-block text-center">
            <div
                className="card center-block"
                style={{ width: "25rem", height: "25rem" }}
            >
                <div className="card-body">
                    <h2>{name}</h2>
                    <p>{short_description}</p>
                    <h3>{place}</h3>
                    <h3>{event_date}</h3>
                    <h3>{price} CZK</h3>
                    <button
                        className="form-control"
                        style={{ border: "1px solid blue", margin: "5px" }}
                        onClick={handleClick}
                    >
                        {" "}
                        {/* event as a parameter and product as an argument */}
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FairDetail;
