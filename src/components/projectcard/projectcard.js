import { Card, CardTitle } from "react-materialize"


export default function Projectcard({ project }) {
    console.log(project.url)
    return (
        <Card
            actions={[
                <div>

                    <a href={`${project.url}`}>Github</a>
                    <a href={`${project.demo}`}>Demo</a>
                </div>

            ]}

            header=
            {<CardTitle
                image={require(`../../img/${project.image}`).default}
            />}
            horizontal
            className=""
        >
            <h5>{project.name}</h5>
            <p>{project.details}</p>
        </Card>
    )
}