// Importing 

import React, { Component } from 'react';
import './resume.css';
import arrow from './arrow.gif';

class resume extends Component {
  render() {
    return(
      <div id="box">
        <a id="a"> You can review my resume by downloading it using the following link</a>
        <p></p>
        <img id="img" src={arrow} alt="arrow"/>
        <h2><a href="https://drive.google.com/file/d/1pGZ87X0aHtwEIamRUfXptRTx9W-8Fy7B/view" id="btn"> <i class="fa fa-download"></i> Download Resume</a></h2>
        </div>
    )
    
  }
}

export default resume;
