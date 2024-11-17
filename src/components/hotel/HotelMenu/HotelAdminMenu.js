import React, { useState } from 'react'
import './HoteladminCss/HotelAdminMenu.css'
import ProgressBar from '@ramonak/react-progress-bar';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

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
                        {/* Home Page Contents */}
                        <div className='h-ad-menu-topbar'>
                            <h1>Hi ! Oraginzer Name</h1>
                            <h2>Track your Business</h2>
                        </div>

                        <div className='h-ad-menu-2topbar'>

                            <div className='h-ad-menu-charts'>
                                <div className='h-ad-chart-sub-1'>
                                    <img src='images/booking.png' style={{ backgroundColor: "#a05ae2" }}></img>
                                    <div className='h-ad-chart-sub'>
                                        <h4>Total Booking</h4>
                                        <p>1234</p>
                                    </div>
                                </div>
                                <div className='h-ad-chart-sub-2'>

                                    <ProgressBar className='progressbar'
                                        completed={70}
                                        isLabelVisible={false}
                                        transitionDuration="0.5s"
                                        bgColor="#a05ae2"
                                    />

                                </div>
                            </div>


                            <div className='h-ad-menu-charts'>
                                <div className='h-ad-chart-sub-1'>
                                    <img src='images/rooms.png' style={{ backgroundColor: "orange" }}></img>
                                    <div className='h-ad-chart-sub'>
                                        <h4>Rooms Available</h4>
                                        <p>1234</p>
                                    </div>
                                </div>
                                <div className='h-ad-chart-sub-2'>

                                    <ProgressBar className='progressbar'
                                        completed={20}
                                        isLabelVisible={false}
                                        transitionDuration="0.5s"
                                        bgColor="orange"
                                    />

                                </div>



                            </div>

                            <div className='h-ad-menu-charts'>
                                <div className='h-ad-chart-sub-1'>
                                    <img src='images/hotel/newcustomer.png' style={{ backgroundColor: "#129e00" }}></img>
                                    <div className='h-ad-chart-sub'>
                                        <h4>New Customers</h4>
                                        <p>1234</p>
                                    </div>
                                </div>
                                <div className='h-ad-chart-sub-2'>

                                    <ProgressBar className='progressbar'
                                        completed={40}
                                        isLabelVisible={false}
                                        transitionDuration="0.5s"
                                        bgColor="#129e00"
                                    />

                                </div>
                            </div>

                            <div className='h-ad-menu-charts'>
                                <div className='h-ad-chart-sub-1'>
                                    <img src='images/hotel/revenew.png'></img>
                                    <div className='h-ad-chart-sub'>
                                        <h4>Total Revenue</h4>
                                        <p>$ 104</p>
                                    </div>
                                </div>
                                <div className='h-ad-chart-sub-2'>

                                    <ProgressBar className='progressbar'
                                        completed={90}
                                        isLabelVisible={false}
                                        transitionDuration="0.5s"
                                        bgColor="#3ac7d7"
                                    />

                                </div>
                            </div>
                        </div>

                        <div className='h-ad-menu-3topbar'>

                            <div className='h-ad-menu-graph'>

                                <Line
                                    data={{
                                        labels: ["Week-1", "Week-2", "Week-3"], // X-axis labels
                                        datasets: [
                                            {
                                                label: "New Customer",
                                                data: [23, 3, 4], // Y-axis data
                                                borderColor: "rgba(75,192,192,1)", // Line color
                                                backgroundColor: "rgba(75,192,192,0.2)", // Area under the line
                                                tension: 0.3, // Smooth curves

                                            },
                                        ],
                                    }}


                                />
                            </div>

                            <div className='h-ad-menu-flowchart'>
                                <Doughnut
                                data={{
                                    labels:["single","Double","A/c","non-A/c","Deluxe"],

                                    datasets:[{
                                        label:"Rooms",
                                        data:[12,23,45,53,77],
                                    }]
                                }}
                                />
                                 </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HotelAdminMenu