import React from 'react';

export default class SingleFair extends React.Component {
  render() {
    return (
      <div className="col-md-4 col-12 mb-4">
        <div className="card" style={{width: '18rem', height: '19rem'}}>
          <img src={this.props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2>{this.props.name}</h2>
                <p className="card-text">{this.props.text}</p>
                <h3>{this.props.venue}</h3>
                <h3>{this.props.date}</h3>
            </div>
        </div>
      </div>
    )
  }
}