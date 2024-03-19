import styled from "styled-components";
import { motion } from "framer-motion";


const TABLET_SIZE = '768';
const MOBILE_SIZE = '480';
export const WorkWrapper = styled(motion.div)`
    height: fit-content;

`
export const ProjectContainer = styled.div`

    box-sizing: border-box;
    gap: 50px;
    width: 100%;


`


export const ProjectContainer2 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin: 4.5%;

}
`


export const ProjectCard = styled.article`
display: flex;
flex-direction: column;
background-color: #fff;
padding: 1.5rem;
border-radius: 10px;
justify-content: center;
align-items: center;

    .project-title {
        font-size: 22px;
        line-height: 24px;
        font-weight: 700;
        margin: 15px 0 0 0;
        
    }
    .project-description {
        font-size: 17px;
        line-height: 1.5rem;
      }

    .project-links {
        display: flex;
        gap: 25px;
        
    }
    .project-image {
        position: relative;
        height: 250px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

     &:hover {
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    
     }
`

export const Button = styled(motion.a)`
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    display: inline-block;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    transition: ease-in-out 0.15s;
    outline: 0;
    color: white;
    background-color: #222222;
    text-decoration: none;


`