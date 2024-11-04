
import UserRegister from './components/User/UserRegister';
import  { Route, Routes,BrowserRouter } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';

function App() {
  return (
    <BrowserRouter>
   <div>
    <Routes>
      <Route path='/userlogin' element={<UserLogin/>}/>
      <Route path='/' element={<UserRegister/>}/>
    </Routes>

   </div>
   </BrowserRouter>
  
  );
}

export default App;
