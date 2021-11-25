import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';
import {  Route, Routes ,BrowserRouter} from 'react-router-dom';
import Overview from './pages/Overview';
import NoMatch from './layouts/Sidebar/NotFound';
import { ConnectedRouter } from 'connected-react-router'
import { OidcProvider } from 'redux-oidc';
import CallbackPage from './components/CallbackPage';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore'
import userManager from './utils/userManager';
import HomePage from './components/HomePage';

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <OidcProvider store={store} userManager={userManager}>
  <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }

      <> { /* your usual react-router v4/v5 routing */ }
      <BrowserRouter>
      <Routes>
      <Route exact path='/'  element={<HomePage/>} >
        <Route path='overview' exact element={<Overview/>} />
        <Route path="callback" element={<CallbackPage/>} />
        <Route path='*' exact element={<NoMatch/>} />
      </Route>
      </Routes>
      </BrowserRouter>
    </>
    </ConnectedRouter>    
    </OidcProvider>
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

