import React from "react";
import { Card, Icon, CardTitle } from "react-materialize"


export default function Cards({ hw }) {

    return (

        <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle alt="hw image" image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" reveal waves="light" />}
            reveal={<p>{hw.description}</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title={hw.name}
            style={{ margin: "1rem" }}
            className="z-depth-2 md:max-w-xs flex-shrink md:left-10"
        >
            <p className="break-words">
                <a href={`${hw.url}`}>
                    Github Link
                </a>
            </p>
        </ Card>

    )
}