import React, { Component } from 'react';
import { Card, CardText, CardTitle, Col } from 'reactstrap';

const months = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class PostPreview extends Component {
  constructor(props){
    super(props);
    this.parseDate = this.parseDate.bind(this);
  }

  parseDate(dateStr){
    var splitStr = dateStr.split('-');
    var year = splitStr[0];
    var month = splitStr[1];
    var day = splitStr[2];
    return months[parseInt(month)-1] + ' ' +  day + ', ' + year;
  }

  render() {
    return (
      <Col sm='4'>
        <a href={'/blog/' + this.props.ind}>
          <Card body inverse style={{backgroundColor: this.props.color, height: '200px'}}>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText><b>Date: </b>{this.parseDate(this.props.date)}</CardText>
          </Card>
        </a>
      </Col>
    );
  }
}

export default PostPreview;
