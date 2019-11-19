import React, { useState, useEffect } from "react";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setdata] = useState([]);


    useEffect(()=>{

    },[])


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')

            },
            body: JSON.stringify({          
                // stringfy takes object and creates a string
                email: email,
                password: password
            })
        })
        .then (response => response.json())
        .then(data => {

            setdata(data)
            
            
        })
    }

    return (
        <>
            <h1>Login form</h1>
            <form action="" method="post">
                Email:<br />
                <input type="text" name="email" value={email } onChange={handleEmailChange}/><br />
                Password:<br />
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/><br />
                <input type="submit" value="Log in" />
            </form>
        </>
    )

}

export default LoginForm;
