import React from 'react';
import PersonList from './PersonList.jsx';
import LoginForm from './LoginForm.jsx';



export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            logged_in: null
        }
    }

    getToken = () => {
        return window.localStorage.getItem('_token');
    }

    setToken = (token) => {
        window.localStorage.setItem('_token', token);
    }

    componentDidMount = () => {
        if (null === this.getToken()) {
            this.setState({
                logged_in: false,
                token: null
            })
        } else {
            fetch('/api/user', {
                headers: {
                    'Accept':       'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.getToken()
                }
            })
            .then(response => response.json())
            .then(data => {

                if (data.id) {
                    this.setState({
                        logged_in: true,
                        token: this.getToken()
                }) 
                } else {
                    this.setState({
                        logged_in: false,
                        token: null
                    })
                }
             }); 
        }
    }

    onLoginSuccess = (token) => {
        this.setToken(token);

        this.setState({
            logged_in: true,
            token: token
        })
    }

    render() {

        let content = 'Loading...';
        if (this.state.logged_in !== null) {
            if (this.state.logged_in) {
                content = <PersonList token={ this.state.token }/>;
            } else {
                content = <LoginForm onLoginSuccess={ this.onLoginSuccess } />;
            }
        }

        return (
            <>
                 { content }
            </>
        )
    }
}