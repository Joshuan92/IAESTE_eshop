import React from "react";

export default class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: [
                "./../img/images.png",
                "./../img/Accenture.png",
                "./../img/cez.png",
                "./../img/skoda.png",
                "./../img/pilsner.png",
                "./../img/customer-2.png"
            ]
        };
    }

    render() {
        return (
            <section className="bar bg-gray">
                <div className="heading text-center">
                    <h2>Our Partners</h2>
                </div>
                <div className="container text-center">
                    <div className="partners ">
                        <div className="row party">
                            {this.state.url.map((url, index) => (
                                <a
                                    key={`clientImage-${index}`}
                                    className="items col-md-2 col-sm-12"
                                >
                                    <img src={url} alt="" className="fluid" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
