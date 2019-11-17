import React, {useState} from "react";
import fairInfo from "./fairInfo.js";
import SingleFair from "./SingleFair.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FairDetail from "./FairDetail.jsx";

const CareerFair = () => {
        
        const [detail, setDetail] = useState([])
    

    
        return (
            <>
                <h1>Career fairs</h1>
                <section className="container">
                    <Router basename="/react/career">
                        <Switch>
                            <Route>
                                <div className="tables">
                                    <div className="row">
                                        {fairInfo.map(fair => {
                                            //console.log(fair);
                                            return (
                                                <Link to={fair.route}>
                                                    <SingleFair
                                                        key={fair.id}
                                                        name={fair.name}
                                                        //text={ fair.text }
                                                        venue={fair.venue}
                                                        date={fair.date}
                                                        img={fair.img}
                                                    />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Route>

                            {/* <Route exact path={fair.route}>
                                <FairDetail
                                    key={fair.id}
                                    name={fair.name}
                                    //text={ fair.text }
                                    venue={fair.venue}
                                    date={fair.date}
                                    img={fair.img}
                                />
                            </Route> */}
                        </Switch>
                    </Router>
                </section>
            </>
        );
    }


export default CareerFair