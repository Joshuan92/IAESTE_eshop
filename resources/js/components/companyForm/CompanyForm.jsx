import React from 'react';

export default class CompanyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            company: null // is 'company' ok here?
        };
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

        fetch('http://www.laravel.test/api/movies/favorite/toggle', { // change this
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ // is this function ok?
                "company_name": this.props.company_name,
                "address_street": this.props.address_street,
                "address_zip_code": this.props.address_zip_code,
                "address_city": this.props.address_city,
                "address_country": this.state.address_country,
                "ico": this.props.ico,
                "dico": this.props.dico,
                "contact_person": this.props.contact_person,
                "contact_phone": this.props.contact_phone,
                "contact_email": this.props.contact_email,
                })
        })
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                    company: json_data.data.company // is 'company' ok here
                })
            })
    }

    render() {
        return (
            <>
                <h1>Company Registration Form</h1>
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text" className="form-control" id="companyName" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetAddress">Address (Street)</label>
                        <input type="text" className="form-control" id="streetAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="zipCode">Zip</label>
                        <input type="text" className="form-control" id="zipCode" />
                    </div>
                    <div clasNames="form-row">
                        <div class="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" id="city" />
                        </div>
                        <div className="form-group col-md-4">
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}
