import React, { Component } from 'react';
import { Row } from 'reactstrap';
import MinimalCard from './MinimalCard.jsx';

var wrapperStyle = {
  'paddingLeft': '30px',
  'paddingTop': '30px',
};

var imageStyle1 = {
  'height': '35%',
  'width': '35%',
  'float': 'left',
  'borderRadius': '20%',
  'border': '5px solid #ddd',
  'padding': '10px',
};

var imageStyle2 = {
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
    var image1 = require('../Images/me3.jpg');
    var image2 = require('../Images/me4.jpg');
    var image3 = require('../Images/Me_Uhlenbeck.png')
    var resume = require('../Files/cv.pdf');
    var undergrad_thesis = require('../Files/UndergradThesis.pdf')
    return (
      <div>
        <div style={wrapperStyle} >
        <img alt='Me' src={image1} style={imageStyle1} />
        </div>
        <div className='bio' style={bioStyle} >
        <h1>Welcome!</h1>
        <p>
          In the fall of 2019, I will be starting my Ph.D in mathematics at Cornell.
          Previously, I was an undergraduate at the University of Texas at Austin,
          where I majored in mathematics and computer science. I did my senior
          thesis under the supervision of Professor
          <a href="https://web.ma.utexas.edu/users/dafr/"> Dan Freed </a>
          over Spin geometry, and you can read it
          <a href={undergrad_thesis}> here</a>. My interests broadly lie in geometry
          and topology, by my current interestes lie in algebraic geometry, symplectic
          geometry, and mathematical physics. In the little free time I have, I like to
          read (more math of course), and I have been teaching myself guitar,
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
            <p> Before I go to Cornell in the fall, I will be interning again at Amazon
              in Sunnyvale. Over the course of the summer, I plan on getting my hands
              dirty with algebraic geometry and complex geometry, and plan on reading
              Hartshorne's algebraic geometry text, along with texts by Huybrechts
              and Griffiths and Harris on complex geometry.
            </p>
            <p> I am constantly learning of new
            interesting things in mathematics, and consequently, the list of
            things I want to learn grows exponentially with time. Some
            books/notes that are on my ever-growing backlog of things to work
            on include </p>
            <ul>
              <li><i>Algebraic Geometry</i> by Robin Hartshorne</li>
              <li><i>The Geometry of Schemes</i> by Eisenbud and Harris</li>
              <li><i>Principles of Algebraic Geometry</i> by Griffiths and Harris</li>
              <li><i>Complex Geometry</i> by Daniel Huybrechts</li>
              <li><i>Differential Forms in Algebraic Topology</i> by Bott and Tu</li>
              <li><i>Characteristic Classes</i> by John Milnor ad James Stasheff</li>
              <li><i>Spin Geometry</i> by Lawson and Michelsohn</li>
              <li><i>Morse Theory</i> by John Milnor</li>
              <li><i>Foundations of Differential Geometry</i> (volumes 1 and 2) by Kobayashi and Nomizu</li>
              <li><i>Mathematical Methods of Classical Mechanics</i> by V.I. Arnold</li>
            </ul>
        </div>
        <div style={wrapperStyle} >
        <img alt='Me Again' src={image3} style={imageStyle1} />
        </div>
        <div className='concepts' style={conceptsStyle}>
          <h1>Things I'd like to understand better</h1>
          <p>There's a huge list of things I'd like to learn or become more familiar with.
          Things listed here could be concepts I'd like to learn, specific examples I'd
          like to work through, or broad fields I'd like to know more about.</p>
          <ul>
            <li>Algebraic geometry, with the goal of studying Geometric Invariant Theory (GIT).</li>
            <li>Characteristic classes</li>
            <li>Dirac operators and Spin geometry</li>
            <li>Representations of Lie groups and Lie algebras</li>
            <li>Mirror symmetry -- Strominger-Yau-Zaslow and homological mirror symmetry </li>
            <li>Holonomy -- specifically its use in classifying manifolds</li>
            <li>Morse Theory</li>
            <li>TQFTs -- specifically their classification by commutative Frobenius algebras in the 2 dimensional case, and the Dijkgraaf-Witten TQFT</li>
            <li>Hodge Theory</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
