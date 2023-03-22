import React from "react";
import "./css/style.css";

function Nav() {
  return (
    <div className="main-menu">
      <div className="container">
        <div className="menu fixtop">
          <div className="nav-first">
            <a href="#category">Danh mục sản phẩm</a>
          </div>
          <ul className="nav-second">
            <li className="menu-item">
              <a href="#sale">Khuyến mãi trong tuần</a>
            </li>
            <li className="menu-item">
              <a href="#newfeed">Bảng tin siêu thị</a>
            </li>
            <li className="menu-item">
              <a href="#health">Chuyên mục sức khỏe</a>
            </li>
            <li className="menu-item">
              <a href="#order">Kiểm tra đơn hàng</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
