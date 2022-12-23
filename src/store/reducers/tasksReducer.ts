import { createReducer } from "@reduxjs/toolkit";

import { TaskType } from "../../types/types";
import { addTask, toggleStatus, deleteTask } from "../actions/tasksActions";
import { ADD_TASK, TOGGLE_STATUS, DELETE_TASK } from "../constants/tasksConst";

const initialState: Array<TaskType> = [];

type TasksReducerActionType = {
  payload: TaskType;
  type: typeof ADD_TASK;
};

type ToggleStatusActionType = {
  payload: { id: string };
  type: typeof TOGGLE_STATUS;
};

type DeleteTaskAactionType = {
  payload: { id: string };
  type: typeof DELETE_TASK;
};

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state: TaskType[], action: TasksReducerActionType) => {
      state.push(action.payload);
    })
    .addCase(
      toggleStatus,
      (state: TaskType[], action: ToggleStatusActionType) => {
        const id: string = action.payload.id;
        const task: TaskType = state.find((task) => task.id === id)!;
        task.isDone = !task.isDone;
      }
    )
    .addCase(deleteTask, (state: TaskType[], action: DeleteTaskAactionType) => {
      const id: string = action.payload.id;
      return state.filter((task) => task.id !== id);
    });
});
