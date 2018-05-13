import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Global/Navigation.jsx';
import About from './Components/About.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Projects from './Components/Projects.jsx';
import Home from './Components/Home.jsx';
import BlogPost from './Components/Blog/BlogPost.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router>
          <div className='routes'>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blog' component={Blog} />
          <Route path='/blog/:ind' component={BlogPost} />
          <Route exact path='/projects' component={Projects} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
