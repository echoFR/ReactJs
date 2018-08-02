import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../components/Home'
import About from '../components/About'
import Topics from '../components/topics/Topics'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/about'>关于</Link></li>
            <li><Link to='/topics'>主题列表</Link></li>            
          </ul>
          <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/topics' component={Topics}></Route>            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
