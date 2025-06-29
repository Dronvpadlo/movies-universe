import {useSelector} from "react-redux";
import {store} from "../store.ts";

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();