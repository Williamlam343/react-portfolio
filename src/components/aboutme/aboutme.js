import React from "react";
import { Row, Icon } from "react-materialize"
import technologies from "./technologies";




export default function AboutMe() {

    return (
        <>
            <Row className="container ">
                <div className="relative w-full md:mb-40 mb-20 top-20 md:top-16">
                    <div className="text-lg  rounded">
                        <div className="flex lighten-3 grey p-2">
                            <Icon className="m-1" style={{ fontSize: "3rem", position: "flex" }}>whatshot</Icon>
                            <p className="m-4">About Me</p>
                        </div>
                        <div className="flex flex-col grey-text text-lighten-2 m-5">
                            <p style={{ textIndent: "2rem" }} className="mb-4 "> My name is William Lam, I am an aspiring web developer based out of South Florida. My coding journey began on August 18, 2020 the first day of bootcamp. Going in with absolutely no knowledge of coding whatsoever, I adapted quickly and grinded the frustrating nuisances and meticulous craft of coding into my brain. From there I soon began to appreciate the world which is made possible by all these meaningless snippets of words.</p>
                            <p style={{ textIndent: "2rem" }} className="mb-4 text-grey-900"> Being fresh and green to this dynamic arena of evolving technologies I can not even pretend to know anything about everything. Everyday I find myself improving and delving into the depths on what I can grasp and understand, only to be humbled by how much there is to learn. To say the least, I am inexperienced, but I have the drive to learn. I constantly strive to broaden my scope and expand on foreign topics head first.</p>
                            <p style={{ textIndent: "2rem" }} className="text-grey-900 "> As a coder, my core value is to write scalable, reusable, and most importantly readable code. Despite collaboration not always being possible, it is still something I work strongly towards because I believe that sharing code is what allows coding to evolve. There are thousands of ways to accomplish the same goal using code, so I want to show the world my way. </p>
                        </div>


                    </div>

                    <div className="text-lg">

                        <div className="flex lighten-3 grey p-2">
                            <Icon className="m-1" style={{ fontSize: "3rem", position: "flex" }}>compare</Icon>
                            <p className=" m-4">Skill Set</p>
                        </div>

                        <div className="flex flex-col m-5 text-lighten-2 grey-text ">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                {technologies.map(tech =>
                                    <div><Icon style={{ fontSize: "8px" }} className="px-2 bottom-0.5 relative">brightness_1</Icon>{tech}</div>
                                )}

                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <div><Icon style={{ fontSize: "8px" }} className="px-2 bottom-0.5 relative">brightness_1</Icon>Experience with several NPM packages: express, axios, sequelize, mongoose, bcrypt, dotenv, apollo </div>
                            </div>


                        </div>

                    </div>



                    <div className="text-lg" >

                        <div className="flex lighten-4 white p-2">
                            <Icon className="m-1" style={{ fontSize: "3rem", position: "flex" }}>timelapse</Icon>
                            <p className="text-2xl bold m-4">Future Plans</p>
                        </div>

                        <div className="flex flex-col grey-text text-lighten-2 m-5 ">
                            <p style={{ textIndent: "2rem" }}>As an aspiring developer I want to continue exploring the possibilities beyond the conventional processes to find creative solutions. I do not want to limit myself within my current knowledge and boundaries. I want to push myself to become a better developer, overcome challenges, and resolve any difficulties I have to face along the road.
                            </p>
                            <p className="m-4"> Some topics I wish to pursue in the future: Svelte, Python, C#, AngularJs, VueJs, Typescript, AWS
                            </p>

                        </div>
                    </div>
                    <div className="backdrop-filter backdrop-blur-md bg-opacity-60 bg-gray-900 h-full z-index-5 w-full block top-0 absolute">
                    </div>
                </div>
            </Row>
        </>
    )
}