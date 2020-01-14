import React from 'react';
import { Route, Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';


import Main from './Components/Main';
import Folders from './Components/Folders';
import Notes from './Components/Notes';
import AddFolder from './Components/AddFolder';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      folders: [],
      notes:  [],
      
    }
  }

  componentDidMount(){
    this.getData('folders');
    this.getData('notes');
  }

  getData(endPoint) {
    let url = `http://localhost:9090/${endPoint}`;
    fetch(url)
        .then(res => res.json())
        .then(resJson => this.setState({
            [endPoint]: resJson
        }))
}


  getFolders = (e, name, a) =>{
    e.preventDefault();
    let url = 'http://localhost:9090/folders';
    fetch(url,{
      method: 'POST',
      body: JSON.stringify({name: name}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        this.getData('folders')
        return a();
      })
  }

  getNotes = (name,content,folderId,modified) => {
    let url = 'http://localhost:9090/notes';
    fetch(url,{
      method: 'POST',
      body: JSON.stringify({name: name, content: content, folderId: folderId, modified: modified}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => this.getData('notes'))
  }

  deleteNote = (id)=>{
    let url = `http://localhost:9090/notes/${id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => this.getData('notes'))
  }
  
  render(){
    return (
      <NotefulContext.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes,
        addFolder: this.getFolders,
        addNote: this.getNotes,
        delete: this.deleteNote
       
    }}>
          <div>
            <header>
              <h1><Link to='/'>Noteful</Link></h1>
            </header>
            <Route exact path='/' component={Main} />
            <Route path='/folders/:folderId' component={Folders} />
            <Route path ='/notes/:id' component={Notes} />
            <Route path='/folders/add-folder' component={AddFolder} />
          </div>
        </NotefulContext.Provider>
    )
  }
}

export default App;
