import React,{useState} from "react";
import NoteContext from "./noteContext"

const NoteState = (props)=>{
    const notesIntial=[
        
            {
              "_id": "62aff27110b79da3f16b6162",
              "user": "62a86a9d31362d7e176da355",
              "title": "CCN new Slid",
              "description": "this is about the IP Adresss in network comunication",
              "tag": "General",
              "date": "2022-06-20T04:07:13.755Z",
              "__v": 0
            },
            {
              "_id": "62aff474b7b7d5a97f767b24",
              "user": "62a86a9d31362d7e176da355",
              "title": "WP new Slid",
              "description": "this is about the CSS",
              "tag": "General",
              "date": "2022-06-20T04:15:48.241Z",
              "__v": 0
            }
          ]
    const [notes,setNotes]=useState(notesIntial);
    
   return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
   )
}

export default NoteState;