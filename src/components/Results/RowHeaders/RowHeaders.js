import React from "react";
import "./RowHeaders.css";

const rowHeaders = () => {
  return (
    <div className="RowHeaders-content__wrapper">
      <div className="RowHeaders-title">POSITION</div>
      <div className="RowHeaders-category">CATEGORY</div>
      <div className="RowHeaders-location">LOCATION</div>
      <div className="RowHeaders-spacer"></div>
    </div>
  );
};

export default rowHeaders;
