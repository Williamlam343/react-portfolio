import React from 'react';
import Center from './components/center/center';
import SideNavbar from "./components/sidebar/sidebar"
import API from './components/background';
import AboutMe from './components/aboutme';
import Cards from './components/card';
import { Row, Col } from "react-materialize"
import homeworks from './components/card/homework';
import projects from './components/center/projects';


function App() {
  return (
    <div className="">
      <API />
      <SideNavbar />
      {/* <Row style={{ marginBottom: "0px" }} className="top-20 md:left-20 relative container">

        <AboutMe />

      </Row> */}

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
