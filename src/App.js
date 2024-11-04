import logo from './logo.svg';
import './App.css';
import HotelRegister from './components/Hotel/HotelRegister';
import UserRegister from './components/User/UserRegister';
import  { Route, Routes,BrowserRouter } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';

function App() {
  return (
    <BrowserRouter>
   <div>
    <Routes>
      <Route path='/' element={<UserLogin/>}/>
    </Routes>

   </div>
   </BrowserRouter>
  
  );
}

export default App;
