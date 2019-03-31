import React from 'react';
import { connect } from 'react-redux';
import { } from "../Actions";
import Container from "reactstrap/es/Container";
import InvalidPage from "./InvalidPage";
import { Jumbotron , Button , Input , Form , FormGroup ,Label} from 'reactstrap';
import { addQuestionThunk } from "../Actions";
import AppBar from "./AppBar";


class AddQuestion extends React.Component {
  state = {
    optionOneText : "",
    optionTwoText : "",
    author : this.props.loggedInUser
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addQuestionThunk(this.state)
  }

  render(){
    return (
      <Container>
        {

          this.props.loggedInUser !== "" ?
            <div>
              <AppBar user={this.props.loggedInUser}/>
              {console.log(this.state)}
              <Jumbotron>
                <h1 className="display-5">Add Question</h1>
                <hr className="my-2" />
                <p>What would you do???</p>
                <Form>
                  <FormGroup>
                    <Label for="opt1">Option One</Label>
                    <Input type="text"
                           name="optionOneText"
                           id="opt1"
                           placeholder="write option one here"
                           value={this.state.optionOne}
                           onChange={(e) => this.onInputChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="opt2">Option Two</Label>
                    <Input type="text"
                           name="optionTwoText"
                           id="opt2"
                           placeholder="write option one here"
                           value={this.state.optionTwo}
                           onChange={(e) => this.onInputChange(e)}
                    />
                  </FormGroup>
                  <Button onClick={(e) => this.onSubmit(e)} color="info">Ask Now</Button>
                </Form>

              </Jumbotron>
            </div> :
            <InvalidPage/>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedInUser : state.loggedInUser,

})

const mapActionsToProps = ({
    addQuestionThunk
})

export default connect(mapStateToProps,mapActionsToProps)(AddQuestion);