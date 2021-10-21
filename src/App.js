import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import CoverPage from "./Pages/CoverPage"
import Category from './Pages/DataPages/Category';
import Users from './Pages/DataPages/Users'
import Comments from './Pages/DataPages/Comments'
import Subscriptions from './Pages/DataPages/Subscriptions'
import Replies from './Pages/DataPages/Replies'
import Posts from './Pages/DataPages/Posts'
import Entries from './Pages/DataPages/Entries'
import Votes from './Pages/DataPages/Votes'
import Competitions from './Pages/DataPages/Competitions'
import Views from './Pages/DataPages/Views'
import Buttons from './Pages/Buttons';

function App() {
  return (
    <Router>
      <div className="App">
        <Buttons/>
        <Switch style= {{padding: 0}}>
          <Route exact path="/">
            <Category/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/comments">
            <Comments/>
          </Route>
          <Route path="/subscriptions">
            <Subscriptions/>
          </Route>
          <Route path="/replies">
            <Replies/>
          </Route>
          <Route path="/posts">
            <Posts/>
          </Route>
          <Route path="/entries">
            <Entries/>
          </Route>
          <Route path="/votes">
            <Votes/>
          </Route>
          <Route path="/competitions">
            <Competitions/>
          </Route>
          <Route path="/views">
            <Views/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
