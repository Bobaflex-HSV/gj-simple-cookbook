import React, { useState } from "react";
import "../categorycard.scss";
import "/src/styles.css";

export default ({ category }) => {
  return (
    <div>
      <div>{category}</div>
      <div class="card">
        <div class="header" />
        <a href="#" className="btn">
          {category}
        </a>
      </div>
    </div>
  );
};
