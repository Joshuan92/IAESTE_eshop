import React from 'react';
import Logo from './../../../../public/img/iaeste-lg.jpg';

export default class FreshGuide extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-12 mb-4">
            <div className="card mb-3" style={{ maxWidth: '500px' }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={ Logo } style={{ maxWidth: '150px', marginLeft: '5%'}} className="card-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{this.props.title}</h5>
                      <p className="card-text">{this.props.text}</p>
                      <p className="card-text"><small className="text-muted">{this.props.update}</small></p>
                      <button type="button" className="btn btn-info">{this.props.url}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }
 
}