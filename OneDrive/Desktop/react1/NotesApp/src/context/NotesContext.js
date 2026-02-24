import { createContext,useContext } from "react";
export const NotesContext=createContext(
   {
    Notes:[{
        id:1,
        Note:"Learn React",
        completed:false
    }],
    addNote:(Note)=>{},
    deleteNote:(id)=>{},
    updateNote:(id,Note)=>{},
    toggleNote:(id)=>{}
   }
);
export const useNote=()=>{
    return useContext(NotesContext)
}
export const NoteProvider=NotesContext.Provider;