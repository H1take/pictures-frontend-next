"use client"
import {Box} from "@chakra-ui/react";
import CreatePost from "@/components/post/CreatePost";

const CreatePostLayout = () => {
    return(
        <Box display={"flex"} justifyContent={"center"} mt={10}>
            <CreatePost />
        </Box>
    );
};

export default CreatePostLayout;