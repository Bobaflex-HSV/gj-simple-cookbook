import React, { useState } from "react";
import "../recipecardsmall.scss";
import "/src/styles.css";

export default () => {
  return (
    <div>
      <div className="rcs-card">
        <div className="header" />
        <div className="text">
          <h1 className="food">Chinese Noodles</h1>
          <i className="fa fa-globe"> Chinese</i>
          <i className="fa fa-lemon-o"> Vegetables</i>
        </div>
        <a href="#" className="btn">
          Lemme cook dat!
        </a>
      </div>
    </div>
  );
};
