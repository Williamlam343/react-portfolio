import React from 'react';
// import MyModal from './components/modal';
import SideNavbar from "./components/sidebar"
import API from './components/background';
import AboutMe from './components/aboutme';
// import Home from "./components/home"


function App() {
  return (
    <div>
      <API />
      <SideNavbar />
      {/* <Home /> */}
      <AboutMe />
      {/* <MyModal /> */}
    </div>
  );
}

export default App;
