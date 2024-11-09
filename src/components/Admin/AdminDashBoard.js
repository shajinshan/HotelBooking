import React, { useEffect, useState } from 'react';
import './AdminCss/AdminDashBoard.css';
import Navbar from './Navbar';
import axios from 'axios';

function AdminDashBoard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/admin/dashboard')
      .then((res) => {
        setData(res.data)
        console.log(data);

      })
      .catch((err) => {
        alert(err)
      })
  }, []);

  //decline

  function declineRequest(id){
    axios.delete(`http://localhost:8081/admin/decline/${id}`)
    .then((response) => {
     
      setData(data.filter((item) => item.id !== id));
    })
    .catch((err) => {
     alert(err)
    });
  }
  return (
    <div className='a-dashboard'>
      <Navbar />
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
          {data.map((e) => {
            return (
              <tbody>


                <tr>
                  <td>{e.id}</td>
                  <td>{e.organiserName}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.registerId}</td>
                  <td>{e.address}</td>
                  <td> <button className='btn btn-success'> Accept</button></td>
                  <td > <button className='btn btn-danger' onClick={()=> declineRequest(e.id)}> decline</button></td>
                </tr>




              </tbody>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default AdminDashBoard;
