import styled from "styled-components";
import { motion } from "framer-motion";
export const AboutContainer = styled(motion.div)`
    width: 100%;
    
    align-items: center;
    height: fit-content;
`


export const SkillsWrapper = styled.div`
    display: inline-block;
    justify-content: space-between;

    .skills-heading {
        font-size: 1.5em;
        font-weight: bold;
    }
    margin-bottom: 35px;
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
`

export const Photo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
`
export const PhotoWrapper = styled.div`
    overflow: hidden;
    border-radius: 50%;

`
export const TextWrapper = styled.div`
    .about-text {
        font-size: 1.25em;
    }
    margin-left: 35px;
    margin-right: 35px;
`
export const Container = styled.div`
    margin-top: 35px;

`
export const SkillStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: repeat(2, 1fr);
    @media (max-width: 900px) {
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    @media(max-width: 550px) {
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(4, 1fr);
    }
    
`