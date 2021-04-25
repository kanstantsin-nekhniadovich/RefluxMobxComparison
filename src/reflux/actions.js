import { createAction } from 'reflux';

// counter store
export const incrementCounter = createAction();
export const decrementCounter = createAction();
export const setCounter = createAction();

// user store
export const fetchUserInfo = createAction();
