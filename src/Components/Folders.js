import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';


export default function Folders(props){
  let id = props.match.params.folderId;
  return(
    <NotefulContext.Consumer>
      {value =>{ 
      return (
      <div>
        {value.notes.map(notes => notes.folderId === id ? <div> <h2><Link to = {`/notes/${notes.id}`} >{notes.name}</Link> </h2> <p>{notes.modified}</p> </div> : null )}
      </div>
      )}}
    </NotefulContext.Consumer>
  )
}