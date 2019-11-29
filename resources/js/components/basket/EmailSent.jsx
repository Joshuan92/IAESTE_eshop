import React from "react";

const EmailSent = (props) => {
    return (
        <>
            <div id="backPop"></div>
            <div id="popup" style={{padding: '0px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="close-btn">
            <button className="btn btn-outline-primary x-btn" onClick={() => props.setEditOpen(false)}>x</button>
            </div>
                <h2 className="text-center">Invoice has been sent to {props.email}</h2>
                <h3 className="text-center pb-3">Thank you for your purchase.</h3>
            </div>
        </>
    );
};

export default EmailSent;
