import React, { useState, useEffect } from 'react';


const SuccesfulRegistrationOfUser = (props) => {

    const { formInputValues, existingCompany } = props;
    useEffect(()=>{
        console.log('formInputValues', formInputValues);
        console.log('existingCompany', existingCompany);
        
    }, [formInputValues])
    

    return (
        <div className="container">

            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Your profile information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name:</th>
                        <td scope="row" colSpan="2">{formInputValues.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td style={{overflowWrap: "break-word" }} >{formInputValues.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Position:</th>
                        <td scope="row" colSpan="2">{formInputValues.contact_function}</td>
                    </tr>
                    <tr>
                        <th scope="row">Post address:</th>
                        <td scope="row" colSpan="2">{formInputValues.mailing_address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone number:</th>
                        <td scope="row" colSpan="2">{formInputValues.phone_number}</td>
                    </tr>
                    <tr>
                        <th scope="row">Position:</th>
                        <td scope="row" colSpan="2">{formInputValues.contact_function}</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )


}

export default SuccesfulRegistrationOfUser;