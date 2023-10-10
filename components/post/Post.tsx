"use client";
import {useState} from "react";
import {Box, Button, Image, Text} from "@chakra-ui/react";
import {useAppSelector} from "@/store/store";
import {RootState} from "@/store/type";

const Post = ({ titleRu, titleEng, textRu, textEng, titleImage, images } : { titleRu: string; titleEng: string; textRu: string; textEng: string; titleImage: string; images: string[] }) => {
    const [isShowMore, setIsShowMore] = useState<boolean>(false);
    const [lines, setLines] = useState<number | undefined>(3);

    const { language } = useAppSelector((state: RootState) => state.language);

    const changeShowStatus = () => {
        setIsShowMore(!isShowMore);
        if (isShowMore) {
            setLines(3)
        } else {
            setLines(undefined)
        }
    }

    return(
        <Box width={["300px", "1300px"]} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box>
                <Image width={"100%"} borderRadius={"1.5rem 1.5rem 0 0"} height={300} src={`http://localhost:5000/files/${titleImage}`} alt={"photo"} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} padding={5}>
                <Box display={"flex"} gap={3} alignItems={"center"} justifyContent={"flex-start"}>
                    <Text fontSize={"30px"}>{language === "ru" ? titleRu : titleEng}</Text>
                    {!isShowMore ? <Button onClick={changeShowStatus}>Читать</Button> : <Button onClick={changeShowStatus}>Свернуть</Button>}
                </Box>
                <Box>
                    <Text noOfLines={lines}>{language === "ru" ? textRu : textEng}</Text>
                    <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={3}>
                        {images?.map((image: string, index: number) => (<Image borderRadius={"1.5rem"} width={["350px", "550px"]} key={index} src={`http://localhost:5000/files/${image}`} alt={"photo"} />))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Post;