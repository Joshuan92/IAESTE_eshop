import React, { useState, useEffect }  from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./../history.js";

import SuccesfulRegistrationOfUser from './SuccesfulRegistrationOfUser.jsx';
import UserRegistration from './UserRegistration.jsx';

const UserRegistrationRouter = () => {

  const [existingCompany, setExistingCompany] = useState(false);
  const [formInputValues, setFormInputValues] = useState(
                      { name: 'Martin', 
                        email: 'pedro.gonszales@vaginas.pussy', 
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

   //fetching the "formInputValues" inc. the company to the database

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
          'Content-type': 'application/json'
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
      <Router history={history}>
        <Switch>

            <Route exact path="/react/userform">
                <UserRegistration
                formInputValues={formInputValues} 
                handleNameInputChange={handleNameInputChange}
                handleButtonClick={handleButtonClick}
                redirect={redirect}
                />
            </Route>


            <Route path="/react/userform/success">
                <SuccesfulRegistrationOfUser
                formInputValues={formInputValues} 
                existingCompany={existingCompany}
                />
            </Route>
        </Switch>
      </Router>
    </>
   )
}

export default UserRegistrationRouter;