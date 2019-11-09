import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div className="col-md-6">
                <div className="box-image">
                  <div className="image"><img src={ this.props.img } alt="" className="img-fluid"/>
                    <div className="overlay d-flex align-items-center justify-content-center">
                      <div className="content">
                        <div className="name">
                          <h3><a href="portfolio-detail.html" className="color-white">{ this.props.name }</a></h3>
                        </div>
                        <div className="text">
                          <p className="d-none d-sm-block">{ this.props.name }</p>
                          <p className="buttons"><a href="#" className="btn btn-template-outlined-white">{ this.props.view }</a><a href="#" className="btn btn-template-outlined-white">{ this.props.website }</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}
