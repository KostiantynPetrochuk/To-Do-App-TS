import { TaskType, StateType, FiltersType } from "../../types";

export const selectAllTasks = (state: StateType) => state.tasks;

export const selectActiveTasks = (state: StateType) =>
  state.tasks.filter((task: TaskType) => !task.isDone);

export const selectVisibleTasks = (state: StateType, filter: FiltersType) => {
  switch (filter) {
    case "all": {
      return state.tasks;
    }
    case "active": {
      return state.tasks.filter((task: TaskType) => !task.isDone);
    }
    case "completed": {
      return state.tasks.filter((task: TaskType) => task.isDone);
    }

    default: {
      return state.tasks;
    }
  }
};
