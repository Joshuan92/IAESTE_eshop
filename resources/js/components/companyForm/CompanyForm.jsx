import React from 'react';
import { Redirect } from 'react-router-dom';

export default class CompanyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            company_name: '',
            address_street: '',
            address_zip_code: '',
            address_city: '',
            address_country: '',
            ico: '',
            dico: '',
            contact_person: '',
            contact_phone: '',
            contact_email: '',
            message: '',
            redirect: false
        };
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`) // change this
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                    company: json_data.company // is 'company' ok here?
                })
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('/company', { // change this
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ // is this function ok?
                "company_name": this.state.company_name,
                "address_street": this.state.address_street,
                "address_zip_code": this.state.address_zip_code,
                "address_city": this.state.address_city,
                "address_country": this.state.address_country,
                "ico": this.state.ico,
                "dico": this.state.dico,
                "contact_person": this.state.contact_person,
                "contact_phone": this.state.contact_phone,
                "contact_email": this.state.contact_email
                })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    message: data.message
                })
            })
    }

    render() {
        return (
            <>
                <h1>Company Registration Form</h1>
                <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" className="form-control" id="companyName" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetAddress">Address (Street)</label>
                        <input type="text" className="form-control" id="streetAddress" placeholder="" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="zipCode">Zip</label>
                        <input type="text" className="form-control" id="zipCode" />
                    </div>
                    <div>
                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="country">Country</label>
                            <select id="country" className="form-control">
                                <option selected>Czech Republic</option>
                                <option>Slovakia</option>
                                <option>Germany</option>
                                <option>Austria</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="ico">ICO (if based in Czech Republic)</label>
                            <input type="number" className="form-control" id="ico" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dico">DICO (if based in Czech Republic)</label>
                            <input type="number" className="form-control" id="dico" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactName">Contact Name</label>
                            <input type="text" className="form-control" id="contactName" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPhone">Contact Phone Number</label>
                            <input type="number" className="form-control" id="contactPhone" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Contact Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={this.setRedirect}>Submit and then register a new User for this Company.</button>
                    {this.state.redirect && <Redirect to="/userform" /> }
                </form>
                </div>
            </>
        )
    }
}
