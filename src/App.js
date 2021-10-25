import React from 'react';
import Center from './components/center';
import SideNavbar from "./components/sidebar"
import API from './components/api';
import Cards from './components/card';
import { Row, Col } from "react-materialize"
import homeworks from './components/homework';
import projects from './components/projects';

function App() {
  return (
    <div className="">
      {/* <API /> */}
      <SideNavbar />

      <Row className=""
      >
        <Col className="m-12" m={9} s={12}
          offset={"m2"}>
          <Center projects={projects} />
        </Col>
      </Row>

      <Row>
        <Col
          className="flex flex-wrap justify center flex-col md:flex-row"
          m={9}
          s={12}
          offset={"m2"}
        >
          {homeworks.map(hw => <Cards hw={hw} key={hw.id} />)}

        </Col>
      </Row>




    </div>
  );
}

export default App;
