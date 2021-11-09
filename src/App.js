import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavbar from "./components/sidebar"
import Background from './components/background';
import AboutMe from './components/aboutme';
import Home from "./views/home"
import Myprojects from './views/myprojects';
import MyFooter from './views/footer';
function App() {




  return (

    <Router>
      <body className="min-h-screen" >
        <Background />
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
