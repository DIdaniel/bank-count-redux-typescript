import { ActionTypes } from "./action-types";

interface DepositAction {
  type: ActionTypes.DEPOSIT;
  payload: number;
}

interface WithDrawAction {
  type: ActionTypes.WITHDRAW;
  payload: number;
}

interface Bankrupt {
  type: ActionTypes.BANKRUPT;
}

export type Actions = DepositAction | WithDrawAction | Bankrupt;
