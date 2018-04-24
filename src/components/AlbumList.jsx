import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';


function AlbumList(props){
  return (
    <div>
      <hr/>
      {props.albumList.map((album) =>
        <Album albumName={album.albumName}
          artist={album.artist}
          genre={album.genre}
          key={album.id}/>
      )}
    </div>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array
};

export default AlbumList;