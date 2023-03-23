
import { IUserRepository } from "../models/response/UserRepository";

export interface IRepoState {
  repos?: IUserRepository[];
  isLoading: boolean;
  error?: string;
}

export type Action =
  | { type: "request" }
  | { type: "success"; results: IUserRepository[] }
  | { type: "failure"; error: string };

export const repoReducer = (state: IRepoState, action: Action): IRepoState => {
  switch (action.type) {
    case "request":
      return { isLoading: true };
    case "success":
      return { isLoading: false, repos: action.results };
    case "failure":
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
}
