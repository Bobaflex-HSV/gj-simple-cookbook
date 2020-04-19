import React, { useState } from "react";
import "../recipecard.scss";
import "/src/styles.css";

export default () => {
  return (
    <div>
      <div className="card">
        <div className="header" />
        <div className="text">
          <h1 className="food">Chinese Noodles</h1>
          <i className="fa fa-globe"> Chinese</i>
          <i className="fa fa-lemon-o"> Vegetables</i>

          <p className="info">Maybe some text...or maybe not</p>
        </div>
        <a href="#" className="btn">
          Let's Cook!
        </a>
      </div>
    </div>
  );
};
