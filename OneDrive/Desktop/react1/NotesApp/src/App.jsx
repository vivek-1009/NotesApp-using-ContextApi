import {useEffect, useState} from 'react'
import './App.css'
import { NoteProvider } from './context/NotesContext';
import NotesForm from './components/NotesForm';
import NotesItem from './components/NotesItem';
function App() {
 const[Notes,setNotes]=useState([]);
const addNote=(Note)=>{
setNotes((prevNotes)=>[...prevNotes,{id:Date.now(),...Note}]);
}
const updateNote=(id,Note)=>{
setNotes((prev)=>prev.map(prevNotes=>prevNotes.id===id?{...prevNotes,...Note}:{...prevNotes}))
}
const deleteNote=(id)=>{
  setNotes((prev)=>prev.filter(prevNotes=>prevNotes.id!==id))
}
const toggleNote=(id)=>{
  setNotes((prev)=>prev.map(prevNotes=>prevNotes.id===id?{...prevNotes,completed:!prevNotes.completed}:{...prevNotes}))
}
useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem("Notes"));
  if(savedNotes && savedNotes.length>0){
    setNotes(savedNotes);
  }
},[])
useEffect(()=>{
  localStorage.setItem("Notes",JSON.stringify(Notes));
},[Notes])

  return (
    <NoteProvider value={{addNote,toggleNote,deleteNote,updateNote,Notes}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Notes</h1>
                    <div className="mb-4">
                        {/* Notes form goes here */} 
                        <NotesForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add NotesItem here */}
                      {Notes.map((Note)=>(
                        <div key={Note.id} className='w-full'>
                          <NotesItem Note={Note}/>
                          </div>
                      ))} 
                    </div>
                </div>
            </div>
    </NoteProvider>
  )
}

export default App
