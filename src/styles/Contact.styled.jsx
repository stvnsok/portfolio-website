import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled.div`
    height: fit-content;
    margin-bottom: 100px;

`
export const Button = styled(motion.a)`
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    display: inline-block;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    padding: 18px 50px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    transition: ease-in-out 0.15s;
    outline: 0;
    text-decoration: none;

    ${({variant}) => 
        variant === 'primary' && 
        `
            background-color: #222222;
            color:  #fdfdfd;
        `
    }
    ${({variant}) => 
        variant === 'secondary' && 
        `
            background-color: #fdfdfd;
            color: #222222;
        `
}
    
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 2rem;
    @media (max-width: 480px) {
        flex-direction: column;
        gap: 20px;
        padding: 0 15%;
    }
`


