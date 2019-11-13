import React from 'react';
import { Redirect } from 'react-router-dom'

export default class ExistingCompanyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
            logged_in: null,
            userRedirect: false,
            companyRedirect: false    
        }
    }

    setRedirectUser = () => {
        this.setState({
            userRedirect: true
        })
    }

    setRedirect = () => {
        this.setState({
            companyRedirect: true
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <br />
                    <h1>Is your company already registered with Iaeste?</h1>

                    <form>
                        <div className="form-group row">
                            <label htmlFor="existingUser" className="col-sm-2 col-form-label">Yes</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="existingUser" placeholder="Please enter your company's ICO" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                                <button className="btn btn-primary btn-md" onClick={this.setRedirectUser}>Submit</button>
                                {this.state.userRedirect && <Redirect to="/userform" />}
                            </div>
                        </div>
                    </form>
                    <button className="btn btn-primary btn-lg" onClick={this.setRedirect}>No, I need to register my company.</button>
                    {this.state.companyRedirect && <Redirect exact to="/companyform" />}
                </div>
                <br />
            </>
        )
    }
}