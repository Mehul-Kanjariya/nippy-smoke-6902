import styles from "./body.module.css";
import React from 'react';
import {Box,Image,Flex,Heading,Text,Icon, Button, ListItem, UnorderedList, Stack, Grid} from "@chakra-ui/react";
import { MdModeEditOutline } from 'react-icons/md';
import { HiCurrencyDollar } from 'react-icons/hi2';
import { TiMessages } from 'react-icons/ti';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export function Body () {
  return (
    <>
        <Box className={styles.shdw} >
            <Flex flexDirection={{base:"column", sm:"row"}} 
            marginTop={{base:"3rem", sm:"5rem", md:"6rem", lg:"10rem", xl:"10rem", "2xl":"10rem"}}
            className={styles.img}
            padding={{base:"", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"0 8rem", '2xl':"0 10rem"}}
            gap={{base:"20px", sm:null}}
            alignItems={{base:"center", sm:null}}
            >
              <Box  width={{base:"90%", sm:"", md:"", lg:"", xl:"", '2xl':"32%"}}>
                <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="images" />
              </Box>
              <Box width={{base:"90%", sm:"", md:"", lg:"", xl:"", '2xl':"32%"}}>
                <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="images" />
              </Box>
              <Box width={{base:"90%", sm:"", md:"", lg:"", xl:"", '2xl':"32%"}}>
                <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="images" />
              </Box>
            </Flex>
            <Flex flexDirection={{base:"column", sm:"row"}} 
            className={styles.shadow}
            padding={{base:"", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"0 8rem", '2xl':"0 10rem"}}
            gap={{base:"20px", sm:null}}
            alignItems={{base:"center", sm:null}}
            >
                <Box width={{base:"90%", sm:"", md:"", lg:"", xl:"", '2xl':"32%"}}></Box>
                <Box width={{base:"90%", sm:"", md:"", lg:"", xl:"", '2xl':"32%"}}></Box>
                <Box width={{base:"90%", sm:"", md:"", lg:"", xl:"", '2xl':"32%"}}></Box>
            </Flex>
        </Box>
        <Box 
        className={styles.features}
        padding={{base:"", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"0 8rem", '2xl':"0 10rem"}}
        >
            <Heading as='h1'>Featured offers</Heading>
            <Box>
                <Flex className={styles.offer} flexDirection={{base:"column", lg:"row"}}>
                  <Box width={{base:'100%', lg:"23.5%"}}>
                    <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="features"/>
                  </Box>
                  <Box width={{base:'100%', lg:"23.5%"}}>
                    <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="features"/>
                  </Box>
                  <Box width={{base:'100%', lg:"23.5%"}}>
                    <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="features"/>
                  </Box>
                  <Box width={{base:'100%', lg:"23.5%"}}>
                    <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="features"/>
                  </Box>
                </Flex>
                <Flex className={styles.text} flexDirection={{base:"column", lg:"row"}}>
                    <Box width={{base:'100%', lg:"23.5%"}}>
                      <Heading as='h5' size='md'>Last Minute Deals</Heading><Text as='p'>Getaway today</Text ></Box>
                    <Box width={{base:'100%', lg:"23.5%"}}>
                      <Heading as='h5' size='md'>All-inclusive resorts</Heading><Text as='p'>Enjoy sun and fun</Text >
                    </Box>
                    <Box width={{base:'100%', lg:"23.5%"}}>
                      <Heading as='h5' size='md'>Insider prices</Heading><Text as='p'>Members get rewarded</Text >
                    </Box>
                    <Box width={{base:'100%', lg:"23.5%"}}>
                      <Heading as='h5' size='md'>Jet and reset</Heading><Text as='p'>Fly somewhere beachy and worm</Text >
                    </Box>
                </Flex>
            </Box>
        </Box>
        <Box className={styles.help} 
        padding={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"0 8rem", '2xl':"0 10rem"}}>
            <Heading as='h1' size='xl'>Here to help keep you on the move</Heading>
            <Flex flexDirection={{base:"column", sm:"row"}}
              gap={{base:"13px", sm:null}}
              marginTop={'20px'}
            >
                <Box width={{base:"", sm:"", md:"", lg:"32%", xl:"32%", '2xl':"32%"}}>
                    <Box><Heading as='h3' size='md'>Change or cancel a trip</Heading><Icon as={MdModeEditOutline}></Icon></Box>
                    <Text>Make updates to your itinerary or cancel a booking</Text>
                </Box>
                <Box width={{base:"", sm:"", md:"", lg:"32%", xl:"32%", '2xl':"32%"}}>
                    <Box><Heading as='h3' size='md'>Use a credit coupon</Heading><Icon as={HiCurrencyDollar}></Icon></Box>
                    <Text>Apply a coupon code or credit to a new trip</Text>
                </Box>
                <Box width={{base:"", sm:"", md:"", lg:"32%", xl:"32%", '2xl':"32%"}}>
                    <Box><Heading as='h3' size='md'>Track your refund</Heading><Icon as={TiMessages}></Icon></Box>
                    <Text>Check the status of a refund currently in progress</Text>
                </Box>
            </Flex>
        </Box>
        <Box 
          className={styles.travel}
          padding={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"0 8rem", '2xl':"0 10rem"}}
          >
                <Heading as='h1' size='lg'>Traveling  tips</Heading>
                <Box>
                    <Flex className={styles.vel} flexDirection={{base:"column", lg:"row"}}
                    gap={{base:"40px", lg:null}}
                    >
                      <Box width={{base:'100%', lg:"49%"}}
                      height={{base:'15rem', lg:"15rem"}}
                      >
                         <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg" alt="Tips"/>
                      </Box>
                      <Box width={{base:'100%', lg:"49%"}}
                      height={{base:'15rem', lg:"15rem"}}
                      >
                         <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg" alt="Tips"/>                      
                      </Box>
                    </Flex>
                    <Flex className={styles.tips} flexDirection={{base:"column", lg:"row"}}
                    gap={{base:"40px", lg:null}}
                    >
                        <Box width={{base:'100%', lg:"49%"}}
                        height={{base:'15rem', lg:"15rem"}}
                        >
                            <Box>
                                <Heading as='h2' size={'md'}>National Parks</Heading>
                                <Text>There,s plenty to keep you busy.</Text>
                                <Button>Learn more</Button>
                            </Box>
                        </Box>
                        <Box width={{base:'100%', lg:"49%"}}
                        height={{base:'15rem', lg:"15rem"}}
                        >
                            <Box>
                                <Heading as='h2' size={'md'}>The perfect road trip</Heading>
                                <Text>Find a adventure for every season.</Text>
                                <Button>Read on</Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
        </Box>
        <Box 
        padding={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"0 8rem", '2xl':"0 10rem"}}
        marginTop={'100px'}
        >
          <Flex flexDirection={{base:"column", md:"row"}}>
            <Grid 
              width={{base:"100%", md:"400px"}}
              height={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"290px", '2x  l':"290px"}}
              // border={'1px solid black'}
              >
              <Image src="https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg" height={"100%"} width={"100%"}/>
            </Grid>
            <Box background={'white'} padding={"0px 20px 20px 20px"}>
              <Heading marginTop={'20px'} size={"xl"}>Rewards are waiting for you in the Orbitz app</Heading>
              <UnorderedList marginTop={'20px'}>
                <ListItem>Earn 4% back when you book your hotel in app, vs. 3% on site</ListItem>
                <ListItem>Get flight status and gate number notifications</ListItem>
                <ListItem>Have questions about your stay? Message your hotel right in the app</ListItem>
              </UnorderedList>
              <Box width={'fit-content'} margin={"auto"}>
                <Button
                color={'white'}
                padding={'25px 60px'}
                background={"#c8335a"}
                borderRadius={"2px"}
                marginTop={'20px'}
                >
                  Get the app
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box 
        padding={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 2rem", lg:"0 2rem", xl:"0 8rem", '2xl':"0 10rem"}}
        marginTop={'30px'}>
        <Heading size={"xl"}>More Destinations</Heading>
          <Flex gap={"20px"} marginTop={'10px'} flexDirection={{base:'column', lg:"row"}}>
            <Box width={'100%'}>
              <Accordion allowMultiple>
                <AccordionItem border={'none'}>
                  <h2>
                    <AccordionButton 
                    background={'white'}
                     _hover={{
                      background:"white"
                     }}>
                      <Box as="span" flex='1' textAlign='left' background={'white'}>
                        <Heading size={'md'} color={'#616161'}>Destination Deals</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} background={'white'}>
                  <Box borderTop={"1px solid grey"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box width={'100%'}>
              <Accordion allowMultiple>
                <AccordionItem border={'none'}>
                  <h2>
                    <AccordionButton 
                    background={'white'}
                     _hover={{
                      background:"white"
                     }}>
                      <Box as="span" flex='1' textAlign='left' background={'white'}>
                        <Heading size={'md'} color={'#616161'}>Top hotel beach Destination</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} background={'white'}>
                    <Box borderTop={"1px solid grey"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box width={'100%'}>
              <Accordion allowMultiple>
                <AccordionItem border={'none'}>
                  <h2>
                    <AccordionButton 
                    background={'white'}
                     _hover={{
                      background:"white"
                     }}>
                      <Box as="span" flex='1' textAlign='left' background={'white'}>
                        <Heading size={'md'} color={'#616161'}>Top hotel city Destination</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} background={'white'}>
                    <Box borderTop={"1px solid grey"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
          <Flex gap={"20px"} marginTop={'20px'} flexDirection={{base:'column', lg:"row"}}>
            <Box width={'100%'}>
              <Accordion allowMultiple>
                <AccordionItem border={'none'}>
                  <h2>
                    <AccordionButton 
                    background={'white'}
                     _hover={{
                      background:"white"
                     }}>
                      <Box as="span" flex='1' textAlign='left' background={'white'}>
                        <Heading size={'md'} color={'#616161'}>Top vacation destinations</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} background={'white'}>
                  <Box borderTop={"1px solid grey"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box width={'100%'}>
              <Accordion allowMultiple>
                <AccordionItem border={'none'}>
                  <h2>
                    <AccordionButton 
                    background={'white'}
                     _hover={{
                      background:"white"
                     }}>
                      <Box as="span" flex='1' textAlign='left' background={'white'}>
                        <Heading size={'md'} color={'#616161'}>Top flight Destination</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} background={'white'}>
                    <Box borderTop={"1px solid grey"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box width={'100%'}>
              <Accordion allowMultiple>
                <AccordionItem border={'none'}>
                  <h2>
                    <AccordionButton 
                    background={'white'}
                     _hover={{
                      background:"white"
                     }}>
                      <Box as="span" flex='1' textAlign='left' background={'white'}>
                        <Heading size={'md'} color={'#616161'}>Top car rental Destination</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} background={'white'}>
                    <Box borderTop={"1px solid grey"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Box>
    </>
  )
}
