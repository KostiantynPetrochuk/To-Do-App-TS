import { TaskType } from "../types/types";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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
        <IconButton
          edge="end"
          aria-label="comments"
          data-command="delete"
          // onClick={() => dispatch(deleteTask(task.id))}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        data-command="toggle"
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
            // onChange={() => dispatch(toggleStatus(task.id))}
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
};

export default Task;
