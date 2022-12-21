import React from 'react'
import WithSubnavigation from '../AllRoutes/Navbar'
import Search from './Search/Search'
import {Body} from "./Body/Body";
import Footer from "./Footer/Footer";
import {Box} from "@chakra-ui/react";

function Home(){
  return (
    <div>
        <WithSubnavigation/>
        <Search/>
        <Body/>
        <Box
        marginTop={'30px'}
        padding={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 1rem", lg:"0 1rem", xl:"0 6rem", '2xl':"0 5rem"}}
        >
        <Footer/>
        </Box>
    </div>
  )
}
export default Home;