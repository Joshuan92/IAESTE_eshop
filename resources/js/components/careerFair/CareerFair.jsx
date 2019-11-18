import React, {useState, useEffect} from "react";
import fairInfo from "./fairInfo.js";
import SingleFair from "./SingleFair.jsx";
import { Router, Route, Switch, Link } from "react-router-dom";
import FairDetail from "./FairDetail.jsx";

import history from "./../history.js";

const CareerFair = () => {
        
        const [chosen, setChosen] = useState(1);

         useEffect(() => {
            console.log('chosen', chosen)
        }, [chosen]);

                
        return (
            <>
                <h1>Career fairs</h1>
                <section className="container">
                    <Router history={history}>
                        <Switch>
                            <Route exact path='/react/career'>
                                <div className="tables">
                                    <div className="row">

                                    
                                        {fairInfo.map(fair => {


                                            let url = `${fair.route}`;

                                            console.log(url);
                                            
                                            return (
                                                
                                                <Link to={`/react/career${url}`}>
                                                    <SingleFair
                                                        setChosen={setChosen}

                                                        key={fair.id}
                                                        id={fair.id}
                                                        name={fair.name}
                                                        text={ fair.text }
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

                            <Route exact path={`/react/career${fairInfo[chosen - 1].route}`}>
                                <FairDetail
                                    key={fairInfo[chosen - 1].id}
                                    id={fairInfo[chosen - 1].id}
                                    name={fairInfo[chosen - 1].name}
                                    //text={ fairInfo[chosen - 1].text }
                                    venue={fairInfo[chosen - 1].venue}
                                    date={fairInfo[chosen - 1].date}
                                    img={fairInfo[chosen - 1].img}
                                />
                            </Route>
                        </Switch>
                    </Router>
                </section>
            </>
        );
    }


export default CareerFair