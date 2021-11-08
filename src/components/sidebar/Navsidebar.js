import React from "react"
import { SideNav, SideNavItem, Icon, Navbar, NavItem } from "react-materialize"
import { Link } from "react-router-dom"



export default function Navsidebar() {


    return (
        <div>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" target="_blank" href="https://www.linkedin.com/in/william-lam-115325218/">William Lam</a>}
                centerLogo
                className="grey darken-4"
                menuIcon=""
            // sidenav={ }
            >
                <Link to="/aboutme">
                    <NavItem
                        waves>
                        About Me
                    </NavItem>
                </Link>
                <Link to="/projects">
                    <NavItem href="">
                        My Work
                    </NavItem>
                </Link>
                <Link to="">
                    <NavItem href="">
                        Resume
                    </NavItem>
                </Link>
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
                        <Icon small className=" text-white p-1 top-0 ">menu</Icon>
                    </button>
                }
            >
                <SideNavItem
                    userView
                    user={{

                        email: 'williamlam343@gmail.com',

                        name: 'William Lam'
                    }}
                >


                </SideNavItem>


                <SideNavItem divider />

                <Link to={"/"}>
                    <SideNavItem
                        href="#home"
                        icon={<Icon ><i className="text-white material-icons">home</i></Icon>}
                        waves
                    >
                        <p className=" text-white">Home</p>
                    </SideNavItem>
                </Link>
                <Link to={"/projects"}>

                    <SideNavItem
                        href="#projects"
                        icon={<Icon><i className="text-white material-icons">computer</i></Icon>}
                        waves
                    >
                        <p className=" text-white">My Work</p>
                    </SideNavItem>
                </Link>
                <Link to={"/aboutme"}>
                    <SideNavItem
                        href="#aboutme"
                        icon={<Icon ><i className="text-white material-icons">info_outline</i></Icon>}
                        waves
                    >
                        <p className=" text-white">About Me</p>
                    </SideNavItem>

                </Link>
                <SideNavItem
                    href="#resume"
                    icon={<Icon ><i className="text-white material-icons" >book</i></Icon>}
                    waves
                >
                    <p className=" text-white">Resume</p>
                </SideNavItem>

                {/* <Link to={"/aboutme"}>
                    <SideNavItem
                        icon={<Icon ><i className="text-white material-icons" >link</i></Icon>}
                        waves>
                        <p className="text-white"> Contacts </p>

                    </SideNavItem>
                </Link>
                <SideNavItem

                    target="_blank" href="https://github.com/Williamlam343"
                >
                    <a className="text-white">GitHub</a>
                </SideNavItem>
                <SideNavItem >
                    <a target="_blank" href="https://www.linkedin.com/in/william-lam-115325218/" className="text-white">LinkedIn</a>
                </SideNavItem> */}

            </SideNav>
        </div>

    )
}