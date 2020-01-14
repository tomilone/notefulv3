import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';


export default function NotesList (){
  return (
    <NotefulContext.Consumer>
      {value =>{
        return(
   <>
    <ul>
      {value.notes.map(notes => 
      <li key={notes.id}>
        <Link to={`/notes/${notes.id}`}>
          {notes.name}
        </Link>
        <p>{notes.modified}</p>
        <button value='delete' onClick={() =>value.delete(notes.id)}>Delete Note</button>
      </li>)}
    </ul>
   </>
     )
    }}
   </NotefulContext.Consumer>
  )
}