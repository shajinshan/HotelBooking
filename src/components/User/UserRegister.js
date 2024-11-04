import React from 'react'
import './usercss/UserRegistration.css'

function UserRegister() {
  return (
    <div className="signup-container">
  
    <div className="right-panel">
      <div className="form-container">
      
        <p>
          Already have an account? <a href="#">Login here!</a>
        </p>
        <h3>Create An Account</h3>
        <form className='form'>
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Address" required />
          </div>
          <div className="form-row">
            <input type="number" placeholder="Aadhar Number" required />
            <input type="number" placeholder="Mobile" required />
          </div>
          <div className="form-row">
            <input type="password" placeholder="Create Password" required />
            <input type="password" placeholder="Confirm Password" required />
          </div>
          
          <div className="terms">
            <input type="checkbox" required />
            <label>
              Creating your account means you accept our{" "}
              <a href="/terms">Terms & Conditions</a>.
            </label>
          </div>
          <button type="submit">Create Account</button>
         
        </form>
        <footer>&copy; 2024. Company Inc. Ltd.</footer>
      </div>
    </div>
  </div>
  )
}

export default UserRegister