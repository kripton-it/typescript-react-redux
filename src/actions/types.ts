import { FetchTodosSuccessAction, DeleteTodoAction } from "../interfaces";

export enum ActionTypes {
  FETCH_TODOS_SUCCESS,
  DELETE_TODO
}

export type Action = FetchTodosSuccessAction | DeleteTodoAction;
