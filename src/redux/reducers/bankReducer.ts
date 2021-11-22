import { ActionTypes } from "../action-types/action-types";
import { Actions } from "../action-types";

const stateInit = 0;

const reducer = (state: number = stateInit, action: Actions) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return state + action.payload;
    case ActionTypes.WITHDRAW:
      return state - action.payload;
    case ActionTypes.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default reducer;
