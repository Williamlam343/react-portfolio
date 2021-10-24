import React from "react";
import { Card, Icon, CardTitle } from "react-materialize"


export default function Cards(props) {

    return (

        <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light" />}
            reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title="Card Title"
            style={{ margin: "1rem" }}
            className="z-depth-4 rounded-lg"
        >
            <p>
                <a href="#">
                    This is a link
                </a>
            </p>
        </ Card>

    )
}