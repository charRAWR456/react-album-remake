import React from 'react';
import PropTypes from 'prop-types';

function AddNewAlbum(props){
  return (
    <div>
      <h2>Click 'Create New' to post a new album for sale.</h2>
      <button onClick={props.onNewAlbum}>Create New</button>
    </div>
  );
}

AddNewAlbum.propTypes = {
  onNewAlbum: PropTypes.func
};

export default AddNewAlbum;
