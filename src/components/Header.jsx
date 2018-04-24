import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>MarketPlace</h1>
      <Link to="/">Home</Link> | <Link to="/newalbum">Create Album</Link>
    </div>
  );
}

export default Header;