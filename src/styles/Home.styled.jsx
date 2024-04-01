import styled from "styled-components";

import { motion } from "framer-motion";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: 
`

export const TextWrapper = styled.span`
    font-weight: bold;
    color: #A7333F;
`


export const Heading = styled(motion.h1)`
    margin: 0;
    font-weight: bold;
    font-size: 3.5rem;
    gap: 1rem;

`

export const BeginningText = styled.h1`
    font-weight: normal;
    margin-bottom: 1rem;
`
export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
export const SocialIcon = styled(motion.a)`
    margin: 0.5rem;

    .icon {
        height: 25px;
        width: 25px;
        color: black;
        &:hover {
            color: #A7333F;
        }
    }

`

export const ExpandIcon = styled(motion.div)`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 2%;

`