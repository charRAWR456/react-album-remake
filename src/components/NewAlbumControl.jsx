import React from 'react';
import AddNewAlbum from './AddNewAlbum';
import NewAlbumForm from './NewAlbumForm';
import PropTypes from 'prop-types';

class NewAlbumControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleNewAlbum = this.handleNewAlbum.bind(this);
  }

  handleNewAlbum(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewAlbumForm onNewAlbumCreation={this.props.onNewAlbumCreation} />;
    } else {
      currentlyVisibleContent = <AddNewAlbum onNewAlbum={this.handleNewAlbum}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewAlbumControl.propTypes = {
  onNewAlbumCreation: PropTypes.func
};

export default NewAlbumControl;