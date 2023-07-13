import { Box, Button, Card, FormControl, FormLabel, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
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
    <HStack w="100%">
      <Box w="60%">
        <Heading>{event.title}</Heading>
        <Box my="4">
        <Text>Hosted By</Text>
        <Text>{event.hostedBy}</Text>
        </Box>
        <Image src={event.eventThumbnail} alt="event image" w="300px" h="300px"/>
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
        <Box>
          {event.eventTags.map(tag=>{
            return <Box p="4" bg="red.400" color="white">{tag}</Box>
          })}
        </Box>
      </Box>
      <Box w="30%">
        <Card>
          <Box m="4">
          <Text>{event.eventStartTime}</Text>
          <Text>{event.eventEndTime}</Text>

          </Box>
          <Box m="4">
          <Text>{event.location}</Text>
          <Text>{event.address}</Text>

          </Box>
          <Box m="4">
            {event.isPaid && <Text>{event.price}</Text>}
          </Box>
        </Card>
        <Box my="8">
          {event.speakers.map((spe,ind)=>{
            return (
              <Card key={ind}>
                <Image src={spe.image} alt={spe.name} w="100" h="100"/>
                <Text>{spe.name}</Text>
                <Text>{spe.designation}</Text>
              </Card>
            )
          })}
        </Box>
        <Button onClick={onOpen}>{!isrsvp?"RSVP":"Already RsVped"}</Button>
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
