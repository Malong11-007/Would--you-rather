import React from 'react';
import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";

export default class AppBar extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavItem className="navbar-brand" >Would u Rather</NavItem>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <NavLink activeClassName="active" className="nav-link" to="/Home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/AddQuestion">Add Question</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/leaderboard">Leaders Board</NavLink>
              </li>
            </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/Home">Hello, {this.props.userName}</NavLink>
            </li>
          </ul>


            <NavLink activeClassName="active" className="nav-link" exact to="/" onClick={this.props.logOutUser}>Logout</NavLink>
        </nav>
      </div>
    );
  }
}
