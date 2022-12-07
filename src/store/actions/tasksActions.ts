import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";

export const addTask = (body: string) => ({
	type: ADD_TASK,
	body
});

export const toggleStatus = (id: number) => ({
	type: TOGGLE_STATUS,
	id
});

export const deleteTask = (id: number) => ({
	type: DELETE_TASK,
	id
});