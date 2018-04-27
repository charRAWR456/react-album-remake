import React from 'react';
import SplashImage from '../assets/images/music.jpeg';


function Splash(){
  return (
    <div>
    <style global jsx>{`
        img{
          display: block;
          border: 10px solid white;
          width: 90%;
        }

        .subtext{
          text-align: center;
        }
          `}</style>
 <img src={SplashImage}/>
 <p className="subtext">Find the perfect Album to fit your mood</p>
 </div>
 )
}
 export default Splash;
