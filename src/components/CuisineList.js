import React, { useState, useEffect } from "react";
import "/src/styles.css";
import CuisineCard from "./CuisineCard";

export default () => {
  const [data, setData] = useState("");

  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => res.json())
      .then(result => setData(result.meals))
      .catch(error => console.log("Error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((element, index) => (
          <CuisineCard key={index} country={element.strArea} />
        ))}
    </div>
  );
};
