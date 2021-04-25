import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from './StoreProvider';

export const UserInfo = observer(() => {
  const { user } = useStore();
  const [username, setUsername] = React.useState();

  const onChange = (event) => {
    setUsername(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    user.fetchUserInfo(username);
  }

  return (
    <>
      <h3>Get user info</h3>
      <form onSubmit={onSubmit}>
        <input value={username} onChange={onChange} />
        <button type="submit">Get user info</button>
      </form>
      {user.user && <a target="_blank" href={user.user.html_url}>User Profile</a>}
    </>
  );
});
