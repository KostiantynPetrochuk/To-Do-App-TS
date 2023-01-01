export type TaskType = {
  id: string;
  body: string;
  isDone: boolean;
};

export type FiltersType = "all" | "active" | "completed";

export type StateType = {
  tasks: Array<TaskType>;
  filters: FiltersType;
};
