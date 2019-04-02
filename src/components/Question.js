import React from 'react';
import {Col ,CardImg} from 'reactstrap';
import QuestionResult from './QuestionResult'
import { connect } from 'react-redux'
import {getQuestionsThunk, getUsersThunk, logOutUser, saveQuestionThunk} from "../Actions";
import AppBar from './AppBar'
import InvalidPage from "./InvalidPage";
import {Link} from "react-router-dom";


class Question extends React.Component {
  state ={
    optionSelected : "",
    showResults : false,
    count1 : 0,
    count2 : 0,
    answerList: undefined
  }

  onRadioChange = (e) => {
    this.setState({optionSelected : e.target.value})
  }

  calculate = () => {
    const count1 = (this.props.questions[this.props.match.params.questionID].optionOne.votes).length
    const count2 = (this.props.questions[this.props.match.params.questionID].optionTwo.votes).length
    console.log(count1,count2,"67676")
    this.setState({
      count1,
      count2
    })
  }

  onSubmit = () => {
    this.props.saveQuestionThunk(
      this.props.loggedInUser,
      this.props.match.params.questionID,
      this.state.optionSelected
    )
    this.setState((prevState)=>({showResults: !prevState.showResults}))
    this.calculate()
  }

  componentWillMount() {
    if(this.props.loggedInUser !== ""){
      this.setState({answerList : this.props.users[this.props.loggedInUser].answers})
      this.calculate()
    }
  }

  render(){
    console.log(this.state);
    return (
      <div>
      {
        this.props.loggedInUser !== "" ?
          <div className="container">

            <AppBar user={this.props.loggedInUser}  userName={this.props.users[this.props.loggedInUser].name} logOutUser={this.props.logOutUser}/>
            <div className="col-lg-12 jumbotron justify-content-center">
              <h4 className="text-black-50 justify-content-center">{this.props.users[this.props.questions[this.props.match.params.questionID].author].name} Asked</h4>
              <div className="row card-body">
                <Col className="col-sm-3">
                  <CardImg className="img-thumbnail" top width="10%" src={this.props.users[this.props.questions[this.props.match.params.questionID].author].avatarURL} alt="Profile Thumbnail" />
                </Col>
                <Col className="col-sm-7">

                  {
                    (Object.keys(this.state.answerList).includes(this.props.match.params.questionID) || this.state.showResults) ?

                      <QuestionResult user={this.props.loggedInUser} question={this.props.questions[this.props.match.params.questionID]} count1={this.state.count1}  count2={this.state.count2} />
                      :
                      <div>
                        <p>Would you rather?</p>
                        <div className="display-5">
                          <input checked={this.state.optionSelected === "optionOne"}
                                 type="radio"
                                 onChange={this.onRadioChange}
                                 value="optionOne"
                          />{this.props.questions[this.props.match.params.questionID].optionOne.text} <br/>

                          <input checked={this.state.optionSelected  === "optionTwo"}
                                 type="radio"
                                 onChange={this.onRadioChange}
                                 value="optionTwo"
                          />{this.props.questions[this.props.match.params.questionID].optionTwo.text} <br/>

                        </div>
                        <Link onClick={() => this.onSubmit()} className="btn btn-sm btn-outline-info" to="/Home" >Ask Now</Link>
                      </div>
                  }
                </Col>
              </div>
            </div>
          </div> :
          <InvalidPage/>

      }
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  loggedInUser : state.loggedInUser,
  users : state.users,
  questions : state.questions
})

const mapActionsToProps = ({
  logOutUser,
  getUsersThunk,
  getQuestionsThunk,
  saveQuestionThunk
})

export default connect(mapStateToProps,mapActionsToProps)(Question);
