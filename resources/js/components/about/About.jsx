import React from "react";
import { Link } from "react-router-dom";
import Scale from "./Scale.jsx";
import dataScale from "./dataScale.js";

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-content">
                                {" "}
                                IAESTE Czech Republic is a member of IAESTE
                                a.s.b.l., an independent, non-for-profit
                                organisation registered in Luxembourg, which was
                                founded in 1948 and currently operates at least
                                in 85 countries worldwide. Its main goal is to
                                enable technical university students to travel
                                abroad and gain professional experience through
                                the IAESTE international traineeship programme.
                                <br />
                                In the Czech Republic, IAESTE also organizes HR
                                projects, which are listed in the ESHOP. The
                                organization is run by students of diverse study
                                backgrounds, who do so on a voluntary basis in
                                their free time. Their aim is to bring together
                                universities and companies and facilitate new
                                opportunities.
                            </div>
                            <Link to="/about">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Read more
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-6 pt-8 skills-bar">
                            {dataScale.map(scale => (
                                <Scale
                                    key={scale.id}
                                    name={scale.name}
                                    data={scale.data}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
