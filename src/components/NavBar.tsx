import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";

import { useState } from "react";
import { useAppDispatch } from "../hooks";

import { setFilter } from "../store/actions/filtersActions";

const NavBar: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number
  ): void => {
    setValue(newValue);
  };

  const dispatch = useAppDispatch();

  return (
    <Box sx={{ width: "100%" }}>
      <Divider />
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab onClick={() => dispatch(setFilter("all"))} label="All" />
        <Tab onClick={() => dispatch(setFilter("active"))} label="Active" />
        <Tab
          onClick={() => dispatch(setFilter("completed"))}
          label="Completed"
        />
      </Tabs>
      <Divider />
    </Box>
  );
};

export default NavBar;
