import React, { useState, useEffect } from "react";
import "./styles.css";
import CuisineCard from "./CuisineCard";

export default () => {
const [data, setData] = useState("");

const fetchData = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  .then(res => res.json())
  .then(result => setData(result.meals))
  .catch(error => console.log("Error"))
}


useEffect(() => {
  fetchData()
}, [])


const loopedComponents =data && data.map((element, index)=>(
  <CuisineCard
    key={index}
    country = {element.strArea}
  />
))


  return (
      <div>     
        <CuisineCard country = {loopedComponents} />
      </div>
  );
};
