"use client";
import {Box} from "@chakra-ui/react";
import ReviewList from "@/components/reviews/ReviewList";

const ReviewListLayout = () => {
    return(
        <Box display={"flex"} justifyContent={"center"} mt={10}>
            <ReviewList />
        </Box>
    );
};

export default ReviewListLayout;