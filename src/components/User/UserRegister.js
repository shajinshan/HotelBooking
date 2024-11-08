import React, { useState } from 'react'
import './usercss/UserRegistration.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function UserRegister() {

  const navigate =useNavigate();

  const [regData, setRegData] = useState({});

  function onValueTake(e) {

    setRegData({ ...regData, [e.target.name]: e.target.value });
   
  }

  function onUserRegister(e) {
    e.preventDefault();

    axios.post('http://localhost:8081/userRegister/register', regData)
      .then((res) => {
        alert('registed');
        navigate('/userlogin')

      })
      .catch((err) => {
        alert(err)
      });
  }
  return (
    <div className="signup-container">

      <div className="right-panel">
        <div className="form-container">

          <p>
            Already have an account? <Link to={'/userlogin'}><a href="#">Login here!</a></Link>
          </p>
          <h3>Create An Account</h3>
          <form className='form' onSubmit={onUserRegister}>
            <div className="form-row">
              <input type="text" placeholder="First Name" name='firstName' onChange={onValueTake} required />
              <input type="text" placeholder="Last Name" name='lastName' onChange={onValueTake} required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" name='email' onChange={onValueTake} required />
              <input type="text" placeholder="Address" name='address' onChange={onValueTake} required />
            </div>
            <div className="form-row">
              <input type="number" placeholder="Aadhar Number" name='aadharNumber' onChange={onValueTake} required />
              <input type="number" placeholder="Mobile" name='mobile' onChange={onValueTake} required />
            </div>
            <div className="form-row">
              <input type="password" placeholder="Confirm Password" name='password' onChange={onValueTake} required />
            </div>

            <div className="terms">
              <input type="checkbox" required />
              <label>
                Creating your account means you accept our{" "}
                <a href="/terms">Terms & Conditions</a>.
              </label>
            </div>
            <button type="submit" className='btn btn-warning'>Create Account</button>

          </form>
          <footer>&copy; 2024. Company Inc. Ltd.</footer>
        </div>
      </div>
    </div>
  )
}

export default UserRegister