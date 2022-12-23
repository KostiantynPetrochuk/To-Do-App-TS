import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { TaskType } from "../types/types";

type TaskPropType = {
  task: TaskType;
  labelId: string;
  textDecoration: "line-through" | "none";
};

const Task: React.FC<TaskPropType> = (props) => {
  const { task, labelId, textDecoration } = props;

  return (
    <ListItem
      key={task.id}
      data-id={task.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments" data-command="delete">
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} data-command="toggle" dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.isDone || false}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-label": "controlled" }}
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
};

export default Task;
