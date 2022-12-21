import { createAction } from "@reduxjs/toolkit";
//add nanoid for task.id
import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";

export type AddTaskActionType = {
  type: typeof ADD_TASK;
  body: string;
};

type AddTaskType = (body: string) => AddTaskActionType;

export type ToggleStatusActionType = {
  type: typeof TOGGLE_STATUS;
  id: number;
};

type ToggleStatusType = (id: number) => ToggleStatusActionType;

export type DeleteTaskActionType = {
  type: typeof DELETE_TASK;
  id: number;
};

type DeleteTaskType = (id: number) => DeleteTaskActionType;

// export const addTask: AddTaskType = (body) => ({
// 	type: ADD_TASK,
// 	body
// });

export const addTask = createAction(ADD_TASK, (body) => ({
  payload: {
    id: Date.now(),
    body,
    status: false,
  },
}));

// export const toggleStatus: ToggleStatusType = (id) => ({
//   type: TOGGLE_STATUS,
//   id,
// });

export const toggleStatus = createAction(TOGGLE_STATUS, (id) => ({
  payload: {
    id,
  },
}));

// export const deleteTask: DeleteTaskType = (id) => ({
//   type: DELETE_TASK,
//   id,
// });

export const deleteTask = createAction(DELETE_TASK, (id) => ({
  payload: {
    id,
  },
}));
