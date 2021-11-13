import NextLink from 'next/link'
import { Button  } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { ChevronRightIcon } from '@chakra-ui/icons'


const MotionButton = motion(Button)

const MBox = ({ children, delay = 0}) => (
   <NextLink href="/works">
    <MotionButton
      boxShadow="md"   
      rightIcon={<ChevronRightIcon />} 
      colorScheme="teal"
      initial={{ x : -500, opacity: 0}}
      animate={{ x : 0, opacity: 1}}
      transition={{ duration: 3, delay}}
    >
      
      {children}
    </MotionButton>
    </NextLink>
   

 )   
  


export default MBox

// const MotionBox = ({ children, delay }) => (
//     <MotionBox
//       height="40px"
//       bg="red.300"
//       drag="x"
//       dragConstraints={{ left: -100, right: 100 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//     >
//     {children}

//     </MotionBox>
// )