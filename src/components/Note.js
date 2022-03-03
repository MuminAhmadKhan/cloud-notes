import React , {useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import Noteitem from './Noteitem'

const Note = () => {
    const context = useContext(noteContext)
  const {notes, fetchNotes} = context;
  useEffect(() => {
  
  fetchNotes()
    
    
  }, [])
  
  return (
    <>
    <AddNote />
    <div className='row my-3'>
        {notes.map((note)=> 
    {return <Noteitem  key ={note._id } note={note}/>
   })
}
    </div>
    </>
  )
}

export default Note
