import React, { useState } from "react";
import "../categorycard.scss";
import "/src/styles.css";

export default ({ category, imageURL, catDescription }) => {
  return (
    <div>
      {/* <img src={imageURL} alt={catDescription} /> */}

      <div class="card">
        <div
          class="header"
          style={{
            backgroundImage: `url(${imageURL})`
          }}
        />
        <div class="text">
          <h1 class="food">{category}</h1>
          <p className="info">{catDescription}</p>
        </div>
        <a href="#" class="btn">
          Cook {category}
        </a>
      </div>
    </div>
  );
};
