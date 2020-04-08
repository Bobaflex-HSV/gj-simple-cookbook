import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import "./styles.css";

export default function App() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [myRecipes, setRecipes] = useState(null);
  const [recipeExists, setRecipeExists] = useState(false);

  return (
    <div className="App">
      <RecipeList />
    </div>
  );
}
