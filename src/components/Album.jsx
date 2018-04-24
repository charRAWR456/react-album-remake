import React from 'react';
import PropTypes from 'prop-types';

function Album(props){
  return (
    <div>
      <style global jsx>{`
          div {
            background-color: lightyellow;
          }
        `}</style>
      <h3>{props.artist} - {props.albumName}</h3>
      <p><em>{props.genre}</em></p>
      <hr/>
    </div>
  );
}

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  genre: PropTypes.string
};

export default Album;