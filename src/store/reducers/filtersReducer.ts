import { SET_FILTER } from "../constants/filtersConst";
import { SetFilterActionType } from "../actions/filtersActions";

export const filtersReducer = (state = "all", action: SetFilterActionType) => {
	switch (action.type) {
		case SET_FILTER: {
			return action.filter;
		}

		default: {
			return state;
		}
	}
};