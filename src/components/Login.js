import React , { Component } from 'react';
import { Col ,Row, Jumbotron,} from 'reactstrap';
import LoginCard from './LoginCard'


class Login extends Component{

  render(){
    return(
          <Jumbotron >
            <h1 className="display-4 text-center">Would You Rather</h1>
            <h1 className="display-5 text-center">Select User</h1>
            <hr className="my-2" />
            <Row className="justify-content-md-center">
              { this.props.users.map((item) => <Col xs="3" key={item.id}><LoginCard loggedUser={this.props.loggedUser} user={item}/></Col>) }
            </Row>
          </Jumbotron>
    )
  }

}

export default Login;

