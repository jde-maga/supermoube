import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  getUsers = async () => {
    const res = await axios.get('/getUsers');
    console.log(res);
  }

  render() {
    return (
      <div>
        <div>bonjouruser</div>
        <button onClick={this.getUsers}>click me</button>
      </div>
    );
  }
}

export default User;
