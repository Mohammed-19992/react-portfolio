import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
import './project.css';
import demo from './demo.gif';
import github from './github.gif';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '600px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="" id="line"><img src={demo}  alt="demo icon" height="80px" width="80px"/></a>
              <a href="" id="line"><img src={github} alt="github icon" height="60px" width="60px"/></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         <br></br>
         <br></br>
             {/* Project 1 */}
             <Card shadow={5} style={{minWidth: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '600px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="" id="line"><img src={demo}  alt="demo icon" height="80px" width="80px"/></a>
              <a href="" id="line"><img src={github} alt="github icon" height="60px" width="60px"/></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         <br></br>
         <br></br>

             {/* Project 1 */}
             <Card shadow={5} style={{minWidth: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '600px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="" id="line"><img src={demo}  alt="demo icon" height="80px" width="80px"/></a>
              <a href="" id="line"><img src={github} alt="github icon" height="60px" width="60px"/></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         <br></br>
         <br></br>

            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '600px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="" id="line"><img src={demo}  alt="demo icon" height="80px" width="80px"/></a>
              <a href="" id="line"><img src={github} alt="github icon" height="60px" width="60px"/></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         <br></br>
         <br></br>

            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '600px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="" id="line"><img src={demo}  alt="demo icon" height="80px" width="80px"/></a>
              <a href="" id="line"><img src={github} alt="github icon" height="60px" width="60px"/></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         <br></br>
         <br></br>

            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '800px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '600px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="" id="line"><img src={demo}  alt="demo icon" height="80px" width="80px"/></a>
              <a href="" id="line"><img src={github} alt="github icon" height="60px" width="60px"/></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         <br></br>
         <br></br>
        </div>
        
        

      )
    } 

  }


  render() {
    return(
      <div>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
