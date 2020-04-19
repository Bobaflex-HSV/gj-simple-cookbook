import React, { useState, useEffect } from "react";
import RandomRecipeCard from "./RandomRecipeCard";
import "/src/styles.css";

export default () => {
  const [data, setData] = useState("");

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(result => setData(result.meals))
      .catch(error => console.log("error"));
  };


  useEffect(() => {
    fetchData();
    setInterval(
      fetchData, 4000); 
     }, []);

  return (
    <div>
      <div>
    </div>
      {data &&
        data.map((element, index) => (
          <RandomRecipeCard
            key={index}
            imageURL={element.strCategoryThumb}
            category={element.strMeal}
            name={element.strCategory}
            myOnclick = {fetchData}
          />
        ))}
    </div>

  );
};
