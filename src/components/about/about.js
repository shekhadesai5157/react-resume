import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {
          <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I am result driven student who is eager to learn new concept, which I can apply to real life. With my
strong research background, I aim to further my career in Computer Science with a position that will
allow me to expand my horizons and reach my full potentials. I also like to build complex Web Applications and possess the ability of Design Thinking. Besides that, I am a problem solver that likes to deal with real-time problems and intends to make an impact on the world.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Shekha Desai</span><br />
                    <span>47, Kalpataru society <br />
                      Naranpura, Ahmedabad India
                    </span><br />
                    <span>(+91)7575045157</span><br />
                    <span>shekhadesai5157@gmail.com</span>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      }
      </React.Fragment>
    );
  }
}