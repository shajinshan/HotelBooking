import React, { useState } from 'react'
import './AdminCss/AdminLogin.css';
import { useNavigate } from 'react-router-dom';


function AdminLogin() {

  const navigate=useNavigate();

  const [data,setData]=useState({adminname:'',adminpassword:''});

  function onValueRead(e){
setData({...data,[e.target.name]:e.target.value});
console.log(data);

  }

  function onAdminLogin(e){
e.preventDefault();

if(data.adminname === "shajin" || data.adminname === "delbin" ){
  if(data.adminpassword === "123"){
    navigate('/menupage');
  }
  else{
    alert('incorrect password')
  }
}
else{
  alert('incorrect username')
}
  }
  return (
    <div className='admin-log-bg'>
<div className="admin-login-container">
      <div className="admin-form-container">
        <h3>Admin Login</h3>
        <form className="admin-form" onSubmit={onAdminLogin}>
          <div className="admin-form-row">
            <input type="text" placeholder="Email" name='adminname' onChange={onValueRead} required />
          </div>
          <div className="admin-form-row">
            <input type="password" placeholder="Password"  name='adminpassword' onChange={onValueRead} required />
          </div>
          <button type="submit" className='btn btn-primary'>Login</button>
        </form>
        <footer>&copy; 2024. Company Inc. Ltd.</footer>
      </div>
    </div>
    </div>
  );
}

export default AdminLogin