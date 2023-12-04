import React from 'react'
import logo from './logo.jpg'

export default function header(){
  return(
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <h5>EZVOTE</h5>
      <h1>REGISTRATION</h1>
    </div>
  )
}