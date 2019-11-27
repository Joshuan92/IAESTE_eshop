import React, { useState } from "react";

const NewCompanyForm = () => {
  
  const [formInputValues, setFormInputValue] = useState({
                                                    company_name: 'jhbfdsnbdfsbn',
                                                    address_street: 'dsggddgs', 
                                                    address_zip_code: 'dgsgds', 
                                                    address_city: 'sdggds', 
                                                    address_country: 'sgdsg', 
                                                    ICO: '123456789', 
                                                    DICO: 'CZ123456789', 
                                                    primary_contact: 'Martin', 
                                                    contact_email: 'awesome@great.cz',
                                                    contact_phone: '123456789',
                                                    web: 'www.lesoparky.cz'});

  const [message, setMessage] = useState();
  const [redirect, setRedirect] = useState();

 
  const changeValue = (e) => {
    const id = e.target.id
    const val = e.target.value

    setFormInputValue(prevValues => { 

      return {

        ...prevValues,
            [id]: val

      };
      })
  };

  const handleSubmitButtonClick = (e) => {

    e.preventDefault();

    fetch('/api/company', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')

            },
            body: JSON.stringify(formInputValues)
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data.message
                );
            });
    };

  

  return (

    
      <form style={{ display: 'flex', flexDirection: 'column'}}>
      <div className="container">
       <div className="loginForm">

        <h2>New company: </h2>

        <div className="form-group">  
          <label htmlFor="company_name">Name of your company:</label>
          <input className="form-control"
            id="company_name"
            type="text"
            value={formInputValues.company_name}
            onChange={changeValue}
          />
        </div>

          <h3>Adress of your company: </h3>

        <div className="form-group">  
          <label htmlFor="address_street">Street:</label>
          <input className="form-control"
            id="address_street"
            type="text"
            value={formInputValues.address_street}
            onChange={changeValue}
          />
        </div>
          
        <div className="form-group">   
          <label htmlFor="address_zip_code">Zip code:</label>
          <input className="form-control"
            id="address_zip_code"
            type="text"
            value={formInputValues.address_zip_code}
            onChange={changeValue}
          />
        </div>

        <div className="form-group">  
          <label htmlFor="address_city">City:</label>
          <input className="form-control"
            id="address_city"
            type="text"
            value={formInputValues.address_city}
            onChange={changeValue}
          />
        </div>

        <div className="form-group">  
          <label htmlFor="address_country">Country:</label>
          <input className="form-control"
            id="address_country"
            type="text"
            value={formInputValues.address_country}
            onChange={changeValue}
          />
        </div>  

        <div className="form-group">  
          <label htmlFor="ICO">Company identification number:</label>
          <input className="form-control"
            id="ICO"
            type="text"
            value={formInputValues.ICO}
            onChange={changeValue}
          />
        </div>

        <div className="form-group">  
          <label htmlFor="DICO">Company VAT number:</label>
          <input className="form-control"
            id="DICO"
            type="text"
            value={formInputValues.DICO}
            onChange={changeValue}
          />
        </div>

        <h3>Credentials of your contact person: </h3>

      <div className="form-group">  
        <label htmlFor="primary_contact">Name of the contact person:</label>
        <input className="form-control"
          id="primary_contact"
          type="text"
          value={formInputValues.primary_contact}
          onChange={changeValue}
        />
      </div>

      <div className="form-group">  
        <label htmlFor="contact_email">Email of the contact person:</label>
        <input className="form-control"
          id="contact_email"
          type="text"
          value={formInputValues.contact_email}
          onChange={changeValue}
        />
      </div>  

      <div className="form-group">  
        <label htmlFor="contact_phone">Phone number of the contact person:</label>
        <input className="form-control"
          id="contact_phone"
          type="text"
          value={formInputValues.contact_phone}
          onChange={changeValue}
        />
      </div>

      <div className="form-group">  
        <label htmlFor="web">Webpage address:</label>
        <input className="form-control"
          id="web"
          type="text"
          value={formInputValues.web}
          onChange={changeValue}
        />
      </div>

      <div className="form-group">
        <button className="form-control" onClick={handleSubmitButtonClick} style={{border: '1px solid blue', margin: '5px'}}>Submit</button>
        {message && <h3 style={{ color: 'red'}}>{message}</h3>}
      
      </div>
      </div>

      </div>

        
  </form>


  );
};

export default NewCompanyForm;