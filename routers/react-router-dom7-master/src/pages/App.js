import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

const persons = [
    { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
    { id: 1, name: 'Sean', friends: [ 0, 3 ] },
    { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
    { id: 3, name: 'David', friends: [ 1, 2 ] }
];

const find = (id) => persons.find(p => p.id == id);


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Person match={{ params: { id: 0 }, url: '' }} />
            </Router>
        );
    }
}

class Person extends Component{

    render(){
        var person = find(this.props.match.params.id);

        return (
            <div>
                <h3>{person.name}’s Friends</h3>
                <ul>
                    {
                        person.friends.map(id => {
                            return <li>
                                <Link to={`${this.props.match.url}/${id}`}>
                                    {find(id).name}
                                </Link>
                            </li>
                        })
                    }

                </ul>
                <Route path={`${this.props.match.url}/:id`} component={Person} />
            </div>
        )
    }
}


export default App;
