import { FiltersType, StateType } from "../../types/types";

export const selectActiveFilter = (state: StateType): FiltersType => state.filters;

