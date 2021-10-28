import React from "react"
import { Row, Col } from "react-materialize"
import Center from "../center"
import projects from '../center/projects';
// import Projectcard from "../projectcard";
// import homeworks from '../card/homework';
// import Cards from "../card"




export default function Home() {

    return (

        <div className="z-index-100">
            <Row id="home" className="container z-index-100">

                <Col className="relative mt-20" m={12} s={12}
                >
                    <Center projects={projects} />
                </Col>
                {/* <Col id="projects"
                    className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1"
                    m={12}
                    s={12}>
                    {homeworks.map(hw => <Cards hw={hw} key={hw.id} />)}
                </Col>
                <Route exact path={"/projects"}>
                    <Col className="relative" m={12} s={12}>
                        {projects.map(project => <Projectcard project={project} key={project.id} />)}
                    </Col>
                </Route> */}
            </Row>
        </div>
    )
}



