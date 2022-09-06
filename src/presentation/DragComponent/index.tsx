import React, { FC, useContext } from "react";
import { MainContext } from "../../main";
import DraggableNavigator from "../DraggableNavigator";

const DragComponent: FC<any> = (props): JSX.Element => {
  const { navigation } = useContext(MainContext);
  return (
    <div>
      <p>Your Drag here </p>
      <DraggableNavigator
        navigator={navigation.navigationData}
        navId={navigation.navId}
      />
    </div>
  );
};
export default DragComponent;
