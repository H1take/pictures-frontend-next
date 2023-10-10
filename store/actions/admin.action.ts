import {createAsyncThunk} from "@reduxjs/toolkit";
import {AdminApi, IAdminLogin} from "@/store/services/admin";

const adminApi = AdminApi.getInstance();

export const login = createAsyncThunk('login/admin', async (data: IAdminLogin, thunkAPI) => {
    const response = await adminApi.login(data);
    return response;
});

export const updateAdmin = createAsyncThunk('update/admin', async (data: any, thunkAPI) => {
    const response = await adminApi.updateAdmin(data);
    return response;
});

export const getAdminInfo = createAsyncThunk('get/admin', async (_, thunkAPI) => {
    const response = await adminApi.getAdminInfo();
    return response;
});