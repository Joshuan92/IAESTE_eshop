import React from 'react';
import SingleEvent from './SingleEvent.jsx';
import dataEvents from './dataEvents.js';

export default class Event extends React.Component {

    constructor(props) {
      super(props)
    }

    render(){
      return (
        <div className="container">
          <section className="bar">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <h2>Events</h2>
                </div>
                <p className="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
            </div>
            <div className="row portfolio text-center">
              {
                dataEvents.map(event => 
                  <SingleEvent 
                    id ={ event.id }
                    name ={event.name }
                    img = { event.img }
                    text = { event.text }
                    view = { event.view }
                    website = { event.website }
                  />)
                }            
            </div>
          </section>
        </div>
              )
            }
          }