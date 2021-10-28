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
            <Slide image={<img alt="center img" src="https://images.unsplash.com/photo-1532080511667-3d838e8d2b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80" ></img>}>
                <Caption placement="center">
                    <h2 className="relative md:bottom-8 bottom-24 cursor-default blue-grey-text text--1">
                        Hello World!
                    </h2>
                    <h5 className="relative md:bottom-10 bottom-24 light cursor-default">
                        My name is William Lam, a fresh graduate of the University of Arizona's fullstack bootcamp program
                    </h5>
                    <h6 >
                        <a className="light relative md:bottom-12 bottom-24 cursor-pointer orange-text text-accent-3" href={`#aboutme`}>Click here for more about me</a>
                    </h6>

                </Caption>
            </Slide>

            {/* 
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
                        <h5 >
                            <a
                                className="cursor-pointer light white-text text-accent-1" href={`${project.url}`}> Github Link</a>
                        </h5>
                        <h5 >
                            <a className="cursor-pointer light cyan-text text-lighten-3" href={`${project.demo}`}> Live Demo </a>
                        </h5>
                    </Caption>
                </Slide>)} */}
            <Slide image={<img
                className="center-img"
                alt="project image"
                src=""
            />}>
                <Caption placement="left">
                    <h2 className="md:top-44 top-20 relative light yellow-text cursor-default text-lighten-2 ">
                        {projects[0].name}
                    </h2>
                    <h5 className="md:top-40 top-20 relative light cursor-default yellow-text text-lighten-2">{projects[0].description}</h5>
                    {/* <h5 >
                        <a
                            className="cursor-pointer light teal-text text-accent-1" href={`${projects[0].url}`}> Github Link</a>
                    </h5>
                    <h5 >
                        <a className="cursor-pointer light cyan-text text-lighten-3" href={`${projects[0].demo}`}> Live Demo </a>
                    </h5> */}
                </Caption>
            </Slide>
            <Slide image={<img
                className="center-img"
                alt="project image"
                src=""
            />}>
                <Caption placement="left">
                    <h2 className="md:bottom-20 bottom-10 relative light-blue-text cursor-default text-darken-1">
                        {projects[1].name}
                    </h2>
                    <h5 className="md:bottom-24 bottom-14 relative grey-text cursor-default light-blue-text text-accent-2">{projects[1].description}</h5>
                    {/* <h5 className="light blue-text text-lighten-3">
                        <a className="cursor-pointer light grey-text text-darken-3" href={`${projects[1].url}`}> Github Link </a>
                    </h5>
                    <h5 className="light grey-text text-lighten-1">
                        <a className="cursor-pointer light cyan-text text-lighten-3" href={`${projects[1].demo}`}> Live Demo </a>
                    </h5> */}
                </Caption>
            </Slide>


        </Slider>

    )
}

