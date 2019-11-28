import React, { useState, useEffect } from "react";
import Pencil from "./../../../../public/img/pencil.png";
import UserImformationEdit from "./UserInformationEdit.jsx";
import CompanyInformationEdit from "./CompanyInformationEdit";

const UserInformationPage = () => {
    const [userData, setUserData] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [editCompanyOpen, setEditCompanyOpen] = useState(false)

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
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Your profile information</th>
                            <td>
                                <img
                                    className="pencil"
                                    src={Pencil}
                                    alt=""
                                    onClick={() => setEditOpen(true)}
                                />
                            </td>
                        </tr>
                    </thead>
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
                            <th scope="row">Position:</th>
                            <td scope="row" colSpan="2">
                                {userData.contact_function}
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
                    </tbody>
                </table>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Your company information</th>
                            <td>
                                <img
                                    className="pencil"
                                    src={Pencil}
                                    alt=""
                                    onClick={() => setEditCompanyOpen(true)}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
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
                            <th scope="row">Contact email:</th>
                            <td scope="row" colSpan="2">
                                {userData.company.contact_email}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Contact phone number:</th>
                            <td scope="row" colSpan="2">
                                {userData.company.contact_phone}
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
            </div>
        );
    }

    return (
        <>
            {content}
            {editOpen && (
                <UserImformationEdit
                    setUserData={setUserData}
                    userData={userData}
                    setEditOpen={setEditOpen}
                />
            )}
            {editCompanyOpen && (
                <CompanyInformationEdit
                    userData={userData}
                    setEditCompanyOpen={setEditCompanyOpen}
                />
            )}
        </>
    );
};

export default UserInformationPage;
