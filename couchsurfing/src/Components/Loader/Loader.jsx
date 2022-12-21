import React from 'react'
import { Spinner } from '@chakra-ui/react';
import { Box,useColorModeValue,Center,Image } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.50', 'gray.800')}>
    <Center minH={'100vh'}>
    <Box>
        <Image src="https://www.orbitz.com/_dms/interstitial/logo.svg?locale=en_US&siteid=70201" alt="orbitz"/>
    </Box>
    <Box>
        <Spinner
            thickness='11px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    </Box>
    </Center>
    </Box>
  )
}

export default Loader