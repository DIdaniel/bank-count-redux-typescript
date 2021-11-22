import { Dispatch } from "redux";
import { Actions } from "../action-types";
import { ActionTypes } from "./../action-types/action-types";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.BANKRUPT,
    });
  };
};
