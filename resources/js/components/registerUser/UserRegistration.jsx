import React, { useState }  from 'react'

const UserRegistration = () => {

  const [formInputValues, setFormInputValues] = useState(
                      { first_name: '', 
                        email: '', 
                        password:'', 
                        last_name:'', 
                        phone_number: '', 
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
     fetch('/company')
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
            <label htmlFor="first_name">First name</label>
              <input className="form-control"
                id="first_name"
                type="text"
                value={formInputValues.first_name}
                onChange={handleNameInputChange}
                />
            </div>
          
            <div className="form-group">
              <label htmlFor="last_name">Last name</label>
              <input className="form-control"
                id="last_name"
                type="text"
                value={formInputValues.last_name}
                onChange={handleNameInputChange}
                />
            </div>

            <div className="form-group">
            <label htmlFor="email">E-mail</label>
              <input className="form-control"
                id="email"
                name="email"
                value={formInputValues.email}
                onChange={handleNameInputChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
                <input className="form-control"
                  id="password"
                  name="password"
                  value={formInputValues.password}
                  onChange={handleNameInputChange}
                  />
              </div>

            <div className="form-group">    
            <label htmlFor="phone_number">Phone number</label>
              <input className="form-control"
                id="phone_number"
                name="phone_number"
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