import React, { useState, useEffect } from "react";
import SingleFair from "./SingleFair.jsx";
import { Router, Route, Switch, Link } from "react-router-dom";
import FairDetail from "./FairDetail.jsx";

import history from "./../history.js";

const CareerFair = () => {
    const [fairs, setFairs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/projects")
            .then(resp => resp.json())
            .then(data => {
                setFairs(data);
                setLoading(false);
            });
    }, []);

    //console.log("data", fairs);

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
                                            let url = `${fair.id}`;

                                            //console.log(url);

                                            return (
                                                <Link
                                                    to={`/react/career/${url}`}
                                                >
                                                    <SingleFair
                                                        key={fair.id}
                                                        id={fair.id}
                                                        name={fair.name}
                                                        text={
                                                            fair.short_description
                                                        }
                                                        venue={fair.place}
                                                        date={fair.event_date}
                                                    />
                                                </Link>
                                            );
                                        })}
                                </div>
                            </div>
                        </Route>
                        <Route exact path={`/react/career/:id`}>
                            <FairDetail fairs={fairs} />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }

    return (
        <>
            {content}
        </>
    );
};

export default CareerFair;
