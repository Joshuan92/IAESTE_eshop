import React, { useState, useEffect } from "react";
import SingleFair from "./SingleFair.jsx";
import { Router, Route, Switch } from "react-router-dom";
import FairDetail from "./FairDetail.jsx";
import { Button, ButtonGroup } from "reactstrap";
import history from "./../history.js";

const CareerFair = props => {
    const {
        fairs,
        setInCart,
        inCart,
        loading,
        postsPerPage,
        setPostsPerPage,
        sort,
        setSort,
        currentPage,
        setCurrentPage,
        lastPage
    } = props;

    useEffect(() => {
        console.log("post", postsPerPage);
    }, [postsPerPage]);
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    const handleBackBtn = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };
    const handleNextBtn = () => {
        setCurrentPage(Math.min(currentPage + 1, lastPage));
    };

    const handleAscending = () => {
        setSort("ASC");
    };

    const handleDescending = () => {
        setSort("DESC");
    };

    const onButtonClick = e => {
        setPostsPerPage(e.currentTarget.children[0].value)
        setCurrentPage(1);
    };

    let content = "";

    if (loading) {
        content = <div>Loading...</div>;
    } else {
        content = (
            <>
                <div className="container">
                    <h1>Career fairs</h1>

                    <Button
                        color="link"
                        value={sort}
                        onClick={handleAscending}
                    >
                        Ascending
                    </Button>

                    <Button
                        color="link"
                        value={sort}
                        onClick={handleDescending}
                    >
                        Descending
                    </Button>

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
                                                            setInCart={
                                                                setInCart
                                                            }
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </Route>
                            <Route exact path={`/react/career/:id`}>
                                <FairDetail
                                    fairs={fairs}
                                    setInCart={setInCart}
                                />
                            </Route>
                        </Switch>
                    </Router>
                    
                    <div className="button-group">
                    <div className="pagination">
                        <Button
                            color="link"
                            onClick={handleBackBtn}
                            id="backBtn"
                        >
                            Back
                        </Button>
                        <span style={{ paddingLeft: "2rem", paddingRight: "2rem", paddingTop: "0.5rem" }}>{currentPage}</span>
                        <Button 
                            color="link"
                            onClick={handleNextBtn}
                            id="nextBtn"
                        >
                            Next
                        </Button>
                    </div>
                        <ButtonGroup>
                            <Button color="link" onClick={onButtonClick}>
                                <li value="6">6</li>
                            </Button>
                            <Button color="link" onClick={onButtonClick}>
                                <li value="12">12</li>
                            </Button>
                            <Button color="link" onClick={onButtonClick}>
                                <li value="24">24</li>
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </>
        );
    }

    return <>{content}</>;
};

export default CareerFair;
