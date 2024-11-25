import React, { useState } from 'react';
import './roomscss/HotelAddRooms.css';

function HotelAddRooms() {
    const [data, setData] = useState({ 
        roomNumber: '', 
        floor: '', 
        roomStatus: '', 
        type: '', 
        guestLimit: '', 
        description: '', 
        facilities: [] 
    });

    function onValueRead(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log(data);
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
        console.log("Form Data:", data);
        // Handle form submission logic here (e.g., send data to backend)
    }

    return (
        <div>
            <div className='h-ad-m-roomadd-container'>
                <h1>Add Rooms</h1>

                <div className='h-ad-addroom-form'>
                    <form onSubmit={handleSubmit}>
                        {/* Line 1 */}
                        <div className='line1 row'>
                            <input 
                                type='number' 
                                className='col form-control'
                                placeholder='Room Number' 
                                name='roomNumber'
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
                                <option value='available'>Available</option>
                                <option value='maintenance'>Maintenance</option>
                            </select>
                            <select 
                                className='col form-control'
                                name='type'
                                onChange={onValueRead}
                                value={data.type}
                            >
                                <option value=''>Select Bed Type</option>
                                <option value='singlebed'>Single</option>
                                <option value='doublebed'>Double</option>
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
                                <option value='acroom'>A/c Room</option>
                                <option value='nonacroom'>Non-A/c Room</option>
                                <option value='deluxeroom'>Deluxe</option>
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
                        <div className='line5'>
                            {[...Array(4)].map((_, index) => (
                                <input key={index} type='file' />
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
            </div>
        </div>
    );
}

export default HotelAddRooms;