import React, { useEffect, useState } from 'react'
import { Container, Text, HStack, VStack, Card, Divider ,Image} from '@chakra-ui/react';

// import Ticket1 from './Ticket1'
import { useLocation } from 'react-router'

const Boom = () => {


    const [passArray, setPassArray] = useState([]) ;
    const [train, setTrain] = useState({}) ;
    const location  = useLocation() ;

    useEffect(()=>{
        
        console.log(location.state) ;
        setPassArray(location.state.pass) ;
        setTrain(location.state.train)

        console.log(train)
    })
    
  return (
    <>
        <Container maxW={'100%'} >
        {/* <Image src={img} width={'250px'} h={'250px'} alignItems={'center'} margin={'auto'} /> */}
        <Text fontWeight={'bold'} color={'#252994'}textAlign={'center'} >Congratulations ! Your Ticket Has Been Booked. </Text>
    </Container>

    <Container maxW={'70%'} m={'10px auto'} borderBlock={'ButtonShadow'} >

      <Card variant={'outline'} borderWidth={'1px'} css={{boxShadow: "0px 2px 5px#888888"}}  borderRadius="md" overflow="hidden" padding={'20px'} marginTop={'10px'} bgColor={'aliceblue'}>

        <HStack w={'100%'} justifyContent={'space-between'} >
          <Text color={'#717070'} fontSize={'10px'} fontWeight={'medium'} >{"Date"} {" "} {new Date().toLocaleDateString()}</Text>
          <Text fontWeight="bold" fontSize={'13px'} >{train.trainNumber} {" "} {train.trainName}</Text>
          
        </HStack>

        <Divider orientation='horizontal' />

        <VStack justifyContent={'space-between'} alignItems={'flex-start'}  >
          <VStack alignItems={'flex-start'} >
            
            
          </VStack>

          <Divider orientation='horizontal' />

          <HStack w={'100%'} justifyContent={'space-between'} alignItems={'flex-end'} fontSize={'20px'}  >
            <VStack alignItems={'flex-start'}>
              <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }} >{train.src}</div>
              
              <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>{train.arrivalSrc}</div>
            </VStack>
            
            <VStack alignItems={'flex-start'} >
              <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }} >{train.dest}</div>
              
              <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>{train.arrivalDest}</div>
            </VStack>
          </HStack>
        </VStack>
      </Card>
    </Container>


    <Container maxW={'65%'} p={'2rem'} m={['10px auto', '20px auto']}  css={{boxShadow: "0px 2px 5px#888888"}} bgColor={'aliceblue'}>
    <div style={{ color: 'black', fontSize: "13px", fontWeight: 'bold' }} >Details of passengers</div>
    <HStack w={['100%','90%']} flexWrap='wrap' justifyContent={['center','space-between']} padding={['10px 0px','20px opx']}>
        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
          Name 
          <br/>

        </div>
        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
          Gender 
          <br/>
         
        </div>

        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
          Birth pref
          <br/>
         
        </div>
        
        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
          Status
          <br/>
         
        </div>

    </HStack>
    {
        passArray.map((item,index)=>(
            <HStack w={['100%','90%']} flexWrap='wrap' justifyContent={['center','space-between']} padding={['10px 0px','20px opx']}>
        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
    
          {item.name}
        </div>
        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
        
    
          {item.gender}
        </div>

        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
        
    
          {item.birthpref}
        </div>


        <div style={{ color: '#717070', fontSize: "12px", fontWeight: 'medium' }}>
    
          Confirm
        </div>
    </HStack>
        ))
    }

  </Container>
    </>
  )
}



export default Boom