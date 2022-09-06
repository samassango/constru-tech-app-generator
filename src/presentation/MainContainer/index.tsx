import React, { FC } from "react";
import "../styles/main.css";
interface IMainProps {
  leftPanel: JSX.Element;
  rightPanel: JSX.Element;
}
const MainContainer: FC<IMainProps> = ({ leftPanel, rightPanel }) => {
  return (
    <div className="main-container">
      <div className="drag-panel-left panel-left">{leftPanel}</div>
      <div className="drag-panel-right panel-right">{rightPanel}</div>
    </div>
  );
};
export default MainContainer;
