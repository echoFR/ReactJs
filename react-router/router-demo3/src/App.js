import React from 'react';
import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom'
class App extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return(
      <BrowserRouter>
        <div>
          <Link to="/">home</Link><br/>
          <Link to="/about/12?name=fr">about</Link><br/>
          <Link to="/contact">contact</Link><br/>
          <Link to="/other/react/router">other</Link><br/>
          <Link to="/another/2017-04-02.html">another</Link><br/>
          <Link to="/query/user?id=123&name=minooo">query1</Link><br/>
          <Link 
            to={{pathname: '/query/user', search: '?id=456&name=minooo'}}
            >query2</Link><br/>
          <div>

          <Route exact path="/" component={Home} />
          <Route path="/about/:id" render={({history,location,match}) => <h1>{console.log(history,location,match)}
              About{console.log(match)}
              <span onClick={() => {history.push('/', {name:'mm'})}}>click me</span>
            </h1>} />
          <Route path="/contact" children={({match}) => match && <h1>Contact</h1> } />
          <Route path="/other/:page?/:subpage?" render={({ match }) => (
            <h1>
              PAGE: {match.params.page}<br/>
              SUBPAGE: {match.params.subpage}
            </h1>
          )} />
          </div>
          <Route path="/another/:a(\d{4}-\d{2}-\d{2}):b(\.[a-z]+)" render={({ match }) => (
            <h1>
              paramA: {match.params.a}<br/>
              paramB: {match.params.b}
            </h1>
          )} />
          <Route path='/query/user' render={({match, location}) => (
            <div> {console.log(match,location)}
              <p>query</p>
              <p>match:{JSON.stringify(match)}</p>
              <p>location:{JSON.stringify(location)}</p>
              <p>id:{new URLSearchParams(location.search).get('id')}</p>
              <p>name:{new URLSearchParams(location.search).get('name')}</p>
            </div>
          )} />
        </div>
      </BrowserRouter>
    )
  }
}
const Home = (props) => {console.log(props, 'home'); return <h1>Home</h1>}
// class Home extends React.Component{
//   constructor(){
//     super()
//     this.state={}
//   }
//   render(){
//     console.log(this.props)
//     return(
      
//       <div>Home</div>
//     )
//   }
// }
export default App;
