"use client";
import {useEffect} from "react";
import {Box} from "@chakra-ui/react";
import {useActions, useAppSelector} from "@/store/store";
import {RootState} from "@/store/type";
import Post from "@/components/post/Post";

const EventsList = () => {
    const { posts } = useAppSelector((state: RootState) => state.post);
    const { getPosts } = useActions();

    useEffect(() => {
        getPosts("events");
    }, []);

    return(
        <Box mt={5} display={"flex"} flexDirection={"column"} gap={3}>
            {posts.map((post, index) => (
                <Post key={index} titleRu={post.titleRu} titleEng={post.titleEng} images={post.images} titleImage={post.imageTitle} textRu={post.textRu} textEng={post.textEng} />
            ))}
        </Box>
    );
};

export default EventsList;