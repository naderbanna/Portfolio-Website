import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in California!
                </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                       Nader Banna 
                    </Heading>
                    <p>Web Developer.... lalal add some whitty description of myself</p>
                </Box>
            </Box>
        </Container>
    )
    
}

export default Page