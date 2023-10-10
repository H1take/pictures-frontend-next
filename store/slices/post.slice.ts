import {createSlice} from "@reduxjs/toolkit";
import {IPost, IPostResponse} from "@/store/services/post";
import {createPost, getPosts} from "@/store/actions/post.action";

interface IInitialState {
    post: IPost;
    posts: IPostResponse;
}

const initialState: IInitialState = {
    post: {
        id: 0,
        titleRu: '',
        titleEng: '',
        textEng: '',
        textRu: '',
        imageTitle: "",
        category: "",
        images: []
    },
    posts: []
}

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        }),
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.post = action.payload;
        })
    }
});

export default postSlice.reducer;
