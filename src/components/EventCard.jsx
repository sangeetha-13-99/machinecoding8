import { Box, Card, CardFooter, CardHeader, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const EventCard = ({event}) => {
  return (
    <Link to={`/${event.id}`}>
    <Card pos="relative" w="300px" h="300px" >
        <CardHeader p="0">
        <Image src={event.eventThumbnail} borderRadius="md" w="100%" h="100%"/>
        <Text pos="absolute" p="2" top="0" left="0" borderRadius="10px" bg="white">{event.eventType} event</Text>
        </CardHeader>
        <CardFooter>
            <Box>{event.eventStartTime}</Box>
            <Box>{event.title}</Box>
        </CardFooter>
    </Card>
    </Link>
  )
}
