import { ActionTypes, Action } from "../actions";
import { Todo } from "../interfaces";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS_SUCCESS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return state.filter((todo: Todo): boolean => todo.id !== action.payload);
    default:
      return state;
  }
};
