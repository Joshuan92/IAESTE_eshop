import React, { useState, useEffect }  from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./../history.js";

import UserRegistration from './UserRegistration.jsx';


const UserRegistrationRouter = (props) => {

  const setLoggedIn = props.setLoggedIn;

  const [formInputValues, setFormInputValues] = useState(
                      { name: 'Martin Hanzlik', 
                        email: 'pedro.gonszales@tree.com', 
                        password:'123456789',
                        password_confirmation: '123456789', 
                        phone_number: '123456789',
                        company_identification_number: '123456789', 
                        contact_function: 'HR',
                        mailing_address: 'Lesna 15',
                        company_id: undefined,
                        user_id: null
                      });

   const [data, setData] = useState(false);
   const [redirect, setRedirect] = useState();

   //fetching the "formInputValues" inc. the company_id to the database

   useEffect(()=> {

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
          if(data.errors)
          {
            setData(data)
            
          }
          else
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

            setRedirect(<Redirect to="/react/user-information-page" />)
          }
        }) 
        //saves user_id and company_id into the local storage     
    }
   },[formInputValues])

   //changes the shown values in the input field

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
          'Content-type': 'application/json'
      },

      body: JSON.stringify(['ICO', formInputValues.company_identification_number])
    })
      .then(response => response.json())
      .then((data)=> {
        setFormInputValues(prevVals => {
          return {
            ...prevVals,
            company_id: data.id
          }
        })
      })
    
  }

   return (

     <>
      <Router history={history}>
        <Switch>

            <Route exact path="/react/userform">
                <UserRegistration
                formInputValues={formInputValues} 
                handleNameInputChange={handleNameInputChange}
                handleButtonClick={handleButtonClick}
                redirect={redirect}
                data={data}
                />
            </Route>

        </Switch>
      </Router>
    </>
   )
}

export default UserRegistrationRouter;