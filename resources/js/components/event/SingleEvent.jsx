import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div className="col-md-6">
                <div className="box-image">
                  <div className="image"><img src={ this.props.img } alt="" className="img-fluid"/>
                    <div className="overlay d-flex align-items-center justify-content-center">
                      <div className="content">

                        <div className="text">
                          <h5 className="d-none d-sm-block">Career fair iKariera in Brno</h5>
                          <p className="buttons"><a href="#" className="btn btn-template-outlined-white">{ this.props.website }</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}
