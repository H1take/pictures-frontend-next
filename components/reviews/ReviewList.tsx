"use client";
import {Box, Heading} from "@chakra-ui/react";
import {useActions, useAppSelector} from "@/store/store";
import {RootState} from "@/store/type";
import {useEffect} from "react";
import ReviewInfo from "@/components/reviews/ReviewInfo";

const ReviewList = () => {

    const { reviews } = useAppSelector((state: RootState) => state.review);
    const { getReviews } = useActions();

    useEffect(() => {
        getReviews();
    }, []);

    return(
        <Box maxWidth={"1300px"}>
            <Box display={"flex"} justifyContent={"center"}>
                <Heading>
                    Список отзывов
                </Heading>
            </Box>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                {reviews.map((review, index) => (<ReviewInfo key={index} authorName={review.authorName} text={review.text} images={review.images} />))}
            </Box>
        </Box>
    );
};

export default ReviewList;