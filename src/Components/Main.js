import React from 'react';

import FoldersList from './FoldersList';
import NotesList from './NotesList';



export default function Main(){
  return(
    <div>
      <h1>Noteful</h1>
      <FoldersList />
      <NotesList />
    </div>
  )
}