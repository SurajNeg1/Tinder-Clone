import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
import Chats from "./Chats";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path ="/chat/:person">
              <Header backbutton="/chat"/>
              <ChatScreen />
            </Route>
            <Route path ="/chat">
              <Header backbutton="/"/>
              <Chats />
            </Route>
            <Route path ="/">
              <Header />
              <TinderCards/>
              <SwipeButtons/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
