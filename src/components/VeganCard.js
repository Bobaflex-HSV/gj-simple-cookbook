import React from "react";
import "/src/styles.css";


export default ({title, category}) => {
  return (
    <div>
      <div>
        {category}
        {title}
      </div>
    </div>
  );
};