import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavbar from "./components/sidebar"
import API from './components/background';
import AboutMe from './components/aboutme';
import Home from "./components/home"
import Myprojects from './components/myprojects';
import MyFooter from './components/footer';
function App() {




  return (

    <Router>
      <body className="min-h-screen" >
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
      </body>
      <MyFooter />

    </Router>
  );
}

export default App;
