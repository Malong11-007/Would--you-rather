import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import QuestionList from './components/QuestionsList '

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Dashboard' component={QuestionList}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
