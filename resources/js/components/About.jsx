import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6"><h2>About Us</h2>
              <div className="about-content">IAESTE Czech Republic is a member of
                IAESTE a.s.b.l. (Association sans but lucratif),
                an independent, non-for-profit organisation
                registered in Luxembourg, which was founded
                in 1948 and currently operates at least in 85
                countries worldwide. Its main goal is to enable
                technical university students to travel abroad
                and gain professional experience through the
                IAESTE international traineeship programme.
                In the Czech Republic, IAESTE also
                organizes HR projects, which are listed

                in this brochure. The organization is

                run by students of diverse study back-
                grounds, who do so on a voluntary basis in

                their free time. Their aim is to bring together
                universities and companies and facilitate new
                opportunities.
                More information about IAESTE Czech Republic
                is available in the Annual Report of IAESTE
                Czech Republic.
              </div>
              <a href="#">
                <button type="button" className="btn btn-primary">Read more</button>
              </a>
            </div>
            <div className="col-md-6 skills-bar">
              <p>Careers Fairs</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '80%' }}>80 %
              </div>
              </div>
              <p>Internships</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '75%' }}>75 %
              </div>
              </div>
              <p>Student Programs</p>
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