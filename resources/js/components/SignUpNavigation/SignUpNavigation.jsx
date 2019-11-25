import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'

const SignUpNavigation = () =>  {


    const [redirect, setRedirect] = useState();


    const redirectToUserRegistrationOnly = () => {

        setRedirect(<Redirect to="/react/userform" />);
    }

    const redirectToCompanyRegistration = () => {

        setRedirect(<Redirect to="/react/companyform" />);
    }

    const mediaMatch = window.matchMedia('(min-width: 500px)');
    
    const [matches, setMatches] = useState(mediaMatch.matches);

    

    useEffect(() => {
        const handler = e => setMatches(e.matches);        
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });

    const styles = {
    container: isRowBased => ({
        display: 'flex',
        flexDirection: isRowBased ? 'row' : 'column',
        justifyContent: 'space-around'
    })    
    };
    

    const changeMarginClassName = (isSmallerThan500px) => {
        return isSmallerThan500px ? 'card border-primary col-lg-6 text-center mr-3' : 'card border-primary col-lg-6 text-center mb-3'
        };

    return (
        <>
            <div className="container mb-3">
                <br />
                <h1>Is your company already registered with IAESTE?</h1>


                <div style={styles.container(matches)}>

                    <div className={changeMarginClassName(matches)}>
                
                        <div className="card-body">
                            <h3 className="card-title">Yes, it is!</h3>
                            <p className="card-text">I want to register as a new user at already registered company and I know our company VAT.</p>
                            <button className="btn btn-primary btn-md" onClick={redirectToUserRegistrationOnly}>Submit</button>
                        </div>
                        
                    </div>

                    <div className="card border-primary col-lg-6 text-center">
                        <div className="card-body">
                            <h3 className="card-title">Not yet.</h3>
                            <p className="card-text">I want to register our company and participate on IAESTE projects and events.</p>
                            <button className="btn btn-primary btn-md" onClick={redirectToCompanyRegistration}>Submit</button>
                        </div>
                        
                    </div>
                </div>

                {redirect ? redirect : null }
            </div>


            
        </>
        )
    
}

export default SignUpNavigation;