import styles from './search.module.css'
import React from 'react';
import { Box,Image,Text,Button,Input, } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react';
import { FaBeer } from "react-icons/fa";

function  Search () {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = new Date();
        const [month, day] = [date.getMonth(), date.getDate()];

  return (
    <div>
        <Box h={{base:'380px', sm:'450px', md:'450px', lg:'350px', xl:'400px', '2xl':'400px'}}className={styles.Container}>
            <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/01/ORB_Storefront_6_imgB_1400x600_20211028.jpg?impolicy=fcrop&w=900&h=225&q=mediumHigh" alt='Scenary' />
            <Box 
            className={styles.Parent} 
            left={{base:'0', sm:'1.6rem', md:'1.8rem', lg:'1.5rem', xl:'8rem', '2xl':'10rem'}}
            right={{base:'0', sm:'1.6rem', md:'1.8rem', lg:'1.5rem', xl:'8rem', '2xl':'10rem'}}
            top={{base:'14.8%', sm:'17%', md:'17.5%', lg:'22%', xl:"17.5%", '2xl':'20%' }}
            bottom={{base:'0', sm:'4.5%', md:'5%', lg:'1.5rem', xl:"17.5%", '2xl':'16%' }}
            >
            <Box paddingLeft={"25px"} paddingRight={"25px"}>
              <Box className={styles.more}>
                  <Box w={{base:'100%', sm:'100%', md:'70%',lg:'55%', xl:'50%', '2xl':'46%'}}>  
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
                <Box className={styles.form}>
                        <Box className={styles.buttons}>
                          <Menu>
                            <MenuButton as={Button} leftIcon={<Icon as={FaBeer} />}>
                              Going to
                            </MenuButton>
                            <MenuList>
                              <MenuItem>Download</MenuItem>
                              <MenuItem>Create a Copy</MenuItem>
                              <MenuItem>Mark as Draft</MenuItem>
                              <MenuItem>Delete</MenuItem>
                              <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                          </Menu>
                          <Button>&#160;&#160;Check-in<Text border="1px solid black" className={styles.sdate}>&#160;{day}{" "}{monthNames[(month)]}</Text></Button>
                          <Button>&#160;&#160;Check-out<Text className={styles.edate}>&#160;{day}{" "}{monthNames[(month)]}</Text></Button>
                          <Button>Travelers</Button>
                        </Box>                       
                </Box>
            </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Search