import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect }  from 'react-redux';
import './App.css'
import {getUsersThunk , getQuestionsThunk , loggedUser } from "./Actions";
import Login from "./components/Login";
import Dashboard from './components/Dashboard'
import AddQuestion from './components/AddQuestion'
import Question from './components/Question'
import Leadersboard from "./components/Leadersboard";


class App extends React.Component {

  componentDidMount() {

      this.props.getUsersThunk();
      this.props.getQuestionsThunk()

      console.log(this.props)
  }




    render() {
    return (
        <BrowserRouter>
            <Switch>
              { this.props.users !== null &&
                <Route path="/Home"
                     render={() => <Dashboard/>}/>
              }
              {this.props.users !== null && this.props.loggedUser !== null &&
                <div>
                  <Route exact path="/"
                         render={() => <Login loggedUser={this.props.loggedUser}
                                              users={Object.values(this.props.users)}/>}/>
                  <Route path="/AddQuestion" component={AddQuestion}/>
                  <Route path="/question/:questionID" component={Question}/>
                  <Route path="/leaderboard" component={Leadersboard}/>
                </div>
              }

            </Switch>
        </BrowserRouter>

    )
  }
}

const mapStateToProps = (state) => ({
    loggedInUser : state.loggedInUser,
    users : state.users,
    questions : state.questions
})

const mapActionsToProps = ({
    getUsersThunk,
    getQuestionsThunk,
    loggedUser
})


export default connect(mapStateToProps,mapActionsToProps)(App);
