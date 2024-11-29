

import './App.css';
import UserRegister from './components/User/UserRegister';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';
import HotelAdminRegister from './components/hotel/HotelAdminRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HotelAdminsLogin from './components/hotel/HotelAdminsLogin';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashBoard from './components/Admin/AdminDashBoard';
import BookingPage from './components/User/BookingPage';

import AdminMenuPage from './components/Admin/AdminMenuPage';
import AdminMenuHomeComp from './components/Admin/AdminMenuHomeComp';
import HotelAdminMenu from './components/hotel/HotelMenu/HotelAdminMenu';
import HotelAddRooms from './components/hotel/HotelMenu/Rooms/HotelAddRooms';
import AllBooking from './components/hotel/HotelMenu/Booking/AllBooking';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomView from './components/hotel/HotelMenu/Rooms/RoomView';
import ProductList from './components/User/ProductList';
import { useState } from 'react';
import CardComponent from './components/hotel/HotelMenu/Rooms/CardComponent';






function App() {

  const [adminLoginId,setAdminLoginId]=useState();

  const setAdminId = (adminId) => {
    localStorage.setItem('hotelAdminId', adminId);
    setAdminLoginId(adminId);
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>

          {/* landing page */}
          <Route path='/' element={<BookingPage />} />

          {/* user */}
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/userregister' element={<UserRegister />} />
          <Route path='/allrooms' element={<ProductList/>}/>

          {/* hotel */}
          <Route path='/hoteladminregister' element={<HotelAdminRegister />} />
          <Route path='/hotelladminogin' element={<HotelAdminsLogin setAdminId={setAdminId}/>} />
          <Route path='/hotel/:id' element={<HotelAdminMenu/>}/>
          <Route path='/addroom' element={<HotelAddRooms adminId={adminLoginId} />}/>
          <Route path='/allbooking' element={<AllBooking/>}/>
          <Route path='/viewroom/:roomId' element={<RoomView/>}/>
          <Route path='allRoomList'element={<CardComponent adminId={adminLoginId}/>}/>


          {/* admin */}
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashBoard />} />
          <Route path='/menupage' element={<AdminMenuPage />} />
          <Route path='/homeAdmi' element={<AdminMenuHomeComp />} />


         

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
