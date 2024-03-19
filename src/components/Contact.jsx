import React from 'react'
import { Heading } from '../styles/Global.styled'
import { ContactContainer, Button, ButtonWrapper } from '../styles/Contact.styled'
import { motion } from 'framer-motion'



const Contact = () => {
  return (
    <ContactContainer id = 'contact' >
        <div className = 'contact-container2'>
          <div className = 'contact-desc'>
            <h1>
              Get in touch
            </h1>
            <a>
              <p>Want to discuss a project or just say hi? Send me a message :&#41; </p>
            </a>
            <ButtonWrapper>

              <Button
                whileHover={{ scale: 1.1 }}
                variant = 'primary'
                href='mailto:steven.sok25@gmail.com'
                
              >
                <motion.span
                    initial={{ display: 'inline-block' }}
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 2.5,
                    }}

                  >
                    👋
                  </motion.span>{' '}
                  Say hello
              </Button>
              <Button
                whileHover={{ scale: 1.1 }}
                variant = 'secondary'
              >
                See Resume
              </Button>
            </ButtonWrapper>
          </div>

      </div>
      
    </ContactContainer>
  )
}

export default Contact