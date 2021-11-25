import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import { connectRouter } from 'connected-react-router'

export const createRootReducer = (history) => combineReducers(
  {
    router: connectRouter(history),
    oidc: oidcReducer,
  }
);

export default createRootReducer;