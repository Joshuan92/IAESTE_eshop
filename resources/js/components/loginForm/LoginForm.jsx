import React, { useState, useEffect } from "react";

const LoginForm = (props) => {

    const { setToken } = props;

    const [formOutputValues, setFormOutputValues] = useState(
                      { email: '', 
                        password:'' 
    });



    const handleOutputChange = e => {
     setFormOutputValues({
       ...formOutputValues,
       [e.target.id]: e.target.value
     })
   }


    useEffect(()=> {
     console.log('props', props);
     
   },[props])


    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')

            },
            body: JSON.stringify(formOutputValues)
        })
        .then (response => response.json())
        .then (data => setToken(data.data.token))
    }

    return (
        <div className="container">
      <form style={{ display: 'flex', flexDirection: 'column'}}>
        <div className="loginForm">
          <h1>Login form</h1>
            
            <div className="form-group">
            <label htmlFor="email">E-mail</label>
              <input className="form-control"
                id="email"
                type="text"
                value={formOutputValues.email}
                onChange={handleOutputChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
                <input className="form-control"
                  id="password"
                  type="password"
                  value={formOutputValues.password}
                  onChange={handleOutputChange}
                  />
              </div>

            <div className="form-group">  
            <input  onClick={handleFormSubmit} className="form-control" type="submit" value="Login" />
            </div>
          </div>  
       </form>
    </div>
    )

}

export default LoginForm;
