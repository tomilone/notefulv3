import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

import './FoldersList.css';


export default function FoldersList (props){
  
  return (
    <NotefulContext.Consumer>
      {value => {
        return(
   <>
    <ul className='folders'>
      {value.folders.map(folders => 
        <li key={folders.id}>
          <Link to={`/folders/${folders.id}`}>
          {folders.name}
          </Link>
        </li>)}
    </ul>
     {/* <button onClick={() => console.log(props)}>Add Folder</button>  */}
   </>
   )
  }}
   </NotefulContext.Consumer>
  )
}