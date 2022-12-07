export type TaskType = {
	id: number;
	body: string;
	status: boolean;
}

export type FiltersType = "all" | "active" | "completed";

export type StateType = {
	tasks: Array<TaskType>;
	filters: FiltersType;
}

