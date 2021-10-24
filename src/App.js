import React from 'react';
import Center from './components/center';
import SideNavbar from "./components/sidebar"
import API from './components/api';
import Cards from './components/card';
import { Row, Col } from "react-materialize"



function App() {
  return (
    <div className="">
      <API />

      <SideNavbar />

      <Row className=""
      >
        <Col className="m-12" m={9} s={12}
          offset={"m2"}>
          <Center />
        </Col>
      </Row>

      <Row>
        <Col
          className="flex flex-col md:flex-row"
          m={9}
          s={12}
          offset={"m2"}
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />

        </Col>
      </Row>

    </div>
  );
}

export default App;
