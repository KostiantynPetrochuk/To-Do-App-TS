import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";
import { TaskType } from "../../types/types";
import { AddTaskActionType, ToggleStatusActionType, DeleteTaskActionType } from "../actions/tasksActions";

const initialState: Array<TaskType> = [];

type TasksReducerActionTypes = AddTaskActionType | ToggleStatusActionType | DeleteTaskActionType;

export const tasksReducer = (state = initialState, action: TasksReducerActionTypes) => {
	switch (action.type) {
		case ADD_TASK: {
			return [
				...state,
				{
					id: Date.now(),
					body: action.body,
					status: false
				}
			]
		}
		case DELETE_TASK: {
			return state.filter((task: TaskType) => task.id !== action.id);
		}
		case TOGGLE_STATUS: {
			return state.map((task: TaskType) => (
				task.id === action.id
					? {
						...task,
						status: !task.status,
					} : task
			))
		}

		default:
			return state;
	}
};