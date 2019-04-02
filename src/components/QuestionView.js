import React, {Component} from 'react';
import {CardImg, CardTitle, Col} from "reactstrap";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux'


class QuestionView extends Component {

  render() {
    const link = `/question/${this.props.question.id}`;
    return (
      <div className="col-lg-8 container justify-content-center">
        <div className="row card-body">
          <Col className="col-sm-3">
            <CardImg className="img-thumbnail" top width="10%" src={this.props.users[this.props.question.author].avatarURL} alt="Profile Thumbnail" />
          </Col>
          <Col className="col-sm-9">
            <CardTitle>{this.props.users[this.props.question.author].name} asked</CardTitle>
            <div>
              <p>..{this.props.question.optionOne.text}..</p>
            </div>
            <NavLink activeClassName="active" className="btn btn-sm btn-outline-info" exact to={link} >View Question</NavLink>
          </Col>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInUser : state.loggedInUser,
  users : state.users,

})

export default connect(mapStateToProps)(QuestionView);