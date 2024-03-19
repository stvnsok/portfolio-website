import styled from "styled-components";
import { motion } from "framer-motion";

const MEDIUM_SIZE = "900";
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
`
export const Container = styled.div`
    margin-top: 35px;

`
export const SkillRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${MEDIUM_SIZE}px) {
        flex-direction: column;
        gap: 5px;
    }
`
