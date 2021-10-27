import React, { useState } from "react"
import { SideNav, SideNavItem, Icon, Modal, Button } from "react-materialize"


export default function Navsidebar() {


    return (
        <div>
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Modal Header"
                id="Modal-10"
                open={true}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}

                trigger={<Icon small top className="fixed z-10 right-1 top-1 cursor-pointer text-white">settings</Icon>}
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </Modal>

            <SideNav
                className="grey darken-4"
                id="SideNav-31"
                options={{
                    draggable: true,
                    edge: "left"
                }}
                trigger={
                    <button className="cursor-pointer grey darken-4 fixed top-0 min-h-screen">
                        <Icon small className=" text-white p-1 top-0">chevron_right</Icon>
                    </button>
                }
            >
                <SideNavItem
                    userView
                    user={{
                        background: require("../../img/lake.jpg").default,
                        email: 'williamlam343@gmail.com',
                        image: 'https://cdn.discordapp.com/attachments/389795272089141250/886092405164605470/SmartSelect_20210713-111905_Chrome.jpg',
                        name: 'William Lam'
                    }}
                >

                </SideNavItem>


                <SideNavItem divider />
                <SideNavItem
                    href="#home"
                    icon={<Icon ><i className="text-white material-icons">home</i></Icon>}
                    waves
                >
                    <p className=" text-white">Home</p>
                </SideNavItem>
                <SideNavItem
                    href="#projects"
                    icon={<Icon><i className="text-white material-icons">computer</i></Icon>}
                    waves
                >
                    <p className=" text-white">My Projects</p>
                </SideNavItem>
                <SideNavItem
                    href="#aboutme"
                    icon={<Icon ><i className="text-white material-icons">info_outline</i></Icon>}
                    waves
                >
                    <p className=" text-white">About Me</p>
                </SideNavItem>
                <SideNavItem
                    href="#resume"
                    icon={<Icon ><i className="text-white material-icons">book</i></Icon>}
                    waves
                >
                    <p className=" text-white">Resume</p>
                </SideNavItem>


                <SideNavItem
                    icon={<Icon ><i className="text-white material-icons">link</i></Icon>}
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