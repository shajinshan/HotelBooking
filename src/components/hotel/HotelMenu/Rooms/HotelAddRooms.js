import React, { useState } from 'react';
import './roomscss/HotelAddRooms.css';
import axios from 'axios';

function HotelAddRooms({ adminId }) {

    const [savebtn,setSavebtn]=useState(false);

    const hotelAdminId = parseInt(adminId || localStorage.getItem('hotelAdminId'));

    const [data, setData] = useState({
        roomNumber: '',
        roomPrice:'',
        floor: '',
        roomStatus: '',
        type: '',
        guestLimit: '',
        description: '',
        facilities: []
    });

    const [imgs, setImgs] = useState([]);

    const handleFileChange = (event, index) => {
        const files = [...imgs]; // Create a copy of the current state
        files[index] = event.target.files[0]; // Update the file at the corresponding index
        setImgs(files); // Update the state
        console.log(imgs);

    };


    function onValueRead(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log(data);
        console.log(hotelAdminId);



    }

    function onFacilityChange(e) {
        const { checked, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            facilities: checked
                ? [...prevState.facilities, value]
                : prevState.facilities.filter((facility) => facility !== value)
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        // Append textual data to formData (if needed)
        for (const key in data) {
            formData.append(key, data[key]);
        }

        // Append image files to formData under the 'images' key
        imgs.forEach((img, index) => {
            if (img) {
                formData.append('images', img); // All images are appended under 'images'
            }
        });

        axios.post(`http://localhost:8081/rooms/add/${hotelAdminId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                
                alert('registerd')
            })
            .catch((err) => {
                if (err.response) {
                    console.log("Error Status:", err.response.status);
                    console.log("Error Data:", err.response.data);
                    alert(err.response.data.message)
                } else {
                    console.log("Error:", err.message);
                }
            });


    }

    return (
        <div>
            <div className='h-ad-m-roomadd-container'>
            {savebtn ? <div>

            </div> :
            
            <div>
                <h1>Add Rooms</h1>

<div className='h-ad-addroom-form'>
    <form onSubmit={handleSubmit}>
        {/* Line 1 */}
        <div className='line1 row'>
            <input
                type='number'
                className='col form-control'
                placeholder='Room Number'
                name='roomPrice'
                onChange={onValueRead}
                value={data.roomNumber}
            />
            <input
                type='number'
                className='col form-control'
                placeholder='PRICE'
                name='price'
                onChange={onValueRead}
                value={data.roomNumber}
            />
            <input
                type='text'
                className='col form-control'
                placeholder='Floor'
                name='floor'
                onChange={onValueRead}
                value={data.floor}
            />
            <select
                className='col form-control'
                name='roomStatus'
                onChange={onValueRead}
                value={data.roomStatus}
            >
                <option value=''>Room Status</option>
                <option value='Available'>Available</option>
                <option value='maintenance'>Maintenance</option>
            </select>
            <select
                className='col form-control'
                name='type'
                onChange={onValueRead}
                value={data.type}
            >
                <option value=''>Select Bed Type</option>
                <option value='SingleBed'>Single</option>
                <option value='DoubleBed'>Double</option>
            </select>
        </div>

        {/* Line 2 */}
        <div className='line2 row'>
            <select
                className='col form-control room-category'
                name='category'
                onChange={onValueRead}
            >
                <option value=''>Room Category</option>
                <option value='Ac/room'>A/c Room</option>
                <option value='non-Ac/room'>Non-A/c Room</option>
                <option value='Deluxe Room'>Deluxe</option>
            </select>
            <input
                type='number'
                className='col form-control'
                placeholder='Total Guest Limit'
                name='guestLimit'
                onChange={onValueRead}
                value={data.guestLimit}
            />
        </div>

        {/* Line 3 */}
        <div className='line3 row'>
            <textarea
                className='col form-control'
                placeholder='Write About Hotel Room'
                name='description'
                onChange={onValueRead}
                value={data.description}
            />
        </div>

        {/* Facilities */}
        <div className='line4 row'>
            <div className='h-addroom-facilities row'>
                <h1>Facilities</h1>
                <div className='h-addroom-fac-input'>
                    {[
                        "AirConditioning", "Wifi", "Gym", "Parking", "Park", "Breakfast",
                        "Lunch", "Dinner", "Iron", "LAN", "Heater", "Swimming Pool",
                        "Smoke Detector", "Massage", "Spa", "Lounge", "Power Backup",
                        "Dining Area", "Fire Extinguishers", "Doctor on Call", "Wheelchair",
                        "Luggage Assistance", "Conference Room"
                    ].map((facility) => (
                        <label className="col" key={facility}>
                            {facility}
                            <input
                                type="checkbox"
                                value={facility}
                                onChange={onFacilityChange}
                            />
                        </label>
                    ))}
                </div>
            </div>
        </div>
        

        {/* File Uploads */}
        <div className="line5">
            {[...Array(4)].map((_, index) => (
                <input
                    key={index}
                    type="file"
                    onChange={(event) => handleFileChange(event, index)}
                />
            ))}


        </div>

        {/* Submit Button */}
        <div className='button-save'>
            <button className='btn btn-info' type='submit'>
                Save
            </button>
        </div>
    </form>
</div>
                 </div>}
                
            </div>
        </div>
    );
}

export default HotelAddRooms;