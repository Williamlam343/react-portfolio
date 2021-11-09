import React from "react"
import { SideNav, SideNavItem, Icon, Navbar, NavItem } from "react-materialize"
import { Link } from "react-router-dom"



export default function Navsidebar() {


    return (
        <div>
            <Navbar
                alignLinks="right"
                brand={<Link className="relative" to="/">
                    <a className="text-4xl" >William Lam</a>
                </Link>
                }
                centerLogo
                className="grey darken-4"
                menuIcon=""

            >
                <Link className="flex" to="/aboutme">
                    About Me
                </Link>
                <Link to="/projects">
                    My Work
                </Link>

                <NavItem href="#contacts">
                    My Contacts
                </NavItem>

                <NavItem to="">
                    Resume
                </NavItem>
            </Navbar>

            <SideNav
                className="grey darken-4"
                id="SideNav-31"
                options={{
                    draggable: true,
                    edge: "left"
                }}
                trigger={
                    <button className="
                    cursor-pointer grey darken-4 absolute left-2 top-3 "
                    >
                        <Icon small className=" lg:hidden text-white p-1 top-0 ">menu</Icon>
                    </button>
                }
            >

                <Link to={"/"}>
                    <SideNavItem
                        subheader
                        icon={<Icon ><i className="text-white material-icons">home</i></Icon>}
                        waves
                    >
                        <p className=" text-white">Home</p>
                    </SideNavItem>
                </Link>
                <Link to={"/projects"}>

                    <SideNavItem

                        icon={<Icon><i className="text-white material-icons">computer</i></Icon>}
                        waves
                    >
                        <p className=" text-white">My Work</p>
                    </SideNavItem>
                </Link>
                <Link className="" to={"/aboutme"}>
                    <SideNavItem

                        icon={<Icon ><i className="text-white material-icons">info_outline</i></Icon>}
                        waves
                    >
                        <p className=" text-white">About Me</p>
                    </SideNavItem>

                </Link>

                <Link to={"/"}>
                    <SideNavItem
                        href="#resume"
                        icon={<Icon ><i className="text-white material-icons" >book</i></Icon>}
                        waves
                    >
                        <p className=" text-white">Resume</p>
                    </SideNavItem>
                </Link>


                <SideNavItem
                    href="#contacts"
                    icon={<Icon ><i className="text-white material-icons" >link</i></Icon>}
                    waves>
                    <p className="text-white"> Contacts </p>

                </SideNavItem>



            </SideNav>
        </div>

    )
}