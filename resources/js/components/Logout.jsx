import React from 'react';

const Logout = (props) =>{

    const { setLoggedIn } = props;


    let content = <Redirect to="/react/" />;


    return (

        <>

            {content}

        </>
    )

}
export default Logout; 