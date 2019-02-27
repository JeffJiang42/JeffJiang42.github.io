import React, { Component } from 'react';
import { Row } from 'reactstrap';
import MinimalCard from './MinimalCard.jsx';

var wrapperStyle = {
  'paddingLeft': '30px',
  'paddingTop': '30px',
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

var activityStyle = {
  'paddingTop': '30px',
  'paddingRight': '150px',
  'paddingLeft': '700px',
  'textAlign': 'left'
};

var conceptsStyle = {
  'paddingRight': '150px',
  'paddingLeft': '700px',
  'paddingBottom': '50px',
  'textAlign': 'left'
};

var linksStyle = {
  'paddingRight': '150px',
  'paddingLeft': '700px'
};

class About extends Component {
  render() {
    var image = require('../Images/me.jpg');
    var resume = require('../Files/cv.pdf');
    return (
      <div>
        <div style={wrapperStyle} >
        <img alt='Me' src={image} style={imageStyle} />
        </div>
        <div className='bio' style={bioStyle} >
        <h1>About me</h1>
        <p>I'm a senior at the University of Texas at Austin, where I
          am majoring in Pure Mathematics and Computer Science. My mathematical
          interests lie in geometry and topology, with specific topics of interest being
          Riemannian, symplectic, and complex geometry. On the computer science
          front, the topics that have drawn the most interest have been machine
          learning related, such as computer vision, though I hope to dabble in graphics
          and physical simulation in the near future. In the little free time I have,
          I like to read (more math of course) and I have been teaching myself guitar,
          which I have been attempting to play since November 2017. In the
          summer of 2018, I interned at Amazon Lab126 for the Alexa weather team.</p>
        </div>
        <div className='links' style={linksStyle} >
          <Row>
            <MinimalCard image='GitHubLogo.png' link='https://github.com/JeffJiang42' name='GitHub' desc='My GitHub'/>
            <MinimalCard image='ResumeLogo.png' link={resume} name='CV' desc='My CV'/>
            <MinimalCard image='GmailLogo.png' link='mailto:jefjiang@gmail.com' name='Email' desc='Contact Me!'/>
          </Row>
        </div>
        <div className='activities' style={activityStyle} >
          <h1>What am I up to?</h1>
            <p> This semester, I'm taking a few classes to wrap up my degree
            requirements. My schedule currently consists of complex analysis,
            object oriented programming, gauge theory, and my senior thesis,
            where I plan to cover Dirac operators with Professor Freed. In addition,
            I want to try to attend more seminars in my final semester here,
            and there are some interesting seminars being organized by the graduate
            students this spring. I am also giving a series of lectures for the math
            club, where I am teaching the basics of differential geometry. Notes
            that I have typed up can be found <a href="https://github.com/JeffJiang42/Math-Notes/tree/master/DiffGeoLectureSeries">here</a>,
            and I also plan on uploading my handwritten lecture notes there. Finally,
            there's some anxiety as I wait to hear back from graduate programs.
            </p>
            <p> I am constantly learning of new
            interesting things in mathematics, and consequently, the list of
            things I want to learn grows exponentially with time. Some
            books/notes that are on my ever-growing backlog of things to work
            on include </p>
            <ul>
              <li><i>Mathematical Methods of Classical Mechanics</i> by V.I. Arnold</li>
              <li><i>Differential Forms in Algebraic Topology</i> by Bott and Tu</li>
              <li><i>Complex Geometry and Hodge Theory</i> by Claire Voisin</li>
              <li><i>Representation Theory: A First Course</i> by Fulton and Harris</li>
              <li><i>Characteristic Classes</i> by John Milnor ad James Stasheff</li>
              <li><i>Morse Theory</i> by John Milnor</li>
              <li><i>Foundations of Differential Geometry</i> (volumes 1 and 2) by Kobayashi and Nomizu</li>
              <li><i>Lie Groups, Lie Algebras and Representations</i> by Brian C. Hall</li>
              <li>Some <a href='https://empg.maths.ed.ac.uk/Activities/Spin/'>notes</a> I found on spin geometry</li>
              <li>Some <a href='https://math.berkeley.edu/~hutching/pub/tn.pdf'>notes</a> I found on the Seiberg-Witten Equations</li>
            </ul>
        </div>
        <div className='concepts' style={conceptsStyle}>
          <h1>Things I'd like to understand better</h1>
          <p>There's a huge list of things I'd like to learn or become more familiar with.
          Things listed here could be concepts I'd like to learn, specific examples I'd
          like to work through, or broad fields I'd like to know more about.</p>
          <ul>
            <li>Dirac operators -- Clifford and Spinor bundles on manifolds</li>
            <li>Representations of Lie groups and Lie algebras</li>
            <li>Banach and Hilbert Spaces</li>
            <li>Principal Bundles</li>
            <li>Physics -- Especially its relationship with geometry</li>
            <li>Sheaves and Sheaf Cohomology</li>
            <li>Holonomy -- specifically its use in classifying manifolds</li>
            <li>Morse Theory</li>
            <li>TQFTs -- specifically their classification by commutative Frobenius algebras in the 2 dimensional case</li>
            <li>Characteristic classes</li>
            <li>Hodge Theory</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
