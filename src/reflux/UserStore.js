import { Store } from 'reflux';

import { fetchUserInfo } from './actions';
import { fetchGithubUserInfo } from '../api'

export class UserStore extends Store {
  constructor() {
    super();
    this.listenTo(fetchUserInfo, this.fetchUserInfo);
  }

  state = {
    user: null,
  }

  async fetchUserInfo(username) {
    const user = await fetchGithubUserInfo(username);

    this.setState({ ...this.state, user });
  }
}
