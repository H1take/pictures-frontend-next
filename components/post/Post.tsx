"use client";
import { useState, useEffect } from "react";
import {Box, Text, Button, Image} from "@chakra-ui/react";

const Post = () => {
    const [isShowMore, setIsShowMore] = useState<boolean>(false);
    const [lines, setLines] = useState<number | undefined>(3);

    const changeShowStatus = () => {
        setIsShowMore(!isShowMore);
        if (isShowMore) {
            setLines(3)
        } else {
            setLines(undefined)
        }
    }

    return(
        <Box width={"1300px"} height={"auto"} borderRadius={"1.5rem"} boxShadow={"4px 4px 36px 0px rgba(34, 60, 80, 0.2)"}>
            <Box>
                <Image width={"100%"} borderRadius={"1.5rem 1.5rem 0 0"} height={300} src={"https://thumbs.dreamstime.com/b/morning-fog-3410397.jpg"} alt={"photo"} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} padding={5}>
                <Box display={"flex"} gap={3} alignItems={"center"} justifyContent={"flex-start"}>
                    <Text fontSize={"30px"}>title</Text>
                    {!isShowMore ? <Button onClick={changeShowStatus}>Читать</Button> : <Button onClick={changeShowStatus}>Свернуть</Button>}
                </Box>
                <Box>
                    <Text noOfLines={lines}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Post;