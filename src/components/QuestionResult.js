import React, {Component} from 'react';

class QuestionResult extends Component {
  state = {
    per1 : 0,
    per2 : 0,
    total : 0
  }

  calculate = () => {
    const per1 = (this.props.count1/(this.props.count1+this.props.count2)) * 100
    const per2 = (this.props.count2/(this.props.count1+this.props.count2)) * 100
    const total = this.props.count1+this.props.count2
    console.log(per2,per1,total)
    this.setState({
      per1,
      per2,
      total
    })
  }


  componentDidMount() {
    this.calculate()
  }


  render() {
    console.log("from result",this.props)
    return (
      <div className="container">
        <div>
          <h5>Option One : <small>{this.props.question.optionOne.text}</small></h5>
          <div className="progress">
            {this.state.per1.toFixed(2)}% :

            <div className="progress-bar bg-info" role="progressbar" style={{width : `${this.state.per1}%`}}  aria-valuenow={this.state.per1}
                 aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width : `${100-this.state.per1}%`}}  aria-valuenow={100-this.state.per1}
                 aria-valuemin="0" aria-valuemax="100"/>

          </div>
          <p>{this.props.count1} of {this.state.total} Votes</p>
        </div>
        <hr/>
        <div>
          <h5>Option Two : <small>{this.props.question.optionOne.text}</small></h5>
          <div className="progress">
            {this.state.per2.toFixed(2)}% :

            <div className="progress-bar bg-info" role="progressbar" style={{width : `${this.state.per2}%`}}  aria-valuenow={this.state.per2}
                 aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width : `${100-this.state.per2}%`}}  aria-valuenow={100-this.state.per2}
                 aria-valuemin="0" aria-valuemax="100"/>
          </div>
          <p className="justify-content-xl-center">{this.props.count2} of {this.state.total} Votes</p>
        </div>
      </div>
    )
  }
}

export default QuestionResult;