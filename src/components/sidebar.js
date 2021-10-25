import React from 'react'
import { Sidebar, DropdownItem, Icon, Item, Logo, LogoText } from "react-sidebar-ui"
import 'react-sidebar-ui/dist/index.css';

export default function SideNavbar() {

    return (
        <div>

            <Sidebar bgColor="black" isCollapsed={false}>

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
                {/* <DropdownItem
                    values={['First', 'Second', 'Third']}
                    bgColor={'black'}>
                    Menu
                </DropdownItem> */}

                <Item bgColor='black'>
                    <Icon className="text-end"><i className="relative top-1 material-icons">house</i></Icon>
                    Home
                </Item >
                <Item bgColor='black'>
                    <Icon><i className="relative top-1 material-icons">computer</i></Icon>
                    My Projects
                </Item>
                <Item bgColor='black'>
                    <Icon><i className="relative top-1  material-icons">info</i></Icon>
                    About Me
                </Item>

                <DropdownItem
                    values={['LinkIn', 'Github', 'Email']}
                    bgColor={'black'}>
                    <Icon><i className="relative top-1  material-icons">import_contacts</i></Icon>
                    Contacts
                </DropdownItem>




            </Sidebar >
        </div >
    )
};