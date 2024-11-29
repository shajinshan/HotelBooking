import React from 'react';
import './usercss/ListOfAllRooms.css'; // Custom CSS file

function ListOfAllRooms({ products }) {
  return (
    <div className="room-card container row">
      {/* Image Section */}
      <div className="image-container col">
        <img 
          src={products.imageUrl || 'https://i.pinimg.com/736x/35/06/44/3506442d8c59a3c0c1ab42a75b788cf7.jpg'} 
          alt={`Room ${products.roomId}`} 
          className="room-image"
        />
      </div>

      {/* Details Section */}
      <div className="details-container col">
        <h3 className="room-title">Room {products.roomNumber}</h3>
        <p className="room-description">{products.description}</p>
        <p className="room-status"><strong>Status:</strong> {products.roomStatus}</p>
        <p className="room-floor"><strong>Floor:</strong> {products.floor}</p>
        <p className="guest-limit"><strong>Guest Limit:</strong> {products.guestLimit}</p>
        <p className="facilities"><strong>Facilities:</strong> {products.facilities}</p>
        
        {/* Pricing Section */}
        <div className="pricing-container">
          <span className="price">₹{products.price}</span>
          <span className="original-price">₹{products.originalPrice}</span>
          <span className="discount">({products.discount}% off)</span>
        </div>
        
        {/* Buttons */}
        <div className="action-buttons">
          <button className="view-details-btn">View Details</button>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default ListOfAllRooms;
