import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../redux";

export const useActionHook = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreator, dispatch);
};
