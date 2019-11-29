import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

const UserRegistrationForNewCompany = (props) => {

  const setLoggedIn = props.setLoggedIn;

  const [formInputValues, setFormInputValues] = useState(
    { 
      name: 'John Doe', 
      email: 'john.doe@codingbootcamp.com', 
      password:'',
      password_confirmation: '', 
      phone_number: '+4178456123',
      company_identification_number: '', 
      contact_function: 'CEO',
      mailing_address: 'Irisweg 5, 4665, Oftringen, Switzerland',
      company_id: undefined,
      user_id: null
    });

    const [data, setData] = useState(false);


    const companyLocalStorageData = JSON.parse(window.localStorage.getItem('company_id'));

    
    useEffect(()=>{

      setFormInputValues(prevValues => { 

        return {
  
          ...prevValues,
              company_id: companyLocalStorageData.company_id,
              company_identification_number: companyLocalStorageData.company_identification_number
  
        };
  
      })

    },[])
    

    const handleNameInputChange = e => {
      const id = e.target.id
      const val = e.target.value

      setFormInputValues(prevValues => { 

        return {

          ...prevValues,
              [id]: val

        };
        })
    }
 
   const handleButtonClick = (e) => {
    e.preventDefault()
 
    fetch('/register', {
      method: 'POST',
      headers: {
          'Accept':       'application/json',
          'Content-type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },

      body: JSON.stringify(formInputValues)
    })
      .then(response => response.json())
      .then((data)=> {
       
          setData(data)
      })
    
    }
  

    let content = '';


    if(data.errors)
    {

      content = <>
                  {Object.keys(data.errors).map(error => {
                    return (
                    
                    
                    <div className="alert alert-danger" role="alert">
                    
                      {data.errors[error][0]}

                    </div>
                    
                    )
                  })}
                
                </>
      
    }
    else if (data.data)
    {

      window.localStorage.setItem('user_data', JSON.stringify({
        user_id: data.user_id,
        company_id: formInputValues.company_id
      }))

    
      window.localStorage.setItem('_token', JSON.stringify({
        token: data.data.token,
        token_timestamp: data.data.token_timestamp
      }));

      setLoggedIn(true)
      
      content = <Redirect to="/react/user-information-page"/>
      
    }

   return (

     <>
      <div className="container">
        <form style={{ display: 'flex', flexDirection: 'column'}}>
          <div className="loginForm">
            <h1>User registration for {companyLocalStorageData.company_name}</h1>
              <div className="form-group">
              <label htmlFor="first_name">Name</label>
                <input className="form-control"
                  id="name"
                  type="text"
                  value={formInputValues.name}
                  onChange={handleNameInputChange}
                  />
              </div>

              <div className="form-group">
              <label htmlFor="contact_function">Position at the company</label>
                <input className="form-control"
                  id="contact_function"
                  type="text"
                  value={formInputValues.contact_function}
                  onChange={handleNameInputChange}
                  />
              </div>

              <div className="form-group">
              <label htmlFor="mailing_address">Postal address (Street, ZIP code, City)</label>
                <input className="form-control"
                  id="mailing_address"
                  type="address"
                  value={formInputValues.mailing_address}
                  onChange={handleNameInputChange}
                  />
              </div>

              <div className="form-group">    
              <label htmlFor="phone_number">Phone number</label>
                <input className="form-control"
                  id="phone_number"
                  type="text"
                  value={formInputValues.phone_number}
                  onChange={handleNameInputChange}
                  />
              </div>

              <div className="form-group">
              <label htmlFor="email">E-mail</label>
                <input className="form-control"
                  id="email"
                  type="text"
                  value={formInputValues.email}
                  onChange={handleNameInputChange}
                  />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                  <input className="form-control"
                    id="password"
                    type="password"
                    value={formInputValues.password}
                    onChange={handleNameInputChange}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="password_confirmation">Password confirmation</label>
                  <input className="form-control"
                    id="password_confirmation"
                    type="password"
                    value={formInputValues.password_confirmation}
                    onChange={handleNameInputChange}
                    />
                </div>

              <div className="form-group">  
                <input  onClick={handleButtonClick} className="form-control" type="submit" value="Register" />
                </div>
            </div>  
        </form>
        {content}
      </div>
    </>
   )
}

export default UserRegistrationForNewCompany;