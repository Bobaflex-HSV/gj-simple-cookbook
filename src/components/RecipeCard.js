import React, { useState } from "react";
import "../recipecard.scss";
import "/src/styles.css";

export default () => {
  return (
    <div>
      <div class="card">
        <div class="header" />
        <div class="text">
          <h1 class="food">Chinese Noodles</h1>
          <i class="fa fa-globe"> Chinese</i>
          <i class="fa fa-lemon-o"> Vegetables</i>

          <p class="info">Maybe some text...or maybe not</p>
        </div>
        <a href="#" class="btn">
          Let's Cook!
        </a>
      </div>
    </div>
  );
};
