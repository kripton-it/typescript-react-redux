import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { Todo, FetchTodosSuccessAction, DeleteTodoAction } from "../interfaces";

const url = "https://jsonplaceholder.typicode.com/todos";

// используется thunk
export const fetchTodos = () => async (dispatch: Dispatch): Promise<void> => {
  const response = await axios.get<Todo[]>(url);

  dispatch<FetchTodosSuccessAction>({
    type: ActionTypes.FETCH_TODOS_SUCCESS,
    payload: response.data
  });
};

// не используется thunk
export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionTypes.DELETE_TODO,
  payload: id
});
