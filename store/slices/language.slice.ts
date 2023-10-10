import {createSlice} from "@reduxjs/toolkit";

interface IInitialState {
    language: string;
}

const initialState: IInitialState = {
    language: "ru"
}

const languageSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    },
});

export const {changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;