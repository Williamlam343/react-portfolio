import React from "react"
import { Row, Col } from "react-materialize"
import Center from "../../components/center"



export default function Home() {

    return (

        <div className="z-index-100">
            <Row id="home" className="container z-index-100">

                <Col className="relative mt-20" m={12} s={12}
                >
                    <Center />
                </Col>

            </Row>
        </div>
    )
}



