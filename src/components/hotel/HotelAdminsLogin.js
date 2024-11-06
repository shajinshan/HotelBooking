import React, { useState } from 'react'; 
import './hotelcss/HotelAdminsLogin.css';

function HotelAdminsLogin() {
  const [data, setData] = useState({ hoteladminname: '', hoteladminpassword: '' });

  function onValueRead(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function onHotelAdminsLogin(e) {
    e.preventDefault();
    if (data.hoteladminname === "delbin" || data.hoteladminname === "shajin") {
      if (data.hoteladminpassword === "123") {
        alert('Login successful');
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('Incorrect username');
    }
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
          placeholder='UserName' 
          name='hoteladminname'
          onChange={onValueRead}
          required 
        />
        
        <input 
          className='form-control' 
          placeholder='Password' 
          name='hoteladminpassword' 
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
