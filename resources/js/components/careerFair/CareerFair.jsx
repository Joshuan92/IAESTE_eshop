import React, { useState, useEffect } from "react";
import SingleFair from "./SingleFair.jsx";
import { Router, Route, Switch } from "react-router-dom";
import FairDetail from "./FairDetail.jsx";
//import useLocalStorage from "./../useLocalStorage";

import history from "./../history.js";

const CareerFair = props => {
    const { fairs, setInCart, inCart, loading } = props;

    console.log("incart", inCart);

    const [count, setCount] = useState(0);

    let pagination = "";
    let content = "";

    if (loading) {
        content = <div>Loading...</div>;
    } else {
        content = (
            <>
                <section className="container">
                    <h1>Career fairs</h1>
                </section>

                <Router history={history}>
                    <Switch>
                        <Route exact path="/react/career">
                            <div className="tables">
                                <div className="row">
                                    {fairs.length &&
                                        fairs.map(fair => {
                                            return (
                                                <div key={fair.id}>
                                                    <SingleFair
                                                        id={fair.id}
                                                        name={fair.name}
                                                        short_description={
                                                            fair.short_description
                                                        }
                                                        place={fair.place}
                                                        event_date={
                                                            fair.event_date
                                                        }
                                                        price={fair.price}
                                                        setInCart={setInCart}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </Route>
                        <Route exact path={`/react/career/:id`}>
                            <FairDetail fairs={fairs} setInCart={setInCart} />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }

    return <>{content}</>;
};

export default CareerFair;
