import React from 'react'
import './AdminCss/AdminLogin.css';


function AdminLogin() {
  return (
    <div className='admin-log-bg'>
<div className="admin-login-container">
      <div className="admin-form-container">
        <h3>Admin Login</h3>
        <form className="admin-form">
          <div className="admin-form-row">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="admin-form-row">
            <input type="password" placeholder="Password" required />
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