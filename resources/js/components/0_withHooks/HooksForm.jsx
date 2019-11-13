import React, { useState } from "react";

const HooksForm = props => {
  
  const [formInputValues, setFormInputValue] = useState({name: '', email: '', password: '', checkbox: true});
  const [formSubmitSuccess, setFormSubmitSuccess] = useState();
  const [message, setMessage] = useState();
 
  const changeValue = (e) => {
    setFormInputValue({
      ...formInputValues,
      [e.target.id]: e.target.value
      
    })
  }

  const changeCheckbox = (e) => {

    const id = e.target.id
    const val = e.target.checked
    setFormInputValue(prevVals => {

      return {
        ...prevVals,
        [id]: val
      }
      
      
    })


  }

  const handleSubmitButtonClick = (e) => {

    e.preventDefault()

    console.log("clicked", formInputValues)

    fetch('/fsdsdsfsdd', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')

            },
            body: JSON.stringify({ // is this function ok?
                "company_name": formInputValues.name,
                "address_street": formInputValues.password,
                "contact_email": formInputValues.email
                })
        })
            .then(response => response.json())
            .then(data => {
                setMessage(data.message
                )
            })
    }

  

  return (
    <form style={{ display: 'flex', flexDirection: 'column'}}>
      <input
        id="name"
        type="text"
        value={formInputValues.name}
        onChange={changeValue}
      />
      <input
        id="email"
        type="text"
        value={formInputValues.email}
        onChange={changeValue}
      />
      <input
        id="password"
        type="password"
        value={formInputValues.password}
        onChange={changeValue}
      />

      <input
        id="checkbox"
        type="checkbox"
        checked={formInputValues.checkbox}
        onChange={changeCheckbox}
      />

      <button onClick={handleSubmitButtonClick} style={{border: '1px solid blue', margin: '5px'}}>Submit</button>
      {formSubmitSuccess === true && <h3>Congrats!</h3>}
      {formSubmitSuccess === false && <h3 style={{ color: 'red'}}>Error Occurred, try again later</h3>}
      
    </form>

  );
};

export default HooksForm;
