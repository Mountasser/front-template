import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducer/index'
import { loadUser } from 'redux-oidc'
import userManager from './utils/userManager'

export const history = createBrowserHistory()
const loggerMiddleware = store => next => action => {
    console.log("Action type:", action.type);
    console.log("Action payload:", action.payload);
    console.log("State before:", store.getState());
    next(action);
    console.log("State after:", store.getState());
  };
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        loggerMiddleware,
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  );
  loadUser(store, userManager);


  return store
}