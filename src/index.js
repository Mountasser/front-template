import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import NoMatch from './layouts/Sidebar/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/'  element={<App/>} >
        <Route path='/overview' exact element={<Overview/>} />
      </Route>
      <Route path='*' exact element={<NoMatch/>} />
      </Routes>
    </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

