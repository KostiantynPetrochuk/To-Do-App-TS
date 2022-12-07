import { Ttask } from "../../types/types";

export const selectAllTasks = state => state.tasks;

export const selectActiveTasks = state => state.tasks.filter((task: Ttask) => !task.status);

export const selectVisibleTasks = (state, filter: string) => {
	switch (filter) {
		case "all": {
			return state.tasks;
		}
		case "active": {
			return state.tasks.filter((task: Ttask) => !task.status);
		}
		case "completed": {
			return state.tasks.filter((task: Ttask) => task.status);
		}

		default: {
			return state.tasks;
		}
	}
}