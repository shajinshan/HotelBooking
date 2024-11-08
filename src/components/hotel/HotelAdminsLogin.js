import React, { useState } from 'react'; 
import './hotelcss/HotelAdminsLogin.css';
import axios from 'axios';

function HotelAdminsLogin() {
  const [data, setData] = useState({ email: '', password: '' });

  function onValueRead(e) {
    setData({ ...data, [e.target.name]: e.target.value });
   
  }

  function onHotelAdminsLogin(e) {
    e.preventDefault();
    axios.post('http://localhost:8081/hotelAdmin/login',data)
    .then((res)=>{
      alert(res.data.message)
    })
    .catch((err)=>{
     let errMsg=err.response.data.error[0]
     alert(errMsg)
    })
  }

  return (
    <div className='h-admin-log-bg'>
      <form className='h-ad-login' onSubmit={onHotelAdminsLogin}>
        <div className='h-AdminLogin'>
          <img src='images/hotelloginicon.png' alt='Hotel login icon' />
        </div>
        <div className='h-admin-log-tit'>
          <h2>Login</h2>
        </div>
        
        <input 
          className='form-control' 
          placeholder='email'
          type='email' 
          name='email'
          onChange={onValueRead}
          required 
        />
        
        <input 
          className='form-control' 
          placeholder='Password' 
          name='password' 
          type='password' 
          onChange={onValueRead} 
          required 
        />

        <button className='btn btn-outline-info form-control' type='submit'>Login</button>
      </form>
    </div>
  );
}

export default HotelAdminsLogin;
