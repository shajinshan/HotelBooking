import React, { useState } from 'react'
import './hotelcss/HotelRegister.css'
function HotelRegister() {

    const [page, setPage] = useState(1);

  

    function onForPageScroll() {
        setPage(prevPage => prevPage + 1);
        console.log(page);

    }
    function onBackPageScroll() {
        setPage(prevPage => prevPage - 1);
        console.log(page);

    }
  
    return (
        <div className='hotel-main-bg'>
            <div className='hotel-reg-container'>
                <h1>Welcome</h1>
                <div className='reg-inp'>
                    {page === 1 ? (<div>
                        <input placeholder='Hotel Name' name='hotelname' required />
                        <input placeholder='Owner Name' required />
                        <input placeholder='Phone' required />
                        <h4>Address</h4>
                        <input placeholder='Enter State' required />
                        <input placeholder='District' required />
                        <input placeholder='city' required />
                        <input placeholder='Landmark' required />
                        <input placeholder='Pincode' required />
                        <button onClick={onForPageScroll}>Next</button>
                    </div>) : (<div className='next-page-reg'>
<select>
    <option>Ac</option>
    <option>non/Ac</option>
</select>

<select>
    <option>Wifi</option>
    <option>No wifi</option>
</select>

<select>
    <option>TV</option>
    <option>No</option>
</select>
                        <button onClick={onBackPageScroll}>Back</button>
                    </div>)}

                </div>

            </div>
        </div>
    )
}

export default HotelRegister