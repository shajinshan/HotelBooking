import React, { useEffect, useState } from 'react';
import './AdminCss/AdminDashBoard.css';
import trashimg from '../../Assets/images/trashimg.png';
import trashgif from '../../Assets/images/trash.gif';
import approvedimg from '../../Assets/images/statusapproved.png';
import waitingimg from '../../Assets/images/statuspending.gif'

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
        // alert(err)
      })
  }, [data]);

  //delete request
  function deleteRequest(id) {
    axios.delete(`http://localhost:8081/admin/delete/${id}`)
      .then((response) => {

        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => {
        alert(err)
      });
  }
  const getColorForLetter = (letter) => {
    const colors = {
      A: "#FF5733", B: "#33A1FF", C: "#3357FF", D: "#FF33A1", E: "#A133FF",
      F: "#FF8C33", G: "#33FFF7", H: "#FF33B8", I: "#B833FF", J: "#33A1FF",
      K: "#57FF33", L: "#FF3333", M: "#33FF8C", N: "#8C33FF", O: "#FFA133",
      P: "#33FFAA", Q: "#5733FF", R: "#FF3357", S: "#33FF57", T: "#3357FF",
      U: "#FF5733", V: "#33A1FF", W: "#FF8C33", X: "#A1FF33", Y: "#FF33FF",
      Z: "#FF3357"
    };
    return colors[letter.toUpperCase()] || "#333"; // Default color if letter is not mapped
  };




  //aprove request
  function approveRequest(id) {
    axios.post(`http://localhost:8081/admin/approve/${id}`)
      .then((response) => {
        
        alert('approved');
      })
      .catch((err) => {
        alert(err)
      });
  }

   //decline request
   function declineRequest(id) {
    axios.post(`http://localhost:8081/admin/decline/${id}`)
      .then((response) => {
        
        alert('declined');
      })
      .catch((err) => {
        alert(err)
      });
  }
  return (
    <div className='a-dashboard'>
     
      <div>
  
    </div>
      <div className='a-dash-container container'>
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <table className='table   table-bordered'>
          <thead className='table-info'>
            <tr>
              <th>Id</th>
              <th>Organizer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Register Id</th>
              <th>Address</th>
              <th>Date</th>
              <th>Approve</th>
              <th>Decline</th>
              <th>Status</th>
              <th>Delete</th>

            </tr>
          </thead>
          {data.map((e) => {
            return (
              <tbody>


                <tr>
                  <td>{e.id}</td>
                  <td className='td-circle-av'>
                    <div className='circle-avatar' style={{ backgroundColor: getColorForLetter(e.organiserName.charAt(0)) }}>

                      <p>{e.organiserName.charAt(0)}</p>
                    </div>
                    <h6> {e.organiserName}</h6></td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.registerId}</td>
                  <td>{e.address}</td>
                  <td>{e.localDate}</td>
                  <td> <button className='btn btn-success' onClick={() => approveRequest(e.id)}> Accept</button></td>
                  <td > <button className='btn btn-danger' onClick={() => declineRequest(e.id)}> decline</button></td>
                  <td><div className='status-div' >
                    {e.status ? <img src={approvedimg}></img>
                      : <img src={waitingimg}></img>}
                  </div>
                  </td>
                  <td className='status-div' onClick={()=>deleteRequest(e.id)}>
                     {e.status ?<div><img src={trashimg}>
                     </img></div> :<div><img src={trashgif}></img></div> }</td>
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
