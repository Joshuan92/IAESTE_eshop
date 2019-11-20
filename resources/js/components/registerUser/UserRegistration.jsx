import React, { useState }  from 'react'

const UserRegistration = () => {

  const [formInputValues, setFormInputValues] = useState(
                      { name: '', 
                        email: '', 
                        password:'',
                        password_confirmation: '', 
                        phone_number: '',
                        company_id: '', 
                      });
   const [formSubmitSuccess, setFormSubmitSuccess] = useState();

   const handleNameInputChange = e => {
     setFormInputValues({
       ...formInputValues,
       [e.target.id]: e.target.value
     })
   }

   const handleButtonClick = (e) => {
     e.preventDefault()
     console.log('click', formInputValues)

     fetch('/register', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },

            body: JSON.stringify({
              "name": formInputValues.name,
              "email": formInputValues.email,
              "password": formInputValues.password,
              "password_confirmation": formInputValues.password_confirmation,
              "phone_number": formInputValues.phone_number,
              "company_id": formInputValues.company_id,
              })
          })
            .then(()=> {
              setFormSubmitSuccess(true)
            })
            .catch((e)=> {
              setFormSubmitSuccess(false)
            })
   }

   return (
    <div className="container">
      <form style={{ display: 'flex', flexDirection: 'column'}}>
        <div className="loginForm">
          <h1>User registration</h1>
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
            <label htmlFor="email">E-mail</label>
              <input className="form-control"
                id="email"
                type="text"
                value={formInputValues.email}
                onChange={handleNameInputChange}
                />
            </div>

             <div className="form-group">
            <label htmlFor="company_id">Company id</label>
              <input className="form-control"
                id="company_id"
                type="number"
                value={formInputValues.company_id}
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
            <label htmlFor="phone_number">Phone number</label>
              <input className="form-control"
                id="phone_number"
                type="text"
                value={formInputValues.phone_number}
                onChange={handleNameInputChange}
                />
            </div>

            <div className="form-group">  
            <input  onClick={handleButtonClick} className="form-control" type="submit" value="Register" />
              {formSubmitSuccess === true && <h3>Congratulations!</h3>}
              {formSubmitSuccess === false && <h3>Operation failed!</h3>}
            </div>
          </div>  
       </form>
    </div>
   )
}

export default UserRegistration