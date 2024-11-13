import React, { useState } from 'react'
import './AdminCss/AdminMenuPage.css';
import AdminDashBoard from './AdminDashBoard';
import AdminMenuHomeComp from './AdminMenuHomeComp';


function AdminMenuPage() {
    const [btnstate,setBtnstate]=useState(1);

    //home page
    function homePageNav(){
        setBtnstate(1);
    }

    //DashBoard
    function dashBoardPageNav(){
        setBtnstate(2);
    }
  return (
    <div className='a-menu-bg'>
       
        <section className='app-drawer-con'>
       
            <li onClick={homePageNav}>Home</li>
            <li onClick={dashBoardPageNav}>Dashboard</li>
        </section>
        <div className='a-nav-con'>
             <div className='a-nav-inp'>
                <input placeholder='Search'></input>
                <img src='images/search.png'></img>
             </div>
             <div className='a-menu-dashboard'>
                {btnstate === 2 ?  <AdminDashBoard/> : <AdminMenuHomeComp/>}
       
        </div>
        </div>
       
    </div>
  )
}

export default AdminMenuPage