import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>VISHWAKARMA GOVERNMENT ENGINEERING COLLEGE</h3>
                <p className="info">BE in IT Engineering <span>•</span> <em className="date">September 2020</em></p>
              
              </div>
            </div> {/* item end */}
            <div className="row item">
              
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>EARLY DETECTION OF
ALZHEIMER’S DISEASE</h3>
                <p className="info"> Research Work<span>•</span> <em className="date">August 2019 - March 2020</em></p>
                <p>
                Detecting Alzheimer’s Disease using various
state-of-the-art machine learning techniques
unified under a novel approach. Published in 4 th International Conference on Trends in Electronics and Informatics
(ICOEI 2020).
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>REAL TIME OBJECT DETECTION</h3>
                <p className="info">Deep Learning Work <span>•</span> <em className="date">March 2020 - April 2020</em></p>
                <p>
                A real time object detection via webcam and
image detection using YOLO algorithm
                </p>
              </div>
            </div> 
            <div className="row item">
              <div className="twelve columns">
                <h3>CAPTION GENERATOR</h3>
                <p className="info">Machine Learning Work <span>•</span> <em className="date">April 2020 - May 2020</em></p>
                <p>
                A neural network to generate captions for an
image using CNN and RNN with BEAM
Search.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>E-PLASTIC</h3>
                <p className="info">Java Work <span>•</span> <em className="date">March 2020 - April 2020</em></p>
                <p>
                Collecting and recycling plastic waste then
selling on website
                </p>
              </div>
            </div> 
            <div className="row item">
              <div className="twelve columns">
                <h3>TRAFFIC TACKLE</h3>
                <p className="info">Google Api-Js Work <span>•</span> <em className="date">March 2020 - April 2020</em></p>
                <p>
                A web application based project which tackle
traffic using Air Quality Index.
                </p>
              </div>
            </div> 
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Active Listening, Adaptability, Communication, Creativity, Critical Thinking, Customer Service, Decision Making, Interpersonal Communication, Management, Leadership, Organization, Problem-solving, Teamwork.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Python</em></li>
                <li><span className="bar-expand illustrator" /><em>JS Frameworks</em></li>
                <li><span className="bar-expand wordpress" /><em>Java</em></li>
                <li><span className="bar-expand css" /><em>Machine Learning</em></li>
                <li><span className="bar-expand html5" /><em>Deep Learning</em></li>
                <li><span className="bar-expand jquery" /><em>Tableau</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}