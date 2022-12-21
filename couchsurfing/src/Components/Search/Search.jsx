import styles from './search.module.css'
import React from 'react';
import { Box,Image,Text,Button,Input,Center, SimpleGrid } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  Grid,
  Checkbox
} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'
import {Travellers} from './Travellers';
import { Rooms } from './Rooms';
import { Link } from 'react-router-dom';

function  Search () {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = new Date();
        const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        
  const initialDate=`${year}-${month+1}-${day}`
        
  const [idate, setIdate] = React.useState(initialDate)
  const [edate, setEdate] = React.useState(initialDate)
  const [idates, setIdates] = React.useState(false)
  const [edates, setEdates] = React.useState(false)
  const handleStartDateChange=(e)=>{
    setIdate(e.target.value)
    setIdates(true)
  }

  const handleEndDateChange=(e)=>{
    setEdate(e.target.value)
    setEdates(true)
  }

  const [traveller, setTraveller] = React.useState(1)
  function changetraveller(n){
    setTraveller(traveller+n);
  };

  const [rooms, setRooms] = React.useState(1)
  function changerooms(n){
    setRooms(rooms+n);
  };
    return (
    <div>
        <Box h={{base:'400px', sm:'450px', md:'450px', lg:'350px', xl:'400px', '2xl':'400px'}}className={styles.Container}>
            <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh" alt='Scenary'
            display={{base:'none', sm:"block"}}
            />
            <Box 
            className={styles.Parent} 
            left={{base:'0', sm:'1.6rem', md:'1.8rem', lg:'1.5rem', xl:'8rem', '2xl':'10rem'}}
            right={{base:'0', sm:'1.6rem', md:'1.8rem', lg:'1.5rem', xl:'8rem', '2xl':'10rem'}}
            top={{base:'0', sm:'4.5%', md:'5%', lg:'7%', xl:"6%", '2xl':'6%' }}
            bottom={{base:'0', sm:'4.5%', md:'5%', lg:'1.5rem', xl:"17.5%", '2xl':'16%' }}
            >
            <Box paddingLeft={"25px"} paddingRight={"25px"}>
              <Box className={styles.more}>
                  <Box w={{base:'100%', sm:'100%', md:'74%',lg:'55%', xl:'50%', '2xl':'46%'}}>  
                    <Text 
                      paddingLeft={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                      paddingRight={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                    >Stays</Text>
                    <Text 
                      paddingLeft={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                      paddingRight={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                    >Flights</Text>
                    <Text 
                      paddingLeft={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                      paddingRight={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                    >Cars</Text>
                    <Text 
                      paddingLeft={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                      paddingRight={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                    >Packages</Text>
                    <Text 
                      paddingLeft={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                      paddingRight={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                    >Things to do</Text>
                    <Text 
                      paddingLeft={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                      paddingRight={{base:"5x", sm:"5px", md:"1rem", lg:"1rem", xl:"1rem", "2xl":"1rem"}}
                    >Cruises</Text>
                  </Box>
                </Box>
                <Box marginTop={'15px'} padding="10px" className={styles.form}>
                  <Grid 
                    gap={{base:'0', sm:'4.5%', md:'space', lg:'10px', xl:"20px", '2xl':'20px'}} 
                    columns={3}
                    templateAreas={{base:`"s
                                           d
                                           r"`,
                                    sm:`"s
                                         d
                                         r"`,
                                    md:`"s
                                         d
                                         r"`,
                                    lg:`"s d r"`}}
                    >
                    <Box area={'s'} marginBottom={{base:'15px', sm:'15px', md:'15px', lg:'0', xl:"0", '2xl':'0'}}>
                      <Menu>
                        <MenuButton 
                        border={'1px solid grey'} 
                        width={{base:'100%', sm:'100%', md:'100%', lg:'100%', xl:"100%", '2xl':'470px'}}
                        textAlign={'left'}
                        padding={'13px'} 
                        focusBorderColor = {"blue.500"}
                        >
                          Going to
                        </MenuButton>
                        <MenuList>
                          <Input type={'text'} placeholder={'Search'} padding={'11px'} focusBorderColor = "blue.500"/>
                        </MenuList>
                      </Menu>
                    </Box>
                    <Box area={'d'} marginBottom={{base:'15px', sm:'15px', md:'15px', lg:'0', xl:"0", '2xl':'0'}}>
                      <Grid 
                      gap={{base:'15px', sm:'20px', md:'20px', lg:'10px', xl:"20px", '2xl':'20px'}} 
                      height={'fit-content'}
                      templateAreas={`"st en"`}
                      >
                        <Box area={'st'}>
                          <Menu>
                              <MenuButton 
                              border={'1px solid grey'} 
                              width={{base:'100%', sm:'100%', md:'100%', lg:'100%', xl:"100%", '2xl':'180px'}}
                              textAlign={'Center'}
                              padding={'4.5px 11px 4.5px 11px'}>
                                <Text fontSize={'13px'}>Check-In: </Text>
                                <Text fontSize={'15px'}>{idates ? idate :`${monthNames[month]}-${day}`}</Text>
                              </MenuButton>
                              <MenuList>
                              <Input 
                              type="date" 
                              id="start" 
                              name="trip-start" 
                              value={idate} 
                              min={`${year}-${month+1}-${day}`}
                              onChange={handleStartDateChange} />
                              </MenuList>
                            </Menu>
                          </Box>
                          <Box area={'en'}>
                          <Menu>
                              <MenuButton 
                              border={'1px solid grey'} 
                              width={{base:'100%', sm:'100%', md:'100%', lg:'100%', xl:"100%", '2xl':'180px'}}
                              textAlign={'Center'}
                              padding={'4.5px 11px 4.5px 11px'}>
                                <Text fontSize={'13px'}>Check-Out: </Text>
                                <Text fontSize={'15px'}>{edates ? edate : `${monthNames[month]}-${day}`}</Text>
                              </MenuButton>
                              <MenuList>
                              <Input 
                              type="date"
                              name="trip-start" 
                              value={edate} 
                              min={`${year}-${month+1}-${day}`}
                              onChange={handleEndDateChange} 
                              _hover={{
                                cursor:"pointer"
                              }}
                              />
                              </MenuList>
                            </Menu>
                          </Box>
                        </Grid>
                    </Box>
                    <Box area={'r'}>
                      <Flex>
                        <Menu flex='1'>
                          <MenuButton 
                          // as={Button} 
                          padding={'13.5px'}
                          borderRadius={'0px'}
                          border={'1px solid grey'}
                          fontWeight={"500"}
                          flex='1'>
                            Rooms {" : "} {rooms} &#160;&#160; Travellers {" : "} {traveller}
                          </MenuButton>
                          <MenuList>
                              <Flex padding={'10px'}>
                                <Box>Rooms</Box>
                                <Spacer />
                                <Box><Rooms rooms={rooms} changerooms={changerooms}/></Box>
                              </Flex>
                              <MenuDivider />
                              <Flex padding={'10px'} justifyContent>
                                <Box>Travellers</Box>
                                <Spacer />
                                <Box><Travellers traveller={traveller} changetraveller={changetraveller}/></Box>
                              </Flex>
                          </MenuList>
                        </Menu>
                      </Flex>
                    </Box>
                  </Grid>                       
                </Box>
                <Box padding='10px'>
                    <Flex>
                      <Checkbox size='lg' colorScheme={'cyan'} spacing='1rem'><Text fontSize={'16px'}>Add a flight</Text></Checkbox>
                      <Spacer/>
                      <Checkbox size='lg' colorScheme={'cyan'} spacing='1rem'><Text fontSize={'16px'}>Add a car</Text></Checkbox>
                    </Flex>
                </Box>
                <Box padding='10px'>
                      <Center>
                        <Link to="/hotels">
                        <Button
                          borderRadius={'2'}
                          fontSize={'17px'}
                          padding={'25px 65px 25px 65px'}
                          background={"#c8335a"}
                          color={"white"}
                          _hover={{
                            background:"#c8336a"
                          }}
                        >Search</Button></Link>
                      </Center>
                </Box>
            </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Search