import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";



export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #2D3748;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${(props) => (props.isOpen ? '100%' : '0')};
    top: ${(props) => (props.isOpen ? '0' : '-100%')};
    
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    &:hover {
        color: #A7333F;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 2.5rem;
    right: 2.8rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: #A7333F;
        transition: 0.2s ease-in-out;
    }

`


export const SideBarLinkWrapper = styled.div`
    border-radius: 50px;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #A7333F;
        color: #fff;
    }
`

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 80px);
    }
    color: #fff;
`