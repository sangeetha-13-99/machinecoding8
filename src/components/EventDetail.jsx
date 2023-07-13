import { Box, Button, Card, CardBody, CardFooter, FormControl, FormLabel, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useEventContext } from '../store/event-context';

export const EventDetail = () => {
  const {eventDetailId}=useParams();
  console.log(eventDetailId);
  const {data:{eventsData}}=useEventContext();
  const event=eventsData.find(event=>event.id===eventDetailId);
  const [isrsvp,setIsrsvp]=useState(false);
  const {onOpen,onClose,isOpen}=useDisclosure();
  return (
    <HStack w="100%" justifyContent="space-around" alignItems="flex-start" gap="4">
      <Box w="60%" textAlign="left">
        <Heading>{event.title}</Heading>
        <Box my="4">
        <Text>Hosted By</Text>
        <Text>{event.hostedBy}</Text>
        </Box>
        <Image src={event.eventThumbnail} alt="event image" w="100%" h="300px" objectFit="cover"/>
        <Box my="4">
          <Heading>Detail</Heading>
          <Text>
            {event.eventDescription}
          </Text>
        </Box>
        <Box my="4">
          <Heading>Additional Imformation</Heading>
          <Text>
            DressCode: {event.additionalInformation.dressCode}
          </Text>
          <Text>
            Age Restriction :{event.additionalInformation.ageRestrictions}
          </Text>
        </Box>
        <HStack justifyContent="space-evenly">
          {event.eventTags.map(tag=>{
            return <Box p="4" bg="red.400" w="fit-content" borderRadius="10px"  color="white">{tag}</Box>
          })}
        </HStack>
      </Box>
      <Box w="30%">
        <Card textAlign="start" pt="8">
          <Box m="4" >
          <Text>{event.eventStartTime}</Text>
          <Text>{event.eventEndTime}</Text>

          </Box>
          <Box m="4">
          <Text>{event.location}</Text>
          <Text>{event.address}</Text>

          </Box>
          <Box m="4">
            {event.isPaid && <Text>Rs.{event.price}</Text>}
          </Box>
        </Card>
        <HStack my="8" justifyContent="space-between" flexWrap="wrap">
          {event.speakers.map((spe,ind)=>{
            return (
              <Card key={ind} w="180px" >
                <CardBody>
                <Image src={spe.image} alt={spe.name} w="180px" h="150px"/>
                </CardBody>
                <Box p="2">
                  <Text display="block">{spe.name}</Text>
                  <Text display="block">{spe.designation}</Text>
                </Box>
              </Card>
            )
          })}
        </HStack>
        <Box>
        <Button onClick={onOpen} bg="red.400">{!isrsvp?"RSVP":"Already RsVped"}</Button>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Fill in Your Personal Details</Heading>
            <FormControl>
              <FormLabel>Name</FormLabel>
            <Input placeholder='name'/>
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
            <Input placeholder='email'/>
            </FormControl>
              {event.isPaid? "* You Have to Make the Payment At Venue":""}
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' onClick={()=>{
              onClose();
              setIsrsvp(true);
            }}>RSVP</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  )
}
