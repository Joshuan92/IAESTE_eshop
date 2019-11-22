import React, { useState, useEffect } from "react";

const LoginForm = (props) => {

    const { setLoginData, loginData } = props;

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
        .then (data => setLoginData(data))
        
    }


    let content = '';


    if(loginData && loginData.status === 'fail')
    {

      content = <div class="alert alert-danger" role="alert">
                  This is a danger alert—check it out!
                </div>;
      
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
             
            {content}

          </div>  
       </form>
    </div>
    )

}

export default LoginForm;
