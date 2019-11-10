import React from 'react'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })  
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })    
    })
      .then (response => response.json())
      .then (data => {
            if (data.status === 'success') {
                this.props.onLoginSuccess(data.data.token)
            }
          })  
  }


  render(){
    return (
      <div className="Login">
          <h1>Login form</h1>
          <form action="" method="post" onSubmit={ this.handleFormSubmit }> 
            <label htmlFor="email">Your e-mail</label>
            <input 
                type="text" 
                placeholder="email" 
                type="email" 
                name="email" 
                value={ this.state.email }
                onChange={this.handleEmailChange} 
            />
            <label htmlFor="password">Password</label>
            <input 
                type="text" 
                placeholder="password" 
                type="password" 
                name="password" 
                value={ this.state.password } 
                onChange={ this.handlePasswordChange }
                />
            <input type="submit" value="Log in" />
          </form>
      </div>
    )

  }
}