import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect }  from 'react-redux';
import './App.css'
import {getUsersThunk , getQuestionsThunk } from "./Actions";
import Login from "./components/Login";




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
                    <Route exact path="/"
                       render={() => <Login users={Object.values(this.props.users)}/>}/>
                }

            </Switch>
        </BrowserRouter>

    )
  }
}

const mapStateToProps = (state) => ({
    users : state.users,
    questions : state.questions
})

const mapActionsToProps = ({
    getUsersThunk,
    getQuestionsThunk
})


export default connect(mapStateToProps,mapActionsToProps)(App);
