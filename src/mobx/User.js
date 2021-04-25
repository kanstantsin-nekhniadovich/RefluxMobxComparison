import { observable, action } from 'mobx';

import { fetchGithubUserInfo } from '../api';

export class User {
  @observable user = null;

  @action
  async fetchUserInfo(username) {
    const user = await fetchGithubUserInfo(username);

    this.user = user;
  }
} 
