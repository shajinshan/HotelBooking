import React, { useState } from 'react'
import './hotelcss/HotelAdminRegister.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function HotelAdminRegister() {

  const navigate = useNavigate();


  const [data, setData] = useState({
    organiserName:'',
    email: '',
    phone: '',
    registerId: '',
    address: '',
    password:''
  });

  function onValueRead(e) {
    setData({ ...data, [e.target.name]: e.target.value });


  }

  function adminRegister(e) {
    e.preventDefault();
    axios.post('http://localhost:8081/hotelAdmin/register', data)
      .then((res) => {
        navigate('/hotelladminogin');
      })
      .catch((err) => {
        alert(err)
      });
  }
  return (
    <div className='h-admin-reg-bg'>
      <div className='h-reg-box-left'>
        <div className='h-reg-qoute'>
          <h2>"Welcome back! Your journey to exceptional guest experiences starts here.
            Let's make each stay unforgettable."</h2>
        </div>
        <div className='h-reg-line'></div>
      </div>

      <div className='h-reg-box-main'>

        <div className='man-icon'>
          <img src='images/hotelloginicon.png'></img>
        </div>
        <form onSubmit={adminRegister}>
          <input className='form-control' type='text' required placeholder='Organiser Name' name='organiserName' onChange={onValueRead}></input>
          <input className='form-control' type='email' placeholder='Email' name='email' onChange={onValueRead} required></input>
          <input className='form-control' type='number' placeholder='Phone' name='phone' onChange={onValueRead} required></input>
          <input className='form-control' type='number' placeholder='Reg id' name='registerId' onChange={onValueRead} required></input>
          
          <input className='form-control' type='text' placeholder='Enter Password' name='password' onChange={onValueRead} required></input>
          <textarea className='form-control'  placeholder='Address' name='address' onChange={onValueRead} required></textarea>
          <button type='submit' className='form-control btn btn-success'>Register</button>
        </form>
<p className='h-dont-reg-p'>
  If You have an Account ? <Link to={'/hotelladminogin'}> <a href=''>Login</a></Link>
</p>
      </div>
    </div>
  )
}

export default HotelAdminRegister