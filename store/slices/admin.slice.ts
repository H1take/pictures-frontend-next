import {createSlice} from "@reduxjs/toolkit";
import {getAdminInfo, login} from "@/store/actions/admin.action";

interface IInitialState {
    admin: {
        name: string;
        login: string;
        about: string;
        photo: string;
    }
    isLoggedIn: boolean;
}

const initialState: IInitialState = {
    admin: {
        name: "",
        login: "",
        about: "",
        photo: ""
    },
    isLoggedIn: false
}

const adminSlice = createSlice({
    name: "adminSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.admin = action.payload;
            state.isLoggedIn = true;
        }),
        builder.addCase(getAdminInfo.fulfilled, (state, action) => {
            state.admin = action.payload;
        })
    }
});

export default adminSlice.reducer;