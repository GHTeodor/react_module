import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../store/store.config";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
    useAppDispatch,
    useAppSelector
}