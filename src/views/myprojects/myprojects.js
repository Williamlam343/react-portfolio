import React from "react"
import { Row, Col } from "react-materialize"
import Cards from "../../components/card"

import homeworks from "./homework"
import projects from './projects';
import Projectcard from "../../components/projectcard"




export default function Myprojects() {

    return (
        <div className="relative">
            <Row id="home" className="lg:container relative">
                <Col className="mt-20" m={12} s={12}>
                    <p className="text-4xl bg-black w-1/2 lg:w-1/4 p-2 bg-opacity-60 relative flex justify-center rounded z-depth-3 grey-text mb-4 text-lighten-3" >My Projects</p>
                    <div className="">

                        {projects.map(project => <Projectcard project={project} key={project.id} />)}
                    </div>
                </Col>
                <Col className="" m={12} s={12}>
                    <p className="text-3xl bg-black w-1/2 lg:w-1/4 p-2 bg-opacity-60 relative flex justify-center rounded z-depth-3 grey-text text-lighten-3" >Mini Projects</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
                        {homeworks.map(hw => <Cards hw={hw} key={hw.id} />)}

                    </div>

                </Col>

            </Row>
        </div>
    )
}

