import React from 'react';
import Header from './Header';
import AlbumList from './AlbumList';
import { Switch, Route } from 'react-router-dom';
import NewAlbumControl from './NewAlbumControl';
import Error404 from './Error404';
import Splash from './Splash';
import AboutUs from './AboutUs';


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

  deleteAlbumHandler(album){
  this.state.masterAlbumList.splice(album,1);
   this.setState({masterAlbumList: masterAlbumList});
 }

  render(){
    return(
      <div>
        <style global jsx>{`
            body {
              background-color: lightyellow;
            }
          `}</style>
        <Header/>
        <Switch>
            <Route exact path='/' render={()=><Splash/>}/>
            <Route path='/aboutus' render={()=><AboutUs/>}/>
          <Route path='/marketplace' render={()=><AlbumList albumList={this.state.masterAlbumList}
          deleteAlbum={this.deleteAlbumHandler}/>} />
          <Route path='/newalbum' render={()=><NewAlbumControl onNewAlbumCreation={this.handleAddingNewAlbumToList} />} />
          <Route component={Error404} />
        </Switch>

      </div>
    );
  }
}

export default App;
