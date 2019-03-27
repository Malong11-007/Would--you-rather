import React , { Component } from 'react';
import { _getUsers } from '../_DATA'

class Login extends Component {
  state = {
    users : null,
    error : null
  }

  async componentDidMount(){
    try {
      const users = await _getUsers();
      this.setState({users :users})
    } catch (e) {
      this.setState({error : e})
    }
  }

  render(){
    return(
      <div>
        {this.state.users !== null ?
          <div>
          {Object.values(this.state.users).map((item) => <p key={ item.id } >{item.name}</p>)}
          </div> :
          <p>{this.state.error || "Failed to connect to server"}</p>
        }
      </div>
    )
  }
}

export default Login
