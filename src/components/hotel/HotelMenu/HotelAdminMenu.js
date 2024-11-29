import React, { useEffect, useState } from 'react';
import './HoteladminCss/HotelAdminMenu.css';
import ProgressBar from '@ramonak/react-progress-bar';
import { Doughnut, Line } from 'react-chartjs-2';
import HotelAddRooms from './Rooms/HotelAddRooms';
import AllRooms from './Rooms/AllRooms';
import AllBooking from './Booking/AllBooking';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import homeicon from '../../../Assets/images/home.png';
import bookicon from '../../../Assets/images/booking.png';
import roomicon from '../../../Assets/images/rooms.png';
import customericon from '../../../Assets/images/customer.png';
import revenewicon from '../../../Assets/images/revenew.png';

function HotelAdminMenu() {
    const { id } = useParams();
    const [selected, setSelected] = useState('home');
    const [booking, setBooking] = useState(false);
    const [rooms, setRooms] = useState(false);
    const [customer, setCustomer] = useState(false);
    const [hotelAdminProfileData, setHotelAdminProfileData] = useState(null);

    // Handle menu selection
    function btnSwitchSelected(menu) {
        setSelected(menu);
    }

    // Handle sub-menu toggles for Booking, Rooms, and Customers
    function toggleBooking() {
        setBooking(prev => !prev);
        setSelected('book');
    }

    function toggleRooms() {
        setRooms(prev => !prev);
        setSelected('room');
    }

    function toggleCustomer() {
        setCustomer(prev => !prev);
        setSelected('customer');
    }

    // Fetch hotel admin profile data
    useEffect(() => {
        axios.get(`http://localhost:8081/hoteladmin/viewbyid/${id}`)
            .then((res) => {
                setHotelAdminProfileData(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, [id]);

    useEffect(() => {
        if (hotelAdminProfileData) {
            console.log("Profile Image Path:", hotelAdminProfileData.profile);
        }
    }, [hotelAdminProfileData]);

    if (hotelAdminProfileData === null) {
        return <div className='ad-menu-spinner'>Loading...</div>;
    }

    const profileImageUrl = hotelAdminProfileData.profile
        ? `http://localhost:8081${hotelAdminProfileData.profile}`
        : customericon; // Fallback to a default image

    return (
        <div className='h-adminmenu'>
            <div className='h-admin-menu-container'>
                <div className='h-a-m-appdrawer'>
                    <h2>Hotel.com</h2>

                    <div className='h-a-profile'>
                        {hotelAdminProfileData ? (
                            hotelAdminProfileData.profile ? (
                                <img src={`http://localhost:8081${hotelAdminProfileData.profile}`} alt="Admin Profile" />
                            ) : (
                                <img src={customericon} alt="Default Profile" />
                            )
                        ) : (
                            <div>Loading...</div>
                        )}
                        <h1>{hotelAdminProfileData ? hotelAdminProfileData.organiserName : "Loading..."}</h1>
                        <h3>Admin</h3>
                    </div>

                    <div className='h-admin-menu-options'>
                        <li className={`h-a-l-img ${selected === "home" ? 'selected' : ''}`} onClick={() => btnSwitchSelected("home")}> <img src={homeicon} alt="Home Icon" />Home</li>
                        <li className={`h-a-l-img ${selected === 'book' ? 'selected' : ''}`} onClick={toggleBooking}> <img src={bookicon} alt="Bookings Icon" />Bookings</li>
                        {booking && <div className='h-ad-li-ul'>
                            <ul>New Bookings</ul>
                        </div>}

                        <li className={`h-a-l-img ${selected === 'room' ? 'selected' : ''}`} onClick={toggleRooms}> <img src={roomicon} alt="Rooms Icon" />Rooms</li>
                        {rooms && <div className='h-ad-li-ul'>
                            <ul onClick={() => btnSwitchSelected('addrooms')} className={`${selected === "addrooms" ? 'selected' : ''}`}>Add Rooms</ul>
                           
                        </div>}

                        <li className={`h-a-l-img ${selected === 'customer' ? 'selected' : ''}`} onClick={toggleCustomer}> <img src={customericon} alt="Customer Icon" />Customers</li>
                        {customer && <div className='h-ad-li-ul'>
                            <ul>New Customer</ul>
                            <ul>All Customers</ul>
                            <ul>Reviews</ul>
                        </div>}
                    </div>
                </div>

                <div className='h-a-m-navbar'>
                    <button className='btn btn-outline-danger'>Logout</button>
                </div>

                <div className="h-ad-men-home-container">
                    {pageContent()}
                </div>
            </div>
        </div>
    );

    function pageContent() {
        switch (selected) {
            case 'home':
                return (
                    <div className='h-ad-menu'>
                        <div className='h-ad-menu-topbar'>
                            <h1>Hi! {hotelAdminProfileData.organiserName}</h1>
                            <h2>Track your Business</h2>
                        </div>

                        <div className='h-ad-menu-2topbar'>
                            <ChartCard icon={bookicon} color="#a05ae2" label="Total Booking" value="1234" progress={70} />
                            <ChartCard icon={roomicon} color="orange" label="Rooms Available" value="1234" progress={40} />
                            <ChartCard icon={customericon} color="#129e00" label="New Customers" value="1234" progress={40} />
                            <ChartCard icon={revenewicon} color="#3ac7d7" label="Total Revenue" value="$104" progress={90} />
                        </div>

                        <div className='h-ad-menu-3topbar'>
                            <div className='h-ad-menu-graph'>
                                <LineChart />
                            </div>

                            <div className='h-ad-menu-flowchart'>
                                <DoughnutChart />
                            </div>
                        </div>
                    </div>
                );

            case 'addrooms':
                return <HotelAddRooms />;
            case 'room':
                return <AllRooms />;
            case 'book':
                return <AllBooking />;
            default:
                return null;
        }
    }

    function ChartCard({ icon, color, label, value, progress }) {
        return (
            <div className='h-ad-menu-charts'>
                <div className='h-ad-chart-sub-1'>
                    <img src={icon} style={{ backgroundColor: color }} alt={label} />
                    <div className='h-ad-chart-sub'>
                        <h4>{label}</h4>
                        <p>{value}</p>
                    </div>
                </div>
                <div className='h-ad-chart-sub-2'>
                    <ProgressBar className='progressbar' completed={22} height='13px' isLabelVisible={false} transitionDuration="0.5s" bgColor={color} />
                </div>
            </div>
        );
    }

    function LineChart() {
        return (
            <Line
                data={{
                    labels: ["Week-1", "Week-2", "Week-3"],
                    datasets: [{
                        label: "New Customer",
                        data: [23, 3, 4],
                        borderColor: "rgba(75,192,192,1)",
                        backgroundColor: "rgba(75,192,192,0.2)",
                        tension: 0.3,
                    }],
                }}
            />
        );
    }

    function DoughnutChart() {
        return (
            <Doughnut
                data={{
                    labels: ["Single", "Double", "A/c", "Non-A/c", "Deluxe"],
                    datasets: [{
                        label: "Rooms",
                        data: [12, 23, 45, 53, 77],
                    }]
                }}
            />
        );
    }
}

export default HotelAdminMenu;
