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
            <Slide image={

                <img src="https://images.unsplash.com/photo-1532080511667-3d838e8d2b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2026&q=80" ></img>

            }

            >
                <Caption placement="center">
                    <h2 className="relative 4 text-4xl md:text-5xl cursor-default blue-grey-text">
                        Hello World!
                    </h2>
                    <h5 className="relative text-2xl md:text-3xl light cursor-default">
                        My name is William Lam, a full stack web developer.
                    </h5>
                    <h6 >
                        <a className="light relative text-3xl cursor-pointer yellow-text text-accent-3" href={`#aboutme`}></a>
                    </h6>

                </Caption>
            </Slide>

            <Slide image={<img
                className="center-img"
                alt="project image"
                src="https://raw.githubusercontent.com/athaight/group-project-one/main/assets/img/SoundborderLG.png"
            />}>
                <Caption placement="left">
                    <h2 className=" relative light text-3xl md:text-5xl cursor-default ">
                        {projects[0].name}
                    </h2>
                    <h5 className=" relative light cursor-default text-2xl  md:text-3xl  ">{projects[0].description}</h5>

                </Caption>
            </Slide>
            <Slide image={
                <img
                    className="center-img"
                    alt="project image"
                    src="https://raw.githubusercontent.com/Williamlam343/react-portfolio/main/src/img/watch_dog.png"
                />}>
                <Caption placement="right">
                    <h2 className=" relative text-3xl md:text-5xl blue-grey-text cursor-default ">
                        {projects[1].name}
                    </h2>
                    <h5 className=" relative cursor-default blue-grey-text cursor text-2xl md:text-3xl text-lighten-2">{projects[1].description}</h5>

                </Caption>
            </Slide>


        </Slider >

    )
}

