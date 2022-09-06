import React, { FC, useContext } from "react";
import { MainContext } from "../../main";
import DraggableNavigator from "../DraggableNavigator";
import "../styles/dragndrop.css";

const DropComponent: FC<any> = () => {
  const { updateState, navigation } = useContext(MainContext);
  const draggingOver = (e: any) => {
    e.preventDefault();
    console.log("dragging over here");
  };
  const onDropHandler = (e: any) => {
    console.log("drop here");
    const transferID = e.dataTransfer.getData("navId");
    updateState({ payload: { navId: transferID }, type: "Navigation-Add" });
  };
  return (
    <div className="drop-container">
      <div
        className="drop-container-box"
        onDragOver={(e) => draggingOver(e)}
        onDrop={(e: any) => onDropHandler(e)}
      >
        <p>Your Drop here </p>
        {navigation.status && (
          <DraggableNavigator
            navigator={navigation.navigationData}
            navId={navigation.navId}
          />
        )}
      </div>
    </div>
  );
};
export default DropComponent;
