import { FiltersType, StateType } from "../../types";

export const selectActiveFilter = (state: StateType): FiltersType => state.filters;
