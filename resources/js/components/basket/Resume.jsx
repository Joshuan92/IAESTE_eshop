import React, { useState, useEffect } from "react";
import ResumeItem from "./ResumeItem.jsx";
import { Link } from "react-router-dom";
import EmailSent from './EmailSent.jsx'

const Resume = props => {
    const { inCart, sum } = props;

    const [userData, setUserData] = useState(false);
    const [editOpen, setEditOpen] = useState(false);

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

    const sendEmail = () => {

        fetch("/api/send-email", {
            headers: {
                // Accept: "application/json",
                "Content-type": "application/json"
            } 

        })
        .then(
            console.log('email')
        )

    }


    let content = (
        <div className="container">
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div
                    className="spinner-border ml-auto"
                    role="status"
                    aria-hidden="true"
                ></div>
            </div>
        </div>
    );

    if (userData) {
        content = (
            <div className="container">
              <h2 style={{padding: '5px'}}>Order summary</h2>
                <div className="row">
                    {inCart.map(item => {
                        return (
                            <div key={item.id}>
                                <ResumeItem
                                    name={item.name}
                                    price={item.price}
                                />
                            </div>
                        );
                    })}
                </div>
                <h3 style={{float: 'right' }}>Total price: {sum} CZK</h3>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th scope="row">Name:</th>
                            <td scope="row" colSpan="2">
                                {userData.name}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Email:</th>
                            <td
                                colSpan="2"
                                style={{ overflowWrap: "break-word" }}
                            >
                                {userData.email}
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">Post address:</th>
                            <td scope="row" colSpan="2">
                                {userData.mailing_address}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Phone number:</th>
                            <td scope="row" colSpan="2">
                                {userData.phone_number}
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">Company name:</th>
                            <td scope="row" colSpan="2">
                                {userData.company.company_name}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Company identification number:</th>
                            <td scope="row" colSpan="2">
                                {userData.company.ICO}
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">Street address:</th>
                            <td scope="row" colSpan="2">
                                {userData.company.address_street}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Zip code:</th>
                            <td scope="row" colSpan="2">
                                {userData.company.address_zip_code}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">City:</th>
                            <td scope="row" colSpan="2">
                                {userData.company.address_city}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="save-part">
                    <Link to="/react/basket/resume">
                    <button className="btn btn-success" onClick={() => setEditOpen(true)}>Order</button>
                    </Link>
                </div>
            </div>
        );
    }

    return <>{content}
    {editOpen && (
        <EmailSent email={userData.email}
        setEditOpen={setEditOpen}/>
    )}
    </>;
};

export default Resume;
