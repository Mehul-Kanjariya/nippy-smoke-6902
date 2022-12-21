import { useState, useEffect, useContext } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    Center
  } from '@chakra-ui/react';
  import { NavLink, Navigate } from "react-router-dom"
  import { AuthContext } from '../AurhContext/AuthContext';
  import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { authState, loginUser } = useContext(AuthContext);
    const [ error, seterror ] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
      let res = await fetch(`https://reqres.in/api/login`,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      res = await res.json()
      let a = res.token
      if(a){
        loginUser(res.token)
      }else{
        seterror(true)
      }
      }catch(err){
        console.log(err)
      }
    };

    if(authState.isAuth){
      return <Navigate to="/"/>
    }

    return (
      <Box bg={'gray.50'} minH={'100vh'}>
        <Box bg={'#00253c'} padding={"15px 0"}>
          <Center><NavLink to="/"><Image src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="logo"/></NavLink></Center>
        </Box>
      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={handleSubmit}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
              <Box>
                {error ? <Center><Text color={'red'}>Wrong Credentials</Text></Center> : <></>}
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </Box>
    );
}