import React from 'react'

const Layout = () => {
  return (
    <div className="container-fluid text-center d-lg-block">
      <h1>Your picks</h1>
      <div className="row ">
        <div className="col-10 mx-auto col-lg-2">
          <p>Products:</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>Name of product {name}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>Price {price}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>Venue {venue}</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>Remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>Total</p>
        </div>
      </div>
    </div>
  )
}

export default Layout
