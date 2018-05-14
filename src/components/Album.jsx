import React from 'react';
import PropTypes from 'prop-types';

function Album(props){
  return (
    <div>
      <style global jsx>{
`  .albums{
  background-color: #f2e5ab;
  width: 250px;
  display: block;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
}`}</style>
<div className="albums">
      <h3>{props.artist} - {props.albumName}</h3>
      <p><em>{props.genre}</em></p>
      <p><strong>{props.price}</strong></p>
      <button onClick={props.delete}>delete</button>
      </div>
    </div>
  );
}

Album.propTypes = {
  albumName: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  genre: PropTypes.string,
  price: PropTypes.number.isRequired
};

export default Album;
