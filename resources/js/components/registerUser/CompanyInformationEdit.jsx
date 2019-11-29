import React, { useState } from "react";

const CompanyInformationEdit = props => {
    const { userData, setEditCompanyOpen } = props;

    console.log("userdata", userData);
    const [updatedValues, setUpdatedValues] = useState({
        company_name: userData.company.company_name,
        ICO: userData.company.ICO,
        contact_email: userData.company.contact_email,
        contact_phone: userData.company.contact_phone,
        address_street: userData.company.address_street,
        address_zip_code: userData.company.address_zip_code,
        address_city: userData.company.address_city
    });

    const handleUpdate = e => {
        setUpdatedValues({
            ...updatedValues,
            [e.target.id]: e.target.value
        });
    };

    const handleUpdatedSave = () => {
        console.log("save", userData.company.id);
        fetch(`/api/updateCompany/${userData.company_id}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                company_name: updatedValues.company_name,
                ICO: updatedValues.ICO,
                contact_email: updatedValues.contact_email,
                contact_phone: updatedValues.contact_phone,
                address_street: updatedValues.address_street,
                address_zip_code: updatedValues.address_zip_code,
                address_city: updatedValues.address_city
            })
        });
    };

    return (
        <>
            <div id="backPop"></div>
            <div className="container userInfo">
                <form>
                    <div id="popup">
                    <div className="close-btn">
                        <button
                            className="btn btn-outline-primary x-btn"
                            onClick={() => setEditCompanyOpen(false)}
                        >
                            x
                        </button>
                        </div>
                        <h1>Update your company information</h1>
                        <div>
                            <div className="form-group">
                                <label htmlFor="company_name">
                                    Company name:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="company_name"
                                    value={updatedValues.company_name}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company_identification_number">
                                    Company identification number:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="ICO"
                                    value={updatedValues.ICO}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact_email">
                                    Contact email:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="contact_email"
                                    value={updatedValues.contact_email}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact_phone">
                                    Contact phone number:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="contact_phone"
                                    value={updatedValues.contact_phone}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address_street">
                                    Street address:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="address_street"
                                    value={updatedValues.address_street}
                                    onChange={handleUpdate}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_zip_code">
                                    ZIP code:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="address_zip_code"
                                    value={updatedValues.address_zip_code}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="address_city"
                                    value={updatedValues.address_city}
                                    onChange={handleUpdate}
                                />
                            </div>
                        </div>
                        <div className="save-part">
                        <button
                            className="btn btn-success"
                            onClick={handleUpdatedSave}
                        >
                            save
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CompanyInformationEdit;
