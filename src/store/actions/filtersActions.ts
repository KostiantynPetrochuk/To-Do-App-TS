import { SET_FILTER } from "../constants/filtersConst";

export const setFilter = (filter: string) => ({
	type: SET_FILTER,
	filter
});