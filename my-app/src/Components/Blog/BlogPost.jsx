import React, { Component } from 'react';
import marked from 'marked';
import postList from './Posts/posts.json';

const months = ['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var postStyle = {
  'paddingTop': '50px',
  'paddingRight': '250px',
  'paddingLeft': '250px',
  'textAlign': 'left'
};

class BlogPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: '0',
      title: '',
      file: '',
      markdown: '',
      date: '0000-00-00',
    }
    this.parseDate = this.parseDate.bind(this);
  }

  parseDate(dateStr){
    var splitStr = dateStr.split('-');
    var year = splitStr[0];
    var month = splitStr[1];
    var day = splitStr[2];
    return months[parseInt(month)-1] + ' ' +  day + ', ' + year;
  }

  componentWillMount(){
    var ind = this.props.match.params.ind
    this.setState({index: ind}, () => {
      var postJson = postList.posts[this.state.index];
      console.log(postJson.file);
      var file_path = require('../Blog/Posts/' + postJson.file);
      this.setState({title: postJson.title, file: file_path, date: postJson.date});
      fetch(file_path)
        .then((response) => {
          return response.text()
        })
        .then((text) => {
          this.setState({markdown: marked(text)})
        })
    })
  }

  render() {
    var markdown = this.state.markdown;
    return (
      <div>
        <section style={postStyle} >
        <h1 style={{'textAlign': 'center'}}>{this.state.title}</h1>
        <br />
        <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        <br />
        <i>Written on {this.parseDate(this.state.date)}</i>
        </section>
        <br />
        <br />
      </div>
    );
  }
}

export default BlogPost;
