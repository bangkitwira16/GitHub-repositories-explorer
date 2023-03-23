import { IUser } from "../models/response/User";

export interface IUserState {
  data?: IUser["items"];
  isLoading: boolean;
  error?: string;
}

export type Action =
  | { type: "request" }
  | { type: "success"; results: IUser["items"] }
  | { type: "failure"; error: string };

export const userReducer = (state: IUserState, action: Action): IUserState => {
  switch (action.type) {
    case "request":
      return { isLoading: true };
    case "success":
      return { isLoading: false, data: action.results };
    case "failure":
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
}
