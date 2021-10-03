
import React from 'react';

import CoverPage from './Pages/CoverPage';

import './App.css';

import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch style= {{padding: 0}}>
          <Route exact path="/">
            <CoverPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
