import React, { useState } from "react";
import CuisineCard from "./CuisineCard";
import "./styles.css";

export default () => {
  return (
    <div>
      <h1> PLACEHOLDER FOR CUSINE(AREA/COUNTRY) </h1>
      <div>
        {/* iterate over cuisine(area) here*/}
        <CuisineCard />
      </div>
    </div>
  );
};
