import React, { useState, useEffect } from "react";
import ResumeItem from "./ResumeItem.jsx";
import { Link } from 'react-router-dom';
import UserResume from './UserResume.jsx'

const Resume = props => {
    const { inCart, sum } = props;

    const [userData, setUserData] = useState(false);

    const ids = JSON.parse(window.localStorage.getItem("user_data"));

    useEffect(() => {
        fetch("/api/findUser", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },

            body: JSON.stringify(["id", ids.user_id])
        })
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            });
    }, []);

    console.log("user", userData);

    return (
        <>
       {/*  <div>
          {
            userData.map(user => {
              return (

                <UserResume />
              )
            })
          }
        </div> */}
            <div className="row">
                {inCart.map(item => {
                    return (
                        <div key={item.id}>
                            <ResumeItem
                                id={item.id}
                                name={item.name}
                                event_date={item.event_date}
                                price={item.price}
                            />
                        </div>
                    );
                })}
            </div>
            <div>Total price: {sum}</div>
            <div className="save-part">
            <Link to="/react/basket/resume">
                <button className="btn btn-success">Order</button>
            </Link>
            </div>
        </>
    );
};

export default Resume;
