import React from 'react';
import NavBar from './components/navbar';
import Center from './components/center';
import "./App.css"




function App() {
  return (
    <>
      <NavBar name="William Lam" navItem={["About Me", "Contacts", "Resume"]} />
      <Center />

    </>
  );
}

export default App;
