import React from "react";
import "./LoadingTitle.scss";
const LoadingTitle = () => {
  return (
    <div className="wrapper">
      <div className="opposites">
        <div className="opposites bl"></div>
        <div className="opposites tr"></div>
        <div className="opposites br"></div>
        <div className="opposites tl"></div>
      </div>
      <p>Loading ... </p>
    </div>
  );
};

export default LoadingTitle;
