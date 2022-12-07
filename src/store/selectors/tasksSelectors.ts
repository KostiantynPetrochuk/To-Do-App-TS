import { TaskType } from "../../types/types";
import { StateType } from "../../types/types";
import { FiltersType } from "../../types/types";


export const selectAllTasks = (state: StateType) => state.tasks;

export const selectActiveTasks = (state: StateType) => state.tasks.filter((task: TaskType) => !task.status);

export const selectVisibleTasks = (state: StateType, filter: FiltersType) => {
	switch (filter) {
		case "all": {
			return state.tasks;
		}
		case "active": {
			return state.tasks.filter((task: TaskType) => !task.status);
		}
		case "completed": {
			return state.tasks.filter((task: TaskType) => task.status);
		}

		default: {
			return state.tasks;
		}
	}
}