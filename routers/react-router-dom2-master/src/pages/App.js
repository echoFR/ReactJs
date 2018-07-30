import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Child from './child/Child'

import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <h2>账号</h2>
                <ul>
                    <li><Link to="/react-router">React Router</Link></li>
                    <li><Link to="/leoashin">LeoAshin</Link></li>
                    <li><Link to="/justjavac">justjavac</Link></li>
                    <li><Link to="/reacttraining">React Training</Link></li>
                </ul>
                <hr/>
                <Route path="/:id" component={Child}/>
            </div>
        </Router>
    );
  }
}

export default App;
