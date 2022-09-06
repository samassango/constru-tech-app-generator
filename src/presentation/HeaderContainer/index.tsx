import React, { FC } from "react";
import "../styles/header.css";

const HeaderContainer: FC<any> = () => {
  return (
    <div className="header-container">
      <div className="header-box">
        <h3>Constru Tech App Generator</h3>
      </div>
    </div>
  );
};
export default HeaderContainer;
