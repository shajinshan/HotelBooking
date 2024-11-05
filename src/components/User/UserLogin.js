import React from 'react'
import './usercss/UserLogin.css'
import { Link } from 'react-router-dom'
function UserLogin() {
  return (
    <div className="logins-container">
    <div className="log-container">
    <div className="right-panel">
      <div className="form-container">
        <h3>Login to Your Account</h3>
        <form className='log-form'>
          <div className="form-row">
            <input type="text" placeholder="Username" required /> {/* Username field */}
          </div>
          <div className="form-row">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to={'/'}><a href="#">Sign up here!</a></Link> 
        </p>
        <footer>&copy; 2024. Company Inc. Ltd.</footer>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default UserLogin