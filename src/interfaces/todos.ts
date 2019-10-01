import { ActionTypes } from "../actions";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchTodosSuccessAction {
  type: ActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: number;
}

export interface StoreState {
  todos: Todo[];
}
