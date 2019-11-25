import React, { useState, useEffect }  from 'react';
import { Router, Route, Redirect } from "react-router-dom";
import history from "./../history.js";

import SuccesfulRegistrationOfUser from './SuccesfulRegistrationOfUser.jsx'

const UserRegistration = () => {

  const [existingCompany, setExistingCompany] = useState(false);
  const [formInputValues, setFormInputValues] = useState(
                      { name: '', 
                        email: 'pedro.gonzales@vaginas.pussy', 
                        password:'123456789',
                        password_confirmation: '123456789', 
                        phone_number: '123456789',
                        company_identification_number: '37432923', 
                        contact_function: 'Analyst',
                        mailing_address: 'Mrdalova 15',
                        company_id: undefined
                      });

   const [data, setData] = useState(null);
   const [redirect, setRedirect] = useState();


   

        
    


   //updating company id in "formInputValues", after the first fetch

   useEffect(()=> {
     setFormInputValues(prevVals => {

          return {
            ...prevVals,
            company_id: existingCompany.id
          }

        })
      
   },[existingCompany])

   useEffect(() =>{
     console.log('data', data);
     
   }, [data])

   //fetching the "formInputValues" inc. the company to the database

   useEffect(()=> {
     console.log('formInputValues', formInputValues.company_id === undefined);

     if(formInputValues.company_id)
    {
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
        .then(() => {
          setRedirect(<Redirect to="/react/userform/success" />)
        })

       
       
         
    }
   },[formInputValues])

   const handleNameInputChange = e => {
     setFormInputValues({
       ...formInputValues,
       [e.target.id]: e.target.value
     })
   }

  const handleButtonClick = (e) => {
    e.preventDefault()

    // The first fetch is checking the validity of VAT number in the database. 
    // If there is company with such a VAT number in the database, 
    // it saves the data in "existingCompany" and the second fetch follows.

    fetch('/api/findCompany', {
      method: 'POST',
      headers: {
          'Accept':       'application/json',
          'Content-type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },

      body: JSON.stringify(formInputValues.company_identification_number)
    })
      .then(response => response.json())
      .then((data)=> {
        setExistingCompany(data)
      })
    
  }

   return (

     <>
      <div className="container">
        <form style={{ display: 'flex', flexDirection: 'column'}}>
          <div className="loginForm">
            <h1>New user for registered company</h1>

              <div className="form-group">
              <label htmlFor="company_identification_number">Company identification number (IČO)</label>
                <input className="form-control"
                  id="company_identification_number"
                  type="text"
                  value={formInputValues.company_identification_number}
                  onChange={handleNameInputChange}
                  />
              </div>

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
              {redirect ? redirect : null }
            </div>  
        </form>
        
      </div>

      <Router history={history}>
        <Route path="/react/userform/success">
            <SuccesfulRegistrationOfUser
            formInputValues={formInputValues} 
            existingCompany={existingCompany}
              />
        </Route>
      </Router>
    </>
   )
}

export default UserRegistration