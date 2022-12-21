import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import WithSubnavigation from '../../AllRoutes/Navbar'
import ProductAddToCart from './Cards'
import LargeWithLogoCentered from "../Footer/Footer"
import axios from 'axios';
import Loader from '../Loader/Loader'

function Hotel () {
  const [data, setData] = React.useState([])
  const [loader, setLoader] = React.useState(false);

  React.useEffect(()=>{
    setLoader(true)
    axios.get(`https://magnificent-kit-lamb.cyclic.app/hotels`)
    .then((res)=>{
      setData(res.data)
      setLoader(false)
    })
    .catch((err)=>console.log(err))
  },[])

  return (loader ? <Loader/> : <Box>
      <WithSubnavigation/>
      <Box alignItems={'center'} padding={{base:"0 0.5rem", sm:"0 3rem", md:"0 3rem", lg:"0 3rem", xl:"0 5rem", '2xl':"0 5rem"}} marginTop={"70px"}>
      <SimpleGrid width={'fit-content'} margin={'auto'} gap='20px' columns={[1,1,2,3,4,4]}>
      {data && data.map((item)=>{
        return <ProductAddToCart key={item.id} id={item.id} city={item.city} name={item.name} price={item.price} rating={item.rating} reviews={item.reviews} paymentType={item.paymentType} imageURL={item.images[0]} />
      })}
      </SimpleGrid>
      </Box>
      <Box paddingTop={'34.1vh'}
      padding={{base:"0 1.6rem", sm:"0 1.6rem", md:"0 1rem", lg:"0 1rem", xl:"0 6rem", '2xl':"0 5rem"}}
      >
          <LargeWithLogoCentered />
      </Box>
    </Box>
  )
}

export default Hotel