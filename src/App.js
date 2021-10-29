import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavbar from "./components/sidebar"
import API from './components/background';
import AboutMe from './components/aboutme';
import Home from "./components/home"
import Myprojects from './components/myprojects';
// window.location.href = "/"
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
      </div>
    </Router>
  );
}

export default App;
