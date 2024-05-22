import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';
function Test(){
  const [movieRating,setMovieRating]=useState(0)
  return(
  <div>
    <StarRating maxRating={5} color='blue' onSetRating={setMovieRating}/>
    <p>this movie was rated {movieRating}</p>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={["terrible","poor","average","good","amazing"]}/>
    
     {/* <StarRating size={24} color="red" classname="test"/> */}
    {/* <StarRating/>ekhane maxrating export e default 5 kore disilam tai extra value set na kore component nile default ta show kore  */}
<Test/>
  </React.StrictMode>
);
