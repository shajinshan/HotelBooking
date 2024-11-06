import React from 'react'
import './hotelscss/HotelAdminsLogin.css'


function HotelAdminsLogin() {
  return (
    <div>
    <div className="login-page">
  <div className="login-container">
    <p className="login-text">
      Don’t have an account? <a href="/signup">Sign up here!</a>
    </p>
    <h2>Hotel Login</h2>
    <form>
      <input type="text" placeholder="Username" className="input-field" />
      <input type="password" placeholder="Password" className="input-field" />
      <button type="submit" className="login-button">Login</button>
    </form>
  </div>
  </div>
  
  </div>
  )
}

export default HotelAdminsLogin