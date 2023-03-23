import React, { useEffect, useState } from "react";
import "./css/style.css";
import axios from "axios";

function Category() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        let rs = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setApi(rs.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);
  console.log(api);
  return (
    <div className="category">
      <ul className="nav-ul">
        {api.map((ele) => (
          <li>{ele.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
