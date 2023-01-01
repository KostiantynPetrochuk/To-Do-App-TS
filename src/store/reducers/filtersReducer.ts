import { SET_FILTER } from "../constants/filtersConst";
import { SetFilterActionType } from "../actions/filtersActions";
import { FiltersType } from "../../types";

const initialState: FiltersType = "all";

export const filtersReducer = (state = initialState, action: SetFilterActionType) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.filter;
    }

    default: {
      return state;
    }
  }
};
