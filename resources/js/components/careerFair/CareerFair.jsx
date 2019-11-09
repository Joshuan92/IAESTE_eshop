import React from 'react';
import fairInfo from './fairInfo.js';
import SingleFair from './SingleFair.jsx';

export default class CareerFair extends React.Component {
    render() {
      return (
        <>
        <h1>Carrier fairs</h1>
        <section className="container">
            
            <div className="tables">
              <div className="row">
                  {
                    fairInfo.map(fair => 
                      <SingleFair key={fair.id}
                          name={fair.name}
                          text={fair.text}
                          venue={fair.venue}
                          date={fair.date}
                      />)
                  }
                </div>
            </div>
        </section>
        
        </>
      )
    } 
}