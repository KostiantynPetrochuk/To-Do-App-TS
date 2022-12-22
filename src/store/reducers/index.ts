import { tasksReducer } from "./tasksReducer";
import { filtersReducer } from "./filtersReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer
});