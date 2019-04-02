import React, {Component} from 'react';
import {CardImg, Col, Row} from 'reactstrap'

class LeaderBoardCard extends Component {
  state = {
    quesAnswered : 0,
    quesAsked : 0
  }

  componentDidMount() {
    this.setState({
      quesAnswered : Object.keys(this.props.user.answers).length,
      quesAsked : this.props.user.questions.length,
    })
  }

  render() {
  console.log(this.state)
    return (
      <div >
        <Row  className="border border-info p-2">
          <Col className="col-sm-1 justify-content-center">
            <hr/>
            <h1 className="display-3 text-black-50">{this.props.rank+1}</h1>
          </Col>
          <Col className="col-sm-2">
            <CardImg className="img-thumbnail" top width="10%" src={this.props.user.avatarURL} alt="Profile Thumbnail" />
          </Col>
          <Col className="col-sm-6 justify-content-center">
            <h5>{this.props.user.name}</h5>
            <h6>Questions Answered :  {this.state.quesAnswered}</h6>
            <h6>Questions Asked :  {this.state.quesAsked}</h6>
            <h6>Total :  {this.state.quesAnswered+this.state.quesAsked}</h6>
          </Col>
          <Col className="col-sm-3 justify-content-center">
            <hr/>
            <h1 className="display-4 text-black-50">Score :{this.state.quesAnswered+this.state.quesAsked}</h1>
          </Col>
        </Row>
        <hr/>
      </div>

    );
  }
}

export default LeaderBoardCard;