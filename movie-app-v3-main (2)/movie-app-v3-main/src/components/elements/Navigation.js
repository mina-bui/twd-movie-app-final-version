// Navigation - Back button that returns back to home

import React from 'react';
import { Link } from 'react-router-dom';

// returns back to home
const Navigation = (movie) => {
  return (
    <div className="main-navigation">
      <div className="main-navigation-content">
        <Link to="/" className="nav-back-button">
          <p> &#5176; Back </p>
        </Link>
      </div>
    </div>
  )
}

export default Navigation;