import React, { useState } from "react";
import "../categorycard.scss";
import "/src/styles.css";

export default ({ category }) => {
  return (
    <div>
      <div class="card">
        <div class="header" />
        <a href="#" class="btn">
          {category}
        </a>
      </div>
    </div>
  );
};
