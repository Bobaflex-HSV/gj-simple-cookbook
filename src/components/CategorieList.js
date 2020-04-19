import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import "/src/styles.css";

export default () => {
  const [data, setData] = useState("");

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(result => setData(result.categories))
      .catch(error => console.log("error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((element, index) => (
          <CategoryCard
            key={index}
            category={element.strCategory}
            imageURL={element.strCategoryThumb}
            catDescription={element.strCategoryDescription}
          />
        ))}
    </div>
  );
};
