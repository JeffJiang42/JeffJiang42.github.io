import React, { Component } from 'react';
import postList from './Posts/posts.json';
import PostPreview from './PostPreview.jsx';
import { Row } from 'reactstrap';

var rowStyle = {
  'paddingLeft': '50px',
  'paddingRight': '50px',
  'paddingTop': '50px'
};

const colors = ['#B25D71', '#33A1DE	'];

class Blog extends Component {
  render() {
    var posts = postList.posts.reverse();
    var postLinks = [];
    for (var i = 0; i < Math.ceil(posts.length); i+=3){
      var row = posts.slice(i, Math.min(i+3,posts.length));
      row = row.map((post, j) => {
        return (<PostPreview title={post.title} ind={posts.length-(i + j) - 1} key={i+j} color={colors[post.type]} date={post.date} />);
      });
      postLinks.push(row);
    }
    console.log(postLinks);
    postLinks = postLinks.map((row, i) => {
      return (
        <Row style={rowStyle} key={i} >
          {row}
        </Row>);
    });
    return (
      <div>
        {postLinks}
      </div>
    );
  }
}

export default Blog;
