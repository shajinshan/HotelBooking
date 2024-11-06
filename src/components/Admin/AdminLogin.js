import React, { useState } from 'react'
import './AdminCss/AdminLogin.css';


function AdminLogin() {

  const [data,setData]=useState({adminname:'',adminpassword:''});

  function onValueRead(e){
setData({...data,[e.target.name]:e.target.value});
console.log(data);

  }

  function onAdminLogin(e){
e.preventDefault();

if(data.adminname === "shajin" || data.adminname === "delbin" ){
  if(data.adminpassword === "123"){
    alert('Login success');
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
          <button type="submit">Login</button>
        </form>
        <footer>&copy; 2024. Company Inc. Ltd.</footer>
      </div>
    </div>
    </div>
  );
}

export default AdminLogin