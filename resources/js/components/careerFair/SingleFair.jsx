import React, { useState, useEffect } from 'react';

const SingleFair = (props) => {

  const { id, name, venue, date, img, text, setChosen, setBanan } = props

  const handleClick = () => {

    window.location.assign('/developer-expo')

  }



    return (
      <div className="col-md-4 col-12 mb-4">
        <div className="card" style={{width: '18rem', height: '30rem'}}>
          <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h2>{name}</h2>
                <p className="card-text">{text}</p>
                <h3>{venue}</h3>
                <h3>{date}</h3>

                <button className="form-control" style={{border: '1px solid blue', margin: '5px'}} onClick={() => {handleClick()}}>Submit</button>
            </div>
        </div>
      </div>
    )
  
}

export default SingleFair;