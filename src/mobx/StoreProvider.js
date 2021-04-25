import React from 'react';

import { Counter } from './Counter';

const store = new Counter();

const Context = React.createContext();

export const StoreProvider = ({ children }) => <Context.Provider value={store}>{children}</Context.Provider>;

export const useStore = () => React.useContext(Context);

export const withStore = (Component) => (props) => <Component {...props} store={useStore()} />;
