import React, { useState } from 'react'
import './HoteladminCss/HotelAdminMenu.css'

function HotelAdminMenu() {

    const [booking, setBooking] = useState(false);
    const [rooms, setRooms] = useState(false);
    const [customer, setCustomer] = useState(false);

    function bookingChange() {
        setBooking((prevBooking) => !prevBooking);
    }

    function roomsChange() {
        setRooms((prevRoom) => !prevRoom);
    }

    function customerChange() {
        setCustomer((prevCustomer) => !prevCustomer);
    }
    return (
        <div className='h-adminmenu'>
            <div className='h-admin-menu-container'>
                <div className='h-a-m-appdrawer'>
                    <h2>Hotel.com</h2>

                    <div className='h-a-profile'>
                        <img src='https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?t=st=1731760941~exp=1731764541~hmac=c9a0af5b83de261fa55cada2bcdcaa6c6efcfaa78abedbe75c8bfa664f8037bc&w=1380'></img>
                        <h1> Name</h1>
                        <h3>Admin</h3>
                    </div>

                    <div className='h-admin-menu-options'>

                        <li className='h-a-l-img'> <img src='images/home.png'></img>Home</li>

                        <li onClick={bookingChange} className='h-a-l-img'> <img src='images/booking.png'></img>Bookings  </li>
                        {booking ? <div className='h-ad-li-ul' >
                            <ul>New Bookings</ul>
                            <ul>All Bookings</ul>
                        </div> : <></>}


                        <li onClick={roomsChange} className='h-a-l-img'> <img src='images/rooms.png'></img>Rooms</li>
                        {rooms ? <div className='h-ad-li-ul' >
                            <ul>Add Rooms</ul>
                            <ul>Update Rooms</ul>
                            <ul>All Rooms</ul>
                        </div> : <></>}
                        <li onClick={customerChange} className='h-a-l-img'> <img src='images/customer.png'></img>Customes</li>
                        {customer ? <div className='h-ad-li-ul' >
                            <ul>New Customer</ul>
                            <ul>All Customers</ul>
                            <ul>Reviews</ul>

                        </div> : <></>}

                    </div>
                </div>

                <div className='h-a-m-navbar'>

                    <button className='btn btn-outline-danger'> Logout</button>

                </div>

                <div class="h-ad-men-home-container">
                    <div className='h-ad-menu'>
                        <div className='h-ad-menu-topbar'>
                            <h1>Hi ! Oraginzer Name</h1>
                            <h2>Track your Business</h2>
                        </div>

                        <div className='h-ad-menu-2topbar'>
                            <div className='h-ad-menu-charts'></div>
                            <div className='h-ad-menu-charts'></div>
                            <div className='h-ad-menu-charts'></div>
                            <div className='h-ad-menu-charts'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HotelAdminMenu