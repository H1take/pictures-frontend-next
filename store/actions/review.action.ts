import {createAsyncThunk} from "@reduxjs/toolkit";
import {IReviewForm, ReviewApi} from "@/store/services/review";

const reviewApi = ReviewApi.getInstance();

export const getReviews = createAsyncThunk('get/reviews', async (_, thunkAPI) => {
    const response = await reviewApi.getReviews();
    return response;
});

export const createReview = createAsyncThunk('post/reviews/new', async (data: IReviewForm, thunkAPI) => {
    const response = await reviewApi.createReview(data);
    return response;
});
//
// export const updatePost = createAsyncThunk('patch/posts/info', async (data: IPost, thunkAPI) => {
//     const response = await postApi.updatePost(data);
//     return response;
// });