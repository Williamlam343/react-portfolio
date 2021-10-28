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

            className="relative max-w-full grey lighten-3 z-depth-2" >
            <Slide image={<img src="https://images.unsplash.com/photo-1532080511667-3d838e8d2b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80" ></img>}>
                <Caption placement="center">
                    <h2 className="relative 4 text-6xl cursor-default blue-grey-text">
                        Hello World!
                    </h2>
                    <h5 className="relative text-4xl light cursor-default">
                        My name is William Lam, a fresh graduate of the University of Arizona's fullstack bootcamp program
                    </h5>
                    <h6 >
                        <a className="light relative text-3xl cursor-pointer orange-text text-accent-3" href={`#aboutme`}>Click here for more about me</a>
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
            // src={require(`../../img/${projects[0].image}`).default}
            />}>
                <Caption placement="left">
                    <h2 className=" relative light text-6xl cursor-default ">
                        {projects[0].name}
                    </h2>
                    <h5 className=" relative light cursor-default text-3xl  ">{projects[0].description}</h5>

                </Caption>
            </Slide>
            <Slide image={<img
                className="center-img"
                alt="project image"
            // src={require(`../../img/${projects[1].image}`).default}
            />}>
                <Caption placement="left">
                    <h2 className=" relative text-6xl cursor-default ">
                        {projects[1].name}
                    </h2>
                    <h5 className=" relative cursor-default text-3xl ">{projects[1].description}</h5>

                </Caption>
            </Slide>


        </Slider>

    )
}

