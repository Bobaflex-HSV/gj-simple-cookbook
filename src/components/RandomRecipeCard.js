import React from "react";
import "../categorycard.scss";
import "/src/styles.css";

export default ({ category, myOnclick, imageURL, catDescription }) => {
  return (
    <div>
      {/* <img src={imageURL} alt={catDescription} /> */}

      <div className="cc-card">
        <div
          className="header"
          style={{
            backgroundImage: `url(${imageURL})`
          }}
        />
        <div className="text">
          <h1 className="food">{category}</h1>
          <p className="info">{catDescription}</p>
        </div>
        <a href="#" className="btn">
           {category}
        </a>
<div>
        <button className = "btn btn-primary" type="reset" onClick = {myOnclick}>REFETCH</button>
</div>
      </div>
    </div>
  );
};
