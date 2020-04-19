import React from "react";
import "../recipecard.scss";
import "/src/styles.css";

export default () => {
  return (
    <div>
      {/* <img src={imageURL} alt={catDescription} /> */}

      <div className="rc-card">
        <div
          className="header"
          style={{
            backgroundImage: `url("http://baconmockup.com/640/360")`,
            backgroundPosition: `center center`
          }}
        />
        <div className="text">
          <h1 className="food">Gathering ingredients...</h1>
          <i className="fa fa-lemon-o">
            {" "}
            Apparently this functionality has not been cooked yet.
          </i>
          <p className="info">
            Bacon ipsum dolor amet ball tip meatball sunt short loin doner elit.
            Ipsum beef in, spare ribs burgdoggen voluptate alcatra short loin.
            Pig ut do short loin voluptate. Et deserunt pork loin pork belly
            magna salami.
          </p>
          <p className="info">
            Mollit nostrud ipsum, ut ut minim ex esse tempor salami ground round
            consequat ullamco. Enim t-bone in esse beef ribs. Tongue officia
            exercitation ex aliquip. Aute voluptate anim bacon culpa ham corned
            beef minim tongue elit esse shoulder.
          </p>
        </div>
        <a href="/" className="btn">
          Back Home
        </a>
      </div>
    </div>
  );
};
