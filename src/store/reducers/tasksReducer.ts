import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";

import { Ttask } from "../../types/types";

export const tasksReducer = (state = [], action) => { //reducer
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
			return state.filter((task: Ttask) => task.id !== action.id);
		}
		case TOGGLE_STATUS: {
			return state.map((task: Ttask) => (
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