import React, { Component } from 'react';
import { Col } from 'reactstrap';

var imgStyle = {
  'maxHeight': '100px',
}


class MinimalCard extends Component {

  render() {
    var image = require('../Images/' + this.props.image);
    var link = this.props.link;
    var name = this.props.name;
    var desc = this.props.desc;
    return (
      <div>
        <Col>
          <a name={name} href={link}>
            <img src={image} alt='logo' style={imgStyle} />
            <p>{desc}</p>
          </a>
        </Col>
      </div>
    );
  }
}

export default MinimalCard;
