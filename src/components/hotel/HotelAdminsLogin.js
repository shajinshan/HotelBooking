import React from 'react'
import './hotelcss/HotelAdminsLogin.css'


function HotelAdminsLogin() {
  return (
    
      <div className='h-admin-log-bg'>
         <form className='h-ad-login'>
        <div className='h-AdminLogin'>
          <img src='images/hotelloginicon.png'></img>
        </div>
        <div className='h-admin-log-tit'>
          <h2>Login</h2>
        </div>
       
          <input className='form-control' placeholder='UserName'></input>
          <input className='form-control' placeholder=' password'></input>


          <button className='btn btn-outline-info form-control'>Login</button>
        </form>

      </div>
    
   

  )
}

export default HotelAdminsLogin