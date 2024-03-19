
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { motion } from 'framer-motion';



export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Mono','Roboto', sans-serif;
        background-color: #EDF2EF;
        color: #2D3748;

    }
`

export const Heading = styled(motion.div)`
    align-items: center;
    
    padding-top: 35px;
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 2.2rem;

`
export const Provider = ({className,children}) => 
<IconContext.Provider
   value={{className}} 
>
  {children}
</IconContext.Provider>;
