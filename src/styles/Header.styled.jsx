import styled from 'styled-components'
const MEDIUM_SIZE = "768";
import { Provider } from './Global.styled'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaBars } from "react-icons/fa";

export const NavBar = styled.nav`
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    height: 88px;
    align-items: center;
    position: relative;
    padding: 1rem 2rem;
    margin:0;
    @media (max-width: ${MEDIUM_SIZE}${"px"})) {
        flex-direction: column;
    }
}
`
export const Name = styled.div`
    aline-self: start;
    font-size: 1rem;
    text-transform: uppercase;

`

export const NavItems = styled(Link)`
    display:flex;
    align-items: center;
    cursor: pointer;
    padding: 0 1rem;
    :hover {
        color: #red;
    }
    
    
`

export const NavItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${MEDIUM_SIZE}${"px"}) {
        display: ${(props) => (props.active ? "block" : "none")};
        text-align: center;
        padding: 2rem 0;
    }

`;

export const MenuIcon = styled(FaBars)`
    display: none;
    position: absolute;
    right: 2.5rem;
    top: 2.8rem;
    font-size: 1.8rem;
    cursor: pointer;
    @media (max-width: ${MEDIUM_SIZE}${"px"}){
    display: block;
    }
`
export const MenuContainer = styled.div`
    display: none;
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
    @media (max-width: ${MEDIUM_SIZE}${"px"}){
    display: block;
    align-items: center;
}

`
