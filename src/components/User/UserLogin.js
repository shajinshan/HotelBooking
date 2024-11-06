import React, { useState } from 'react'
import './usercss/UserLogin.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
function UserLogin() {

  const[login,setlogin]=useState({email:'',password:''});

function valuetaken(e){

  setlogin({...login,[e.target.name]:e.target.value})
  console.log(login)
}
function userLogin(o){
  o.preventDefault();
  axios.post('http://localhost:8081/userLogin/login',login)
  .then((response)=>{
    alert('loginSuccesful')
  })
  .catch((error)=>{
    alert(error)
  })
}
  return (
    <div className="logins-container">
    <div className="log-container">
    <div className="right-panel">
      <div className="form-container">
        <h3>Login to Your Account</h3>
        <form className='log-form' onSubmit={userLogin}>
          <div className="form-row">
            <input type="email" placeholder="email" name="email" required onChange={valuetaken}/> 
          </div>
          <div className="form-row">
            <input type="password" placeholder="Password" name="password" required onChange={valuetaken} />
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