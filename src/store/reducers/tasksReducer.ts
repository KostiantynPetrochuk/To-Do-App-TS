// import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";
import { TaskType } from "../../types/types";
// import {
//   AddTaskActionType,
//   ToggleStatusActionType,
//   DeleteTaskActionType,
// } from "../actions/tasksActions";
import { addTask, toggleStatus, deleteTask } from "../actions/tasksActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState: Array<TaskType> = [];

// type TasksReducerActionTypes =
//   | AddTaskActionType
//   | ToggleStatusActionType
//   | DeleteTaskActionType;

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(toggleStatus, (state, action) => {
      const id: number = action.payload.id;
      const task: TaskType = state.find((task) => task.id === id)!;
      task.status = !task.status;
    })
    .addCase(deleteTask, (state, action) => {
      const id: number = action.payload.id;
      return state.filter((task) => task.id !== id);
    });
});
