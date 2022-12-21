import React from 'react'
import { Button,Box,SimpleGrid } from '@chakra-ui/react'

export function Travellers({traveller,changetraveller}){

  return (
    <div>
        <SimpleGrid width={"fit-content"} columns={3} gap={'20px'} paddingLeft={'20px'} paddingRight={'10px'}>
            <Button 
            backgroundColor={"white"}
            disabled={traveller===1} 
            border={'1px solid black'} 
            width={'30px'} height={'30px'}
            alignItems={'center'} 
            textAlign={'center'} 
            borderRadius={'50%'} 
            onClick={()=>changetraveller(-1)}>-</Button>
            <Button 
            backgroundColor={"white"}
            border={'1px solid black'} 
            width={'30px'} 
            height={'30px'} 
            alignItems={'center'} 
            textAlign={'center'} 
            borderRadius={'50%'} 
            onClick={()=>changetraveller(+1)}>+</Button>
        </SimpleGrid>
    </div>
  )
}
