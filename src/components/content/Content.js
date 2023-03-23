import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/style.css";

function Content() {
  const [img, setImg] = useState([]);
  useEffect(() => {
    const fetchImg = async () => {
      try {
        let rs = await axios.get(
          "https://jsonplaceholder.typicode.com/albums/1/photos"
        );
        setImg(rs.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImg();
  }, []);
  return (
    <div className="content">
      <div className="products">
        <h3>Sản phầm nổi bật</h3>
        <div className="product-list row row-cols-lg-3 row-cols-md-2 row-cols-1">
          <div className="product-item">
            {img.map((ele) => (
              <div className="product-item-inner card">
                <a href="#product">
                  <img src={ele.url} alt="" />
                </a>
                <h4>
                  <a href="$">iPhone Xs Max 2 Sim</a>
                </h4>
                <p>
                  giá bán: <span>32.990.000đ</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
