import React, { Component } from 'react';

var postStyle = {
  'paddingTop': '20px',
  'paddingRight': '50px',
  'paddingLeft': '50px',
};

class Projects extends Component {
  render() {
    var quantumNotes = require('../Files/QuantumComputing.pdf');
    var diffTopNotes = require('../Files/M382D.pdf')
    var principalBundles = require('../Files/PrincipalBundles.pdf')
    var cliffordAlgebras = require('../Files/CliffordAlgebras.pdf')
    var undergradThesis = require('../Files/UndergradThesis.pdf')
    return (
      <div style={postStyle} >
        <h1 style={{'textAlign': 'center'}}>Projects + Notes</h1>
        <br />
        <p style={{'textAlign': 'left'}}>These are some projects and notes that
          I've compiled over the years, some of them more complete and correct than
          others.</p>
        <ul style={{'textAlign': 'left'}}>
          <li>
            I wrote my undergraduate thesis under the supervision of Professor Dan Freed
            over Spin geometry and Dirac operators. You can read it
            <a href={undergradThesis}> here</a>, and see the source (along with
            the commit history if you're into that sort of thing) in
            <a href={'https://github.com/JeffJiang42/Undergrad-Thesis'}> this repository</a>.
          </li>
          <li>I wrote an expository article for the Spring 2019 issue of the UT
            undergraduate math journal about Clifford algebras, which you can read
            <a href={cliffordAlgebras}> here</a>.
          </li>
          <li>I wrote another expository article for an upcoming issue of the UT
            undergraduate math journal about principal bundles, which you can read
            <a href={principalBundles}> here</a>.
          </li>
          <li>I took a quantum computing course with Professor Scott Aaronson in
            Spring 2017 and compiled some
          <a href={quantumNotes}> notes</a>.</li>
          <li>I took the graduate differential topology course with Professor
            Robert Gompf in Spring 2017 and have also kept
            <a href={diffTopNotes}> notes</a> from that course</li>
          <li>I have a
            <a href='https://github.com/JeffJiang42/Math-Notes'> GitHub repository </a>
            to hold random notes I've collected
            Some of the notes there were compiled in the Summer of 2017, while others
            are from various talks I gave (either to the UT Math Club or for the
            Directed Reading Program). Yet others are notes I'm keeping while working
            through texts on my own, or random expository stuff I felt like
            typing up. Many things here are in various states of completeness
            (and correctness unfortunately), so be careful there.</li>

        </ul>
      </div>
    );
  }
}

export default Projects;
