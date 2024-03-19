import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon, 
    SidebarLink, 
    SideBarMenu
    
    } from '../styles/Sidebar.styled'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer
        isOpen = {isOpen}
        onClick = {toggle}
    >
        <Icon
            onClick={toggle}
        >
            <CloseIcon />
        </Icon>
        <SideBarMenu>
            <SidebarLink to = 'about' onClick={toggle}>About</SidebarLink>
            <SidebarLink to = 'work' onClick={toggle}>Work</SidebarLink>
            <SidebarLink to = 'contact' onClick={toggle}>Contact</SidebarLink>
        </SideBarMenu>
    </SidebarContainer>
  )
}

export default Sidebar