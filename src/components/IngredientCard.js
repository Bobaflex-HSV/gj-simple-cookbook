import React, { useState } from "react";
import "/src/styles.css";

export default ({category, name}) => {
  return (
    <div>
      <div>
      {category}
{name}
      </div>
    </div>
  );
};