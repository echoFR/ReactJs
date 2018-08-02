import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'

// const getConfirmation = (message, callback) => {
//   const allowTransition = window.confirm(message)
//   callback(allowTransition)
// }
const Home = (props) => {console.log(props,'home'); return <h1>Home Page</h1>}
const News = (props) => {console.log(props,'news'); return <h1>News Page</h1>}

const App = () => (
  <BrowserRouter basename="/fr"  
  // getUserConfirmation={getConfirmation('Are you sure?', (msg)=>{console.log(msg);})}
  // forceRefresh={true}
  keyLength={5}
  >
    <div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/news">News</Link></li>
      </ul>      
      <Route exact path="/" component={Home} />
      <Route path="/news" component={News} />                  
    </div>
  </BrowserRouter>
)
export default App;
