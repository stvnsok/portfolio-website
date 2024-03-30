import React from 'react';
import { 
  NavBar, 
  NavItems, 
  Name, 
  NavItemsWrapper,
  MenuIcon
} from '../styles/Header.styled';
import { AnimatePresence, motion } from 'framer-motion';



const navLinks = [
  {title: 'About', href: 'about'},
  {title: 'Work', href: 'work'},
  {title: 'Contact', href: 'contact'}
]




const Header = ({toggle}) => {

  return (
    <header>
      <NavBar>
        <Name>Steven Sok</Name>
        <MenuIcon
          onClick = {toggle}
        />


        <NavItemsWrapper >
          {
            navLinks.map((link, index) => {
              return (
                <NavItems 
                  activeClass='active' 
                  to={link.href}
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  key = {index}
                
                >
                  <motion.span

                    whileHover={{ color: '#A7333F' }}
                  >
                    {link.title}
                  </motion.span>
                </NavItems>
              )
            })
          }
        </NavItemsWrapper>
      </NavBar>

    </header>

  );
};

export default Header;
