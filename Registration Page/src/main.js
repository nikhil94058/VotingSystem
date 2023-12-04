import React from 'react'
import image from './image.jpg'
export default function main(){
  return(
    <div className="main">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Name" />
        <button>REGISTER NOW</button>
      <img src={image} alt="Voting"  className="image"/>
    </div>

  )
}