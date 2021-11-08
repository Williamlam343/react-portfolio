import React from "react"
import { Row, Col } from "react-materialize"
import Cards from "../card"

import homeworks from '../card/homework';
import projects from '../center/projects';
import Projectcard from "../projectcard";




export default function Myprojects() {

    return (
        <div className="z-index-100">
            <Row id="home" className="container relative top-5">
                <h1 className="text-6xl bg-black p-2 bg-opacity-60 flex justify-center rounded z-depth-3 grey-text text-lighten-3" >My Projects</h1>
                <Col className="relative mb-5" m={12} s={12}>

                    {projects.map(project => <Projectcard project={project} key={project.id} />)}
                </Col>
                <h1 className="text-6xl bg-black p-2 bg-opacity-60 flex justify-center rounded z-depth-3 grey-text text-lighten-3" >Mini Projects</h1>
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

