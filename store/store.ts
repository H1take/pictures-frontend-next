//import { bindActionCreators, configureStore } from "@reduxjs/toolkit";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { useMemo } from "react";
//
// export const combineActions = {
//     ...authorActions,
//     ...adminActions,
//     ...postActions,
//     ...reviewActions
// };
//
// export const store = configureStore({
//     reducer: {
//         author: authorReducer,
//         admin: adminReducer,
//         post: postReducer,
//         review: reviewReducer
//     },
// })
//
// export const useAppSelector: TypedUseSelectorHook<RTK.RootState> = useSelector;
//
// export function useAppDispatch() {
//     return useDispatch<RTK.AppDispatch>();
// }
//
// export const useActions = () => {
//     const dispatch = useDispatch();
//     return useMemo(
//         () => bindActionCreators(combineActions, dispatch),
//         [dispatch]
//     );
// };