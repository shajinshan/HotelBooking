import React from 'react';
import './roomscss/CardComponent.css'
import { Link } from 'react-router-dom';
function CardComponent() {
  return (
<div className="col-12 col-sm-6 col-md-4 col-lg-3">


<Link to={'/viewroom'} >
<div class="card" style={{width: "18rem"}}>
  <img src="https://wallscapeinc.com/wp-content/uploads/2017/04/Hotel-room-wallpaper.jpg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</Link>
    </div>
  )
}

export default CardComponent