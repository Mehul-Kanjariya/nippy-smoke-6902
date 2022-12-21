import React from 'react'
import { Button,SimpleGrid } from '@chakra-ui/react'

export function Rooms({rooms,changerooms}){

  return (
    <div>
        <SimpleGrid width={"fit-content"} columns={3} gap={'20px'} paddingLeft={'20px'} paddingRight={'10px'}>
            <Button 
            backgroundColor={"white"}
            disabled={rooms===1} 
            border={'1px solid black'} 
            width={'30px'} height={'30px'}
            alignItems={'center'} 
            textAlign={'center'} 
            borderRadius={'50%'} 
            onClick={()=>changerooms(-1)}>-</Button>
            
            <Button 
            border={'1px solid black'} 
            width={'30px'} 
            height={'30px'} 
            alignItems={'center'} 
            textAlign={'center'} 
            borderRadius={'50%'}
            backgroundColor={"white"} 
            onClick={()=>changerooms(+1)}>+</Button>
        </SimpleGrid>
    </div>
  )
}
