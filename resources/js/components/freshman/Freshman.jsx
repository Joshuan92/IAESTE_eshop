import React from 'react';
import FreshGuide from './FreshGuide.jsx';
import freshmanInfo from './freshmanInfo.js';


export default class Freshman extends React.Component {
    render() {


      return (
        <>
         <section className="container">
          <h1>Freshman guide</h1>
          <div className="row">
          {
            freshmanInfo.map(info =>
              <FreshGuide 
                title= { info.title }
                text= { info.text }
                updated= { info.updated }
                url= { info.url }
                />)
            }
          </div>
        </section>
       
        </>
      )
    }
  }
