import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import "./styles.css";

export default () => {
  return (
    <div>
      <h1> PLACEHOLDER FOR CATEGORIES </h1>
      <p>Will display preview cards of categories.</p>
      <div>
        {/* iterate over catgeories here*/}
        <CategoryCard />
      </div>
    </div>
  );
};
