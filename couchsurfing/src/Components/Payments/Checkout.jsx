import React,{useState} from 'react'
import { Box, Text, InputLeftElement, InputRightElement, Image, Center, Input, Flex, Stack, Heading, FormControl, FormLabel, Button, HStack, InputGroup, Select  } from "@chakra-ui/react";
import { NavLink,Navigate } from 'react-router-dom';

function Checkout ()  {
const [cv, setCv] = useState("");
const [paymentStatus, setpaymentStatus] = useState(false)
const [ error, seterror ] = useState(false);

let cvv=[123,456,789,901,236,595,453]

function handleClick(arr){
  for(let i=0; i<arr.length; i++){
    if(cv==arr[i]){
      setpaymentStatus(true)
      seterror(false)
      break;
    }else{
      setpaymentStatus(false)
      seterror(true)
    }
  }
  return;
}

if(paymentStatus){
 return <Navigate to="/booked" />
}

function onchange(e){
  setCv(e.target.value)
}

  return (
    <Box minH={'100vh'} bg={'gray.50'}>
        <Box bg={'#00253c'} padding={"15px 0"}>
          <Center><NavLink to="/"><Image src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2" alt="logo"/></NavLink></Center>
        </Box>
        <Flex
        align={'center'}
        justifyContent={'center'}
        flexDirection={{base:"column", lg:"row"}}
        >
            <Stack mx={'auto'} py={12} px={[0,4,6,6,6,6]}>
            <Box 
            w={{base:"", sm:"400px"}}
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            px={[3,8,8,8,8,8]}
            py={[3,3,4,4,4,4]}>
                <Box py={"20px"}>
                    <Heading fontSize={'25px'}>Price details</Heading>
                </Box>
                <hr/>
                <Box py={"20px"}>
                    <Flex py={"10px"} justifyContent={'space-between'}>
                        <Box>1 room X 1 night</Box>
                        <Box>₹2200</Box>
                    </Flex>
                    <Flex py={"10px"} justifyContent={'space-between'}>
                        <Box>Taxes and fees </Box>
                        <Box>₹320</Box>
                    </Flex>
                </Box>
                <hr/>
                <Box py={"20px"}>
                    <Flex justifyContent={'space-between'}  >
                        <Box>Total</Box>
                        <Box>₹2520</Box>
                    </Flex>
                </Box>
            </Box>
        </Stack>
        <Stack spacing={8} mx={'auto'} py={[0,12]} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Payment
            </Heading>
          </Stack>
          <Box
            w={{base:"", sm:"400px", md:"400px", lg:"400px", xl:"400px", '2xl':"400px"}}
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            py={8}
            px={[4,8,8,8,8,8]}>
            <Stack spacing={4}>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name on Card</FormLabel>
                    <Input type="text"/>
                  </FormControl>
                </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Debit/Credit card number</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Expiration date</FormLabel>
                <InputGroup marginTop={"29px"}>
                  <InputLeftElement h={'full'} w="100px">
                    <Select placeholder='Month' >
                        <option value="JAN">JAN</option>
                        <option value="FEB">FEB</option>
                        <option value="MAR">MAR</option>
                        <option value="APR">APR</option>
                        <option value="MAY">MAY</option>
                        <option value="JUN">JUN</option>
                        <option value="JUL">JUL</option>
                        <option value="AUG">AUG</option>
                        <option value="SEP">SEP</option>
                        <option value="OCT">OCT</option>
                        <option value="NOV">NOV</option>
                        <option value="DEC">DEC</option>
                    </Select>
                  </InputLeftElement>
                  <InputRightElement h={'full'} w="100px">
                    <Select placeholder='Year' >
                        <option value="JAN">2022</option>
                        <option value="FEB">2023</option>
                        <option value="MAR">2024</option>
                        <option value="APR">2025</option>
                        <option value="MAY">2026</option>
                        <option value="JUN">2027</option>
                        <option value="JUL">2028</option>
                        <option value="AUG">2029</option>
                        <option value="SEP">2030</option>
                        <option value="OCT">2031</option>
                        <option value="NOV">2032</option>
                        <option value="DEC">2033</option>
                        <option value="DEC">2034</option>
                        <option value="DEC">2035</option>
                        <option value="DEC">2036</option>
                        <option value="DEC">2037</option>
                        <option value="DEC">2038</option>
                        <option value="DEC">2039</option>
                        <option value="DEC">2040</option>
                    </Select>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="cvv" isRequired>
                <InputGroup marginTop={"30px"}>
                    <Flex flexDirection={'column'}>
                    <FormLabel>CVV</FormLabel>
                    <Input type="number" onChange={onchange}/>
                    </Flex>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  onClick={()=>handleClick(cvv)}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Proceed
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
  )
}

export default Checkout;