import React from "react";
import { Slider, Slide, Caption } from "react-materialize"
import projects from "./projects";

export default function Center() {
    return (
        <Slider
            fullscreen={false}
            options={{
                duration: 500,
                height: 400,
                indicators: true,
                interval: 6000
            }}

            className="relative max-w-full mb-20 grey lighten-3 z-depth-2" >
            <Slide image={<img src="" ></img>}>
                <Caption placement="center">
                    <h2 className="cursor-default light-blue-text text-lighten-4">
                        Hello World!
                    </h2>
                    <h5 className="light cursor-default light-blue-text text-lighten-5">
                        My name is William Lam, a fresh graduate of the University of Arizona's fullstack bootcamp program
                    </h5>
                    <p >
                        <a className="light cursor-pointer cyan-text text-lighten-3" href={`#`}>Click here for more about me</a>
                    </p>

                </Caption>
            </Slide>


            {projects.map(project =>
                <Slide
                    image={
                        <img
                            className="center-img"
                            alt="project image"
                            src={require(`../../img/${project.image}`).default}
                        />}>
                    <Caption placement="left">
                        <h2 className=" light-blue-text cursor-default text-accent-3 ">
                            {project.name}
                        </h2>
                        <h5 className="light cursor-default light-blue-text text-accent-1">{project.description}</h5>
                        {/* <h5 >
                            <a
                                className="cursor-pointer light white-text text-accent-1" href={`${project.url}`}> Github Link</a>
                        </h5>
                        <h5 >
                            <a className="cursor-pointer light cyan-text text-lighten-3" href={`${project.demo}`}> Live Demo </a>
                        </h5> */}
                    </Caption>
                </Slide>)}
            {/* <Slide image={<img className="center-img" alt="project image" src={`${projects[0].image}`} />}>
                <Caption placement="left">
                    <h3 className="light grey-text cursor-default text-lighten-3 ">
                        {projects[0].name}
                    </h3>
                    <h6 className="light cursor-default grey-text text-lighten-3">{projects[0].description}</h6>
                    <h5 >
                        <a
                            className="cursor-pointer light teal-text text-accent-1" href={`${projects[0].url}`}> Github Link</a>
                    </h5>
                    <h5 >
                        <a className="cursor-pointer light cyan-text text-lighten-3" href={`${projects[0].demo}`}> Live Demo </a>
                    </h5>
                </Caption>
            </Slide>
            <Slide image={<img className="center-img" alt="project image" src={`${projects[1].image}`} />}>
                <Caption placement="right">
                    <h3 className="cursor-default">
                        {projects[1].name}
                    </h3>
                    <h6 className="light grey-text cursor-default text-lighten-3">{projects[1].description}</h6>
                    <h5 className="light blue-text text-lighten-3">
                        <a className="cursor-pointer light teal-text text-accent-1" href={`${projects[1].url}`}> Github Link </a>
                    </h5>
                    <h5 className="light grey-text text-lighten-1">
                        <a className="cursor-pointer light cyan-text text-lighten-3" href={`${projects[1].demo}`}> Live Demo </a>
                    </h5>
                </Caption>
            </Slide> */}


        </Slider>

    )
}

