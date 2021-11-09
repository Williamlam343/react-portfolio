import React from "react";
import { Row, Col } from "react-materialize";


export default function Center() {
    return (
        <Row>
            <Col m={12} className="container flex flex-col items-center justify-center">

                <div className="bg-gray-200 p-2.5 bg-opacity-70 z-depth-3 rounded-full">
                    <div className="">
                        <img className="rounded-full justify-center max-w-md z-depth-3" src={"https://cdn.discordapp.com/attachments/389795272089141250/907385528100479016/20210708_200237.jpg"} />
                    </div>
                </div>
                <div className="text-grey text-darken-4 text-center bg-gray-200 bg-opacity-80 p-2 rounded-3xl relative top-8 text-4xl">
                    <p>Hello World!</p>
                    <p className="text-2xl">My name is William Lam, I am an employer ready full stacked developer</p>
                </div>

            </Col>


        </Row>
    )
}

