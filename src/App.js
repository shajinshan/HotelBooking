

import './App.css';
import UserRegister from './components/User/UserRegister';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';
import HotelRegister from './components/hotel/HotelRegister';
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



function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>

          {/* landing page */}
          <Route path='/' element={<BookingPage />} />

          {/* user */}
          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/userregister' element={<UserRegister />} />

          {/* hotel */}
          <Route path='/hotelregister' element={<HotelRegister />} />
          <Route path='/hoteladminregister' element={<HotelAdminRegister />} />
          <Route path='/hotelladminogin' element={<HotelAdminsLogin />} />
          <Route path='/hoteladminmenu' element={<HotelAdminMenu/>}/>

          {/* admin */}
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashBoard />} />
          <Route path='/menupage' element={<AdminMenuPage />} />
          <Route path='/homeAdmi' element={<AdminMenuHomeComp />} />


         

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
