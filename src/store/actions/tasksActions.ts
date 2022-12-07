import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";

export type AddTaskActionType = {
	type: typeof ADD_TASK;
	body: string;
}

type AddTaskType = (body: string) => AddTaskActionType;

export type ToggleStatusActionType = {
	type: typeof TOGGLE_STATUS;
	id: number
}

type ToggleStatusType = (id: number) => ToggleStatusActionType;

export type DeleteTaskActionType = {
	type: typeof DELETE_TASK;
	id: number;
}

type DeleteTaskType = (id: number) => DeleteTaskActionType;


export const addTask: AddTaskType = (body) => ({
	type: ADD_TASK,
	body
});

export const toggleStatus: ToggleStatusType = (id) => ({
	type: TOGGLE_STATUS,
	id
});

export const deleteTask: DeleteTaskType = (id) => ({
	type: DELETE_TASK,
	id
});