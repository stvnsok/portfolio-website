import React from 'react'
import { Heading } from '../styles/Global.styled'
import { WorkWrapper, ProjectCard, ProjectContainer,ProjectContainer2, Button } from '../styles/Work.styled'

import { projectData} from '../utils/ProjectData'



const ProjectCardWrapper = ({heading, description,year, img, link}) => {
	return (
    <ProjectCard>
      <div className = 'project-photograph'>

        <a href=''>
          <img className = 'project-image' src={img} alt='Project Image' />
        </a>
      </div>

      <div className = 'project-detail'>
        
        <h5 className = 'project-title'>{heading}</h5>
        <p className = 'project-description'>{description}</p>

      </div>
      <div className = 'project-links'>
        <Button 
          href = {link}
          whileHover={{ scale: 1.1 }}
        >
          Live
        </Button>
        
        <Button 
          href = {link}
          whileHover={{ scale: 1.1 }}
        >
          Source
        </Button>
      </div>
    </ProjectCard>
	  );
}

const Work = () =>{
  return (
    <WorkWrapper 
      className = 'project-wrapper' 
      id = 'work'
      initial = 'hidden'
      whileInView = 'visible'
      viewport={{ amount: 0.5, once:true}}
      transition = {{duration: 1}}
      variants={{
        hidden: { opacity: 0, y:+50 },
        visible: { opacity: 1, y:0 },
      }}
      >
        <ProjectContainer className = 'project-container'>
          <div className = 'project-title'>

            <Heading>Recent Work</Heading>
          </div>
          <div className = 'project-text-container'>
            <p className = 'project-text'>Some of my personal projects that I have created</p>
          </div>
          <ProjectContainer2>
            {projectData.map((project, index) => {
              return (
                <ProjectCardWrapper
                  key= {index}
                  heading={project.projectName}
                  year= {project.year}
                  description={project.projectDesc}
                  img={project.image}
                  link={project.link}
                />
              )
            })}

          </ProjectContainer2>
        </ProjectContainer>
    </WorkWrapper>

  )
}

export default Work