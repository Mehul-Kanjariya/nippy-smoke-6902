import React from 'react'
import {
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Center,
    useColorModeValue,
    Button
  } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

const Booked = () => {
  return (
    <Box minH={'100vh'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Center minH={'100vh'}>
        <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'>
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Booking Successful!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Thanks for booking.
            </AlertDescription>
            <NavLink to="/">
              <Button>
                  Click to navigate to Dashboard
              </Button>
            </NavLink>
        </Alert>
        </Center>
    </Box>
  )
}

export default Booked