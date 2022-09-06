import React, { FC, useReducer } from "react";
import MainContainer from "../presentation/MainContainer";
import Header from "../presentation/HeaderContainer";
import Footer from "../presentation/FooterContainer";
import DragHere from "../presentation/DragComponent";
import DropHere from "../presentation/DropComponent";
import { NavigationData } from "../data/data";
export interface INavProps {
  keyId: string;
  urlRedirect: string;
  displayName: string;
}
export interface IAction {
  type: string;
  payload: any;
}
const initialState = {
  navigation: {
    status: false,
    navId: "nav-xxx-ccc-id",
    navigationData: [] as INavProps[]
  },
  updateState: (data: IAction) => {}
};
export const MainContext = React.createContext(initialState);
const Main: FC<any> = () => {
  //const [navState, setNavState] = useState(initialState);
  const [navState, dispatch] = useReducer(
    (state = initialState, action: IAction) => {
      switch (action.type) {
        case "Navigation-Add":
          return {
            ...state,
            navigation: {
              ...state.navigation,
              status: true
            }
          };
        case "Navigation-Remove":
          return {
            ...state,
            navigation: {
              ...state.navigation,
              status: false
            }
          };

        default:
          return state;
      }
    },
    initialState
  );
  return (
    <MainContext.Provider
      value={{
        navigation: { ...navState.navigation, navigationData: NavigationData },
        updateState: (data: IAction) => {
          console.log({ data });
          dispatch(data);
        }
      }}
    >
      <Header />
      <MainContainer leftPanel={<DragHere />} rightPanel={<DropHere />} />
      <Footer />
    </MainContext.Provider>
  );
};

export default Main;
