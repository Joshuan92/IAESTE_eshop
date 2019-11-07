import React from 'react';

export default class Footer extends React.Component {
  render(){
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="row">
                <div className="col-lg-3">
                  <h4 className="h6">About Us</h4>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  <hr/>
                  <h4 className="h6">Join Our Monthly Newsletter</h4>
                  <form>
                    <div className="input-group">
                        <input type="text" className="form-control"/>
                        <div className="input-group-append">
                          <button type="button" className="btn btn-secondary"><i className="fa fa-send"></i></button>
                        </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3">
                  <h4 className="h6">Blog</h4>
                  <ul className="list-unstyled footer-blog-list">
                    <li className="d-flex align-items-center">
                      <div className="image"><img src="img/detailsquare.jpg" alt="..." className="img-fluid"/></div>
                      <div className="text">
                        <h5 className="mb-0"> <a href="post.html">Blog post name</a></h5>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="image"><img src="img/detailsquare.jpg" alt="..." className="img-fluid"/></div>
                      <div className="text">
                        <h5 className="mb-0"> <a href="post.html">Blog post name</a></h5>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="image"><img src="img/detailsquare.jpg" alt="..." className="img-fluid"/></div>
                      <div className="text">
                        <h5 className="mb-0"> <a href="post.html">Very very long blog post name</a></h5>
                      </div>
                    </li>
                  </ul>
                  <hr className="d-block d-lg-none"></hr>
              </div>
              <div className="col-lg-3">
              <h4 className="h6">Blog</h4>
              <ul className="list-unstyled footer-blog-list">
                <li className="d-flex align-items-center">
                  <div className="image"><img src="img/detailsquare.jpg" alt="..." className="img-fluid"/></div>
                  <div className="text">
                    <h5 className="mb-0"> <a href="post.html">Blog post name</a></h5>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="image"><img src="img/detailsquare.jpg" alt="..." className="img-fluid"/></div>
                  <div className="text">
                    <h5 className="mb-0"> <a href="post.html">Blog post name</a></h5>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="image"><img src="img/detailsquare.jpg" alt="..." className="img-fluid"/></div>
                  <div className="text">
                    <h5 className="mb-0"> <a href="post.html">Very very long blog post name</a></h5>
                  </div>
                </li>
              </ul>
              <hr className="d-block d-lg-none"/>
            </div>
              <div className="col-lg-3">
                <h4 className="h6">Contact</h4>
                <p className="text-uppercase"><strong>Universal Ltd.</strong><br/>13/25 New Avenue <br/>Newtown upon River <br/>45Y 73J <br/>England <br/><strong>Great Britain</strong></p><a href="contact.html" className="btn btn-template-main">Go to contact page</a>
                <hr className="d-block d-lg-none"/>
              </div>
            <div className="col-lg-3">
                  <ul className="list-inline photo-stream">
                    <li className="list-inline-item"><a href="#"><img src="img/detailsquare2.jpg" alt="..." className="img-fluid" /></a></li>
                    <li className="list-inline-item"><a href="#"><img src="img/detailsquare.jpg" alt="..." className="img-fluid" /></a></li>
                    <li className="list-inline-item"><a href="#"><img src="img/detailsquare3.jpg" alt="..." className="img-fluid" /></a></li>
                    <li className="list-inline-item"><a href="#"><img src="img/detailsquare3.jpg" alt="..." className="img-fluid" /></a></li>
                    <li className="list-inline-item"><a href="#"><img src="img/detailsquare2.jpg" alt="..." className="img-fluid" /></a></li>
                    <li className="list-inline-item"><a href="#"><img src="img/detailsquare.jpg" alt="..." className="img-fluid" /></a></li>
                  </ul>
                </div>
            </div>
          </div>
      </footer>

    )
  }
}
