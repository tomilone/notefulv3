import React from 'react';
import { Route } from 'react-router-dom';


import Main from './Components/Main';
import Folders from './Components/Folders';
import Notes from './Components/Notes';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      folders: {},
      notes: {}
    }
  }
  render(){
    console.log(props)
    return (
      <div>
        <Route exact path='/' render={(props)=> <Main folders={props.folders} notes={props.notes} />} />
        <Route path='/folders/' component={Folders} />
        <Route path ='/notes/' component = {Notes} />
      </div>
    )
  }
}

export default App;
