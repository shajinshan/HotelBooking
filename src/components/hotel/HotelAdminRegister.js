import React from 'react'
import './hotelcssas/HotelAdminRegister.css'
function HotelAdminRegister() {
  return (
    <div className='h-admin-reg-bg'>
        <div className='h-reg-box-left'>

        </div>

        <div className='h-reg-box-main'>

<div className='man-icon'>
<img src='images/hotelloginicon.png'></img>
</div>
<form>
  <input className='form-control' placeholder='Organiser Name'></input>
  <input className='form-control' placeholder='Email'></input>
  <input className='form-control' placeholder='Phone'></input>
  <input className='form-control' placeholder='Reg id'></input>
  <textarea className='form-control'placeholder='Address'></textarea>
  <button className='form-control btn btn-outline-info'>Register</button>
</form>

        </div>
    </div>
  )
}

export default HotelAdminRegister