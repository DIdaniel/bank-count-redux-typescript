import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux";

export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector;
