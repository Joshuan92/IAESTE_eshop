import React, { useState, useEffect }  from 'react';

const UserRegistration = (props) => {

  const { formInputValues,  handleNameInputChange, handleButtonClick, redirect, data } = props;

  console.log('errors', data.errors);


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
              {content}
            </div>  
        </form>
      </div>
    </>
   )
}

export default UserRegistration;