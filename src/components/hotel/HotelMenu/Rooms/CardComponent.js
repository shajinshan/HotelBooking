import React, { useEffect, useState } from 'react';
import './roomscss/CardComponent.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
function CardComponent({ adminId }) {


  const hotelAdminId = parseInt(adminId || localStorage.getItem('hotelAdminId'));
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    axios.get(` http://localhost:8081/rooms/selectByAdmin/${hotelAdminId}`)
      .then((res) => {
        setRoomData(res.data)
        console.log(roomData);

      }).catch((err) => {
        alert(err)
      })

  }, [hotelAdminId])

  function viewRoom() {
    console.log(hotelAdminId);

  }
  return (
    <div className="container">
      <div className="row">
        
        {roomData.map((e)=>{
          return(
<div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to={`/viewroom/${e.roomId}`}>
          <div class="card" style={{width: "18rem"}}>
  <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/XZ/CU/DF/39708304/modern-design-3d-wallpaper-1000x1000.jpg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Room No : {e.roomNumber}</h5>
    
    <a href="#" class="btn btn-primary">Edit</a>
  </div>
</div>
          </Link>
        </div>
          )
        })}
        
      </div>
    </div>


  )
}

export default CardComponent