import React, { Component } from 'react';
import { _getQuestions } from '../_DATA';
import Question from './Question';

class QuestionList extends Component {
  state = {
    questions : null
  }

  async componentDidMount(){
    try {
      const question = await _getQuestions();
      this.setState({questions : question})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
      {this.state.questions !== null &&
        Object.values(this.state.questions).map((item) => <Question key={item.id} item={item} />)
      }
      </div>
    );
  }


}

export default QuestionList;
