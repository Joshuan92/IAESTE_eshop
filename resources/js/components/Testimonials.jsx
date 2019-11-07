import React from 'react';
import Pers1 from './../img/person-1.jpg';
import Pers2 from './../img/person-2.jpg';
import Pers3 from './../img/person-3.png';

export default class Topbar extends React.Component {
  render(){
    return (
      <section id="testimonials">
        <div className="container">
          <h1>Testimonials</h1>
          <p className="text-center">We have worked with many clients and we always like to hear they come out from the cooperation happy and satisfied. Have a look what our clients said about us.</p>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={ Pers1 } className="user"/>
                <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer tempor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.
                </blockquote>
                <h3>Michal Gazdík<span> Founder at XYZ </span></h3>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={ Pers2 } className="user"/>
                <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer tempor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.
                </blockquote>
                <h3>Michal Gazdík<span> Founder at XYZ </span></h3>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={ Pers3 } className="user"/>
                <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus rhoncus. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Integer tempor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.
                </blockquote>
                <h3>Michal Gazdík<span> Founder at XYZ </span></h3>
              </div>
            </div>

          </div>
        </div>
      </section>



        )
        }
        }