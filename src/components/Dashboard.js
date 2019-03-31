import React, { Component } from 'react';
import AppBar from './AppBar'
import { connect } from  'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {getQuestionsThunk, getUsersThunk, logOutUser, saveQuestionThunk} from '../Actions'
import { Container } from 'reactstrap';
import Question from './Question'
import { Link } from 'react-router-dom'
import InvalidPage from "./InvalidPage";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      filterQuestions : null
    };
  }

  componentDidMount() {
    if(this.props.loggedInUser !== ""){
      this.setState({filterQuestions : this.props.users[this.props.loggedInUser].answers})
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if((prevProps.users  !== this.props.users || prevProps.questions !== this.props.questions )&& this.props.loggedInUser !== ""){
      this.setState({filterQuestions : this.props.users[this.props.loggedInUser].answers})
      console.log(this.state.filterQuestions,"-----5---5----", this.props.questions)
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Container>
        {
          this.props.loggedInUser !== "" ?
            <div className="container h-100  justify-content-center">
              <AppBar user={this.props.loggedInUser} logOutUser={this.props.logOutUser}/>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    color="info"
                    onClick={() => { this.toggle('1'); }}
                    active={this.state.activeTab !== "1"}>Answered Questions</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    color="info"
                    onClick={() => { this.toggle('2'); }}
                    active={this.state.activeTab !== "2"}>UnAnswered Questions</NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  {/*{this.state.filterQuestions !== null && console.log(Object.keys(this.state.filterQuestions))}*/}
                  <Container className= "h-100 justify-content-center">
                    {this.props.questions !==null  && this.state.filterQuestions !== null &&
                    Object.values(this.props.questions).filter((item) => (
                      Object.keys(this.state.filterQuestions).includes(item.id)
                    )).map((item) => (<Row key={item.id}><Question user={this.props.loggedInUser}
                                 saveQuestion={this.props.saveQuestionThunk} question={item}/></Row>))
                    }
                  </Container>
                </TabPane>
                <TabPane tabId="2">
                  <Container className= "h-100 justify-content-center">
                    {this.props.questions !==null && this.state.filterQuestions !== null &&
                    Object.values(this.props.questions).filter((item) => (
                      !(Object.keys(this.state.filterQuestions).includes(item.id))
                    )).map((item) => (<Row key={item.id}><Question user={this.props.loggedInUser}
                               saveQuestion={this.props.saveQuestionThunk} question={item}/></Row>))
                    }
                  </Container>
                </TabPane>
              </TabContent>
            </div> :
                <InvalidPage/>

        }
      </Container>

    );
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

export default connect(mapStateToProps,mapActionsToProps)(Dashboard);
