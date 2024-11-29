import React from 'react';

import './usercss/BookingPage.css';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

const BookingPage = () => {
  return (
    <div className="booking-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Bookme.com</div>
        <nav>
          <a href="#">List your property</a>
          <a href="#">Support</a>
          <a href="#">Trips</a>
        <Link to={'/userlogin'}> <a href="">Sign in</a></Link> 
        </nav>
        <button className="btn-get-app">Get the app</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Explore your place to stay</h1>
        <div className="search-bar">
          <input type="text" placeholder="Stavanger, Norway" />
          <input type="date" placeholder="Check in" />
          <input type="date" placeholder="Checkout" />
          <select>
            <option>Guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
          </select>
          <button>Checkout</button>
        </div>
        <p className="hero-description">
          We provide a variety of the best lodging accommodations for those of you who need it.
        </p>
      </section>

  
      <section className="hotels">
<div>
{/* <h2>Hotels in your area</h2>
        <div className="hotel-list">
          <div className="hotel-card">
            <img src="https://via.placeholder.com/150" alt="Villa" />
            <div className="hotel-info">
              <h3>Villa, Kemah Tinggi</h3>
              <p>2 bedrooms, 2 bath</p>
              <p className="price">$990</p>
            </div>
          </div>
          <div className="hotel-card">
            <img src="https://via.placeholder.com/150" alt="Villa" />
            <div className="hotel-info">
              <h3>Villa, Kuta Premiere</h3>
              <p>5 bedrooms, 3 bath</p>
              <p className="price">$920</p>
            </div>
          </div>
         Add more hotel cards as needed 
        </div> */}
</div>
<div className='productlist-container'>
<ProductList/>
</div>
       
        
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h4>See it all</h4>
          <p>From local hotels to global brands, discover millions of rooms all around the world.</p>
        </div>
        <div className="footer-section">
          <h4>Compare right here</h4>
          <p>No need to search anywhere else. The biggest names in travel are right here.</p>
        </div>
        <div className="footer-section">
          <h4>Get exclusive rates</h4>
          <p>We’ve special deals with the world’s leading hotels and we share these savings with you.</p>
        </div>
        <div className="footer-section">
        <Link to={'/admin'}><h4 className='btn btn-primary'>AdminLogin</h4></Link> 
       <Link to={'/hotelladminogin'}>  <p className='btn btn-danger'>HotelOrganizer Login</p></Link> 
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
