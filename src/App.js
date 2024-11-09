

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
import PaymentComponent from './components/PaymentComponent';



function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>



          <Route path='/userlogin' element={<UserLogin />} />
          <Route path='/' element={<UserRegister />} />
          <Route path='/hotelregister' element={<HotelRegister />} />
          <Route path='/hoteladminregister' element={<HotelAdminRegister />} />
          <Route path='/hotelladminogin' element={<HotelAdminsLogin />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/admindashboard' element={<AdminDashBoard />} />
          <Route path='/pay' element={<PaymentComponent/>}/>

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
