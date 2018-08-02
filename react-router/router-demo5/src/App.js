import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
const logined = false;
const Links = () => (
  <nav>
    <Link to="/">Home/</Link><br/>
    <Link to="/old/123">Old/123</Link><br/>
    <Link to="/new/456">New/456</Link><br/>
    <Link to="/redirect/789">Redirect/789</Link><br/>
    <Link to="/protected">Login</Link><br/>
  </nav>
)
class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }
  render(){
    return(
        <BrowserRouter>
          <div>
            <Links />
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/protected" render={() => (logined? <h1>你已经登录了哦</h1>: <Redirect to="/new/login" />)} />
            {/* 适用于需要传参的重定向需求*/}
            <Route path="/redirect/:str" 
              render={({match}) => (
                <Redirect push to={`/new/${match.params.str}`} />
              )}
            />
            {/* 需要被重定向的路径，可以结合 Switch ，这是适用于不需要传参的重定向需求*/}
            <Switch>
              <Route path="/new/:str" 
                render={({match}) => <h1>New:{match.params.str}</h1>} />
              <Redirect from="/old/:str" to="/new/123" />
            </Switch>
            </div>
        </BrowserRouter>
    )
  }
}

export default App;
