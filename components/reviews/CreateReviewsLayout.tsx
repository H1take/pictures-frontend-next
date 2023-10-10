"use client";
import {Box} from "@chakra-ui/react";
import CreateReviews from "@/components/reviews/CreateReviews";

const CreateReviewsLayout = () => {
    return(
        <Box display={"flex"} justifyContent={"center"} ml={["20px", "0px"]} mt={10}>
            <CreateReviews />
        </Box>
    );
};

export default CreateReviewsLayout;