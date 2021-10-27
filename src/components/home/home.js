import React from "react"
import { Row, Col } from "react-materialize"
import Cards from "../card"
import Center from "../center"
import homeworks from '../card/homework';
import projects from '../center/projects';


export default function Home() {

    return (
        <div className="z-index-100">
            <Row className="container z-index-100">

                <Col className="relative mt-20" m={12} s={12}
                >
                    <Center projects={projects} />
                </Col>

                <Col
                    className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1"
                    m={12}
                    s={12}>
                    {homeworks.map(hw => <Cards hw={hw} key={hw.id} />)}
                </Col>
            </Row>
        </div>
    )
}



