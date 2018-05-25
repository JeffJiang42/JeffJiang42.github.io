import React, { Component } from 'react';
import { Row } from 'reactstrap';
import MinimalCard from './MinimalCard.jsx';

var wrapperStyle = {
  'paddingLeft': '30px',
  'paddingTop': '30px'
};

var imageStyle = {
  'height': '35%',
  'width': '35%',
  'float': 'left',
  'borderRadius': '20%',
  'border': '5px solid #ddd',
  'padding': '10px',
};

var bioStyle = {
  'paddingTop': '30px',
  'paddingRight': '150px',
  'paddingLeft': '700px',
  'textAlign': 'left'
};

var linksStyle = {
  'paddingRight': '150px',
  'paddingLeft': '700px'
};

class About extends Component {
  render() {
    var image = require('../Images/me.jpg');
    var resume = require('../Files/Resume.pdf');
    return (
      <div>
        <div style={wrapperStyle} >
        <img alt='Me' src={image} style={imageStyle} />
        </div>
        <div className='bio' style={bioStyle} >
        <h1>About me</h1>
        <p>I'm a incoming senior at the University of Texas at Austin, where I
          am majoring in Pure Mathematics and Computer Science. My mathematical
          interests lie in geometry, with specific topics of interest being
          Riemannian, symplectic, and complex geometry. On the computer science
          front, the topics that have drawn the most interest have been machine
          learning related, such as computer vision, though I hope to dabble in graphics
          and physical simulation in the near future. In the little free time I have,
          I like to read (more math of course) and I have been teaching myself guitar,
          which I have been attempting to play since November 2017.</p>
        </div>
        <div className='links' style={linksStyle} >
          <Row>
            <MinimalCard image='GitHubLogo.png' link='https://github.com/JeffJiang42' name='GitHub' desc='My GitHub'/>
            <MinimalCard image='ResumeLogo.png' link={resume} name='Resume' desc='My Resume'/>
            <MinimalCard image='GmailLogo.png' link='mailto:jefjiang@gmail.com' name='Email' desc='Contact Me!'/>
          </Row>
        </div>
        <div className='activities' style={bioStyle} >
          <h1>What am I up to?</h1>
            <p>This summer, I'm interning at Amazon Lab126 in Sunnyvale (though views
              expressed here are mine alone). That being said, I definitely plan to do some math reading this summer.
              As of now, I'm working through the first two chapters of Ravi Vakil's
              notes <i>The Rising Sea</i> for some background in cateogry theory
              and sheaves. Here is a list of a few of the books I'm interested in
              working through this summer (though I'll probably only get around to two
              or three).</p>
            <ul>
              <li><i>Mathematical Methods of Classical Mechanics by V.I. Arnold</i></li>
              <li><i>Complex Geometry and Hodge Theory by Claire Voisin</i></li>
              <li><i>Representation Theory: A First Course</i> by Fulton and Harris</li>
              <li><i>Lie Groups, Lie Algebras and Representations</i> by Brian C. Hall</li>
              <li>Some <a href='https://empg.maths.ed.ac.uk/Activities/Spin/'>notes</a> I found on spin geometry</li>
            </ul>
        </div>
      </div>
    );
  }
}

export default About;
