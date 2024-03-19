import React from 'react'
import { 
  HomeContainer,
  BeginningText, 
  Heading, 
  SocialWrapper,
  SocialIcon, 
  TextWrapper,
  ExpandIcon
} from '../styles/Home.styled'

import { Typewriter } from 'react-simple-typewriter'
import { ImLinkedin, ImGithub } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { IoDocumentSharp } from "react-icons/io5";
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from 'react-scroll';


const Icon = [
  {icon:<ImLinkedin className='icon'/>, href:'https://www.linkedin.com/in/steven-sok-96b694221'},
  {icon:<ImGithub className='icon'/>, href:'https://github.com/stvnsok'},
  {icon:<GrMail className='icon'/>, href:'mailto:steven.sok25@gmail.com'},
  {icon:<IoDocumentSharp className='icon'/>, href:''},

];

const HomePage = () => {
  return (
    <HomeContainer>
      <Heading
        initial = "hidden"
        whileInView = "visible"
        viewport={{ amount: 0.5}}
        transition = {{duration: 0.75}}
        variants={{
          hidden: { opacity: 0, y:-50 },
          visible: { opacity: 1, x:0 },
        }}
      >
        Hi, I'm Steven 
      </Heading>
      <BeginningText>
        I'm  {''}
        <TextWrapper>

          <Typewriter
            words={[' a Developer', ' a Software Engineer',  ' a Creator']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </TextWrapper>
  
      </BeginningText>
      <SocialWrapper>
        {Icon.map((item, i) => {
          return(
            <SocialIcon 
              href = {item.href} 
              target='_blank' 
              rel='noreferrer' 
              key = {i}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.75 }}
              variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
              }}
              whileHover={{ scale: 1.4 }}
            >
              {item.icon}
            </SocialIcon>
          )
        })}
        
        
      </SocialWrapper>
  
        <ExpandIcon
          whileHover={{ scale: 1.4 }}
        >
          <Link to="about" smooth={true} duration={500}>

            <MdOutlineExpandMore fontSize={40} />
          </Link>
        </ExpandIcon>

    </HomeContainer>
  )

}

export default HomePage
