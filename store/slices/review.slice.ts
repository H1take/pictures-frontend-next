import {createSlice} from "@reduxjs/toolkit";
import {IReviewList} from "@/store/services/review";
import {getReviews} from "@/store/actions/review.action";

interface IInitialState {
    reviews: IReviewList;
}

const initialState: IInitialState = {
    reviews: []
}

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
        })
    }
});

export default reviewSlice.reducer;