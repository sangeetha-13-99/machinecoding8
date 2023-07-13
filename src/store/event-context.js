import { createContext, useContext, useReducer } from "react";
import {data} from "../db/data"

const EventContext=createContext({
    eventsData:[]
});

const reducerFunction=(state,action)=>{
    switch (action.type) {
        case "searchFilter":
            return {...state,filteredBySearch:action.payload}
        case "typeFilter":
            return {...state,type:action.payload}
        default:
            break;
    }
}

const intialData={
    eventsData:data.meetups,
    filteredBySearch:[],
    type:""
}
export const EventContextProvider=({children})=>{
    const [data,dispatch]=useReducer(reducerFunction,intialData);
    return (
        <EventContext.Provider value={{data,dispatch}}>
            {children}
        </EventContext.Provider>
    )
}

export const useEventContext=()=>{
    return useContext(EventContext);
}