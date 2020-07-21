import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
          <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="copyright">
              
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Shekha desai</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}