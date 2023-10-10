"use client";
import {useCallback, useState} from "react";
import {Box, Button, Input, Textarea} from "@chakra-ui/react";
import UploadImage from "@/components/images/UploadImage";
import {useActions, useAppSelector} from "@/store/store";
import {RootState} from "@/store/type";

const CreateReviews = () => {
    const [nameValue, setNameValue] = useState<string>("");
    const [reviewText, setReviewText] = useState<string>("");

    const { reviewImages } = useAppSelector((state: RootState) => state.file);
    const { createReview } = useActions();

    const onSubmit = useCallback(() => {
        const data = {
            authorName: nameValue,
            text: reviewText,
            images: reviewImages
        };

        createReview(data);
    }, [nameValue, reviewImages, reviewText])

    return(
        <Box width={["360px", "1300px"]} minHeight={"400px"} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box>
                <UploadImage typeImg={"reviewImages"} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={["350px", "400px"]} padding={10} gap={3}>
                <Input onChange={(e) => setNameValue(e.target.value)} placeholder={"Введите ваше имя"} />
                <Textarea onChange={(e) => setReviewText(e.target.value)} placeholder={"Введите ваше отзыв"} />
            </Box>
            <Box display={"flex"} justifyContent={"flex-start"} padding={10} gap={3}>
                <Button onClick={onSubmit}>Отправить</Button>
            </Box>
        </Box>
    );
};

export default CreateReviews;