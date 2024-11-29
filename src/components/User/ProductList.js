import React, { useEffect, useState } from "react";
import ListOfAllRooms from "./ListOfAllRooms";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/rooms/all")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []); // Added empty dependency array to avoid infinite loop

  return (
    <div style={{ padding: "20px" }}>
      {products.map((product) => (
        <ListOfAllRooms products={product} key={product.roomId} />
      ))}
    </div>
  );
};

export default ProductList;
