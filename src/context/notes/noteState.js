import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const test = [
        {
            "_id": "61322f19553781a8ca8d0e080",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e081",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e089",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
          {
            "_id": "61322f19553781a8ca8d0e087",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
          },
        ]
    
    const [notes, setNotes] = useState(test);
    
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            { props.children }
        </noteContext.Provider>
    )
    }
export default NoteState;