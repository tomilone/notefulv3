import React from 'react';
import NotefulContext from '../NotefulContext';


export default function Notes(props){
  const id = props.match.params.id;

  return(
    <NotefulContext.Consumer>
      {value => {
        return (
   <div>    
    {value.notes.map((notes,i) => id === notes.id ? <div key={`note-${i}`}><h3>{notes.name}</h3><p>{notes.modified}</p><p>{notes.content}</p> </div>: null)} 
   </div>
   )
      }}
   </NotefulContext.Consumer>
  )
}