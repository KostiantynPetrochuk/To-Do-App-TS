import { SET_FILTER } from "../constants/filtersConst";
import { setFilter } from "../actions/filtersActions";
import { ActiveFilterType, FiltersType } from "../../types";
import { createReducer } from "@reduxjs/toolkit";

const initialState: ActiveFilterType = { filter: "all" };

type FiltersReducerActionType = {
  payload: {
    filter: FiltersType;
  };
  type: typeof SET_FILTER;
};

export const filtersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFilter, (_state: ActiveFilterType, action: FiltersReducerActionType) => {
    return action.payload;
  });
});
