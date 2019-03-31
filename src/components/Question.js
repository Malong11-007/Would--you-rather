import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button , ButtonGroup } from 'reactstrap';
import {Link} from "react-router-dom";


class Question extends React.Component {
  state ={
    optionSelected : "optionOne"
  }

  onRadioChange = (e) => {
    this.setState({optionSelected : e.target.value})
  }

  render(){

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Posted by : {this.props.question.author}</CardTitle>

            <div>
              <input checked={this.state.optionSelected === "optionOne"}
                     type="radio"
                     onChange={this.onRadioChange}
                     value="optionOne"
              />{this.props.question.optionOne.text} <br/>
              <input checked={this.state.optionSelected  === "optionTwo"}
                     type="radio"
                     onChange={this.onRadioChange}
                     value="optionTwo"
              />{this.props.question.optionTwo.text} <br/>

            </div>
            <button onClick={() => this.props.saveQuestion(this.props.user,this.props.question.id,this.state.optionSelected)}
            >Submit</button>
          </CardBody>
        </Card>
      </div>
    )
  }

}

export default Question;
