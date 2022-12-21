import React from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import WithSubnavigation from '../../AllRoutes/Navbar';
import { Box, Flex, Heading, Text, Spacer, Button } from '@chakra-ui/react';
import { Grid, GridItem, Image, Menu, MenuButton, Input, MenuList, MenuDivider } from '@chakra-ui/react';
import { Rooms } from '../Search/Rooms';
import {Travellers} from '../Search/Travellers';
import Footer from "../Footer/Footer";
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';

function SingleHotel(){
  const [loader, setLoader] = React.useState(false);
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

  const [data, setData] = React.useState({})
  const { id } = useParams();

    React.useEffect(()=>{
      setLoader(true)
      axios.get(`https://magnificent-kit-lamb.cyclic.app/hotels/${id}`)
      .then((res)=>{
        setLoader(true)
        setData(res.data)
      })
      .catch((err)=>console.log(err))
    },[id])

    const { address, area, city, images, name, paymentType, price, description, propertyType, rating, reviews } = data

if(address!=undefined){    
  return (
    <Box>
        <WithSubnavigation/>
        <Box alignItems={'center'} padding={{base:"0 0.5rem", sm:"0 3rem", md:"0 3rem", lg:"0 3rem", xl:"0 5rem", '2xl':"0 5rem"}} marginTop={"70px"}>

          <Grid  
          width={'fit-content'}
          gridTemplateRows={{base:"repeat(1)", md:"repeat(2)", lg:"repeat(2)"}}
          gridTemplateColumns={{base:"repeat(1)", md:"repeat(2)", lg:"repeat(3)"}}

          templateAreas={{base:`"a"`,
                          md:`"a b"
                              "a c"`,
                          lg:`"a b c"
                              "a d e"`
                            }}
            gap={"15px"}>
            
            <GridItem display={{base:"blobk", sm:"blobk", md:"block", lg:"block", xl:"block", '2xl':"block" }} 
            area={'a'} colSpan={"2"}><Image h={'100%'} src={images[0].url} /></GridItem>
            <GridItem display={{base:"none", sm:"none", md:"block", lg:"block", xl:"block", '2xl':"block" }} 
            area={'b'}><Image h={'100%'} src={images[1].url} /></GridItem>
            <GridItem display={{base:"none", sm:"none", md:"block", lg:"block", xl:"block", '2xl':"block" }} 
            area={'c'}><Image h={'100%'} src={images[2].url} /></GridItem>
            <GridItem display={{base:"none", sm:"none", md:"none", lg:"block", xl:"block", '2xl':"block" }} 
            area={'d'}><Image h={'100%'} src={images[3].url} /></GridItem>
            <GridItem display={{base:"none", sm:"none", md:"none", lg:"block", xl:"block", '2xl':"block" }} 
            area={'e'}><Image h={'100%'} src={images[4].url} /></GridItem>
          </Grid>
          <Box marginTop="5px">
            <Flex flexDirection={'row-reverse'} >
              <Text fontSize={'16px'} bg={'#c8335a'} padding="10px" color={'white'} borderRadius={"2px"} fontWeight={'500'}>₹{price}</Text>
            </Flex>
          </Box>
            <Box marginTop="5px" padding={'0 20px'}>                
                <Flex alignItems={"center"}>
                    <Heading w={'fit-content'} size={{base:'sm', sm:"md", md:'lg'}} >{name}&#160;{area}&#160;&#160;&#160;</Heading>
                    <Text w={'fit-content'} fontSize={{sm:"14px", md:"16px"}}>{"("}{propertyType}{")"}</Text>
                </Flex>
                <Text fontSize={{sm:"14px", md:"16px"}}>{city}</Text>
                <Box marginTop={'20px'}>
                  <Heading size={{base:'sm', sm:"md", md:'md'}}>{rating}/10{" ("}{reviews}{" "}reviews{")"}</Heading>
                </Box>
                <Text marginTop={'5px'}>{paymentType}</Text>
                <Box marginTop={'10px'}>
                  <Heading size={{base:'sm', sm:"md", md:'md'}}>Address :-</Heading>
                  <Text fontSize={{sm:"14px", md:"16px"}}>{address}</Text>
                </Box>
                <Box marginTop={'15px'}>
                  <Heading size={{base:'sm', sm:"md", md:'md'}}>Description :-</Heading>
                  <Text fontSize={{sm:"14px", md:"16px"}}>{description}</Text>
                </Box>
            </Box>
            <Box>
              <Heading marginTop="5px" padding={'0 20px'} size={{base:'sm', sm:"md", md:'lg'}}>Choose your room</Heading>
              <Box marginTop={'10px'} paddingLeft={"20px"}>
                  <Grid 
                    gap={{base:'0', sm:'4.5%', md:'space', lg:'10px', xl:"20px", '2xl':'10px'}} 
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
                      <Grid 
                      gap={{base:'15px', sm:'20px', md:'20px', lg:'10px', xl:"20px", '2xl':'10px'}} 
                      height={'fit-content'}
                      templateAreas={`"st en"`}
                      >
                        <Box area={'st'}>
                          <Menu>
                              <MenuButton 
                              border={'1px solid grey'} 
                              width={{base:'100%', sm:'100%', md:'100%', lg:'100%', xl:"100%", '2xl':'100%'}}
                              textAlign={'Center'}
                              padding={'4.5px 11px 4.5px 11px'}
                              bg={"white"}>
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
                              width={{base:'100%', sm:'100%', md:'100%', lg:'100%', xl:"100%", '2xl':'100%'}}
                              textAlign={'Center'}
                              padding={'4.5px 11px 4.5px 11px'}
                              bg={"white"}>
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
                    <Box area={'d'}>
                      <Flex>
                        <Menu flex='1'>
                          <MenuButton 
                          // as={Button} 
                          padding={'13.5px'}
                          borderRadius={'0px'}
                          border={'1px solid grey'}
                          fontWeight={"500"}
                          flex='1'
                          bg={"white"}>
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
                    <Box area={'r'} >
                      <NavLink to="/checkout">
                        <Button 
                        h={"100%"} 
                        w={"100%"} 
                        bg={"#c8335a"} 
                        borderRadius={"2px"} 
                        color={"white"}
                        _hover={{
                          bg:"#c8336a"
                        }}
                        >Reserve
                        </Button>
                      </NavLink>
                    </Box>
                  </Grid>                       
                </Box>
            </Box>
        </Box>
        <Box
        marginTop={'30px'}
        padding={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 1rem", lg:"0 1rem", xl:"0 6rem", '2xl':"0 5rem"}}
        >
        <Footer/>
        </Box>
    </Box>
  )
        }else{
            return (<Box><Loader/></Box>)
        }
}
export default SingleHotel;