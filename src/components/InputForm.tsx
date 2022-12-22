import { FormEvent } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";

import { addTask } from "../store/actions/tasksActions";
import { selectAllTasks } from "../store/selectors/tasksSelectors";
import { Notice } from "./Notice";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { THandleClose } from "./Notice";

import { StateType } from "../types/types";
import { TaskType } from "../types/types";

const InputForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [openAddSuccess, setOpenAddSuccess] = useState<boolean>(false);
  const [openSaveSuccess, setOpenSaveSuccess] = useState<boolean>(false);
  const [openWarning, setOpenWarning] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const taskBody: string = event.currentTarget.body.value.trim();
    if (taskBody.length >= 5 && taskBody.length <= 30) {
      dispatch(addTask(taskBody));
      handleOpenAddSuccess();
    } else {
      handleOpenWarning();
    }

    event.currentTarget.reset();
  };

  const tasksList: Array<TaskType> = useAppSelector((state: StateType) => selectAllTasks((state)));

  const storeTasks = { tasks: tasksList };
  const handleSaveTasks = (): void => {

    try {
      const stateToBeSaved: string = JSON.stringify(storeTasks);
      localStorage.setItem("state", stateToBeSaved);
      handleOpenSaveSuccess();
    } catch (error) {
      console.error(error);
    }
  };
  //--------------messages-add-success-------------------
  const handleOpenAddSuccess = (): void => {
    setOpenAddSuccess(true);
  };

  const handleCloseAddSuccess: THandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAddSuccess(false);
  };
  //-------------messages-save-success---------------------
  const handleOpenSaveSuccess = (): void => {
    setOpenSaveSuccess(true);
  };

  const handleCloseSaveSuccess: THandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSaveSuccess(false);
  };
  //--------------warning-message--------------------------
  const handleOpenWarning = (): void => {
    setOpenWarning(true);
  };

  const handleCloseWarning: THandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWarning(false);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} >
      <TextField
        id="outlined-basic"
        label="New Task"
        variant="outlined"
        name='body'
        fullWidth />
      <Button
        type='submit'
        variant="contained"
        sx={{ marginTop: 50 }}>
        Add
      </ Button>
      <Button
        variant="contained"
        color="success"
        onClick={handleSaveTasks}>
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
    </Box >
  );
};

export default InputForm;