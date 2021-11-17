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

            closeIcon={<Icon>close</Icon>}
            header={
                <CardTitle

                    alt="hw image"
                    image={require(`../../img/${hw.image}`).default || "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"}
                    reveal
                    waves={colors[n]}
                />}
            reveal={<p className="">{hw.description}</p>}
            revealIcon={<Icon className="text-darken-2">more_vert</Icon>}
            title={<p className="cursor-default inline grey-text text-darken-3 text-center text-3xl">{hw.name}</p>}
            style={{ margin: "1rem" }}
            className="z-depth-4 grey lighten-4 max-w-full"
            actions={[
                <div className="">

                    <a className="p-3 hover:bg-gray-200" href={`${hw.url}`} target="_blank" rel="noreferrer">
                        <p className="inline teal-text text-darken-2 text-lg ">GitHub</p>
                    </a>
                    <a href={`${hw.demo}`} className="p-3 hover:bg-gray-200" target="_blank" rel="noreferrer">
                        <p className="inline teal-text text-darken-2 text-lg" >Demo</p>
                    </a>
                </div>
            ]}
        >

        </ Card>

    )
}


// "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"