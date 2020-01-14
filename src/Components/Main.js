import React from 'react';

import FoldersList from './FoldersList';
import NotesList from './NotesList';
import NotefulContext from '../NotefulContext';

import './Main.css'



export default function Main(props){
  return(
    <NotefulContext.Consumer>
      {value=>{
        return(
          <div>
            <FoldersList folders={value.folders} />
            <button onClick={() => props.history.push('/folders/add-folder')}>Add Folder</button> 
            <NotesList notes={value.notes} />
          </div>
       )
      }}
    </NotefulContext.Consumer>
  )
}