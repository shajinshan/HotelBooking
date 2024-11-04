import React from 'react'

function UserLogin() {
  return (
    <div className="login-container">
    <div className="right-panel">
      <div className="form-container">
        <h3>Login to Your Account</h3>
        <form className='form'>
          <div className="form-row">
            <input type="text" placeholder="Username" required /> {/* Username field */}
          </div>
          <div className="form-row">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up here!</a>
        </p>
        <footer>&copy; 2024. Company Inc. Ltd.</footer>
      </div>
    </div>
  </div>
  
  )
}

export default UserLogin