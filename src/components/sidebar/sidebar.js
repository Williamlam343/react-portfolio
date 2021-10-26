import React from 'react'
import { Sidebar, Icon, Item, Logo, LogoText } from "react-sidebar-ui"


export default function SideNavbar() {

    return (
        <div>

            <Sidebar classes="grey darken-3" isCollapsed={false}>

                <Icon>
                    <i class="absolute right-2 top-1 text-3xl material-icons cursor-pointer">
                        close
                    </i>
                </Icon>
                <Icon>
                    <i class="absolute right-2 top-1 text-3xl material-icons cursor-pointer invisible">
                        menu
                    </i>
                </Icon>


                <Logo
                    classes="m-16"
                    image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
                    imageName='react logo' />
                <LogoText>William Lam</LogoText>


                <Item classes='grey darken-3'>
                    <Icon className="text-end"><i className="relative top-1 material-icons">house</i></Icon>
                    Home
                </Item >
                <Item classes='grey darken-3'>
                    <Icon><i className="relative top-1 material-icons">computer</i></Icon>
                    My Projects
                </Item>
                <Item classes='grey darken-3'>
                    <Icon><i className="relative top-1  material-icons">info</i></Icon>
                    About Me
                </Item>
                <Item classes='grey darken-3'>

                    <Icon><i className="relative top-1  material-icons">import_contacts</i></Icon>
                    Contacts
                </Item>





            </Sidebar >
        </div >
    )
};