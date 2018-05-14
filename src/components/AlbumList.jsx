import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';


function AlbumList(props){

  return (

    <div>
      {props.albumList.map((album) =>
        <Album albumName={album.albumName}
          artist={album.artist}
          genre={album.genre}
          price={'$' + album.price}
          key={album.id}/>
      )}
    </div>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array,
  albumName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default AlbumList;
