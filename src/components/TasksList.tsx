import { useCallback } from "react";

import List from "@mui/material/List";

import { useAppDispatch, useAppSelector } from "../hooks";
import { selectVisibleTasks } from "../store/selectors/tasksSelectors";
import { selectActiveFilter } from "../store/selectors/filterSelectors";
import { deleteTask, toggleStatus } from "../store/actions/tasksActions";
import { Alert } from "./Notice";
import { FiltersType, TaskType, StateType } from "../types/types";
import Task from "./Task";

const TasksList: React.FC = () => {
  const dispatch = useAppDispatch();
  const activeFilter: FiltersType = useAppSelector(selectActiveFilter);
  const tasksList: Array<TaskType> = useAppSelector((state: StateType) =>
    selectVisibleTasks(state, activeFilter),
  );

  const handleDeleteTask = useCallback((id: string) => {
    dispatch(deleteTask(id));
  }, []);

  const handleToggleTaskStatus = useCallback((id: string) => {
    dispatch(toggleStatus(id));
  }, []);

  const handleListClick = useCallback((event: React.MouseEvent) => {
    const targetTaskId = getId(event.target as HTMLElement);
    const targetCommand = getCommand(event.target as HTMLElement);
    switch (targetCommand) {
      case "toggle":
        handleToggleTaskStatus(targetTaskId);
        break;
      case "delete":
        handleDeleteTask(targetTaskId);
        break;
    }
  }, []);

  const listItems = tasksList.map((task) => {
    const labelId = `checkbox-list-label-${task.id}`;
    const textDecoration = task.isDone ? "line-through" : "none";

    return <Task key={task.id} task={task} labelId={labelId} textDecoration={textDecoration} />;
  });

  if (tasksList.length > 0) {
    return (
      <List sx={{ width: "100%", bgcolor: "background.paper" }} onClick={handleListClick}>
        {listItems}
      </List>
    );
  } else {
    return (
      <Alert sx={{ marginTop: 5 }} severity="info">
        There is no task here!
      </Alert>
    );
  }
};

export default TasksList;
//---

//helpers
const getId = (target: HTMLElement): string => {
  const element = target;
  const elementId = element.dataset.id;

  if (elementId) {
    return elementId;
  }
  return getId(element.parentNode as HTMLElement);
};
//---
const getCommand = (target: HTMLElement): string => {
  const element = target;
  const elementCommand = element.dataset.command;

  if (elementCommand) {
    return elementCommand;
  }
  return getCommand(element.parentNode as HTMLElement);
};
//---
