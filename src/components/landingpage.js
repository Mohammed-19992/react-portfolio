import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './landingpage.css';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img id="img"
              src="https://wearenotnumbers.org/assets/uploads/files/2fe02-rsz_1107498934_1017810181971262_1374990717566850405_n.jpg"
              alt="mohammed"
              />

            <div className="banner-text">
              <h1>Front-End Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mohammed-arafat1992/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Mohammed-19992" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://www.facebook.com/mohammed.arafat.338211" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/moharafat92" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
