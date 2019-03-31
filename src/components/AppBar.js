import React from 'react';

export default class AppBar extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" >Would u Rather</a>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/AddQuestion">Add Question</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/leaderboard">Leaders Board</a>
              </li>
            </ul>
          <a className="nav-link" href="/" onClick={this.props.logOutUser}>{ this.props.user } : Logout</a>
        </nav>
      </div>
    );
  }
}
