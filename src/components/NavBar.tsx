import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";

import { useAppDispatch } from "../hooks";
import { setFilter } from "../store/actions/filtersActions";

const NavBar: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (event: React.SyntheticEvent<Element, Event>, newValue: number): void => {
      setValue(newValue);
    },
    []
  );

  const handleShowAllTasks = useCallback(() => {
    dispatch(setFilter("all"));
  }, []);

  const handleShowActiveTasks = useCallback(() => {
    dispatch(setFilter("active"));
  }, []);

  const handleShowCompletedTasks = useCallback(() => {
    dispatch(setFilter("completed"));
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Divider />
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab onClick={handleShowAllTasks} label="All" />
        <Tab onClick={handleShowActiveTasks} label="Active" />
        <Tab onClick={handleShowCompletedTasks} label="Completed" />
      </Tabs>
      <Divider />
    </Box>
  );
};

export default NavBar;
