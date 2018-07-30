import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Prompt
} from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <hr/>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

class Home extends Component{
    render(){
        return (
            <h1>
                Home
                <Prompt
                    when={true}
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                />
            </h1>
        )
    }
}
class About extends Component{
    render(){
        return (
            <h1>About</h1>
        )
    }
}

export default App;
