import React from 'react';
import './../../App.css';

export const Header = () => {
  return (
    <header className="header">

    <div className="header-1">

        <a href="#" className="logo"> <i className="fas fa-book"></i> Heffers </a>

        <form action="" className="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box" />
            <label for="search-box" className="fas fa-search"></label>
        </form>

        <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" >Cart</a>
            <div id="login-btn">Sign In</div>
        </div>

    </div>
  
    <div className="header-2">
        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#featured">featured</a>
            <a href="#arrivals">deal day</a>
            <a href="#reviews">arrivals</a>
            <a href="#blogs">subscribe</a>
        </nav>
    </div>

</header>

  )
}
