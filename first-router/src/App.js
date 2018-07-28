import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
const Home=function (){
  return <div>Home</div>;
}
const About=function (){
  return <div>About</div>;
}
const Topics=function (){
  return <div>Topics</div>;
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
                  <Router>
                      <div>
                      <ul>
                          <li><Link to="/">首页</Link></li>
                          <li><Link to="/about">关于</Link></li>
                          <li><Link to="/topics">主题列表</Link></li>
                      </ul>

                      <hr/>

                      <Route exact path="/" component={Home}/>
                      <Route path="/about" component={About}/>
                      <Route path="/topics" component={Topics}/>
                      </div>
                  </Router>
      </div>
      </div>
    );
  }
}

export default App;
