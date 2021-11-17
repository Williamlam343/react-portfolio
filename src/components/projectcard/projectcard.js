import { Card, CardTitle } from "react-materialize"
import React from "react"
import { useMediaQuery } from 'react-responsive'

export default function Projectcard({ project }) {

    const cardIsHoriztonal = useMediaQuery({
        query: '(min-width: 800px)'
    })


    return (
        <Card
            style={{ marginBottom: "3rem" }}

            actions={[
                <div className="flex">

                    <a href={`${project.url}`} target="_blank" className="p-4 hover:bg-gray-200"  > <p className=" inline teal-text text-darken-2 text-md ">GitHub</p></a>
                    <a href={`${project.demo}`} target="_blank" className="p-4 hover:bg-gray-200">  <p className="inline teal-text text-darken-2 text-md ">Demo</p></a>


                </div >

            ]}
            onChange={(e) => console.log(e)}
            header=
            {<CardTitle
                image={require(`../../img/${project.image}`).default || "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"}
            />}
            horizontal={cardIsHoriztonal && true}
            className="text-teal darken-2"
        >
            <h5>{project.name}</h5>
            <p>{project.details}</p>
        </Card>
    )
}