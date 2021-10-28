import React from "react";
import { Card, Icon, CardTitle } from "react-materialize"


export default function Cards({ hw }) {

    const colors = [
        'red',
        'purple',
        'light',
        'teal',
        'green',
        'yellow',
        'orange',
        'grey',
    ]

    let n = Math.floor(Math.random() * colors.length)


    return (

        <Card
            // horizontal
            closeIcon={<Icon>close</Icon>}
            header={
                <CardTitle

                    alt="hw image"
                    image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
                    // image={require(`../../img/${hw.image}`).default}
                    reveal
                    waves={colors[n]}
                />}
            reveal={<p className="">{hw.description}</p>}
            revealIcon={<Icon className="light-blue-text  text-darken-2">more_horiz</Icon>}
            title={<p className="cursor-default light-blue-text text-darken-3 text-center text-3xl">{hw.name}</p>}
            style={{ margin: "1rem" }}
            className="z-depth-4 grey lighten-4  max-w-full"
        >

            <a href={`${hw.demo}`}>
                <p className="light-blue-text text-darken-2 text-xl " rel="noreferrer" target="_blank">Demo</p>
            </a>

            <a className="github" href={`${hw.url}`} target="_blank" rel="noreferrer">
                <Icon className="light-blue-text text-darken-2right-6 bottom-2">link</Icon>
            </a>

        </ Card>

    )
}


// "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"