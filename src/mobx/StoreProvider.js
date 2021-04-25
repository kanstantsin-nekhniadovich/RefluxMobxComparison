import React from 'react';

import { Counter } from './Counter';
import { User } from './User';

const store = {
  counter: new Counter(),
  user: new User(),
}

const Context = React.createContext();

export const StoreProvider = ({ children }) => <Context.Provider value={store}>{children}</Context.Provider>;

export const useStore = () => React.useContext(Context);

export const withStore = (Component) => (props) => <Component {...props} store={useStore()} />;
