import { SET_FILTER } from "../constants/filtersConst";
import { FiltersType } from "../../types";

export type SetFilterActionType = {
  type: typeof SET_FILTER;
  filter: FiltersType;
};

type SetFilterType = (filter: FiltersType) => SetFilterActionType;

export const setFilter: SetFilterType = (filter) => ({
  type: SET_FILTER,
  filter,
});
