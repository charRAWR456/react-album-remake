import React from 'react';
import Header from './Header';
import AlbumList from './AlbumList';
import { Switch, Route } from 'react-router-dom';
import NewAlbumControl from './NewAlbumControl';
import Error404 from './Error404';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterAlbumList: []
    };
    this.handleAddingNewAlbumToList = this.handleAddingNewAlbumToList.bind(this);
  }

  handleAddingNewAlbumToList(newAlbum){
    var newMasterAlbumList = this.state.masterAlbumList.slice();
    newMasterAlbumList.push(newAlbum);
    this.setState({masterAlbumList: newMasterAlbumList});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><AlbumList albumList={this.state.masterAlbumList} />} />
          <Route path='/newalbum' render={()=><NewAlbumControl onNewAlbumCreation={this.handleAddingNewAlbumToList} />} />
          <Route component={Error404} />
        </Switch>

      </div>
    );
  }
}

export default App;