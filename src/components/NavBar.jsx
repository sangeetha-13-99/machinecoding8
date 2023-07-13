import { Box, HStack, Image ,Input,InputGroup,Select } from '@chakra-ui/react'
import logo from "../assets/meetup.svg"
import { useEffect, useState } from 'react'
import { useEventContext } from '../store/event-context'
export const NavBar = () => {
    const {data:{eventsData},dispatch}=useEventContext();
    const [searchValue,setSearchValue]=useState('');


    useEffect(()=>{
        const timer= setTimeout(()=>{
            const filteredData=eventsData.filter(event=>{
                if(event.title.includes(searchValue)||event.eventTags.includes(searchValue)){
                    return true;
                }
                return false;
            })
            if(filteredData.length>0){
                dispatch({type:"searchFilter",payload:filteredData});
            }
            else{
                dispatch({type:"searchFilter",payload:[]});
            }
        },1000)
        return ()=>clearInterval(timer);
    },[searchValue])

    const changeHandler=(e)=>{
        setSearchValue(e.target.value);
    }
  return (
    <HStack justifyContent="space-between" w="100%">
        <Box>
            <Image src={logo} alt="meet up" />
        </Box>
        <Box>
            <InputGroup>
                <Input type='search' placeholder='event title and tag' onChange={changeHandler} value={searchValue}/>
            </InputGroup>
        </Box>
    </HStack>
  )
}
