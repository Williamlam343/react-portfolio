import React from "react"
import { SideNav, SideNavItem, Button, Icon } from "react-materialize"


export default function Navsidebar() {

    return (
        <div>
            <SideNav
                className="grey darken-4"
                id="SideNav-31"
                options={{
                    draggable: true,
                    edge: "left"
                }}
                trigger={<Button className="grey darken-4 fixed" node="button"><Icon>menu</Icon></Button>}
            >
                <SideNavItem
                    style={{ color: "black" }}
                    user={{
                        email: 'williamlam343@gmail.com',
                        image: 'https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif',
                        name: 'William Lam'
                    }}
                    userView
                />
                <SideNavItem divider />
                <SideNavItem
                    href="#!icon"
                    icon={<Icon ><i className="text-white material-icons">home</i></Icon>}
                    waves
                >
                    <p className=" text-white">Home</p>
                </SideNavItem>
                <SideNavItem
                    href="#!icon"
                    icon={<Icon><i className="text-white material-icons">computer</i></Icon>}
                    waves
                >
                    <p className=" text-white">My Projects</p>
                </SideNavItem>
                <SideNavItem
                    href="#!icon"
                    icon={<Icon ><i className="text-white material-icons">info_outline</i></Icon>}
                    waves
                >
                    <p className=" text-white">About Me</p>
                </SideNavItem>
                <SideNavItem
                    href="#!icon"
                    icon={<Icon ><i className="text-white material-icons">book</i></Icon>}
                    waves
                >
                    <p className=" text-white">Resume</p>
                </SideNavItem>


                <SideNavItem
                    icon={<Icon ><i className="text-white material-icons">linkedin</i></Icon>}
                    subheader>
                    <p className="text-white"> Contacts </p>
                </SideNavItem>
                <SideNavItem href="https://github.com/Williamlam343">
                    <p className="text-white">GitHub</p>
                </SideNavItem>
                <SideNavItem
                    href="https://www.linkedin.com/in/william-lam-115325218/" >
                    <p className="text-white">LinkedIn</p>
                </SideNavItem>


            </SideNav>
        </div>

    )
}