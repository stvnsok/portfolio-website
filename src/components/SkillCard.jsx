import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { IconContext} from 'react-icons'
import { Provider } from '../styles/Global.styled'

const MOBILE_SIZE = '480';
const TABLET_SIZE = '768';

const Container = styled(motion.div)`
  box-shadow: 0px 3px 10px -3px rgba(0,0,0,0.54);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100px;
  width: 100px;
  margin: 15px;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.fontColor};

  @media (max-width: ${TABLET_SIZE}${"px"}) {
    padding: 13px;
    height: 80px;
    width: 80px;
    

  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    margin: 7px 4px;

    width: 60px;
    height: 60px;
  }
    

    }
`
export const StyledIcon= styled(Provider)`
  width:35px;
  height:35px;
  @media (max-width: ${TABLET_SIZE}${"px"}) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${MOBILE_SIZE}${"px"}) {

    width: 25px;
    height: 25px;
  }



`

const Wrapper = styled.div`
  padding: 10px;
  @media (max-width: ${TABLET_SIZE}${"px"}) {
    font-size: 1rem;

  }
  @media (max-width: ${MOBILE_SIZE}${"px"}) {
    font-size: 0.8rem;
  
  }
`


const SkillCard = ({ icon, title, color}) => {
  return (
    <Container
      fontColor = {color}
      whileHover={{ scale: 1.2}}
      initial = "hidden"
      whileInView = "visible"


    > 
      <Wrapper>

        <StyledIcon
        >
          {icon}
        </StyledIcon>
        <p className = 'name'>
          {title}
        </p>
      </Wrapper>
    </Container>

  )
}

export default SkillCard