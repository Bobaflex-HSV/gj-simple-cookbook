import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
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
    setInterval(fetchData, 2000);
  }, []);

  return (
    <div>
      {data &&
        data.map((element, index) => (
          <CategoryCard
            key={index}
            imageURL={element.strCategoryThumb}
            category={element.strMeal}
            name={element.strCategory}
          />
        ))}
    </div>
  );
};
