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
    return (
      <div style={postStyle} >
        <h1 style={{'textAlign': 'center'}}>Projects + Notes</h1>
        <br />
        <p style={{'textAlign': 'left'}}>These are some projects and notes that
          I've compiled over the years, some of them more complete and correct than
          others.</p>
        <ul style={{'textAlign': 'left'}}>
          <li>
            I'm currently writing my senior thesis under Professor Dan Freed's
            supervision. You can find the work in progress, as well as notes
            I'm keeping along the way in <a href={'https://github.com/JeffJiang42/Undergrad-Thesis'}>this repository</a>.
          </li>
          <li>I took a quantum computing course with Professor Scott Aaronson in
            Spring 2017 and compiled some of notes along the way.</li>
          <ul>
            <li><a href={quantumNotes}>Quantum computing notes</a></li>
          </ul>
          <li>I took the graduate differential topology course with Professor
            Robert Gompf in Spring 2017 and have also kept notes from that course</li>
          <ul>
            <li><a href={diffTopNotes}>Differential topology notes</a></li>
          </ul>
          <li>I've recently started a repository to hold any notes I make in the future
            Some of the notes there were compiled in the Summer of 2017, while others
            are from various talks I gave (either to the UT Math Club or for the
            Directed Reading Program). Yet others are notes I'm keeping while working
            through texts on my own, or random expository stuff I felt like
            typing up.</li>
          <ul>
            <li><a href='https://github.com/JeffJiang42/Math-Notes'>Notes repository</a></li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Projects;
