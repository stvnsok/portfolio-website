import styled from "styled-components";
import { motion } from 'framer-motion'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 0px 10%;
    font-weight: 500;
    
}


.footer-text {
    display: flex;
    align-items: center;
}

`

export const SocialIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

}


`

export const SocialIcon = styled.a`
    display: flex;
    alignItems: center;
    .icon {
        height: 20px;
        width: 20px;
        color: black;
        &:hover {
            color: #A7333F;
        }

    }
    cursor: pointer;

`
