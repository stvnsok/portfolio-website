import React from 'react'
import { ImLinkedin, ImGithub } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FooterContainer, SocialIcon, SocialIconWrapper } from '../styles/Footer.styled'


const Footer = () => {
  return (
      <FooterContainer>
        <SocialIconWrapper>
          <SocialIcon
            href = 'https://www.linkedin.com/in/steven-sok-96b694221'
          >
            <ImLinkedin 
              className='icon'
            />
          </SocialIcon>
          <SocialIcon
            href = 'https://www.github.com/stvnsok'
          >
            <ImGithub 
          
              className='icon'
            />
          </SocialIcon>
        </SocialIconWrapper>
        <div className = 'footer-text'>
          <p>Built by Steven Sok © 2024 </p>
        </div>
      </FooterContainer>
  );
}

export default Footer