import React from 'react';
import CounterView from './CounterView';
import { UserInfo } from './UserInfo';
import { StoreProvider } from './StoreProvider';

export const MobX = () => {
  return (
    <StoreProvider>
      <h1>Mobx</h1>
      <CounterView />
      <UserInfo />
    </StoreProvider>
  );
};
