import { SET_FILTER } from "../constants/filtersConst";
import { FiltersType } from "../../types";
import { createAction } from "@reduxjs/toolkit";

export type SetFilterActionType = {
  payload: {
    filter: FiltersType;
  };
};

export const setFilter = createAction(SET_FILTER, (filter: FiltersType) => ({
  payload: {
    filter,
  },
}));

