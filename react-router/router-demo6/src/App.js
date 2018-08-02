import React from 'react';
import {
  BrowserRouter,
  Link,
  Prompt,
  Route
}from 'react-router-dom'
const Links = () => (
  <nav>
    <Link to="/">Home</Link><br/>
    <Link to="/form">Form</Link><br/>
  </nav>
)
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dirty: false }
    this.onInput = this.onInput.bind(this)
  }
  onInput(e){
    const isShow = !!e.target.value.trim()
    this.setState({ dirty: isShow })
  }
  render() {
    return (
      <div>
        <h1>Form</h1>
        <input type="text" onInput={this.onInput} />
        <Prompt 
          when={this.state.dirty} 
          message="数据尚未保存，确定离开？" />
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Links />
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/form" component={Form} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
