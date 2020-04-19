import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import RecipeCardSmall from "./RecipeCardSmall";
import Placeholder from "./Placeholder";
import "/src/styles.css";

export default () => {
  return (
    <div>
      <h2>Add your recipe here...</h2>
      <Placeholder />
    </div>
  );
};
