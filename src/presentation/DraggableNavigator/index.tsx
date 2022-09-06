import React, { FC } from "react";
import "../styles/navigator.css";

interface INavigatorProps {
  keyId: string;
  urlRedirect: string;
  displayName: string;
}
interface IListNavigator {
  navId: string;
  navigator: INavigatorProps[];
}
const DraggableNavigator: FC<IListNavigator> = (props) => {
  const { navigator, navId } = props;
  const dragStart = (e: any, id: string) => {
    e.dataTransfer.setData("navId", id);
  };
  return (
    <>
      <ul
        draggable
        onDragStart={(e: any) => dragStart(e, navId)}
        className="navigation"
      >
        {navigator &&
          navigator.map((nav: INavigatorProps) => (
            <li key={nav.keyId}>
              <a href={nav.urlRedirect ? nav.urlRedirect : "#"}>
                {nav.displayName}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};
export default DraggableNavigator;
