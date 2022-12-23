import { createAction, nanoid } from "@reduxjs/toolkit";
import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";

export const addTask = createAction(ADD_TASK, (body: string) => ({
  payload: {
    id: nanoid(),
    body,
    isDone: false,
  },
}));

export const toggleStatus = createAction(TOGGLE_STATUS, (id: string) => ({
  payload: {
    id,
  },
}));

export const deleteTask = createAction(DELETE_TASK, (id: string) => ({
  payload: {
    id,
  },
}));
