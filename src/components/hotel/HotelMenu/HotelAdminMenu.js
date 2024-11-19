import React, { useEffect, useState } from 'react'
import './HoteladminCss/HotelAdminMenu.css'
import ProgressBar from '@ramonak/react-progress-bar';
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import HotelAddRooms from './Rooms/HotelAddRooms';
import UpdateRoom from './Rooms/UpdateRoom';
import AllRooms from './Rooms/AllRooms';
import AllBooking from './Booking/AllBooking';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import call from '../../../Assets/call.png'
import homeicon from '../../../Assets/images/home.png';
import bookicon from '../../../Assets/images/booking.png'
import roomicon from '../../../Assets/images/rooms.png'
import customericon from '../../../Assets/images/customer.png'
import revenewicon from '../../../Assets/images/revenew.png'
function HotelAdminMenu() {
    const { id } = useParams();
    const [selected, SetSelected] = useState(null);
    const [page, setPage] = useState('home');
    const [booking, setBooking] = useState(false);
    const [rooms, setRooms] = useState(false);
    const [customer, setCustomer] = useState(false);
    const [hotelAdminProfileData,setHotelAdminProfileData]=useState(null);


    function btnSwitchSelected(menu) {
        pageNav(menu)
        SetSelected(menu);
    }
    function bookingChange(menu) {

        btnSwitchSelected(menu);
        setBooking((prevBooking) => !prevBooking);
    }

    function roomsChange(menu) {
        btnSwitchSelected(menu);
        setRooms((prevRoom) => !prevRoom);
    }

    function customerChange(menu) {
        btnSwitchSelected(menu);
        setCustomer((prevCustomer) => !prevCustomer);
    }
    //funtion for page change

    function pageNav(pag) {
        setPage(pag)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8081/hoteladmin/viewbyid/${id}`)

        .then((res)=>{
setHotelAdminProfileData(res.data)

console.log(hotelAdminProfileData.profile);


        })
        .catch((err)=>{
            alert(err)
        })
    },[id]);

    if (!hotelAdminProfileData) {
        return <div className='ad-menu-spinner'>Loading...</div>; 
    }
    return (
        <div className='h-adminmenu'>
            <div className='h-admin-menu-container'>
                <div className='h-a-m-appdrawer'>
                    <h2>Hotel.com</h2>

                    <div className='h-a-profile'>
                        <img src={hotelAdminProfileData.profile}></img>
                        <h1>{hotelAdminProfileData.organiserName} </h1>
                        <h3>Admin</h3>
                    </div>

                    <div className='h-admin-menu-options'>

                        <li className={`h-a-l-img ${selected === "home" ? 'selected' : ''}`} onClick={() => btnSwitchSelected("home")}> <img src={homeicon}></img>Home</li>

                        <li onClick={() => bookingChange('book')} className={`h-a-l-img ${selected === 'book' ? 'selected' : ''}`}> <img src={bookicon}></img>Bookings  </li>
                        {booking ? <div className='h-ad-li-ul' >
                            <ul>New Bookings</ul>

                        </div> : <></>}


                        <li onClick={() => roomsChange('room')} className={`h-a-l-img ${selected === 'room' ? 'selected' : ''}`}> <img src={roomicon}></img>Rooms</li>
                        {rooms ? <div className='h-ad-li-ul' >
                            <ul className={`${selected === "addrooms" ? 'selected' : ''}`} onClick={() => btnSwitchSelected('addrooms')}>Add Rooms</ul>
                            <ul className={`${selected === "updateroom" ? 'selected' : ''}`} onClick={() => btnSwitchSelected('updateroom')}>Update Rooms</ul>

                        </div> : <></>}
                        <li onClick={() => customerChange('customer')} className={`h-a-l-img ${selected === 'customer' ? 'selected' : ''}`}> <img src={customericon}></img>Customes</li>
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
                    {page === 'home' ?
                        <div className='h-ad-menu'>
                            {/* Home Page Contents */}
                            <div className='h-ad-menu-topbar'>
                                <h1>Hi ! {hotelAdminProfileData.organiserName} </h1>
                                <h2>Track your Business</h2>
                            </div>

                            <div className='h-ad-menu-2topbar'>

                                <div className='h-ad-menu-charts'>
                                    <div className='h-ad-chart-sub-1'>
                                        <img src={bookicon} style={{ backgroundColor: "#a05ae2" }}></img>
                                        <div className='h-ad-chart-sub'>
                                            <h4>Total Booking</h4>
                                            <p>1234</p>
                                        </div>
                                    </div>
                                    <div className='h-ad-chart-sub-2'>

                                        <ProgressBar className='progressbar'
                                            completed={70}
                                            height='13px'
                                            isLabelVisible={false}
                                            transitionDuration="0.5s"
                                            bgColor="#a05ae2"
                                        />

                                    </div>
                                </div>


                                <div className='h-ad-menu-charts'>
                                    <div className='h-ad-chart-sub-1'>
                                        <img src={roomicon} style={{ backgroundColor: "orange" }}></img>
                                        <div className='h-ad-chart-sub'>
                                            <h4>Rooms Available</h4>
                                            <p>1234</p>
                                        </div>
                                    </div>
                                    <div className='h-ad-chart-sub-2'>

                                        <ProgressBar className='progressbar'
                                            completed={40}
                                            height='13px'
                                            isLabelVisible={false}
                                            transitionDuration="0.5s"
                                            bgColor="orange"
                                        />

                                    </div>



                                </div>

                                <div className='h-ad-menu-charts'>
                                    <div className='h-ad-chart-sub-1'>
                                        <img src={customericon} style={{ backgroundColor: "#129e00" }}></img>
                                        <div className='h-ad-chart-sub'>
                                            <h4>New Customers</h4>
                                            <p>1234</p>
                                        </div>
                                    </div>
                                    <div className='h-ad-chart-sub-2'>

                                        <ProgressBar className='progressbar'
                                            completed={40}
                                            height='13px'
                                            isLabelVisible={false}
                                            transitionDuration="0.5s"
                                            bgColor="#129e00"
                                        />

                                    </div>
                                </div>

                                <div className='h-ad-menu-charts'>
                                    <div className='h-ad-chart-sub-1'>
                                        <img src={revenewicon}></img>
                                        <div className='h-ad-chart-sub'>
                                            <h4>Total Revenue</h4>
                                            <p>$ 104</p>
                                        </div>
                                    </div>
                                    <div className='h-ad-chart-sub-2'>

                                        <ProgressBar className='progressbar'
                                            completed={90}
                                            height='13px'
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
                                            labels: ["single", "Double", "A/c", "non-A/c", "Deluxe"],

                                            datasets: [{
                                                label: "Rooms",
                                                data: [12, 23, 45, 53, 77],
                                            }]
                                        }}
                                    />
                                </div>

                            </div>

                            <div className='h-ad-menu-4topbar'></div>
                        </div> :
                        page === "addrooms" ?
                            <div className='h-ad-add-rooms'>
                                <HotelAddRooms />
                            </div> : page === "updateroom" ?
                                <div className='h-ad-update-rooms'>

                                    <UpdateRoom />
                                </div> : page === 'room' ?
                                    <div>  <AllRooms />  </div> : page === 'book' ?
                                        <div> <AllBooking /></div> :


                                        <div></div>
                    }



                </div>
            </div>

        </div>
    )
}

export default HotelAdminMenu