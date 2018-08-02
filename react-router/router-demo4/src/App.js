import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom'
const Links = () => (
  <nav>
    <Link to="/">Home</Link><br/>
    <Link to="/about">About</Link><br/>
    <Link to="/contact/xxx/xxx/xxxxx">Contact</Link><br/>
    <Link to="/1234">1234</Link><br/>
  </nav>
)
const App = () => (
  <BrowserRouter>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route 
          path="/:itemid"
          render={({match}) => (
            <h1>itemid: {match.params.itemid}</h1>
          )} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default App;
