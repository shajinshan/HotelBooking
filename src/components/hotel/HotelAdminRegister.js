import React, { useState } from 'react';
import './hotelcss/HotelAdminRegister.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function HotelAdminRegister() {
  const navigate = useNavigate();

  const [img, setImg] = useState(null);
  const [data, setData] = useState({
    organiserName: '',
    email: '',
    phone: '',
    registerId: '',
    address: '',
    password: '',
    profile: img,
  });

  const onValueRead = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onImageSet = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      if (file.size > 5242880) { // 5 MB = 5 * 1024 * 1024
        alert("File size exceeds 5 MB. Please upload a smaller file.");
        setImg(null); // Reset image
        return;
      }
    }
  };

  const adminRegister = (e) => {
    e.preventDefault();
    
    // Create a FormData object for handling file upload
    const formData = new FormData();
    formData.append('organiserName', data.organiserName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('registerId', data.registerId);
    formData.append('address', data.address);
    formData.append('password', data.password);

    // Append the profile image if it exists
    if (img) {
      formData.append('profile', img);
    }

    // Make the API request
    axios.post('http://localhost:8081/hotelAdmin/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Required for file uploads
      },
    })
      .then((res) => {
        alert('Registration successful');
        navigate('/hotelladminogin'); // Make sure this is the correct path
      })
      .catch((err) => {
        alert(err.message || 'An error occurred during registration');
      });
  };

  return (
    <div className='h-admin-reg-bg'>
      <div className='h-reg-box-left'>
        <div className='h-reg-qoute'>
          <h2>"Welcome back! Your journey to exceptional guest experiences starts here. Let's make each stay unforgettable."</h2>
        </div>
        <div className='h-reg-line'></div>
      </div>

      <div className='h-reg-box-main'>
        <div className='man-icon'>
          <img src='images/hotelloginicon.png' alt='Hotel Login Icon' />
        </div>
        <form onSubmit={adminRegister}>
          <label className='lable'>Upload Profile Pic</label>
          <input className='form-control' type='file' required name='profile' onChange={onImageSet} />
          <input className='form-control' type='text' required placeholder='Organiser Name' name='organiserName' onChange={onValueRead} />
          <input className='form-control' type='email' placeholder='Email' name='email' onChange={onValueRead} required />
          <input className='form-control' type='number' placeholder='Phone' name='phone' onChange={onValueRead} required />
          <input className='form-control' type='number' placeholder='Reg id' name='registerId' onChange={onValueRead} required />
          <input className='form-control' type='text' placeholder='Enter Password' name='password' onChange={onValueRead} required />
          <textarea className='form-control' placeholder='Address' name='address' onChange={onValueRead} required></textarea>
          <button type='submit' className='form-control btn btn-success'>Register</button>
        </form>
        <p className='h-dont-reg-p'>
          If You have an Account? <Link to='/hotelladminogin'>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default HotelAdminRegister;
