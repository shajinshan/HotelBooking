import React from 'react'

function UpdateRoom() {
  return (
    <div>
    <div className='h-ad-m-roomadd-container'>
        <h1>Update Rooms</h1>

        <div className='h-ad-addroom-form'>
            <form>
                <div className='line1 row'>
                    <input type='number' className='col form-control' placeholder='Room Number' ></input>
                    <input type='text' className='col form-control' placeholder='Floor'></input>
                    <select className='col form-control'>
                        <option>Room Status</option>
                        <option>Available</option>
                        <option>Maintainance</option>
                    </select>
                    <select className='col form-control'>
                        <option>Select Bed Type</option>
                        <option>Single</option>
                        <option>Double</option>
                    </select>
                </div>

                <div className='line2 row'>

                    <select className='col form-control room-category' >
                        <option>Room Category</option>
                        <option>A/c Room</option>
                        <option>Non-A/c Room</option>
                        <option>Deluxe</option>

                    </select>
                    <input type='number' className='col form-control' placeholder='Total Guest Limit' ></input>

                </div>

                <div className='line3 row'>
                    <textarea className='col form-control' placeholder='Write About Hotel Room'></textarea>


                </div>
                <div className='line4 row'>
                    <div className='h-addroom-facilities row'>

                        <h1>Facilities</h1>

                        <div className='h-addroom-fac-input'>

                            <label className="col">
                                AirConditioning
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Wifi
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Gym
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Parking
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Park
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Breakfast
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Lunch
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Dinner
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Iron
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                LAN
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Heater
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Swiming Pool
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Smoke Detector
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Massage
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Spa
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Lounge
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Power Backup
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Dining Area
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Fire Extinguishers
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Doctor on Call
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Wheelchair
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Luggage Assistance
                                <input type="checkbox" />
                            </label>
                            <label className="col">
                                Conference Room
                                <input type="checkbox" />
                            </label>


                        </div>
                    </div>



                </div>

                <div className='line5'>
                     <input type='file'></input>
                     <input type='file'></input>
                     <input type='file'></input>
                     <input type='file'></input>

                </div>

   <div className='button-save'>
    <button className='btn btn-info'>Update</button>
   </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default UpdateRoom