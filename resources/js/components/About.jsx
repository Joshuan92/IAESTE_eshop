import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render(){
    return (
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6"><h2>About Us</h2>
                <div className="about-content"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer tempor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nullam dapibus fermentum ipsum. In dapibus augue non sapien. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Pellentesque pretium lectus id turpis. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Nulla est. Cras elementum. Nullam rhoncus aliquam metus. Nulla quis diam. Nullam dapibus fermentum ipsum. Etiam neque.
              </div>
                <Link to='/about'>
                  <button type="button" className="btn btn-primary">Read more</button>
                  </Link>
              </div>
              <div className="col-md-6 skills-bar">
                <p>Carieer fairs</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '80%' }}>80 %
              </div>
              </div>
                <p>Internships</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '75%' }}>75 %
              </div>
              </div>
                <p>Student programs</p>
                <div className="progress">
                <div className="progress-bar" style={{ width: '60%' }}>60 %
              </div>
              </div>
                <p>Workshops</p>
                  <div className="progress">
                  <div className="progress-bar" style={{ width: '40%' }}>40 %
              </div>
              </div>
        </div>
      </div>
    </div>
  </section>

      )
    }
 }