import { ADD_TASK, DELETE_TASK, TOGGLE_STATUS } from "../constants/tasksConst";
import { TaskType } from "../../types/types";
import {
  AddTaskActionType,
  ToggleStatusActionType,
  DeleteTaskActionType,
} from "../actions/tasksActions";
import { addTask, toggleStatus, deleteTask } from "../actions/tasksActions";

const initialState: Array<TaskType> = [];

type TasksReducerActionTypes =
  | AddTaskActionType
  | ToggleStatusActionType
  | DeleteTaskActionType;

export const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addTask.toString(): {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    }
    case deleteTask.toString(): {
      return state.filter((task: TaskType) => task.id !== action.payload.id);
    }
    case toggleStatus.toString(): {
      return state.map((task: TaskType) =>
        task.id === action.payload.id
          ? {
              ...task,
              status: !task.status,
            }
          : task
      );
    }

    default:
      return state;
  }
};
