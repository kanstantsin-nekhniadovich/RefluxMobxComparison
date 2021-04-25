import React from 'react';
import { Component } from 'reflux';

import { UserStore } from './UserStore'

import * as actions from './actions';

export class UserInfo extends Component {
  constructor() {
    super();

    this.store = UserStore;
    this.setUsername = this.setUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    username: '',
  }

  setUsername(event) {
    this.setState({ ...this.state, username: event.target.value });
  }

  async onSubmit(event) {
    event.preventDefault();
    await actions.fetchUserInfo(this.state.username);
  }

  render() {
    const { username, user } = this.state;

    return (
      <>
        <h3>Get user info</h3>
        <form onSubmit={this.onSubmit}>
          <input value={username} onChange={this.setUsername} />
          <button type="submit">Get user info</button>
        </form>
        {user && <a target="_blank" href={user.html_url}>User Profile</a>}
      </>
    );
  }
}
