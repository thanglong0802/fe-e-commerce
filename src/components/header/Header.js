import React from "react";
import "./css/style.css";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1>
            <a href="#home">
              <img
                className="imglogo"
                src={`${process.env.PUBLIC_URL}/assets/logo.jpg`}
                alt="logo"
              />
            </a>
          </h1>
        </div>
        <div className="search">
          <form action="#" method="get" className="search-form">
            <input
              type="search"
              className="search-input"
              placeholder="Tìm kiếm..."
            />
            <button type="submit" className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="cart">
          <a href="#cart">Giỏ hàng</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
