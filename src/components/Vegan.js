import React, { useState, useEffect } from "react";
import VeganCard from "./VeganCard";
import "/src/styles.css";

export default () => {
  const [data, setData] = useState();

  const idApi = "cb504780";
  const Keys = "4691f222b5d4987a9e07ab08e4f52ebe";
  const recipeApi = `https://api.edamam.com/search?q=vegan&app_id=${idApi}&app_key=${Keys}`;

  const fetchData = () => {
    fetch(recipeApi)
      .then(res => res.json())
      .then(result => setData(result.hits))
      .catch(error => console.log("error"));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((element, index) => (
          <VeganCard key={index} title={element.recipe.label} />
        ))}
    </div>
  );
};
