import React from 'react'
import { 
  AboutContainer, 
  SkillsWrapper, 
  Photo,
  PhotoWrapper,
  Container,
  TextWrapper,

  SkillStyle
} from '../styles/About.styled'

import {
  Heading,
} from '../styles/Global.styled'
import { skillsData } from '../utils/Data'

import SkillCard from './SkillCard'
import Photo1 from '../assets/images/Photo1.jpg'






const About = () => {
  return (
    <AboutContainer 
      name = 'about' 
      id = 'about'
      initial = "hidden"
      whileInView = "visible"
      viewport={{ amount: 0.5, once:true}}
      transition = {{duration: 1}}
      variants={{
        hidden: { opacity: 0, y:+50 },
        visible: { opacity: 1, y:0 },
      }}
      
    >
        <Heading className = 'heading'>Learn more about Me</Heading>
        <Container>

          <PhotoWrapper>
              <Photo src={Photo1} alt="Photo of myself" />
          </PhotoWrapper>
          <TextWrapper

          >
            
            <p className = 'about-text'>I am the kind of person who is always eager to <b>learn.</b> </p>
            <p className = 'about-text'>I may not know everything but I am always willing to to put in the <b>effort</b> and <b>grow.</b> </p>
            
            <p className = 'about-text'>What matters the most is at the end of the day I can tell myself that I tried my best.</p>
          </TextWrapper>
        </Container>
        <SkillsWrapper>
          <div className='skills-heading'>Some of my skills</div>
          <SkillStyle>

            {skillsData.map((item,i) => {
              return(
                <SkillCard 
                  key = {i}
                  icon = {item.icon}
                  title = {item.title}
                  color = {item.color}
                >
                </SkillCard>
              )
            })}
          </SkillStyle>
        </SkillsWrapper>

    </AboutContainer>
  )
}

export default About