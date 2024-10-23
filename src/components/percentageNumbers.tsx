import React from "react";
import downicon from "/images/icon-down.svg";
import upicon from "/images/icon-up.svg";

const percentageNumbers = () => {
  return (
    <div>
      <div className="overview-row">
        <div className="overview-number">87</div>
        <div className="textColorClass">
          <img src={upicon}></img>
          <p>3%</p>
        </div>
      </div>
    </div>
  );
};

export default percentageNumbers;
