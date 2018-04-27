import React from 'react';
import SplashImage from '../assets/images/music.jpeg';


function Splash(){
  return (
    <div>
    <style global jsx>{`
        img{
          justify-content: center;
          border: 4px solid white;
        }
          `}</style>
 <img width= '1080' src={SplashImage}/>
 </div>
 )
}
 export default Splash;
