import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {uploadImage} from "@/store/actions/file.action";

interface IInitialState {
    titleImage: string,
    images: any[],
    photo: string,
    reviewImages: string[]
}

const initialState: IInitialState = {
    titleImage: "",
    images: [],
    photo: "",
    reviewImages: []
}

const fileSlice = createSlice({
    name: "fileSlice",
    initialState,
    reducers: {
        deleteImage(state, action) {
            if (action.payload.typeImg === "images") {
                state.images = state.images.filter(img => img !== action.payload.image);
            } else if (action.payload.typeImg === "titleImage") {
                state.titleImage = "";
            } else if (action.payload.typeImg === "photo") {
                state.photo = "";
            } else if (action.payload.typeImg === "reviewImages") {
                state.reviewImages = state.reviewImages.filter(img => img !== action.payload.image);
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(uploadImage.fulfilled, (state, action: PayloadAction<{file: string; typeImg: string }>) => {
            if (action.payload.typeImg === "titleImage") {
                state.titleImage = action.payload.file;
            } else if (action.payload.typeImg === "images") {
                state.images.push(action.payload.file as never)
            } else if (action.payload.typeImg === "photo") {
                state.photo = action.payload.file;
            } else if (action.payload.typeImg === "reviewImages") {
                state.reviewImages.push(action.payload.file as never)
            }
        })
    }
});

export const { deleteImage } = fileSlice.actions;
export default fileSlice.reducer;