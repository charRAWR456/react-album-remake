import React from 'react';
import PropTypes from 'prop-types';

function AddNewAlbum(props){
  return (
    <div>
      <p>would you like to add a new album?</p>
      <button onClick={props.onNewAlbum}>Yes</button>
    </div>
  );
}

AddNewAlbum.propTypes = {
  onNewAlbum: PropTypes.func
};

export default AddNewAlbum;