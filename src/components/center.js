import React from "react";
import { Slider, Slide, Caption } from "react-materialize"


export default function Center({ projects }) {
    console.log(projects)

    return (


        <Slider
            fullscreen={false}
            options={{
                duration: 500,
                height: 300,
                indicators: true,
                // interval: 6000

            }}

            className="relative bg-white z-depth-2" >
            <Slide image={<img alt="" src="" />}>
                <Caption placement="center">
                    <h2>
                        Hello World!
                    </h2>
                    <h5 className="light grey-text text-lighten-3">
                        My name is William Lam, a fresh graduate of the University of Arizona's fullstack bootcamp program
                    </h5>
                    <p >
                        <a className="light cursor-pointer light cyan-text text-lighten-3" href={`#`}>Click here for more about me</a>
                    </p>

                </Caption>
            </Slide>
            <Slide image={<img className="center-img" alt="project image" src={`${projects[0].image}`} />}>
                <Caption placement="left">
                    <h3 className="light grey-text text-lighten-3">
                        {projects[0].name}
                    </h3>
                    <h6 className="light grey-text text-lighten-3">{projects[0].description}</h6>
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
                <Caption placement="left">
                    <h3>
                        {projects[1].name}
                    </h3>
                    <h6 className="light grey-text text-lighten-3">{projects[1].description}</h6>
                    <h5 className="light blue-text text-lighten-3">
                        <a className="cursor-pointer light teal-text text-accent-1" href={`${projects[1].url}`}> Github Link </a>
                    </h5>
                    <h5 className="light grey-text text-lighten-1">
                        <a className="cursor-pointer light cyan-text text-lighten-3" href={`${projects[1].demo}`}> Live Demo </a>
                    </h5>
                </Caption>
            </Slide>


        </Slider>

    )
}

{/* <Slide >
    <Caption placement="left">
     
    </Caption>
</Slide>
<Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3" />}>
    <Caption placement="right">
        <h3>
            Right Aligned Caption
        </h3>
        <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
        </h5>
    </Caption>
</Slide>
<Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4" />}>
    <Caption placement="center">
        <h3>
            This is our big Tagline!
        </h3>
        <h5 className="light grey-text text-lighten-3">
            Here's our small slogan.
        </h5>
    </Caption>
</Slide> */}