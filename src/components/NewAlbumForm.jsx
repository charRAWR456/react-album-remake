import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewAlbumForm(props){
  let _albumName = null;
  let _artist = null;
  let _genre = null;

  function handleNewAlbumFormSubmission(event){
    event.preventDefault();
    props.onNewAlbumCreation({albumName: _albumName.value, artist: _artist.value, genre: _genre.value, id: v4()});
    _albumName.value = '';
    _artist.value = '';
    _genre.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewAlbumFormSubmission}>
        <input
          type='text'
          id='albumName'
          placeholder='Album Name'
          ref={(input) => {_albumName = input;}} />
        <input
          type='text'
          id='artist'
          placeholder='Artist'
          ref={(input) => {_artist = input;}} />
        <textarea
          id='genre'
          placeholder='Describe the genre.'
          ref={(textarea) => {_genre = textarea;}}/>
        <button type='submit'>Create!</button>
      </form>
    </div>
  );
}
NewAlbumForm.propTypes = {
  onNewAlbumCreation: PropTypes.func
};

export default NewAlbumForm;