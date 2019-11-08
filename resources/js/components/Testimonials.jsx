import React from 'react';
import Pers1 from './../../../public/img/person-1.jpg';
import Pers2 from './../../../public/img/person-2.jpg';
import Pers3 from './../../../public/img/person-3.png';

export default class Topbar extends React.Component {
  render() {
    return (
      <section id="testimonials">
        <div className="container">
          <h1>Testimonials</h1>
          <p className="text-center">We have worked with many clients and we always like to hear they come out from the cooperation happy and satisfied. Have a look what our clients said about us.</p>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={Pers1} className="user" />
                <blockquote>The iKariera expositions have been
                  steadily getting to the top of all
                  student fairs for many years now.
                  That is not just because of the high
                  numbers of students who attend
                  every year and are very interested in
                  cooperation opportunities, but also
                  because the exposition organization is
                  on an extremely high level. The IAESTE
                  expositions provide our company with
                  a unique opportunity to showcase
                  itself to students and future graduates.
                </blockquote>
                <h3>Michal Prát<span>HR Marketing Specialist Škoda Transportation</span></h3>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={Pers2} className="user" />
                <blockquote>We have been attending the iKariera
                  expositions for four years. We especially
                  appreciate that they are located
                  directly on Faculty of Civil Engineering
                  campus, allowing us to meet talented
                  students interested in a career in

                  this sector. In spite of being student-
                  organized, the exposition maintains

                  a high level of professionalism.
                </blockquote>
                <h3>Vítek Vyhnal<span>Human Resources Manager Hilti ČR spol. s r.o.</span></h3>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="profile">
                <img src={Pers3} className="user" />
                <blockquote>We have been collaborating with
                  the student organization IAESTE for
                  a number of years, because of the
                  quality of their services and their
                  unique history and mission. We think
                  the organization‘s greatest advantage
                  is its close connection to universities,
                  which means the career fairs can take
                  place right on university grounds. This
                  increases the turnout and allows the
                  exhibitors to target on students better
                  than in other projects. The personal
                  contact with students also gives
                  the exhibitors feedback on their job
                  opportunities and benefits portfolios.
                </blockquote>
                <h3>Karel Zuček<span>Engineering Project Manager Procter and Gamble</span></h3>
              </div>
            </div>

          </div>
        </div>
      </section>



    )
  }
}