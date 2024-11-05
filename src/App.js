
import './App.css';

import  { Route, Routes,BrowserRouter } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';
import AdminLogin from './components/Admin/AdminLogin';

function App() {
  return (
    <BrowserRouter>
   <div>
    <Routes>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/' element={<AdminLogin/>}/>

      
    </Routes>

   </div>
   </BrowserRouter>
  
  );
}

export default App;
