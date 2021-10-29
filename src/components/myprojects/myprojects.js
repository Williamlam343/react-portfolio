import React from "react"
import { Row, Col } from "react-materialize"
import Cards from "../card"

import homeworks from '../card/homework';
import projects from '../center/projects';
import Projectcard from "../projectcard";




export default function Myprojects() {

    return (
        <div className="z-index-100">
            <Row id="home" className="container relative top-10">
                <Col className="relative mb-5" m={12} s={12}>

                    {projects.map(project => <Projectcard project={project} key={project.id} />)}
                </Col>
                <Col id="projects"
                    className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1"
                    m={12}
                    s={12}>
                    {homeworks.map(hw => <Cards hw={hw} key={hw.id} />)}
                </Col>

            </Row>
        </div>
    )
}

