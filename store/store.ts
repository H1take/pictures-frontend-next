import {bindActionCreators, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import * as fileActions from "@/store/actions/file.action";
import * as postActions from "@/store/actions/post.action";
import * as adminActions from "@/store/actions/admin.action";
import * as reviewActions from "@/store/actions/review.action";
import postReducer from "@/store/slices/post.slice";
import fileReducer from "@/store/slices/file.slice";
import adminReducer from "@/store/slices/admin.slice";
import reviewReducer from "@/store/slices/review.slice";
import languageReducer from "@/store/slices/language.slice";

export const combineActions = {
    // ...authorActions,
    // ...adminActions,
    // ...postActions,
    // ...reviewActions
    ...postActions,
    ...fileActions,
    ...adminActions,
    ...reviewActions
};

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        review: reviewReducer,
        post: postReducer,
        file: fileReducer,
        language: languageReducer
    },
})

export const useAppSelector: TypedUseSelectorHook<RTK.RootState> = useSelector;

export function useAppDispatch() {
    return useDispatch<RTK.AppDispatch>();
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(
        () => bindActionCreators(combineActions, dispatch),
        [dispatch]
    );
};