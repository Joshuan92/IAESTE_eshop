import React, { useState, useEffect } from "react";
import SingleFair from "./SingleFair.jsx";
import { Router, Route, Switch } from "react-router-dom";
import FairDetail from "./FairDetail.jsx";

import history from "./../history.js";

const CareerFair = () => {
    const [fairs, setFairs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inCart, setInCart] = useState([]);

    useEffect(() => {
        fetch("/api/projects")
            .then(resp => resp.json())
            .then(data => {
                setFairs(data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log(inCart);
    }, [inCart]);

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
                                                <>
                                                    <SingleFair
                                                        key={fair.id}
                                                        id={fair.id}
                                                        name={fair.name}
                                                        text={
                                                            fair.short_description
                                                        }
                                                        venue={fair.place}
                                                        date={fair.event_date}
                                                        price={fair.price}
                                                        setInCart={setInCart}
                                                    />
                                                </>
                                            );
                                        })}
                                </div>
                            </div>
                        </Route>
                        <Route exact path={`/react/career/:id`}>
                            <FairDetail 
                            fairs={fairs}
                            setInCart={setInCart} />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }

    return <>{content}</>;
};

export default CareerFair;
