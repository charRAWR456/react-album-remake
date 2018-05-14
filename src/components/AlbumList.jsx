import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';


function AlbumList(props){
if(props.albumList.length > 0){
  return (
    <div>
      {props.albumList.map((album, index) =>
        <Album albumName={album.albumName}
          artist={album.artist}
          genre={album.genre}
          price={'$' + album.price}
          key={album.id}
          delete={()=> {props.deleteAlbum(index)}}/>
      )}
    </div>
  );
}else{
  return <div>Please go to 'Create Album' and add an Album to your store.</div>
}
}

AlbumList.propTypes = {
  albumList: PropTypes.array,
  albumName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default AlbumList;
