import React from 'react'

const Scale = (props) => {
    return (
      <>
        <p>{props.name}</p>
          <div className="progress">
             <div className="progress-bar" style={{ width: props.data }}>{props.data}</div>
          </div>
      </>
    )
  }

export default Scale