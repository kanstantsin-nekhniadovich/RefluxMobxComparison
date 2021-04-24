import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reflux">Reflux</Link>
        </li>
        <li>
          <Link to="/mobx">MobX</Link>
        </li>
      </ul>
    </nav>
  );
};
