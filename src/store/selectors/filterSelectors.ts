import { ActiveFilterType, StateType } from "../../types";

export const selectActiveFilter = (state: StateType): ActiveFilterType => state.filters;
