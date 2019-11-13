import React from 'react';
import { Redirect} from 'react-router-dom';


export default class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null // is 'user' ok here?
        };
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`) // change this
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                user: json_data.user // is 'user' ok here?
            })
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://www.laravel.test/api/movies/favorite/toggle', { // change this
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ // is this function ok?
                "email": this.props.email,
                "password": this.props.password,
                "first_name": this.props.first_name,
                "last_name": this.props.last_name,
                "phone_number": this.props.phone_number 
            })
        })
        .then(response => response.json())
        .then(json_data => {
            this.setState({
                user: json_data.data.user // is 'user' ok here
            })
        })
    }

    render() {
        return (
            <>
                <h1>User Registration Form</h1>
                <div className="container">
                <form action="" method="post" onSubmit={ this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordVerify">Repeat Password</label>
                        <input type="password" className="form-control" id="passwordVerify" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" className="form-control" id="phoneNumber" placeholder="" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
            </>
        )
    }
}
