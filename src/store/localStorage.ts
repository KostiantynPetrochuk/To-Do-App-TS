import { TaskType } from "../types/types";

type LoadStateReturnType = {
	tasks: Array<TaskType>;
}

export const loadState = (): LoadStateReturnType => {
	try {
		const savedState: string | null = localStorage.getItem("state");

		if (savedState === null) {
			return { tasks: [] };
		}

		return JSON.parse(savedState);

	} catch (error) {
		console.log(error);
		return { tasks: [] };
	}
};