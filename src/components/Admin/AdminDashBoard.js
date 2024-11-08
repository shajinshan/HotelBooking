import React from 'react';
import './AdminCss/AdminDashBoard.css';
import Navbar from './Navbar';

function AdminDashBoard() {
  return (
    <div className='a-dashboard'>
      <Navbar/>
      <div className='a-dash-container container'>
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <table className='table  table-hover table-bordered'>
          <thead className='table-info'>
            <tr>
              <th>Id</th>
              <th>Organizer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Register Id</th>
              <th>Address</th>
              <th>Approve</th>
              <th>Decline</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>002</td>
              <td>Shajin</td>
              <td>sha@gmail.com</td>
              <td>123-456-7890</td>
              <td>Reg-001</td>
              <td>1234 Elm Street</td>
              <td> <button className='btn btn-success'> Accept</button></td>
              <td > <button className='btn btn-danger'> decline</button></td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashBoard;
