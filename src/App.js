import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MyModal from './components/modal';
import SideNavbar from "./components/sidebar"
import API from './components/background';
import AboutMe from './components/aboutme';
import Home from "./components/home"
import Myprojects from './components/myprojects';

function App() {
  return (

    <Router>
      <div>
        <API />
        <SideNavbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route exact path="/projects">
          <Myprojects />
        </Route>
        <MyModal />
      </div>
    </Router>
  );
}

export default App;
