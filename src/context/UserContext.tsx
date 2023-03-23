import React, { useReducer } from "react";
import { IUser } from "../models/response/User";
import { IUserState, userReducer } from "../reducers/userReducer";

const initialState = {
  isLoading: false,
};
const UserContext = React.createContext<{
  state: IUserState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
