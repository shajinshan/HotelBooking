import React from 'react';
import './Bookingcss/AllBooking.css';
import callicon from '../../../../Assets/call.png'
import gmailicon from '../../../../Assets/hotel/gmail.png'
import editicon from '../../../../Assets/hotel/edit.png'
import refreshicon from '../../../../Assets/hotel/refresh.png'
import trashicon from '../../../../Assets/images/trashimg.png'


function AllBooking() {
  return (
    <div className="h-ad-menu-allbook-container">
      <div className="h-ad-menu-allroom-nav">
        <h3>All Bookings</h3>
        <input type="text" placeholder="Search" />
        <img src={refreshicon} alt="refresh" />
      </div>
      <div className="h-ad-menu-allroom-table">
        <table>
          <thead>
            <tr className="h-ad-menu-allroom-table-tr">
              <th>
               
              </th>
              <th>Guest Name</th>
              <th>Email</th>
              <th>Arrival Date</th>
              <th>Departure Date</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Room Type</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-ad-menu-allroom-table-td">
              <td>
               
              </td>
              <td className="profile-img-guest">
                <img src={gmailicon} alt="guest" />
                John Deo
              </td>
              <td className="user-email-cont">
                <img src={gmailicon} alt="email icon" />
                test@email.com
              </td>
              <td>02/25/2018</td>
              <td>02/28/2018</td>
              <td className="gender male">Male</td>
              <td className='user-email-cont'>
                <img src={callicon} alt="phone icon" /> 1234567890
              </td>
              <td>Delux</td>
              <td className="payment paid">Paid</td>
              <td className="actions user-email-cont">
                <button className="edit-btn"> <img src={editicon} alt="edit icon" /> </button>
                <button className="delete-btn"><img src={trashicon} alt="trash icon" /></button>
              </td>
            </tr>
            {/* Repeat for more rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBooking;
