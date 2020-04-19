import React, { useState, useEffect } from "react";
import RandomRecipeCard from "./RandomRecipeCard";
import "/src/styles.css";
var myTimer;

function stopTimer() {
  clearInterval(myTimer);
}

export default () => {
  const [data, setData] = useState("");
  const fetchData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(result => setData(result.meals))
      .catch(error => console.log("error"));
  };
  function startTimer() {
    myTimer = setInterval(fetchData, 4000);
  }
  useEffect(() => {
    fetchData();
    myTimer = setInterval(fetchData, 4000);
  }, []);

  return (
    <div>
      <div>
        <button className="btn btn-primary" type="reset" onClick={stopTimer}>
          THAT'S MY RECIPE
        </button>
        <button className="btn btn-primary" type="reset" onClick={startTimer}>
          SUPRISE ME MORE
        </button>
      </div>
      {data &&
        data.map((element, index) => (
          <RandomRecipeCard
            key={index}
            imageURL={element.strCategoryThumb}
            category={element.strMeal}
            name={element.strCategory}
          />
        ))}
    </div>
  );
};
