import React, { useState } from "react";

const UserInformationEdit = props => {
    const { userData, setEditOpen } = props;

    console.log("userdata", userData);
    const [updatedValues, setUpdatedValues] = useState({
        name: userData.name,
        email: userData.email,
        contact_function: userData.contact_function,
        mailing_address: userData.mailing_address,
        phone_number: userData.phone_number
    });

    const handleUpdate = e => {
        setUpdatedValues({
            ...updatedValues,
            [e.target.id]: e.target.value
        });
    };

    const handleUpdatedSave = () => {
        console.log("save", userData.id);
        fetch(`/api/updateUser/${userData.id}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: updatedValues.name,
                email: updatedValues.email,
                contact_function: updatedValues.contact_function,
                mailing_address: updatedValues.mailing_address,
                phone_number: updatedValues.phone_number
            })
        });
    };

    return (
        <>
            <div id="backPop"></div>
            <div className="userInfo1">
                <form>
                    <div id="popup">
                        <div className="close-btn">
                        <button className="btn btn-outline-primary x-btn" onClick={() => setEditOpen(false)}>x</button>
                        </div>
                        <div>
                            <h1>Update your profile information</h1>

                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    value={updatedValues.name}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="email"
                                    value={updatedValues.email}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="position">Position: </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="contact_function"
                                    value={updatedValues.contact_function}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mailing_address">Email: </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="mailing_address"
                                    value={updatedValues.mailing_address}
                                    onChange={handleUpdate}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone_number">
                                    Phone number:
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="phone_number"
                                    value={updatedValues.phone_number}
                                    onChange={handleUpdate}
                                />
                            </div>
                        </div>
                        <div className="save-part">
                        <button className="btn btn-success" onClick={handleUpdatedSave}>save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserInformationEdit;
