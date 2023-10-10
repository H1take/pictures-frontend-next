import {createAsyncThunk} from "@reduxjs/toolkit";
import {IPost, IPostForm, PostApi} from "@/store/services/post";

const postApi = PostApi.getInstance();

export const getPosts = createAsyncThunk('get/posts/category', async (data: string, thunkAPI) => {
    const response = await postApi.getPosts(data);
    return response;
});

export const createPost = createAsyncThunk('post/posts/new', async (data: IPostForm, thunkAPI) => {
    const response = await postApi.createPost(data);
    return response;
});

export const updatePost = createAsyncThunk('patch/posts/info', async (data: IPost, thunkAPI) => {
    const response = await postApi.updatePost(data);
    return response;
});