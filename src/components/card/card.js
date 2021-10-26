import React from "react";
import { Card, Icon, CardTitle } from "react-materialize"


export default function Cards({ hw }) {


    return (

        <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle alt="hw image" image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" reveal waves="light" />}
            reveal={<p>{hw.description}</p>}
            revealIcon={<Icon className="text-black absolute p-1 right-1 top-0">more_horiz</Icon>}
            title={hw.name}
            style={{ margin: "1rem" }}
            className="z-depth-2  md:max-w-xs flex-shrink md:left-10"
        >

            <a href={`${hw.url}`}>
                <Icon className="text-black p-1 github text-center bottom-2">link</Icon>

            </a>

        </ Card>

    )
}