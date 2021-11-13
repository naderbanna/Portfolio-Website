import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image,  
    Button, 
    useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'

import Section from '../components/section'

const Page = () => {
    return(
        <Container>
            <Box 
                borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                mt={3} 
                align="center">
                    Hello, I&apos;m a full-stack developer based in California!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                       Nader Banna 
                    </Heading>
                    <p>Web Developer.... lalal add some whitty description of myself</p>
                </Box>

                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md: 6}} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/nader.jpg"
                        alt="Profile Picture"/> 
                </Box>
            </Box>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    About me
                </Heading>
                <Paragraph>
                I am a young, motivated software developer who has played a key development role in 
                multiple projects, both independent and with small teams. Most recently, I developed 
                a front-end website utilizing HazardHub's Disclosure API to automate the generation and 
                delivery of California Natural Hazard Disclosure statements direct to the customer based 
                on property coordinates. I utilized technologies like React, Apollo/GraphQL, Shopify 
                Node API, Google Maps API, Heroku, AWS S3 Buckets, and more.
                </Paragraph>
                <Paragraph mb={2}>
                I also have 4 years of experience in the development of over 10 consumer electronics 
                products from design conceptualization to client delivery, curating and executing online 
                marketing campaigns, facilitating partnerships with companies like Electronic Arts (EA), 
                and collaborating with international manufacturers, graphic designers, and specialized 
                marketing teams.
                </Paragraph>
                <Paragraph mb={2}>
                I am currently looking for a career in software development to build upon my Finance and 
                Computer Science education and 4+ years of experience in product development.
                </Paragraph>
                
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>



            <Box >
                <Box >
                    <Heading as="h2" size="sm" align="center">
                        Song of the day
                    </Heading>
                </Box>

                <Box m={5}>
                    <iframe 
                        src="https://audius.co/embed/track/nQ9x3?flavor=compact" 
                        width="100%" 
                        height="120" 
                        allow="encrypted-media"
                    ></iframe>
                </Box>
            </Box>

            
           

        </Container>
    )
    
}

export default Page