import { useState, FormEvent, useCallback, SyntheticEvent } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { addTask } from "../store/actions/tasksActions";
import { selectAllTasks } from "../store/selectors/tasksSelectors";
import { Notice } from "./Notice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { TaskType, StateType } from "../types";

type MessageHandlerReasonType = string | undefined;

type MessageHandlerEventType = Event | SyntheticEvent<Element, Event> | undefined;

const InputForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [openAddSuccess, setOpenAddSuccess] = useState<boolean>(false);
  const [openSaveSuccess, setOpenSaveSuccess] = useState<boolean>(false);
  const [openWarning, setOpenWarning] = useState<boolean>(false);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const taskBody: string = event.currentTarget.body.value.trim();
    if (taskBody.length >= 5 && taskBody.length <= 30) {
      dispatch(addTask(taskBody));
      handleOpenAddSuccess();
    } else {
      handleOpenWarning();
    }

    event.currentTarget.reset();
  }, []);

  const tasksList: Array<TaskType> = useAppSelector((state: StateType) => selectAllTasks(state));

  const storeTasks = { tasks: tasksList };

  const handleSaveTasks = useCallback((): void => {
    try {
      const stateToBeSaved: string = JSON.stringify(storeTasks);
      localStorage.setItem("state", stateToBeSaved);
      handleOpenSaveSuccess();
    } catch (error) {
      console.error(error);
    }
  }, [storeTasks]);

  //--------------messages-add-success-------------------
  const handleOpenAddSuccess = useCallback((): void => {
    setOpenAddSuccess(true);
  }, []);

  const handleCloseAddSuccess = useCallback(
    (event: MessageHandlerEventType, reason: MessageHandlerReasonType) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenAddSuccess(false);
    },
    [],
  );

  //-------------messages-save-success---------------------

  const handleOpenSaveSuccess = useCallback((): void => {
    setOpenSaveSuccess(true);
  }, []);

  const handleCloseSaveSuccess = useCallback(
    (event: MessageHandlerEventType, reason: MessageHandlerReasonType) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenSaveSuccess(false);
    },
    [],
  );

  //--------------warning-message--------------------------
  const handleOpenWarning = useCallback((): void => {
    setOpenWarning(true);
  }, []);

  const handleCloseWarning = useCallback(
    (event: MessageHandlerEventType, reason: MessageHandlerReasonType) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenWarning(false);
    },
    [],
  );

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="outlined-basic" label="New Task" variant="outlined" name="body" fullWidth />
      <Button type="submit" variant="contained" sx={{ marginTop: 50 }}>
        Add
      </Button>
      <Button variant="contained" color="success" onClick={handleSaveTasks}>
        Save
      </Button>

      <Notice
        openNotice={openAddSuccess}
        handleCloseNotice={handleCloseAddSuccess}
        noticeBody="Task successfully added!"
        severity="info"
      />

      <Notice
        openNotice={openSaveSuccess}
        handleCloseNotice={handleCloseSaveSuccess}
        noticeBody="Task successfully saved!"
        severity="success"
      />

      <Notice
        openNotice={openWarning}
        handleCloseNotice={handleCloseWarning}
        noticeBody="The body of the task should be between 5 and 30 characters!"
        severity="warning"
      />
    </Box>
  );
};

export default InputForm;
