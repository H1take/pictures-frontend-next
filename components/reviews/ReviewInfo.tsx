"use client";
import {Box, Image, Text} from "@chakra-ui/react";

const ReviewInfo = ({ authorName, text, images }: { authorName: string; text: string; images: any; }) => {
    return(
        <Box width={"900px"} mt={5} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box display={"flex"} flexDirection={"column"} padding={5}>
                <Text>{authorName}</Text>
                <Text>{text}</Text>
                <Box display={"flex"} gap={3}>
                    {images?.map((image: string, index: number) => (
                        <Image key={index} src={`http://svetlanamuchnova.art:5000/files/${image}`} alt={image} width={"100px"} borderRadius={"1.5rem"} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ReviewInfo;
