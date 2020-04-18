import React, { useState, useEffect } from "react";
import IngredientCard from "./IngredientCard";
import "/src/styles.css";

export default () => {
  const [data, setData] = useState("");

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then(res => res.json())
      .then(result => setData(result.meals))
      .catch(error => console.log("error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((element, index) => (
          <IngredientCard key={index} category={element.strIngredient} />
        ))}
    </div>
  );
};
