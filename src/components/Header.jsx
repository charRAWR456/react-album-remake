import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style global jsx>{`
          .nav-links {
            float: right;
          }
        `}</style>
      <Link className="nav-links" to="/">Home </Link>
      <br/>
      <Link className="nav-links" to="/marketplace">MarketPlace</Link>
      <br/>
      <Link className="nav-links" to="/newalbum">Create Album</Link>
      <h1>Music Store</h1>
      <hr />
    </div>
  );
}

export default Header;
