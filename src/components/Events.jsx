import { Box, HStack, Heading, Select, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEventContext } from '../store/event-context'
import { EventCard } from './EventCard';

export const Events = () => {
    const {data:{eventsData,filteredBySearch,type},dispatch}=useEventContext();
    
    console.log(filteredBySearch,type)
    let events=[]
    if(filteredBySearch.length>0){
        events=filteredBySearch;
    }
    if(events.length>0 && type!==""){
        events=events.filter(event=>event.eventType===type);
    }
    const getEvents=events.length>0?events:eventsData;


    const changeHandler=(e)=>{
        dispatch({type:"typeFilter",payload:e.target.value});
    }
  return (
    <Box w="100%">
    <HStack justifyContent="space-around" w="100%" alignItems="start">
        <Heading fontSize="3rem">MeetUp Events</Heading>
        <Box>
        <Select placeholder='Select Event Type' onChange={changeHandler} >
            <option value='Offline'>Offline</option>
            <option value='Online'>Online</option>
        </Select>
        </Box>
    </HStack>
    <HStack justifyContent="space-between" g="4" flexWrap="wrap">
        <Text>{events.length>0?"Showing Searched Events Data":"Showing All Events Data"}</Text>
        {getEvents.map(event=>{
            return <EventCard key={event.id} event={event}/>
        })}
    </HStack>
    </Box>
  )
}
