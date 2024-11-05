
import UserRegister from './components/User/UserRegister';
import  { Route, Routes,BrowserRouter } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';
import HotelRegister from './components/hotel/HotelRegister';
import HotelAdminRegister from './components/hotel/HotelAdminRegister';

function App() {
  return (
    <BrowserRouter>
   <div>
    <Routes>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/' element={<UserRegister/>}/>
      <Route path='/hotelregister' element={<HotelRegister/>}/>
      <Route path='hoteladminregister' element={<HotelAdminRegister/>}/>
    </Routes>

   </div>
   </BrowserRouter>
  
  );
}

export default App;
