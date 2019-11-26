import React from 'react';


const SuccesfulRegistrationOfUser = (props) => {

    const { formInputValues } = props;
    console.log(formInputValues);
    

    return (
        <div className="container">

            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Your profile information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name:</th>
                        <td scope="row" colspan="2">{formInputValues.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email:</th>
                        <td class="text-wrap" scope="row" colspan="2">{formInputValues.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Position:</th>
                        <td scope="row" colspan="2">{formInputValues.contact_function}</td>
                    </tr>
                    <tr>
                        <th scope="row">Post address:</th>
                        <td scope="row" colspan="2">{formInputValues.mailing_address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone number:</th>
                        <td scope="row" colspan="2">{formInputValues.phone_number}</td>
                    </tr>
                    <tr>
                        <th scope="row">Position:</th>
                        <td scope="row" colspan="2">{formInputValues.contact_function}</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )


}

export default SuccesfulRegistrationOfUser;