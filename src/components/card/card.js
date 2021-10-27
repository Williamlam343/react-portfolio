import React from "react";
import { Card, Icon, CardTitle } from "react-materialize"


export default function Cards({ hw }) {


    return (

        <Card

            closeIcon={<Icon>close</Icon>}
            header={<CardTitle alt="hw image" image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" reveal waves="light" />}
            reveal={<p className="z-20">{hw.description}</p>}
            revealIcon={<Icon className="text-black">more_horiz</Icon>}
            title={<p className="cursor-default text-center text-2xl">{hw.name}</p>}
            style={{ margin: "1rem" }}
            className="z-depth-2 max-w-full md:max-w-xs"
        >

            <a className="github" href={`${hw.url}`} target="_blank">
                <Icon className="text-black right-6 text-center bottom-2">link</Icon>
            </a>

        </ Card>

    )
}


// "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"