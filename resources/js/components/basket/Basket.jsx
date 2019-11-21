import React from "react";
import Layout from './Layout.jsx'

const Basket = () => {

    const basketItem = JSON.parse(localStorage.getItem('basket'))

    console.log('basket', basketItem)
    return (
      <>
       <Layout />
          {basketItem.length && basketItem.map( item => {
            return (
              <Layout />
            )
          })}
          <p>{props.name}</p>
          <p>{props.venue}</p>
          <p></p>
   
      </>
    );
  
};

export default Basket;
