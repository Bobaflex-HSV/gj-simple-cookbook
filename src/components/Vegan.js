import React, { useState, useEffect } from "react";
import VeganCard from "./VeganCard";
import "/src/styles.css";
export default () => {
const [data, setData] = useState();

const fetchData = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  .then(res => res.json())
  .then(result => setData(result.meals))
  .catch(error => console.log("error"))
}


useEffect(() => {
  fetchData()
}, [])

const loopedComponents =data && data.map((element, index)=>(
  <VeganCard
    key={index}
    title = {element.strMeal}
    name = {element.idMeal}
  />
))

console.log(loopedComponents);


  return (
      <div>     
        <VeganCard category = {loopedComponents} />
      </div>
  );
};
