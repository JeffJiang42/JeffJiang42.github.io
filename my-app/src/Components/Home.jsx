import React, { Component } from 'react';

var wrapperStyle = {
  'paddingLeft': '30px',
  'paddingTop': '30px',
  'paddingBottom': '50px'
};

var imageStyle = {
  'height': '30%',
  'width': '30%',
  'float': 'left',
  'borderRadius': '5%',
  'border': '5px solid #ddd',
  'padding': '5px',
};

var imageStyle2 = {
  'height': '45%',
  'width': '45%',
  'float': 'left',
  'borderRadius': '5%',
  'border': '5px solid #ddd',
  'padding': '5px',
  'marginLeft': '20px'
};

var imageStyle3 = {
  'height': '45%',
  'width': '45%',
  'float': 'left',
  'borderRadius': '5%',
  'border': '5px solid #ddd',
  'padding': '5px',
};

var bioStyle = {
  'paddingTop': '30px',
  'paddingRight': '150px',
  'paddingLeft': '550px',
  'textAlign': 'left'
};

class Home extends Component {
  render() {
    var image = require('../Images/me2.jpg');
    var gdc = require('../Images/gdc.jpg');
    var rlm = require('../Images/rlm.jpg')

    return (
      <div style={wrapperStyle} >
        <h1>Welcome!</h1>
        <img alt='Me' src={image} style={imageStyle} />
        <div style={bioStyle}>
          <p>Hello There! I'm Jeffrey, and you seem to have found my humble
            webpage! As a Mathematics and Computer Science major, I plan to
            use this website as a hub for my projects and notes, as well as
            a home for my blog, which will mostly consist of ramblings about
            whatever math I'm reading at the time. At any given time you can
            find me haunting the halls of the GDC or RLM tackling the
            masochistic workload I thought was reasonable the semester before
            -- usually to the tune of Taylor Swift or whatever pop music I find
            myself listening to on repeat while I work.</p>
          <img alt='GDC' src={gdc} style={imageStyle3} />
          <img alt='RLM' src={rlm} style={imageStyle2} />
        </div>
      </div>
    );
  }
}

export default Home;
