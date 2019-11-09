import React from 'react'

export default class Scale extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.name}</p>
          <div className="progress">
             <div className="progress-bar" style={{ width: this.props.data }}>{this.props.data}</div>
          </div>
      </>
    )
  }
}