import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="bg-light border-bottom py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo Section */}
          <div className="d-flex align-items-center">
            <h1 className="m-0 fs-4">Library Management App</h1>
          </div>

          {/* Navigation Menu */}
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a href="#home" className="nav-link text-dark">Home</a>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link text-dark">Categories</a>
              </li>
              <li className="nav-item">
                <a href="#new-books" className="nav-link text-dark">New Arrivals</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link text-dark">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link text-dark">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="d-flex">
            <input
              type="text"
              placeholder="Search books or novels..."
              className="form-control me-2"
              style={{ maxWidth: '200px' }}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </header>
   
    );
  }
}

export default Header;