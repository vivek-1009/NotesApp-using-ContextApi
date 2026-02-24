import React,{useState} from 'react'
import { useNote } from '../context/NotesContext'
function NotesForm() {
    const [Note,setNote]=useState("")
    const {addNote}=useNote();
    const add=(e)=>{
        e.preventDefault();
        if(!Note){
            return;
        }else{
            addNote({Note,completed:false})
            setNote("");
        }
    }
  return (
      <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Notes here"
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={Note}
            //wiring bolte h value ko state se connect krna
            onChange={(e)=>setNote(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
  )
}

export default NotesForm
