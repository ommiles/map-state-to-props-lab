import React, { Component } from "react";
// add any needed imports here
import { connect } from "react-redux";
class Users extends Component {
  render() {
    let users = this.props.users.map((user, index) => (
      <li key={index}><strong>{user.username}</strong> | <em>{user.hometown}</em></li>
    ));
    return (
      <div>
        <h1>Number of Users: {this.props.numberOfUsers}</h1>
        <ul>
          <h2>Users List:</h2>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {users}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length,
  };
};

// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);
