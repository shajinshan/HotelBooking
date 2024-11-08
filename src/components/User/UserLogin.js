import React, { useState } from 'react'
import './usercss/UserLogin.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
function UserLogin() {

  //forResetPassword
  const [forgotstate, setForgotState] = useState('1');

  const [login, setlogin] = useState({ email: '', password: '' });

  function valuetaken(e) {

    setlogin({ ...login, [e.target.name]: e.target.value })
    console.log(login)
  }
  function userLogin(o) {
    o.preventDefault();
    axios.post('http://localhost:8081/userLogin/login', login)
      .then((response) => {
        alert('loginSuccesful')
      })
      .catch((error) => {
        alert(error)
      })
  }

  //method for ResetPassword
  function onchangeForgotState() {
    setForgotState('2')
  }

  //
  function enterOtp() {
    setForgotState('3')
  }

  function validOtp(){
    setForgotState('4')
  }
  return (
    <div className="logins-container">
      <div className="log-container">
        <div className="right-panel">
          <div className="form-container">
            {forgotstate === '1' ? 

            //Login Page
            (<div>
              <h3>Login to Your Account</h3>

              <form className='log-form' onSubmit={userLogin}>
                <div className="form-row">
                  <input type="email" placeholder="email" name="email" required onChange={valuetaken} />
                </div>
                <div className="form-row">
                  <input type="password" placeholder="Password" name="password" required onChange={valuetaken} />
                </div>
                <div className="form-row u-forgot-p">
                  <a href='#' onClick={onchangeForgotState} >Forgot Password ?</a>
                </div>
                <button type="submit" className='btn btn-warning' >Login</button>
              </form></div>
            ) 
            : forgotstate === '2' ? 
            
            //Reset mail Page
            (<div className='u-reset'>
              <div className="form-row">
                <input type="email" placeholder="Enter-email" name="forgotmail" required />
              </div>

              <button type="submit" className='btn btn-primary' onClick={enterOtp}>Send OTP</button>
            </div>)  : forgotstate === '3' ? 
            
            //OTP validate
            (<div className='u-reset'>
              <div className="form-row">
                <input type="number" placeholder="Enter OTP" name="otp" required />
              </div>
              <button type="submit" className='btn btn-primary' onClick={validOtp}>Validate OTP</button>
            </div>):
            //PassWord Reset
            (<div className='u-password-reset'>
              <p>Reset Password</p>
                 <div className="form-row">
                 
                  <input type="password" placeholder="New Password" name="password" required onChange={valuetaken} />
                </div>
                <button type="submit" className='btn btn-primary'>Reset Password</button>
            </div>)
            }

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