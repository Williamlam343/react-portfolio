import React from "react"
import { Row, Col } from "react-materialize"
import Cards from "../card"
import Center from "../center"
import homeworks from '../card/homework';
import projects from '../center/projects';
import Projectcard from "../projectcard";

export default function Home() {

    return (
        <div className="z-index-100">
            <Row id="home" className="container z-index-100">

                <Col className="relative mt-20" m={12} s={12}
                >
                    <Center projects={projects} />
                </Col>

                <Col id="projects"
                    className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1"
                    m={12}
                    s={12}>
                    {homeworks.map(hw => <Cards hw={hw} key={hw.id} />)}
                </Col>
                <Col className="relative" m={12} s={12}>
                    {projects.map(project => <Projectcard project={project} key={project.id} />)}
                </Col>
            </Row>
        </div>
    )
}



