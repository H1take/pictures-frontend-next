import {FileApi} from "@/store/services/file";
import {createAsyncThunk} from "@reduxjs/toolkit";

const fileApi = FileApi.getInstance();

export const uploadImage = createAsyncThunk('post/file', async (data: any, thunkAPI) => {
    const response = await fileApi.uploadFile(data.file, data.typeImg);
    return response;
});