import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";

import { selectVisibleTasks } from "../store/selectors/tasksSelectors";
import { selectActiveFilter } from "../store/selectors/filterSelectors";
import { deleteTask, toggleStatus } from "../store/actions/tasksActions";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert } from "./Notice";

import { FiltersType, TaskType } from "../types/types";

import { StateType } from "../types/types";

const TasksList: React.FC = () => {
  //   const [checked, setChecked] = useState<Array<number>>([0]);

  //   const handleToggle = (value: number) => () => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //       newChecked.push(value);
  //     } else {
  //       newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  //   };
  //-----

  const dispatch = useAppDispatch();
  const activeFilter: FiltersType = useAppSelector(selectActiveFilter);
  const tasksList: Array<TaskType> = useAppSelector((state: StateType) =>
    selectVisibleTasks(state, activeFilter)
  );

  if (tasksList.length > 0) {
    return (
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {tasksList.map((task: TaskType) => {
          const labelId: string = `checkbox-list-label-${task.id}`;

          const textDecoration = task.status ? "line-through" : "none";

          return (
            <ListItem
              key={task.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                // onClick={handleToggle(task.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.status || false}
                    tabIndex={-1}
                    disableRipple
                    // inputProps={{ "aria-labelledby": labelId }}
                    inputProps={{ "aria-label": "controlled" }}
                    onChange={() => dispatch(toggleStatus(task.id))}
                    // onClick={() => dispatch(toggleStatus(task.id))}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`${task.body}`}
                  sx={{ textDecoration: textDecoration }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
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
