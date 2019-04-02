import React, { Component } from 'react';
import { connect } from 'react-redux'
import LeaderBoardCard from "./LeaderBoardCard";
import InvalidPage from "./InvalidPage";
import AppBar from "./AppBar";


class Leadersboard extends Component {


  objSize = (Myobj) => {
    let osize = 0, key;
    for (key in Myobj) {
      if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
  };


  render() {
    const usersList = Object.values(this.props.users).sort((a,b) => {
      if(this.objSize(a.answers)+a.questions.length < this.objSize(a.answers)+b.questions.length ){
        return 1
      } else if(this.objSize(a.answers)+a.questions.length > this.objSize(a.answers)+b.questions.length ) {
        return -1
      } else
        return 0
    })

    console.log(usersList)

    return (
      <div className="container">

        {
          this.props.loggedInUser !== "" ?
            <div>
              <AppBar user={this.props.loggedInUser}  userName={this.props.users[this.props.loggedInUser].name} logOutUser={this.props.logOutUser}/>
              {usersList.map((item,index) => <LeaderBoardCard key={item.id} rank={index} user={item}/>) }
            </div> :
            <InvalidPage/>
        }

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  loggedInUser : state.loggedInUser,
  users : state.users,
  questions : state.questions
})

export default connect(mapStateToProps)(Leadersboard);
