import React from 'react';
import NotefulContext from '../NotefulContext';


export default class AddFolder extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        newFolder: {
          name: '',
          touched: false
        }
      }
  }

  updateName = (name)=> {
    
    this.setState({
      newFolder:{
        name: name,
        touched: true
      }
    })
  }

  validName(){
    const name = this.state.newFolder.name.trim();
    if(name.length === 0){
      return 'This field is required'
    } else if(name.length < 3){
      return 'The folder name must be greater than 3 characters'
    }
  }

  changePath = () => {
    
    this.props.history.goBack();
  }

  render(){
    return(
      <NotefulContext.Consumer>
        {value => {
          return (
          <>
            <form className='addFolder' onSubmit={(e)=> value.addFolder(e, this.state.newFolder.name, this.changePath)}>
              <input type='text' name='folderName' placeholder='folder-name' onChange={(e) => this.updateName(e.target.value)}/>
              <button type='submit' >Add Folder</button>
            </form>
          </>
          )
        }}
      </NotefulContext.Consumer>
    )
  }
}